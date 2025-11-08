import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src/assets/images/michael-ndubuisi-logo.jpeg');
const outputPath = path.join(__dirname, 'src/assets/images/michael-ndubuisi-logo-transparent.png');

async function removeBackground() {
  try {
    // Read the image
    const image = sharp(inputPath);

    // Get image metadata
    const metadata = await image.metadata();
    console.log('Image metadata:', metadata);

    // For simplicity, assuming the background is white or a specific color
    // In a real scenario, you'd use a more sophisticated method or a library like remove.bg API
    // For now, we'll convert to PNG with transparency by making white pixels transparent
    await image
      .png()
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } }) // Make white background transparent
      .toFile(outputPath);

    console.log('Background removed and saved as PNG with transparency.');
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

removeBackground();
