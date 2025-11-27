# Premium Hosting Website - Complete Technical PRD

**Version:** 2.1
**Last Updated:** November 2025
**Single Source of Truth**
[NEW] Update Log (v2.1):
Adopted a Hybrid Content Architecture, splitting content between WordPress (for dynamic/editorial content) and Git (for core/legal content).
Moved all Legal & Policy pages to Astro Content Collections to enable a Git-based, auditable version control workflow via Pull Requests.
Added coupon and team_member Custom Post Types to the WordPress architecture.
Detailed the automated, time-based build strategy for promotional landing pages.

## TABLE OF CONTENTS

### Core Documentation

1. [Overview](#overview)
2. [Feature & Sitemap](#feature--sitemap)
3. [Page Structure & Templates](#page-structure--templates)
4. [WordPress Headless CMS Architecture](#wordpress-headless-cms-architecture)
5. [ACPT Custom Post Types](#acpt-custom-post-types)
6. [WordPress Pages Strategy](#wordpress-pages-strategy)
7. [Tools & Technology Stack](#tools--technology-stack)
8. [Accessibility Standards](#accessibility-standards)
9. [SEO & Schema.org](#seo--schemaorg)
10. [Content Generation Frameworks](#content-generation-frameworks)
11. [Competitive Intelligence](#competitive-intelligence)
12. [Build & Deployment](#build--deployment)
13. [Testing & Quality Assurance](#testing--quality-assurance)
14. [Launch Checklist](#launch-checklist)

---

## OVERVIEW

### Company Information

**Company Name:** Premium Hosting  
**Parent Company:** EVCV Limited  
**Founded:** 2021 by Richard Chowns  
**Years Trading:** 4+ years  
**Headquarters:** Alcester, UK  
**Registered Address:** 28 Oak Tree Lane, Cookhill, Alcester, Warwickshire, B49 5LH, England  
**Company Registration:** 13570383  
**VAT Number:** GB389265053  
**ICO Reference:** ZB232228  
**DUNS Number:** 227960328  
**Tagline:** Engineered for Excellence

**Trust Signals:**

- GDPR compliant
- PCI DSS compliant
- ICO registered (certificate: src/assets/EVCV-Limited-ICO-Certificate.pdf)

**Awards:**

- Winner of SME News Rising Stars in Web Hosting 2025

### Core Brand Identity

**Core Values:**

1. **Truthfulness** - Honest, transparent communication
2. **Professionalism** - Expert, reliable service delivery
3. **Inspiration** - Innovative solutions that inspire confidence
4. **Excellence** - Superior quality in every aspect
5. **Care** - Personal, attentive customer service

**Brand Personality:**

- Ambitious - Forward-thinking, growth-oriented
- Innovative - Cutting-edge technology solutions
- Professional - Expert, trustworthy, reliable
- Confident - Self-assured, authoritative
- Caring - Customer-focused, supportive

**Brand Voice:**

- Knowledgeable - Expert insights and technical understanding
- Precise - Clear, accurate, detailed information
- Aspirational - Inspiring confidence and trust

**Message Pillars:**

1. Reliability you can count on
2. Support that cares
3. Engineered for excellence
4. Effortless experience

### Visual Identity

**Primary Color Palette:**

| Color | HEX | RGB | Usage |
|-------|-----|-----|-------|
| **Gold** | `#D4AF37` | `212, 175, 55` | Primary accent, highlights, buttons |
| **Black** | `#000000` | `0, 0, 0` | Core color, backgrounds, typography |
| **Dark Purple** | `#1B002E` | `27, 0, 46` | Secondary, headers, gradients |
| **Cream** | `#FCFBE6` | `252, 251, 230` | Backgrounds, supporting elements |

**Typography:**

- **Primary:** Space Grotesk (Regular, Medium)
- **Fallback:** Inter
- **Usage:** Consistent modern presentation

### Service Portfolio

**Core Hosting Services:**

1. Shared Hosting
2. WordPress Hosting
3. Cloud Hosting
4. VPS Hosting
5. Dedicated Servers
6. Managed Hosting

**Additional Services:**

- SSL Certificates
- CDN Services
- Domain Services
- Email Hosting
- Website Builder
- Security & DDoS Protection

### Target Audience

**Primary:**

- Small to medium businesses
- Marketing teams and agencies
- Procurement managers
- Entrepreneurs and startups
- Design/development agencies
- Larger organisations

**Customer Needs:**

- 99.9%+ uptime guarantees
- Fast UK-based support
- Personal, high-quality service
- Transparent pricing
- Expert technical assistance

### Technical Standards

**Performance:**

- Uptime: 99.9%+ SLA
- Response Time: <4 minutes average
- Load Time: <2 seconds
- Auto-scaling capability

**Security:**

- DDoS Protection (enterprise-grade)
- SSL Certificates (free with plans)
- Daily Backups (automated)
- Malware Scanning (proactive)

**Support:**

- UK-Based Team
- 24/7 Availability
- <1 hour response time
- Personal service guarantee

**Infrastructure:**

- 100% SSD Hosting (NVMe)
- Cloud-based infrastructure
- 100% Renewable Energy
- Free UK Charity Plan

### Contact Information

**Support:**

- Email: <support@premium-hosting.co.uk>
- Phone: 01234 567890
- Response: <1 hour
- Live Chat: 24/7 (AI + human agents)

**Sales:**

- Email: <sales@premium-hosting.co.uk>
- Phone: 01234 567891

---

## FEATURE & SITEMAP

### Complete URL Architecture

**Homepage**

- Homepage → `/`

**Hosting Products**

- WordPress Hosting → `/wordpress/`
- Cloud Hosting → `/cloud-hosting/`
  - Redirect from `/managed-vps/`
- VPS Hosting → `/vps/`
- Free Hosting → `/free-hosting/`
- Hosting Overview → `/hosting/`
- Additional Services → `/services/`
- SSL Certificates → `/certificates/`
- CDN Services → `/cdn/`
- Website Builder → `/website-builder/`
- Find Your Domain → `/domain/`
- Pricing → `/pricing/`
- Compare Plans → `/compare/`
- Business Email → `/business-email/`
- Email → `/email/`
- Dedicated Servers → `/dedicated-servers/`
- Managed Hosting → `/managed-hosting/`
- Server Locations → `/data-centers/`
- Control Panel → `/control-panel/`

**Domain & DNS**

- Domain Transfers → `/domain-transfer/`
- DNS Management → `/dns/`
- WHOIS Lookup → `/whois/`
- Domain Privacy → `/domain-privacy/`

**Solutions**

- Solutions Overview → `/solutions/`
- Business Hosting → `/solutions/business-hosting/`
- eCommerce Hosting → `/solutions/ecommerce-hosting/`
- Agency Hosting → `/solutions/agency-hosting/`
- High-Traffic → `/solutions/high-traffic/`
- Enterprise Cloud → `/solutions/enterprise/`
- Managed Services → `/managed-services/`

**Website Services**

- Website Services → `/website-services/`
- Website Maintenance → `/website-maintenance/`
- Website Care Plans → `/website-care-plans/`
- Website Updates → `/website-updates/`
- Custom Development → `/custom-development/`
- Website Redesign → `/website-redesign/`
- Landing Pages → `/landing-pages/`
- eCommerce Development → `/ecommerce-development/`
- Portfolio → `/portfolio/`
- Industries Served → `/industries/`

**Digital Marketing**

- Digital Marketing → `/digital-marketing/`
- SEO Services → `/seo/`
- PPC Management → `/ppc/`
- Content Marketing → `/content-marketing/`
- Email Marketing → `/email-marketing/`
- Conversion Optimization → `/conversion-optimization/`
- Analytics & Tracking → `/analytics/`
- Marketing Automation → `/marketing-automation/`
- Brand Strategy → `/brand-strategy/`
- Influencer Marketing → `/influencer-marketing/`
- Video Marketing → `/video-marketing/`

**Social Media**

- Social Media Overview → `/social-media/`
- Social Media Management → `/social-media-management/`
- Social Media Advertising → `/social-media-ads/`
- Content Creation → `/content-creation/`

**Sales & Onboarding**

- Request Quote → `/request-quote/`
- Free Consultation → `/free-consultation/`
- Demos → `/demo/`
- Onboarding Process → `/onboarding/`

**Business Communications**

- Business Communications → `/business-communications/`
- Phone Answering → `/phone-answering/`
- Virtual Receptionist → `/virtual-receptionist/`
- Live Chat Services → `/live-chat/`
- Chatbot Solutions → `/chatbots/`
- Customer Support Services → `/customer-support-services/`

**Reputation Management**

- Reputation Management → `/reputation-management/`
- Review Management → `/review-management/`
- Online Reputation → `/online-reputation/`

**Complete Solution Packages**

- Complete Website Solution → `/solutions/complete-website-solution/`
- Startup Package → `/solutions/startup-package/`
- Growth Package → `/solutions/growth-package/`
- All-in-One Package → `/solutions/all-in-one/`

**Promotions & Coupons** *(Managed via ACPT)*

- Coupons Overview → `/coupons/`
- New Year Sale → `/coupons/new-year-sale/`
- Valentine's Day → `/coupons/valentines/`
- Easter Deals → `/coupons/easter/`
- Financial Year-End → `/coupons/financial-year-end/`
- Small Business Week → `/coupons/small-business-week/`
- Mid-Year Sale → `/coupons/mid-year/`
- Prime Day → `/coupons/prime-day/`
- Back to School → `/coupons/back-to-school/`
- Halloween → `/coupons/halloween/`
- Black Friday → `/coupons/black-friday/`
- Cyber Monday → `/coupons/cyber-monday/`
- Christmas → `/coupons/christmas/`
- Boxing Day → `/coupons/boxing-day/`
- Student Discounts → `/coupons/student/`
- Nonprofit Hosting → `/coupons/nonprofit/`
- Referral Rewards → `/coupons/referral/`
- Flash Deals → `/coupons/flash-deal/`
- New Customer → `/coupons/new-customer/`
- Switch & Save → `/coupons/switch-save/`
- Long-Term Discount → `/coupons/3-year-deal/`
- Website Package Bundle → `/coupons/website-package/`
- Marketing Bundle → `/coupons/marketing-bundle/`
- Complete Solution → `/coupons/complete-solution/`

**Guides** *(WordPress Posts with custom taxonomy)*

- Website Launch Checklist → `/guides/website-launch-checklist/`
- Digital Marketing Basics → `/guides/digital-marketing-basics/`
- Social Media Best Practices → `/guides/social-media-best-practices/`
- Site Migration Checklist → `/guides/migration-checklist/`
- WordPress Security Guide → `/guides/wp-security/`
- The Fine Tuned Formula → `/7-steps-to-90-pagespeed/`

**Support & Knowledge** *(WordPress Posts with custom taxonomy)*

- Knowledge Base → `/knowledge-base/`
- Migrations & Onboarding → `/migrations/`
- FAQs → `/faqs/`
- System Status → `/status/` *(External service embed)*
- Report Abuse → `/legal/report-abuse/`
- Contact Support → `/contact/`
- Client Login → `/login/` *(External link to control panel)*

**Trust & Performance**

- Trust Center → `/trust/`
- Infrastructure → `/infrastructure/`
- Security & DDoS → `/security/`
- Performance & Speed → `/performance/`
- Uptime Status → `/status/`
- Sustainability → `/sustainability/`
- Case Studies → `/case-studies/` *(WordPress Posts)*
- Customer Reviews → `/reviews/` *(Third-party widget embed)*
- Status History → `/status/history/`
- Infrastructure Map → `/infrastructure-map/`
- Accessibility Statement → `/legal/accessibility/`
- CSR → `/csr/`
- AI Policy → `/legal/ai-policy/`

**Company**

- About Us → `/about/`
- Web Design Agency → `/web-design-and-development/`
- Partners → `/partners/`
- Affiliates → `/affiliates/`
- Careers → `/careers/`
- News & Press → `/news/` *(WordPress Posts)*
- Platform Changelog → `/changelog/` *(WordPress Posts)*
- Uptime Reports → `/uptime/`
- Contact Us → `/contact/`
- Leadership/Team → `/team/` *(Displays team_member ACPT)*
- Awards & Certifications → `/awards/`
- Investors → `/investors/`
- Events/Webinars → `/events/` *(WordPress Posts)*
- Newsletter → `/newsletter/`

**Gaming**

- Gaming Hub → `/gaming/`
- COD Mobile Stats → `/gaming/cod-mobile/`
- Gameplay Clips → `/gaming/clips/`
- Setup/Gear → `/gaming/gear/`
- Game Servers (Coming) → `/gaming/servers/`

**Legal & Compliance** *(WordPress Pages with revision history)*

- Legal Overview → `/legal/`
- Terms and Conditions → `/terms-and-conditions/`
- Website Terms of Use → `/legal/website-terms-of-use/`
- Privacy Policy → `/privacy-policy/`
- Cookie Policy → `/legal/cookie-policy/`
- GDPR Compliance → `/gdpr/`
- Data Processing Agreement → `/legal/data-processing-agreement/`
- Acceptable Use Policy → `/legal/acceptable-use-policy/`
- Abuse Policy → `/legal/abuse-policy/`
- DMCA Policy → `/legal/dmca/`
- Affiliate Terms → `/legal/affiliate-terms/`
- Security Disclosure → `/legal/security-responsible-disclosure/`
- Responsible Disclosure → `/legal/responsible-disclosure/`
- Sustainability Statement → `/sustainability/`
- Legal Archive → `/legal/archive/` *(Lists all legal page revisions)*

**Service Level Agreements** *(WordPress Pages)*

- Shared Hosting SLA → `/legal/shared-hosting-sla/`
- WordPress Hosting SLA → `/legal/wordpress-hosting-sla/`
- Cloud Hosting SLA → `/legal/cloud-hosting-sla/`
- VPS SLA → `/legal/vps-service-level-agreement/`
- CDN Services SLA → `/legal/cdn-sla/`

### URL Architecture Standards

- Clean, semantic URLs (no file extensions)
- Kebab-case for all slugs
- Max 3 levels hierarchy depth
- Trailing slashes optional but consistent
- Descriptive, human-readable
- SEO-optimized structure

---

## PAGE STRUCTURE & TEMPLATES

### High-Conversion Hosting Page Layout

Standard 10-part structure for all core product pages (WordPress Hosting, Cloud, VPS, etc.):

| Section | Purpose |
|---------|---------|
| **1. Hero Section** | Value proposition + trust + CTA |
| **2. Feature Summary Grid** | 3-6 key benefits with icons |
| **3. Performance Proof** | Benchmarks, Core Web Vitals |
| **4. Pricing Plans Table** | Monthly/Yearly toggle, "Most Popular" |
| **5. Why Choose Premium** | Differentiators (UK support, uptime, etc.) |
| **6. Testimonials** | Social proof, Trustpilot widget |
| **7. Add-Ons & Upgrades** | CDN, SSL, Email, Site Builder |
| **8. FAQ Section** | 5-8 common questions |
| **9. Final CTA** | Conversion closer |
| **10. Trust/Compliance** | Certifications, GDPR, sustainability |

**Enhancements:**

- Sticky pricing bar after scroll
- Breadcrumb navigation
- Schema.org markup (Product, FAQPage, BreadcrumbList)
- Optional exit-intent CTA (static, no pop-ups)

### Section Inventories by Page Type

**Homepage:**

1. Hero (headline, subheadline, CTA)
2. Partner/trust logo bar
3. Hosting product overview cards
4. "Why Choose Premium" summary
5. Performance/security highlights
6. Testimonials (widget embed)
7. Accessibility/sustainability pledge
8. Featured offer (from ACPT coupon if active)
9. Resource highlights (blog, guides)
10. Footer CTA strip

**Service Pages:**
Use 10-part conversion layout above

**About Us:**

1. Mission/vision statement
2. Company story/timeline
3. Leadership/team profiles (from team_member ACPT)
4. Sustainability/accessibility commitments
5. Awards/certifications
6. Press mentions/case studies
7. CTA to contact/careers

**Contact Page:**

1. Hero ("We're here to help")
2. Accessible contact form
3. Alternative contact methods
4. Map/office information
5. Links to FAQs/support portal

**Blog/Guides/Knowledge Base:**

- **List Page:** Grid of articles (image, title, date, tags, excerpt)
- **Post Page:** Hero, auto-generated TOC, body, related posts, author bio, footer CTA

**Landing Pages (Sales):**
Long-form, high-impact:

1. Hero (value promise + CTA)
2. Problem/solution narrative
3. Social proof/trust signals
4. Deep feature breakdown (visual)
5. Competitor comparison table
6. Bonuses/guarantees
7. Extended testimonials
8. Urgency/limited-time (static)
9. FAQ
10. Final CTA block

**Team Page:**

- Grid display of all team_member ACPT posts
- Photo, name, position, bio
- Social links (LinkedIn, Twitter)
- "Join Our Team" CTA linking to careers page

**Coupon Landing Pages:**

- Dynamically generated from ACPT coupon post type
- Hero with offer headline + countdown timer (if end_date set)
- What's included section
- Terms & conditions
- Related plans/services
- "Claim Offer" CTA with promo code

---

## WORDPRESS HEADLESS CMS ARCHITECTURE

### Complete Data Flow

```
┌─────────────────────────────────────────────────────────┐
│  WordPress CMS (admin.premium-hosting.co.uk)            │
│                                                          │
│  ┌─────────────────┐  ┌──────────────────┐             │
│  │ Standard Content│  │ ACPT Custom Posts│             │
│  │                 │  │                  │             │
│  │ • Pages         │  │ • hosting_plan   │             │
│  │ • Posts         │  │ • cloud_server   │             │
│  │ • Media         │  │ • vps_server     │             │
│  │ • Zynith SEO    │  │ • prodcut_addon  │             │
│  │                 │  │ • coupon         │ ◄── NEW    │
│  │                 │  │ • team_member    │ ◄── NEW    │
│  └────────┬────────┘  └────────┬─────────┘             │
│           │                    │                        │
│      REST API              WPGraphQL                    │
└───────────┼────────────────────┼────────────────────────┘
            │                    │
            ▼                    ▼
┌─────────────────────────────────────────────────────────┐
│  Astro Build Process                                     │
│                                                          │
│  1. Fetch WordPress pages via REST API                  │
│  2. Fetch pricing plans via WPGraphQL                   │
│  3. Fetch coupons via WPGraphQL                         │
│  4. Fetch team members via WPGraphQL                    │
│  5. Fetch SEO/Schema from Zynith via REST               │
│  6. Generate static HTML/CSS/JS                         │
│  7. Output to /dist                                     │
└─────────────────────────┬───────────────────────────────┘
                          │
                          ▼
                    ┌──────────────┐
                    │  Production  │
                    │  Deployment  │
                    └──────────────┘
```

### Content Source Matrix

| Content Type | CMS Source | API | Trigger | Notes |
|-------------|-----------|-----|---------|-------|
| **Pages** | WordPress Pages | REST API | Bit Integrations | About, Contact, Services |
| **Posts** | WordPress Posts | REST API | Bit Integrations | Blog, News, Guides |
| **Media** | Media Library | REST API | Manual | Images, PDFs, videos |
| **Hosting Plans** | ACPT `hosting_plan` | WPGraphQL | Bit Integrations | 9 plans |
| **Cloud Servers** | ACPT `cloud_server` | WPGraphQL | Bit Integrations | 42 configs |
| **VPS Servers** | ACPT `vps_server` | WPGraphQL | Bit Integrations | 9 plans |
| **Addons** | ACPT `prodcut_addon` | WPGraphQL | Bit Integrations | 71 items |
| **Coupons** | ACPT `coupon` | WPGraphQL | Bit Integrations | Seasonal/flash sales |
| **Team** | ACPT `team_member` | WPGraphQL | Bit Integrations | Staff profiles |
| **SEO Meta** | Zynith SEO | REST API | Bit Integrations | Per-page meta |
| **Schema.org** | Zynith SEO | REST API | Bit Integrations | Structured data |
| **Testimonials** | Third-party widget | N/A | N/A | Trustpilot/similar |

### What's NOT from WordPress

**Hardcoded in Astro (Static Assets):**

- Logos (SVG/PNG)
- Favicons
- Fonts (WOFF2 files)
- Brand colors (Tailwind config)
- Component code (Astro/React/Vue)
- Styling (Tailwind CSS classes)
- Build configuration (astro.config.mjs)

---

## ACPT CUSTOM POST TYPES

### Required WordPress Plugins

| Plugin | Version | Purpose |
|--------|---------|---------|
| **WPGraphQL** | 1.27+ | GraphQL API for ACPT data |
| **ACPT Pro** | Latest | Custom post types (pricing, coupons, team) |
| **Zynith SEO** | Latest | Per-page meta + Schema.org |
| **Bit Integrations Pro** | Latest | Webhook rebuild triggers |
| **WPGraphQL CORS** | 2.1+ | CORS headers for build server |

### 1. Hosting Plan (hosting_plan)

**Total Fields:** 90 fields across 11 meta boxes  
**Post Count:** 9 plans  
**GraphQL:** `hostingplan` (single), `hostingplans` (plural)

**Field Groups:**

1. **Basic Info (4):** Plan name, tier, type, PHP version
2. **Core Specs (12):** Pricing (monthly/annual/biennial/triennial), webspace, bandwidth, databases, domains, email accounts
3. **CDN Features (5):** Edge caching, optimization, geo-blocking, statistics, security headers
4. **Web Files (6):** File manager, FTP, backups, website builder, Git
5. **Email (8):** Webmail, DKIM, DMARC, spam filters, migration tools
6. **Web Tools (11):** PHPMyAdmin, cron, redirects, PHP version selector, diagnostics
7. **Domain (10):** DNS management, DNSSEC, WHOIS privacy, nameservers
8. **Security (10):** SSH, SSL (free + custom), malware scanning, hotlink protection
9. **Logs/Stats (4):** AWStats, Webalizer, access logs, mail logs
10. **Sidebar (7):** Account info, usage stats, temp URL, bandwidth graphs
11. **WordPress Features (13):** WP Manager, staging, plugin management (conditional on plan type = WordPress)

**GraphQL Query Example:**

```graphql
query GetAllHostingPlans {
  hostingplans {
    nodes {
      id
      title
      slug
      hostingPlanMeta {
        planName: hosting_plan_name
        planTier: hosting_plan_tier
        planType: hosting_plan_type
        monthlyPrice: hosting_monthly_price {
          currencyValue
          currency
        }
        annualPrice: hosting_annual_price {
          currencyValue
          currency
        }
        webspace: hosting_webspace
        bandwidth: hosting_bandwidth
        securityFreeSsl: hosting_security_free_ssl
        wpStaging: wp_staging
      }
    }
  }
}
```

### 2. Cloud Server (cloud_server)

**Total Fields:** 10 fields across 3 meta boxes  
**Post Count:** 42 configurations  
**GraphQL:** `cloudserver` / `cloudservers`

**Fields:**

- **Plan Info:** Name, tier, data center location
- **Specs:** CPU cores, RAM (GB), NVMe SSD (GB), bandwidth (GB/month)
- **Pricing:** Monthly, annual, bandwidth overage rate (default: £0.50/GB)

**GraphQL Query Example:**

```graphql
query GetAllCloudServers {
  cloudservers {
    nodes {
      id
      title
      slug
      cloudServerMeta {
        planName: cloud_plan_name
        cpuCores: cloud_cpu_cores
        ramGb: cloud_ram_gb
        ssdStorage: cloud_ssd_storage
        priceMonthly: cloud_price_monthly {
          currencyValue
          currency
        }
      }
    }
  }
}
```

### 3. VPS Server (vps_server)

**Total Fields:** 11 fields across 3 meta boxes  
**Post Count:** 9 plans  
**GraphQL:** `vpsserver` / `vpsservers`

**Fields:**

- **Plan Info:** Name, tier (Standard/Business/Enterprise), server location
- **Specs:** Dedicated CPU cores, RAM (GB), SSD (GB), bandwidth (GB/month)
- **Pricing:** Monthly, annual, biennial, triennial

**GraphQL Query Example:**

```graphql
query GetAllVPSServers {
  vpsservers {
    nodes {
      id
      title
      slug
      vpsServerMeta {
        planName: vps_plan_name
        planTier: vps_plan_tier
        cpuCores: vps_cpu_cores
        ramGb: vps_ram_gb
        priceMonthly: vps_price_monthly {
          currencyValue
          currency
        }
      }
    }
  }
}
```

### 4. Product Addon (prodcut_addon)

**Total Fields:** 5 fields across 2 meta boxes  
**Post Count:** 71 addons  
**GraphQL:** `addon` / `addons`

**Fields:**

- **Info:** Name, type (SSL/Domain/Email/CDN/Security), description (textarea)
- **Pricing:** Monthly recurring, annual

**GraphQL Query Example:**

```graphql
query GetAllAddons {
  addons {
    nodes {
      id
      title
      slug
      addonMeta {
        addonName: addon_name
        addonType: addon_type
        addonDescription: addon_description
        priceMonthly: addon_price_monthly {
          currencyValue
          currency
        }
      }
    }
  }
}
```

### 5. Coupon (coupon) - NEW

**Purpose:** Manage all promotional campaigns, seasonal sales, flash deals  
**Total Fields:** 15 fields across 4 meta boxes  
**Post Count:** Variable (30-50 promotions)  
**GraphQL:** `coupon` (single), `coupons` (plural)

**Meta Box 1: Basic Coupon Info (5 fields)**

```
- coupon_name (text) - Display name: "Black Friday Sale"
- coupon_slug (text) - URL slug: "black-friday"
- coupon_type (select) - seasonal, flash, ongoing, referral, student, nonprofit
- promo_code (text) - Actual code: "BF2025" (optional)
- featured_image - Hero image for landing page
```

**Meta Box 2: Discount Settings (4 fields)**

```
- discount_type (select) - percentage, fixed_amount, free_months
- discount_percentage (number) - e.g., 75 (for 75% off)
- discount_amount (currency GBP) - e.g., £50.00 (for fixed discount)
- free_months (number) - e.g., 3 (for "3 months free")
```

**Meta Box 3: Timing & Activation (4 fields)**

```
- start_date (date picker) - 2025-11-24
- end_date (date picker) - 2025-11-30
- active (boolean toggle) - true/false
- priority (number) - 1-100 (higher = shown first if multiple active)
```

**Meta Box 4: Additional Content (2 fields)**

```
- description (wysiwyg) - Landing page hero/intro text
- terms_conditions (wysiwyg) - Legal terms, exclusions, fine print
```

**GraphQL Query:**

```graphql
query GetAllCoupons {
  coupons {
    nodes {
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      couponMeta {
        couponName: coupon_name
        couponType: coupon_type
        promoCode: promo_code
        discountType: discount_type
        discountPercentage: discount_percentage
        discountAmount: discount_amount {
          currencyValue
          currency
        }
        freeMonths: free_months
        startDate: start_date
        endDate: end_date
        active: active
        priority: priority
        description: description
        termsConditions: terms_conditions
      }
    }
  }
}
```

**Astro Build-Time Logic:**

```typescript
// Fetch all coupons at build time
const allCoupons = await fetchCoupons();

// Filter for currently active coupons
const activeCoupons = allCoupons.filter(coupon => {
  const now = new Date();
  const start = new Date(coupon.couponMeta.startDate);
  const end = new Date(coupon.couponMeta.endDate);
  
  return (
    coupon.couponMeta.active === true &&
    now >= start &&
    now <= end
  );
});

// Sort by priority (highest first)
activeCoupons.sort((a, b) => b.couponMeta.priority - a.couponMeta.priority);

// Featured coupon = highest priority active coupon
const featuredCoupon = activeCoupons[0] || null;
```

**Benefits of ACPT Coupons:**

- Marketing team manages in WordPress (no git/code required)
- Automatic activation/deactivation based on dates
- Easy to duplicate for next year's campaigns
- Version history in WordPress
- No manual file editing
- Preview before activation
- Webhook triggers rebuild when published/updated

### 6. Team Member (team_member) - NEW

**Purpose:** Manage staff profiles for About/Team page  
**Total Fields:** 10 fields across 3 meta boxes  
**Post Count:** Variable (5-20 members as company grows)  
**GraphQL:** `teamMember` (single), `teamMembers` (plural)

**Meta Box 1: Basic Info (4 fields)**

```
- full_name (text) - "Richard Chowns"
- position (text) - "Founder & CEO"
- bio (wysiwyg) - Professional bio, background, expertise
- featured_image - Professional headshot (required)
```

**Meta Box 2: Contact & Social (4 fields)**

```
- email (email) - richard@premium-hosting.co.uk (optional)
- linkedin_url (url) - https://linkedin.com/in/...
- twitter_url (url) - https://twitter.com/...
- github_url (url) - https://github.com/... (for developers)
```

**Meta Box 3: Display Settings (2 fields)**

```
- display_order (number) - 1-100 (for sorting on team page)
- featured (boolean) - Show on homepage "Meet the Team" section
```

**GraphQL Query:**

```graphql
query GetAllTeamMembers {
  teamMembers(orderBy: {field: MENU_ORDER, order: ASC}) {
    nodes {
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      teamMemberMeta {
        fullName: full_name
        position: position
        bio: bio
        email: email
        linkedinUrl: linkedin_url
        twitterUrl: twitter_url
        githubUrl: github_url
        displayOrder: display_order
        featured: featured
      }
    }
  }
}
```

**Astro Team Page Implementation:**

```astro
---
import { fetchTeamMembers } from '../utils/wordpress-graphql';

const teamMembers = await fetchTeamMembers();
---

<section class="team-grid">
  {teamMembers.map(member => (
    <div class="team-card">
      <img 
        src={member.featuredImage.node.sourceUrl} 
        alt={member.teamMemberMeta.fullName}
      />
      <h3>{member.teamMemberMeta.fullName}</h3>
      <p class="position">{member.teamMemberMeta.position}</p>
      <div class="bio" set:html={member.teamMemberMeta.bio} />
      
      <div class="social-links">
        {member.teamMemberMeta.linkedinUrl && (
          <a href={member.teamMemberMeta.linkedinUrl}>LinkedIn</a>
        )}
        {member.teamMemberMeta.twitterUrl && (
          <a href={member.teamMemberMeta.twitterUrl}>Twitter</a>
        )}
      </div>
    </div>
  ))}
</section>
```

---

## WORDPRESS PAGES STRATEGY

### Legal & Policy Pages with Version Control

**Problem:** Legal pages need version history for compliance, but also need to be accessible on site for EEAT/Google.

**Solution:** WordPress Pages + Built-in Revision History

**WordPress Features:**

- **Revisions:** WordPress automatically saves every page edit with timestamp
- **Revision Comparison:** Side-by-side diff view of changes
- **Rollback:** Restore any previous version with one click
- **User Tracking:** Shows who made each change
- **Export:** Can export revision history via plugins (e.g., WP All Export)

**Implementation:**

**WordPress Admin:**

1. Create page: Pages → Add New → "Privacy Policy"
2. Write/update content
3. Publish
4. WordPress automatically saves revision
5. View revisions: Pages → Edit → Browse Revisions
6. Compare versions side-by-side
7. Restore previous version if needed

**Astro Fetch:**

```typescript
// Fetch legal page via REST API
const privacyPage = await fetch(
  'https://admin.premium-hosting.co.uk/wp-json/wp/v2/pages?slug=privacy-policy'
).then(res => res.json());

// Display on Astro page
const { title, content, modified } = privacyPage[0];
```

**Legal Archive Page (`/legal/archive/`):**

- Lists all legal pages
- Shows "Last Updated" date for each
- Links to WordPress revision history (for internal use)
- Could display public-facing "Changelog" of major policy updates

**Benefits:**

- ✅ Version control (WordPress revisions)
- ✅ Accessible on site (via REST API)
- ✅ No git/code required for legal team
- ✅ Audit trail (who changed what, when)
- ✅ Easy rollback if error
- ✅ Export capability for compliance
- ✅ EEAT & Google Knowledge Graph friendly

**Recommended Pages as WordPress Pages:**

- All Legal & Compliance pages
- All SLA documents
- Privacy Policy, Terms, Cookie Policy
- Acceptable Use, Abuse Policy, DMCA
- Data Processing Agreement
- Security Disclosure policies

**WordPress Page Template:**

```
Category: Legal
Tags: policy, compliance, gdpr
Template: Legal Page (custom template with "Last Updated" notice)
Zynith SEO: Enabled (for meta + Schema.org LegalDocument)
```

---

## TOOLS & TECHNOLOGY STACK

### Core Stack

**Static Site Generator:** Astro v5.16  
**CMS:** WordPress Headless (admin.premium-hosting.co.uk)  
**Styling:** Tailwind CSS v3.4.18  
**TypeScript:** v5.9.3  
**Package Manager:** pnpm  
**Build Tool:** Vite (via Astro)

### JavaScript Strategy

**Minimal JS Usage:** Total < 50KB

**Allowed for:**

- Accessibility panel (focus trap, preferences)
- Scroll animations (Intersection Observer API)
- Skip link smooth scrolling
- Mobile menu toggle
- Motion detection/enforcement
- Form validation
- Progressive enhancement

**NO Animation Libraries:** No GSAP, Anime.js, Framer Motion (keep bundle small)

### Animation Approach

**CSS-first:** All animations CSS when possible  
**Intersection Observer:** Scroll-triggered reveals  
**requestAnimationFrame:** Complex JS animations  
**Motion Preference:** Detect OS + manual toggle

### Browser Support

**Desktop (Required):**

- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+

**Mobile (Required):**

- Safari iOS 16+
- Chrome Android 12+

**Screen Readers (Required):**

- JAWS 2023+ (Windows)
- NVDA Latest (Windows)
- VoiceOver (macOS 13+, iOS 16+)
- TalkBack (Android 12+)

---

## ACCESSIBILITY STANDARDS

### WCAG 2.2 Level AA Compliance

**Non-Negotiables:**

- ✅ Lighthouse Accessibility: 100/100
- ✅ Zero WCAG 2.2 AA violations
- ✅ 100% keyboard navigation
- ✅ Screen reader compatible
- ✅ Color contrast: 4.5:1 (text), 3:1 (large text, UI)
- ✅ Focus indicators: 2px solid, 3:1 contrast
- ✅ Motion control: OS detection + manual toggle

### Keyboard Navigation

**Requirements:**

- Logical tab order on all pages
- Skip links ("Skip to main content", "Skip to nav", "Skip to footer")
- Visible focus ring (2px solid, 3:1 contrast, uses `:focus-visible`)
- No keyboard traps (ESC exits modals)
- All functionality accessible via keyboard

### Screen Reader Support

**Requirements:**

- Semantic HTML (header, nav, main, aside, footer)
- Proper heading hierarchy (H1-H6, no skips)
- ARIA labels on all interactive elements
- ARIA live regions for dynamic content
- Descriptive alt text (all images)
- Link context without surrounding text
- Form labels associated with inputs
- Status messages announced

### Visual Accessibility

**Color Contrast:**

- Primary text: `#1a1a1a` on `#ffffff` (19.7:1)
- Secondary text: `#4a4a4a` on `#ffffff` (9.8:1)
- Link text: `#0052cc` on `#ffffff` (8.2:1)
- Button primary: `#ffffff` on `#0052cc` (8.2:1)
- Borders/UI: `#767676` on `#ffffff` (4.6:1)

**Requirements:**

- Text readable at 200% zoom (no horizontal scroll)
- Reflow: No 2D scrolling at 320px width
- Text spacing: Support user-defined (1.5x line height, 2x paragraph, 0.12x letter, 0.16x word)
- Tooltips/popovers: Hoverable, dismissable, persistent

### Motion & Animation

**Default:** Animations ENABLED (modern, engaging experience)

**WCAG Compliance via User Control:**

- Automatic: Respect OS `prefers-reduced-motion`
- Manual: Accessibility panel "Reduce Motion" toggle
- Instant: Setting applies immediately site-wide
- Persistent: Saved in localStorage

**Animation Guidelines:**

- No flashing: Nothing flashes >3x per second (WCAG 2.3.1)
- Pause controls: Auto-playing content has pause button (WCAG 2.2.2)
- Meaningful: Animations enhance UX, don't distract
- Performance: 60fps smooth
- Reduced fallback: Instant state changes or fade-only

**Motion Actuation (WCAG 2.5.4):**

- No motion-only controls (shake to undo, tilt to scroll)
- All motion features must have button/tap alternative

### Accessibility Control Panel

**Trigger:** Fixed top-right button, keyboard shortcut (Ctrl/Cmd + Alt + A)

**Controls:**

- **Font Size:** Small (14px), Medium (16px), Large (18px), Extra Large (20px)
- **Contrast:** Default, High Light, High Dark, Dark Mode
- **Motion:** Reduce Motion toggle
- **Spacing:** Line spacing, letter spacing toggles
- **Links:** Underline all links toggle
- **Reading Aids:** Reading guide, enhanced focus indicators

**Modal Requirements:**

- Focus trapped within modal
- First focusable element receives focus on open
- Focus returns to trigger on close
- ESC to close
- Backdrop click to close (optional)
- Screen reader announcements
- Scrollable content if exceeds viewport

**Preference Persistence:**

- Storage: localStorage
- Expiration: Never (until user clears)
- Scope: Site-wide, immediate application
- Reset: Button to restore defaults

---

## SEO & SCHEMA.ORG

### On-Page SEO Requirements

**Every Page Must Have:**

- Unique title tag (<60 chars)
- Meta description (<160 chars)
- Semantic HTML (aids SEO)
- Descriptive, clean URLs
- Fast load times (<2s)
- Mobile-friendly responsive design
- **Schema.org JSON-LD markup** (REQUIRED)

### Schema.org Implementation

**REQUIRED on Every Page:**

- Organization (site-wide, referenced via @id)
- WebSite (homepage only)
- WebPage (all pages)
- BreadcrumbList (navigation hierarchy)

**Content-Specific Schemas:**

- Article (blog posts)
- FAQPage (FAQ sections)
- ContactPage (contact page)
- AboutPage (about page)
- Person (team members)
- Product (hosting plans)
- Offer (pricing, coupons)

**Schema Priority:**

- **Critical:** Organization, WebSite, WebPage, BreadcrumbList
- **High:** Article, ContactPage, AboutPage, FAQPage
- **Medium:** Person, Service, Product
- **Optional:** Review, Rating, Event

### Zynith SEO Integration

**Plugin:** Zynith SEO (WordPress)  
**Purpose:** Manage per-page SEO meta + Schema.org

**REST API Endpoints:**

```
GET /wp-json/zynith/v1/seo/{post_id}
GET /wp-json/zynith/v1/schema/{post_id}
```

**Response Structure:**

```json
{
  "title": "WordPress Hosting | Premium Hosting",
  "meta_description": "Fast, secure WordPress hosting...",
  "canonical_url": "https://premium-hosting.co.uk/wordpress/",
  "og_title": "WordPress Hosting",
  "og_image": "https://cdn.example.com/og-image.jpg",
  "schema": [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "WordPress Hosting"
    }
  ]
}
```

### Technical SEO

**XML Sitemap:** Auto-generated (`@astrojs/sitemap`)  
**robots.txt:**

```
User-agent: *
Allow: /
Sitemap: https://premium-hosting.co.uk/sitemap-index.xml
```

---

## CONTENT GENERATION FRAMEWORKS

### Universal Content Standards

**Entity-First Strategy:**

- Lead with service/product names
- Company → service → customer → location relationships

**Voice Requirements:**

- First-person plural: "We provide", "Our services"
- Professional yet approachable
- Direct and clear
- Customer-focused (benefits over features)
- Active voice throughout
- British English

**Quality Standards:**

- Reading level: 7th-9th grade
- Paragraph length: 3-4 sentences max (mobile-first)
- Clear hierarchy: Proper H1-H6
- No prohibited language

### Prohibited Words (Strictly Forbidden)

**Marketing Fluff:** innovative, cutting-edge, game-changing, revolutionize, seamless, leverage, unlock, unleash, elevate, enhance, optimize, utilize, comprehensive, robust, dynamic, synergy

**Corporate Speak:** furthermore, moreover, in conclusion, significantly, essentially, notably, predominantly, undoubtedly, meticulously, paradigm, framework

**Generic Claims:** best, greatest, leading, top, premier, excellence, quality, superior (unless provable)

### CTA Strategy - First Person Possessive

**Primary CTAs:** Use possessive language

- ✅ "Get my free quote"
- ✅ "Start my project"
- ✅ "Book my consultation"
- ❌ "Get a quote"
- ❌ "Get your free quote"

**Exceptions:** Navigational CTAs

- "View our services"
- "Learn more"
- "Contact us"

---

## COMPETITIVE INTELLIGENCE

### Primary Competitors

**Direct:**

- 20i (upstream supplier & benchmark)
- Krystal Hosting (UK premium/green)
- SiteGround, Hostinger, GoDaddy, Bluehost
- A2 Hosting, InMotion, IONOS, OVHcloud
- DigitalOcean, Linode, Vultr
- AWS, GCP, Azure, Hetzner
- Liquid Web, WP Engine, Kinsta, Cloudways

### Key Differentiators

- Premium experience + 99.9%+ uptime guarantee
- 24/7 UK-based expert support
- Free migrations & setup
- Advanced security included
- Performance-optimized infrastructure
- 100% green hosting

### SEO Strategy

**Primary Keywords:**
web hosting, website hosting, uk web hosting, premium web hosting, managed hosting, green web hosting

**Technical Keywords:**
nvme ssd hosting, nginx hosting, cdn hosting, auto ssl, ddos protection, malware scanning

---

## BUILD & DEPLOYMENT

### GitHub Actions Workflow

**File:** `.github/workflows/deploy.yml`

```yaml
name: Build and Deploy

on:
  repository_dispatch:
    types: [wordpress_content_updated]
  workflow_dispatch:
  schedule:
    - cron: '0 2 * * *'  # Daily 2 AM UTC
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - run: pnpm install
      - run: pnpm run build
        env:
          WP_REST_API: ${{ secrets.WP_REST_API }}
          WPGRAPHQL_ENDPOINT: ${{ secrets.WPGRAPHQL_ENDPOINT }}
      - run: rsync -avz --delete dist/ user@server:/var/www/premium-hosting.co.uk/
```

### Environment Variables

```bash
WP_REST_API=https://admin.premium-hosting.co.uk/wp-json
WPGRAPHQL_ENDPOINT=https://admin.premium-hosting.co.uk/graphql
SITE_URL=https://premium-hosting.co.uk
NODE_ENV=production
```

---

## TESTING & QUALITY ASSURANCE

### Automated Testing

**Accessibility:**

- axe-core v4.x (CI/CD)
- Pa11y CI (WCAG compliance)
- Lighthouse CI (accessibility + performance)

**Manual Testing:**

- Keyboard navigation
- Screen readers (JAWS, NVDA, VoiceOver)
- Cross-browser (Chrome, Firefox, Safari, Edge)
- Mobile (iOS, Android)

### Performance Budget

**Core Web Vitals:**

- FCP: <1.2s
- LCP: <2.5s
- CLS: <0.1

**Lighthouse Minimums:**

- Performance: 90+
- Accessibility: 100
- Best Practices: 95+
- SEO: 100

---

## LAUNCH CHECKLIST

### Pre-Launch (WordPress)

- [ ] WPGraphQL plugin installed
- [ ] ACPT Pro configured (6 custom post types)
- [ ] Zynith SEO configured
- [ ] Bit Integrations webhook configured
- [ ] Hosting plans published (9)
- [ ] Cloud servers published (42)
- [ ] VPS servers published (9)
- [ ] Addons published (71)
- [ ] Coupons created (as needed)
- [ ] Team members added (all staff)
- [ ] Legal pages published with revisions enabled
- [ ] Test webhook trigger

### Pre-Launch (Technical)

- [ ] Build succeeds locally
- [ ] GraphQL queries return data
- [ ] REST API accessible
- [ ] All pages generate correctly

### Pre-Launch (Accessibility)

- [ ] Lighthouse Accessibility: 100/100
- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Motion preferences working

### Pre-Launch (SEO)

- [ ] Schema.org validated
- [ ] XML sitemap generated
- [ ] All pages have unique titles

### Post-Launch

- [ ] Monitor build triggers
- [ ] Verify webhook success
- [ ] Test content update cycle

---

**END OF COMPLETE TECHNICAL PRD v2.1**

*This document is the single source of truth. All content managed in WordPress CMS. No local markdown files except static assets.*
