Of course. Here is the complete, unified Product Requirements Document. It integrates your original, comprehensive plan with the practical, actionable steps we discussed, creating a single, perfect source of truth for your project.

---

This file is the single source of truth for the end‑to‑end Product Quick2Print.

This document is the single source of truth for Quick2Print.

It is written using high-context task framing, explicit constraints, and deterministic execution boundaries so that it can be consumed by developers without guesswork.

This file covers:

-   Features
-   Tools
-   Dependencies
-   Examples
-   Documentation
-   Other Considerations

## OVERVIEW

Development of an ultra-modern, futuristic, and award-winning website for a hosting company called Premium Hosting. Based in the UK with a worldwide reach. A premium experience is offered throughout. The design will be a fully accessible, static website that meets WCAG 2.2 Level AA compliance standards. The site will feature a comprehensive accessibility control panel, allowing users to customize their viewing experience while maintaining complete keyboard navigation, screen reader compatibility, and adherence to all modern accessibility standards.

**Design Philosophy:**
-   **Modern, Engaging Default Experience**: Rich animations and interactions enabled by default to create a polished, contemporary user experience.
-   **User Control & Compliance**: Full WCAG 2.2 Level AA compliance maintained through user-controlled accessibility options, including a motion reduction toggle and OS-level preference detection.
-   **Progressive Enhancement**: All functionality works without JavaScript; animations enhance but don't block access.

### Goals
-   Achieve 100% WCAG 2.2 Level AA compliance.
-   Provide an industry-leading accessible user experience.
-   Enable easy content updates without sacrificing accessibility.
-   Maintain excellent performance (Lighthouse score 95+).
-   Support all major assistive technologies.
-   All page templates must be fully responsive and maintain visual integrity and full functionality from 320px wide up to large desktop and ultrawide viewports (≥1920px), with no horizontal scrolling at any supported size except for intentional overflow elements (e.g., code blocks).

### Success Metrics
-   WCAG 2.2 Level AA audit: 0 violations.
-   Lighthouse Accessibility Score: 100.
-   Page load time: < 2 seconds (3G).
-   Keyboard navigation: 100% of functionality accessible.
-   Screen reader compatibility: JAWS, NVDA, VoiceOver.
-   User testing: 5+ users with disabilities validate usability.

## FEATURE

### STRUCTURE

#### SITEMAP
Hompage

- Homepage – url – `https://premium-hosting.co.uk/`

---

Hosting Products

- WordPress Hosting – url – `https://premium-hosting.co.uk/wordpress/`
- Cloud Hosting – url – `https://premium-hosting.co.uk/cloud-hosting/`
  - Redirect from – `https://premium-hosting.co.uk/managed-vps/`
- VPS Hosting – url – `https://premium-hosting.co.uk/vps/`
- Free Hosting – url – `https://premium-hosting.co.uk/free-hosting/`
- Hosting Products Overview – url – `https://premium-hosting.co.uk/hosting/`
- Additional Services – url – `https://premium-hosting.co.uk/services/`
- SSL Certificates – url – `https://premium-hosting.co.uk/certificates/`
- CDN Services – url – `https://premium-hosting.co.uk/cdn/`
- Website Builder – url – `https://premium-hosting.co.uk/website-builder/`
- Find Your Domain – url – `https://premium-hosting.co.uk/domain/`
- Pricing – url – `https://premium-hosting.co.uk/pricing/`
- Compare Plans – url – `https://premium-hosting.co.uk/compare/`
- business email - url - `https://premium-hosting.co.uk/business-email/`
- email - url - `https://premium-hosting.co.uk/email/`

---

Solutions
- Solutions Overview – url – `https://premium-hosting.co.uk/solutions/`
- Business Hosting – url – `https://premium-hosting.co.uk/solutions/business-hosting/`
- eCommerce Hosting – url – `https://premium-hosting.co.uk/solutions/ecommerce-hosting/`
- Agency & Developer Hosting – url – `https://premium-hosting.co.uk/solutions/agency-hosting/`
- High-Traffic & Scaling – url – `https://premium-hosting.co.uk/solutions/high-traffic/`
- Enterprise Cloud Hosting – url – `https://premium-hosting.co.uk/solutions/enterprise/`
- Managed Services & Care Plans – url – `https://premium-hosting.co.uk/managed-services/`

---

Website Services
- Website Services Overview – url – `https://premium-hosting.co.uk/website-services/`
- Website Maintenance – url – `https://premium-hosting.co.uk/website-maintenance/`
- Website Care Plans – url – `https://premium-hosting.co.uk/website-care-plans/`
- Website Updates – url – `https://premium-hosting.co.uk/website-updates/`
- Custom Development – url – `https://premium-hosting.co.uk/custom-development/`
- Website Redesign – url – `https://premium-hosting.co.uk/website-redesign/`
- Landing Pages – url – `https://premium-hosting.co.uk/landing-pages/`
- eCommerce Development – url – `https://premium-hosting.co.uk/ecommerce-development/`

---

Digital Marketing
- Digital Marketing Overview – url – `https://premium-hosting.co.uk/digital-marketing/`
- SEO Services – url – `https://premium-hosting.co.uk/seo/`
- PPC Management – url – `https://premium-hosting.co.uk/ppc/`
- Content Marketing – url – `https://premium-hosting.co.uk/content-marketing/`
- Email Marketing – url – `https://premium-hosting.co.uk/email-marketing/`
- Conversion Optimization – url – `https://premium-hosting.co.uk/conversion-optimization/`

---

Social Media
- Social Media Overview – url – `https://premium-hosting.co.uk/social-media/`
- Social Media Management – url – `https://premium-hosting.co.uk/social-media-management/`
- Social Media Advertising – url – `https://premium-hosting.co.uk/social-media-ads/`
- Content Creation – url – `https://premium-hosting.co.uk/content-creation/`

---

Business Communications
- Business Communications Overview – url – `https://premium-hosting.co.uk/business-communications/`
- Phone Answering Services – url – `https://premium-hosting.co.uk/phone-answering/`
- Virtual Receptionist – url – `https://premium-hosting.co.uk/virtual-receptionist/`
- Live Chat Services – url – `https://premium-hosting.co.uk/live-chat/`
- Chatbot Solutions – url – `https://premium-hosting.co.uk/chatbots/`
- Customer Support Services – url – `https://premium-hosting.co.uk/customer-support-services/`

---

Reputation Management
- Reputation Management – url – `https://premium-hosting.co.uk/reputation-management/`
- Review Management – url – `https://premium-hosting.co.uk/review-management/`
- Online Reputation – url – `https://premium-hosting.co.uk/online-reputation/`

---

Complete Solution Packages
- Complete Website Solution – url – `https://premium-hosting.co.uk/solutions/complete-website-solution/`
- Startup Package – url – `https://premium-hosting.co.uk/solutions/startup-package/`
- Growth Package – url – `https://premium-hosting.co.uk/solutions/growth-package/`
- All-in-One Business Package – url – `https://premium-hosting.co.uk/solutions/all-in-one/`

---

Additional Promotions
- Website Package Bundle – url – `https://premium-hosting.co.uk/coupons/website-package/`
- Marketing Bundle Deal – url – `https://premium-hosting.co.uk/coupons/marketing-bundle/`
- Complete Solution Package – url – `https://premium-hosting.co.uk/coupons/complete-solution/`

---

Additional Guides
- Website Launch Checklist – url – `https://premium-hosting.co.uk/guides/website-launch-checklist/`
- Digital Marketing Basics – url – `https://premium-hosting.co.uk/guides/digital-marketing-basics/`
- Social Media Best Practices – url – `https://premium-hosting.co.uk/guides/social-media-best-practices/`

---

Support & Knowledge
- Knowledge Base – url – `https://premium-hosting.co.uk/knowledge-base/`
- Migrations & Onboarding – url – `https://premium-hosting.co.uk/migrations/`
- FAQs – url – `https://premium-hosting.co.uk/faqs/`
- System Status – url – `https://premium-hosting.co.uk/status/`
- Report Abuse / Security Issue – url – `https://premium-hosting.co.uk/legal/report-abuse/`
- Contact Support – url – `https://premium-hosting.co.uk/contact/`
- Client Login / Control Panel – url – `https://premium-hosting.co.uk/login/`

---

Trust & Performance
- Trust Center – url – `https://premium-hosting.co.uk/trust/`
- Infrastructure Overview – url – `https://premium-hosting.co.uk/infrastructure/`
- Security & DDoS Protection – url – `https://premium-hosting.co.uk/security/`
- Performance & Speed – url – `https://premium-hosting.co.uk/performance/`
- Uptime / Network Status – url – `https://premium-hosting.co.uk/status/`
- Sustainability / Green Hosting – url – `https://premium-hosting.co.uk/sustainability/`
- Case Studies & Success Stories – url – `https://premium-hosting.co.uk/case-studies/`
- Customer Reviews – url – `https://premium-hosting.co.uk/reviews/`

---

Company
- About Us – url – `https://premium-hosting.co.uk/about/`
- Our Web Design & Development Agency – url – `https://premium-hosting.co.uk/web-design-and-development/`
- Partners & Integrations – url – `https://premium-hosting.co.uk/partners/`
- Affiliates – url – `https://premium-hosting.co.uk/affiliates/`
- Careers – url – `https://premium-hosting.co.uk/careers/`
- News & Pressroom – url – `https://premium-hosting.co.uk/news/`
- Platform Changelog / Updates – url – `https://premium-hosting.co.uk/changelog/`
- Contact Us – url – `https://premium-hosting.co.uk/contact/`

---

