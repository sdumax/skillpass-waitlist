# 🎯 SKILLPASS — CINEMATIC WAITLIST EXPERIENCE SPEC

### Version 2.0 — Narrative System Launch

---

## 🧠 CORE PRINCIPLE

The waitlist is **not a section**.  
The waitlist **is the experience**.

SkillPass does not present information — it **transforms belief**, then converts.

This is a **guided, adaptive, cinematic journey** that:

- Breaks the user’s trust in the current hiring system
- Reframes their identity (Talent vs Employer)
- Presents a new system
- Pulls them into it via a **narrative-driven waitlist conversion**

---

# ⚡ EXPERIENCE STRUCTURE

The entire page is a **scroll-based story divided into chapters**.

Each section is:

- Intentional
- Sequential
- Emotionally progressive

---

# 🎬 CHAPTER FLOW

---

## ⚡ CHAPTER 01 — THE ILLUSION

### Purpose:

Disrupt belief. Establish that the system is broken.

---

### Headline (Glitch System):

```text
HIRING IS BROKEN.
```

### Behavior:

- Rendered via **canvas glitch shader**
- RGB split (red/blue offsets)
- Intermittent distortion, slicing, flicker
- Subtle scanlines + noise pulses

---

### Subtext:

```text
The system was never built to see you.
```

---

### CTA (top-right or fade-in):

```text
ENTER
```

---

### Transition:

- Glitch intensifies
- Screen stabilizes
- Leads into identity selection

---

## 🔀 IDENTITY SELECTION — USER LOCK-IN

### Purpose:

Personalize the journey and remove cognitive branching later.

---

### Title:

```text
WHO ARE YOU?
```

---

### Options:

#### Talent

“I want to prove what I can actually do.”

#### Employer

“I want signal, not noise.”

---

### Behavior:

- Selection locks experience path
- No toggling afterward
- Smooth cinematic transition

---

# 📖 CHAPTER 02 — PROBLEM (ADAPTIVE)

## Talent Path:

```text
YOU WERE NEVER THE PROBLEM.
```

- Resumes don’t reflect ability
- Bias filters you out early
- Your real skills are never tested

## Employer Path:

```text
YOU'RE HIRING BLIND.
```

- Resumes are unreliable
- Interviews reward performance, not competence
- Great candidates are missed

---

# 🎯 CHAPTER 03 — SOLUTION

### Purpose:

Introduce SkillPass as a **new system**, not a feature set.

---

### Headline:

```text
VERIFIED PROOF.
```

---

### Core Concepts (from waitlist brief, reframed):

- **Verified Skills**  
  Real assessments. Not self-reported claims.

- **Portable Skill Passport**  
  One identity that proves ability anywhere

- **Skill-First Hiring**  
  Decisions based on verified ability

- **Always Current**  
  Skills reflect present capability, not history

---

### Presentation:

- 3–4 cinematic cards
- Glassmorphism + gradient glow
- Subtle motion

---

# 🚀 CHAPTER 04 — THE FUTURE

### Purpose:

Position entry as a **shift in reality**

---

### Headline:

```text
ENTER THE NEW ERA.
```

---

### Subtext (adaptive):

- Talent:  
  “Get hired on merit.”

- Employer:  
  “Hire with confidence.”

*(Derived from original positioning, but simplified and aligned with tone)*

---

# 🧾 FINAL CHAPTER — WAITLIST ENTRY

## 🧠 KEY PRINCIPLE

The waitlist is not a form.  
It is the **moment of crossing into the system**.

---

## FORM STRUCTURE (ADAPTIVE)

No toggle.  
Form is automatically based on selected identity.

### Talent Form

- Full Name
- Email Address
- Field of Work
  - Technology / Design / Finance / Healthcare / Marketing / Legal / Education / Operations / Other
  - “Other” → reveals input

### Employer Form

- Full Name
- Email Address
- Company Name
- Role
  - Hiring Manager / Recruiter / Founder / Other
  - “Other” → reveals input

---

## 🎬 CTA — PROGRESSIVE UNLOCK

### Primary Button:

```text
JOIN THE WAITLIST →
```

### Subtext:

```text
Step into the system
```

---

## ⚡ BUTTON BEHAVIOR

### Idle

- Soft glow
- Subtle pulse

### Hover

- Glow intensifies
- Gradient shifts

### Click → Unlock Sequence

Animated text progression:

```text
JOIN THE WAITLIST →
INITIALIZING
ACCESS GRANTED
```

### Effects:

- Button compress
- Gradient sweep
- Light shimmer / scan effect

---

# 🎉 SUCCESS STATE — SYSTEM ENTRY

## Purpose:

Reinforce transformation, not submission

### Headline:

```text
YOU’VE CROSSED OVER.
```

### Message:

```text
You're now inside.

You'll be informed the moment the system goes live.
```

### Supporting Line:

```text
The shift has already begun.
```

### Behavior:

- Form is replaced inline (no navigation)
- Subtle ambient animation (light pulses / particles)

---

# 🧠 NARRATIVE ARCHITECTURE

| Stage      | Function                 |
| ---------- | ------------------------ |
| Chapter 01 | Break belief             |
| Identity   | Personalize              |
| Chapter 02 | Deepen pain              |
| Chapter 03 | Introduce system         |
| Chapter 04 | Build desire             |
| Waitlist   | Convert                  |
| Success    | Reinforce identity shift |

---

# ⚡ EXPERIENCE RULES

