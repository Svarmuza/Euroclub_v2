# Global Design Overhaul: Modern 2D Aesthetic

Transitioning from 3D/claymorphic styles to a clean, simple, 2D modern aesthetic. The color palette will shift to "Sea, Sun, and Pine" (Blues, Yellows/Oranges, Greens) and eliminate all red tones.

## Proposed Changes

### [Component Name] Global Branding & Palette

#### [MODIFY] [globals.css](file:///c:/Users/Sasa/.gemini/antigravity/scratch/Euroclubv2/src/app/globals.css)
- Remove all 3D/claymorphic shadow variables.
- Implement the new unified 2D color palette:
    - **Sea (Blues)**: For primary actions, backgrounds, and links.
    - **Sun (Yellows/Oranges)**: For CTAs, highlights, and "happy" accents.
    - **Pine (Greens)**: For secondary accents and success states.
- Standardize spacing and rounded corners (smooth but not exaggerated).

| Variable | Value | Role |
| :--- | :--- | :--- |
| `--background` | `#F8FAFC` | Light Coastal White |
| `--foreground` | `#0F172A` | Deep Navy (Text) |
| `--color-sea` | `#0EA5E9` | Ocean Blue (Primary) |
| `--color-sun` | `#FACC15` | Summer Yellow (CTA) |
| `--color-sunset` | `#FB923C` | Sunset Orange (Accent) |
| `--color-pine` | `#22C55E` | Pine Green (Fresh Accent) |

### [Component Name] Layout & UI Components

#### [MODIFY] [Navbar.tsx](file:///c:/Users/Sasa/.gemini/antigravity/scratch/Euroclubv2/src/components/layout/Navbar.tsx)
- Remove 3D buttons and shadows.
- Update colors to the Sea/Sun palette.

#### [MODIFY] [Footer.tsx](file:///c:/Users/Sasa/.gemini/antigravity/scratch/Euroclubv2/src/components/layout/Footer.tsx)
- Simplified 2D layout.
- Use Sea (Blue) for headings and Sun (Yellow) for accents.

### [Component Name] Homepage refactor

#### [MODIFY] [HomeHero.tsx](file:///c:/Users/Sasa/.gemini/antigravity/scratch/Euroclubv2/src/components/home/HomeHero.tsx)
- Refactor the hero card to use a refined 2D glassmorphism (subtle border/blur) instead of 3D clay.
- Update gradients to Sea Blue and Sun Yellow.

## Verification Plan

### Automated Tests
- `npm run dev` and manual visual verification.
- `npm run lint` to ensure clean code.

### Manual Verification
- Verify the complete removal of red tones across all components.
- Confirm the new palette feels cohesive ("Sea, Sun, Pine").
- Verify the UI looks clean, modern, and flat (2D).