Promotions & Coupons
- Coupons & Current Offers – url – `https://premium-hosting.co.uk/coupons/`
- New Year Sale – url – `https://premium-hosting.co.uk/coupons/new-year-sale/`
- Valentine’s Day Sale – url – `https://premium-hosting.co.uk/coupons/valentines/`
- Easter Hosting Deals – url – `https://premium-hosting.co.uk/coupons/easter/`
- Financial Year-End Sale – url – `https://premium-hosting.co.uk/coupons/financial-year-end/`
- Small Business Week – url – `https://premium-hosting.co.uk/coupons/small-business-week/`
- Mid-Year Mega Sale – url – `https://premium-hosting.co.uk/coupons/mid-year/`
- Prime Day Deals – url – `https://premium-hosting.co.uk/coupons/prime-day/`
- Back to School / Business Deals – url – `https://premium-hosting.co.uk/coupons/back-to-school/`
- Halloween Hosting Sale – url – `https://premium-hosting.co.uk/coupons/halloween/`
- Black Friday Hosting Deals – url – `https://premium-hosting.co.uk/coupons/black-friday/`
- Cyber Monday Discounts – url – `https://premium-hosting.co.uk/coupons/cyber-monday/`
- Christmas Hosting Sale – url – `https://premium-hosting.co.uk/coupons/christmas/`
- Boxing Day Sale – url – `https://premium-hosting.co.uk/coupons/boxing-day/`
- Student Hosting Discounts – url – `https://premium-hosting.co.uk/coupons/student/`
- Nonprofit & Charity Hosting – url – `https://premium-hosting.co.uk/coupons/nonprofit/`
- Referral Rewards – url – `https://premium-hosting.co.uk/coupons/referral/`
- Flash Deals & Time-Limited Offers – url – `https://premium-hosting.co.uk/coupons/flash-deal/`
- New Customer Exclusive – url – `https://premium-hosting.co.uk/coupons/new-customer/`
- Switch & Save / Free Migration – url – `https://premium-hosting.co.uk/coupons/switch-save/`
- Long-Term Plan Discount – url – `https://premium-hosting.co.uk/coupons/3-year-deal/`
- VPS Hosting Specials – url – `https://premium-hosting.co.uk/coupons/vps-deals/`
- Dedicated Server Promotions – url – `https://premium-hosting.co.uk/coupons/dedicated/`
- Managed WordPress Specials – url – `https://premium-hosting.co.uk/coupons/managed-wp/`
- Domain & Hosting Bundle – url – `https://premium-hosting.co.uk/coupons/bundle-deal/`
- Ecommerce Hosting Deals – url – `https://premium-hosting.co.uk/coupons/ecommerce/`
- Agency & Reseller Discounts – url – `https://premium-hosting.co.uk/coupons/reseller/`
- Developer Hosting Offers – url – `https://premium-hosting.co.uk/coupons/developer/`
- Local Business Hosting Deals – url – `https://premium-hosting.co.uk/coupons/local-business/`
- Blogger & Creator Specials – url – `https://premium-hosting.co.uk/coupons/blog-creator/`
- Website Speed Check & Audit – url – `https://premium-hosting.co.uk/free-audit/`
- Site Migration Checklist – url – `https://premium-hosting.co.uk/guides/migration-checklist/`
- WordPress Security Guide – url – `https://premium-hosting.co.uk/guides/wp-security/`
- Hosting Plan Recommendation Quiz – url – `https://premium-hosting.co.uk/quiz/hosting-selector/`
- The Premium Hosting Fine Tuned Formula - 7 Steps to 90+ PageSpeed - url - `https://premium-hosting.co.uk/7-steps-to-90-pagespeed/`
---

Legal & Compliance
- Legal Overview – url – `https://premium-hosting.co.uk/legal/`
- Terms and Conditions – url – `https://premium-hosting.co.uk/terms-and-conditions/`
- Website Terms of Use – url – `https://premium-hosting.co.uk/legal/website-terms-of-use/`
- Privacy Policy – url – `https://premium-hosting.co.uk/privacy-policy/`
- Cookie Policy – url – `https://premium-hosting.co.uk/legal/cookie-policy/`
- GDPR Compliance – url – `https://premium-hosting.co.uk/gdpr/`
- Data Processing Agreement (DPA) – url – `https://premium-hosting.co.uk/legal/data-processing-agreement/`
- Acceptable Use Policy (AUP) – url – `https://premium-hosting.co.uk/legal/acceptable-use-policy/`
- Abuse Policy – url – `https://premium-hosting.co.uk/legal/abuse-policy/`
- DMCA / Copyright Policy – url – `https://premium-hosting.co.uk/legal/dmca/`
- Affiliate Programme Terms – url – `https://premium-hosting.co.uk/legal/affiliate-terms/`
- Security Responsible Disclosure Policy – url – `https://premium-hosting.co.uk/legal/security-responsible-disclosure/`
- Sustainability Statement – url – `https://premium-hosting.co.uk/sustainability/`
- Service Change Log / Policy Updates – url – `https://premium-hosting.co.uk/changelog/`

---

Service Level Agreements (SLAs)
- Shared Hosting SLA – url – `https://premium-hosting.co.uk/legal/shared-hosting-sla/`
- WordPress Hosting SLA – url – `https://premium-hosting.co.uk/legal/wordpress-hosting-sla/`
- Cloud Hosting SLA – url – `https://premium-hosting.co.uk/legal/cloud-hosting-sla/`
- VPS Service Level Agreement – url – `https://premium-hosting.co.uk/legal/vps-service-level-agreement/`
- CDN Services SLA – url – `https://premium-hosting.co.uk/legal/cdn-sla/`

---

Gaming
- Gaming Hub – url – `https://premium-hosting.co.uk/gaming/`
- COD Mobile Stats – url – `https://premium-hosting.co.uk/gaming/cod-mobile/`
- Gameplay Highlights / Clips – url – `https://premium-hosting.co.uk/gaming/clips/`
- Setup / Gear – url – `https://premium-hosting.co.uk/gaming/gear/`
- Game Servers (Coming Soon) – url – `https://premium-hosting.co.uk/gaming/servers/`
- Game Server: Minecraft (Future) – url – `https://premium-hosting.co.uk/gaming/servers/minecraft/`
- Voice / Discord / Bot Hosting (Future) – url – `https://premium-hosting.co.uk/gaming/servers/voice/`
- Custom Private Server / Scrim Server (Future) – url – `https://premium-hosting.co.uk/gaming/servers/custom/`

---

Optional / Future Expansion
- Uptime Reports & Benchmarks – url – `https://premium-hosting.co.uk/uptime/`
- Responsible Disclosure / Bug Bounty – url – `https://premium-hosting.co.uk/legal/responsible-disclosure/`
- Legal Archive / Version History – url – `https://premium-hosting.co.uk/legal/archive/`

#### URL ARCHITECTURE
-   Clean, semantic URLs (no file extensions).
-   Kebab-case for all slugs.
-   Consistent hierarchy depth (max 3 levels).
-   Trailing slashes optional but consistent.
-   All URLs must be descriptive and human-readable.

#### PAGE TEMPLATES REQUIRED
1.  **Homepage Template** - Hero, features, call-to-action.
2.  **Standard Page Template** - Full-width content with sidebar optional.
3.  **Blog Post Template** - Article content with metadata, related posts.
4.  **Guide Template** - Long-form structured content with table of contents.
5.  **Service Page Template** - Service details, pricing, CTA.
6.  **Contact Template** - Form with accessibility features.

## PAGE STRUCTURE → TEMPLATE INVENTORIES

This section defines the structural blueprint for all page types across Premium Hosting.
It ensures design, content, and development alignment by specifying section inventories, content models, and reusable layout patterns.
These templates form the foundation for consistent, accessible, and conversion-focused pages.

---

### HIGH-CONVERSION HOSTING PAGE LAYOUT

For all core product pages (WordPress Hosting, Cloud Hosting, VPS, etc.), the layout follows a proven conversion-optimized sequence modeled on top industry performers such as Hostinger, IONOS, Kinsta, and WP Engine.

| Section | Purpose | Notes |
|----------|----------|-------|
| **1. Hero Section** | Immediate trust and conversion focus | Headline with core value proposition, subheadline reinforcing reliability and trust, CTA buttons (“Get Started”, “Compare Plans”), trust badges/logos. |
| **2. Feature Summary Grid** | Showcase tangible benefits | 3–6 features with icons (Speed, Security, Support, Uptime, Scalability). Short, scannable, WCAG compliant. |
| **3. Performance Proof / Benchmark Strip** | Build authority | Display Lighthouse, Core Web Vitals, or benchmark comparisons. |
| **4. Pricing Plans Table** | Drive conversion | Accessible table with Monthly/Yearly toggle, “Most Popular” highlight, clear CTA buttons. |
| **5. Why Choose Premium Hosting** | Reinforce credibility | Highlight differentiators such as UK data centers, 24/7 support, free SSL, uptime guarantee. |
| **6. Testimonials / Reviews** | Social proof | Include average rating, review excerpts, Trustpilot link or static quotes. |
| **7. Add-Ons & Upgrades** | Upsell complementary products | CDN, SSL, Email Hosting, Site Builder. |
| **8. FAQ Section** | Address objections | 5–8 most common questions (pricing, support, cancellation, uptime). |
| **9. Final Call to Action** | Conversion closer | Headline and CTA buttons encouraging sign-up or plan comparison. |
| **10. Trust / Compliance Strip** | Reinforce legitimacy | Security certifications, GDPR compliance, sustainability, accessibility statement link. |

Additional enhancements:
-   Sticky pricing bar or floating “Get Started” button after scroll.
-   Breadcrumb navigation for SEO and accessibility.
-   Schema.org `Product`, `FAQPage`, and `BreadcrumbList` markup.
-   Optional static exit-intent CTA (no pop-ups).

---

### SECTION INVENTORIES BY PAGE TYPE

#### Homepage
1.  Hero (headline, subheadline, CTA)
2.  Partner or trust logo bar
3.  Hosting product overview cards
4.  “Why Choose Premium Hosting” summary
5.  Performance and security highlights
6.  Testimonials
7.  Accessibility and sustainability pledge
8.  Featured offer or limited-time promotion
9.  Resource highlights (blog, guides)
10. Footer call-to-action strip

#### Service Pages (Hosting, SSL, CDN, etc.)
Use the 10-part conversion layout defined above.

#### About Us
1.  Mission and vision statement
2.  Company story and timeline
3.  Leadership or team profiles
4.  Sustainability and accessibility commitments
5.  Awards and certifications
6.  Press mentions and case studies
7.  CTA to contact or careers

#### Contact Page
1.  Hero (“We’re here to help”)
2.  Accessible contact form
3.  Alternative contact details (email, phone, chat)
4.  Map or office information
5.  Links to FAQs and support portal

#### Guides, Policies, and Legal Pages
1.  Breadcrumb navigation at top
2.  Sticky left table of contents (auto-generated from headings)
3.  Optional right-side “On this page” navigation
4.  Main content in markdown
5.  “Last updated” note and accessibility statement link

