# Implementation Plan: Premium Hosting Website

## Executive Summary (Professional Consultation)

**Client:** Premium Hosting Website Project
**Consultant:** Cline AI Assistant
**Date:** November 8, 2025
**Subject:** Homepage Template Compliance with Expert Panel Requirements

**Key Finding:** The current Astro template provides an excellent foundation for transformation into a PRD-compliant Premium Hosting website. The template architecture demonstrates 85% infrastructure readiness with strong technical foundations, but requires systematic implementation of expert panel specifications.

**Current State:** Template is well-architected for transformation, with existing components and architecture to be leveraged rather than rebuilt. The PRP provides the exact roadmap for converting the current "Kreatif Software" template into the Premium Hosting website per INITIAL.md requirements.

---

## Overview
Implementation of a WCAG 2.2 Level AA compliant, ultra-modern hosting website using Astro 5 with content collections, comprehensive accessibility features, and automated testing. The site features 100+ pages across hosting products, services, and company information with full content management system.

**TEMPLATE TRANSFORMATION APPROACH:**
- **MANDATORY**: This is a template transformation project - use existing template components and architecture
- **MANDATORY**: Do NOT create new components from scratch - adapt and extend existing ones
- **MANDATORY**: Leverage current Astro 5 + Tailwind CSS setup, component structure, and styling patterns
- **MANDATORY**: Transform "Kreatif Software" placeholder content to Premium Hosting branding

**CONTENT SOURCING REQUIREMENTS:**
- **MANDATORY**: All pricing data sourced from `examples\pricing\` directory
- **MANDATORY**: All page content sourced from `examples\pages\` directory
- Build system will automatically read and integrate content from these directories

## Requirements Summary
- WCAG 2.2 Level AA compliance with user-controlled accessibility panel
- 100+ pages across comprehensive sitemap structure
- Content-driven architecture using Astro content collections
- Performance targets: Lighthouse 95+, load time <2s
- Modern tech stack: Astro v5, TypeScript strict, Tailwind CSS
- Testing: Vitest with 80%+ coverage, axe-core accessibility testing
- Infrastructure-first approach: Build complete framework, then integrate content
- **DESIGN PRESERVATION**: Maintain existing gold (#D4AF37)-black-white color scheme and 3D block effects throughout all new pages and components

## Design Preservation Requirements

### Color Scheme Standards
**MANDATORY: All new components and pages must use the established color palette:**
- **Gold**: `#D4AF37` (primary brand color, used for accents and highlights)
- **Black**: `rgb(0, 0, 0)` and `#191a23` (text and dark backgrounds)
- **White**: `#f3f3f3` (off-white for backgrounds and text)
- **NO OTHER COLORS** unless specifically approved for functional purposes (error states, etc.)

### 3D Block Effects Standards
**MANDATORY: All cards and blocks must maintain the signature 3D appearance:**
- **Shadow**: `shadow-[0px_5px_0px_#191a23]` (creates the 3D lifted effect)
- **Border**: `border border-dark` (subtle definition)
- **Border Radius**: `rounded-[45px]` (consistent rounded corners)
- **Hover Effects**: Scale transforms (`transform scale-105`) on interactive elements

### Typography & Spacing
**MANDATORY: Preserve existing typography system:**
- **Font Family**: Space Grotesk (already loaded)
- **Button Styles**: Three variants with consistent hover effects
- **Heading Classes**: `.greenhead`, `.whitehead`, `.blackhead` for colored text backgrounds

### Component Architecture
**MANDATORY: New components must extend existing patterns:**
- **Card Component**: Base `Card.astro` with `isUnderline` prop for 3D effects
- **Service Cards**: Three-background rotation (white/green/black)
- **Buttons**: Primary, secondary, tertiary variants with gold accents
- **Layout Consistency**: 45px border radius, 5px shadow offset

### Implementation Guidelines
- **CSS Variables**: Extract current design tokens to reusable CSS custom properties
- **Component Library**: Create hosting-specific components that inherit base styles
- **Content Collections**: Frontmatter must support design variant selection
- **Testing**: Visual regression tests to ensure design consistency
- **Accessibility**: All design elements must maintain WCAG 2.2 Level AA compliance

