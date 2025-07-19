const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create public/icons directory if it doesn't exist
const iconsDir = path.join(process.cwd(), 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Base SVG for the logo (SaaS Starter)
const baseSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="80" fill="url(#grad1)"/>
  <g transform="translate(128, 128)">
    <!-- S letter -->
    <path d="M64 32C64 14.3 78.3 0 96 0s32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h32V32z" fill="white"/>
    <path d="M192 96c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V96z" fill="white"/>
    <!-- Lightning bolt -->
    <path d="M160 200l-32-48h24V120h16v32h24l-32 48z" fill="white"/>
  </g>
</svg>
`;

// Icon sizes for PWA
const iconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'icon-48x48.png' },
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 256, name: 'icon-256x256.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' },
];

async function generateIcons() {
  console.log('🎨 Generating PWA icons...');
  
  // Generate PNG icons from SVG
  for (const { size, name } of iconSizes) {
    await sharp(Buffer.from(baseSvg))
      .resize(size, size)
      .png()
      .toFile(path.join(iconsDir, name));
    console.log(`✅ Generated ${name}`);
  }

  // Generate favicon.ico (multi-size)
  await sharp(Buffer.from(baseSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(process.cwd(), 'public', 'favicon.ico'));
  console.log('✅ Generated favicon.ico');

  // Generate Apple Touch Icon
  await sharp(Buffer.from(baseSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(iconsDir, 'apple-touch-icon.png'));
  console.log('✅ Generated apple-touch-icon.png');

  console.log('🎉 All icons generated successfully!');
}

// Generate OG Image
async function generateOGImage() {
  console.log('🖼️ Generating OG image...');
  
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1e293b;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)"/>
    
    <!-- Grid pattern -->
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="1" opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#grid)" />
    
    <!-- Logo -->
    <g transform="translate(100, 150)">
      <rect width="80" height="80" rx="12" fill="url(#textGrad)"/>
      <text x="40" y="55" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="48" font-weight="bold">S</text>
    </g>
    
    <!-- Main text -->
    <text x="220" y="220" fill="white" font-family="Arial, sans-serif" font-size="64" font-weight="bold">SaaS Starter Template</text>
    <text x="220" y="280" fill="#94a3b8" font-family="Arial, sans-serif" font-size="32">Build Your MVP Fast with Modern Stack</text>
    
    <!-- Features -->
    <text x="220" y="340" fill="#64748b" font-family="Arial, sans-serif" font-size="24">✨ Next.js 15 • TypeScript • Tailwind CSS • Stack Auth</text>
    <text x="220" y="380" fill="#64748b" font-family="Arial, sans-serif" font-size="24">🚀 20+ Components • PWA Ready • SEO Optimized</text>
    
    <!-- CTA -->
    <rect x="220" y="420" width="200" height="60" rx="30" fill="url(#textGrad)"/>
    <text x="320" y="460" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">Get Started</text>
    
    <!-- Decorative elements -->
    <circle cx="1000" cy="150" r="100" fill="url(#textGrad)" opacity="0.1"/>
    <circle cx="1050" cy="400" r="60" fill="url(#textGrad)" opacity="0.1"/>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(process.cwd(), 'public', 'og-image.png'));
  console.log('✅ Generated og-image.png');
}

// Run the generation
async function main() {
  try {
    await generateIcons();
    await generateOGImage();
  } catch (error) {
    console.error('❌ Error generating images:', error);
    process.exit(1);
  }
}

main();