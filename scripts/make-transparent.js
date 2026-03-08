const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const iconsDir = path.join(__dirname, '../public/icons');

// Target the cream/bone-white background color to make transparent
// The background appears to be around #E8E5DF to #F0EDEA range

async function makeTransparent() {
  const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.png'));

  for (const file of files) {
    const inputPath = path.join(iconsDir, file);
    const tempPath = path.join(iconsDir, `temp_${file}`);

    try {
      // Read the image
      const image = sharp(inputPath);
      const { width, height, channels } = await image.metadata();

      // Get raw pixel data
      const { data, info } = await image
        .raw()
        .toBuffer({ resolveWithObject: true });

      // Create new buffer with alpha based on color
      const newData = Buffer.alloc(width * height * 4);

      for (let i = 0; i < width * height; i++) {
        const offset = i * channels;
        const newOffset = i * 4;

        const r = data[offset];
        const g = data[offset + 1];
        const b = data[offset + 2];
        const a = channels === 4 ? data[offset + 3] : 255;

        // Check if pixel is close to the cream background color
        // Background is approximately #E8E5DF to #F5F3EF (cream/bone-white)
        const isBackground = (
          r > 200 && r < 255 &&
          g > 200 && g < 255 &&
          b > 200 && b < 255 &&
          Math.abs(r - g) < 15 &&
          Math.abs(g - b) < 15
        );

        newData[newOffset] = r;
        newData[newOffset + 1] = g;
        newData[newOffset + 2] = b;
        newData[newOffset + 3] = isBackground ? 0 : a;
      }

      // Write the new image
      await sharp(newData, {
        raw: {
          width,
          height,
          channels: 4
        }
      })
        .png()
        .toFile(tempPath);

      // Replace original
      fs.renameSync(tempPath, inputPath);
      console.log(`Processed: ${file}`);

    } catch (err) {
      console.error(`Error processing ${file}:`, err.message);
    }
  }

  console.log('\nDone! Backgrounds made transparent.');
}

makeTransparent().catch(console.error);
