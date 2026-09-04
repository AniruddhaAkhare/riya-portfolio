# RIYA UMEKAR — CINEMATIC AI/ML PORTFOLIO

## Master Website Specification & Implementation Guide

---

# 01 — PROJECT OVERVIEW

Build a premium, cinematic, editorial-style personal portfolio website for:

# RIYA UMEKAR

**AI/ML Engineer | Full Stack Developer | Generative AI Enthusiast**

This website must NOT look like a conventional developer portfolio.

It should feel like an:

- Interactive digital experience
- Creative technology portfolio
- AI/ML engineer portfolio
- Editorial/fashion-inspired website
- Cinematic storytelling experience
- Premium creative developer website

The website's primary visual signature is an existing **smooth-scroll, frame-by-frame cinematic animation**.

The existing animation must be preserved and integrated as the main full-screen background experience.

The user will provide:

1. This README
2. A Pinterest reference image
3. The existing project/repository containing the frame animation

The Pinterest image is a **visual reference only**.

Do NOT copy the design literally.

Instead, understand and reproduce the visual language:

- Dark editorial composition
- Large typography
- Dense information layout
- Strong visual hierarchy
- Thin borders
- Dark red/cherry tones
- Large imagery
- Editorial spacing
- Premium interactions
- Asymmetrical layouts
- Bento grids
- Small technical metadata
- Cinematic transitions

The final website should feel original while clearly taking inspiration from the supplied visual direction.

---

# 02 — MOST IMPORTANT RULE

## DO NOT REBUILD THE EXISTING FRAME ANIMATION BEFORE INSPECTING IT.

First inspect the repository.

Identify:

- Framework
- Existing components
- Existing frame animation implementation
- Frame loading mechanism
- Scroll handling
- Canvas implementation
- Existing dependencies
- Existing styling system

If the current frame animation is already functional:

**PRESERVE IT.**

Do not replace it unnecessarily.

Build the portfolio around the existing cinematic system.

The existing animation is the most important visual feature of the website.

---

# 03 — CORE CREATIVE CONCEPT

The website should feel like a continuous cinematic film.

The user scrolls through the website.

As they scroll:

- The background animation progresses
- Typography changes
- Content enters and exits
- Bento cards reveal
- Projects appear
- Images move
- Text transforms
- Sections transition naturally

The experience should communicate:

> Riya doesn't just write code. She builds intelligent systems and digital experiences.

The overall identity should be:

**DARK + CINEMATIC + EDITORIAL + TECHNICAL + INTELLIGENT + PREMIUM**

---

# 04 — DESIGN PHILOSOPHY

Do not create a generic portfolio template.

Avoid:

- Generic SaaS layouts
- Bootstrap-style cards
- Basic centered hero sections
- Excessive glassmorphism
- Huge empty whitespace
- Generic gradient blobs
- Excessive neon
- Overused purple AI aesthetics
- Excessive floating animations
- Excessive particles
- Template-like sections

The website should feel:

- Dense
- Intentional
- Editorial
- Sophisticated
- Immersive
- Visually rich

However:

**Dense does NOT mean cluttered.**

Use:

- Bento grids
- Side metadata
- Large typography
- Project cards
- Marquee strips
- Skill tags
- Editorial labels
- Thin borders
- Numbers
- Timeline elements
- Images

to create visual richness.

---

# 05 — COLOR SYSTEM

Primary palette:

```text
Deep Black       #080707
Black Brown      #110B0B
Dark Cherry      #1A1010
Deep Crimson     #5A0909
Cherry Red       #8D1111
Warm Off White   #F5F0EA
Muted Text       #B8AAA3

Borders:

rgba(245,240,234,0.14)

Use subtle gradients:

#080707 → #1A1010
#110B0B → #5A0909

Red must feel like:

Dark cherry
Wine
Crimson
Burgundy

NOT:

Neon red
Gaming red
Cyberpunk red

Use red as an accent rather than the entire interface.

06 — TYPOGRAPHY

Typography is extremely important.

The website should have a premium editorial hierarchy.

Use:

Display Typography

For:

Hero
Major section headings
Project names
Numbers
CTA

Potential fonts:

Space Grotesk
Geist
Instrument Sans
Manrope
Inter

A different editorial display font may be used if it improves the visual result.

Do not use more than 2–3 font families.

Use:

Large uppercase headings
Tight line heights
Strong weight contrast
Letter spacing for metadata
Small uppercase labels

Example:

AI / ML

ENGINEER

or:

BUILDING

INTELLIGENT

SYSTEMS.
07 — GLOBAL LAYOUT

Use a full-screen cinematic background layer.

Architecture:

BODY
│
├── Cinematic Background
│
├── Dark Overlay / Gradient
│
└── Foreground Portfolio
    │
    ├── Navigation
    ├── Hero
    ├── About
    ├── Capabilities
    ├── Specializations
    ├── Marquee
    ├── Tech Stack
    ├── Projects
    ├── Experience
    ├── Current Status
    ├── Achievements
    ├── GitHub
    ├── Contact
    └── Footer

The background should remain visually continuous.

08 — CINEMATIC FRAME ANIMATION

The existing frame animation is:

240 frames
1920 × 1080
24 FPS equivalent
Approximately 10 seconds of source animation

Recommended asset structure:

public/
└── frames/
    ├── frame_0000.png
    ├── frame_0001.png
    ├── frame_0002.png
    ├── ...
    └── frame_0239.png

Use canvas rendering if the existing implementation allows it.

Requirements:

Scroll-controlled frame progression
Smooth interpolation
requestAnimationFrame
React refs rather than React state for every frame
Correct aspect ratio
Cover viewport
No image stretching
Resize handling
High-DPI handling
Progressive loading
Loading indicator
Frame failure fallback
Reduced-motion fallback

Do not put all 240 frames into visible <img> elements.

09 — FRAME PRELOADING

Because the sequence contains 240 high-resolution frames, performance must be considered carefully.

Recommended strategy:

Initial Load

Immediately preload:

frame_0000
frame_0001
frame_0002
...

for the first visible portion.

Progressive Loading

Continue loading the remaining frames after initial rendering.

Avoid blocking the entire website until all frames are loaded.

Use:

Image
ImageBitmap where useful
requestIdleCallback where appropriate
progressive loading
caching
requestAnimationFrame

Do not unnecessarily duplicate image data.

10 — FRAME CHAPTERS

Treat the website as a continuous cinematic sequence.

Suggested starting frame ranges:

HERO
0 → 60

ABOUT
60 → 100

CAPABILITIES
100 → 125

PROJECTS
125 → 175

EXPERIENCE
175 → 205

CONTACT
205 → 239

These values are NOT absolute.

Tune them based on actual visual movement.

The transition between chapters must feel continuous.

Do NOT reset the background when entering a new section.

11 — NAVIGATION

Create a fixed premium navigation.

Desktop:

RIYA UMEKAR          WORK ABOUT EXPERTISE EXPERIENCE CONTACT
                                      AVAILABLE

Left:

RIYA UMEKAR

Navigation:

WORK
ABOUT
EXPERTISE
EXPERIENCE
CONTACT

Right:

AVAILABLE FOR OPPORTUNITIES

Use a subtle status dot.

Navigation behavior:

At top

Transparent.

While scrolling

Slightly darker background.

Add:

subtle blur if appropriate
thin bottom border
active section indicator
smooth transition

Mobile:

compact logo
hamburger
fullscreen or dropdown menu
smooth navigation

Do not make the navbar oversized.

12 — HERO SECTION

The hero must immediately establish identity.

Content:

RIYA UMEKAR

AI/ML ENGINEER
FULL STACK DEVELOPER
GENERATIVE AI ENTHUSIAST

Main headline could use:

RIYA
UMEKAR

or:

BUILDING
INTELLIGENT
EXPERIENCES.

Supporting line:

Building intelligent solutions that solve real-world problems.

Primary CTA:

VIEW SELECTED WORK →

Secondary CTA:

LET'S CONNECT →

Social links:

GitHub
LinkedIn
Email

Bottom:

SCROLL TO EXPLORE ↓

The typography should be large.

Position typography carefully around the subject of the background animation.

Do NOT obscure the main subject unnecessarily.

13 — HERO MICROINTERACTIONS

Use subtle interactions:

text reveal
letter/word stagger
CTA magnetic movement
underline animation
scroll indicator movement
small status pulse

Do not animate everything simultaneously.

The cinematic background remains dominant.

14 — ABOUT SECTION

Section label:

01 / ABOUT

Main statement:

BUILDING INTELLIGENT SOLUTIONS THAT SOLVE REAL-WORLD PROBLEMS.

Body:

I am a B.Tech graduate in Information Technology from Prof. Ram Meghe Institute of Technology and Research, Amravati, with a strong interest in Artificial Intelligence, Machine Learning, Generative AI, and Full Stack Development.

I enjoy building practical applications that combine AI with modern software engineering. My experience includes developing RAG-based systems, conversational AI agents, predictive maintenance solutions, and full-stack web applications.

Use an editorial Bento composition.

15 — ABOUT BENTO GRID

Use an asymmetrical Bento layout.

Example structure:

┌───────────────────────────────┬─────────────┐
│                               │             │
│ BUILDING INTELLIGENT          │ CURRENT     │
│ SOLUTIONS                     │ FOCUS       │
│                               │             │
├───────────────────┬───────────┴─────────────┤
│                   │                         │
│   VISUAL / IMAGE  │     SHORT BIO           │
│                   │                         │
├───────────────────┴───────────────┬─────────┤
│ LOCATION                          │ STATUS  │
└───────────────────────────────────┴─────────┘

The exact layout can differ.

Cards should have:

Thin border
Dark background
Subtle cherry accent
Small label
Large typography
Hover transition
16 — WHAT I WORK WITH

Section label:

02 / CAPABILITIES

Heading:

WHAT I WORK WITH

Display:

Artificial Intelligence & Machine Learning
Generative AI, LLMs & RAG
LangChain & Vector Embeddings
Python & Machine Learning
Full Stack Web Development
REST APIs & Backend Development
Docker & CI/CD
SQL & NoSQL Databases

Use:

Bento cards
Animated tags
Typography
Hover states

Avoid a standard bullet list.

17 — SPECIALIZATIONS

Heading:

MY SPECIALIZATIONS

Create six editorial cards.

01
ARTIFICIAL INTELLIGENCE

Machine Learning, AI-driven applications & intelligent systems

02
GENERATIVE AI

LLM applications, RAG, prompt engineering & vector embeddings

03
RAG SYSTEMS

Retrieval-Augmented Generation, contextual search & knowledge retrieval

04
FULL STACK DEVELOPMENT

React, Node.js, Flask, FastAPI & REST APIs

05
AI AUTOMATION

Agentic AI, workflow automation & intelligent pipelines

06
ML ENGINEERING

Data preprocessing, ML models & AI solution development

18 — SPECIALIZATION INTERACTION

Each card may contain:

Number
Category
Description
Small technology labels
Arrow
Subtle hover movement

On hover:

Border accent
Arrow moves
Typography shifts slightly
Optional small image preview

Keep it subtle.

19 — INFINITE MARQUEE

Include at least one continuous text marquee.

Example:

AI • MACHINE LEARNING • GENERATIVE AI • RAG • FULL STACK • AGENTIC AI •

Second possible marquee:

BUILD • LEARN • EXPERIMENT • DEPLOY • REPEAT •

Requirements:

Seamless loop
No visible jump
Adjustable speed
Direction control
Responsive
Reduced-motion support

Use transform-based animation.

20 — INFINITE IMAGE MARQUEE

Create a horizontal image strip.

Possible content:

PROJECT IMAGE
PROJECT IMAGE
PROJECT IMAGE
PROJECT IMAGE
PROJECT IMAGE

It should continuously move horizontally.

Possible behavior:

automatic scrolling
pause on hover
slightly different speeds
alternate direction for another strip

Do not make it too fast.

This should feel editorial rather than like a carousel.

21 — TECH STACK

Section:

03 / TECHNOLOGY

Heading:

THE TOOLS BEHIND THE WORK.
PROGRAMMING / DEVELOPMENT

Use Riya's confirmed technologies where applicable.

FULL STACK DEVELOPMENT
React
Node.js
Flask
FastAPI
Express.js
REST APIs
AI / MACHINE LEARNING
Machine Learning
Generative AI
RAG
LangChain
Prompt Engineering
Hugging Face Transformers
Vector Embeddings
Agentic AI
DATABASES
MySQL
MongoDB
PostgreSQL
TOOLS / DEVOPS
Git
GitHub
Docker
GitHub Actions
Jenkins
MLflow
Postman
n8n
22 — TECH STACK VISUALIZATION

Do not simply display a giant list.

Use:

Bento cards
Skill chips
Typography
Small technical metadata
Animated borders
Hover states

Possible design:

┌────────────────────┬────────────────────┐
│ AI / ML            │ GENERATIVE AI      │
│                    │                    │
│ Python             │ LLMs               │
│ ML                 │ RAG                │
│ Transformers       │ LangChain          │
├────────────────────┼────────────────────┤
│ FULL STACK         │ DEVOPS             │
│                    │                    │
│ React              │ Git                │
│ Node               │ Docker             │
│ Flask              │ CI/CD              │
└────────────────────┴────────────────────┘
23 — FEATURED PROJECTS

This is one of the most important sections.

Section label:

04 / SELECTED WORK

Heading:

SELECTED WORK

Projects should feel like editorial case studies rather than generic cards.

24 — PROJECT 01
MACHINAORACLE

Category:

AI-POWERED PREDICTIVE MAINTENANCE

Description:

An AI-driven predictive maintenance system designed to transform unstructured machine logs into actionable insights.

Features:

Processes machine logs and documents
RAG-based AI architecture
LangChain + LLM integration
ChromaDB vector database
Failure prediction
Root cause analysis
Automated maintenance recommendations

Possible technology labels:

AI
RAG
LANGCHAIN
LLM
CHROMADB
PREDICTIVE MAINTENANCE

Make this the primary featured project.

Use a large visual area.

25 — PROJECT 02
SYNAPSE AI COPILOT

Category:

CONVERSATIONAL AI AGENT

Description:

A conversational AI system designed to integrate information from multiple sources and provide contextual responses.

Features:

Retrieval-Augmented Generation
Contextual memory
Email and document integration
Code repository integration
Autonomous tool execution
AI-powered productivity automation

Technology labels:

AI
RAG
AGENTS
LLM
AUTOMATION
TOOLS

Use a different layout from MachinaOracle.

26 — PROJECT LINKS

Project links will be added later.

Do NOT invent project URLs.

Use:

github: "",
live: "",
caseStudy: ""

All links must be configurable.

27 — PROJECT DATA ARCHITECTURE

Create:

src/data/projects.js

Structure:

export const projects = [
  {
    id: "machinaoracle",
    number: "01",
    title: "MachinaOracle",
    category: "AI-POWERED PREDICTIVE MAINTENANCE",
    description: "",
    features: [],
    technologies: [],
    image: "",
    github: "",
    live: "",
    caseStudy: "",
    featured: true,
    size: "large"
  },
  {
    id: "synapse-ai-copilot",
    number: "02",
    title: "Synapse AI Copilot",
    category: "CONVERSATIONAL AI AGENT",
    description: "",
    features: [],
    technologies: [],
    image: "",
    github: "",
    live: "",
    caseStudy: "",
    featured: true,
    size: "medium"
  }
];

Do not hardcode project information throughout components.

28 — PROJECT GRID

Use a Bento/editorial project grid.

Possible layout:

┌────────────────────────────────────┐
│                                    │
│         MACHINAORACLE               │
│         FEATURED                    │
│                                    │
└──────────────────────┬─────────────┘
                       │
                       │ SYNAPSE
                       │ AI COPILOT
                       │
┌──────────────────────┴─────────────┐
│                                    │
│       FUTURE PROJECTS              │
│       / PLACEHOLDERS               │
│                                    │
└────────────────────────────────────┘

Do not fabricate additional projects.

Future project slots can remain hidden or be configured later.

29 — PROJECT HOVER

Desktop project hover may include:

image zoom
cursor-following image preview
metadata reveal
title movement
red accent line
arrow movement

Do not apply every effect at once.

Mobile:

remove cursor-following preview
use tap interactions
preserve readability
30 — EXPERIENCE

Section label:

05 / EXPERIENCE

Heading:

EXPERIENCE

Use an editorial timeline.

FULL STACK DEVELOPER INTERN
Fireblaze AI School
JUNE 2025 — DECEMBER 2025

Responsibilities:

Developed responsive web applications using React and TypeScript
Worked across frontend, backend and database development
Implemented application features and integrations
Worked with real-time database functionality
Focused on application performance and development
AI & MACHINE LEARNING INTERN
Infosys Springboard 6.0
AUGUST 2025 — OCTOBER 2025

Responsibilities:

Worked on Artificial Intelligence and Machine Learning
Built and explored ML models
Performed data preprocessing
Worked on AI-driven solutions for real-world applications
31 — EXPERIENCE TIMELINE

Use:

01
│
├── Full Stack Developer Intern
│   Fireblaze AI School
│
02
│
├── AI & Machine Learning Intern
    Infosys Springboard 6.0

Animate the line progressively as the user scrolls.

Use:

thin line
numbered nodes
subtle red accent
text reveal
32 — CURRENT STATUS

Section:

06 / NOW

Create Bento cards.

EDUCATION

B.Tech / B.E. Information Technology — 2026 Graduate

FOCUS

AI/ML, Generative AI & Full Stack Development

WORKING ON

AI-powered applications and intelligent automation

LEARNING

Advanced Generative AI, Agentic AI & ML Engineering

OPEN TO

Software Engineering, AI/ML & Full Stack opportunities

LOCATION

Maharashtra, India

33 — ACHIEVEMENTS

Section:

07 / ACHIEVEMENTS

Heading:

THINGS WORTH CELEBRATING.

Confirmed achievements:

Winner — SRIJAN'26 Hackathon
2nd Runner Up — TechSprint Hackathon
Winner — INNOVO'25 Hackathon
Winner — Techkruti Hackathon
Infosys Springboard Virtual Internship 6.0 — AI & Machine Learning
Salesforce AI Agent Developer — LastMile Program
GDG on Campus PRMIT&R — Domain Executive, Web Development

Do not invent dates or additional information.

34 — ACHIEVEMENT DESIGN

Use oversized numbers.

Example:

01
WINNER

SRIJAN'26
HACKATHON

Another:

02
2ND RUNNER UP

TECHSPRINT
HACKATHON

Use a Bento layout.

35 — GITHUB SECTION

Section:

08 / OPEN SOURCE

Heading:

CODE IN PUBLIC.

Display:

GitHub Stats
Top Languages
GitHub Streak
Contribution Graph

Add:

VIEW GITHUB →

The actual GitHub URL should be stored centrally.

Do not fabricate follower counts or statistics.

If GitHub embeds depend on external services, handle failure gracefully.

36 — CONTACT SECTION

Section:

09 / CONTACT

Large CTA:

LET'S BUILD SOMETHING INTELLIGENT.

Supporting copy:

Open to software engineering, AI/ML and full-stack opportunities.

Links:

GITHUB →
LINKEDIN →
EMAIL →

Email should use:

mailto:

Optionally implement:

COPY EMAIL

with a small confirmation animation.

37 — FINAL CTA DESIGN

Make the final CTA visually powerful.

Possible structure:

──────────────────────────────────────

LET'S BUILD

SOMETHING

INTELLIGENT.

                 GET IN TOUCH →

──────────────────────────────────────

Use:

giant typography
cinematic background
subtle red gradient
minimal supporting text

Do not overload the CTA.

38 — FOOTER

Footer content:

RIYA UMEKAR

AI / ML ENGINEER
FULL STACK DEVELOPER

Navigation:

Work
About
Expertise
Experience
Contact

Bottom:

© 2026 RIYA UMEKAR

BUILT WITH AI, CODE & CURIOSITY.

Include:

BACK TO TOP ↑
39 — CUSTOM CURSOR

Desktop only.

Create a subtle custom cursor.

Normal:

small dot

Project hover:

VIEW

Link hover:

expanded ring

Optional:

DRAG

or directional indicator.

Important:

Disable custom cursor on:

mobile
touch devices
reduced-motion mode if appropriate

The cursor must never interfere with usability.

40 — MAGNETIC BUTTONS

Use subtle magnetic interaction on primary CTA buttons.

Examples:

VIEW SELECTED WORK →
LET'S CONNECT →

The button can move slightly toward the cursor.

Do not make the movement excessive.

41 — TEXT ANIMATIONS

Use high-quality text animations inspired by libraries such as:

React Bits
Motion
Magic UI
Aceternity UI

Potential effects:

split text reveal
blur reveal
character stagger
word stagger
scroll reveal
text loop
gradient text
subtle scramble

Use them primarily for:

Hero
Section headings
Project titles
Final CTA

Do not animate every paragraph.

42 — IMAGE EFFECTS

Possible image effects:

image reveal
clip-path reveal
subtle scale
grayscale-to-color
cursor-following preview
slight distortion

Use sparingly.

The cinematic background already provides significant motion.

43 — BENTO ANIMATION

Bento cards should enter with:

staggered reveal
subtle translation
opacity
slight scale

Hover:

border transition
small movement
image zoom
metadata reveal

Avoid:

floating forever
excessive rotation
3D spinning
excessive glow
44 — INFINITE SCROLL SOURCES

When useful, use or adapt high-quality implementations inspired by:

React Bits

Text, cursor, scroll, image and animation components.

Magic UI

Marquee, animated typography, cards and borders.

Aceternity UI

Hero effects, cards and scroll interactions.

Animata

Marquee and smaller animation components.

SmoothUI

Infinite sliders, image/card interactions and animated React components.

Shadcn Blocks

Marquee and larger reusable sections.

Hover.dev

Hover, button and cursor interactions.

Do not install entire libraries unnecessarily.

Prefer extracting/adapting only the components actually needed.

45 — ANIMATION LIBRARY STRATEGY

Recommended:

GSAP + ScrollTrigger

Use for:

scroll choreography
cinematic frame synchronization
pinned sections
horizontal sections
complex timelines
project entrances
Motion for React

Use for:

buttons
hover
small transitions
layout animation
simple reveals

Avoid having multiple libraries control the exact same animation.

46 — ANIMATION HIERARCHY

The animation hierarchy is:

1. Cinematic frame animation
2. Section transitions
3. Text/image reveals
4. Hover interactions
5. Decorative motion

The cinematic animation must always feel like the hero.

47 — NO MOTION OVERLOAD

Avoid:

excessive particles
excessive glow
constant floating
bouncing cards
animated backgrounds everywhere
too many cursor effects
every text element moving
random 3D objects

Every animation must have a purpose.

48 — SCROLL EXPERIENCE

Scrolling should feel smooth and natural.

Use:

smooth scrolling
scroll progress
section activation
frame synchronization
text reveals
image reveals
marquee sections
subtle parallax

Do not create aggressive scroll-jacking.

The user should always feel in control.

49 — RESPONSIVE DESIGN

Support:

1440+
1024
768
390
360

Mobile must be intentionally designed.

Do NOT simply shrink desktop.

50 — MOBILE BEHAVIOR

On mobile:

Bento cards collapse intelligently
Navigation becomes compact
Custom cursor disappears
Project cards become vertical
Marquee becomes slower
Typography scales
Background composition adjusts
Touch replaces hover
No horizontal overflow

The frame animation should remain visually useful without destroying performance.

If necessary, optimize mobile frame loading separately.

51 — ACCESSIBILITY

Implement:

semantic HTML
correct heading hierarchy
alt text
keyboard navigation
focus states
accessible buttons
accessible navigation
sufficient contrast
reduced motion

Support:

@media (prefers-reduced-motion: reduce)

For reduced-motion users:

reduce animation substantially
disable unnecessary effects
use a representative static frame if appropriate

Content must remain fully accessible.

52 — PERFORMANCE

Performance is extremely important.

Avoid:

React re-render on every frame
loading all images into DOM
unnecessary state updates
huge JavaScript bundles
duplicate assets
unoptimized project images
unnecessary animation libraries

Use:

Canvas
requestAnimationFrame
refs
progressive frame loading
lazy image loading
code splitting where useful
cleanup
responsive image handling
53 — DATA ARCHITECTURE

Centralize content.

Recommended:

src/data/
├── profile.js
├── projects.js
├── skills.js
├── experience.js
└── achievements.js

Components should consume data.

Do not scatter profile information throughout JSX.

54 — PROFILE DATA

Use:

export const profile = {
  name: "Riya Umekar",

  role:
    "AI/ML Engineer | Full Stack Developer | Generative AI Enthusiast",

  headline:
    "Building intelligent solutions that solve real-world problems.",

  education:
    "B.Tech / B.E. Information Technology — 2026 Graduate",

  location:
    "Maharashtra, India",

  focus:
    "AI/ML, Generative AI & Full Stack Development",

  github: "",
  linkedin: "",
  email: ""
};

Do not invent URLs.

55 — EXPERIENCE DATA

Keep experience in:

src/data/experience.js

Each entry should support:

id
number
role
company
startDate
endDate
description
responsibilities
56 — ACHIEVEMENT DATA

Keep achievements in:

src/data/achievements.js

Each item:

id
number
title
organization
type
description

Do not fabricate missing fields.

57 — SKILLS DATA

Keep skills in:

src/data/skills.js

Categories:

AI / ML
Generative AI
RAG
Full Stack
Backend
Databases
DevOps
Tools
58 — RECOMMENDED COMPONENT STRUCTURE

Use this as a starting point.

Adapt it to the existing project.

src/
├── components/
│   ├── Navigation.jsx
│   ├── CustomCursor.jsx
│   ├── CinematicBackground.jsx
│   ├── ScrollProgress.jsx
│   ├── MagneticButton.jsx
│   ├── SectionLabel.jsx
│   ├── RevealText.jsx
│   ├── ImageReveal.jsx
│   ├── Marquee.jsx
│   ├── BentoGrid.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectPreview.jsx
│   ├── SkillTag.jsx
│   └── AchievementCard.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── WhatIWorkWith.jsx
│   ├── Specializations.jsx
│   ├── TechStack.jsx
│   ├── FeaturedProjects.jsx
│   ├── Experience.jsx
│   ├── CurrentStatus.jsx
│   ├── Achievements.jsx
│   ├── Github.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── data/
│   ├── profile.js
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── achievements.js
│
├── hooks/
│   ├── useScrollProgress.js
│   ├── useMediaQuery.js
│   └── useReducedMotion.js
│
├── utils/
│   └── frameLoader.js
│
└── App.jsx

Do not restructure an already-working project unnecessarily.

59 — IMAGE ASSETS

Project imagery should be optimized.

Use:

WebP/AVIF where practical
lazy loading
responsive sizes
appropriate aspect ratios

Do not use enormous raw images unnecessarily.

60 — VISUAL GRAIN

A subtle film grain/noise layer may be added.

It should be:

very subtle
low opacity
non-interactive
performant

It should create an editorial/film feeling.

Do not make the page visibly noisy.

61 — BORDER SYSTEM

Use thin borders consistently.

Example:

border: 1px solid rgba(245,240,234,0.14);

Hover:

slightly stronger border

Avoid thick borders.

62 — SECTION LABELS

Use small labels such as:

01 / ABOUT
02 / CAPABILITIES
03 / TECHNOLOGY
04 / SELECTED WORK
05 / EXPERIENCE
06 / NOW
07 / ACHIEVEMENTS
08 / OPEN SOURCE
09 / CONTACT

These create an editorial structure.

63 — EDITORIAL DETAILS

Use:

page numbers
tiny labels
small arrows
technical metadata
thin rules
horizontal dividers
uppercase labels
small status dots

These details should make the site feel designed rather than templated.

64 — DENSITY RULE

The website should feel filled.

Do not create large empty sections.

Instead use:

Bento layouts
side metadata
project information
skill clusters
large typography
image strips
timeline content
statistics only when real
editorial labels

Maintain breathing room but avoid unnecessary blank space.

65 — CONTENT ACCURACY

ONLY use information contained in this README.

Do NOT fabricate:

projects
project metrics
clients
testimonials
GitHub statistics
profile views
followers
awards
certifications
employers
responsibilities
dates
technologies

If information is missing:

Use:

configurable placeholder

or omit it.

66 — SOCIAL LINKS

Social links are not currently supplied.

Keep them configurable:

github: "",
linkedin: "",
email: ""

Do not invent them.

67 — FUTURE EXTENSIBILITY

The architecture should make it easy to add:

additional projects
project case studies
GitHub links
LinkedIn
email
certificates
additional experience
additional achievements

without rewriting sections.

68 — PROJECT CARD STATES

Every project should support:

Default

Title + category + image.

Hover

Additional metadata.

Active

Optional detailed preview.

Mobile

Tap-friendly layout.

69 — LOADING EXPERIENCE

Because the cinematic sequence may take time to initialize:

Create a premium loading state.

Example:

RIYA UMEKAR

LOADING EXPERIENCE

[██████████████░░░░]

01 / 240

Use subtle animation.

Do not make loading unnecessarily long.

Allow content to become available as soon as practical.

70 — ERROR HANDLING

If frame loading fails:

continue rendering available frames
avoid breaking the website
show fallback frame if possible
log useful errors in development
do not expose technical errors to users

If external GitHub stats fail:

show a graceful fallback
retain GitHub link
71 — SEO

Add:

page title
meta description
Open Graph metadata
semantic headings
favicon
appropriate image metadata

Suggested title:

Riya Umekar — AI/ML Engineer & Full Stack Developer

Suggested description:

Portfolio of Riya Umekar — AI/ML Engineer, Full Stack Developer and Generative AI enthusiast building intelligent digital solutions.
72 — FINAL PAGE FLOW

The intended experience:

NAVIGATION

↓

HERO
Cinematic introduction

↓

ABOUT
Who Riya is

↓

WHAT I WORK WITH
Capabilities

↓

SPECIALIZATIONS
Areas of expertise

↓

INFINITE MARQUEE
AI / ML / GEN AI / RAG / FULL STACK

↓

TECH STACK
Tools and technologies

↓

SELECTED WORK
MachinaOracle
Synapse AI Copilot

↓

INFINITE IMAGE STRIP

↓

EXPERIENCE
Professional timeline

↓

CURRENT STATUS
What Riya is doing now

↓

ACHIEVEMENTS
Hackathons / programs / community

↓

GITHUB
Code and contributions

↓

FINAL CTA
Let's build something intelligent

↓

FOOTER
73 — IMPLEMENTATION PHASES
PHASE 1 — INSPECTION

Before coding:

inspect repository
understand framework
inspect existing frame animation
inspect dependencies
inspect existing styles

Do not modify anything yet.

PHASE 2 — DESIGN SYSTEM

Implement:

colors
typography
borders
spacing
global background
responsive variables
PHASE 3 — CINEMATIC SYSTEM

Integrate:

frame loader
canvas
scroll progress
preload strategy
mobile strategy
reduced motion
PHASE 4 — NAVIGATION + HERO

Build:

navbar
hero
typography
CTAs
social links
scroll indicator
PHASE 5 — ABOUT + BENTO

Build:

About
What I Work With
Bento components
PHASE 6 — SPECIALIZATIONS + MARQUEE

Build:

specialization cards
infinite text marquee
image marquee
PHASE 7 — TECH STACK

Build:

skill categories
animated tags
technology Bento layout
PHASE 8 — PROJECTS

Build:

project data
project cards
featured project
hover interactions
configurable URLs
PHASE 9 — EXPERIENCE + STATUS

Build:

timeline
current status Bento
PHASE 10 — ACHIEVEMENTS + GITHUB

Build:

achievement cards
GitHub section
fallback handling
PHASE 11 — CONTACT + FOOTER

Build:

final CTA
social links
email
footer
PHASE 12 — POLISH

Add:

text reveals
image reveals
cursor
magnetic buttons
subtle parallax
section transitions
PHASE 13 — PERFORMANCE

Optimize:

frame loading
images
bundle
animation
mobile performance
PHASE 14 — QA

Test:

desktop
tablet
mobile
reduced motion
keyboard
slow network
frame loading failure
external service failure
74 — ANTIGRAVITY DEVELOPMENT RULES

When working on this project:

RULE 1

Inspect before modifying.

RULE 2

Preserve existing working functionality.

RULE 3

Do not replace the cinematic frame animation unless necessary.

RULE 4

Do not fabricate content.

RULE 5

Do not invent URLs.

RULE 6

Do not install unnecessary dependencies.

RULE 7

Use reusable components.

RULE 8

Centralize content in data files.

RULE 9

Prioritize performance.

RULE 10

Test after each major implementation phase.

75 — FINAL VISUAL CHECK

The final site should NOT look like:

Navbar
↓
Centered Hero
↓
About Card
↓
Skills Grid
↓
Project Cards
↓
Contact

It should feel more like:

CINEMATIC FRAME
        +
EDITORIAL TYPOGRAPHY
        +
BENTO GRID
        +
INFINITE IMAGE STRIPS
        +
AI / TECH CONTENT
        +
SCROLL STORYTELLING
        +
PREMIUM MICROINTERACTIONS
76 — FINAL CREATIVE DIRECTION

The site should feel like a cinematic editorial publication about a technologist.

Think:

fashion editorial × creative developer × AI engineer × digital studio

not:

resume website × SaaS landing page

The background animation should create the emotional layer.

The foreground content should create the informational layer.

Together they should create one cohesive experience.

77 — FINAL SUCCESS CRITERIA

The website is successful when:

The first screen immediately communicates who Riya is.
The frame animation feels integrated rather than pasted behind a website.
Scrolling feels cinematic.
Typography feels editorial.
Bento grids make the information visually interesting.
Infinite marquees add movement without distraction.
Projects feel like real case studies.
Skills feel visually rich.
Experience feels professional.
Achievements feel credible.
Contact feels memorable.
Mobile feels intentionally designed.
The site loads reasonably quickly.
No fabricated information exists.
No broken links are introduced.
No unnecessary dependencies are added.
The console is clean.
The site feels original.
The site does NOT feel like a template.
78 — FINAL EXPERIENCE STATEMENT

The user should leave the website thinking:

"This isn't just another developer portfolio."

The intended emotional progression is:

WHO IS SHE?
      ↓
WHAT DOES SHE BUILD?
      ↓
WHAT DOES SHE KNOW?
      ↓
WHAT HAS SHE BUILT?
      ↓
WHAT HAS SHE ACHIEVED?
      ↓
WHAT IS SHE WORKING ON?
      ↓
HOW CAN I CONNECT?

The final experience should communicate:

BUILDING INTELLIGENT SYSTEMS.
CREATING DIGITAL EXPERIENCES.
LEARNING WHAT'S NEXT.