#### Blog and Guides

**List Page**
-   Grid of articles with image, title, date, tags, and excerpt.

**Post Page**
1.  Hero with title, author, and date
2.  Auto-generated table of contents
3.  Main article body
4.  Related posts section
5.  Author bio
6.  Footer CTA (“Explore Hosting Plans”)

#### Landing Pages (Sales-Focused)
Long-form, high-impact structure for campaigns or promotions.

1.  Hero with bold value promise and primary CTA
2.  Problem and solution narrative
3.  Social proof and trust signals
4.  Deep feature breakdown (visual, icon-based)
5.  Competitor comparison table
6.  Bonuses, guarantees, or add-on offers
7.  Extended testimonials
8.  Urgency or limited-time promotion (static)
9.  FAQ
10. Final CTA block

Landing pages should balance persuasive length with accessibility, ensuring they remain fully readable with motion disabled.

#### Support and Knowledge Base
-   Knowledge Base index page listing categories.
-   Article template with breadcrumbs and table of contents.
-   Contact Support CTA at the end of each article.

---

### MARKDOWN CONTENT MODELS

Each page type uses Markdown (or MDX) with YAML frontmatter to define metadata and sections.
This allows content updates without code changes and enables future integration with Decap CMS.

#### Example: Service Page (`/src/content/pages/wordpress-hosting.md`)
```yaml
---
title: "WordPress Hosting"
description: "Fast, secure, and fully managed WordPress hosting from the UK."
layout: "service.astro"
template: "service"
featured_image: "/images/wordpress-hosting.webp"
featured_image_alt: "WordPress hosting dashboard screenshot"
cta_primary: "Get Started"
cta_secondary: "Compare Plans"
slug: "wordpress-hosting"
draft: false
sections:
  - type: "hero"
    headline: "Blazing-fast WordPress Hosting"
    subheadline: "Optimized servers. 99.99% uptime. 24/7 UK support."
    cta_text: "Get Started"
    cta_link: "/pricing/"
  - type: "features"
    features:
      - title: "Lightning Speed"
        icon: "bolt"
        description: "Optimized for Core Web Vitals and performance."
      - title: "Managed Security"
        icon: "shield"
        description: "Automatic malware scans and free SSL."
  - type: "pricing"
    plans_ref: "wordpress-hosting"
  - type: "faq"
    faq_ref: "wordpress-hosting"
  - type: "cta"
    headline: "Start your site today"
    button_text: "Get Started"
---
```

#### Example: Policy or Legal Page (`/src/content/legal/privacy-policy.md`)
```yaml
---
title: "Privacy Policy"
description: "Our commitment to protecting your data and privacy."
layout: "policy.astro"
template: "policy"
last_updated: "2025-10-20"
breadcrumbs:
  - name: "Home"
    url: "/"
  - name: "Legal"
    url: "/legal/"
  - name: "Privacy Policy"
    url: "/privacy-policy/"
toc: true
---
```

Markdown body content will include multiple headings (`##`, `###`) that automatically populate the sticky table of contents.

#### Example: Landing Page (`/src/content/landing/black-friday-sale.md`)
```yaml
---
title: "Black Friday Hosting Sale"
description: "Save up to 75% on hosting plans this Black Friday."
layout: "landing.astro"
template: "landing"
hero:
  headline: "Black Friday Hosting Deals – Up to 75% Off"
  subheadline: "Fast, secure, and fully managed hosting at unbeatable prices."
  cta_text: "Claim Offer"
  cta_link: "/pricing/"
sections:
  - type: "problem-solution"
  - type: "features"
  - type: "comparison"
  - type: "guarantees"
  - type: "testimonials"
  - type: "faq"
  - type: "final-cta"
---
```

#### Example: Blog Post (`/src/content/blog/example-post.md`)
```yaml
---
title: "How to Improve Website Speed for SEO"
description: "A step-by-step guide to boosting performance and rankings."
date: 2025-10-25
author: "Jane Doe"
tags: ["performance", "seo", "hosting"]
featured_image: "/images/blog-speed.webp"
featured_image_alt: "Speedometer illustration"
layout: "blog-post.astro"
template: "blog-post"
draft: false
---```

---

### IMPLEMENTATION NOTES

-   Each `sections:` array corresponds to a reusable Astro component (e.g. `<Hero />`, `<Features />`, `<Pricing />`).
-   Section order can be changed directly in content files.
-   Content editors can add or remove sections without developer involvement.
-   All templates include proper heading hierarchy, landmark regions, and WCAG 2.2 compliance.
-   Breadcrumbs and table of contents are generated automatically based on metadata and headings.
-   Future CMS integration (Decap) will map these frontmatter fields to visual editing widgets.

---

### Initial Content & Asset Strategy (Phase 1)

To enable parallel development and design workflows, the initial build will proceed without final content and assets.

**1. Placeholder Content Generation:**
-   All `.md` content files required by the sitemap will be programmatically generated.
-   Each file will be populated with the correct frontmatter structure (e.g., `title`, `description`, `layout`).
-   The body of each Markdown file will contain standard "Lorem Ipsum" placeholder text to allow for template styling and testing.

**2. Image Placeholders & Manifest:**
-   All images within the site templates will initially use a dynamic placeholder service (e.g., `https://via.placeholder.com/`). This allows developers to build layouts with correctly sized images before final assets are available.
-   A central manifest file, `IMAGE_MANIFEST.md`, will be created in the project root. This file will serve as the single source of truth for the design team, listing every required image, its context, dimensions, and a description of the required creative.

**3. Default Pricing Data:**
-   The central pricing file, `/src/data/pricing/plans.json`, will be created immediately and populated with placeholder plan data.
-   This allows the pricing table components to be fully built and tested. The pricing data can be updated in this single JSON file at any time without requiring code changes.

---

### Core Accessibility Features

#### Keyboard Navigation
-   **Tab Order**: Logical, sequential focus order on all pages.
-   **Skip Links**: "Skip to main content", "Skip to navigation", "Skip to footer".
-   **Keyboard Shortcuts**: Document all shortcuts in accessibility statement.
-   **Focus Indicators**:
    -   Visible focus ring on all interactive elements.
    -   Minimum 2px solid outline with 3:1 contrast against background.
    -   Enhanced focus indicator on high-contrast mode.
    -   Uses `:focus-visible` for keyboard-only focus styling.
-   **No Keyboard Traps**: All modals, menus, and widgets escapable with keyboard.

#### Screen Reader Support
-   **Semantic HTML**: Proper heading hierarchy (h1-h6), landmarks (header, nav, main, aside, footer).
-   **ARIA Labels**: All interactive elements properly labeled.
-   **ARIA Live Regions**: Dynamic content changes announced.
-   **Alt Text**: Descriptive alt text for all images, decorative images marked with alt="".
-   **Link Context**: Links descriptive without surrounding context ("Read more about Services" not "Read more").
-   **Form Labels**: All form inputs associated with visible labels.
-   **Status Messages**: Success/error messages announced to screen readers.

#### Visual Accessibility
-   **Color Contrast**:
    -   Normal text: 4.5:1 minimum.
    -   Large text (18pt+): 3:1 minimum.
    -   UI components: 3:1 minimum.
    -   **Color Palette**:
        -   Primary text: `#1a1a1a` on `#ffffff` (19.7:1).
        -   Secondary text: `#4a4a4a` on `#ffffff` (9.8:1).
        -   Link text: `#0052cc` on `#ffffff` (8.2:1).
        -   Button primary: `#ffffff` on `#0052cc` (8.2:1).
        -   Button hover: `#ffffff` on `#003d99` (11.1:1).
        -   Borders/UI: `#767676` on `#ffffff` (4.6:1).
-   **Text Resizing**: Content readable at 200% zoom without horizontal scrolling.
-   **Reflow**: No 2D scrolling required at 320px width.
-   **Text Spacing**: Support user-defined line height (1.5x), paragraph spacing (2x), letter spacing (0.12x), word spacing (0.16x).
-   **Content on Hover/Focus**: Tooltips/popovers hoverable, dismissable, persistent.

#### Motion & Animation

**Default Experience: Animations ENABLED**
-   Rich, smooth animations and interactions are the default user experience.
-   Modern, engaging transitions and effects throughout the site.
-   Animations enhance usability and provide visual feedback.
-   All animations designed to be purposeful, not gratuitous.

**WCAG 2.2 Compliance via User Control:**
-   **Automatic Detection**: Respect user's OS-level `prefers-reduced-motion` setting.
-   **Manual Toggle**: Accessibility control panel includes "Reduce Motion" option.
-   **Instant Application**: Setting applies immediately across entire site.
-   **Persistent**: User preference saved in localStorage.

**Animation Guidelines:**
-   **No Flashing**: Nothing flashes more than 3 times per second (WCAG 2.3.1).
-   **Pause Controls**: Any auto-playing/auto-rotating content has visible pause button (WCAG 2.2.2).
-   **Meaningful Motion**: Animations must enhance UX, not distract.
-   **Performance**: Animations optimized for smooth 60fps performance.
-   **Reduced Motion Fallback**: Graceful degradation when motion disabled (instant state changes, fade only, or no transition).

**Types of Animations Allowed:**
-   **Page Transitions**: Smooth fade-ins, slide-ins for new content.
-   **Hover Effects**: Button elevation, color transitions, icon animations.
-   **Scroll Animations**: Parallax effects, reveal on scroll, progress indicators.
-   **Loading States**: Skeleton screens, spinners, progress bars.
-   **Micro-interactions**: Form validation animations, success/error states, tooltip appearances.
-   **Navigation**: Menu slide-ins, dropdown animations, mobile nav transitions.
-   **Interactive Elements**: Card hover lifts, image zoom on hover, expandable sections.
-   **Feedback**: Success checkmarks, error shakes, ripple effects.

**Motion Actuation Compliance (WCAG 2.5.4):**
-   No motion-only controls (shake to undo, tilt to scroll).
-   All motion-triggered features must have alternative button/tap control.
-   Example: If implementing parallax, ensure content still accessible with motion disabled.

### Accessibility Control Panel (Modal)

#### Trigger Specifications
-   Persistent button in top-right corner: "Accessibility Options".
-   Keyboard shortcut: Ctrl/Cmd + Alt + A.
-   Visible focus indicator.
-   Minimum 44x44px touch target.
-   `aria-label="Open accessibility options"`.
-   `aria-expanded` toggles between true/false.

