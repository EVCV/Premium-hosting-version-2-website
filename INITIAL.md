# INITIAL.md

This file is the single source of truth for the end‑to‑end Product Premium Hosting Website.

This document is the single source of truth for Premium Hosting website construction.

It is written using high-context task framing, explicit constraints, and deterministic execution boundaries so that it can be consumed by developers without guesswork.

## 📑 TABLE OF CONTENTS

### Executive Overviews

- [EXECUTIVE SUMMARY](#executive-summary)
  - **FOR EXECUTIVES & STAKEHOLDERS** (2-3 minute read)
  - **FOR DEVELOPERS & TECHNICAL TEAM** (5-10 minute read)
  - **FOR CONTENT CREATORS & MARKETERS** (3-5 minute read)

### Core Documentation

- [OVERVIEW](#overview) - Company info, goals, target audience
- [FEATURE](#feature) - Sitemap and URL architecture
- [PAGE STRUCTURE → TEMPLATE INVENTORIES](#page-structure--template-inventories) - Content models and layouts
- [Dynamic Content & Seasonal Logic](#dynamic-content--seasonal-logic) - Pricing and promotional systems

### Technical Foundations

- [TOOLS](#tools) - Static generator, styling, JavaScript, build tools
- [DEPENDENCIES](#dependencies) - Production/dev dependencies and policies
- [OTHER CONSIDERATIONS](#other-considerations-gotchas--non-negotiables)
  - Security Requirements
  - SEO Requirements
  - Analytics & Privacy
  - Performance Monitoring
  - Accessibility Standards & Compliance
  - Animation Strategy & Motion Preferences

### Business & Strategic

- [CONTENT GENERATION FRAMEWORKS](#content-generation-frameworks)
  - Universal Content Standards
  - Homepage Content Framework
  - Service Page Content Framework
  - Landing Page Content Framework
- [COMPETITIVE INTELLIGENCE & MARKET RESEARCH](#competitive-intelligence--market-research)
  - SEO & Content Strategy
  - Target Market Segments

### Launch & Quality Assurance

- Launch Checklist (Pre/Post-launch requirements)
- Success Criteria & Ongoing Metrics

### Appendices

- [EXAMPLE PAGE](#example-page) - Content model examples
- [DOCUMENTATION](#documentation) - MCP server reference guide

---

#### ⚡ Quick Reference Guide

**For Implementation Questions:**

- Technical details → [TOOLS](#tools), [DEPENDENCIES](#dependencies)
- Design patterns → [PAGE STRUCTURE](#page-structure--template-inventories)
- Accessibility → See "Comprehensive Accessibility Standards" section

**For Content Creators:**

- Frameworks → [CONTENT GENERATION FRAMEWORKS](#content-generation-frameworks)
- Brand guidelines → See "Content Guidelines & Brand Behavior" in Overview

**For Business Decisions:**

- Goals → [OVERVIEW](#overview) Goals section
- Competition → [COMPETITIVE INTELLIGENCE](#competitive-intelligence--market-research)

---

## EXECUTIVE SUMMARY

This document serves as the single source of truth for the Premium Hosting website project, providing end-to-end specifications from technical architecture to content strategy.

### FOR EXECUTIVES & STAKEHOLDERS (2-3 minute read)

**Project Overview:** Premium Hosting is building a WCAG 2.2 Level AA compliant, ultra-modern hosting website targeting UK businesses and agencies with a focus on premium service, performance, and accessibility.

**Key Objectives:**

- 100% WCAG 2.2 Level AA accessibility compliance
- Industry-leading performance (Lighthouse 95+ scores)
- Conversion-optimized user experience
- Single code deployment across all hosting environments

**Success Metrics:**

- Lighthouse Accessibility: 100/100
- Performance Score: 90+
- Page Load Time: <2 seconds
- 99.9% uptime guarantee

**Technology Stack:**

- Astro 5.x + TypeScript + Tailwind CSS
- Static generation with accessibility-first approach
- Progressive enhancement (zero JS by default)
- WCAG 2.2 Level AA compliance framework

**Risk Mitigation:**

- Progressive enhancement ensures functionality without JavaScript
- Comprehensive accessibility testing integrated into CI/CD
- Automated accessibility audits prevent regressions

---

### FOR DEVELOPERS & TECHNICAL TEAM (5-10 minute read)

**Technical Architecture:**

```typescript
// Core stack
Framework: Astro v5.15.3 (Static-first, zero JS by default)
Language: TypeScript v5.9.3 (Strict mode required)
Styling: Tailwind CSS v3.4.18 + CSS Custom Properties
Content: Markdown with YAML frontmatter + Content Collections
```

**Key Technical Requirements:**

- **Zero JavaScript startup** (progressive enhancement only)
- **WCAG 2.2 Level AA compliance** (accessibility-first approach)
- **Performance budget**: <50KB JS, <30KB CSS, <2s load time
- **Type-safe content** with Zod validation
- **SEO-first**: Schema.org structured data on every page

**Accessibility Implementation:**

- Manual toggle + OS preference detection for motion control
- Focus management with visible indicators (3:1 contrast)
- Screen reader support with proper ARIA labeling
- Keyboard navigation with logical tab order
- High contrast theme support

**Development Workflow:**

1. Local development with `pnpm dev`
2. TypeScript checking with `astro check`
3. Automated accessibility testing (axe-core, Pa11y)
4. Build optimization with Vite
5. Static deployment to hosting platform

---

### FOR CONTENT CREATORS & MARKETERS (3-5 minute read)

**Brand Identity:**

- **Company Name**: Premium Hosting (UK-based, global reach)
- **Tagline**: "Engineered for Excellence"
- **Core Values**: Truthfulness, Professionalism, Inspiration, Excellence, Care
- **Brand Voice**: Knowledgeable, Precise, Aspirational

**Content Frameworks:**

- **Entity-First Strategy**: Lead with service/product names
- **First-Person Plural**: "We provide", "Our services"
- **Benefit-Focused**: Customer outcomes over technical specs
- **CTA Language**: Possessive format ("Get my free quote")

**Prohibited Terms:** best, greatest, leading, top, premier, excellence, quality, superior (unless provable)

**SEO Strategy:**

- Primary keywords: web hosting, UK web hosting, premium web hosting
- Technical SEO focus: performance, security, uptime guarantees
- Schema.org structured data: Required on every page
- Local SEO: UK-based positioning, data center locations

**Content Management:**

- Markdown-based with YAML frontmatter
- Content Collections for type-safe content
- Automated table of contents generation
- Mobile-first paragraph structure (3-4 sentences max)

**Pricing Integration:**

- Centralized pricing in `/src/pricing/` JSON files
- Global updates propagate to all components
- Promotional pricing overlays supported
- Transparent billing with UK location emphasis

---

## OVERVIEW

Development of an ultra-modern, futuristic, and award-winning website for a hosting company called Premium Hosting. Based in the UK with a worldwide reach. A premium experience is offered throughout. The design will be a fully accessible, static website that meets WCAG 2.2 Level AA compliance standards. The site will feature a comprehensive accessibility control panel, allowing users to customize their viewing experience while maintaining complete keyboard navigation, screen reader compatibility, and adherence to all modern accessibility standards.

### Company Information

- **Company Name**: Premium Hosting
- **Parent Company**: Part of EVCV Limited
- **Founded**: 2021 by Richard Chowns
- **Years Trading**: 4+ years
- **Headquarters**: Alcester, UK
- **Registered Address**: 28 Oak Tree Lane, Cookhill, Alcester, Warwickshire, B49 5LH, England
- **Company Registration**: 13570383
- **VAT Number**: GB389265053
- **ICO Reference**: ZB232228
- **ICO Certificate**: src/assets/EVCV-Limited-ICO-Certificate.pdf
- **DUNS Number**: 227960328
- **Location**: UK-wide with global reach
- **Certifications**: GDPR compliant, PCI DSS compliant, ICO registered for data compliance
- **Awards**: Winner of SME News Rising Stars in Web Hosting 2025
- **Mission**: To provide a premium hosting experience built on reliability, performance, and care
- **Vision**: To become one of the most trusted hosting providers worldwide while keeping a personal approach at every stage
- **Tagline**: Engineered for Excellence

### Core Brand Identity

#### Core Values

1. **Truthfulness** - Honest, transparent communication
2. **Professionalism** - Expert, reliable service delivery
3. **Inspiration** - Innovative solutions that inspire confidence
4. **Excellence** - Superior quality in every aspect
5. **Care** - Personal, attentive customer service

#### Brand Personality

- **Ambitious** - Forward-thinking, growth-oriented
- **Innovative** - Cutting-edge technology solutions
- **Professional** - Expert, trustworthy, reliable
- **Confident** - Self-assured, authoritative
- **Caring** - Customer-focused, supportive

#### Brand Voice

- **Knowledgeable** - Expert insights and technical understanding
- **Precise** - Clear, accurate, detailed information
- **Aspirational** - Inspiring confidence and trust

#### Message Pillars

1. **Reliability you can count on** - Emphasize uptime, stability, and dependability
2. **Support that cares** - Highlight personal, expert customer service
3. **Engineered for excellence** - Showcase technical superiority and innovation
4. **Effortless experience** - Focus on ease of use and seamless service

### Visual Identity

#### Primary Color Palette

| Color Name | HEX | RGB | Usage |
|------------|-----|-----|-------|
| **Gold** | `#D4AF37` | `212, 175, 55` | Primary accent color symbolizing quality and excellence. Used for highlights, icons, buttons, and key visual elements. |
| **Black** | `#000000` | `0, 0, 0` | Core color representing strength, precision, and professionalism. Used for backgrounds, typography, and core layouts. |
| **Dark Purple** | `#1B002E` | `27, 0, 46` | Secondary color adding depth and contrast. Often used for headers, gradients, or background sections to convey luxury. |
| **Cream** | `#FCFBE6` | `252, 251, 230` | Soft neutral balance to the dark palette. Used for backgrounds, supporting elements, or to enhance readability. |

#### Typography

- **Primary Typeface**: Space Grotesk (Regular, Medium)
- **Fallback Typeface**: Inter
- **Usage**: Consistent use ensures clarity, modernity, and premium presentation across digital and print materials.

#### Imagery Guidelines

- Clean, high contrast visuals that showcase technology, precision, and professionalism
- Authentic photography and technical illustrations
- Maintain visual balance with the brand palette
- Focus on infrastructure, performance, and reliability themes

#### Logo Usage

- Available in three formats: horizontal, square, and shield icon
- Must always appear clear, balanced, and surrounded by adequate space
- Do not modify proportions, add effects, or distort the logo

### Service Portfolio

#### Core Hosting Services

1. **Shared Hosting** - Affordable, reliable hosting for small websites
2. **WordPress Hosting** - Optimized hosting for WordPress sites
3. **Cloud Hosting** - Scalable, flexible cloud infrastructure
4. **VPS Hosting** - Virtual private servers for growing businesses
5. **Dedicated Servers** - Full server control and resources
6. **Managed Hosting** - Fully managed infrastructure solutions

#### Additional Services

- **SSL Certificates** - Security and trust for websites
- **CDN Services** - Global content delivery and performance
- **Domain Services** - Registration, transfer, and management
- **Email Hosting** - Professional business email solutions
- **Website Builder** - Easy website creation tools
- **Security & DDoS Protection** - Advanced threat mitigation

#### Enterprise Solutions

- **High-Traffic Hosting** - Scalable solutions for high-volume sites
- **Managed Services** - Comprehensive infrastructure management
- **Custom Development** - Bespoke hosting solutions
- **Migration Services** - Seamless platform transitions

### Target Audience

#### Primary Audiences

- **Business owners** - Small to medium businesses needing reliable hosting
- **Marketing teams** - Agencies and marketing professionals
- **Procurement managers** - Large organizations requiring enterprise solutions
- **Entrepreneurs** - Startups and growing businesses
- **Agencies** - Design and development agencies
- **Larger organisations** - Enterprise clients needing dependable hosting

#### Customer Needs

- **Reliable hosting infrastructure** - 99.9%+ uptime guarantees
- **Fast, UK-based support** - Personal, expert assistance
- **Personal, high quality service** - White-glove customer experience

### Technical Standards & Guarantees

#### Performance Standards

- **Uptime Guarantee**: 99.9%+ SLA
- **Response Time**: < 4 minutes average
- **Load Time**: < 2 seconds page load
- **Scalability**: Automatic resource scaling

#### Security Features

- **DDoS Protection**: Enterprise-grade mitigation
- **SSL Certificates**: Free with all plans
- **Daily Backups**: Automated, secure storage
- **Malware Scanning**: Proactive threat detection

#### Support Commitments

- **UK-Based Team**: Local expertise and availability
- **24/7 Availability**: Round-the-clock support
- **Personal Service**: Dedicated account management
- **Technical Expertise**: Certified professionals
- **Response Time**: Under 1 hour
- **Live Chat**: Available 24/7 as AI initially, with human agents during business hours

#### Technical Highlights

- **100% SSD Hosting**: NVMe SSD storage for maximum performance
- **Cloud-Based Infrastructure**: Auto-scaling, flexible cloud solutions
- **100% Renewable Energy**: Data centres powered by green energy (low PUE)
- **Free UK Charity Plan**: Dedicated hosting for charities and non-profits

### Contact Information

#### Support Contact

- **Email**: <support@premium-hosting.co.uk>
- **Phone**: 01234 567890
- **Response Time**: Under 1 hour
- **Live Chat**: Available 24/7 as AI initially, with human agents during business hours

#### Sales Contact

- **Email**: <sales@premium-hosting.co.uk>
- **Phone**: 01234 567891

### Content Guidelines & Brand Behavior

#### Verbal Identity

- **Tone Guidelines**:
  - **Confident** - Authoritative and self-assured
  - **Professional** - Expert and reliable
  - **Approachable** - Accessible and supportive

- **Style Guidelines**:
  - **Clear** - Straightforward, unambiguous language
  - **Direct** - Concise, to-the-point communication
  - **Customer-focused** - Centered on customer needs and benefits

#### Customer Experience Standards

- **Effortless Onboarding**: Simple, guided setup process
- **Personal Communication**: Direct contact with real people
- **Proactive Support**: Anticipating needs and issues
- **Transparent Pricing**: No hidden fees or surprises

#### Content Creation Rules

1. **Entity-First Approach**: Lead with service/product names
2. **Benefit-Focused**: Emphasize customer outcomes
3. **Technical Accuracy**: Precise specifications and guarantees
4. **Brand Voice Consistency**: Knowledgeable, precise, aspirational
5. **Value Proposition**: Clear differentiation through reliability and care

#### Prohibited Content & Language

- **Words to Avoid**: Best, greatest, leading, top, premier (unless provable)
- **Generic Claims**: Excellence, quality, superior (without specifics)
- **Competitor References**: Never mention or compare to competitors
- **Unverifiable Claims**: Any statement without data backing

#### Social Proof & Metrics

- **Reviews**: Currently 1 verified 5-star review on Trustpilot (rating 3.7 due to low review count)
- **Customers**: 1 active customer (expanding soon)
- **Projects**: Early-stage growth phase

**Design Philosophy:**

- **Modern, Engaging Default Experience**: Rich animations and interactions enabled by default to create a polished, contemporary user experience.
- **User Control & Compliance**: Full WCAG 2.2 Level AA compliance maintained through user-controlled accessibility options, including a motion reduction toggle and OS-level preference detection.
- **Progressive Enhancement**: All functionality works without JavaScript; animations enhance but don't block access.

### Goals

- Achieve 100% WCAG 2.2 Level AA compliance.
- Provide an industry-leading accessible user experience.
- Enable easy content updates without sacrificing accessibility.
- Maintain excellent performance (Lighthouse score 95+).
- Support all major assistive technologies.
- All page templates must use fluid responsive design and maintain visual integrity and full functionality from 320px wide up to 4K monitors (≥3840px), with no horizontal scrolling or excessive borders at any supported size except for intentional overflow elements (e.g., code blocks).

### Success Metrics

- WCAG 2.2 Level AA audit: 0 violations.
- Lighthouse Accessibility Score: 100.
- Page load time: < 2 seconds (3G).
- Keyboard navigation: 100% of functionality accessible.
- Screen reader compatibility: JAWS, NVDA, VoiceOver.
- User testing: 5+ users with disabilities validate usability.

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
- Dedicated Servers – url – `https://premium-hosting.co.uk/dedicated-servers/`
- Managed Hosting Overview – url – `https://premium-hosting.co.uk/managed-hosting/`
- Server Locations / Data Centers – url – `https://premium-hosting.co.uk/data-centers/`
- Control Panel Overview (cPanel, Plesk, etc.) – url – `https://premium-hosting.co.uk/control-panel/`

---

Domain & DNS

- Domain Transfers – url – `https://premium-hosting.co.uk/domain-transfer/`
- DNS Management / DNS Services – url – `https://premium-hosting.co.uk/dns/`
- WHOIS Lookup – url – `https://premium-hosting.co.uk/whois/`
- Domain Privacy / Protection – url – `https://premium-hosting.co.uk/domain-privacy/`

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
- Portfolio / Showcase – url – `https://premium-hosting.co.uk/portfolio/`
- Industries Served – url – `https://premium-hosting.co.uk/industries/`

---

Digital Marketing

- Digital Marketing Overview – url – `https://premium-hosting.co.uk/digital-marketing/`
- SEO Services – url – `https://premium-hosting.co.uk/seo/`
- PPC Management – url – `https://premium-hosting.co.uk/ppc/`
- Content Marketing – url – `https://premium-hosting.co.uk/content-marketing/`
- Email Marketing – url – `https://premium-hosting.co.uk/email-marketing/`
- Conversion Optimization – url – `https://premium-hosting.co.uk/conversion-optimization/`
- Analytics & Tracking – url – `https://premium-hosting.co.uk/analytics/`
- Marketing Automation – url – `https://premium-hosting.co.uk/marketing-automation/`
- Brand Strategy / Positioning – url – `https://premium-hosting.co.uk/brand-strategy/`
- Influencer Marketing – url – `https://premium-hosting.co.uk/influencer-marketing/`
- Video Marketing – url – `https://premium-hosting.co.uk/video-marketing/`

---

Social Media

- Social Media Overview – url – `https://premium-hosting.co.uk/social-media/`
- Social Media Management – url – `https://premium-hosting.co.uk/social-media-management/`
- Social Media Advertising – url – `https://premium-hosting.co.uk/social-media-ads/`
- Content Creation – url – `https://premium-hosting.co.uk/content-creation/`

---

Sales & Onboarding

- Request a Quote / Proposal – url – `https://premium-hosting.co.uk/request-quote/`
- Free Consultation – url – `https://premium-hosting.co.uk/free-consultation/`
- Demos / Walkthroughs – url – `https://premium-hosting.co.uk/demo/`
- Onboarding Process Overview – url – `https://premium-hosting.co.uk/onboarding/`

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
- Service Status History – url – `https://premium-hosting.co.uk/status/history/`
- Data Centers Map / Infrastructure Transparency – url – `https://premium-hosting.co.uk/infrastructure-map/`
- Accessibility Statement – url – `https://premium-hosting.co.uk/legal/accessibility/`
- Corporate Social Responsibility (CSR) – url – `https://premium-hosting.co.uk/csr/`
- Ethical AI / Technology Use Policy – url – `https://premium-hosting.co.uk/legal/ai-policy/`

---

Company

- About Us – url – `https://premium-hosting.co.uk/about/`
- Our Web Design & Development Agency – url – `https://premium-hosting.co.uk/web-design-and-development/`
- Partners & Integrations – url – `https://premium-hosting.co.uk/partners/`
- Affiliates – url – `https://premium-hosting.co.uk/affiliates/`
- Careers – url – `https://premium-hosting.co.uk/careers/`
- News & Pressroom – url – `https://premium-hosting.co.uk/news/`
- Platform Changelog / Updates – url – `https://premium-hosting.co.uk/changelog/`
- Uptime Reports & Benchmarks – url – `https://premium-hosting.co.uk/uptime/`
- Contact Us – url – `https://premium-hosting.co.uk/contact/`
- Leadership / Team Page – url – `https://premium-hosting.co.uk/team/`
- Awards & Certifications – url – `https://premium-hosting.co.uk/awards/`
- Investors / Corporate Info – url – `https://premium-hosting.co.uk/investors/`
- Events / Webinars – url – `https://premium-hosting.co.uk/events/`
- Newsletter Signup / Resources Hub – url – `https://premium-hosting.co.uk/newsletter/`

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
- Responsible Disclosure / Bug Bounty – url – `https://premium-hosting.co.uk/legal/responsible-disclosure/`
- Sustainability Statement – url – `https://premium-hosting.co.uk/sustainability/`
- Service Change Log / Policy Updates – url – `https://premium-hosting.co.uk/changelog/`
- Legal Archive / Version History – url – `https://premium-hosting.co.uk/legal/archive/`

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

#### URL ARCHITECTURE

- Clean, semantic URLs (no file extensions).
- Kebab-case for all slugs.
- Consistent hierarchy depth (max 3 levels).
- Trailing slashes optional but consistent.
- All URLs must be descriptive and human-readable.

#### PAGE TEMPLATES REQUIRED

1. **Homepage Template** - Hero, features, call-to-action.
2. **Standard Page Template** - Full-width content with sidebar optional.
3. **Blog Post Template** - Article content with metadata, related posts.
4. **Guide Template** - Long-form structured content with table of contents.
5. **Service Page Template** - Service details, pricing, CTA.
6. **Contact Template** - Form with accessibility features.

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

- Sticky pricing bar or floating “Get Started” button after scroll.
- Breadcrumb navigation for SEO and accessibility.
- Schema.org `Product`, `FAQPage`, and `BreadcrumbList` markup.
- Optional static exit-intent CTA (no pop-ups).

---

### SECTION INVENTORIES BY PAGE TYPE

#### Homepage

1. Hero (headline, subheadline, CTA)
2. Partner or trust logo bar
3. Hosting product overview cards
4. “Why Choose Premium Hosting” summary
5. Performance and security highlights
6. Testimonials
7. Accessibility and sustainability pledge
8. Featured offer or limited-time promotion
9. Resource highlights (blog, guides)
10. Footer call-to-action strip

#### Service Pages (Hosting, SSL, CDN, etc.)

Use the 10-part conversion layout defined above.

#### About Us

1. Mission and vision statement
2. Company story and timeline
3. Leadership or team profiles
4. Sustainability and accessibility commitments
5. Awards and certifications
6. Press mentions and case studies
7. CTA to contact or careers

#### Contact Page

1. Hero (“We’re here to help”)
2. Accessible contact form
3. Alternative contact details (email, phone, chat)
4. Map or office information
5. Links to FAQs and support portal

#### Guides, Policies, and Legal Pages

1. Breadcrumb navigation at top
2. Sticky left table of contents (auto-generated from headings)
3. Optional right-side “On this page” navigation
4. Main content in markdown
5. “Last updated” note and accessibility statement link

#### Blog and Guides

**List Page**

- Grid of articles with image, title, date, tags, and excerpt.

**Post Page**

1. Hero with title, author, and date
2. Auto-generated table of contents
3. Main article body
4. Related posts section
5. Author bio
6. Footer CTA (“Explore Hosting Plans”)

#### Landing Pages (Sales-Focused)

Long-form, high-impact structure for campaigns or promotions.

1. Hero with bold value promise and primary CTA
2. Problem and solution narrative
3. Social proof and trust signals
4. Deep feature breakdown (visual, icon-based)
5. Competitor comparison table
6. Bonuses, guarantees, or add-on offers
7. Extended testimonials
8. Urgency or limited-time promotion (static)
9. FAQ
10. Final CTA block

Landing pages should balance persuasive length with accessibility, ensuring they remain fully readable with motion disabled.

#### Support and Knowledge Base

- Knowledge Base index page listing categories.
- Article template with breadcrumbs and table of contents.
- Contact Support CTA at the end of each article.

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

### Initial Content & Asset Strategy

To enable parallel development and design workflows, the initial build will proceed without final content and assets.

**1. Placeholder Content Generation:**
-   All `.md` content files required by the sitemap will be programmatically generated.
-   Each file will be populated with the correct frontmatter structure (e.g., `title`, `description`, `layout`).
-   The body of each Markdown file will contain standard "Lorem Ipsum" placeholder text to allow for template styling and testing.

**2. Image Placeholders & Manifest:**
-   All images within the site templates will initially use a dynamic placeholder service (e.g., `https://via.placeholder.com/`). This allows developers to build layouts with correctly sized images before final assets are available.
-   A central manifest file, `IMAGE_MANIFEST.md`, will be created in the project root. This file will serve as the single source of truth for the design team, listing every required image, its context, dimensions, and a description of the required creative.

**Image Naming Convention:**
-   All images must follow the format `premium-hosting-[descriptive-name]` to maintain consistent branding and improve SEO.
-   Examples: `premium-hosting-hero-background`, `premium-hosting-server-icon`, `premium-hosting-testimonial-quote`, `premium-hosting-wordpress-logo`.
-   This naming convention must be applied to all image files in the manifest and final assets.

**3. Default Pricing Data:**
-   The central pricing file, `/src/pricing/`, will be created immediately and populated with placeholder plan data.
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

- **Storage Method**: localStorage.
- **Expiration**: Never (until user clears).
- **Scope**: Preferences apply site-wide immediately.
- **Reset Option**: Button to restore all defaults.
- **Privacy**: Respect user's privacy settings.

#### Accessibility Integration Plan

**Perfect Integration Plan for Accessibility Control Panel**

This plan outlines a comprehensive 4-step approach to integrate accessibility logic into a custom Astro component system, using localStorage for persistence and creating a state manager for seamless user experience control.

##### Step 1: Isolate the "Engine" - Create accessibilityEngine.ts

**Purpose**: Extract all accessibility logic into a reusable, testable engine that handles preference detection, application, and management.

**Location**: `/src/utils/accessibilityEngine.ts`

**Key Features**:

- **OS Preference Detection**: Automatically detects `prefers-reduced-motion`, `prefers-contrast`, `prefers-color-scheme`
- **Preference Merging**: Combines OS preferences with user selections (user selections take priority)
- **CSS Variable Management**: Dynamically updates CSS custom properties for font size, spacing, contrast
- **Animation Control**: Manages motion preferences and applies them site-wide
- **Theme Switching**: Handles light/dark/high-contrast theme transitions
- **Persistence Layer**: Abstracts localStorage operations with error handling

**Core API**:

```typescript
interface AccessibilityPreferences {
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  contrast: 'default' | 'high-light' | 'high-dark' | 'dark';
  motion: 'enabled' | 'reduced';
  spacing: 'normal' | 'relaxed' | 'loose';
  letterSpacing: boolean;
  linkHighlighting: boolean;
  readingGuide: boolean;
  focusEnhancement: boolean;
}

class AccessibilityEngine {
  static detectOSPreferences(): Partial<AccessibilityPreferences>;
  static applyPreferences(preferences: AccessibilityPreferences): void;
  static resetToDefaults(): void;
  static getCurrentPreferences(): AccessibilityPreferences;
  static savePreferences(preferences: AccessibilityPreferences): void;
  static loadPreferences(): AccessibilityPreferences;
}
```

##### Step 2: Create State Manager - accessibilityStore.ts

**Purpose**: Provide reactive state management for accessibility preferences with event-driven updates.

**Location**: `/src/utils/accessibilityStore.ts`

**Key Features**:

- **Reactive State**: Uses custom events for preference changes
- **Event System**: Dispatches 'accessibility-changed' events for component updates
- **Validation**: Ensures preference values are valid before application
- **Observer Pattern**: Allows components to subscribe to preference changes
- **Debounced Updates**: Prevents excessive DOM updates during rapid changes

**Implementation**:

```typescript
class AccessibilityStore {
  private preferences: AccessibilityPreferences;
  private listeners: Set<(preferences: AccessibilityPreferences) => void>;

  constructor() {
    this.preferences = AccessibilityEngine.loadPreferences();
    this.listeners = new Set();
    this.setupOSPreferenceListeners();
  }

  updatePreferences(updates: Partial<AccessibilityPreferences>): void {
    const newPreferences = { ...this.preferences, ...updates };
    this.preferences = newPreferences;
    AccessibilityEngine.savePreferences(newPreferences);
    AccessibilityEngine.applyPreferences(newPreferences);
    this.notifyListeners();
  }

  subscribe(callback: (preferences: AccessibilityPreferences) => void): () => void {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners(): void {
    this.listeners.forEach(callback => callback(this.preferences));
  }
}

export const accessibilityStore = new AccessibilityStore();
```

##### Step 3: Build Custom Astro Component - AccessibilityPanel.astro

**Purpose**: Create a fully accessible modal component that integrates with the accessibility engine and store.

**Location**: `/src/components/ui/AccessibilityPanel.astro`

**Key Features**:

- **Full Keyboard Navigation**: Tab order, arrow key navigation, ESC to close
- **Screen Reader Support**: Proper ARIA labels, live regions for status updates
- **Focus Management**: Focus trapping, restoration on close
- **Responsive Design**: Mobile-friendly with touch targets meeting 44px minimum
- **Real-time Preview**: Changes apply immediately with visual feedback
- **Progressive Enhancement**: Works without JavaScript (graceful degradation)

**Component Structure**:

```astro
---
// AccessibilityPanel.astro
import { accessibilityStore } from '../../utils/accessibilityStore';

let isOpen = false;
let currentPreferences = accessibilityStore.getCurrentPreferences();

function togglePanel() {
  isOpen = !isOpen;
  // Focus management and ARIA updates
}

function updatePreference(key: keyof AccessibilityPreferences, value: any) {
  accessibilityStore.updatePreferences({ [key]: value });
  currentPreferences = accessibilityStore.getCurrentPreferences();
}
---

<!-- Trigger Button -->
<button
  id="accessibility-trigger"
  class="accessibility-trigger"
  aria-label="Open accessibility options"
  aria-expanded={isOpen}
  onclick={togglePanel}
>
  Accessibility Options
</button>

<!-- Modal Panel -->
<div
  id="accessibility-panel"
  class="accessibility-panel"
  role="dialog"
  aria-modal="true"
  aria-labelledby="panel-title"
  aria-describedby="panel-description"
  hidden={!isOpen}
>
  <header>
    <h2 id="panel-title">Accessibility Options</h2>
    <p id="panel-description">Customize your viewing experience</p>
    <button
      class="close-button"
      aria-label="Close accessibility panel"
      onclick={togglePanel}
    >
      ×
    </button>
  </header>

  <!-- Font Size Controls -->
  <section class="control-group">
    <h3>Font Size</h3>
    <div class="radio-group" role="radiogroup" aria-label="Font size options">
      {['small', 'medium', 'large', 'extra-large'].map(size => (
        <label class="radio-option">
          <input
            type="radio"
            name="fontSize"
            value={size}
            checked={currentPreferences.fontSize === size}
            onchange={(e) => updatePreference('fontSize', e.target.value)}
          />
          <span class="radio-label">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
        </label>
      ))}
    </div>
  </section>

  <!-- Additional control sections for contrast, motion, spacing, etc. -->

  <footer>
    <button
      class="reset-button"
      onclick={() => {
        accessibilityStore.updatePreferences(AccessibilityEngine.getDefaults());
        currentPreferences = accessibilityStore.getCurrentPreferences();
      }}
    >
      Reset to Defaults
    </button>
  </footer>
</div>

<style>
  .accessibility-trigger {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    /* Additional styling */
  }

  .accessibility-panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Modal styling with proper focus indicators */
  }

  /* High contrast and focus styles */
  @media (prefers-contrast: high) {
    .accessibility-panel {
      border: 2px solid;
    }
  }
</style>
```

##### Step 4: Create Global Applier Script - applyAccessibility.ts

**Purpose**: Initialize accessibility system on page load and handle global preference application.

**Location**: `/src/utils/applyAccessibility.ts`

**Key Features**:

- **Page Load Initialization**: Automatically loads and applies saved preferences
- **OS Preference Monitoring**: Listens for OS preference changes and updates accordingly
- **Global CSS Injection**: Dynamically updates CSS custom properties
- **Animation Management**: Controls CSS animations based on motion preferences
- **Performance Optimized**: Debounces updates and minimizes DOM manipulations

**Implementation**:

```typescript
// applyAccessibility.ts
import { AccessibilityEngine } from './accessibilityEngine';
import { accessibilityStore } from './accessibilityStore';

export function initializeAccessibility(): void {
  // Load and apply saved preferences
  const preferences = AccessibilityEngine.loadPreferences();
  AccessibilityEngine.applyPreferences(preferences);

  // Set up OS preference change listeners
  setupOSPreferenceListeners();

  // Initialize store subscriptions
  accessibilityStore.subscribe((newPreferences) => {
    AccessibilityEngine.applyPreferences(newPreferences);
  });
}

function setupOSPreferenceListeners(): void {
  // Listen for OS preference changes
  const mediaQueries = {
    motion: window.matchMedia('(prefers-reduced-motion: reduce)'),
    contrast: window.matchMedia('(prefers-contrast: high)'),
    colorScheme: window.matchMedia('(prefers-color-scheme: dark)')
  };

  Object.entries(mediaQueries).forEach(([key, query]) => {
    query.addEventListener('change', () => {
      // Update preferences based on OS changes
      const osPreferences = AccessibilityEngine.detectOSPreferences();
      const currentPreferences = accessibilityStore.getCurrentPreferences();

      // Merge OS preferences with user preferences (user takes priority)
      const mergedPreferences = { ...osPreferences, ...currentPreferences };
      accessibilityStore.updatePreferences(mergedPreferences);
    });
  });
}

// Auto-initialize on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initializeAccessibility);
}
```

**Integration Points**:

- **Main Layout**: Import and call `initializeAccessibility()` in root layout
- **Component Integration**: Use `accessibilityStore.subscribe()` in components that need preference updates
- **CSS Integration**: Define CSS custom properties that respond to preference changes
- **Build Process**: Ensure accessibility scripts are included in the bundle

**Benefits of This Architecture**:

1. **Separation of Concerns**: Engine handles logic, store manages state, component handles UI
2. **Testability**: Each layer can be unit tested independently
3. **Performance**: Efficient updates with minimal DOM manipulation
4. **Accessibility**: Built with accessibility best practices from the ground up
5. **Maintainability**: Clear interfaces and modular design
6. **Scalability**: Easy to extend with new preference types

**CSS Custom Properties Integration**:

```css
:root {
  --font-size-base: 16px;
  --line-height-base: 1.5;
  --letter-spacing-base: 0;
  --contrast-text: #1a1a1a;
  --contrast-bg: #ffffff;
}

/* Preference-based overrides */
[data-accessibility-font-size="large"] {
  --font-size-base: 18px;
}

[data-accessibility-motion="reduced"] * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
```

This implementation provides a robust, accessible, and maintainable accessibility control system that integrates seamlessly with Astro's component architecture while maintaining WCAG 2.2 Level AA compliance.

### Content Management System

## PAGE STRUCTURE → TEMPLATE INVENTORIES

This section defines the structural blueprint for all page types across Premium Hosting.
It ensures design, content, and development alignment by specifying section inventories, content models, and reusable layout patterns.
These templates form the foundation for consistent, accessible, and conversion-focused pages.

---

### HIGH-CONVERSION HOSTING PAGE LAYOUT

### Pricing Content Model

Pricing is split into:

- Marketing copy (Markdown, human-edited)
- Live price data (JSON, machine-readable)

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
`/src/pricing/`

```json
{
  "wordpress-hosting": {
    "currency": "GBP",
    "billing": {
      "monthly": true,
      "yearly": true,
      "biennial": true,
      "triennial": true,
      "yearly_discount_note": "Save up to 25% on annual billing"
    },
    "plans": {
      "starter": {
        "name": "WordPress Starter Pro",
        "pricing": {
          "monthly": 24.99,
          "annually": 249.99,
          "biennially": 449.99,
          "triennially": 629.99
        },
        "specifications": {
          "webspace": 50000,
          "bandwidth": 500000,
          "mysql": 1,
          "subdomains": 10,
          "additionalFtp": 2,
          "additionalDomains": 0
        },
        "features": {
          "wordpressFeatures": {
            "coreChecksumReport": true,
            "wordpressAdminQuickLink": true,
            "manageAdminUsers": true,
            "managePlugins": true,
            "manageThemes": true,
            "manageUsers": true,
            "manageWordpressUpdates": true,
            "reinstallWordpress": true,
            "wordpressDatabaseManagement": true,
            "wordpressSiteSettings": true,
            "wordpressStaging": true,
            "wordpressManager": false,
            "wordpressSearchAndReplace": false
          },
          "cdn": {
            "edgeCaching": true,
            "websiteOptimisationSuite": true,
            "blockVisitors": true,
            "cdnStatistics": true,
            "securityHeaders": false
          },
          "webFiles": {
            "fileManager": true,
            "ftpAccounts": true,
            "backupRestore": true,
            "filePermission": true,
            "gitVersionControl": false
          },
          "email": {
            "setNotificationThreshold": true,
            "catchAllForwarders": true,
            "junkMailFilters": true,
            "webmail": true,
            "emailSummary": true,
            "emailMigration": true,
            "domainkeysDkim": true,
            "dmarcWizard": true
          },
          "webTools": {
            "phpmyadmin": true,
            "remoteMysqlAccess": true,
            "changePhpVersion": true,
            "phpConfiguration": true,
            "scheduledTasks": true,
            "webRedirects": true,
            "sitemapGenerator": true,
            "customErrors": true,
            "autoDiagnostics": true,
            "maintenanceMode": true
          },
          "domainNames": {
            "changeNameservers": true,
            "domainPrivacy": true,
            "manageContacts": true,
            "manageDns": true,
            "dnssec": true,
            "transferAway": true,
            "whois": true,
            "customDocRootAllDomains": true,
            "customDocRootPrimaryDomain": false,
            "makePrimaryDomain": false
          },
          "security": {
            "sshAccess": false,
            "hotlinkProtection": true,
            "freeSsl": true,
            "allowExternalSsl": true,
            "passwordProtection": true,
            "directoryIndexing": true,
            "malwareScan": false,
            "malwareReport": false,
            "autoActivateFreeSsl": true,
            "allowForceSslRedirect": true
          },
          "logsAndStatistics": {
            "awstats": true,
            "webalizer": true,
            "accessErrorLogs": true,
            "mailLogs": true
          },
          "sidebar": {
            "accountInformation": true,
            "temporaryUrl": true,
            "primaryFtpLock": true,
            "usageInformation": true,
            "nameserversSetup": true,
            "viewBandwidthStats": true,
            "viewDiskUsageStats": true
          },
          "generalInformation": {
            "googleTranslate": true
          },
          "emailLimits": {
            "emailAccounts": 50,
            "emailForwarding": "unlimited",
            "emailAutoresponders": "unlimited",
            "maxMailboxSize": "1GB",
            "lowEmailNotification": 50,
            "highEmailNotification": 90
          },
          "defaultPhpVersion": "8.3"
        }
      },
      "growth": {
        "name": "WordPress Growth Pro",
        "pricing": {
          "monthly": 39.99,
          "annually": 399.99,
          "biennially": 719.99,
          "triennially": 999.99
        },
        "specifications": {
          "webspace": 120000,
          "bandwidth": 1200000,
          "mysql": 1,
          "subdomains": 30,
          "additionalFtp": 10,
          "additionalDomains": 4
        },
        "features": {
          "wordpressFeatures": {
            "coreChecksumReport": true,
            "wordpressAdminQuickLink": true,
            "manageAdminUsers": true,
            "managePlugins": true,
            "manageThemes": true,
            "manageUsers": true,
            "manageWordpressUpdates": true,
            "reinstallWordpress": true,
            "wordpressDatabaseManagement": true,
            "wordpressSiteSettings": true,
            "wordpressStaging": true,
            "wordpressManager": true,
            "wordpressSearchAndReplace": true
          },
          "cdn": {
            "edgeCaching": true,
            "websiteOptimisationSuite": true,
            "blockVisitors": true,
            "cdnStatistics": true,
            "securityHeaders": true
          },
          "webFiles": {
            "fileManager": true,
            "ftpAccounts": true,
            "backupRestore": true,
            "filePermission": true,
            "gitVersionControl": true
          },
          "email": {
            "setNotificationThreshold": true,
            "catchAllForwarders": true,
            "junkMailFilters": true,
            "webmail": true,
            "emailSummary": true,
            "emailMigration": true,
            "domainkeysDkim": true,
            "dmarcWizard": true
          },
          "webTools": {
            "phpmyadmin": true,
            "remoteMysqlAccess": true,
            "changePhpVersion": true,
            "phpConfiguration": true,
            "scheduledTasks": true,
            "webRedirects": true,
            "sitemapGenerator": true,
            "customErrors": true,
            "autoDiagnostics": true,
            "maintenanceMode": true
          },
          "domainNames": {
            "changeNameservers": true,
            "domainPrivacy": true,
            "manageContacts": true,
            "manageDns": true,
            "dnssec": true,
            "transferAway": true,
            "whois": true,
            "customDocRootAllDomains": true,
            "customDocRootPrimaryDomain": true,
            "makePrimaryDomain": true
          },
          "security": {
            "sshAccess": true,
            "hotlinkProtection": true,
            "freeSsl": true,
            "allowExternalSsl": true,
            "passwordProtection": true,
            "directoryIndexing": true,
            "malwareScan": true,
            "malwareReport": true,
            "autoActivateFreeSsl": true,
            "allowForceSslRedirect": true
          },
          "logsAndStatistics": {
            "awstats": true,
            "webalizer": true,
            "accessErrorLogs": true,
            "mailLogs": true
          },
          "sidebar": {
            "accountInformation": true,
            "temporaryUrl": true,
            "primaryFtpLock": true,
            "usageInformation": true,
            "nameserversSetup": true,
            "viewBandwidthStats": true,
            "viewDiskUsageStats": true
          },
          "generalInformation": {
            "googleTranslate": true
          },
          "emailLimits": {
            "emailAccounts": 200,
            "emailForwarding": "unlimited",
            "emailAutoresponders": "unlimited",
            "maxMailboxSize": "10GB",
            "lowEmailNotification": 50,
            "highEmailNotification": 90
          },
          "defaultPhpVersion": "8.3"
        }
      },
      "scale": {
        "name": "WordPress Scale Pro",
        "pricing": {
          "monthly": 59.99,
          "annually": 599.99,
          "biennially": 1079.99,
          "triennially": 1499.99
        },
        "specifications": {
          "webspace": 300000,
          "bandwidth": 6000000,
          "mysql": 1,
          "subdomains": 60,
          "additionalFtp": 30,
          "additionalDomains": 19
        },
        "features": {
          "wordpressFeatures": {
            "coreChecksumReport": true,
            "wordpressAdminQuickLink": true,
            "manageAdminUsers": true,
            "managePlugins": true,
            "manageThemes": true,
            "manageUsers": true,
            "manageWordpressUpdates": true,
            "reinstallWordpress": true,
            "wordpressDatabaseManagement": true,
            "wordpressSiteSettings": true,
            "wordpressStaging": true,
            "wordpressManager": true,
            "wordpressSearchAndReplace": true
          },
          "cdn": {
            "edgeCaching": true,
            "websiteOptimisationSuite": true,
            "blockVisitors": true,
            "cdnStatistics": true,
            "securityHeaders": true
          },
          "webFiles": {
            "fileManager": true,
            "ftpAccounts": true,
            "backupRestore": true,
            "filePermission": true,
            "gitVersionControl": true
          },
          "email": {
            "setNotificationThreshold": true,
            "catchAllForwarders": true,
            "junkMailFilters": true,
            "webmail": true,
            "emailSummary": true,
            "emailMigration": true,
            "domainkeysDkim": true,
            "dmarcWizard": true
          },
          "webTools": {
            "phpmyadmin": true,
            "remoteMysqlAccess": true,
            "changePhpVersion": true,
            "phpConfiguration": true,
            "scheduledTasks": true,
            "webRedirects": true,
            "sitemapGenerator": true,
            "customErrors": true,
            "autoDiagnostics": true,
            "maintenanceMode": true
          },
          "domainNames": {
            "changeNameservers": true,
            "domainPrivacy": true,
            "manageContacts": true,
            "manageDns": true,
            "dnssec": true,
            "transferAway": true,
            "whois": true,
            "customDocRootAllDomains": true,
            "customDocRootPrimaryDomain": true,
            "makePrimaryDomain": true
          },
          "security": {
            "sshAccess": true,
            "hotlinkProtection": true,
            "freeSsl": true,
            "allowExternalSsl": true,
            "passwordProtection": true,
            "directoryIndexing": true,
            "malwareScan": true,
            "malwareReport": true,
            "autoActivateFreeSsl": true,
            "allowForceSslRedirect": true
          },
          "logsAndStatistics": {
            "awstats": true,
            "webalizer": true,
            "accessErrorLogs": true,
            "mailLogs": true
          },
          "sidebar": {
            "accountInformation": true,
            "temporaryUrl": true,
            "primaryFtpLock": true,
            "usageInformation": true,
            "nameserversSetup": true,
            "viewBandwidthStats": true,
            "viewDiskUsageStats": true
          },
          "generalInformation": {
            "googleTranslate": true
          },
          "emailLimits": {
            "emailAccounts": 400,
            "emailForwarding": "unlimited",
            "emailAutoresponders": "unlimited",
            "maxMailboxSize": "10GB",
            "lowEmailNotification": 50,
            "highEmailNotification": 90
          },
          "defaultPhpVersion": "8.3"
        }
      }
    }
  }
}
```

**Implementation Requirement:**

- All pricing tables and cards MUST pull data from `plans.json`.
- Updating `plans.json` updates all pricing globally.
- Pages reference plans via `plans_ref` in frontmatter.

**Brand Alignment in Pricing:**
Pricing data supports brand values through:

- **Transparent Pricing**: Clear display of all costs and billing cycles
- **UK-Based Excellence**: Emphasis on reliability and personal service
- **Premium Experience**: Gold accent colors for pricing highlights
- **Professional Presentation**: Black text and structured layouts
- **TypeScript Validation**: Ensures data integrity and accuracy

---

### Promotional / Seasonal Content Model

Seasonal or campaign pages must:

- Live permanently in the repo.
- Include timing metadata.
- Auto-appear only within active windows.

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

1. `active`: disables a promo.
2. `start_date` / `end_date`: control visibility window.
3. `priority`: shows the highest priority promo if overlap.
4. Page stays routable year-round with an “expired” message.

---

### Promo Calendar

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

- **Content Location**: `/src/content/` directory.
- **Format**: Markdown with YAML frontmatter for metadata.
- **Collections**:
  - `blog/` - Blog posts
  - `guides/` - Long-form guides
  - `pages/` - Static pages (About, Services, etc.)
  - `team/` - Team member profiles

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

1. Edit markdown files directly in repository.
2. Commit changes to `main` branch.
3. CI/CD automatically builds and deploys.
4. Deployment time: < 5 minutes.
5. No downtime during deployment.

#### Media Management

- **Storage Location**: `/public/images/`.
- **Optimization**: Automatic responsive images (srcset).
- **Alt Text Standards**: All images require alt text that complies with WCAG guidelines while incorporating SEO-relevant keywords. Alt text should answer 'what is this image showing?' and include primary keywords where contextually appropriate. Alt text must be concise (under 125 characters), descriptive, and avoid redundancy with surrounding content.
- **Supported Formats**: WebP with fallback to JPG/PNG.
- **Lazy Loading**: Enabled by default for images below fold.

### Performance Requirements

**Core Web Vitals Targets:**

- **First Contentful Paint (FCP)**: < 1.2s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Total Blocking Time (TBT)**: < 200ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

**Bundle Size Limits:**

- Initial HTML: < 50KB
- CSS: < 30KB
- JS: < 50KB (modal + interactions only)
- Images: Lazy loaded, optimized

### Base Theme & Template Components Usage

**Implementation Approach:**

The site uses a component-first architecture with clearly defined base components that form the foundation of all pages. Each component is designed with accessibility, performance, and maintainability as core principles.

**Core Component Inventory:**

**UI Components (Located: `/src/components/ui/`):**

- `Navbar.astro` - Main navigation with keyboard accessibility
- `Footer.astro` - Site footer with contact links
- `Button.astro` - Accessible button component with variants
- `Card.astro` - Content card with proper heading hierarchy
- `Form.astro` - Accessible form wrapper with validation
- `Accordion.astro` & `AccordionItem.astro` - Collapsible content
- `SwiperSlider.astro` - Accessible carousel implementation
- `Seo.astro` - SEO meta tag management
- `TeamsCard.astro` - Team member display component

**Section Components (Located: `/src/components/sections/`):**

- `Hero.astro` - Page hero with responsive imagery
- `Services.astro` - Service listing and navigation
- `Process.astro` - Step-by-step process visualization
- `Contact.astro` - Contact form and information
- `Proposal.astro` - Proposal/request quote section
- `Team.astro` - Team showcase with profiles
- `Testimonials.astro` - Customer testimonials display
- `Sponsors.astro` - Trust badges and certifications
- `Cases.astro` - Case studies and success stories

**Layout Components (Located: `/src/layouts/`):**

- `MainLayout.astro` - Root layout with SEO and analytics
- `MainHead.astro` - Head section with meta tags and scripts

**Development Guidelines:**

1. **Component Props Interface**: All components must define an explicit Props interface using TypeScript
2. **Accessibility-First**: Every component includes proper ARIA attributes, focus management, and semantic HTML
3. **Performance Optimized**: Components use lazy loading where appropriate and minimize client-side JavaScript
4. **Responsive Design**: Mobile-first approach with fluid typography and layouts
5. **Content-Driven**: Components accept content through props rather than hardcoded content
6. **Progressive Enhancement**: Full functionality without JavaScript, enhanced with JavaScript

**Usage Pattern:**

```astro
---
// Page implementation
import MainLayout from '../layouts/MainLayout.astro';
import Hero from '../components/sections/Hero.astro';
import Services from '../components/sections/Services.astro';

const pageData = {
  hero: {
    title: "Premium Hosting",
    subtitle: "Engineered for Excellence",
    ctaText: "Get Started"
  },
  services: [...]
};
---

<MainLayout title={pageData.hero.title}>
  <Hero {...pageData.hero} />
  <Services services={pageData.services} />
</MainLayout>
```

This approach ensures consistency, maintainability, and scalability while maintaining the highest standards of accessibility and performance.

**Lighthouse Score Minimums:**

- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

### Base Theme & Template Components Usage

**Implementation Approach:**

The site uses a component-first architecture with clearly defined base components that form the foundation of all pages. Each component is designed with accessibility, performance, and maintainability as core principles.

**Core Component Inventory:**

**UI Components (Located: `/src/components/ui/`):**

- `Navbar.astro` - Main navigation with keyboard accessibility
- `Footer.astro` - Site footer with contact links
- `Button.astro` - Accessible button component with variants
- `Card.astro` - Content card with proper heading hierarchy
- `Form.astro` - Accessible form wrapper with validation
- `Accordion.astro` & `AccordionItem.astro` - Collapsible content
- `SwiperSlider.astro` - Accessible carousel implementation
- `Seo.astro` - SEO meta tag management
- `TeamsCard.astro` - Team member display component

**Section Components (Located: `/src/components/sections/`):**

- `Hero.astro` - Page hero with responsive imagery
- `Services.astro` - Service listing and navigation
- `Process.astro` - Step-by-step process visualization
- `Contact.astro` - Contact form and information
- `Proposal.astro` - Proposal/request quote section
- `Team.astro` - Team showcase with profiles
- `Testimonials.astro` - Customer testimonials display
- `Sponsors.astro` - Trust badges and certifications
- `Cases.astro` - Case studies and success stories

**Layout Components (Located: `/src/layouts/`):**

- `MainLayout.astro` - Root layout with SEO and analytics
- `MainHead.astro` - Head section with meta tags and scripts

**Development Guidelines:**

1. **Component Props Interface**: All components must define an explicit Props interface using TypeScript
2. **Accessibility-First**: Every component includes proper ARIA attributes, focus management, and semantic HTML
3. **Performance Optimized**: Components use lazy loading where appropriate and minimize client-side JavaScript
4. **Responsive Design**: Mobile-first approach with fluid typography and layouts
5. **Content-Driven**: Components accept content through props rather than hardcoded content
6. **Progressive Enhancement**: Full functionality without JavaScript, enhanced with JavaScript

**Usage Pattern:**

```astro
---
// Page implementation
import MainLayout from '../layouts/MainLayout.astro';
import Hero from '../components/sections/Hero.astro';
import Services from '../components/sections/Services.astro';

const pageData = {
  hero: {
    title: "Premium Hosting",
    subtitle: "Engineered for Excellence",
    ctaText: "Get Started"
  },
  services: [...]
};
---

<MainLayout title={pageData.hero.title}>
  <Hero {...pageData.hero} />
  <Services services={pageData.services} />
</MainLayout>
```

This approach ensures consistency, maintainability, and scalability while maintaining the highest standards of accessibility and performance.

### Comprehensive Accessibility Standards & Compliance

Premium Hosting is committed to WCAG 2.2 Level AA compliance as the foundation of our user experience. This section provides the complete compliance framework.

#### WCAG 2.2 Level AA Success Criteria

##### Principle 1: Perceivable

**1.1.1 Non-text Content (Level A)**

- All images have descriptive alt text that is both WCAG compliant and SEO optimized
- Alt text concise (< 125 characters), keyword-relevant, accurate content description
- Decorative images use `alt=""`
- Complex images have long descriptions via `aria-describedby`
- Form controls have associated labels

**1.2.1-1.2.5 Audio/Video Content (A-AA)**

- Transcripts provided for all audio/video content
- Synchronized captions for prerecorded video
- Audio descriptions for prerecorded video
- Live captions support (if live streaming implemented)

**1.3.1-1.3.5 Information & Relationships (A-AA)**

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`
- Proper heading hierarchy (no skipped H1-H6 levels)
- Structured lists (`<ul>`, `<ol>`, `<li>`)
- Tables with proper headers (`<th scope="col/row">`)
- Form labels using `<label for="input-id">`
- Autocomplete attributes on form inputs
- No orientation lock via CSS/JS

**1.4.1-1.4.13 Sensory & Visual Access (A-AA)**

- Color not sole information carrier
- 4.5:1 minimum text contrast (3:1 for large text)
- 200% text resizing without loss of function
- Content reflows at 320px width
- User-defined text spacing support
- Hover/focus content remains accessible

##### Principle 2: Operable

**2.1.1-2.1.4 Keyboard Access (A)**

- All functionality keyboard accessible
- Logical tab order following reading sequence
- No keyboard traps (ESC exits modals)
- Custom shortcuts turnable off/remappable

**2.2.1-2.2.2 Timing Controls (A)**

- No time limits or 20x extension option
- Auto-updating content pausable/hidable

**2.3.1 Seizure Prevention (A)**

- Nothing flashes > 3 times per second

**2.4.1-2.4.11 Navigation & Orientation (A-AA)**

- Skip links for landmark regions
- Unique, descriptive page titles
- Multiple navigation paths (menu, search, sitemap)
- Clear focus indicators (3:1 contrast minimum)
- Consistent navigation across pages
- Focus not obscured by sticky elements

**2.5.1-2.5.8 Input Methods (A-AA)**

- No multipoint gestures required
- Pointer cancellation (abort on release)
- Label text included in accessible name
- No motion-only controls (UI alternatives required)
- Minimum 44px target size (24px minimum)
- Drag alternatives for complex interactions

##### Principle 3: Understandable

**3.1.1-3.1.2 Language Identification (A-AA)**

- Correct `lang` attribute throughout
- Foreign phrases properly marked with `lang`

**3.2.1-3.2.6 Predictable Behavior (A-AA)**

- Focus doesn't trigger unexpected changes
- Input doesn't cause context changes
- Consistent navigation and identification
- Help mechanisms consistently located

**3.3.1-3.3.8 Input Assistance & Error Prevention (A-AA)**

- Clear error identification and suggestions
- Required field indicators and help text
- Error prevention through confirmation
- No cognitive skill requirements
- Accessible authentication alternatives

##### Principle 4: Robust

**4.1.2-4.1.3 Compatible Technologies (A-AA)**

- All UI components have accessible names/roles/states
- Status messages announced to assistive technologies
- ARIA attributes used correctly
- Progressive enhancement ensures baseline functionality

#### Accessibility Control Panel Features

As detailed in the accessibility section above, the site includes a comprehensive user-controlled accessibility panel supporting:

- **Font Size**: Small, Medium (default), Large, Extra Large options
- **Contrast Themes**: Default, High Contrast Light, High Contrast Dark, Dark Mode
- **Motion Control**: Enabled/Reduced animation toggle
- **Visual Aids**: Reading guides, enhanced focus indicators
- **Text Spacing**: Adjustable line height, letter spacing, word spacing
- **Link Highlighting**: Optional visible underlines for all links

#### Testing & Validation Pipeline

**Automated Testing:**

- axe-core v4.x accessibility scanner (CI/CD integrated)
- Pa11y CI automated WCAG compliance testing
- Lighthouse CI performance + accessibility scoring

**Manual Testing Requirements:**

- Keyboard navigation testing on all pages
- Screen reader testing (JAWS, NVDA, VoiceOver)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile accessibility testing (iOS, Android)

**User Testing:**

- 5+ users with disabilities tested for task completion
- Third-party accessibility audit before launch
- Quarterly accessibility reviews post-launch

#### Continuous Compliance Assurance

**Development Standards:**

- TypeScript strict mode prevents accessibility regressions
- Component-level accessibility testing required
- Pull request accessibility review checklist
- Automated PR comments for accessibility issues

**Success Metrics:**

- Lighthouse Accessibility Score: 100/100
- WCAG 2.2 Level AA: 0 violations
- Keyboard Navigation: 100% functionality accessible
- Screen Reader Compatibility: All major AT supported

This consolidated standards document ensures Premium Hosting maintains world-class accessibility as the foundation of user experience. All feature development must validate against these criteria, with zero compromise on accessibility compliance.

---

## TOOLS

### Static Site Generator

**Astro v5.x**

**Rationale:**

- Zero JavaScript by default (opt-in only) - fewer accessibility issues.
- Excellent performance out of the box.
- Content Collections for type-safe content management.
- Built-in image optimization.
- Markdown + MDX support.
- Easy to audit for accessibility (minimal JS complexity).
- Component-based architecture.
- Great developer experience.

### Styling

**Custom CSS with CSS Custom Properties**

**Rationale:**

- Full control over output - no bloat.
- Easier to audit for accessibility.
- CSS Custom Properties for theming.
- No framework lock-in.
- Predictable output.

**Methodology:**

- Mobile-first responsive design.
- BEM methodology for class naming.
- Separated concerns: `layout.css`, `typography.css`, `components.css`, `accessibility.css`.

### JavaScript

**Vanilla ES6+ (Minimal)**

**Usage Limited To:**

- Accessibility modal (focus trap, preference management).
- Scroll reveal animations (Intersection Observer API).
- Skip link smooth scrolling.
- Mobile menu toggle (if needed).
- Reduced motion detection and enforcement.
- Form validation and interactions.
- Progressive enhancement approach.

**AJAX Loading Standards**

- All dynamic content loads via AJAX for enhanced performance
- Progressive enhancement ensures functionality without JavaScript
- Loading states with proper ARIA live regions for screen readers
- Error handling with user-friendly messages and retry mechanisms
- Cache management for optimal performance (service worker integration)
- Graceful degradation when JavaScript is disabled
- Minimum 44px touch targets for all AJAX-triggered elements

**Budget:** Total JS < 50KB

**Animation Approach:**

- **CSS-first**: All animations done with CSS when possible (better performance).
- **Intersection Observer API**: For scroll-triggered reveals (native browser API, no library needed).
- **requestAnimationFrame**: For complex JavaScript animations.
- **NO animation libraries**: Avoid GSAP, Anime.js, Framer Motion to keep bundle small and maintain full control over accessibility.
- **Motion preference detection**: JavaScript detects both OS preference and manual toggle.

### Build & Development Tools

**Package Manager:** pnpm

- Faster than npm/yarn.
- Efficient disk usage.
- Strict dependency resolution.

**Build Tool:** Vite (via Astro)

- Fast development server with HMR.
- Optimized production builds.
- Built-in code splitting.

**CSS Processing:** PostCSS

- Autoprefixer for browser compatibility.
- CSS nesting support.
- CSS custom properties fallbacks.

**Code Quality Tools:**

- **Prettier** v3.x - Code formatting.
- **ESLint** v8.x - JavaScript linting.
  - eslint-plugin-jsx-a11y (accessibility rules).
  - eslint-plugin-astro.
- **Stylelint** v16.x - CSS linting.

### Accessibility Testing Tools

**Automated Testing (CI/CD):**

- **axe-core** v4.x - Comprehensive a11y testing library.
- **Pa11y CI** v3.x - Automated WCAG testing command line.
- **Lighthouse CI** - Performance + accessibility scoring.
- **HTML Validator** - W3C HTML validation.

**Development Tools:**

- **axe DevTools** browser extension - Manual testing.
- **WAVE** browser extension - Visual feedback.
- **Accessibility Insights** (Microsoft) - Detailed testing.

**Screen Readers (Manual Testing):**

- **NVDA** (Windows, free, latest version).
- **JAWS** (Windows, trial version 2023+).
- **VoiceOver** (macOS/iOS, built-in).

**Contrast & Color Tools:**

- **WebAIM Contrast Checker** - Online tool.
- **Color Oracle** - Color blindness simulator.

### Version Control

**Git + GitHub**

- Repository hosted on GitHub.
- Branch protection on `main`.
- Pull request reviews required.
- Commit message conventions.

### Hosting & Deployment

**Hosting Infrastructure:** Your Internal Hosting Platform

**Required Hosting Features:**

- Static file serving (HTML, CSS, JS, images).
- HTTPS support with SSL/TLS certificates.
- HTTP/2 or HTTP/3 support.
- Gzip/Brotli compression enabled.
- CDN or edge caching for global performance.
- Custom error pages (404, 500, etc.).
- HTTP security headers support.
- Deploy automation capabilities.
- Staging environment support.

**CI/CD:** GitHub Actions

**Build & Deploy Pipeline:**

1. **Trigger:** Push to repository or pull request.
2. **Build Process:**
    - Install dependencies (`pnpm install`).
    - Run tests (accessibility, linting, validation).
    - Build static site (`astro build`).
    - Output: `/dist` directory with all static assets.
3. **Automated Tests:**
    - axe-core accessibility tests.
    - Pa11y WCAG compliance.
    - Lighthouse CI performance + a11y.
    - HTML validation.
4. **Deployment:**
    - Production: Deploy `/dist` to your hosting platform on merge to `main`.
    - Staging: Deploy to staging environment on pull request.
    - Method: SSH/SFTP, rsync, or your platform's deployment API.

**Deployment Requirements for Your Platform:**

- Support for atomic deployments (zero downtime).
- Rollback capability.
- Deploy preview URLs for pull requests (if possible).
- Automatic cache invalidation on deployment.
- Build artifacts storage.

**DNS Management:**

- Configure through your DNS provider.
- Ensure proper A/AAAA or CNAME records.
- CAA records for SSL certificate validation.
- Consider using your CDN/edge network if available.

### Initial Deployment Strategy (Shared Hosting)

For the initial launch on a shared Linux hosting environment, a modern CI/CD pipeline is not available. The deployment workflow must be adapted as follows:

1. **Local Build Process**: The static site will be built on a developer's local machine by running the `pnpm run build` command. This generates a production-ready `/dist` directory.
2. **Manual Upload**: The developer will then manually upload the **contents** of the `/dist` directory to the `public_html` (or equivalent) folder on the shared server using an FTP/SFTP client.
3. **No Automated Deployments**: All deployments, including updates and bug fixes, will follow this "local build, manual upload" process.

### Timed Promotions & Deployment Strategy

Goal: Marketing defines promo windows once, and the site automatically shows the correct seasonal offer during that window each year.

### Build-Time Logic

At build, the system checks each promo in `/src/content/coupons/`.
A promo is **live** if:

- `active === true`
- `start_date <= now <= end_date`

Live promos appear in:

- Homepage promo banner.
- `/coupons/` index page.
- Pricing tables (sale badge, strike-through price).
- Homepage “Featured offer”.

When not live, they are hidden but remain accessible with “This promotion has ended.”

All components must use a shared utility (e.g. `getActivePromos()`).

---

### Deployment Requirements

- Scheduled daily deployments via GitHub Actions cron.
- Daily rebuilds ensure promo logic stays accurate.
- No manual intervention for start/stop.

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

Plans in `/src/pricing/` directory (e.g., `/src/pricing/wordpress-hosting.json`) can include promotional pricing extensions.

**Hosting Package Promotional Structure:**

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
        "id": "wp-growth",
        "name": "Growth",
        "priceMonthly": 19.99,
        "priceYearlyMonthlyEquivalent": 15.99,
        "tag": "Most Popular",
        "promoMonthly": 11.99,
        "promoYearlyMonthlyEquivalent": 9.59,
        "promoCopy": "Halloween Offer: Save 40%",
        "promoStart": "2025-10-20",
        "promoEnd": "2025-11-01",
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

**Alternative Pricing Structure Example:**

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
        "id": "wp-plan",
        "name": "[PLAN_NAME]",
        "priceMonthly": "[ACTUAL_MONTHLY_PRICE]",
        "priceYearlyMonthlyEquivalent": "[ACTUAL_YEARLY_EQUIVALENT]", 
        "tag": "Most Popular",
        "promoMonthly": "[ACTUAL_PROMO_MONTHLY]",
        "promoYearlyMonthlyEquivalent": "[ACTUAL_PROMO_YEARLY]",
        "promoCopy": "Black Friday Sale: [DISCOUNT]% Off",
        "promoStart": "2025-11-24",
        "promoEnd": "2025-11-30",
        "features": [
          "[ACTUAL_FEATURES_FROM_PRICING_FILE]"
        ]
      }
    ]
  }
}
```

Display promo price only when current date within promo range.
Always show “Was £X” for accessibility.

---

### Accessibility & SEO Notes

- Discount must be textually announced.
- Expired promos remain indexable for SEO.
- Active promos include valid structured data (`priceValidUntil`).

### Content Management Options

**Option A: Direct Git Editing (Recommended for Current Launch)**

- Content team edits markdown files in GitHub.
- GitHub web interface or VS Code.
- Pull request workflow for reviews.
- Full version control history.
- No additional setup required.

**Option B: Decap CMS (Optional)**

- Git-based CMS with visual editor.
- No database required.
- Authentication via GitHub OAuth.
- Accessible admin interface.
- Automatic pull requests for content changes.
- Can be added later without disrupting workflow.

**Recommendation:** Start with Git editing; add Decap CMS if non-technical users need access.

### Browser & Assistive Technology Support

**Desktop Browsers (Required):**

- Chrome 120+ (Windows, macOS, Linux)
- Firefox 121+ (Windows, macOS, Linux)
- Safari 17+ (macOS)
- Edge 120+ (Windows)

**Mobile Browsers (Required):**

- Safari (iOS 16+)
- Chrome (Android 12+)

**Screen Readers (Required Support):**

| Screen Reader | Platform | Browser | Version |
|---------------|----------|---------|---------|
| JAWS | Windows | Chrome, Firefox, Edge | 2023+ |
| NVDA | Windows | Chrome, Firefox | Latest |
| VoiceOver | macOS | Safari | macOS 13+ |
| VoiceOver | iOS | Safari | iOS 16+ |
| TalkBack | Android | Chrome | Android 12+ |

**Other Assistive Technologies:**

- Dragon NaturallySpeaking (voice control) - Latest
- ZoomText (screen magnification) - Latest
- Windows Magnifier - Windows 10+
- macOS Zoom - macOS 13+

---

## DEPENDENCIES

### Production Dependencies

```json
{
  "dependencies": {
    "@astrojs/check": "^0.9.5",
    "@astrojs/tailwind": "^6.0.2",
    "astro": "^5.15.3",
    "lenis": "^1.3.13",
    "swiper": "^12.0.3",
    "tailwindcss": "^3.4.18",
    "typescript": "^5.9.3"
  }
}
```

**Rationale:** Current production dependencies based on actual package.json. Astro is the core framework with Tailwind for styling, plus utility libraries for smooth scrolling and carousels.

### Development Dependencies

**None currently installed** - All development tooling is planned but not yet implemented.

### Dependency Descriptions

**Core Astro Ecosystem:**

- `@astrojs/check` - TypeScript and Astro validation.
- `@astrojs/tailwind` - Tailwind CSS integration.
- `astro` - Main framework (v5.15.3).
- `typescript` - Type safety.

**UI Libraries:**

- `lenis` - Smooth scrolling library.
- `swiper` - Carousel/slider component.
- `tailwindcss` - Utility-first CSS framework.

### Runtime Dependencies

**None** - The built site is pure HTML/CSS/JS with no external runtime dependencies or CDN scripts.

### Planned Development Dependencies

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

### Dependency Management Policy

**Version Pinning:**

- Use caret (^) for patch/minor updates.
- Lock major versions.
- Review major updates before upgrading.

**Update Schedule:**

- Security updates: Immediate.
- Minor/patch updates: Monthly review.
- Major updates: Quarterly review with testing.

**Security Audits:**

- Run `npm audit` on every build.
- Automated Dependabot PRs enabled.
- Review all dependency changes in PRs.

**Bundle Impact:**

- Monitor bundle size on every build.
- Reject dependencies that add > 10KB without strong justification.
- Prefer vanilla solutions over library dependencies.

---

## EXAMPLE PAGE

- Homepage example content - `examples\homepage`

## DOCUMENTATION

### MCP Server Quick Reference

#### ARCHON - Premium Hosting Knowledge

**What's stored here:** Everything related to YOUR hosting infrastructure

- Hosting platform architecture and capabilities.
- Deployment procedures and API documentation.
- Server configuration guides (Nginx/Apache/Custom).
- Security setup (SSL, headers, firewall rules).
- Performance optimization for your platform.
- Monitoring and alerting setup.
- Backup and disaster recovery procedures.
- DNS and domain configuration.
- CI/CD integration with your hosting platform.
- SLA and uptime requirements.

**Use this when:** You need hosting-specific procedures or infrastructure knowledge.

---

#### CONTEXT7 - Latest Development Guidelines

**What's stored here:** Current web standards and best practices

##### Accessibility Standards

- WCAG 2.2 Specification → <https://www.w3.org/TR/WCAG22/>
- ARIA Authoring Practices → <https://www.w3.org/WAI/ARIA/apg/>
- WebAIM Guidelines → <https://webaim.org/>
- Deque axe Documentation → <https://www.deque.com/>

##### Schema.org & SEO

- Schema.org Documentation → <https://schema.org/>
- Google Structured Data → <https://developers.google.com/search/docs/>
- JSON-LD Best Practices.
- Technical SEO Guidelines.

##### Frameworks & Tools

- Astro Documentation → <https://docs.astro.build/>
- Modern CSS Standards (W3C).
- JavaScript ES6+ & Web APIs (MDN).
- Testing Tools: axe-core, Pa11y, Lighthouse, Playwright.

##### Animation Standards

- CSS Animations Specification.
- prefers-reduced-motion Guidelines.
- Web Animations API.
- Performance Best Practices.

**Use this when:** You need to reference current standards or best practices.

---

#### FILESYSTEM - Local Project Files

**What's stored here:** All source code and documentation

- `/src/` - Source code (components, layouts, styles, scripts, content).
- `/public/` - Static assets (images, fonts, favicon).
- Configuration files (package.json, astro.config, eslint, prettier, etc.).
- Documentation (README, ACCESSIBILITY, CONTRIBUTING).
- Tests.

**Use this when:** Working with actual project files.

---

#### GIT - Version Control

**What's stored here:** Code history and branches

- All commits and change history.
- Branch management (main, develop, feature/*, fix/*).
- .gitignore configuration.

**Use this when:** Managing code versions or reviewing history.

---

#### GITHUB - Repository & CI/CD

**What's stored here:** Automation and collaboration

- CI/CD Workflows (build, test, deploy).
- Issue templates and pull request templates.
- GitHub Actions configuration.
- Deployment automation.
- Dependency management.

**Use this when:** Setting up automation or managing deployments.

---

#### PLAYWRIGHT - Testing

**What's stored here:** Automated tests

- Accessibility tests (keyboard nav, screen reader, ARIA).
- End-to-end user journey tests.
- Form validation tests.
- Animation tests.
- Schema validation tests.
- Cross-browser tests.

**Use this when:** Writing or running automated tests.

---

#### 🔍 FETCH - External APIs & Validation

**What's stored here:** External service calls

- Google Rich Results Test API.
- Schema.org Validator API.
- W3C HTML/CSS Validators.
- CDN resources.
- Analytics scripts.

**Use this when:** Validating content or fetching external resources.

---

#### SEQUENTIAL THINKING - Problem Solving

**What's stored here:** Complex decision-making processes

- Architecture Decision Records (ADRs).
- Performance optimization strategies.
- Complex bug debugging approaches.
- Accessibility implementation patterns.
- Schema.org nesting logic.

**Use this when:** Making complex technical decisions or solving difficult problems.

---

#### SERENA

**What's stored here:** [To be defined]

**Use this when:** [To be defined]

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

- **Nginx:** Configure in `nginx.conf` or site config file.
- **Apache:** Use `.htaccess` or virtual host config.
- **Reverse Proxy:** Configure in proxy layer (Cloudflare, etc.).
- **Platform-Specific:** Use your hosting platform's header configuration.

**HTTPS Enforcement:**

- Enforce HTTPS redirect (configure at web server or load balancer level).
- HSTS header with 1 year max-age.
- Redirect all HTTP to HTTPS (301 redirects).

**Dependency Security:**

- Run `npm audit` on every build.
- Configure Dependabot for automated security updates.
- Review all dependency updates in PRs.
- Pin major versions, allow minor/patch updates.

#### Form Security Standards

- All forms MUST use reCAPTCHA V3 for bot protection
- Honeypot fields required on all contact/lead forms
- Rate limiting implementation (max 5 submissions per IP per hour)
- Input sanitization and validation using Zod schemas
- CSRF protection tokens for all form submissions
- GDPR-compliant data collection with explicit consent checkboxes
- Form data encryption in transit and at rest
- Automatic data deletion after 30 days for non-converted leads

#### Webhook Integration Requirements

- All form submissions trigger webhooks to:
  - Primary CRM system (HubSpot/Zoho/Salesforce)
  - Email inbox (<support@premium-hosting.co.uk>)
  - Backup logging system for audit trails
- Webhook payload includes: timestamp, IP, user agent, sanitized form data
- Failed webhook retry mechanism (3 attempts with exponential backoff)
- GDPR-compliant data retention (30 days max for non-converted leads)
- Webhook authentication using API keys or JWT tokens
- Real-time monitoring and alerting for webhook failures

**Form Security (if applicable):**

- CSRF protection for form submissions.
- Rate limiting on contact forms.
- Sanitize all user inputs.
- Never expose sensitive data in HTML.

### SEO Requirements

**On-Page SEO:**

- Unique `<title>` tags for every page (< 60 characters).
- Meta descriptions for all pages (< 160 characters).
- Semantic HTML aids SEO.
- Descriptive, clean URLs.
- Fast page load times (< 2 seconds).
- Mobile-friendly responsive design.
- **Structured Data (Schema.org)**: JSON-LD markup on every page with proper nesting.

**Structured Data Requirements:**

- **JSON-LD format** (preferred by Google, W3C compliant).
- **Every page must include** properly nested Schema.org markup.
- **Base schemas required**:
  - Organization (site-wide)
  - WebSite (homepage)
  - WebPage (all pages)
  - BreadcrumbList (navigation hierarchy)
- **Content-specific schemas**:
  - Article (blog posts)
  - FAQPage (FAQ page)
  - ContactPage (contact page)
  - AboutPage (about page)
  - Person (team member pages)
- **Proper nesting**: Follow Schema.org hierarchy guidelines.
- **Validation**: Test all markup with Google Rich Results Test and Schema.org validator.

**Technical SEO:**

- XML sitemap auto-generated (`@astrojs/sitemap`).
- `robots.txt` configured appropriately.
- Structured data (Schema.org) for rich results - **REQUIRED on every page**.
- 404 page with helpful navigation.
- Clean URL structure (no query parameters).

**Schema.org Implementation Strategy:**

1. **Global Organization Schema**: Define once, reference everywhere via @id.
2. **@graph Pattern**: Use @graph to nest multiple related schemas.
3. **Consistent @id Format**: Use `https://example.com/page/#type` format.
4. **Cross-referencing**: Link entities using @id references (e.g., author, publisher).
5. **Validation Pipeline**: Automated validation in CI/CD before deployment.
6. **Testing**: Manual verification in Google Rich Results Test.

**Schema Priority Levels:**

- **Critical (Must Have)**: Organization, WebSite, WebPage, BreadcrumbList.
- **High Priority**: Article (blog), ContactPage, AboutPage, FAQPage.
- **Medium Priority**: Person (team), Service, Product.
- **Optional**: Review, Rating, Event (if applicable).

**robots.txt:**

```
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap-index.xml
```

### Analytics & Privacy

**Privacy-Friendly Analytics:**

**Recommended: Plausible Analytics**

- No cookies required.
- GDPR, CCPA, PECR compliant.
- Lightweight script (< 1KB).
- Privacy-focused (no personal data collected).
- Simple, actionable metrics.
- Cost: ~$9/month.

**Alternative: Fathom Analytics**

- Similar privacy features.
- GDPR compliant.
- No cookie consent needed.
- Cost: ~$14/month.

**DO NOT USE:**

- Google Analytics (privacy concerns, requires cookie consent).
- Facebook Pixel (privacy invasive).
- Any analytics that require cookie consent banners.

**Implementation Strategy for Analytics:**
To facilitate easy integration of analytics in the future without requiring code changes across the site, the following strategy will be used:

1. **Centralized Analytics Component**: A single, dedicated Astro component (`/src/components/Analytics.astro`) will be created to house all analytics scripts.
2. **Environment Variable Control**: This component will be controlled by environment variables (e.g., `PUBLIC_PLAUSIBLE_DOMAIN`). If the variable is not set, the component will render nothing.
3. **Global Inclusion**: The `<Analytics />` component will be placed once in the main layout file, ensuring it is included on every page of the site.

This approach allows analytics to be "turned on" site-wide by simply adding a variable to the hosting environment and redeploying, with zero code modification needed.

**Cookie Policy:**

- If using cookieless analytics: No cookie banner needed.
- If cookies required: Implement accessible cookie consent with keyboard navigation.

**Privacy Policy:**

- Required even with cookieless analytics.
- Explain data collection (minimal with Plausible/Fathom).
- Link prominently in footer.
- Plain language, not legalese.

### Internationalization (Future Consideration)

**If Multilingual Support Needed:**

**Technical Requirements:**

- `hreflang` tags for language alternatives.
- Language switcher in consistent location.
- Translate all content, not just body text.
- Translate alt text and ARIA labels.
- RTL language support (Arabic, Hebrew).
- Date/time formatting per locale.

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

- Monitor uptime (your hosting platform's monitoring + external service).
- Check deployment status.
- Review error logs.

**Weekly:**

- Review automated accessibility test results.
- Check for security advisories.
- Monitor server resources.

**Weekly:**

- Review automated accessibility test results.
- Check for security advisories.

**Monthly:**

- Review and update dependencies.
- Run manual accessibility spot checks.
- Review analytics for issues.
- Content updates as needed.

**Quarterly:**

- Full manual accessibility review.
- Performance optimization review.
- Content audit.
- Review and update documentation.

**Annually:**

- Third-party accessibility audit.
- User testing with people with disabilities.
- Major dependency updates.
- Review WCAG standards for changes.

**Support Process:**

**Accessibility Issues:**

- Email: <accessibility@example.com>
- Response SLA: 2 business days.
- Priority: Critical > High > Medium > Low.
- Track issues in GitHub.

**Content Updates:**

- Submit via pull request.
- Review process: Content review → Technical review → Deploy.
- Deploy time: < 5 minutes after merge.

**Emergency Procedures:**

- Critical accessibility issue: Fix immediately, deploy within 1 hour.
- Security issue: Fix immediately.
- Content errors: Fix within 4 hours.
- Visual bugs: Fix within 1 business day.

### Performance Monitoring

**Tools:**

- **Lighthouse CI:** Run on every deployment.
- **WebPageTest:** Monthly performance checks.
- **Core Web Vitals:** Monitor via search console.
- **Uptime Monitoring:** Your hosting platform's built-in monitoring + external service (StatusCake, Pingdom, UptimeRobot, etc.).

**Performance Budget:**

- Time to Interactive: < 3.5 seconds
- First Contentful Paint: < 1.2 seconds
- Largest Contentful Paint: < 2.5 seconds
- Cumulative Layout Shift: < 0.1
- Total page weight: < 500KB
- JavaScript bundle: < 50KB
- CSS bundle: < 30KB

### Out of Scope (Current Launch)

The following features are explicitly **OUT OF SCOPE** for current launch:

**Not Included:**

- User authentication/login system.
- User accounts or profiles.
- E-commerce/shopping cart.
- Payment processing.
- Video streaming/hosting.
- Real-time chat or messaging.
- User-generated content (comments, forums).
- Social media integration/embeds.
- Third-party widgets (except videos with captions).
- Complex data visualizations.
- Interactive maps.
- Search functionality (may add in future expansion).
- Multi-language support (future consideration).
- Heavy animation libraries (GSAP, Three.js, etc.) - keeping animations native CSS/JS.

**May Be Added Later:**

- Search (future expansion).
- Decap CMS for content editing (future expansion).
- Newsletter signup (future expansion).
- Basic contact form (mid-release update).

**Handling of Future Features in the Codebase:**
To prepare for future development without including incomplete features in the current production build, the following approach will be taken:

- **Placeholder Components**: Basic, non-functional placeholder components for future features (e.g., `Search.astro`, `ContactForm.astro`) will be created.
- **Build-Time Flags**: The inclusion of these components in the final site will be controlled by environment variables (e.g., `PUBLIC_ENABLE_SEARCH=true`). By default, these flags will be disabled for production builds, ensuring the features are completely excluded from the live site until they are ready for launch.

### Animation Strategy & Motion Preferences (Implemented)

**Current Status:** Motion control system foundational components implemented.

- OS-level `prefers-reduced-motion` detection component.
- Basic animation framework respecting user preferences.
- CSS-based animations with progressive enhancement.
- Manual motion control toggle (accessibility panel framework).

**Next Steps:**

- Complete accessibility control panel integration.
- Comprehensive animation library documentation.
- User preference persistence testing.
- Performance impact measurement.

**Motion Safety Standards:**

- No flashing content > 3 times per second.
- No motion-only controls without alternatives.
- User empowerment through preference controls.

### Launch Checklist

#### Pre-Launch Requirements

**Accessibility (Must Complete Before Launch):**

- [ ] All automated tests passing (axe, Pa11y, Lighthouse = 100).
- [ ] Manual keyboard testing completed on all pages.
- [ ] Screen reader testing completed (JAWS, NVDA, VoiceOver).
- [ ] Third-party accessibility audit completed and passed.
- [ ] User testing with 5+ people with disabilities completed.
- [ ] All critical and high-priority issues resolved.
- [ ] Accessibility statement published at `/accessibility`.
- [ ] VPAT (Voluntary Product Accessibility Template) completed.

**Technical:**

- [ ] All pages load in < 2 seconds on 3G.
- [ ] Lighthouse scores meet minimums (Perf 90+, A11y 100, BP 95+, SEO 100).
- [ ] Cross-browser testing completed (Chrome, Firefox, Safari, Edge).
- [ ] Mobile testing completed (iOS + Android).
- [ ] All forms tested and validated.
- [ ] 404 page designed and functional.
- [ ] Security headers configured.
- [ ] SSL certificate active and forced HTTPS.
- [ ] DNS configured correctly.
- [ ] Redirects configured (if migrating from old site).

**Content:**

- [ ] All content proofread and approved.
- [ ] All images optimized (WebP with fallbacks).
- [ ] All images have alt text.
- [ ] Meta descriptions written for all pages.
- [ ] Legal pages complete (Privacy Policy, Terms).
- [ ] Contact information verified and tested.
- [ ] All internal links tested.
- [ ] All external links tested.

**SEO:**

- [ ] XML sitemap generated and submitted.
- [ ] robots.txt configured.
- [ ] Google Search Console setup.
- [ ] Social sharing meta tags implemented.
- [ ] Canonical URLs configured.
- [ ] Schema.org structured data on all pages.
- [ ] Structured data validated (Google Rich Results Test + Schema.org Validator).
- [ ] Breadcrumb markup tested.

**Analytics & Monitoring:**

- [ ] Privacy-friendly analytics installed (Plausible/Fathom).
- [ ] Uptime monitoring configured.
- [ ] Error tracking configured (optional).
- [ ] Performance monitoring dashboard setup.

**Documentation:**

- [ ] Developer documentation complete.
- [ ] Content editor guide complete.
- [ ] Deployment process documented.
- [ ] Support procedures documented.
- [ ] Emergency contact list created.

**Legal & Compliance:**

- [ ] Accessibility statement reviewed by legal (if required).
- [ ] Privacy policy reviewed by legal.
- [ ] GDPR/CCPA compliance verified (if applicable).
- [ ] Terms of service (if applicable).

#### Post-Launch (Within 1 Week)

- [ ] Monitor analytics for traffic patterns.
- [ ] Monitor error logs for issues.
- [ ] Check Core Web Vitals in Search Console.
- [ ] Verify all forms receiving submissions.
- [ ] Review accessibility feedback channel.
- [ ] Fix any minor issues discovered.

#### Post-Launch (Within 1 Month)

- [ ] User feedback survey.
- [ ] Review analytics insights.
- [ ] Plan future enhancements.
- [ ] Schedule first quarterly accessibility review.

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

- Lighthouse accessibility score: 100 (maintained).
- Zero accessibility complaints received.
- Page load times: < 2 seconds (maintained).
- Core Web Vitals: All metrics in "green" range.
- Uptime: > 99.9%.
- Zero security vulnerabilities.

**Long-Term Goals (6-12 Months):**

- Industry recognition for accessibility.
- Positive user testimonials from people with disabilities.
- Increased organic traffic (SEO benefits of accessibility).
- No accessibility-related legal issues.
- Serve as accessibility benchmark for competitors.

---

### Automation & Metadata Non-Negotiables

- **Promo Visibility:** Driven by metadata (`active`, `start_date`, `end_date`, `promo_key`), never hard-coded.
- **Pricing Consistency:** All displayed prices must come from `/src/pricing/`.
- **Promo Calendar:** If `/src/data/promo-calendar.json` exists, promo pages must use `promo_key`.
- **Deploy Automation:** Daily rebuilds during promo periods are mandatory.

---

## COMPETITIVE INTELLIGENCE & MARKET RESEARCH

### Competitor Analysis

#### Primary Competitors

- **20i** (upstream supplier and direct benchmark)
- **Krystal Hosting** (UK premium/green segment)
- **SiteGround**, **Hostinger**, **GoDaddy**, **Bluehost**, **DreamHost**
- **A2 Hosting**, **InMotion Hosting**, **IONOS**, **OVHcloud**
- **DigitalOcean**, **Akamai/Linode**, **Vultr**
- **AWS**, **Google Cloud Platform**, **Microsoft Azure**, **Hetzner**
- **Liquid Web**, **WP Engine**, **Kinsta**, **Cloudways**
- **Namecheap**, **FastComet**, **GreenGeeks**

#### Key Differentiators

- **Premium experience with guaranteed uptime**
- **24/7 UK-based expert support**
- **Free migrations and setup assistance**
- **Advanced security features included**
- **Performance-optimised infrastructure**
- **100% green hosting platform**

### SEO & Content Strategy

#### Primary Keywords

- web hosting, website hosting, shared hosting, uk web hosting, business web hosting
- premium web hosting, cloud web hosting, managed hosting, eco friendly web hosting
- green web hosting, fast web hosting, affordable web hosting, reliable web hosting
- secure web hosting, professional web hosting, scalable web hosting, web hosting plans
- compare web hosting, best web hosting, hosting deals, hosting offers, hosting sale
- wordpress hosting, managed wordpress hosting, woocommerce hosting, vps hosting
- cloud vps, managed vps, virtual private servers, dedicated servers, bare metal servers
- reseller hosting, email hosting, professional email, ssl certificates, domain names
- domain registration, website builder, managed cloud servers, hosted private cloud

#### Technical SEO Keywords

- nvme ssd hosting, nginx hosting, litespeed hosting, caching, cdn hosting
- global cdn, load balancer, ttfb optimization, page speed, 1 click installs
- staging environment, git sftp access, php versions, cron jobs, ssh access
- object caching, kvm console, snapshots, automatic backups, daily backups
- auto scaling, free ssl, auto ssl, ddos protection, waf firewall, malware scans
- security monitoring, uptime guarantee, 99.9% uptime, sla uptime, offsite backups

#### Customer Pain Points to Address

- slow loading speeds, poor customer service, hidden fees, downtime issues
- complex interfaces, offshore support, expensive renewals, lack of support
- security vulnerabilities, slow migration, technical difficulties, poor documentation

#### Common Customer Questions (People Also Ask)

- what is the difference between shared, vps and dedicated hosting?
- which web hosting plan do i need for a small business?
- is wordpress hosting worth it vs regular hosting?
- does web hosting include a free domain and ssl?
- how do i migrate my website to a new host without downtime?
- what is the 30-day money-back guarantee and what's excluded?
- how reliable is 99.9% uptime in real terms?
- which is faster: nginx or litespeed hosting?
- what are nvme ssds and do they make my site faster?
- do i need ddos protection for my website?
- can i upgrade from shared to vps later?
- is managed vps better than self-managed for beginners?
- where are your uk data centres located?
- is green hosting really powered by renewable energy?
- can i host multiple websites on one plan?
- does hosting include email accounts?
- what's the difference between a domain and hosting?
- what happens at renewal — are there hidden fees?
- do you provide free website migration?
- how secure are your backups and how often are they taken?

### Target Market Segments

- **Small businesses**, **eCommerce stores**, **agencies**, **bloggers**, **enterprise clients**
- **Startups**, **developers**, **portfolios**, **WooCommerce stores**, **Magento stores**
- **Drupal sites**, **Joomla sites**, **Laravel applications**

### Pricing Strategy

- **Strategy**: Premium, transparent
- **Model**: Monthly and annual, biannual and triannual pricing options
- **Note**: Pricing currently being updated across all plans
- **Guarantees**: 30 day money back, 99.9% uptime SLA
- **Freebies**: SSL certificate, website migration, domain credit

### Content Creation Strategy

- **Professional yet approachable tone**
- **First-person plural voice (we/our)**
- **Benefits over features focus**
- **Premium service experience emphasis**
- **WCAG 2.2 Level AA compliance**

---

## CONTENT GENERATION FRAMEWORKS

This section provides comprehensive content generation frameworks for creating all page types across the Premium Hosting website. All content creation must follow these frameworks to ensure consistency, quality, and brand alignment.

### Universal Content Standards

#### Entity-First Content Strategy

- **Primary Entity**: Premium Hosting (company/brand name)
- **Secondary Entities**: Service portfolio (hosting services, domains, SSL, etc.)
- **Supporting Entities**: UK location, certifications, performance guarantees
- **Entity Relationships**: [Premium Hosting] → provides → [Hosting Service] → serves → [Customer Type] → in → [Location]

#### Voice and Tone Requirements

- **First-person plural voice**: "We provide", "Our services", "We handle"
- **Professional yet approachable**: Expert but accessible
- **Direct and clear**: Concise, unambiguous language
- **Customer-focused**: Benefits over features
- **Active voice**: Throughout all content
- **British English**: Spelling, grammar, and terminology

#### Content Quality Standards

- **Reading level**: 7th-9th grade appropriate
- **Paragraph length**: 3-4 sentences maximum (mobile-first)
- **Active voice**: At all times
- **Clear hierarchy**: Proper H1-H6 structure
- **Semantic coherence**: Topic sentences support headings
- **No prohibited language**: Strictly enforce word restrictions

### Homepage Content Framework

#### Structure & Word Counts

**Total Length**: 1210-1750 words

**Section Breakdown**:

1. **Hero Section**: 40-75 words
2. **Trust Bar (Optional)**: 20-30 words  
3. **Services Overview**: 300-400 words
4. **Why Choose Us**: 250-350 words
5. **Trust & Credibility**: 150-200 words
6. **Service Areas**: 100-150 words (if location-based)
7. **About Us**: 150-200 words
8. **Frequently Asked Questions**: 200-300 words
9. **Final CTA Section**: 50-100 words

#### Hero Section Requirements

**Purpose**: Answer 3 questions in 3 seconds:

1. Who are you?
2. What do you do?
3. Why should I care?

**H1 Format**: [Company Name]: [Clear Value Proposition] in/across [Location]

- Example: "Premium Hosting: Reliable Web Hosting Across the UK"
- Must include company name
- 40-75 words total including H1
- One primary CTA only
- Mobile-optimized brevity

#### Services Overview Requirements

**Purpose**:

- Establish service portfolio entity relationships
- Route visitors to specific service pages
- Create company → service entity connections

**Structure**:

- H2: "Our Services" / "What We Provide" / "Hosting Solutions"
- 4-8 service cards with entity-first descriptions
- Each service: Name + 2-3 benefit-focused sentences + link to service page

**Entity-First Service Format**:
"[Service Name] provides/delivers/transforms [outcome] for [audience]. We [specific action] to ensure [benefit]. [Key differentiator or credential]."

#### CTA Strategy - First Person Possessive

**Primary CTAs**: Must use first-person possessive language

- ✅ "Get my free quote" (self-initiated, ownership)
- ✅ "Start my project" (user claims action)
- ✅ "Book my consultation" (internal motivation)
- ❌ "Get a quote" (generic command)
- ❌ "Get your free quote" (directed command)

**Exceptions**: Navigational CTAs use standard language

- "View our services" (not "View my services")
- "Learn more" (not "Learn my more")
- "Contact us" (not "Contact my team")

### Service Page Content Framework

#### Structure Requirements

**Target Audience**: Small to medium businesses, entrepreneurs, agencies, larger organisations
**Primary Focus**: [Specific Service] entity optimization
**Voice**: First-person plural throughout

#### Entity Positioning Strategy

- **H1**: Must contain primary service entity (exact match or variant)
- **H2s**: Must contain primary entity or direct component  
- **Topic Sentences**: First sentence of each section includes entity
- **Tables**: First column begins with primary entity or component

#### Content Sections (Standard)

1. **Service Definition & Value Proposition**
2. **What's Included / Service Features**
3. **Implementation/Setup Process**
4. **Why Choose Premium Hosting**
5. **Technical Specifications**
6. **Pricing & Plans**
7. **Frequently Asked Questions**
8. **Get Started / CTA Section**

#### Service Differentiation (Without Competitor Mention)

**Differentiate Through**:

- Specific inclusions provided as standard
- Guarantees and commitments offered
- Process transparency
- Certifications and credentials
- Technical specifications

**Never Include**:

- Competitor names or brands
- "Unlike others" or "Better than" language
- Comparative claims to unnamed competitors

### Landing Page Content Framework

#### Purpose & Focus

- **Single conversion goal**: One clear action user should take
- **Offer-centric**: Built around specific offer/promotion
- **Minimal distractions**: Remove unnecessary exit points
- **Value proposition clarity**: Immediately obvious benefit

#### Landing Page Structure

1. **Hero Section**: Offer headline + value prop + primary CTA
2. **What You'll Get**: Clear breakdown of offer contents/benefits
3. **How It Works**: Simple 3-step process
4. **Why This Offer**: Value justification and urgency
5. **Trust Signals**: Credentials, guarantees, testimonials
6. **FAQ**: Address common objections
7. **Final CTA**: Conversion push with urgency

#### Offer Entity Positioning

- **H1**: Must contain primary offer entity
- **Focus**: Maintain offer as primary entity throughout
- **Disambiguation**: Clarify offer early ("This free guide contains...")
- **Benefit-focused**: Emphasize user outcomes

### Content Creation Rules (Universal)

#### Prohibited Words (Strictly Forbidden)

**Marketing Fluff**: innovative, cutting-edge, game-changing, revolutionize, seamless, leverage, unlock, unleash, elevate, enhance, optimize, utilize, comprehensive, robust, dynamic, synergy

**Corporate Speak**: furthermore, moreover, in conclusion, significantly, essentially, notably, predominantly, undoubtedly, meticulously, paradigm, framework

**Generic Claims**: best, greatest, leading, top, premier, excellence, quality, superior (unless provable)

#### Accuracy Requirements

- **Only verifiable claims**: Must be objectively proven
- **Realistic timeframes**: Honest expectations
- **Specific benefits**: Measurable outcomes
- **Honest limitations**: Transparent about constraints
- **No fake testimonials**: Only genuine reviews
- **No made-up statistics**: Verifiable numbers only

#### Technical Requirements

- **WordPress compatibility**: All tables in markdown format
- **Schema markup ready**: Proper entity structure
- **Internal linking**: Strategic anchor text placement
- **British English**: Consistent throughout
- **Mobile-first**: Short paragraphs, clear hierarchy
- **Pricing Data Integration**: All pricing content MUST pull from `/src/pricing/` directory files
- **TypeScript Validation**: Use schemas from `pricing-schema.ts` for type safety

#### Pricing Integration Implementation

**Import Structure for Astro Components:**

```typescript
// Import pricing data
import wordpressHosting from '../pricing/wordpress-hosting.json';
import type { WordPressHosting } from '../pricing/pricing-schema';

// Type-safe usage
const pricing: WordPressHosting = wordpressHosting;
```

**Pricing Component Example:**

```astro
---
import wordpressHosting from '../../src/pricing/wordpress-hosting.json';
const { plans, currency, billing } = wordpressHosting['wordpress-hosting'];
---

<div class="pricing-grid">
  {Object.entries(plans).map(([planKey, plan]) => (
    <div class="pricing-card" class:list={[planKey === "growth" && "popular"]}>
      <h3>{plan.name}</h3>
      <div class="price">
        <span class="currency">{currency === 'GBP' ? '£' : '$'}</span>
        <span class="amount">{plan.pricing.monthly}</span>
        <span class="period">/month</span>
      </div>
      {billing.yearly && (
        <div class="yearly-price">
          <p>Annual: £{plan.pricing.annually / 12}/month ({billing.yearly_discount_note})</p>
        </div>
      )}
      <div class="specifications">
        <p>Webspace: {Math.round(plan.specifications.webspace / 1000)}GB</p>
        <p>Bandwidth: {Math.round(plan.specifications.bandwidth / 1000000)}GB/month</p>
      </div>
      <button class="cta-button">Get My {plan.name} Plan</button>
    </div>
  ))}
</div>
```

**Automation & Metadata Requirements:**

- **Pricing Consistency**: All displayed prices MUST come from `/src/pricing/` directory files
- **Global Updates**: Updating pricing files updates all pricing across entire site
- **Schema Validation**: All pricing data validated against Zod schemas before build
- **Promotional Overlays**: Support seasonal pricing via promo fields in pricing data
- **Component Integration**: All pricing components must use TypeScript types from `pricing-schema.ts`

### SEO & Metadata Requirements

#### Title Tag Format

- **Length**: 55-60 characters maximum
- **Structure**: [Primary Entity] | [Key Benefit] | Premium Hosting
- **British spelling**: Throughout

#### Meta Description Format  

- **Length**: 150-155 characters maximum
- **Focus**: Benefit-focused, not feature-focused
- **CTA**: Include possessive language call-to-action
- **Location**: Natural inclusion where relevant

#### Internal Linking Strategy

- **Entity-focused anchors**: Use service/entity names
- **Natural placement**: Within content flow
- **Related services**: Cross-link complementary offerings
- **Resource pages**: Link to guides, FAQs, about pages

### Google My Business Content Framework

#### Universal GMB Requirements

- **Length**: Maximum 1500 characters (aim for 1200-1400)
- **No contact info**: No phone, email, address
- **Entity-first**: Lead with service/company name
- **Hook**: Within first 100 characters
- **CTA**: Possessive language for actions
- **Local relevance**: Where applicable

#### GMB Post Types

**Evergreen Posts**: Timeless content, usable year-round
**Seasonal Posts**: Time-specific, creates genuine urgency
**Offer Posts**: Promote specific deals/promotions
**Company Overview**: Broad service range promotion

#### GMB Structure (Standard)

1. **Opening Hook**: Entity name + what you do + who for
2. **Value Proposition**: 2-3 sentences on benefits  
3. **Call-to-Action**: Specific next step with possessive language

### Quality Verification Checklist

**Content Standards**:

- [ ] Entity-first approach maintained
- [ ] No prohibited words used
- [ ] British spelling/grammar throughout
- [ ] Active voice at all times
- [ ] First-person plural voice
- [ ] Mobile-friendly paragraphs (3-4 sentences max)
- [ ] Clear topic sentences
- [ ] Possessive CTAs implemented

**Technical Standards**:

- [ ] Tables in markdown format
- [ ] Title tag within character limits
- [ ] Meta description within limits
- [ ] Internal links marked appropriately
- [ ] Schema-ready entity structure

**Brand Compliance**:

- [ ] Premium Hosting brand voice maintained
- [ ] Core values reflected
- [ ] Service portfolio properly represented
- [ ] UK-based positioning clear
- [ ] Professional yet approachable tone
