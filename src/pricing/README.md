# Premium Hosting Pricing Data

This directory contains structured pricing data for Premium Hosting's complete product catalog, organized for easy consumption by Astro components and pages.

## 📁 File Structure

```
examples/pricing/
├── hosting-packages.json    # Windows, Linux, and WordPress hosting packages
├── vps-instances.json       # VPS instances across all global locations
├── addons.json             # Hosting and VPS add-on products
├── pricing-schema.ts       # Zod validation schemas and TypeScript types
└── README.md              # This documentation
```

## 📊 Data Organization

### Hosting Packages (`hosting-packages.json`)

Contains three main categories of hosting packages:

- **Windows Pro**: Windows-based hosting with IIS Application Pool management
- **Linux Pro**: Linux-based hosting with one-click installers
- **WordPress Pro**: Optimized WordPress hosting with specialized management tools

Each category includes three tiers:
- **Starter**: Entry-level packages for small websites
- **Growth**: Mid-tier packages for growing businesses
- **Scale**: High-tier packages for enterprise needs

### VPS Instances (`vps-instances.json`)

Contains VPS instances across 6 global locations:
- London (UK)
- Dallas, TX
- Los Angeles, CA
- Miami, FL
- Washington, DC
- Frankfurt, Germany

Each location offers 7 instance sizes:
- Mini (1 Core / 1GB RAM)
- Small (1 Core / 2GB RAM)
- Medium (2 Core / 4GB RAM)
- Large (4 Core / 8GB RAM)
- X Large (8 Core / 16GB RAM)
- 2X Large (12 Core / 32GB RAM)
- 4X Large (16 Core / 32GB RAM)

### Add-ons (`addons.json`)

Contains additional products that can be purchased alongside hosting/VPS:

**Hosting Add-ons:**
- Additional mailbox quota
- Malware scanning
- Additional MSSQL databases
- Premium mailbox features
- Website boost services

**VPS Add-ons:**
- cPanel licenses (multiple tiers)
- Additional IP addresses
- Backup solutions (size-based pricing)
- Windows Server licenses
- Additional disk space (50GB - 2000GB)

## 🔧 TypeScript Integration

### Schema Validation

All pricing data is validated using Zod schemas defined in `pricing-schema.ts`:

```typescript
import { hostingPackagesSchema, vpsInstancesSchema, addonsSchema } from './pricing-schema';

// Validate data at runtime
const hostingData = hostingPackagesSchema.parse(hostingPackagesJson);
const vpsData = vpsInstancesSchema.parse(vpsInstancesJson);
const addonsData = addonsSchema.parse(addonsJson);
```

### Type Safety

Full TypeScript support with inferred types:

```typescript
import type { HostingPackages, VPSInstances, Addons } from './pricing-schema';

// Strongly typed data
const hosting: HostingPackages = await fetch('/pricing/hosting-packages.json').then(r => r.json());
```

## 🚀 Usage Examples

### Loading Pricing Data in Astro Components

```astro
---
// src/components/PricingTable.astro
import hostingPackages from '../../examples/pricing/hosting-packages.json';
import type { HostingPackages } from '../../examples/pricing/pricing-schema';

const packages: HostingPackages = hostingPackages;
---

<div class="pricing-grid">
  {Object.entries(packages).map(([platform, tiers]) => (
    <div class="platform-section">
      <h2>{platform.charAt(0).toUpperCase() + platform.slice(1)} Hosting</h2>
      {Object.entries(tiers).map(([tier, data]) => (
        <div class="pricing-card">
          <h3>{data.name}</h3>
          <div class="price">£{data.pricing.monthly}/month</div>
          <ul>
            <li>{data.specifications.webspace} MB Webspace</li>
            <li>{data.specifications.bandwidth} MB Bandwidth</li>
            <li>{data.specifications.mysql} MySQL Databases</li>
          </ul>
        </div>
      ))}
    </div>
  ))}
</div>
```

### VPS Instance Selection

