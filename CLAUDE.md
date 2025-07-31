# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Services" - a Next.js 14 helpdesk/service desk application built to simplify ticket management. The app is mobile-first and Portuguese-focused, designed to streamline the process of creating and managing support tickets.

## Development Commands

**Package Manager**: pnpm (preferred, as defined in package.json)

**Core Development**:
```bash
pnpm dev          # Start development server on port 2424
pnpm build        # Build for production
pnpm start        # Start production server on port 2424
pnpm lint         # Run ESLint
```

**Testing**:
```bash
pnpm e2e:open     # Open Playwright UI
pnpm e2e:run      # Run E2E tests headless
pnpm e2e:debug    # Debug E2E tests
pnpm e2e:gen      # Generate test code
```

**Storybook**:
```bash
pnpm storybook          # Start Storybook dev server
pnpm build-storybook    # Build Storybook
pnpm test-storybook     # Test Storybook components
pnpm chromatic          # Deploy to Chromatic
```

## Architecture Overview

**Framework**: Next.js 14 with App Router
**Styling**: Styled Components with theme system (light/dark modes)
**State Management**: Zustand stores + React Context providers
**Authentication**: NextAuth.js with credentials provider
**Testing**: Playwright for E2E, Storybook for component testing
**Monitoring**: Sentry integration with custom monitoring abstractions
**Database**: External API communication via HTTP client abstractions

### Key Directories

**`src/app/`**: Next.js App Router pages and API routes
- `(protected)/`: Protected routes requiring authentication
- `api/`: Server-side API handlers for tickets, users, search, etc.

**`src/screens/`**: Page-level components organized by feature
- Each screen has its own UI components, hooks, types, and styles
- Pattern: `Screen/UI/components/` for sub-components

**`src/components/`**: Reusable UI components
- `common/`: Shared components (Buttons, Inputs, etc.)
- Feature-specific components (TicketCard, NavBar, etc.)
- Each component has its own styles.ts file

**`src/implementations/`**: Abstraction layer for external services
- `client/`: Browser-side implementations (Analytics, Firebase, etc.)
- `server/`: Server-side implementations (Crypto, HTTP, JWT)
- Clean architecture with interfaces in `src/types/abstractions/`

**`src/utils/`**: Utilities and providers
- `providers/`: React Context providers for app state
- `stores/`: Zustand stores (TicketStore, ModalStore)
- `functions/`: Helper functions and utilities
- `apis/`: API client functions

**`src/styles/`**: Theme system and global styles
- `themes/default/`: Light and dark theme definitions
- `breakpoints/`: Responsive design breakpoints

## Code Conventions

- **File naming**: PascalCase for components, camelCase for utilities
- **Import alias**: `@/*` maps to `src/*`
- **TypeScript**: Strict mode enabled, interfaces in `src/types/`
- **Styling**: Styled Components with theme props
- **Component structure**: Each component exports from `index.tsx` with separate `styles.ts`

## Mobile-First Design

This app is specifically designed for mobile devices:
- Default viewport: 430x932 (mobile)
- NoMobileDevice screen blocks desktop usage
- PWA capabilities with service worker
- Mobile-optimized navigation and interactions

## Environment Variables

Key variables needed for development:
- `NODE_ENV`: development | production
- `BASE_URL`: Application URL
- `APIS_BASE_URL`: Backend API URL
- `NEXT_PUBLIC_*`: Client-side environment variables
- `SENTRY_*`: Error monitoring configuration
- `SERVICES_COMPANY_*`: Company-specific settings

## Testing Strategy

- **E2E Testing**: Playwright with mobile device emulation
- **Component Testing**: Storybook with interaction testing
- **Visual Testing**: Chromatic for visual regression
- Tests run against multiple mobile device configurations (Android/iOS)

## Authentication Flow

NextAuth.js with custom credential provider:
- Login creates session via `createSession()` function
- User data fetched via `getUserByToken()`
- Company email domain restriction (optional)
- Session duration: 6 days with 1-day update intervals

## State Management

- **Zustand**: For global state (tickets, modals)
- **React Context**: For providers (Auth, FeatureFlags, Services)
- **SWR**: For server state and caching
- **React Hook Form**: For form state with Zod validation