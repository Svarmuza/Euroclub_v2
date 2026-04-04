# Euroclubv2 - Project Instructions

## Project Overview
- **Stack:** Next.js 16 + TypeScript + Tailwind CSS + next-intl (i18n)
- **UI:** Radix UI, Framer Motion, Lucide icons
- **Package manager:** npm

## Dev Server
- ALWAYS start dev server in a new PowerShell window:
  ```
  powershell -Command "Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd C:\Users\Sasa\.gemini\antigravity\scratch\Euroclubv2; npm run dev'"
  ```
- NEVER run the server in the agent's own terminal

## Commands
- `npm run dev` - Development server (in separate window!)
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm run qa` - QA tests

## Structure
- `src/` - Source code
- `messages/` - i18n translation files
- `public/` - Static assets
- `qa/` - QA test scripts
- `PLANOVI/` - Project plans

## Conventions
- Multi-language support (next-intl) - always update all language files
- Use existing UI components from src/components
