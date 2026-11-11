const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const metadataFile = path.join(videosDir, 'metadata.json');
const outputFile = path.join(__dirname, '../src/data/videos.json');

const videoExtensions = ['.mp4', '.webm', '.mov'];

function parseJsonSafe(rawText) {
  // Strip accidental trailing commas before ] or } from manual web edits
  const cleaned = rawText.replace(/,\s*([\]}])/g, '$1');
  return JSON.parse(cleaned);
}

function generateIndex() {
  console.log('Scanning videos in:', videosDir);

  if (!fs.existsSync(videosDir)) {
    console.error('Videos directory not found!');
    process.exit(1);
  }

  // 1. Load current metadata if it exists
  let metadata = [];
  if (fs.existsSync(metadataFile)) {
    try {
      const raw = fs.readFileSync(metadataFile, 'utf8');
      metadata = parseJsonSafe(raw);
      if (!Array.isArray(metadata)) {
        throw new Error('metadata.json must contain a JSON array.');
      }
    } catch (e) {
      console.error('Error parsing public/videos/metadata.json:', e.message);
      process.exit(1);
    }
  }

  // 2. Scan actual files on disk
  const filesOnDisk = fs.readdirSync(videosDir).filter((file) =>
    videoExtensions.includes(path.extname(file).toLowerCase())
  );

  // Map NFC-normalized filenames to exact disk filenames
  const diskByNormalized = new Map();
  filesOnDisk.forEach((file) => {
    diskByNormalized.set(file.normalize('NFC'), file);
  });

  // 3. Sync metadata with disk
  let metadataChanged = false;
  let syncedMetadata = [];

  metadata.forEach((m) => {
    if (!m || !m.filename) return;
    const exactOrNorm = filesOnDisk.includes(m.filename)
      ? m.filename
      : diskByNormalized.get(m.filename.normalize('NFC'));

    if (exactOrNorm) {
      if (exactOrNorm !== m.filename) metadataChanged = true;
      syncedMetadata.push({
        ...m,
        filename: exactOrNorm,
      });
    } else {
      console.warn(`Video file missing on disk, skipping: ${m.filename}`);
      metadataChanged = true;
    }
  });

  // Add new files on disk that aren't in metadata yet
  filesOnDisk.forEach((file) => {
    const normFile = file.normalize('NFC');
    const exists = syncedMetadata.some(
      (m) => m.filename === file || m.filename.normalize('NFC') === normFile
    );
    if (!exists) {
      const nameWithoutExt = path.parse(file).name;
      syncedMetadata.push({
        filename: file,
        title: nameWithoutExt.replace(/[_-]/g, ' '),
        category: 'Branding',
        project: 'Williams Art',
        views: '',
        order: syncedMetadata.length + 1,
      });
      metadataChanged = true;
    }
  });

  // 4. Sort synced metadata by order
  syncedMetadata.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

  // 5. Update metadata.json only when disk files changed
  if (metadataChanged) {
    fs.writeFileSync(metadataFile, JSON.stringify(syncedMetadata, null, 2) + '\n');
    console.log('Synchronized metadata.json with files on disk.');
  }

  // 6. Build the final videos.json for the app
  const finalVideos = syncedMetadata.map((m, index) => ({
    id: (index + 1).toString(),
    filename: m.filename,
    src: `videos/${m.filename}`,
    title: (m.title || path.parse(m.filename).name).trim(),
    category: (m.category || 'Branding').trim(),
    project: (m.project || 'General').trim(),
    views: (m.views || '').trim(),
    order: m.order || index + 1,
    duration: m.duration || '0:00',
  }));

  fs.writeFileSync(outputFile, JSON.stringify(finalVideos, null, 2) + '\n');
  console.log(`Generated ${finalVideos.length} video entries in ${outputFile}`);
}

generateIndex();
