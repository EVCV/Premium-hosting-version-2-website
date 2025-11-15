import { z } from "zod";

// Base pricing schema
const pricingSchema = z.object({
  monthly: z.number().positive(),
  annually: z.number().positive(),
  biennially: z.number().positive(),
  triennially: z.number().positive(),
});

// Specifications schema
const hostingSpecificationsSchema = z.object({
  webspace: z.number().positive(),
  bandwidth: z.number().positive(),
  mysql: z.number().nonnegative(),
  subdomains: z.number().nonnegative(),
  additionalFtp: z.number().nonnegative(),
  additionalDomains: z.number().nonnegative(),
  totalDomains: z.number().positive().optional(),
  mailboxes: z.number().nonnegative().optional(),
});

// Feature schemas
const cdnFeaturesSchema = z.object({
  edgeCaching: z.boolean(),
  websiteOptimisationSuite: z.boolean(),
  blockVisitors: z.boolean(),
  cdnStatistics: z.boolean(),
  securityHeaders: z.boolean(),
});

const webFilesFeaturesSchema = z.object({
  fileManager: z.boolean(),
  ftpAccounts: z.boolean(),
  backupRestore: z.boolean(),
  websiteBuilder: z.boolean(),
  filePermission: z.boolean(),
  gitVersionControl: z.boolean(),
});

const emailFeaturesSchema = z.object({
  setNotificationThreshold: z.boolean(),
  catchAllForwarders: z.boolean(),
  junkMailFilters: z.boolean(),
  webmail: z.boolean(),
  emailSummary: z.boolean(),
  emailMigration: z.boolean(),
  domainkeysDkim: z.boolean(),
  dmarcWizard: z.boolean(),
});

const webToolsFeaturesSchema = z.object({
  phpmyadmin: z.boolean(),
  remoteMysqlAccess: z.boolean(),
  changePhpVersion: z.boolean(),
  phpConfiguration: z.boolean(),
  scheduledTasks: z.boolean(),
  webRedirects: z.boolean(),
  sitemapGenerator: z.boolean(),
  customErrors: z.boolean(),
  autoDiagnostics: z.boolean(),
  maintenanceMode: z.boolean(),
  manageApplicationPool: z.boolean().optional(),
});

const domainNamesFeaturesSchema = z.object({
  changeNameservers: z.boolean(),
  domainPrivacy: z.boolean(),
  manageContacts: z.boolean(),
  manageDns: z.boolean(),
  dnssec: z.boolean(),
  transferAway: z.boolean(),
  whois: z.boolean(),
  customDocRootAllDomains: z.boolean(),
  customDocRootPrimaryDomain: z.boolean(),
  makePrimaryDomain: z.boolean(),
});

const securityFeaturesSchema = z.object({
  sshAccess: z.boolean(),
  hotlinkProtection: z.boolean(),
  freeSsl: z.boolean(),
  allowExternalSsl: z.boolean(),
  passwordProtection: z.boolean(),
  directoryIndexing: z.boolean(),
  malwareScan: z.boolean(),
  malwareReport: z.boolean(),
  autoActivateFreeSsl: z.boolean(),
  allowForceSslRedirect: z.boolean(),
});

const logsAndStatisticsFeaturesSchema = z.object({
  awstats: z.boolean(),
  webalizer: z.boolean(),
  accessErrorLogs: z.boolean(),
  mailLogs: z.boolean(),
});

const sidebarFeaturesSchema = z.object({
  accountInformation: z.boolean(),
  temporaryUrl: z.boolean(),
  primaryFtpLock: z.boolean(),
  usageInformation: z.boolean(),
  nameserversSetup: z.boolean(),
  viewBandwidthStats: z.boolean(),
  viewDiskUsageStats: z.boolean(),
});

const generalInformationFeaturesSchema = z.object({
  googleTranslate: z.boolean(),
});

const emailLimitsSchema = z.object({
  emailAccounts: z.number().nonnegative(),
  emailForwarding: z.union([z.string(), z.number()]),
  emailAutoresponders: z.union([z.string(), z.number()]),
  maxMailboxSize: z.string(),
  lowEmailNotification: z.number().nonnegative(),
  highEmailNotification: z.number().nonnegative(),
});

const wordpressFeaturesSchema = z.object({
  coreChecksumReport: z.boolean(),
  wordpressAdminQuickLink: z.boolean(),
  manageAdminUsers: z.boolean(),
  managePlugins: z.boolean(),
  manageThemes: z.boolean(),
  manageUsers: z.boolean(),
  manageWordpressUpdates: z.boolean(),
  reinstallWordpress: z.boolean(),
  wordpressDatabaseManagement: z.boolean(),
  wordpressSiteSettings: z.boolean(),
  wordpressStaging: z.boolean(),
  wordpressManager: z.boolean(),
  wordpressSearchAndReplace: z.boolean(),
});

// Hosting package features schema
const hostingFeaturesSchema = z.object({
  cdn: cdnFeaturesSchema,
  webFiles: webFilesFeaturesSchema,
  email: emailFeaturesSchema,
  webTools: webToolsFeaturesSchema,
  domainNames: domainNamesFeaturesSchema,
  security: securityFeaturesSchema,
  logsAndStatistics: logsAndStatisticsFeaturesSchema,
  sidebar: sidebarFeaturesSchema,
  generalInformation: generalInformationFeaturesSchema,
  emailLimits: emailLimitsSchema,
  wordpressFeatures: wordpressFeaturesSchema.optional(),
  oneClickInstallers: z.string().optional(),
  defaultPhpVersion: z.string().optional(),
});

