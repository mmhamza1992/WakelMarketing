# Wakel.io - Bilingual Marketing Website

## Overview

This is a bilingual (English/Arabic) marketing website for Wakel.io, designed as a professional gateway to the MENAT AI market. The application is built with a modern full-stack architecture featuring a React frontend with Express.js backend, optimized for bilingual content delivery and lead generation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animation**: Framer Motion for smooth transitions and interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer with Titan SMTP integration
- **Session Management**: Built-in memory storage for development

### Design System
- **Component Library**: Radix UI primitives with custom styling
- **Theme**: CSS variables-based theming system
- **Typography**: Inter font for English, Cairo font for Arabic
- **Color Scheme**: Neutral base with #0E7DF0 primary accent
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Internationalization (i18n)
- **Language Support**: English (LTR) and Arabic (RTL)
- **Route Structure**: 
  - `/` - English homepage
  - `/ar` - Arabic homepage
- **Content Management**: Centralized content object with language-specific translations
- **RTL Support**: Automatic direction switching and Cairo font loading for Arabic

### Lead Generation System
- **Contact Form**: Multi-field form with client-side validation
- **Data Storage**: PostgreSQL database with leads table
- **Email Notifications**: Automatic email alerts to business email
- **Form Validation**: Zod schema validation on both client and server

### UI Components
- **Modular Design**: Reusable components built on Radix UI
- **Accessibility**: WCAG-compliant components with proper ARIA labels
- **Interactive Elements**: Hover states, focus management, and keyboard navigation
- **Toast Notifications**: User feedback system for form submissions

## Data Flow

### Lead Submission Process
1. User fills out contact form with name, company, email, and message
2. Client-side validation using React Hook Form and Zod
3. Form submission via POST request to `/api/contact`
4. Server validates data and stores in PostgreSQL database
5. Email notification sent to business contact
6. Success response triggers client-side toast notification

### Content Delivery
1. User navigates to English (`/`) or Arabic (`/ar`) route
2. Language context updates application state
3. Components render appropriate content from centralized content object
4. RTL/LTR styling and fonts applied based on language selection

### Database Schema
- **leads table**: id, name, company, email, message, created_at
- **users table**: id, username, password (for future admin functionality)

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **@radix-ui/***: Accessible UI primitives
- **nodemailer**: Email sending functionality
- **react-hook-form**: Form state management
- **zod**: Schema validation

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Production build bundling
- **@replit/vite-plugin-***: Replit-specific development enhancements

### SMTP Configuration
- **Provider**: Titan Email
- **Environment Variables**: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- **Default Configuration**: smtp.titan.email:587 with authentication

## Deployment Strategy

### Development Environment
- **Replit Integration**: Optimized for Replit development environment
- **Hot Reload**: Vite dev server with HMR for fast development
- **Environment Variables**: Secure handling of SMTP credentials via Replit Secrets

### Production Build
- **Frontend**: Vite build process generating optimized static assets
- **Backend**: esbuild bundling for Node.js deployment
- **Static Assets**: Served from `/dist/public` directory
- **Database**: PostgreSQL connection via environment variable

### Build Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema migration

## Changelog

- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.