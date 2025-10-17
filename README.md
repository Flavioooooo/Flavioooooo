# Pop Mart Collectibles Website

A vibrant, modern designer toy collectibles website inspired by Pop Mart, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, playful design aesthetic
- 🛒 Fully functional shopping cart system
- ❤️ Wishlist functionality
- 🔍 Search functionality
- 📦 Blind box collections showcase
- 👨‍🎨 Artist profiles and showcases
- 📱 Responsive design
- 💰 Philippine Peso (₱) pricing
- 🔔 Toast notifications for user actions
- 📧 Newsletter subscription

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible UI components
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd popmart-collectibles
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

### Option 2: Using Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your Git repository
5. Vercel will automatically detect Vite configuration
6. Click "Deploy"

That's it! Vercel will automatically build and deploy your site.

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components (shadcn)
│   │   ├── Header.tsx      # Header with navigation
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Categories.tsx  # Product categories
│   │   ├── FeaturedProducts.tsx
│   │   ├── BlindBoxSection.tsx
│   │   ├── ArtistSection.tsx
│   │   ├── Newsletter.tsx
│   │   ├── Footer.tsx
│   │   ├── CartContext.tsx # Shopping cart state
│   │   └── ShoppingCartDialog.tsx
│   ├── styles/
│   │   └── globals.css     # Global styles and Tailwind config
│   ├── App.tsx             # Main app component
│   └── main.tsx            # App entry point
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── vercel.json             # Vercel deployment configuration
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Notes for Laboratory Session

This project demonstrates:
- Modern React development practices
- Component-based architecture
- State management with Context API
- Responsive web design
- TypeScript for type safety
- Accessibility considerations
- Real-world e-commerce features

## License

This is a student project for laboratory session purposes.
