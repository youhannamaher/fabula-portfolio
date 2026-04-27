const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const outputFile = path.join(__dirname, '../src/data/videos.json');

const videoExtensions = ['.mp4', '.webm', '.mov'];

function generateIndex() {
  console.log('Scanning videos in:', videosDir);
  
  if (!fs.existsSync(videosDir)) {
    console.error('Videos directory not found!');
    process.exit(1);
  }

  const files = fs.readdirSync(videosDir);
  const videos = files
    .filter(file => videoExtensions.includes(path.extname(file).toLowerCase()))
    .map((file, index) => {
      const nameWithoutExt = path.parse(file).name;
      // Simple logic to guess category from filename (e.g. "Social_Media_Project.mp4")
      let category = 'General';
      if (file.toLowerCase().includes('social')) category = 'Social Media';
      else if (file.toLowerCase().includes('campaign')) category = 'Campaigns';
      else if (file.toLowerCase().includes('edit')) category = 'Editing';
      else if (file.toLowerCase().includes('brand')) category = 'Branding';
      else if (file.toLowerCase().includes('prod')) category = 'Production';

      return {
        id: (index + 1).toString(),
        filename: file,
        src: `/videos/${file}`,
        title: nameWithoutExt.replace(/[_-]/g, ' '),
        category: category,
        duration: '0:00' // Placeholder
      };
    });

  fs.writeFileSync(outputFile, JSON.stringify(videos, null, 2));
  console.log(`Generated ${videos.length} video entries in ${outputFile}`);
}

generateIndex();
