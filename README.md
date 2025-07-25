# SaaS Starter Template

A complete, production-ready SaaS starter template built with modern technologies and best practices. Get your MVP up and running in minutes, not weeks.

## Features

- **🔐 Authentication** - Complete auth system with Stack Auth
- **📱 Progressive Web App** - Full PWA support with offline functionality
- **🎨 UI Components** - 20+ pre-built MVP blocks and components
- **⚡ Performance** - Optimized for speed and SEO with Sharp image optimization
- **🔍 SEO Ready** - Complete meta tags, OG images, and social sharing
- **📊 TypeScript** - Full type safety throughout
- **🎨 Tailwind CSS** - Modern styling with utility classes
- **📱 Responsive** - Mobile-first design approach
- **🚀 Deployment Ready** - Configured for Cloudflare and Vercel
- **🛠️ Developer Experience** - ESLint, Prettier, and more

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
- **PWA**: [next-pwa](https://github.com/shadowwalker/next-pwa) with Workbox
- **Images**: [Sharp](https://sharp.pixelplumbing.com) for optimization
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

## Progressive Web App (PWA)

This template includes full PWA functionality:

### 📱 **PWA Features**
- **Installable**: Users can install your app on mobile and desktop
- **Offline Support**: Cached resources work without internet
- **Fast Loading**: Optimized caching strategies for performance
- **App-like Experience**: Standalone mode with custom splash screen

### 🎨 **Auto-Generated Assets**
- **Favicons**: Multiple sizes (16x16, 32x32, ICO)
- **PWA Icons**: All required sizes (48x48 to 512x512)
- **Apple Touch Icons**: iOS home screen optimization
- **OG Images**: Social sharing optimization (1200x630)
- **Windows Tiles**: Microsoft Store compatibility

### ⚡ **Performance Optimizations**
- **Image Optimization**: Sharp-powered WebP/AVIF conversion
- **Service Worker**: Intelligent caching with Workbox
- **Font Caching**: Google Fonts cached for 1 year
- **Static Assets**: Images and CSS cached for optimal performance

### 🛠️ **PWA Commands**
```bash
# Generate all PWA icons and images
npm run generate-icons

# Build with PWA (icons auto-generated)
npm run build

# Test PWA functionality
npm run build && npm start
```

### 📊 **Lighthouse Scores**
Expected scores with this template:
- **Performance**: 90+ ⚡
- **Accessibility**: 90+ ♿
- **Best Practices**: 90+ ✅
- **SEO**: 90+ 🔍
- **PWA**: 100 📱

## Database Setup (Cloudflare D1 + Drizzle ORM)

This template includes a complete database setup with Cloudflare D1 and Drizzle ORM.

### 🗄️ **Database Features**
- **Cloudflare D1**: Serverless SQLite database
- **Drizzle ORM**: Type-safe database operations
- **Auto-generated Types**: Full TypeScript support
- **Migration System**: Version-controlled schema changes
- **API Routes**: Ready-to-use CRUD endpoints

### 🚀 **Quick Database Setup**

1. **Install Dependencies** (already included):
   ```bash
   pnpm add drizzle-orm
   pnpm add -D drizzle-kit
   ```

2. **Authenticate with Cloudflare**:
   ```bash
   npx wrangler login
   ```

3. **Set up Database**:
   ```bash
   npm run db:setup
   ```
   This will:
   - Create a new D1 database
   - Generate migration files
   - Provide the database ID for configuration

4. **Update Configuration**:
   Update `wrangler.jsonc` with your database ID:
   ```json
   "d1_databases": [
     {
       "binding": "DB",
       "database_name": "saas-starter-db",
       "database_id": "your-actual-database-id"
     }
   ]
   ```

5. **Run Migrations**:
   ```bash
   npm run db:migrate
   ```

### 📊 **Database Schema**

The template includes example tables:

```typescript
// Users table
export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

// Posts table
export const posts = sqliteTable('posts', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  authorId: integer('author_id').references(() => users.id),
  published: integer('published', { mode: 'boolean' }).default(false),
  createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});
```

### 🛠️ **Available Commands**

```bash
# Database operations
npm run db:generate    # Generate migration files
npm run db:migrate     # Apply migrations to database
npm run db:push        # Push schema changes directly
npm run db:studio      # Open Drizzle Studio (database GUI)
npm run db:setup       # Complete database setup

# Development
npm run dev           # Start development server
npm run build         # Build for production
npm run deploy        # Deploy to Cloudflare
```

### 🔌 **API Endpoints**

The template includes ready-to-use API routes:

- **GET /api/users** - Fetch all users
- **POST /api/users** - Create a new user
- **GET /api/posts** - Fetch all posts  
- **POST /api/posts** - Create a new post

### 📱 **Dashboard**

Visit `/dashboard` to see the database in action with:
- User management interface
- Post management interface
- Real-time data from D1 database

### 🔧 **Database Utils**

Pre-built utility functions in `src/lib/db-utils.ts`:

```typescript
// User operations
await createUser(name, email)
await getUserByEmail(email)
await getAllUsers()

// Post operations
await createPost(title, content, authorId, published)
await getPostsByAuthor(authorId)
await getAllPosts()
```

## Environment Variables

Create a `.env.local` file with your configuration:

```env
# Stack Auth Configuration
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_URL=https://your-stack-app.stack-auth.com
STACK_SECRET_KEY=your_secret_key

# Cloudflare Configuration (for local development)
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_DATABASE_ID=your_database_id
CLOUDFLARE_API_TOKEN=your_api_token

# Add other environment variables as needed
```

## Contributing

We welcome contributions! Please see our contributing guidelines for more details.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authentication Setup

### Stack Auth Configuration

1. **Create Stack Auth Project**
   - Visit [Stack Auth](https://stack-auth.com)
   - Create a new project
   - Copy your project ID and secret key

2. **Configure Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Stack Auth credentials:
   ```env
   NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
   NEXT_PUBLIC_STACK_URL=https://your-stack-app.stack-auth.com
   STACK_SECRET_KEY=your_secret_key
   ```

3. **Authentication Features**
   - ✅ Sign In/Sign Up buttons in navbar
   - ✅ User profile display when logged in
   - ✅ Sign out functionality
   - ✅ Protected routes ready
   - ✅ Mobile responsive auth UI

### Usage

The navbar automatically shows:
- **Not logged in**: Sign In and Get Started buttons
- **Logged in**: User avatar, name/email, and Sign Out button

## Support

- Documentation: https://github.com/SH20RAJ/saas-starter
- Discord Community: https://discord.gg/
- Issue Tracker: https://github.com/SH20RAJ/saas-starter/issues

---

Built with love for the developer community. Start building your SaaS today!