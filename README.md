# Iteeha Coffee & Pups

A modern, responsive website for Iteeha Coffee & Pups - Mumbai's coziest coffee shop with friendly furry companions.

## Features

- 🐕 Interactive coffee shop website with dog-friendly theme
- ☕ Complete menu showcase with matcha specials
- 📱 Fully responsive design for all devices
- 🎨 Beautiful animations and micro-interactions
- 🛒 Online ordering interface
- 📍 Multiple location information
- 💌 Contact forms and social media integration

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: Wouter
- **State Management**: TanStack React Query
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd iteeha-coffee-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run TypeScript type checking

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the configuration and deploy

### Manual Deployment

```bash
npm run build
```

The `dist` folder contains the production build ready for deployment.

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   └── index.css      # Global styles and Tailwind
│   └── index.html         # HTML template
├── public/                # Static assets
├── vercel.json           # Vercel configuration
└── vite.config.ts        # Vite configuration
```

## Design System

The project uses a custom color palette inspired by coffee and dogs:

- **Coffee Brown**: Primary dark color
- **Cream Latte**: Light background color
- **Golden Fur**: Accent color for highlights
- **Playful Teal**: Secondary accent
- **Puppy Pink**: Soft accent for warmth

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.