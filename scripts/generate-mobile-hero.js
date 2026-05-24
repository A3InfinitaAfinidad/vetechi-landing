const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/optimized/hero/hero-bg.avif');
const outputPath = path.join(__dirname, '../public/images/optimized/hero/hero-bg-mobile.avif');

sharp(inputPath)
  .resize({ width: 768 })
  .avif({ quality: 60 })
  .toFile(outputPath)
  .then(info => {
    console.log('Mobile hero image generated successfully:', info);
  })
  .catch(err => {
    console.error('Error generating mobile image:', err);
  });
