const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Base SVG for the logo
const logoSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="80" fill="url(#grad)"/>
  <path d="M256 120L360 200L256 280L152 200Z" fill="white" opacity="0.9"/>
  <path d="M256 200L360 280L256 360L152 280Z" fill="white" opacity="0.7"/>
  <circle cx="256" cy="240" r="20" fill="white"/>
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
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' },
];

async function generateIcons() {
  console.log('🎨 Generating PWA icons...');
  
  // Generate favicon.ico
  await sharp(Buffer.from(logoSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  
  // Generate all icon sizes
  for (const { size, name } of iconSizes) {
    await sharp(Buffer.from(logoSvg))
      .resize(size, size)
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`✅ Generated ${name}`);
  }
  
  // Generate Apple Touch Icon
  await sharp(Buffer.from(logoSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  
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
        <stop offset="0%" style="stop-color:#1E293B;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#0F172A;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
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
      <rect width="120" height="120" rx="20" fill="url(#logoGrad)"/>
      <path d="M60 30L84 50L60 70L36 50Z" fill="white" opacity="0.9"/>
      <path d="M60 50L84 70L60 90L36 70Z" fill="white" opacity="0.7"/>
      <circle cx="60" cy="60" r="5" fill="white"/>
    </g>
    
    <!-- Title -->
    <text x="250" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="bold" fill="white">
      SaaS Starter Template
    </text>
    
    <!-- Subtitle -->
    <text x="250" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="24" fill="#94A3B8">
      Build Your MVP Fast with Modern Stack
    </text>
    
    <!-- Features -->
    <text x="250" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#64748B">
      ✨ Next.js 15 • TypeScript • Tailwind CSS • Stack Auth
    </text>
    
    <!-- CTA -->
    <rect x="250" y="350" width="200" height="50" rx="25" fill="url(#logoGrad)"/>
    <text x="350" y="380" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="white" text-anchor="middle">
      Get Started
    </text>
    
    <!-- Decorative elements -->
    <circle cx="1000" cy="150" r="100" fill="#3B82F6" opacity="0.1"/>
    <circle cx="1100" cy="400" r="80" fill="#1D4ED8" opacity="0.1"/>
  </svg>
  `;
  
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));
  
  console.log('✅ Generated og-image.png');
}

// Run the generation
async function main() {
  try {
    await generateIcons();
    await generateOGImage();
  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

main();