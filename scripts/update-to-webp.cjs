const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src');

const filesToProcess = [];

function getTsxFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getTsxFiles(full);
    } else if (entry.isFile() && /\.tsx?$/.test(entry.name)) {
      filesToProcess.push(full);
    }
  }
}

getTsxFiles(SRC_DIR);

let totalReplacements = 0;

for (const file of filesToProcess) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace image extensions to .webp (exclude logo.png and favicon)
  // Matches strings like "/homepage-banner-kkr-construction-developers.png"
  content = content.replace(/(['"])([^'"]+?)(-(?:kkr-construction|kkr-constructions|developer|developers)[^'"]*?)\.png\1/gi, (match, quote, prefix, middle) => {
    return `${quote}${prefix}${middle}.webp${quote}`;
  });

  // Also replace any specific images in whychoose or services or mivan
  content = content.replace(/(['"]\/images\/(?:mivan|services|whychoose)\/[^'"]+?)\.png\1/gi, (match, p1) => {
    return `${p1}.webp${match.slice(-1)}`;
  });

  // Also check team images .jpeg -> .webp
  content = content.replace(/(['"]\/team\/[^'"]+?)\.jpeg\1/gi, (match, p1) => {
    return `${p1}.webp${match.slice(-1)}`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    totalReplacements++;
    console.log(`Updated images to .webp in: ${path.relative(SRC_DIR, file)}`);
  }
}

console.log(`Finished! Updated ${totalReplacements} files.`);
