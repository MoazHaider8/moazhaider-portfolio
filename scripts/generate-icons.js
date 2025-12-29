const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outputDir = path.join(__dirname, '../public/icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate a simple purple gradient icon with "MH" text
const generateIcon = async (size) => {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#grad)" rx="${size * 0.15}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${size * 0.4}" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">MH</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
  
  console.log(`✅ Generated icon-${size}x${size}.png`);
};

// Generate all icons
(async () => {
  console.log('🎨 Generating PWA icons...\n');
  
  for (const size of sizes) {
    await generateIcon(size);
  }
  
  console.log('\n✅ All PWA icons generated successfully!');
  console.log('📁 Location: /public/icons/');
  console.log('\n⚠️  These are placeholder icons with "MH" initials.');
  console.log('💡 Replace with your actual logo using: https://www.pwabuilder.com/imageGenerator');
})();
