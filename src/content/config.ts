import { defineCollection, z } from "astro:content";

// Page collection for main website pages
const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  template: z.string(),
  sections: z.array(z.object({
    type: z.string(),
    content: z.record(z.any())
  })).optional()
});

// Blog collection for blog posts
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  updatedDate: z.date().optional(),
  heroImage: z.string().optional(),
  tags: z.array(z.string()).default([]),
  author: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    image: z.string().optional(),
  }),
  draft: z.boolean().default(false),
});

// Legal collection for compliance pages
const legalSchema = z.object({
  title: z.string(),
  description: z.string(),
  lastUpdated: z.date(),
  category: z.enum(['privacy', 'terms', 'legal', 'compliance']),
});

// Coupons collection for promotional content
const couponsSchema = z.object({
  title: z.string(),
  description: z.string(),
  discountType: z.enum(['percentage', 'fixed', 'free_trial']),
  discountValue: z.union([z.number(), z.string()]),
  validFrom: z.date(),
  validTo: z.date(),
  applicableServices: z.array(z.string()),
  terms: z.string(),
  code: z.string().optional(),
});

// Guides collection for help documentation
const guidesSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  timeToRead: z.number(),
  tags: z.array(z.string()).default([]),
});

// Solutions collection for industry solutions
const solutionsSchema = z.object({
  title: z.string(),
  description: z.string(),
  industry: z.string(),
  benefits: z.array(z.string()),
  caseStudy: z.string().optional(),
});

// Services collection for hosting services
const servicesSchema = z.object({
  title: z.string(),
  description: z.string(),
  serviceType: z.enum(['shared', 'vps', 'cloud', 'wordpress', 'dedicated', 'reseller']),
  pricingTier: z.string(),
  features: z.array(z.string()),
  recommendedFor: z.array(z.string()),
});

export const collections = {
  pages: defineCollection({
    type: "content",
    schema: pageSchema
  }),
  blog: defineCollection({
    type: "content",
    schema: blogSchema
  }),
  legal: defineCollection({
    type: "content",
    schema: legalSchema
  }),
  coupons: defineCollection({
    type: "content",
    schema: couponsSchema
  }),
  guides: defineCollection({
    type: "content",
    schema: guidesSchema
  }),
  solutions: defineCollection({
    type: "content",
    schema: solutionsSchema
  }),
  services: defineCollection({
    type: "content",
    schema: servicesSchema
  }),
};

export type Page = z.infer<typeof pageSchema>;
export type BlogPost = z.infer<typeof blogSchema>;
export type LegalPage = z.infer<typeof legalSchema>;
export type Coupon = z.infer<typeof couponsSchema>;
export type Guide = z.infer<typeof guidesSchema>;
export type Solution = z.infer<typeof solutionsSchema>;
export type Service = z.infer<typeof servicesSchema>;