// Hosting package schema
const hostingPackageSchema = z.object({
  name: z.string(),
  pricing: pricingSchema,
  specifications: hostingSpecificationsSchema,
  features: hostingFeaturesSchema,
});

// Hosting packages schema
const hostingPackagesSchema = z.object({
  windows: z.object({
    starter: hostingPackageSchema,
    growth: hostingPackageSchema,
    scale: hostingPackageSchema,
  }),
  linux: z.object({
    starter: hostingPackageSchema,
    growth: hostingPackageSchema,
    scale: hostingPackageSchema,
  }),
  wordpress: z.object({
    starter: hostingPackageSchema,
    growth: hostingPackageSchema,
    scale: hostingPackageSchema,
  }),
});

// VPS instance schema
const vpsInstanceSchema = z.object({
  name: z.string(),
  specification: z.string(),
  cores: z.number().positive(),
  ram: z.number().positive(),
  ssd: z.number().positive(),
  bandwidth: z.number().positive(),
  resellerPrice: z.number().positive(),
  price: z.number().positive(),
  markup: z.number().positive(),
});

// VPS location schema
const vpsLocationSchema = z.object({
  name: z.string(),
  instances: z.object({
    mini: vpsInstanceSchema,
    small: vpsInstanceSchema,
    medium: vpsInstanceSchema,
    large: vpsInstanceSchema,
    xLarge: vpsInstanceSchema,
    "2xLarge": vpsInstanceSchema,
    "4xLarge": vpsInstanceSchema,
  }),
});

// VPS instances schema
const vpsInstancesSchema = z.object({
  locations: z.object({
    london: vpsLocationSchema,
    dallas: vpsLocationSchema,
    losAngeles: vpsLocationSchema,
    miami: vpsLocationSchema,
    washingtonDC: vpsLocationSchema,
    frankfurt: vpsLocationSchema,
  }),
  resourcePricing: z.object({
    bandwidthOverage: z.object({
      resellerPricePerGB: z.number().positive(),
      pricePerGB: z.number().positive(),
      markupPerGB: z.number().positive(),
    }),
  }),
});

// Hosting addons schema
const hostingAddonSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
  billing: z.string(),
});

// VPS cPanel schema
const vpsCPanelSchema = z.object({
  starterLite: z.object({
    name: z.string(),
    sites: z.number().positive(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  starterPro: z.object({
    name: z.string(),
    sites: z.number().positive(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  growth: z.object({
    name: z.string(),
    sites: z.number().positive(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  scaleLite: z.object({
    name: z.string(),
    sites: z.number().positive(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  scalePro: z.object({
    name: z.string(),
    sites: z.number().positive(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
});

// VPS additional IP schema
const vpsAdditionalIPSchema = z.object({
  name: z.string(),
  monthlyPrice: z.number().positive(),
  yearlyPrice: z.number().positive(),
});

// VPS backup schema
const vpsBackupSchema = z.object({
  starterLite: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  starter: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  starterPro: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  growthLite: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  growth: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  growthPro: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  scaleLite: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  scale: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  scalePro: z.object({
    name: z.string(),
    vpsSize: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
});

// VPS Windows licenses schema
const vpsWindowsLicensesSchema = z.object({
  server2016: z.object({
    name: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
  vpsStarterPro: z.object({
    name: z.string(),
    monthlyPrice: z.number().positive(),
    yearlyPrice: z.number().positive(),
  }),
});

// VPS additional disk schema
const vpsAdditionalDiskSchema = z.record(
  z.string(),
  z.object({
    name: z.string(),
    size: z.number().positive(),
    price: z.number().positive(),
    billing: z.string(),
  })
);

// VPS addons schema
const vpsAddonsSchema = z.object({
  cPanel: vpsCPanelSchema,
  additionalIp: vpsAdditionalIPSchema,
  backups: vpsBackupSchema,
  windowsLicenses: vpsWindowsLicensesSchema,
  additionalDisk: vpsAdditionalDiskSchema,
});

// Addons schema
const addonsSchema = z.object({
  hostingAddons: z.object({
    additionalMailboxQuota: hostingAddonSchema,
    malwareScanning: hostingAddonSchema,
    additionalMssqlDatabase: hostingAddonSchema,
    premiumMailbox: hostingAddonSchema,
    websiteBoost: hostingAddonSchema,
  }),
  vpsAddons: vpsAddonsSchema,
});

// Export types
export type HostingPackages = z.infer<typeof hostingPackagesSchema>;
export type VPSInstances = z.infer<typeof vpsInstancesSchema>;
export type Addons = z.infer<typeof addonsSchema>;

// Export schemas
export {
  hostingPackagesSchema,
  vpsInstancesSchema,
  addonsSchema,
  pricingSchema,
  hostingSpecificationsSchema,
  hostingFeaturesSchema,
  vpsInstanceSchema,
  vpsLocationSchema,
  hostingAddonSchema,
};
