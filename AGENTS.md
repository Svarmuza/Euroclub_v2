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

## ⚠️ CRITICAL: Dev Server

**NEVER** run the dev server in the agent's own terminal. **ALWAYS** open a new PowerShell window:

```powershell
powershell -Command "Start-Process powershell -ArgumentList '-NoExit', '-Command', 'cd C:\Users\Sasa\.gemini\antigravity\scratch\Euroclubv2; npm run dev'"
```

This applies to starting, restarting, or any time a dev server needs to run. If the port is occupied, kill the old process first, then open a new window. The agent's terminal must stay clean for coding tasks.

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

## 🎨 Design System

### Font Family
- **Primary Font:** Rubik (Google Fonts)
- **Headings:** Rubik Black (900)
- **Body Text:** Rubik Regular (400)
- **Font URL:** `https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800;900&display=swap`

### Brand Color Palette

| Color | CSS Variable | Hex | Usage |
|-------|--------------|-----|-------|
| **Sea** | `--color-sea` | `#0EA5E9` | Primary brand color, links, accents |
| **Sea Dark** | `--color-sea-dark` | `#0369A1` | Hover states for sea |
| **Sun** | `--color-sun` | `#FACC15` | Secondary CTA, highlights |
| **Sun Dark** | `--color-sun-dark` | `#EAB308` | Hover for sun elements |
| **Sunset** | `--color-sunset` | `#FB923C` | Accent, premium elements |
| **Sunset Dark** | `--color-sunset-dark` | `#EA580C` | Hover for sunset |
| **Pine** | `--color-pine` | `#22C55E` | Success, positive indicators |
| **Pine Dark** | `--color-pine-dark` | `#15803D` | Hover for pine |
| **Logo Red** | `--color-logo-red` | `#DC2626` | **PRIJAVI SE CTA only** |
| **Logo Red Dark** | `--color-logo-red-dark` | `#B91C1C` | Hover for logo red |

### Tailwind Classes
- `bg-sea`, `text-sea`, `border-sea`
- `bg-sun`, `text-sun`, `border-sun`
- `bg-sunset`, `text-sunset`, `border-sunset`
- `bg-pine`, `text-pine`, `border-pine`
- `bg-logo`, `text-logo`, `border-logo` — **use ONLY for PRIJAVI SE button**

### Buttons
- **Primary Action (modern-button):** Sea blue background
- **CTA Action (modern-button-cta):** Logo red background — **for PRIJAVI SE only**

### ⚠️ CRITICAL: Color Usage Rules
1. **NEVER** use raw Tailwind colors like `bg-red-500`, `bg-blue-600`, `bg-orange-500`
2. **ALWAYS** use brand color tokens: `bg-sea`, `text-sun`, etc.
3. **Logo red (`bg-logo`)** is reserved exclusively for the "PRIJAVI SE" booking CTA
4. When in doubt, default to `sea` for primary actions, `sun` for secondary

## 🚫 CRITICAL: Do NOT Change Text Content

**NEVER** modify, rewrite, rephrase, or invent any text/heading/label/paragraph/caption/button text anywhere in the project — neither in component files nor in `messages/` translation files.

**Allowed:**
- Rearranging, repositioning, or reordering existing text (layout changes)
- Redesigning how text looks (styling, fonts, colors, sizing)
- Moving text between components or sections

**NOT Allowed (unless user explicitly provides the exact new text):**
- Changing wording of any existing text
- Writing new text from scratch
- "Improving" or "polishing" copy
- Translating or re-translating existing strings
- Adding new strings/labels the user didn't request

If a redesign requires new text, **leave placeholders like `[TODO: text needed]`** and ask the user to provide the exact text.

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
