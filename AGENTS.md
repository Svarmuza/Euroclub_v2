# Euroclubv2 - Project Instructions

## Project Overview
- **Stack:** Next.js 16 + TypeScript + Tailwind CSS + next-intl (i18n)
- **UI:** Radix UI, Framer Motion, Lucide icons
- **Package manager:** npm
- **Live URL:** https://euroclubv2.vercel.app

## Deployment

### GitHub
- **Repository:** https://github.com/Svarmuza/Euroclub_v2
- **SSH:** git@github.com:Svarmuza/Euroclub_v2.git
- **HTTPS:** https://github.com/Svarmuza/Euroclub_v2.git
- **Token:** See `.opencode/skills/github-access/SKILL.md` for credentials

**Authentication:**
```powershell
# Test SSH connection
ssh -T git@github.com

# Push with token (if needed, use token from SKILL.md)
```

### Vercel
- **Dashboard:** https://vercel.com/dashboard
- **Project:** Euroclub_v2
- **Domains:** euroclubv2.vercel.app
- **Token:** See `.opencode/skills/github-access/SKILL.md` for credentials

**API Usage:**
```powershell
# Use token from SKILL.md for API calls
```

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

## Important: Proxy (Middleware) in Next.js 16

Next.js 16 renamed `middleware.ts` to `proxy.ts`. File is at `src/proxy.ts`.

**Content:**
```typescript
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: ['/', '/(hr|en|de|fr|it|sl|pl|cs|hu|ru)/:path*']
};
```

## Common Issues

### Type Errors with Link href
When using `Link` from next-intl routing, use **canonical paths** from `src/i18n/routing.ts`:
- ❌ `href="/programi"` - NOT valid (Croatian path)
- ✅ `href="/programs"` - VALID (canonical path, auto-translated to `/programi` for hr)

### Git "nul" file error
If `error: short read while indexing nul`:
```bash
rm nul 2>$null
git add --ignore-errors .
```

### Vercel Build Failures
If Vercel shows old code:
1. Settings → Git → Verify it points to `Svarmuza/Euroclub_v2`
2. Deployments → Clear Cache and Redeploy