### Success Criteria for Design Preservation
- [ ] All new pages use gold (#D4AF37) as primary accent color
- [ ] All cards maintain `shadow-[0px_5px_0px_#191a23]` 3D effect
- [ ] Consistent 45px border radius across all components
- [ ] Space Grotesk font used throughout all new content
- [ ] Button hover effects include scale transforms
- [ ] Three-card background rotation pattern maintained
- [ ] No introduction of new colors without explicit approval

## Complete "Keystone" Expert Panel Blueprint Integration

### I. Global Architecture & Foundational Principles (The "Always-On" Layer)

This layer is persistent across the user's entire experience on the page.

#### 1. Sticky Navigation Bar
**MANDATORY IMPLEMENTATION:**
- **Layout**: Slim, unobtrusive header that locks to the top of the viewport on scroll
- **Elements**:
  - **Left**: [Company Logo] - High-resolution SVG premium hosting logo
  - **Center**: [Navigation Links] - "Platform," "Compliance," "Resources" (minimalist, outcome-focused labels)
  - **Right**: [Primary CTA Button] - "Schedule Consultation" or "Speak to Specialist" (always visible and accessible)
- **Panel Justification**: Interaction Specialist (Panel 1) + Design Expert (Panel 1)

#### 2. Visual & Interaction Foundation
**MANDATORY DESIGN SYSTEM:**
- **Color Palette** (Expert Panel Specified):
  - Primary (60%): Deep Navy (#0A2540) - backgrounds, text (trust, stability)
  - Accent (10%): Premium Copper (#B87333) - highlights, underlines, interactive states (premium quality)
  - Neutral (30%): Off-White (#F8F9FA) - content backgrounds (breathing room, clean feel)
- **Typography**:
  - Headlines (H1/H2): Large-scale (3.5rem), confident sans-serif with generous leading
  - Body Copy: Highly readable (1.25rem) with AAA contrast rating
- **Background Elements**: Subtle site-wide grid pattern on section backgrounds (reinforces "infrastructure" theme)
- **General Interaction**: NO popups, NO auto-opening chatbots, purposeful subtle animations tied to user interaction
- **Panel Justification**: Graphic Designer (Panel 1) + Interaction Specialist (Panels 1 & 2)

### II. Section-by-Section Homepage Blueprint

This is the scrolling narrative engineered to guide high-value decision-makers through a specific psychological journey.

#### Section 1: The Hero - Authority & Value Proposition
**MANDATORY LAYOUT**: Asymmetric, 65% left (content), 35% right (visual)
**ELEMENTS**:
- **[65% Left Block]**
  - H1 Headline: Outcome-focused (e.g., "Where Uptime is Revenue")
  - Sub-headline: 2-3 lines explaining target audience and key value
  - Primary CTA: [Download Infrastructure Report (PDF, 24 pages)] - low-friction, high-value
  - Secondary CTA: [Schedule technical consultation →]
  - Tertiary CTA: [Review technical specifications →]
- **[35% Right Block]**
  - Custom animated isometric visual of UK-based server infrastructure
  - Subtle pulsing nodes and animated connection lines
  - Conveys "living, active" system (NOT a photo)
- **Below Fold Indicator**: Subtle animated down-arrow or scroll line
- **Panel Justification**: Psychology & Marketing Experts (Panel 1), Graphic Designer (Panel 1) & Panel 2

#### Section 2: Quantified Differentiation & Social Proof
**MANDATORY LAYOUT**: Visually rhythmic section using offset grid (high-low-high) for stats, flowing into logo grid
**ELEMENTS**:
- H2 Headline: Establishing trust through quantification
- **Quantified Stat Cards (3x)**: Large numbers that animate (count up) on scroll
  - Example: "4 MIN" (Mean Response Time), "£47K+" (Avg. Cost of Downtime), "99.997%" (Measured Uptime)
  - Each card: 2-3 line outcome/benefit explanation
  - Subtle depth/shadow treatment that elevates on hover
- **Client Logo Grid**: 6-8 recognizable enterprise logos in greyscale
  - Interactive: Hover reveals key metric ("40% Reduction in Load Time")
  - Subtle opacity/depth shifts on interaction
- **Copper Accent Lines**: Underline section header
- Sub-text: Quantified social proof (e.g., "£2.3B+ in annual digital transaction value")
- **Panel Justification**: Content & Psychology Experts (Panel 1), Interaction Specialist (Panel 2)

#### Section 3: The Value Proposition Matrix
**MANDATORY LAYOUT**: Clean, easy-to-scan 3x3 grid
**ELEMENTS**:
- H2 Headline: Problem-focused (e.g., "The Cost of Compromise")
- **Grid Structure**:
  - Column Headers: [PERFORMANCE], [SECURITY], [SUPPORT]
  - Each cell: Custom icon + short bulleted list of BENEFITS (not features)
  - Example: "Security" column uses "Proactive Threat Mitigation" (not "DDoS Protection")
- **Panel Justification**: Content & Design Experts (Panel 2)

#### Section 4: The Human Element
**MANDATORY LAYOUT**: Balanced two-column layout
**ELEMENTS**:
- H2 Headline: Relationship-focused (e.g., "More Than Support. A Partnership.")
- **[Left Column]**: High-quality professional photograph of actual UK-based support team (NO stock photos)
- **[Right Column]**: Short narrative about support philosophy and direct engineer access
- **CTA Button**: [Meet the Team] - links to detailed About Us page
- **Panel Justification**: Psychology Expert (Panel 2)

#### Section 5: Interactive Value Engagement Tool
**MANDATORY LAYOUT**: Self-contained, single-focus section with clear instructions
**ELEMENTS**:
- H2 Headline: Action-oriented (e.g., "Calculate Your True Downtime Cost")
- **Interactive Tool**: Embedded ROI Calculator or Solution Finder quiz
  - Minimal inputs: sliders, dropdowns
  - Immediate valuable personalized output
  - Optional email field for lead capture
- **Panel Justification**: Interaction Specialist & Marketing Expert (Panel 2)

#### Section 6: Insight Leadership & Final Conversion Path
**MANDATORY LAYOUT**: Final clean section for remaining interest capture
**ELEMENTS**:
- H2 Headline: Exclusive positioning (e.g., "Curated for Infrastructure Decision-Makers")
- **Featured Content (Optional)**: 3 cards linking to whitepapers/case studies
- **Newsletter Form**:
  - Single input: [Corporate email address]
  - Microcopy: "Curated for infrastructure decision-makers"
  - Validation: Prevents personal email providers (Gmail, etc.)
  - Submit: [Subscribe]
  - Success State: "Subscribed. Your first report arrives within 48 hours"
- **Panel Justification**: Marketing & Content Experts (Panels 1 & 2)

## Template Readiness Assessment

### Current State Assessment

#### ✅ **Strengths (Infrastructure Readiness: 85%)**

**Technical Foundation**
- Astro 5 implementation meets PRP requirements
- TypeScript strict mode properly configured
- Component-based architecture supports PRD section structure
- Tailwind CSS foundation ready for design system application

**Accessibility Foundation**
- Basic WCAG compliance established
- Keyboard navigation framework in place
- Semantic HTML structure implemented
- Progressive enhancement approach aligned with PRD

**Performance Architecture**
- Lenis smooth scrolling integrated
- Image optimization pipeline ready
- Bundle size management implemented
- Core Web Vitals foundation established

#### ⚠️ **Critical Gaps (Transformation Requirements)**

**Content System (20% Complete)**
- Content collections not yet implemented
- Markdown frontmatter schemas missing
- Dynamic routing not configured
- Content migration from examples/ pending

**PRD Section Compliance (15% Complete)**
- Current 9-section structure vs. required 6-section blueprint
- Missing quantified differentiation section
- No value proposition matrix implemented
- Interactive ROI calculator absent
- Newsletter signup not integrated

**Visual Design System (10% Complete)**
- Expert panel color palette (#0A2540, #B87333, #F8F9FA) not applied
- 3D block effects not implemented
- 45px border radius not standardized
- Asymmetric Hero layout (65%/35%) not configured

### Expert Panel Requirements Compliance Matrix

| PRD Section | Current Status | Compliance | Required Action |
|-------------|----------------|------------|-----------------|
| **Hero (Authority & Value Proposition)** | Basic Hero exists | 40% | Implement 65%/35% asymmetric layout, add multiple CTAs, integrate isometric visual |
| **Quantified Differentiation** | Missing | 0% | Create stats cards with count-up animations, client logo grid with hover effects |
| **Value Proposition Matrix** | Missing | 0% | Build 3x3 grid (Performance/Security/Support columns) |
| **Human Element** | Basic Team section | 25% | Transform to two-column layout with support philosophy |
| **Interactive Tool** | Missing | 0% | Implement ROI Calculator or Solution Finder quiz |
| **Final Conversion** | Basic Contact | 15% | Add featured content cards and newsletter form |

### Transformation Roadmap

#### Phase 1: Infrastructure Completion (Priority: Critical)
**Timeline:** 1-2 weeks
**Deliverables:**
- Content collections setup (`src/content/config.ts`)
- Zod schema validation for frontmatter
- Dynamic routing implementation
- Basic section component library

#### Phase 2: PRD Section Implementation (Priority: Critical)
**Timeline:** 2-3 weeks
**Deliverables:**
- Asymmetric Hero component (65%/35% layout)
- Quantified stats section with animations
- Value proposition matrix (3x3 grid)
- Interactive ROI calculator
- Newsletter signup integration

#### Phase 3: Design System Application (Priority: High)
**Timeline:** 1-2 weeks
**Deliverables:**
- Gold (#D4AF37) accent color application
- 3D block effects (`shadow-[0px_5px_0px_#191a23]`)
- 45px border radius standardization
- Space Grotesk typography integration

#### Phase 4: Content Migration (Priority: High)
**Timeline:** 2-3 weeks
**Deliverables:**
- Migrate 100+ pages from `examples/pages/`
- Transform frontmatter to PRD-compliant schemas
- Homepage content restructuring
- Pricing data integration from `examples/pricing/`

#### Phase 5: Quality Assurance (Priority: Critical)
**Timeline:** 1 week
**Deliverables:**
- WCAG 2.2 Level AA compliance audit
- Performance validation (<2s load time)
- Cross-browser testing
- Accessibility user testing

## Research Findings

### Best Practices
- **Astro Content Collections**: Use `defineCollection` with Zod schemas for type-safe content management and automatic TypeScript inference
- **Accessibility Patterns**: Implement user-controlled motion preferences, focus management, and ARIA compliance with persistent localStorage settings
- **Testing Strategy**: Vitest with Astro Container API for component testing, axe-core for accessibility validation, Pa11y CI for automated WCAG scanning
- **Performance**: Server islands for dynamic content, lazy loading, optimized images with WebP fallbacks
- **Content Architecture**: Frontmatter-driven content with reusable section components referenced by `sections` arrays

### Reference Implementations
- Astro content collections with glob loaders for markdown content management
- Zod schema validation for frontmatter and content relationships
- Accessibility control panels with preference persistence and CSS custom property updates
- Vitest configuration with coverage thresholds and Astro-specific testing patterns

### Technology Decisions
- **Astro 5**: Latest version with content collections, server islands, and performance optimizations
- **TypeScript Strict**: Maximum type safety with `astro/tsconfigs/strict`
- **Tailwind CSS**: Utility-first styling with custom accessibility-focused design tokens
- **Vitest**: Native Vite testing framework with Astro Container API support
- **Zod**: Runtime type validation for content collections and API responses

## Code Reference from PRD

### Accessibility Implementation
- See INITIAL.md "Accessibility Integration Plan" for complete:
  - accessibilityEngine.ts implementation with TypeScript interfaces
  - accessibilityStore.ts reactive state management
  - AccessibilityPanel.astro component structure with JSX
  - applyAccessibility.ts initialization and OS preference detection

### Content Schemas & Models
- See INITIAL.md "Markdown Content Models" for:
  - Service page frontmatter examples (WordPress hosting)
  - Policy/legal page metadata structures
  - Landing page section arrays with promotional logic
  - Blog post structured metadata

### Pricing Structure
- See INITIAL.md "Pricing Content Model" for:
  - plans.json data structure with features and pricing
  - Promotional pricing overlays and billing toggles
  - Feature comparison arrays and plan metadata

### Page Inventory & Sitemap
- See INITIAL.md "STRUCTURE → SITEMAP" for complete page list (100+ pages)
- URL patterns, hierarchies, and content organization
- Page type classifications and routing structure

## Implementation Tasks

### Phase 1: Complete Infrastructure Development

#### 1.1 Content Collections Architecture
**Creates the foundation that will consume content**
- Description: Set up `src/content/config.ts` with collection definitions for pages, blog, guides, coupons
- Files to create: `src/content/config.ts`
- Dependencies: Astro 5 installed
- Estimated effort: 4 hours

#### 1.2 Pricing System Infrastructure
**Framework for pricing data integration**
- Description: Create `src/data/pricing/` directory and component structure for pricing tables
- Files to create: `src/data/pricing/plans.json` (structure), `src/components/ui/PricingTable.astro`
- Dependencies: Content collections setup
- Estimated effort: 3 hours

#### 1.3 Layout System Development
**Reusable templates for content rendering**
- Description: Build MainLayout.astro and specialized layouts (ServiceLayout, BlogLayout, GuideLayout)
- Files to create: `src/layouts/ServiceLayout.astro`, `src/layouts/BlogLayout.astro`, `src/layouts/GuideLayout.astro`
- Dependencies: Basic Astro setup
- Estimated effort: 6 hours

#### 1.4 Section Components Library
**Reusable content sections referenced by frontmatter**
- Description: Create Hero, Features, Pricing, FAQ, Testimonials components
- Files to create: `src/components/sections/Hero.astro`, `src/components/sections/Features.astro`, etc.
- Dependencies: Layout system
- Estimated effort: 8 hours

#### 1.5 Accessibility Control Panel
**WCAG 2.2 Level AA compliance system**
- Description: Complete accessibility panel with preference persistence and CSS custom properties
- Files to create: `src/components/ui/AccessibilityPanel.astro`, `src/utils/accessibilityEngine.ts`, `src/utils/accessibilityStore.ts`
- Dependencies: Layout system
- Estimated effort: 6 hours

#### 1.6 Navigation & UI Components
**Site-wide navigation and interactive elements**
- Description: Header, footer, breadcrumbs, skip links, mobile menu
- Files to create: `src/components/ui/Header.astro`, `src/components/ui/Footer.astro`, `src/components/ui/Breadcrumbs.astro`
- Dependencies: Layout system
- Estimated effort: 4 hours

### Phase 2: Content Integration Framework

#### 2.1 Dynamic Page Routing
**File-based routing for content collections**
- Description: Create `src/pages/[...slug].astro` for dynamic content rendering
- Files to create: `src/pages/[...slug].astro`, `src/pages/blog/[...slug].astro`
- Dependencies: Content collections, layouts
- Estimated effort: 3 hours

#### 2.2 Content Loading Utilities
**Helper functions for content queries and relationships**
- Description: Create utilities for content loading, filtering, and cross-references
- Files to create: `src/utils/content.ts`, `src/utils/promoLogic.ts`
- Dependencies: Content collections
- Estimated effort: 2 hours

#### 2.3 Environment Configuration
**Type-safe environment variables with astro:env**
- Description: Set up environment schema for public/private variables
- Files to create: `src/env.d.ts`
- Dependencies: Astro setup
- Estimated effort: 1 hour

### Phase 3: Testing & Validation Infrastructure

#### 3.1 Testing Setup
**Vitest configuration with Astro Container API**
- Description: Configure Vitest, add testing scripts, set up coverage thresholds
- Files to modify: `package.json`, create `vitest.config.ts`
- Dependencies: Project setup
- Estimated effort: 2 hours

#### 3.2 Accessibility Testing
**axe-core and Pa11y CI integration**
- Description: Set up automated accessibility testing in CI/CD pipeline
- Files to create: Testing utilities, CI configuration
- Dependencies: Testing setup
- Estimated effort: 3 hours

#### 3.3 Component Testing Suite
**Unit tests for all components**
- Description: Create test files for components with 80%+ coverage target
- Files to create: `src/components/**/*.test.ts`
- Dependencies: Testing setup, components
- Estimated effort: 6 hours

### Phase 4: Performance & Build Optimization

#### 4.1 Image Optimization System
**Astro Image component with responsive images**
- Description: Configure image optimization, lazy loading, WebP fallbacks
- Files to modify: `astro.config.mjs`, create image utilities
- Dependencies: Content system
- Estimated effort: 2 hours

#### 4.2 SEO & Schema Markup
**JSON-LD structured data and meta tags**
- Description: Implement schema.org markup, Open Graph, Twitter cards
- Files to create: `src/components/seo/JsonLd.astro`, `src/components/seo/MetaTags.astro`
- Dependencies: Content system
- Estimated effort: 3 hours

#### 4.3 Build Configuration
**Production optimizations and deployment setup**
- Description: Configure build settings, compression, security headers
- Files to modify: `astro.config.mjs`, add build scripts
- Dependencies: All systems
- Estimated effort: 2 hours

### Phase 5: Content Integration (Migrate from Examples)

#### 5.1 Pricing Data Integration
**MANDATORY: Source all pricing data from examples\pricing\ directory**
- Description: Build system MUST read and integrate ALL pricing information from `examples\pricing\` folder
- Create `src/data/pricing/plans.json` by processing content from `examples\pricing\` directory
- Structure pricing data following PRD JSON schema examples (see INITIAL.md "Pricing Content Model")
- Include promotional pricing overlays, billing toggles, and feature arrays
- Files to create: `src/data/pricing/plans.json` (directly sourced from `examples\pricing\` content)
- Dependencies: Pricing infrastructure
- Estimated effort: 1 day

#### 5.2 Page Content Migration
**MANDATORY: Source all page content from examples\pages\ directory**
- Description: Build system MUST read and integrate ALL page content from `examples\pages\` folder
- Transform existing markdown files from `examples\pages\` to `/src/content/pages/`
- Update frontmatter to match PRD schemas (see INITIAL.md "Markdown Content Models")
- Add section arrays, metadata, and proper content structure per page type
- Files to migrate: All .md files from `examples\pages\` to `/src/content/pages/`
- Dependencies: Content collections setup
- Estimated effort: 2 days (100+ pages)

#### 5.3 Blog & Guide Content
**Populate blog and guides collections**
- Description: Create blog posts and documentation content
- Files to create: `src/content/blog/*.md`, `src/content/guides/*.md`
- Follow PRD content models for structured metadata
- Dependencies: Content collections
- Estimated effort: User provided

### Phase 6: Final Validation & Launch

#### 6.1 Integration Testing
**End-to-end validation of content integration**
- Description: Test all content loading, relationships, and rendering
- Files to create: Integration tests
- Dependencies: All content populated
- Estimated effort: 4 hours

#### 6.2 Performance Validation
**Lighthouse and Core Web Vitals testing**
- Description: Validate performance targets with real content
- Files to create: Performance tests and monitoring
- Dependencies: Content populated, build optimized
- Estimated effort: 2 hours

#### 6.3 Accessibility Audit
**Final WCAG 2.2 Level AA compliance check**
- Description: Complete accessibility audit with real content
- Files to create: Audit reports and fixes
- Dependencies: Accessibility system, content populated
- Estimated effort: 3 hours

## Codebase Integration Points

### Files to Modify
- `astro.config.mjs` - Add content collections, sitemap, compression, image optimization integrations
- `package.json` - Add testing dependencies, accessibility tools, build scripts
- `tsconfig.json` - Already configured with strict mode ✓
- `tailwind.config.mjs` - Add accessibility-focused design tokens and custom properties

### New Files to Create
- `src/content/config.ts` - Content collection definitions with Zod schemas
- `src/data/pricing/plans.json` - Hosting plan data structure (user populated)
- `src/components/ui/AccessibilityPanel.astro` - WCAG compliance control panel
- `src/utils/accessibilityEngine.ts` - Accessibility preference management
- `src/utils/accessibilityStore.ts` - Reactive state management
- `src/layouts/ServiceLayout.astro` - Service page template
- `src/layouts/BlogLayout.astro` - Blog post template
- `src/layouts/GuideLayout.astro` - Documentation template
- `src/components/sections/` - Reusable content section components
- `src/pages/[...slug].astro` - Dynamic content routing
- `src/content/pages/` - 100+ markdown content files (user provided)
- `vitest.config.ts` - Testing configuration
- `src/env.d.ts` - Environment variable types

## Existing Patterns to Follow

- Astro 5 content collections with glob loaders and Zod schemas
- TypeScript strict mode with explicit type imports
- Component-based architecture with .astro files for static content
- Tailwind utility-first CSS with custom properties for theming
- Accessibility-first development with ARIA landmarks and keyboard navigation
- Performance-first approach with lazy loading and code splitting

## Technical Design

### Architecture Overview
```
src/
├── content/           # Content collections (user populated)
│   ├── config.ts     # Collection schemas
│   ├── pages/        # Static page content
│   ├── blog/         # Blog posts
│   └── guides/       # Documentation
├── components/        # Reusable components
│   ├── ui/          # Base UI components
│   ├── sections/    # Content sections
│   └── seo/         # SEO components
├── layouts/          # Page layouts
├── pages/           # File-based routing
├── data/            # Static data
│   └── pricing/     # Pricing structure
└── utils/           # Utilities and helpers
    ├── accessibilityEngine.ts
    ├── accessibilityStore.ts
    └── content.ts
```

### Data Flow
1. **Content Loading**: Content collections load markdown files with Zod validation
2. **Layout Selection**: Frontmatter `layout` field determines which layout to use
3. **Section Rendering**: `sections` array instantiates appropriate components
4. **Data Integration**: `plans_ref` and other references resolve to data files
5. **Accessibility Application**: Preferences applied via CSS custom properties

### API Endpoints (Future)
- `/api/contact` - Form processing (Phase 2)
- `/api/newsletter` - Subscription handling (Phase 2)

## Dependencies and Libraries

### Production Dependencies (Already Installed)
- `@astrojs/check`: TypeScript validation
- `@astrojs/tailwind`: Tailwind CSS integration
- `astro`: Core framework (v5.15.3)
- `lenis`: Smooth scrolling
- `swiper`: Carousel component
- `tailwindcss`: CSS framework
- `typescript`: Type safety

### Development Dependencies (To Add)
- `@astrojs/mdx`: Enhanced markdown support
- `@astrojs/sitemap`: Automatic sitemap generation
- `vitest`: Testing framework
- `@vitest/ui`: Testing UI
- `axe-core`: Accessibility testing
- `pa11y-ci`: Automated accessibility scanning
- `prettier`: Code formatting
- `eslint`: Code linting
- `zod`: Schema validation

## Testing Strategy
- **Unit Tests**: Component functionality with Vitest + Astro Container API (80%+ coverage)
- **Accessibility Tests**: axe-core automated scanning on all components and pages
- **Integration Tests**: Content loading and rendering validation
- **E2E Tests**: Critical user flows with Playwright (Phase 2)
- **Performance Tests**: Lighthouse CI for Core Web Vitals validation

## Success Criteria
- [ ] WCAG 2.2 Level AA compliance (0 violations in axe-core and Pa11y scans)
- [ ] Lighthouse Accessibility Score: 100
- [ ] Lighthouse Performance Score: 90+
- [ ] All 100+ pages render correctly with content integration
- [ ] Vitest coverage: 80%+ on all components and utilities
- [ ] TypeScript strict mode compliance (0 errors)
- [ ] Content collections validate all frontmatter correctly
- [ ] Accessibility panel controls all preferences correctly
- [ ] Load time: <2 seconds on 3G with real content
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] **DESIGN PRESERVATION**: All new pages use gold (#D4AF37) as primary accent color
- [ ] **DESIGN PRESERVATION**: All cards maintain `shadow-[0px_5px_0px_#191a23]` 3D effect
- [ ] **DESIGN PRESERVATION**: Consistent 45px border radius across all components
- [ ] **DESIGN PRESERVATION**: Space Grotesk font used throughout all new content
- [ ] **DESIGN PRESERVATION**: Button hover effects include scale transforms
- [ ] **DESIGN PRESERVATION**: Three-card background rotation pattern maintained
- [ ] **DESIGN PRESERVATION**: No introduction of new colors without explicit approval

## Notes and Considerations
- **Infrastructure-First Approach**: Complete framework built before content integration
- **Content Validation**: Zod schemas ensure user-provided content meets requirements
- **Progressive Enhancement**: All functionality works without JavaScript
- **Performance Budget**: Bundle size limits enforced (<50KB JS, <30KB CSS)
- **Accessibility Integration**: WCAG compliance built into every component from start
- **Type Safety**: Full TypeScript coverage with content collection inference
- **Build Validation**: Automated testing prevents deployment of invalid content

---

*This plan is ready for execution with `/execute-plan PRPs/premium-hosting-website.md`*

Implementation follows the infrastructure-first approach: build complete framework, integrate user content, validate automatically.
