# PWA Icons Required

You need to generate PWA icons in the following sizes and place them in the `/public/icons/` directory:

## Required Icon Sizes:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png (minimum for Android)
- icon-384x384.png
- icon-512x512.png (recommended for splash screens)

## How to Generate Icons:

### Option 1: Use Online Tools (Recommended)
1. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Upload your logo/icon (ideally 512x512 or larger)
   - Select "Progressive Web App"
   - Download the generated package
   - Extract icons to `/public/icons/`

2. **PWA Asset Generator** (https://www.pwabuilder.com/imageGenerator)
   - Upload a high-quality logo
   - Generate all required sizes
   - Download and place in `/public/icons/`

### Option 2: Use Sharp (Node.js)
```bash
npm install sharp
```

Create `scripts/generate-icons.js`:
```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputFile = path.join(__dirname, '../public/logo.png'); // Your source logo
const outputDir = path.join(__dirname, '../public/icons');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

sizes.forEach(async (size) => {
  await sharp(inputFile)
    .resize(size, size, {
      fit: 'contain',
      background: { r: 139, g: 92, b: 246, alpha: 1 } // Theme color
    })
    .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
  console.log(`Generated icon-${size}x${size}.png`);
});
```

Run: `node scripts/generate-icons.js`

### Option 3: Manual Design (Figma/Photoshop)
1. Design your icon on a 512x512 canvas
2. Export each required size
3. Ensure proper padding (about 10% margin)
4. Use a solid background color matching your theme

## Icon Design Best Practices:
- **Simple and recognizable** - will be displayed at small sizes
- **Centered with padding** - 10-20% margin on all sides
- **Solid background** - avoid transparency for maskable icons
- **High contrast** - visible on various backgrounds
- **Square format** - avoid intricate details

## Screenshot Requirements:
Place in `/public/screenshots/`:
- desktop-1.png (1920x1080) - Desktop view of homepage
- mobile-1.png (750x1334) - Mobile view of homepage

These improve the app install experience on Android/Chrome.

## Temporary Placeholder:
For now, you can use a simple colored square as a placeholder until you create proper icons.
