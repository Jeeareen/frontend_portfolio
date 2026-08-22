# Portfolio Project Brief & Workspace Rules

## 1. Goal & Target Audience
Single-page portfolio site for a frontend/AI engineering student targeting hiring managers at companies like Google and Microsoft.
- **One-line claim:** "I ship experiences, not interfaces — built for how it feels to use, not how it looks."

## 2. Tech Stack (LOCKED IN)
- Vite + React + TypeScript
- Tailwind CSS (`@tailwindcss/vite` plugin)
- React Router DOM (`/` and `/demo` routes only)
- No backend, no CMS, no Next.js / SSR
- Hosted on Vercel static

## 3. Strict Rules & Constraints
- **Do-Not-Touch Rule:** `MatchStack.tsx` and `types/matching.ts` are ported from Solibero production code. They are **FINAL**. Do NOT refactor, restyle, or alter their behavior unless explicitly requested.
- **No Stack Changes:** Do not suggest Next.js, CMS, backend, or major framework abstractions.

## 4. Content Structure
- **Main Page (Single Scroll):**
  1. **Hero** (Name + one-line claim, no CTA)
  2. **Case Study: Soloberty matchcards** (Problem → Decisions → Screenshot/GIF → CTA "Try it out" -> `/demo`)
  3. **About/Bio** (Trajectory, voice, tradeoffs, no CTA)
  4. **Contact** (CTA "Let's talk" -> Email, LinkedIn, GitHub, CV view/download)
- **Sub-page `/demo`:**
  - Isolated live `MatchStack` component + orientation line + CTA "Like how this feels? Let's talk →" returning to Contact section.

## 5. Identity Kit
- **Typography:**
  - `Atkinson Hyperlegible`: Large headings, body copy, chat, biographies
  - `Saira Semi Condensed`: Badges, pills, navigation, buttons, tags, short UI labels
- **Color Palette:**
  - Canvas: `#FAFAFA`
  - Text: `#111827`
  - Accent: `#FFD070`
- **Mood:** Modern, simple, elegant, generous whitespace, refined typography, subtle animations, distraction-free.

## 6. Accessibility & Responsiveness
- Usable at mobile widths.
- Respect `prefers-reduced-motion`.
- Maintain full keyboard navigation support.
