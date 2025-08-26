# Overview

This is a full-stack React application for "Iteeha Coffee & Pups", a coffee shop that combines traditional coffee experiences with friendly dogs. The app features a modern UI built with React, TypeScript, and shadcn/ui components, backed by an Express.js server with PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for client-side routing with pages for home, menu, about, contact, and ordering
- **UI Components**: shadcn/ui component library with Radix UI primitives and Tailwind CSS for styling
- **State Management**: TanStack React Query for server state management and caching
- **Styling**: Tailwind CSS with custom color palette (coffee-brown, cream-latte, playful-teal, etc.) and Google Fonts integration

## Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **API Design**: RESTful endpoints with `/api` prefix and structured error handling

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database queries
- **Schema**: Centralized schema definition in `shared/schema.ts` with Zod validation
- **Migrations**: Database migrations managed through `drizzle-kit`
- **Connection**: Neon Database serverless PostgreSQL connection

## Development Environment
- **Build System**: Vite with React plugin and custom error handling
- **Development**: Hot module replacement with Vite dev server integration
- **TypeScript**: Strict type checking with path aliases for clean imports
- **Code Organization**: Monorepo structure with shared types and schemas

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Type-safe database queries and schema management
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

## UI Framework
- **shadcn/ui**: Pre-built accessible components with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless UI components for accessibility and functionality

## Development Tools
- **Vite**: Fast build tool with HMR and optimized production builds
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

## Third-party Services
- **Google Fonts**: Web fonts (Baloo 2, Nunito, Pacifico) for brand typography
- **Unsplash**: Stock photography for menu items and hero images
- **Replit**: Development environment integration with error overlays and banners