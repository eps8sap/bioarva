const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const assetsDir = path.join(__dirname, '../../assets/icons/concepts');
const outputDir = path.join(__dirname, '../public/icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Icon definitions - 4 columns x 2 rows per grid
const iconSets = [
  {
    file: 'medallions-nav.png',
    icons: [
      'seed', 'worm', 'soil-layers', 'compost',
      'tools', 'tech-sensor', 'book-plant', 'microscope'
    ]
  },
  {
    file: 'medallions-brass.png',
    icons: [
      'kale', 'cabbage', 'broccoli', 'cauliflower',
      'brussels-sprouts', 'kohlrabi', 'bok-choy', 'mustard-green'
    ]
  },
  {
    file: 'medallions-ui-v2.png',
    icons: [
      'molecule-leaf', 'planner-grid', 'calendar-seedling', 'flask-plant',
      'wheelbarrow', 'magnifier-leaf', 'envelope-sprout', 'gift-botanical'
    ]
  }
];

async function splitIcons() {
  for (const set of iconSets) {
    const inputPath = path.join(assetsDir, set.file);

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${set.file} - file not found`);
      continue;
    }

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    const cols = 4;
    const rows = 2;
    const iconWidth = Math.floor(metadata.width / cols);
    const iconHeight = Math.floor(metadata.height / rows);

    console.log(`Processing ${set.file}: ${metadata.width}x${metadata.height}, icon size: ${iconWidth}x${iconHeight}`);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        const iconName = set.icons[index];

        const left = col * iconWidth;
        const top = row * iconHeight;

        const outputPath = path.join(outputDir, `${iconName}.png`);

        await sharp(inputPath)
          .extract({
            left,
            top,
            width: iconWidth,
            height: iconHeight
          })
          .png()
          .toFile(outputPath);

        console.log(`  Extracted: ${iconName}.png`);
      }
    }
  }

  console.log('\nDone! Icons saved to public/icons/');
}

splitIcons().catch(console.error);
