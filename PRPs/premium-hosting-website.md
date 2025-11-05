# Implementation Plan: Premium Hosting Website

## Overview
Implementation of a WCAG 2.2 Level AA compliant, ultra-modern hosting website using Astro 5 with content collections, comprehensive accessibility features, and automated testing. The site features 100+ pages across hosting products, services, and company information with full content management system.

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
