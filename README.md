# SaaS Starter Template

A complete, production-ready SaaS starter template built with modern technologies and best practices. Get your MVP up and running in minutes, not weeks.

## Features

- Authentication - Complete auth system with Stack Auth
- UI Components - 20+ pre-built MVP blocks and components
- Performance - Optimized for speed and SEO
- TypeScript - Full type safety throughout
- Tailwind CSS - Modern styling with utility classes
- Responsive - Mobile-first design approach
- Deployment Ready - Configured for Cloudflare and Vercel
- Developer Experience - ESLint, Prettier, and more

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd saas-starter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your SaaS starter in action.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Authentication**: [Stack Auth](https://stack-auth.com)
- **UI Components**: [Radix UI](https://www.radix-ui.com) + Custom MVP Blocks
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Cloudflare](https://cloudflare.com) / [Vercel](https://vercel.com)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (landing)/         # Landing page
│   ├── handler/           # Auth handlers
│   └── layout.tsx         # Root layout
├── components/
│   ├── mvpblocks/         # Pre-built SaaS components
│   └── ui/                # Base UI components
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## Available Components

### MVP Blocks
- **Heroes**: App Hero, Minimal Hero
- **Features**: Feature showcase with icons
- **Pricing**: Simple pricing table
- **Testimonials**: Marquee testimonials
- **FAQ**: Expandable FAQ section
- **About**: Company about section
- **Contact**: Contact forms
- **Auth**: Login/signup forms
- **Navigation**: Headers and footers
- **Interactive**: 3D globe, animations

### UI Components
- Buttons, Cards, Dialogs
- Forms, Inputs, Selects
- Navigation, Breadcrumbs
- Data display components
- And much more...

## Customization

All components are built to be easily customizable:

1. **Styling**: Modify Tailwind classes or add custom CSS
2. **Content**: Update text, images, and data in component files
3. **Layout**: Rearrange components in the landing page
4. **Branding**: Update colors, fonts, and logos

## Deployment

### Cloudflare (Recommended)
```bash
pnpm run deploy
```

### Vercel
```bash
vercel deploy
```

## Environment Variables

Create a `.env.local` file with your configuration:

```env
# Stack Auth Configuration
STACK_PROJECT_ID=your_project_id
STACK_SECRET_KEY=your_secret_key

# Add other environment variables as needed
```

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- Documentation: https://github.com/SH20RAJ/saas-starter
- Discord Community: https://discord.gg/
- Issue Tracker: https://github.com/SH20RAJ/saas-starter/issues

---

Built with love for the developer community. Start building your SaaS today!