#### Visual Controls
**Font Size Options:**
-   Small: 14px base
-   Medium: 16px base (default)
-   Large: 18px base
-   Extra Large: 20px base

**Contrast Themes:**
-   Default (light mode)
-   High Contrast Light (black text, white background, bold)
-   High Contrast Dark (white text, black background, bold)
-   Dark Mode (light gray text, dark background)

**Spacing Controls:**
-   Line Spacing: Normal, Relaxed (1.5x), Loose (2x).
-   Letter Spacing: Toggle for increased letter spacing (+0.12em).
-   Link Highlighting: Toggle to add visible underlines to all links.

#### Motion Controls
-   Reduce Motion: Toggle to disable all animations.
-   Pause Animations: Pause/play any auto-rotating content.

#### Reading Aids
-   Reading Guide: Toggle horizontal line that follows cursor.
-   Focus Indicator Enhancement: Toggle for extra-visible focus indicators.

#### Modal Accessibility Requirements
-   **Focus Management**:
    -   Focus trapped within modal when open.
    -   First focusable element receives focus on open.
    -   Focus returns to trigger button on close.
-   **Close Methods**:
    -   ESC key.
    -   Close button (44x44px minimum).
    -   Optional: backdrop click.
-   **Screen Reader Announcement**:
    -   Modal opening announced.
    -   Modal purpose described.
-   **Scrollable Content**: Modal content scrollable if exceeds viewport.
-   **ARIA Attributes**:
  ```html
  role="dialog"
  aria-modal="true"
  aria-labelledby="[modal-title-id]"
  aria-describedby="[modal-description-id]"
  ```

#### Preference Persistence
-   **Storage Method**: localStorage.
-   **Expiration**: Never (until user clears).
-   **Scope**: Preferences apply site-wide immediately.
-   **Reset Option**: Button to restore all defaults.
-   **Privacy**: Respect user's privacy settings.

### Content Management System

## Dynamic Content & Seasonal Logic

### Pricing Content Model

Pricing is split into:
-   Marketing copy (Markdown, human-edited)
-   Live price data (JSON, machine-readable)

**Marketing Copy Location:**
`/src/content/pages/pricing.md` (or page-specific, e.g. `/src/content/pages/wordpress-hosting.md`)

```yaml
---
title: "WordPress Hosting"
description: "Fast, secure, and fully managed WordPress hosting from the UK."
layout: "service.astro"
template: "service"
sections:
  - type: "hero"
    headline: "Blazing-fast WordPress Hosting"
    subheadline: "Optimized servers. 99.99% uptime. 24/7 UK support."
    cta_text: "Get Started"
    cta_link: "/pricing/"
  - type: "pricing"
    plans_ref: "wordpress-hosting"
  - type: "faq"
    faq_ref: "wordpress-hosting"
---
```

**Price & Plan Data Location:**
`/src/data/pricing/plans.json`

```json
{
  "wordpress-hosting": {
    "currency": "GBP",
    "billing": {
      "monthly": true,
      "yearly": true,
      "yearly_discount_note": "Save 20% on annual billing"
    },
    "plans": [
      {
        "id": "wp-starter",
        "name": "Starter",
        "priceMonthly": 9.99,
        "priceYearlyMonthlyEquivalent": 7.99,
        "tag": null,
        "features": [
          "1 WordPress Site",
          "10 GB NVMe Storage",
          "Free SSL & CDN",
          "Daily Backups"
        ]
      },
      {
        "id": "wp-growth",
        "name": "Growth",
        "priceMonthly": 19.99,
        "priceYearlyMonthlyEquivalent": 15.99,
        "tag": "Most Popular",
        "features": [
          "Up to 5 Sites",
          "50 GB NVMe Storage",
          "Priority Support",
          "Staging Environments"
        ]
      }
    ]
  }
}
```

**Implementation Requirement:**
-   All pricing tables and cards MUST pull data from `plans.json`.
-   Updating `plans.json` updates all pricing globally.
-   Pages reference plans via `plans_ref` in frontmatter.

---

### Promotional / Seasonal Content Model

Seasonal or campaign pages must:
-   Live permanently in the repo.
-   Include timing metadata.
-   Auto-appear only within active windows.

Example: `/src/content/coupons/halloween.md`

```yaml
---
title: "Halloween Hosting Sale"
description: "Spooky fast hosting – up to 60% off VPS and WordPress plans."
layout: "landing.astro"
template: "landing"
slug: "halloween"
active: true
promo_key: "halloween"
start_date: "2025-10-20"
end_date: "2025-11-01"
priority: 10
hero:
  headline: "Halloween Hosting Sale 🎃"
  subheadline: "Monstrous performance. Scary low prices."
  cta_text: "Claim Halloween Offer"
  cta_link: "/pricing/"
sections:
  - type: "problem-solution"
  - type: "features"
  - type: "comparison"
  - type: "faq"
  - type: "final-cta"
---
```

**Rules:**
1.  `active`: disables a promo.
2.  `start_date` / `end_date`: control visibility window.
3.  `priority`: shows the highest priority promo if overlap.
4.  Page stays routable year-round with an “expired” message.

---

### Promo Calendar (Phase 2)

Optional central promo calendar file controls yearly dates.

`/src/data/promo-calendar.json`

```json
{
  "black-friday": {
    "2025": { "start_date": "2025-11-28", "end_date": "2025-12-05" },
    "2026": { "start_date": "2026-11-27", "end_date": "2026-12-04" }
  },
  "halloween": {
    "2025": { "start_date": "2025-10-20", "end_date": "2025-11-01" },
    "2026": { "start_date": "2026-10-20", "end_date": "2026-11-01" }
  }
}
```


#### Content Structure
-   **Content Location**: `/src/content/` directory.
-   **Format**: Markdown with YAML frontmatter for metadata.
-   **Collections**:
    -   `blog/` - Blog posts
    -   `guides/` - Long-form guides
    -   `pages/` - Static pages (About, Services, etc.)
    -   `team/` - Team member profiles

#### Frontmatter Schema
```yaml
---
title: "Page Title"
description: "Meta description for SEO"
date: 2025-10-25
author: "Author Name"
tags: ["tag1", "tag2"]
featured_image: "/images/featured.jpg"
featured_image_alt: "Descriptive alt text"
draft: false
---
```

#### Content Update Workflow
1.  Edit markdown files directly in repository.
2.  Commit changes to `main` branch.
3.  CI/CD automatically builds and deploys.
4.  Deployment time: < 5 minutes.
5.  No downtime during deployment.

#### Media Management
-   **Storage Location**: `/public/images/`.
-   **Optimization**: Automatic responsive images (srcset).
-   **Alt Text**: Required in markdown: `![Alt text](image.jpg)`.
-   **Supported Formats**: WebP with fallback to JPG/PNG.
-   **Lazy Loading**: Enabled by default for images below fold.

### Performance Requirements

**Core Web Vitals Targets:**
-   **First Contentful Paint (FCP)**: < 1.2s
-   **Largest Contentful Paint (LCP)**: < 2.5s
-   **Total Blocking Time (TBT)**: < 200ms
-   **Cumulative Layout Shift (CLS)**: < 0.1
-   **Time to Interactive (TTI)**: < 3.5s

**Bundle Size Limits:**
-   Initial HTML: < 50KB
-   CSS: < 30KB
-   JS: < 50KB (modal + interactions only)
-   Images: Lazy loaded, optimized

**Lighthouse Score Minimums:**
-   Performance: 90+
-   Accessibility: 100
-   Best Practices: 95+
-   SEO: 100

### WCAG 2.2 Level AA Compliance

#### Perceivable (Principle 1)

**1.1.1 Non-text Content (Level A)**
-   All images have descriptive alt text.
-   Decorative images use `alt=""`.
-   Complex images (charts, diagrams) have long descriptions via `aria-describedby`.
-   Form controls have associated labels.

**1.2.1 Audio-only and Video-only (Prerecorded) (Level A)**
-   Transcripts provided for all audio/video content.
-   Transcripts linked directly below media.

**1.2.2 Captions (Prerecorded) (Level A)**
-   All prerecorded video includes synchronized captions.
-   Captions include relevant sounds and speaker identification.

**1.2.3 Audio Description or Media Alternative (Level A)**
-   Video content includes audio description or text transcript.

**1.2.4 Captions (Live) (Level AA)**
-   Live streaming (if implemented) includes live captions.

**1.2.5 Audio Description (Prerecorded) (Level AA)**
-   All prerecorded video includes audio description track.

