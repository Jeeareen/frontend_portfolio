# Portfolio Project Brief & Rules

## 1. What this is

A single-page portfolio site for a frontend/AI engineering student, targeting frontend hiring managers at companies like Google and Microsoft. One case study/Project (matchstack cards) for now.

**One-line claim:** "I ship experiences, not interfaces — built for how it feels to use, not how it looks."

---

## 2. Tech stack (locked in — do not deviate without asking)

- Vite + React + TypeScript
- Tailwind CSS (`@tailwindcss/vite` plugin, already configured)
- React Router DOM (`/` and `/demo` routes only)
- No backend, no CMS, no server-side rendering, no Next.js
- Hosted on Vercel (free tier), connected to GitHub

If a fix or feature seems to require a backend, a framework switch, or a new major dependency — stop and ask before implementing. Simplicity is a deliberate choice, not a gap to fill.

---

## 4. Do-not-touch rule

`MatchStack.tsx` and `types/matching.ts` are ported directly from the production Solibero codebase. They are **final** — the interaction design (undo limit, swipe cap, flip-to-detail) is the actual subject of the case study. Do not refactor, restyle, "simplify," or "improve" this component without being explicitly asked. 

---

## 5. Content map (structure — order matters)

**Main page, single scroll:**
1. **Hero** — who I am + one-line claim. Icons for GitHub & LinkedIn (directing to account links). "Available for work" status indicator with color dot. Tech stack listed as pills. No CTA button.
2. **Case Study: Soloberty matchcards** — problem → decisions (undo, swipe-limit, ergonomic collapse) → why, tied to claim → screenshot/GIF → CTA "Try it out" → links to `/demo`
3. **About/Bio** — trajectory, voice, tradeoffs. No CTA.
4. **Contact** — CTA "Let's talk" → email/LinkedIn/Github/CV (with download and view buttons)

**Sub-page `/demo`:**
- Live isolated MatchStack component + one orientation line
- CTA "Like how this feels? Let's talk →" → back to Contact section on main page

---

## 6. Identity kit

**Typography**
- **Atkinson Hyperlegible**: Large headings, body copy, chat, biographies
- **Saira Semi Condensed**: Badges, pills, navigation, buttons, tags, short UI labels

**Color palette**
- Canvas: `#FAFAFA`
- Text: `#111827`
- Accent: `#FFD070`

**Mood**
Modern, simple, elegant. Generous whitespace, refined typography, subtle animations, premium and distraction-free. Nothing loud, nothing templated-looking.

---

## 7. Accessibility & responsiveness baseline

- Must be usable at mobile widths (this is a portfolio — hiring managers will check on phones)
- Respect `prefers-reduced-motion` — MatchStack already does this via `useReducedMotion()`; keep new components consistent
- Keyboard navigability where interactive (MatchStack already supports arrow keys / Enter / Escape — don't regress this)

---

## 8. Copy status (what's real vs. placeholder)

> Update this section as content gets written — tell the agent explicitly which sections have final copy vs. placeholder text, so it doesn't treat a stand-in as done.

- [ ] Hero copy — placeholder / draft / final
- [ ] Case Study copy — placeholder / draft / final
- [ ] About copy — placeholder / draft / final
- [ ] Contact copy — placeholder / draft / final
- [ ] Demo orientation line — placeholder / draft / final

---

## 9. Asset status (what's gathered vs. still needed)

- [ ] GIFs/recordings of component animations
- [ ] Finished, refined Solibero build
- [ ] Before/after or performance metrics
- [ ] Live demo link / hosting — confirmed working
- [ ] Repo link + access decision (private, access on request)
- [ ] Status disclaimer if Solibero isn't fully done by build week
- [ ] Bio/headshot assets (no headshot currently planned — background/screenshot treatment instead)

---

## 10. Known constraints on skill level

Comfortable with basic React, can write good revision prompts, can hand-fix simple bugs. Not experienced with backend or advanced framework internals (this is *why* Vite over Next.js was chosen — see stack rationale below). Prefer explanations and fixes that stay within plain React/TS reasoning, not framework-specific abstractions.

---

## 11. Stack rationale (for context, not to be re-litigated each session)

Chose Vite + React/TS + Vercel static over Next.js (App Router) and Next.js + CMS + serverless functions. Reasoning: no dynamic data or backend need exists yet; Next.js's server/client boundary would introduce bug categories that are hard to diagnose or prompt-fix at current skill level; a CMS solves a content-churn problem this portfolio doesn't have. Full rationale posted to course track thread — don't need to re-derive this, just don't suggest switching stacks without new information.