```typescript
// src/utils/vpsPricing.ts
import vpsInstances from '../examples/pricing/vps-instances.json';
import type { VPSInstances } from '../examples/pricing/pricing-schema';

export function getVPSPrice(location: keyof VPSInstances['locations'], size: string) {
  const instance = vpsInstances.locations[location].instances[size as keyof typeof vpsInstances.locations.london.instances];
  return {
    monthly: instance.price,
    reseller: instance.resellerPrice,
    markup: instance.markup
  };
}
```

### Add-on Calculations

```typescript
// src/utils/addonPricing.ts
import addons from '../examples/pricing/addons.json';

export function calculateTotalWithAddons(basePrice: number, selectedAddons: string[]) {
  let total = basePrice;

  selectedAddons.forEach(addonKey => {
    const addon = addons.hostingAddons[addonKey as keyof typeof addons.hostingAddons];
    if (addon) {
      total += addon.price;
    }
  });

  return total;
}
```

## 🎨 Brand Alignment

All pricing data follows Premium Hosting's brand guidelines:

- **Gold (#D4AF37)**: Primary accent color for premium pricing highlights
- **Black (#000000)**: Primary text and professional presentation
- **Professional Tone**: Technical accuracy with customer-focused benefits
- **Transparent Pricing**: Clear display of all costs and billing cycles
- **UK-Based Excellence**: Emphasis on reliability and personal service

## 📈 Pricing Structure

### Billing Cycles

All packages support multiple billing cycles:
- **Monthly**: Highest per-unit cost
- **Annually**: ~17% discount vs monthly
- **Biennially**: ~20% discount vs monthly
- **Triennially**: ~25% discount vs monthly

### VPS Pricing Model

- **Reseller Price**: Wholesale cost from upstream providers
- **End User Price**: Retail price with markup
- **Transparent Markup**: Clear profit margins for reseller relationships

### Add-on Pricing

- **Monthly Billing**: Recurring services (malware scanning, backups)
- **One-time/Yearly**: Setup fees and annual licenses (cPanel, Windows licenses)

## 🔄 Data Updates

### Version Control

Pricing data should be versioned alongside code changes:

```bash
# Update pricing data
git add examples/pricing/
git commit -m "feat: update Q4 2025 pricing - 15% increase across all packages"
```

### Validation Checks

Before deploying pricing changes:

```typescript
// Validate all pricing data
import { hostingPackagesSchema, vpsInstancesSchema, addonsSchema } from './pricing-schema';

// Run validation
const validatePricing = () => {
  try {
    hostingPackagesSchema.parse(hostingPackages);
    vpsInstancesSchema.parse(vpsInstances);
    addonsSchema.parse(addons);
    console.log('✅ All pricing data is valid');
  } catch (error) {
    console.error('❌ Pricing validation failed:', error);
  }
};
```

## 📋 Template Status

**IMPORTANT: This directory serves as a TEMPLATE that will be fully adjusted during the website build process.**

### Build-Time Processing
- Pricing data is automatically processed and integrated into the live site
- Values are updated based on current market conditions and business requirements
- Schema validation ensures data integrity before deployment
- Promotional pricing overlays are applied dynamically

### Development vs Production
- **Development**: This template data supports development and testing
- **Production**: Build process replaces template data with current pricing
- **Updates**: Pricing changes are versioned alongside code changes

## 📋 Maintenance Checklist

- [ ] Validate all JSON files against Zod schemas
- [ ] Update pricing quarterly based on market conditions
- [ ] Review markup percentages for profitability
- [ ] Ensure feature matrices match actual service capabilities
- [ ] Update TypeScript types when schema changes
- [ ] Test pricing calculations in all billing cycles
- [ ] Verify VPS specifications match available instances
- [ ] Confirm add-on compatibility with base packages

## 🏷️ Support & Documentation

For questions about pricing data structure or implementation:

- **Technical Support**: development@premium-hosting.co.uk
- **Sales Support**: sales@premium-hosting.co.uk
- **Documentation**: See BRAND_REFERENCE.md for complete brand guidelines

---

**Premium Hosting** - Engineered for Excellence
