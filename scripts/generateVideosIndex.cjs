const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const metadataFile = path.join(videosDir, 'metadata.json');
const outputFile = path.join(__dirname, '../src/data/videos.json');

const videoExtensions = ['.mp4', '.webm', '.mov'];

function generateIndex() {
  console.log('Scanning videos in:', videosDir);
  
  if (!fs.existsSync(videosDir)) {
    console.error('Videos directory not found!');
    process.exit(1);
  }

  // Load metadata if it exists
  let metadata = [];
  if (fs.existsSync(metadataFile)) {
    try {
      metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
      console.log('Found metadata.json, using custom settings.');
    } catch (e) {
      console.error('Error parsing metadata.json:', e.message);
    }
  }

  const files = fs.readdirSync(videosDir);
  const videos = files
    .filter(file => videoExtensions.includes(path.extname(file).toLowerCase()))
    .map((file, index) => {
      const nameWithoutExt = path.parse(file).name;
      
      // Look for this file in metadata
      const meta = metadata.find(m => m.filename === file);
      
      // Default logic if no metadata found
      let category = 'General';
      if (file.toLowerCase().includes('social')) category = 'Social Media';
      else if (file.toLowerCase().includes('campaign')) category = 'Campaigns';
      else if (file.toLowerCase().includes('edit')) category = 'Editing';
      else if (file.toLowerCase().includes('brand')) category = 'Branding';
      else if (file.toLowerCase().includes('prod')) category = 'Production';

      return {
        id: meta?.id || (index + 1).toString(),
        filename: file,
        src: `videos/${file}`,
        title: meta?.title || nameWithoutExt.replace(/[_-]/g, ' '),
        category: meta?.category || category,
        order: meta?.order !== undefined ? meta.order : 999, // Push unordered to the end
        duration: meta?.duration || '0:00'
      };
    });

  // Sort by order
  videos.sort((a, b) => a.order - b.order);

  fs.writeFileSync(outputFile, JSON.stringify(videos, null, 2));
  console.log(`Generated ${videos.length} video entries in ${outputFile}`);
}

generateIndex();
