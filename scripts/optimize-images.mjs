import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(process.cwd(), "public/images");
const outputDir = path.join(process.cwd(), "public/images/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to recursively find all files in a directory
function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const allImagePaths = getAllFiles(inputDir);

allImagePaths.forEach(inputPath => {
  // Only process standard image formats and skip already optimized images
  if (!inputPath.match(/\.(jpg|jpeg|png)$/i) || inputPath.includes('optimized')) {
    return;
  }

  // Get the relative path from the input directory
  const relativePath = path.relative(inputDir, inputPath);
  
  // Create matching directory structure in output dir
  const outputSubDir = path.join(outputDir, path.dirname(relativePath));
  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }

  const filename = path.basename(relativePath);
  const outputPathWebp = path.join(outputSubDir, filename.replace(/\.[^.]+$/, ".webp"));
  const outputPathAvif = path.join(outputSubDir, filename.replace(/\.[^.]+$/, ".avif"));

  sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPathWebp)
    .then(() => console.log(`Optimized ${relativePath} → WebP`))
    .catch(err => console.error(`Error optimizing ${relativePath} to WebP:`, err));

  sharp(inputPath)
    .avif({ quality: 50 })
    .toFile(outputPathAvif)
    .then(() => console.log(`Optimized ${relativePath} → AVIF`))
    .catch(err => console.error(`Error optimizing ${relativePath} to AVIF:`, err));
});
