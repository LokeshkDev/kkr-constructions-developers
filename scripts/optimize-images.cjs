const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
      // Don't convert logo or favicon
      if (entry.name === 'logo.png' || entry.name.includes('favicon')) {
        continue;
      }

      const ext = path.extname(entry.name);
      const baseName = path.basename(entry.name, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      const origStats = fs.statSync(fullPath);
      const origSizeMb = (origStats.size / (1024 * 1024)).toFixed(2);

      try {
        // Generate WebP with high quality & optimal compression
        const image = sharp(fullPath);
        const metadata = await image.metadata();

        // Max width 1920 for full banners, 1200 for standard content
        let transform = image;
        if (metadata.width && metadata.width > 1920) {
          transform = transform.resize({ width: 1920, withoutEnlargement: true });
        }

        await transform
          .webp({ quality: 82, effort: 4 })
          .toFile(webpPath);

        const newStats = fs.statSync(webpPath);
        const newSizeKb = (newStats.size / 1024).toFixed(1);
        const savingsPct = (((origStats.size - newStats.size) / origStats.size) * 100).toFixed(1);

        console.log(`✓ ${entry.name}: ${origSizeMb} MB -> ${newSizeKb} KB (${savingsPct}% saved)`);
      } catch (err) {
        console.error(`✗ Error processing ${entry.name}:`, err.message);
      }
    }
  }
}

async function run() {
  console.log('Starting image optimization across public/ ...');
  await processDirectory(PUBLIC_DIR);
  console.log('Optimization complete!');
}

run();