**1.3.1 Info and Relationships (Level A)**
-   Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`.
-   Proper heading hierarchy (no skipped levels).
-   Lists use `<ul>`, `<ol>`, `<li>`.
-   Tables use `<th scope="col/row">` for headers.
-   Form labels use `<label for="input-id">`.

**1.3.2 Meaningful Sequence (Level A)**
-   Reading order matches visual order.
-   CSS positioning doesn't disrupt logical flow.
-   Tab order follows visual layout.

**1.3.3 Sensory Characteristics (Level A)**
-   Instructions don't rely solely on shape, size, location, or sound.
-   Example: "Click the Submit button" not "Click the blue button on the right".

**1.3.4 Orientation (Level AA)**
-   Content works in both portrait and landscape.
-   No orientation lock via CSS or JS.

**1.3.5 Identify Input Purpose (Level AA)**
-   Form inputs use autocomplete attributes.
-   `autocomplete="name"`, `autocomplete="email"`, `autocomplete="tel"`, etc.

**1.4.1 Use of Color (Level A)**
-   Color not sole means of conveying information.
-   Links distinguished from text by underline, not just color.
-   Form errors indicated by icons + text, not just red color.

**1.4.2 Audio Control (Level A)**
-   Auto-playing audio (if any) has pause/stop control within 3 seconds.

**1.4.3 Contrast (Minimum) (Level AA)**
-   Text contrast: 4.5:1 (normal), 3:1 (large 18pt+).
-   All color combinations tested and documented.

**1.4.4 Resize Text (Level AA)**
-   Text resizable to 200% without loss of content or functionality.
-   Uses relative units (rem, em, %).
-   No horizontal scrolling at 200% zoom.

**1.4.5 Images of Text (Level AA)**
-   Avoid images of text except for logos.
-   Use actual text styled with CSS.

**1.4.10 Reflow (Level AA)**
-   Content reflows at 320px width (mobile).
-   No 2D scrolling (horizontal + vertical).
-   Responsive design with breakpoints: 320px, 768px, 1024px, 1280px.

**1.4.11 Non-text Contrast (Level AA)**
-   UI components: 3:1 contrast minimum.
-   Focus indicators: 3:1 contrast.
-   Form input borders: 3:1 contrast.
-   Button boundaries: 3:1 contrast.

**1.4.12 Text Spacing (Level AA)**
-   Support user-defined spacing:
    -   Line height: 1.5x font size minimum.
    -   Paragraph spacing: 2x font size minimum.
    -   Letter spacing: 0.12x font size minimum.
    -   Word spacing: 0.16x font size minimum.
-   Content remains readable with all spacing adjustments.

**1.4.13 Content on Hover or Focus (Level AA)**
-   Tooltips/popovers:
    -   **Dismissable**: ESC key dismisses.
    -   **Hoverable**: Mouse can move over popup without it disappearing.
    -   **Persistent**: Popup remains until dismissed or focus moves.

#### Operable (Principle 2)

**2.1.1 Keyboard (Level A)**
-   All functionality available via keyboard.
-   Tab order logical and complete.
-   No mouse-only interactions.

**2.1.2 No Keyboard Trap (Level A)**
-   No focus trap except in modals (where ESC exits).
-   User can navigate away from all components.

**2.1.4 Character Key Shortcuts (Level A)**
-   If single-character shortcuts exist, they can be:
    -   Turned off.
    -   Remapped.
    -   Active only on focus.

**2.2.1 Timing Adjustable (Level A)**
-   If timed elements: User can turn off, adjust, or extend.
-   20x extension option provided.

**2.2.2 Pause, Stop, Hide (Level A)**
-   Auto-updating content (carousel, etc.):
    -   Has pause button.
    -   User can stop/hide.
    -   Doesn't update more than once per 5 seconds.

**2.3.1 Three Flashes or Below Threshold (Level A)**
-   No content flashes more than 3 times per second.
-   No large bright flashing areas.

**2.4.1 Bypass Blocks (Level A)**
-   **Skip Links**:
    -   "Skip to main content" (first focusable element).
    -   "Skip to navigation".
    -   "Skip to footer".
-   Skip links visible on focus.
-   Landmark regions for screen reader navigation.

**2.4.2 Page Titled (Level A)**
-   Every page has unique, descriptive `<title>`.
-   Format: "Page Name | Site Name".
-   Title describes page purpose.

**2.4.3 Focus Order (Level A)**
-   Focus order preserves meaning and operability.
-   Follows visual reading order (left-to-right, top-to-bottom for English).

**2.4.4 Link Purpose (In Context) (Level A)**
-   Link text describes destination.
-   Avoid "click here", "read more" without context.
-   Example: "Read more about our accessibility commitment".

**2.4.5 Multiple Ways (Level AA)**
-   At least two ways to find pages:
    -   Main navigation.
    -   Search function.
    -   Sitemap page.
    -   Breadcrumbs (on deep pages).

**2.4.6 Headings and Labels (Level AA)**
-   Headings describe topics clearly.
-   Form labels describe purpose.
-   Descriptive without relying on context.

**2.4.7 Focus Visible (Level AA)**
-   Visible focus indicator on all interactive elements.
-   Focus ring: 2px solid with 3:1 contrast.
-   Never remove outline without replacing with visible alternative.
-   `:focus-visible` for keyboard-only focus styling.

**2.4.11 Focus Not Obscured (Minimum) (Level AA) - NEW in 2.2**
-   Focused elements not completely hidden by other content.
-   Sticky headers/footers don't cover focus indicators.
-   Modals ensure focused elements remain visible.
-   Scroll position adjusted to reveal focused elements.

**2.5.1 Pointer Gestures (Level A)**
-   No multipoint gestures required (pinch, two-finger swipe).
-   All gestures have single-pointer alternative.

**2.5.2 Pointer Cancellation (Level A)**
-   Click/tap completes on up-event (not down-event).
-   Allows user to move pointer away to cancel.
-   Or provide undo mechanism.

**2.5.3 Label in Name (Level A)**
-   Visible label text included in accessible name.
-   Voice control users can say visible label to activate.

**2.5.4 Motion Actuation (Level A)**
-   No motion-only controls (shake to undo, tilt to scroll).
-   All motion controls have UI button alternative.

**2.5.7 Dragging Movements (Level AA) - NEW in 2.2**
-   No drag-and-drop without single-pointer alternative.
-   If sortable lists: Provide up/down arrow buttons.
-   If sliders: Provide text input or +/- buttons.
-   **Implementation**: Avoid drag interactions; use button-based alternatives.

**2.5.8 Target Size (Minimum) (Level AA) - NEW in 2.2**
-   Interactive targets minimum **24x24 CSS pixels**.
-   **Our Standard**: 44x44px (exceeds requirement).
-   Applies to:
    -   Buttons: `min-height: 44px`, `min-width: 44px`.
    -   Links: 24px minimum via padding.
    -   Form inputs: `min-height: 44px`.
    -   Icon buttons: 44x44px.
-   **Exceptions**: Inline text links, browser-controlled elements.

#### Understandable (Principle 3)

**3.1.1 Language of Page (Level A)**
-   HTML `lang` attribute set: `<html lang="en">`.
-   Correct language code for content.

**3.1.2 Language of Parts (Level AA)**
-   Foreign language phrases marked: `<span lang="fr">Bonjour</span>`.

**3.2.1 On Focus (Level A)**
-   Focusing an element doesn't trigger unexpected context change.
-   No auto-submit on focus.

**3.2.2 On Input (Level A)**
-   Changing input value doesn't auto-submit or change context.
-   Provide explicit submit button.

**3.2.3 Consistent Navigation (Level AA)**
-   Navigation appears in same location on every page.
-   Navigation items in same order.

**3.2.4 Consistent Identification (Level AA)**
-   Icons and buttons with same function have same label throughout.
-   Example: Search icon always labeled "Search".

**3.2.6 Consistent Help (Level A) ⭐ NEW in 2.2**
-   Help mechanism in consistent location across pages.
-   **Implementation**:
    -   "Contact" link in header and footer (same position).
    -   "Help" link in accessibility modal (consistent).
    -   Search available in header on all pages.

**3.3.1 Error Identification (Level A)**
-   Form errors clearly identified.
-   Error messages describe the error.
-   Example: "Email address is required" not "Error in field".

**3.3.2 Labels or Instructions (Level A)**
-   All form inputs have labels.
-   Required fields marked with visible indicator.
-   Format requirements explained.

**3.3.3 Error Suggestion (Level AA)**
-   Error messages suggest corrections.
-   Example: "Email must include @" not just "Invalid email".

**3.3.4 Error Prevention (Legal, Financial, Data) (Level AA)**
-   For important submissions: Provide:
    -   Reversible (can undo).
    -   OR Checked (system validates).
    -   OR Confirmed (user reviews before submit).

**3.3.7 Redundant Entry (Level A) - NEW in 2.2**
-   Don't ask for same information twice in same session.
-   **Implementation**:
    -   Use autocomplete attributes.
    -   Remember form data during session.
    -   Pre-fill known information.
    -   Copy-paste allowed (don't prevent).

**3.3.8 Accessible Authentication (Minimum) (Level AA) - NEW in 2.2**
-   No cognitive function tests required.
-   **Implementation**:
    -   Password field: `autocomplete="current-password"` (allows password managers).
    -   Offer email magic link as alternative.
    -   If security questions: Allow paste functionality.
    -   If CAPTCHA: Offer audio alternative.

#### Robust (Principle 4)

**4.1.2 Name, Role, Value (Level A)**
-   All UI components have accessible name.
-   Role communicated (button, link, checkbox, etc.).
-   State communicated (checked, expanded, pressed).
-   ARIA attributes used correctly.

**4.1.3 Status Messages (Level AA)**
-   Dynamic status messages announced to screen readers.
-   Use ARIA live regions:
    -   `aria-live="polite"` for non-critical.
    -   `aria-live="assertive"` for critical.
    -   `role="status"` for status messages.
    -   `role="alert"` for errors.

---

## TOOLS

### Static Site Generator
**Astro v4.x**

**Rationale:**
-   Zero JavaScript by default (opt-in only) - fewer accessibility issues.
-   Excellent performance out of the box.
-   Content Collections for type-safe content management.
-   Built-in image optimization.
-   Markdown + MDX support.
-   Easy to audit for accessibility (minimal JS complexity).
-   Component-based architecture.
-   Great developer experience.

### Styling
**Custom CSS with CSS Custom Properties**

**Rationale:**
-   Full control over output - no bloat.
-   Easier to audit for accessibility.
-   CSS Custom Properties for theming.
-   No framework lock-in.
-   Predictable output.

**Methodology:**
-   Mobile-first responsive design.
-   BEM methodology for class naming.
-   Separated concerns: `layout.css`, `typography.css`, `components.css`, `accessibility.css`.

### JavaScript
**Vanilla ES6+ (Minimal)**

**Usage Limited To:**
-   Accessibility modal (focus trap, preference management).
-   Scroll reveal animations (Intersection Observer API).
-   Skip link smooth scrolling.
-   Mobile menu toggle (if needed).
-   Reduced motion detection and enforcement.
-   Form validation and interactions.
-   Progressive enhancement approach.

**Budget:** Total JS < 50KB

**Animation Approach:**
-   **CSS-first**: All animations done with CSS when possible (better performance).
-   **Intersection Observer API**: For scroll-triggered reveals (native browser API, no library needed).
-   **requestAnimationFrame**: For complex JavaScript animations.
-   **NO animation libraries**: Avoid GSAP, Anime.js, Framer Motion to keep bundle small and maintain full control over accessibility.
-   **Motion preference detection**: JavaScript detects both OS preference and manual toggle.

### Build & Development Tools

**Package Manager:** pnpm
-   Faster than npm/yarn.
-   Efficient disk usage.
-   Strict dependency resolution.

**Build Tool:** Vite (via Astro)
-   Fast development server with HMR.
-   Optimized production builds.
-   Built-in code splitting.

**CSS Processing:** PostCSS
-   Autoprefixer for browser compatibility.
-   CSS nesting support.
-   CSS custom properties fallbacks.

**Code Quality Tools:**
-   **Prettier** v3.x - Code formatting.
-   **ESLint** v8.x - JavaScript linting.
    -   eslint-plugin-jsx-a11y (accessibility rules).
    -   eslint-plugin-astro.
-   **Stylelint** v16.x - CSS linting.

### Accessibility Testing Tools

**Automated Testing (CI/CD):**
-   **axe-core** v4.x - Comprehensive a11y testing library.
-   **Pa11y CI** v3.x - Automated WCAG testing command line.
-   **Lighthouse CI** - Performance + accessibility scoring.
-   **HTML Validator** - W3C HTML validation.

**Development Tools:**
-   **axe DevTools** browser extension - Manual testing.
-   **WAVE** browser extension - Visual feedback.
-   **Accessibility Insights** (Microsoft) - Detailed testing.

**Screen Readers (Manual Testing):**
-   **NVDA** (Windows, free, latest version).
-   **JAWS** (Windows, trial version 2023+).
-   **VoiceOver** (macOS/iOS, built-in).

**Contrast & Color Tools:**
-   **WebAIM Contrast Checker** - Online tool.
-   **Color Oracle** - Color blindness simulator.

### Version Control
**Git + GitHub**
-   Repository hosted on GitHub.
-   Branch protection on `main`.
-   Pull request reviews required.
-   Commit message conventions.

### Hosting & Deployment

**Hosting Infrastructure:** Your Internal Hosting Platform

**Required Hosting Features:**
-   Static file serving (HTML, CSS, JS, images).
-   HTTPS support with SSL/TLS certificates.
-   HTTP/2 or HTTP/3 support.
-   Gzip/Brotli compression enabled.
-   CDN or edge caching for global performance.
-   Custom error pages (404, 500, etc.).
-   HTTP security headers support.
-   Deploy automation capabilities.
-   Staging environment support.

**CI/CD:** GitHub Actions

**Build & Deploy Pipeline:**
1.  **Trigger:** Push to repository or pull request.
2.  **Build Process:**
    -   Install dependencies (`pnpm install`).
    -   Run tests (accessibility, linting, validation).
    -   Build static site (`astro build`).
    -   Output: `/dist` directory with all static assets.
3.  **Automated Tests:**
    -   axe-core accessibility tests.
    -   Pa11y WCAG compliance.
    -   Lighthouse CI performance + a11y.
    -   HTML validation.
4.  **Deployment:**
    -   Production: Deploy `/dist` to your hosting platform on merge to `main`.
    -   Staging: Deploy to staging environment on pull request.
    -   Method: SSH/SFTP, rsync, or your platform's deployment API.

**Deployment Requirements for Your Platform:**
-   Support for atomic deployments (zero downtime).
-   Rollback capability.
-   Deploy preview URLs for pull requests (if possible).
-   Automatic cache invalidation on deployment.
-   Build artifacts storage.

**DNS Management:**
-   Configure through your DNS provider.
-   Ensure proper A/AAAA or CNAME records.
-   CAA records for SSL certificate validation.
-   Consider using your CDN/edge network if available.

### Initial Deployment Strategy (Shared Hosting)

For the initial launch on a shared Linux hosting environment, a modern CI/CD pipeline is not available. The deployment workflow must be adapted as follows:

1.  **Local Build Process**: The static site will be built on a developer's local machine by running the `pnpm run build` command. This generates a production-ready `/dist` directory.
2.  **Manual Upload**: The developer will then manually upload the **contents** of the `/dist` directory to the `public_html` (or equivalent) folder on the shared server using an FTP/SFTP client.
3.  **No Automated Deployments**: All deployments, including updates and bug fixes, will follow this "local build, manual upload" process.

### Timed Promotions & Deployment Strategy

Goal: Marketing defines promo windows once, and the site automatically shows the correct seasonal offer during that window each year.

### Build-Time Logic

At build, the system checks each promo in `/src/content/coupons/`.
A promo is **live** if:
-   `active === true`
-   `start_date <= now <= end_date`

Live promos appear in:
-   Homepage promo banner.
-   `/coupons/` index page.
-   Pricing tables (sale badge, strike-through price).
-   Homepage “Featured offer”.

When not live, they are hidden but remain accessible with “This promotion has ended.”

All components must use a shared utility (e.g. `getActivePromos()`).

---

### Deployment Requirements

-   Scheduled daily deployments via GitHub Actions cron.
-   Daily rebuilds ensure promo logic stays accurate.
-   No manual intervention for start/stop.

**Example GitHub Action:**

```yaml
name: Scheduled Build
on:
  schedule:
    - cron: "0 1 * * *"
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm run build
      - run: pnpm run deploy