- No traditional navigation
- No multi-page structure
- No clutter
- Fully guided flow
- Every scroll = intentional progression

---

# 🎨 VISUAL + INTERACTION PRINCIPLES

- Dark, premium UI (not white SaaS style)
- Bold typography dominates layout
- Minimal UI elements
- Motion is slow, controlled, cinematic
- Effects feel **intentional, not decorative**

---

# 🧩 WHAT WAS PRESERVED FROM ORIGINAL DOCUMENT

From the waitlist brief, only:

- Dual audience (Talent + Employer)
- Segmented form logic
- Minimal fields
- Dropdown + “Other” fallback
- Inline confirmation behavior
- Core value propositions (reframed into narrative)

---

# 🚀 FINAL DIRECTIVE

> Build a **cinematic, scroll-based waitlist experience** that replaces the traditional landing page.
>
> The user should feel like they are **discovering and entering a new system**, not signing up for a product.
>
> The waitlist is the **final step in a psychological journey**, not the starting point.

---

# 🛠️ TECH STACK & BUILD ARCHITECTURE

## 🎯 CORE PRINCIPLE

The stack must support:

- Cinematic scroll control
- Real-time animation performance
- Canvas/WebGL rendering
- Smooth, fluid UX (no jank)

---

# ⚙️ FRONTEND FRAMEWORK

### Primary:

- **Next.js (App Router)**

### Why:

- Server + client flexibility
- Easy deployment (Vercel-ready)
- Component-based architecture
- SEO still possible (even though experience is immersive)

---

# 🎨 STYLING SYSTEM

### Core:

- **TailwindCSS**

### Add-ons:

- `clsx` (conditional styling)
- CSS variables (for gradients + theming)

---

# 🎬 ANIMATION SYSTEM (CRITICAL)

### Primary Engine:

- **GSAP (GreenSock)**

### Plugins:

- **ScrollTrigger** → cinematic scroll control
- (Optional later) **ScrollSmoother**

### Responsibilities:

- Section pinning
- Timeline sequencing
- Scroll-based animation control
- Transition orchestration

---

# 🧠 INTERACTION LAYER

### Library:

- **Framer Motion**

### Use for:

- Micro-interactions
- CTA animation states
- Component-level transitions

---

# 🖥️ GLITCH + VISUAL FX

## Phase 1 (Current Build)

### Tool:

- **HTML5 Canvas (2D Context)**

### Use:

- Glitch text rendering
- RGB splitting
- Slice distortion
- Noise pulses

## Phase 2 (Upgrade Path)

### Tool:

- **Three.js (WebGL)**

### Use:

- Shader-based distortion
- Noise maps
- Advanced glitch effects
- GPU-accelerated visuals

---

# 🌊 SMOOTH SCROLL ENGINE

### Tool:

- **Lenis (by Studio Freight)**

### Purpose:

- Remove native scroll stiffness
- Enable fluid cinematic motion
- Improve perceived performance

---

# 🧾 FORM + WAITLIST BACKEND

## Option A (Fastest MVP)

- Database (sqlite)
- API

### Data Model

#### Waitlist Entry:

```ts
{
  id: string
  type: "talent" | "employer"
  name: string
  email: string
  metadata: {
    field?: string
    company?: string
    role?: string
  }
  created_at: timestamp
}
```

---

# 📡 ANALYTICS & TRACKING

### Tools:

- **Vercel Analytics** or **Plausible**

### Track:

- Scroll depth
- Identity selection (Talent vs Employer)
- CTA clicks
- Conversion rate

---

# 🚀 DEPLOYMENT

### Platform:

- **Vercel**

### Why:

- Native Next.js support
- Edge performance
- Instant previews

---

# 📁 PROJECT STRUCTURE

```bash
/app
  page.tsx
  layout.tsx

/components
  GlitchCanvas.tsx
  IdentitySelect.tsx
  Chapter.tsx
  WaitlistForm.tsx
  CTAButton.tsx

/lib
  useCinematicScroll.ts
  useLenis.ts

/styles
  globals.css
```

---

# ⚡ PERFORMANCE CONSIDERATIONS

- Use `requestAnimationFrame` for canvas
- Avoid heavy re-renders (memoize components)
- Lazy-load non-critical sections
- Keep GSAP timelines efficient
- Limit DOM nodes (important for smooth scroll)

---

# 🧠 BUILD PHASES

## Phase 1 — Core Experience

- Hero (glitch canvas)
- Identity selection
- Chapter flow
- Basic GSAP scroll

## Phase 2 — Conversion Layer

- Waitlist form
- Progressive CTA animation
- Success state

## Phase 3 — Polish

- Smooth scroll (Lenis)
- Performance tuning
- Animation refinement

## Phase 4 — Advanced FX (Optional)

- Three.js shader glitch
- Audio layer
- Interactive distortion

---

# ⚠️ NON-NEGOTIABLES

- No heavy UI libraries (no Material UI, etc.)
- No page reloads
- No multi-page routing
- Maintain 60fps animation target
- Mobile responsiveness must not break immersion

---

# 🧩 FINAL INSTRUCTION ADDITION

> Use **Next.js + Tailwind + GSAP + Canvas** as the core stack to implement a **cinematic, scroll-driven waitlist experience**.
>
> GSAP controls the macro storytelling (scroll + sections), while Framer Motion handles micro-interactions.
>
> Canvas is used for the glitch system, with an upgrade path to WebGL (Three.js).
>
> The system must be optimized for **performance, smoothness, and immersion**.