```

**Limitation for Shared Hosting:**
The automated, scheduled build process described above **is not possible** on the initial shared hosting environment. To activate or deactivate a timed promotion, a developer must manually run the build at the correct time and upload the updated `/dist` folder. This introduces a manual maintenance dependency.

**Recommendation for Future Expansion (VPS Stage):**
When the project expands to a VPS, it is strongly recommended to implement a Git-based CI/CD pipeline (e.g., using GitHub Actions with an SSH runner). This will fully enable the automated promotional logic, reduce manual error, and streamline deployments, unlocking the full potential of the architecture defined in this PRD.

---

### Promotional Pricing Overlays

Plans in `/src/data/pricing/plans.json` can include promo prices.

```json
{
  "wordpress-hosting": {
    "plans": [
      {
        "id": "wp-growth",
        "name": "Growth",
        "priceMonthly": 19.99,
        "priceMonthlyPromo": 11.99,
        "promoCopy": "Halloween Offer: Save 40%",
        "promoStart": "2025-10-20",
        "promoEnd": "2025-11-01",
        "tag": "Most Popular"
      }
    ]
  }
}
```

Display promo price only when current date within promo range.
Always show “Was £X” for accessibility.

---

### Accessibility & SEO Notes

-   Discount must be textually announced.
-   Expired promos remain indexable for SEO.
-   Active promos include valid structured data (`priceValidUntil`).


### Content Management Options

**Option A: Direct Git Editing (Recommended for Phase 1)**
-   Content team edits markdown files in GitHub.
-   GitHub web interface or VS Code.
-   Pull request workflow for reviews.
-   Full version control history.
-   No additional setup required.

**Option B: Decap CMS (Optional - Phase 2)**
-   Git-based CMS with visual editor.
-   No database required.
-   Authentication via GitHub OAuth.
-   Accessible admin interface.
-   Automatic pull requests for content changes.
-   Can be added later without disrupting workflow.

**Recommendation:** Start with Git editing; add Decap CMS if non-technical users need access.

### Browser & Assistive Technology Support

**Desktop Browsers (Required):**
-   Chrome 120+ (Windows, macOS, Linux)
-   Firefox 121+ (Windows, macOS, Linux)
-   Safari 17+ (macOS)
-   Edge 120+ (Windows)

**Mobile Browsers (Required):**
-   Safari (iOS 16+)
-   Chrome (Android 12+)

**Screen Readers (Required Support):**
| Screen Reader | Platform | Browser | Version |
|---------------|----------|---------|---------|
| JAWS | Windows | Chrome, Firefox, Edge | 2023+ |
| NVDA | Windows | Chrome, Firefox | Latest |
| VoiceOver | macOS | Safari | macOS 13+ |
| VoiceOver | iOS | Safari | iOS 16+ |
| TalkBack | Android | Chrome | Android 12+ |

**Other Assistive Technologies:**
-   Dragon NaturallySpeaking (voice control) - Latest
-   ZoomText (screen magnification) - Latest
-   Windows Magnifier - Windows 10+
-   macOS Zoom - macOS 13+

---

## DEPENDENCIES

### Production Dependencies

```json
{
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

**Rationale:** Astro is the only production dependency needed. The site is fully static with no runtime dependencies.

### Development Dependencies

```json
{
  "devDependencies": {
    "@astrojs/mdx": "^2.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "focus-trap": "^7.5.0",
    "prettier": "^3.1.0",
    "prettier-plugin-astro": "^0.12.0",
    "eslint": "^8.55.0",
    "eslint-plugin-astro": "^0.31.0",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "stylelint": "^16.0.0",
    "stylelint-config-standard": "^36.0.0",
    "@axe-core/cli": "^4.8.0",
    "pa11y-ci": "^3.1.0",
    "@lhci/cli": "^0.13.0",
    "schema-dts": "^1.1.0"
  }
}
```

### Dependency Descriptions

**Core Astro Plugins:**
-   `@astrojs/mdx` - MDX support for enhanced markdown.
-   `@astrojs/sitemap` - Automatic XML sitemap generation.

**Accessibility:**
-   `focus-trap` - Focus management for modal (well-tested library).
-   `eslint-plugin-jsx-a11y` - Catch accessibility issues during development.

**Code Quality:**
-   `prettier` + `prettier-plugin-astro` - Consistent code formatting.
-   `eslint` + `eslint-plugin-astro` - JavaScript linting.
-   `stylelint` + `stylelint-config-standard` - CSS linting.

**Testing:**
-   `@axe-core/cli` - Automated accessibility testing.
-   `pa11y-ci` - WCAG compliance testing.
-   `@lhci/cli` - Lighthouse CI for performance + a11y.
-   `schema-dts` - TypeScript definitions for Schema.org (type safety).

### Runtime Dependencies
**None** - The built site is pure HTML/CSS/JS with no external runtime dependencies or CDN scripts.

### Dependency Management Policy

**Version Pinning:**
-   Use caret (^) for patch/minor updates.
-   Lock major versions.
-   Review major updates before upgrading.

**Update Schedule:**
-   Security updates: Immediate.
-   Minor/patch updates: Monthly review.
-   Major updates: Quarterly review with testing.

**Security Audits:**
-   Run `npm audit` on every build.
-   Automated Dependabot PRs enabled.
-   Review all dependency changes in PRs.

**Bundle Impact:**
-   Monitor bundle size on every build.
-   Reject dependencies that add > 10KB without strong justification.
-   Prefer vanilla solutions over library dependencies.

---

## EXAMPLES

theme design - `examples\astro-storyblok-finance-starter-main`
theme design - `examples\dockit-astro-main`
theme design - `examples\folex-lite-astro-main`
theme design - `examples\monakit-main`
homepage ideas - `examples\gemini pro 2.5 pages_index.tsx`
homepage ideas - `examples\new homepage 1.txt`
homepage ideas - `examples\qwen coder pages_index.tsx`

## DOCUMENTATION


## MCP Server Quick Reference

### ARCHON - Premium Hosting Knowledge
**What's stored here:** Everything related to YOUR hosting infrastructure

-   Hosting platform architecture and capabilities.
-   Deployment procedures and API documentation.
-   Server configuration guides (Nginx/Apache/Custom).
-   Security setup (SSL, headers, firewall rules).
-   Performance optimization for your platform.
-   Monitoring and alerting setup.
-   Backup and disaster recovery procedures.
-   DNS and domain configuration.
-   CI/CD integration with your hosting platform.
-   SLA and uptime requirements.

**Use this when:** You need hosting-specific procedures or infrastructure knowledge.

---

### CONTEXT7 - Latest Development Guidelines
**What's stored here:** Current web standards and best practices

#### Accessibility Standards
-   WCAG 2.2 Specification → https://www.w3.org/TR/WCAG22/
-   ARIA Authoring Practices → https://www.w3.org/WAI/ARIA/apg/
-   WebAIM Guidelines → https://webaim.org/
-   Deque axe Documentation → https://www.deque.com/

#### Schema.org & SEO
-   Schema.org Documentation → https://schema.org/
-   Google Structured Data → https://developers.google.com/search/docs/
-   JSON-LD Best Practices.
-   Technical SEO Guidelines.

#### Frameworks & Tools
-   Astro Documentation → https://docs.astro.build/
-   Modern CSS Standards (W3C).
-   JavaScript ES6+ & Web APIs (MDN).
-   Testing Tools: axe-core, Pa11y, Lighthouse, Playwright.

#### Animation Standards
-   CSS Animations Specification.
-   prefers-reduced-motion Guidelines.
-   Web Animations API.
-   Performance Best Practices.

**Use this when:** You need to reference current standards or best practices.

---

### FILESYSTEM - Local Project Files
**What's stored here:** All source code and documentation

-   `/src/` - Source code (components, layouts, styles, scripts, content).
-   `/public/` - Static assets (images, fonts, favicon).
-   Configuration files (package.json, astro.config, eslint, prettier, etc.).
-   Documentation (README, ACCESSIBILITY, CONTRIBUTING).
-   Tests.

**Use this when:** Working with actual project files.

---

### GIT - Version Control
**What's stored here:** Code history and branches

-   All commits and change history.
-   Branch management (main, develop, feature/*, fix/*).
-   .gitignore configuration.

**Use this when:** Managing code versions or reviewing history.

---

### GITHUB - Repository & CI/CD
**What's stored here:** Automation and collaboration

-   CI/CD Workflows (build, test, deploy).
-   Issue templates and pull request templates.
-   GitHub Actions configuration.
-   Deployment automation.
-   Dependency management.

**Use this when:** Setting up automation or managing deployments.

---

### PLAYWRIGHT - Testing
**What's stored here:** Automated tests

-   Accessibility tests (keyboard nav, screen reader, ARIA).
-   End-to-end user journey tests.
-   Form validation tests.
-   Animation tests.
-   Schema validation tests.
-   Cross-browser tests.

**Use this when:** Writing or running automated tests.

---

### 🔍 FETCH - External APIs & Validation
**What's stored here:** External service calls

-   Google Rich Results Test API.
-   Schema.org Validator API.
-   W3C HTML/CSS Validators.
-   CDN resources.
-   Analytics scripts.

**Use this when:** Validating content or fetching external resources.

---

### SEQUENTIAL THINKING - Problem Solving
**What's stored here:** Complex decision-making processes

-   Architecture Decision Records (ADRs).
-   Performance optimization strategies.
-   Complex bug debugging approaches.
-   Accessibility implementation patterns.
-   Schema.org nesting logic.

**Use this when:** Making complex technical decisions or solving difficult problems.

---

### SERENA
**What's stored here:** [To be defined]

**Use this when:** [To be defined]

---

## Quick Lookup Table

| I need to... | Check... |
|--------------|----------|
| Deploy the site | ARCHON |
| Reference WCAG criteria | CONTEXT7 |
| Find Astro documentation | CONTEXT7 |
| Look at source code | FILESYSTEM |
| Review commit history | GIT |
| Set up CI/CD | GITHUB |
| Run accessibility tests | PLAYWRIGHT |
| Validate Schema markup | FETCH |
| Make architecture decision | SEQUENTIAL THINKING |
| Configure hosting | ARCHON |
| Learn animation best practices | CONTEXT7 |

---

## Development Workflow (Simplified)

```
1. Reference guidelines → CONTEXT7
2. Write code → FILESYSTEM
3. Commit changes → GIT
4. Push to repo → GITHUB
5. Tests run automatically → GITHUB + PLAYWRIGHT + FETCH
6. Deploy to hosting → ARCHON
```

---

## OTHER CONSIDERATIONS (Gotchas & Non‑negotiables)

### Security Requirements

**HTTP Security Headers**

Configure these headers in your hosting platform (via web server config, reverse proxy, or platform-specific settings):

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**Configuration Method (depends on your platform):**
-   **Nginx:** Configure in `nginx.conf` or site config file.
-   **Apache:** Use `.htaccess` or virtual host config.
-   **Reverse Proxy:** Configure in proxy layer (Cloudflare, etc.).
-   **Platform-Specific:** Use your hosting platform's header configuration.

**HTTPS Enforcement:**
-   Enforce HTTPS redirect (configure at web server or load balancer level).
-   HSTS header with 1 year max-age.
-   Redirect all HTTP to HTTPS (301 redirects).

**Dependency Security:**
-   Run `npm audit` on every build.
-   Configure Dependabot for automated security updates.
-   Review all dependency updates in PRs.
-   Pin major versions, allow minor/patch updates.

**Form Security (if applicable):**
-   CSRF protection for form submissions.
-   Rate limiting on contact forms.
-   Sanitize all user inputs.
-   Never expose sensitive data in HTML.

### SEO Requirements

**On-Page SEO:**
-   Unique `<title>` tags for every page (< 60 characters).
-   Meta descriptions for all pages (< 160 characters).
-   Semantic HTML aids SEO.
-   Descriptive, clean URLs.
-   Fast page load times (< 2 seconds).
-   Mobile-friendly responsive design.
-   **Structured Data (Schema.org)**: JSON-LD markup on every page with proper nesting.

**Structured Data Requirements:**
-   **JSON-LD format** (preferred by Google, W3C compliant).
-   **Every page must include** properly nested Schema.org markup.
-   **Base schemas required**:
    -   Organization (site-wide)
    -   WebSite (homepage)
    -   WebPage (all pages)
    -   BreadcrumbList (navigation hierarchy)
-   **Content-specific schemas**:
    -   Article (blog posts)
    -   FAQPage (FAQ page)
    -   ContactPage (contact page)
    -   AboutPage (about page)
    -   Person (team member pages)
-   **Proper nesting**: Follow Schema.org hierarchy guidelines.
-   **Validation**: Test all markup with Google Rich Results Test and Schema.org validator.

**Technical SEO:**
-   XML sitemap auto-generated (`@astrojs/sitemap`).
-   `robots.txt` configured appropriately.
-   Structured data (Schema.org) for rich results - **REQUIRED on every page**.
-   404 page with helpful navigation.
-   Clean URL structure (no query parameters).

**Schema.org Implementation Strategy:**
1.  **Global Organization Schema**: Define once, reference everywhere via @id.
2.  **@graph Pattern**: Use @graph to nest multiple related schemas.
3.  **Consistent @id Format**: Use `https://example.com/page/#type` format.
4.  **Cross-referencing**: Link entities using @id references (e.g., author, publisher).
5.  **Validation Pipeline**: Automated validation in CI/CD before deployment.
6.  **Testing**: Manual verification in Google Rich Results Test.

**Schema Priority Levels:**
-   **Critical (Must Have)**: Organization, WebSite, WebPage, BreadcrumbList.
-   **High Priority**: Article (blog), ContactPage, AboutPage, FAQPage.
-   **Medium Priority**: Person (team), Service, Product.
-   **Optional**: Review, Rating, Event (if applicable).

**robots.txt:**
```
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap-index.xml
```

### Analytics & Privacy

**Privacy-Friendly Analytics:**

**Recommended: Plausible Analytics**
-   No cookies required.
-   GDPR, CCPA, PECR compliant.
-   Lightweight script (< 1KB).
-   Privacy-focused (no personal data collected).
-   Simple, actionable metrics.
-   Cost: ~$9/month.

**Alternative: Fathom Analytics**
-   Similar privacy features.
-   GDPR compliant.
-   No cookie consent needed.
-   Cost: ~$14/month.

**DO NOT USE:**
-   Google Analytics (privacy concerns, requires cookie consent).
-   Facebook Pixel (privacy invasive).
-   Any analytics that require cookie consent banners.

**Implementation Strategy for Analytics:**
To facilitate easy integration of analytics in the future without requiring code changes across the site, the following strategy will be used:
1.  **Centralized Analytics Component**: A single, dedicated Astro component (`/src/components/Analytics.astro`) will be created to house all analytics scripts.
2.  **Environment Variable Control**: This component will be controlled by environment variables (e.g., `PUBLIC_PLAUSIBLE_DOMAIN`). If the variable is not set, the component will render nothing.
3.  **Global Inclusion**: The `<Analytics />` component will be placed once in the main layout file, ensuring it is included on every page of the site.

This approach allows analytics to be "turned on" site-wide by simply adding a variable to the hosting environment and redeploying, with zero code modification needed.

**Cookie Policy:**
-   If using cookieless analytics: No cookie banner needed.
-   If cookies required: Implement accessible cookie consent with keyboard navigation.

**Privacy Policy:**
-   Required even with cookieless analytics.
-   Explain data collection (minimal with Plausible/Fathom).
-   Link prominently in footer.
-   Plain language, not legalese.

### Internationalization (Future Consideration)

**If Multilingual Support Needed (Phase 2):**

**Technical Requirements:**
-   `hreflang` tags for language alternatives.
-   Language switcher in consistent location.
-   Translate all content, not just body text.
-   Translate alt text and ARIA labels.
-   RTL language support (Arabic, Hebrew).
-   Date/time formatting per locale.

**Directory Structure:**
```
/en/
  /about
  /services
/es/
  /acerca-de
  /servicios
/fr/
  /a-propos
  /services
```

**HTML Lang Attribute:**
```html
<html lang="en">
  ...
  <p>The French word <span lang="fr">bonjour</span> means hello.</p>
  ...
</html>
```

### Maintenance & Support

**Ongoing Maintenance Schedule:**

**Daily:**
-   Monitor uptime (your hosting platform's monitoring + external service).
-   Check deployment status.
-   Review error logs.

**Weekly:**
-   Review automated accessibility test results.
-   Check for security advisories.
-   Monitor server resources.

**Weekly:**
-   Review automated accessibility test results.
-   Check for security advisories.

**Monthly:**
-   Review and update dependencies.
-   Run manual accessibility spot checks.
-   Review analytics for issues.
-   Content updates as needed.

**Quarterly:**
-   Full manual accessibility review.
-   Performance optimization review.
-   Content audit.
-   Review and update documentation.

**Annually:**
-   Third-party accessibility audit.
-   User testing with people with disabilities.
-   Major dependency updates.
-   Review WCAG standards for changes.

**Support Process:**

**Accessibility Issues:**
-   Email: accessibility@example.com
-   Response SLA: 2 business days.
-   Priority: Critical > High > Medium > Low.
-   Track issues in GitHub.

**Content Updates:**
-   Submit via pull request.
-   Review process: Content review → Technical review → Deploy.
-   Deploy time: < 5 minutes after merge.

**Emergency Procedures:**
-   Critical accessibility issue: Fix immediately, deploy within 1 hour.
-   Security issue: Fix immediately.
-   Content errors: Fix within 4 hours.
-   Visual bugs: Fix within 1 business day.

### Performance Monitoring

**Tools:**
-   **Lighthouse CI:** Run on every deployment.
-   **WebPageTest:** Monthly performance checks.
-   **Core Web Vitals:** Monitor via search console.
-   **Uptime Monitoring:** Your hosting platform's built-in monitoring + external service (StatusCake, Pingdom, UptimeRobot, etc.).

**Performance Budget:**
-   Time to Interactive: < 3.5 seconds
-   First Contentful Paint: < 1.2 seconds
-   Largest Contentful Paint: < 2.5 seconds
-   Cumulative Layout Shift: < 0.1
-   Total page weight: < 500KB
-   JavaScript bundle: < 50KB
-   CSS bundle: < 30KB

### Out of Scope (Phase 1)

The following features are explicitly **OUT OF SCOPE** for initial launch:

**Not Included:**
-   User authentication/login system.
-   User accounts or profiles.
-   E-commerce/shopping cart.
-   Payment processing.
-   Video streaming/hosting.
-   Real-time chat or messaging.
-   User-generated content (comments, forums).
-   Social media integration/embeds.
-   Third-party widgets (except videos with captions).
-   Complex data visualizations.
-   Interactive maps.
-   Search functionality (may add in Phase 2).
-   Multi-language support (future consideration).
-   Heavy animation libraries (GSAP, Three.js, etc.) - keeping animations native CSS/JS.

**May Be Added Later:**
-   Search (Phase 2).
-   Decap CMS for content editing (Phase 2).
-   Newsletter signup (Phase 2).
-   Basic contact form (Phase 1.5).

**Handling of Phase 2 Features in the Codebase:**
To prepare for future development without including incomplete features in the initial production build, the following approach will be taken:
-   **Placeholder Components**: Basic, non-functional placeholder components for Phase 2 features (e.g., `Search.astro`, `ContactForm.astro`) will be created.
-   **Build-Time Flags**: The inclusion of these components in the final site will be controlled by environment variables (e.g., `PUBLIC_ENABLE_SEARCH=true`). By default, these flags will be disabled for production builds, ensuring the features are completely excluded from the live site until they are ready for launch.

### Animations & WCAG Compliance Clarification

**How This Approach Maintains Full WCAG 2.2 Level AA Compliance:**

1.  **User Control (WCAG 2.2.2 - Pause, Stop, Hide)**
    -   Manual toggle in accessibility control panel.
    -   OS-level `prefers-reduced-motion` automatically respected.
    -   All auto-playing content has pause controls.

2.  **No Flashing Content (WCAG 2.3.1)**
    -   Design guidelines prohibit rapid flashing.
    -   All animations reviewed for safety.
    -   Maximum 3 flashes per second enforced.

3.  **Motion Actuation (WCAG 2.5.4)**
    -   No motion-only controls.
    -   All features have button/click alternatives.
    -   Motion enhances but never blocks functionality.

4.  **Progressive Enhancement**
    -   Core functionality works without JavaScript.
    -   Animations layer on top of accessible foundation.
    -   Reduced motion provides instant state changes or simple fades.

5.  **Performance Maintained**
    -   Animations optimized for 60fps.
    -   GPU-accelerated where possible.
    -   No impact on loading times or Core Web Vitals.

**This approach provides the best of both worlds:**
-   ✅ Modern, engaging experience for users who enjoy animations.
-   ✅ Full accessibility compliance with user control.
-   ✅ Better than "no animations" approach (more engaging for majority of users).
-   ✅ Better than "animations always on" approach (respects user needs).

The key is **user empowerment** - letting users choose their experience while maintaining full accessibility compliance through proper implementation.

### Launch Checklist

#### Pre-Launch Requirements

**Accessibility (Must Complete Before Launch):**
-   [ ] All automated tests passing (axe, Pa11y, Lighthouse = 100).
-   [ ] Manual keyboard testing completed on all pages.
-   [ ] Screen reader testing completed (JAWS, NVDA, VoiceOver).
-   [ ] Third-party accessibility audit completed and passed.
-   [ ] User testing with 5+ people with disabilities completed.
-   [ ] All critical and high-priority issues resolved.
-   [ ] Accessibility statement published at `/accessibility`.
-   [ ] VPAT (Voluntary Product Accessibility Template) completed.

**Technical:**
-   [ ] All pages load in < 2 seconds on 3G.
-   [ ] Lighthouse scores meet minimums (Perf 90+, A11y 100, BP 95+, SEO 100).
-   [ ] Cross-browser testing completed (Chrome, Firefox, Safari, Edge).
-   [ ] Mobile testing completed (iOS + Android).
-   [ ] All forms tested and validated.
-   [ ] 404 page designed and functional.
-   [ ] Security headers configured.
-   [ ] SSL certificate active and forced HTTPS.
-   [ ] DNS configured correctly.
-   [ ] Redirects configured (if migrating from old site).

**Content:**
-   [ ] All content proofread and approved.
-   [ ] All images optimized (WebP with fallbacks).
-   [ ] All images have alt text.
-   [ ] Meta descriptions written for all pages.
-   [ ] Legal pages complete (Privacy Policy, Terms).
-   [ ] Contact information verified and tested.
-   [ ] All internal links tested.
-   [ ] All external links tested.

**SEO:**
-   [ ] XML sitemap generated and submitted.
-   [ ] robots.txt configured.
-   [ ] Google Search Console setup.
-   [ ] Social sharing meta tags implemented.
-   [ ] Canonical URLs configured.
-   [ ] Schema.org structured data on all pages.
-   [ ] Structured data validated (Google Rich Results Test + Schema.org Validator).
-   [ ] Breadcrumb markup tested.

**Analytics & Monitoring:**
-   [ ] Privacy-friendly analytics installed (Plausible/Fathom).
-   [ ] Uptime monitoring configured.
-   [ ] Error tracking configured (optional).
-   [ ] Performance monitoring dashboard setup.

**Documentation:**
-   [ ] Developer documentation complete.
-   [ ] Content editor guide complete.
-   [ ] Deployment process documented.
-   [ ] Support procedures documented.
-   [ ] Emergency contact list created.

**Legal & Compliance:**
-   [ ] Accessibility statement reviewed by legal (if required).
-   [ ] Privacy policy reviewed by legal.
-   [ ] GDPR/CCPA compliance verified (if applicable).
-   [ ] Terms of service (if applicable).

#### Post-Launch (Within 1 Week)

-   [ ] Monitor analytics for traffic patterns.
-   [ ] Monitor error logs for issues.
-   [ ] Check Core Web Vitals in Search Console.
-   [ ] Verify all forms receiving submissions.
-   [ ] Review accessibility feedback channel.
-   [ ] Fix any minor issues discovered.

#### Post-Launch (Within 1 Month)

-   [ ] User feedback survey.
-   [ ] Review analytics insights.
-   [ ] Plan Phase 2 features.
-   [ ] Schedule first quarterly accessibility review.

### Success Criteria

**Launch Success Indicators:**
✅ WCAG 2.2 Level AA: 0 violations in audit.
✅ Lighthouse Accessibility Score: 100.
✅ Lighthouse Performance Score: 90+.
✅ Third-party audit: PASS.
✅ User testing: 100% of critical tasks completable by all users.
✅ Page load time: < 2 seconds on 3G.
✅ Zero critical or high-priority bugs.
✅ All target browsers/AT tested and working.
✅ Animations work smoothly on all devices (60fps).
✅ Reduce motion toggle works correctly on all pages.
✅ `prefers-reduced-motion` respected throughout site.

**Ongoing Success Metrics (Monthly):**
-   Lighthouse accessibility score: 100 (maintained).
-   Zero accessibility complaints received.
-   Page load times: < 2 seconds (maintained).
-   Core Web Vitals: All metrics in "green" range.
-   Uptime: > 99.9%.
-   Zero security vulnerabilities.

**Long-Term Goals (6-12 Months):**
-   Industry recognition for accessibility.
-   Positive user testimonials from people with disabilities.
-   Increased organic traffic (SEO benefits of accessibility).
-   No accessibility-related legal issues.
-   Serve as accessibility benchmark for competitors.

---

### Automation & Metadata Non-Negotiables

-   **Promo Visibility:** Driven by metadata (`active`, `start_date`, `end_date`, `promo_key`), never hard-coded.
-   **Pricing Consistency:** All displayed prices must come from `/src/data/pricing/plans.json`.
-   **Promo Calendar:** If `/src/data/promo-calendar.json` exists, promo pages must use `promo_key`.
-   **Deploy Automation:** Daily rebuilds during promo periods are mandatory.