# Content Generation Workflow PRP

## Overview
Automated content generation pipeline for Premium Hosting website that transforms page templates into fully optimized, WCAG 2.2 Level AA compliant content using specialized prompts and MCP tools.

**MANDATORY REQUIREMENTS:**
- Source all page data from `examples/pages/` directory
- Use appropriate prompts from `DEVELOPMENT/` directory
- Generate content for Astro content collections system
- Maintain design system (gold/black/white, 3D effects)
- Ensure WCAG 2.2 Level AA compliance
- Follow .clinerules/CLINE.md guidelines

## Implementation Tasks

### Phase 1: Core Infrastructure Setup

#### 1.1 Content Classification Engine
**Creates the routing logic for page type detection**
- Description: Build intelligent page classification system
- Files to create: `src/utils/contentRouter.ts`
- Dependencies: None
- Estimated effort: 2 hours

```typescript
// src/utils/contentRouter.ts
export type PageType = 'homepage' | 'service' | 'landing';

export interface PageData {
  slug: string;
  title: string;
  frontmatter: Record<string, any>;
  content?: string;
}

export function classifyPage(pageSlug: string, frontmatter: any): PageType {
  // Homepage detection
  if (pageSlug === '/' || pageSlug === '/homepage' || frontmatter.slug === '/') {
    return 'homepage';
  }

  // Landing page detection (offers, promotions, CTAs)
  const landingKeywords = [
    'free-', 'coupon', 'deal', 'offer', 'audit', 'consultation',
    'discount', 'special', 'bundle', 'package', 'guide', 'checklist'
  ];
  if (landingKeywords.some(keyword => pageSlug.includes(keyword))) {
    return 'landing';
  }

  // Service page detection (hosting, marketing, development services)
  const serviceKeywords = [
    'hosting', 'marketing', 'development', 'design', 'seo', 'ssl',
    'domain', 'email', 'security', 'support', 'analytics', 'performance'
  ];
  if (serviceKeywords.some(keyword => pageSlug.includes(keyword))) {
    return 'service';
  }

  // Default to service page for business pages
  return 'service';
}
```

#### 1.2 Prompt Management System
**Loads and manages the three specialized prompts**
- Description: Create prompt loading and variable mapping system
- Files to create: `src/generators/promptManager.ts`
- Dependencies: Content router
- Estimated effort: 3 hours

```typescript
// src/generators/promptManager.ts
import { readFileSync } from 'fs';
import { join } from 'path';

export interface PromptConfig {
  template: string;
  variables: Record<string, string>;
}

export class PromptManager {
  private static prompts: Map<string, string> = new Map();

  static loadPrompt(type: 'homepage' | 'service' | 'landing'): string {
    if (!this.prompts.has(type)) {
      const promptPath = join(process.cwd(), 'DEVELOPMENT',
        type === 'homepage' ? 'HOMEPAGE PROMPT.txt' :
        type === 'service' ? 'SERVICE PAGE PROMPT VER 3.txt' :
        'LANDING PAGE PROMPT'
      );
      this.prompts.set(type, readFileSync(promptPath, 'utf-8'));
    }
    return this.prompts.get(type)!;
  }

  static createConfig(pageType: string, variables: Record<string, string>): PromptConfig {
    return {
      template: this.loadPrompt(pageType as any),
      variables
    };
  }
}
```

#### 1.3 Variable Mapping System
**Maps page data to prompt variables**
- Description: Create variable extraction and mapping functions
- Files to create: `src/generators/variableMapper.ts`
- Dependencies: Content router, prompt manager
- Estimated effort: 4 hours

```typescript
// src/generators/variableMapper.ts
import { PageData } from '../utils/contentRouter';

export function mapHomepageVariables(pageData: PageData): Record<string, string> {
  return {
    '[COMPANY_NAME]': 'Premium Hosting',
    '[INDUSTRY]': 'Web Hosting & Digital Services',
    '[CORE_SERVICES]': 'web hosting, domain registration, website development, digital marketing',
    '[TARGET_AUDIENCE]': 'businesses and individuals',
    '[LOCATION]': 'UK-wide with global reach',
    '[YEARS_TRADING]': '10+ years',
    '[KEY_CREDENTIALS]': 'ISO 27001 certified, 24/7 UK support',
    '[UNIQUE_APPROACH]': 'premium experience, guaranteed uptime, expert support',
    '[PRIMARY_SEARCH_INTENT]': 'find premium web hosting services in the UK',
    '[RAW_COMPETITOR_HEADINGS_LIST]': '["Our Services", "Why Choose Us?", "Hosting Plans", "Features", "Support", "Security", "Performance"]',
    '[SECONDARY_ENTITIES_&_SUBTOPICS]': 'shared hosting, VPS hosting, dedicated servers, SSL certificates, domain registration, website builders',
    '[PEOPLE_ALSO_ASK_QUESTIONS]': '"What is web hosting?", "How much does hosting cost?", "What is the best hosting provider?"',
    '[RAW_COMPETITOR_DIFFERENTIATOR_TEXT]': '"99.9% uptime guarantee", "24/7 expert support", "Free SSL certificates included", "30-day money back guarantee"'
  };
}

export function mapServiceVariables(pageData: PageData): Record<string, string> {
  const serviceName = extractServiceName(pageData.slug);
  return {
    '[SERVICE]': serviceName,
    '[INDUSTRY]': determineIndustry(serviceName),
    '[TARGET_AUDIENCE]': 'businesses and individuals',
    '[SERVICE_DURATION]': 'varies by service',
    '[PRICE_INDICATOR]': 'competitive pricing',
    '[LOCATION]': 'UK-wide',
    '[CREDENTIALS]': 'ISO 27001 certified',
    '[CURRENT_SEASON]': new Date().getMonth() < 3 ? 'Winter' :
                      new Date().getMonth() < 6 ? 'Spring' :
                      new Date().getMonth() < 9 ? 'Summer' : 'Autumn'
  };
}

export function mapLandingVariables(pageData: PageData): Record<string, string> {
  const offerName = extractOfferName(pageData.slug);
  return {
    '[OFFER_ENTITY]': offerName,
    '[OFFER_TYPE]': determineOfferType(pageData.slug),
    '[SERVICE]': extractRelatedService(pageData.slug),
    '[INDUSTRY]': 'Web Hosting & Digital Services',
    '[TARGET_AUDIENCE]': 'businesses and individuals',
    '[CONVERSION_GOAL]': determineCTA(pageData.slug),
    '[OFFER_VALIDITY]': 'limited time offer',
    '[OFFER_VALUE]': 'premium value',
    '[LOCATION]': 'UK-wide',
    '[CREDENTIALS]': 'ISO 27001 certified',
    '[CURRENT_SEASON]': new Date().getMonth() < 3 ? 'Winter' :
                      new Date().getMonth() < 6 ? 'Spring' :
                      new Date().getMonth() < 9 ? 'Summer' : 'Autumn'
  };
}

function extractServiceName(slug: string): string {
  // Extract service name from slug (e.g., '/shared-hosting' -> 'Shared Hosting')
  return slug.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Service';
}

function determineIndustry(service: string): string {
  if (service.toLowerCase().includes('hosting')) return 'Web Hosting';
  if (service.toLowerCase().includes('marketing')) return 'Digital Marketing';
  if (service.toLowerCase().includes('development')) return 'Web Development';
  return 'Digital Services';
}

function extractOfferName(slug: string): string {
  return slug.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Special Offer';
}

function determineOfferType(slug: string): string {
  if (slug.includes('free-')) return 'Gated Content (Guide/eBook)';
  if (slug.includes('coupon') || slug.includes('deal')) return 'Discount/Coupon';
  return 'Service Feature Spotlight';
}

function extractRelatedService(slug: string): string {
  if (slug.includes('hosting')) return 'Web Hosting';
  if (slug.includes('domain')) return 'Domain Registration';
  if (slug.includes('ssl')) return 'SSL Certificates';
  return 'Digital Services';
}

function determineCTA(slug: string): string {
  if (slug.includes('free-')) return 'Download PDF';
  if (slug.includes('consultation')) return 'Book a Demo';
  return 'Claim Offer';
}
```

### Phase 2: Content Generation Engine

#### 2.1 MCP Integration Layer
**Integrates with MCP tools for content generation**
- Description: Create MCP tool wrapper for content generation
- Files to create: `src/generators/mcpGenerator.ts`
- Dependencies: Variable mapper, prompt manager
- Estimated effort: 3 hours

```typescript
// src/generators/mcpGenerator.ts
import { sequentialthinking } from '@mcp/sequentialthinking';
import { PromptConfig } from './promptManager';

export interface GenerationResult {
  content: string;
  metadata: {
    wordCount: number;
    sections: string[];
    entities: string[];
  };
}

export async function generateContentWithMCP(config: PromptConfig): Promise<GenerationResult> {
  // Replace variables in template
  let prompt = config.template;
  for (const [key, value] of Object.entries(config.variables)) {
    prompt = prompt.replace(new RegExp(key, 'g'), value);
  }

  // Use sequentialthinking MCP tool for generation
  const result = await sequentialthinking({
    thought: `Generate high-quality content using this prompt: ${prompt}`,
    nextThoughtNeeded: false,
    thoughtNumber: 1,
    totalThoughts: 1,
    isRevision: false,
    branchFromThought: null,
    branchId: null,
    needsMoreThoughts: false
  });

  // Process and validate result
  const content = extractContentFromResult(result);
  const metadata = analyzeContent(content);

  return { content, metadata };
}

function extractContentFromResult(result: any): string {
  // Extract the generated content from MCP response
  // This would depend on the actual MCP tool response format
  return result.generatedContent || '';
}

function analyzeContent(content: string) {
  return {
    wordCount: content.split(/\s+/).length,
    sections: extractSections(content),
    entities: extractEntities(content)
  };
}

function extractSections(content: string): string[] {
  const sectionRegex = /^##\s+(.+)$/gm;
  const sections: string[] = [];
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    sections.push(match[1]);
  }
  return sections;
}

function extractEntities(content: string): string[] {
  // Extract potential entities (proper nouns, service names, etc.)
  const entityRegex = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g;
  return [...new Set(content.match(entityRegex) || [])];
}
```

#### 2.2 Content Generator Main Engine
**Orchestrates the entire generation process**
- Description: Main content generation coordinator
- Files to create: `src/generators/contentGenerator.ts`
- Dependencies: All previous components
- Estimated effort: 4 hours

```typescript
// src/generators/contentGenerator.ts
import { classifyPage, PageData } from '../utils/contentRouter';
import { PromptManager } from './promptManager';
import { mapHomepageVariables, mapServiceVariables, mapLandingVariables } from './variableMapper';
import { generateContentWithMCP } from './mcpGenerator';

export interface GeneratedContent {
  pageType: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  internalLinks: string[];
  gmbPosts: Array<{
    type: string;
    content: string;
    cta: string;
  }>;
  metadata: any;
}

export async function generatePageContent(pageData: PageData): Promise<GeneratedContent> {
  // 1. Classify page type
  const pageType = classifyPage(pageData.slug, pageData.frontmatter);

  // 2. Map variables based on page type
  let variables: Record<string, string>;
  switch (pageType) {
    case 'homepage':
      variables = mapHomepageVariables(pageData);
      break;
    case 'service':
      variables = mapServiceVariables(pageData);
      break;
    case 'landing':
      variables = mapLandingVariables(pageData);
      break;
  }

  // 3. Create prompt configuration
  const promptConfig = PromptManager.createConfig(pageType, variables);

  // 4. Generate content using MCP
  const result = await generateContentWithMCP(promptConfig);

  // 5. Parse and structure the generated content
  const structuredContent = parseGeneratedContent(result.content, pageType);

  return {
    pageType,
    content: structuredContent.body,
    seoTitle: structuredContent.seoTitle,
    seoDescription: structuredContent.seoDescription,
    internalLinks: structuredContent.internalLinks,
    gmbPosts: structuredContent.gmbPosts,
    metadata: result.metadata
  };
}

function parseGeneratedContent(rawContent: string, pageType: string) {
  // Parse the artifact format from the prompts
  const sections = rawContent.split('---');

  // Extract different parts based on prompt format
  const body = extractBodyContent(sections);
  const seoTitle = extractSEOTitle(sections);
  const seoDescription = extractSEODescription(sections);
  const internalLinks = extractInternalLinks(sections);
  const gmbPosts = extractGMBPosts(sections);

  return {
    body,
    seoTitle,
    seoDescription,
    internalLinks,
    gmbPosts
  };
}

// Helper functions to extract different parts from generated content
function extractBodyContent(sections: string[]): string {
  // Find the main content section
  const contentSection = sections.find(s => s.includes('Homepage Content') ||
                                           s.includes('Service Page Content') ||
                                           s.includes('Landing Page Content'));
  return contentSection ? contentSection.split('\n').slice(1).join('\n').trim() : '';
}

function extractSEOTitle(sections: string[]): string {
  const seoSection = sections.find(s => s.includes('TITLE TAG & META DESCRIPTION'));
  if (!seoSection) return '';

  const titleMatch = seoSection.match(/Title Tag:\s*(.+)/);
  return titleMatch ? titleMatch[1].trim() : '';
}

function extractSEODescription(sections: string[]): string {
  const seoSection = sections.find(s => s.includes('TITLE TAG & META DESCRIPTION'));
  if (!seoSection) return '';

  const descMatch = seoSection.match(/Meta Description:\s*(.+)/);
  return descMatch ? descMatch[1].trim() : '';
}

function extractInternalLinks(sections: string[]): string[] {
  const linksSection = sections.find(s => s.includes('INTERNAL LINK'));
  if (!linksSection) return [];

  const links: string[] = [];
  const linkMatches = linksSection.matchAll(/\d+\.\s*\[\[([^\]]+)\]\]/g);
  for (const match of linkMatches) {
    links.push(match[1]);
  }
  return links;
}

function extractGMBPosts(sections: string[]): Array<{type: string, content: string, cta: string}> {
  const posts: Array<{type: string, content: string, cta: string}> = [];

  // Extract evergreen post
  const evergreenSection = sections.find(s => s.includes('GOOGLE MY BUSINESS POST'));
  if (evergreenSection) {
    const contentMatch = evergreenSection.match(/Suggested CTA Button:\s*(.+)/);
    posts.push({
      type: 'evergreen',
      content: evergreenSection.replace(/Suggested CTA Button:.*/, '').trim(),
      cta: contentMatch ? contentMatch[1].trim() : 'Learn More'
    });
  }

  // Extract seasonal post if present
  const seasonalSection = sections.find(s => s.includes('SEASONAL OFFER'));
  if (seasonalSection) {
    const contentMatch = seasonalSection.match(/Suggested CTA Button:\s*(.+)/);
    posts.push({
      type: 'seasonal',
      content: seasonalSection.replace(/Suggested CTA Button:.*/, '').trim(),
      cta: contentMatch ? contentMatch[1].trim() : 'Learn More'
    });
  }

  return posts;
}
```

### Phase 3: Content Integration System

#### 3.1 Astro Content Collections Enhancement
**Updates content collections to support generated content**
- Description: Enhance content schema for generated content
- Files to modify: `src/content/config.ts`
- Dependencies: Content generator
- Estimated effort: 2 hours

```typescript
// src/content/config.ts (enhanced)
import { defineCollection, z } from "astro:content";

const generatedContentSchema = z.object({
  pageType: z.enum(['homepage', 'service', 'landing']),
  generatedContent: z.string(),
  seoTitle: z.string(),
  seoDescription: z.string(),
  internalLinks: z.array(z.string()),
  gmbPosts: z.array(z.object({
    type: z.string(),
    content: z.string(),
    cta: z.string()
  })),
  metadata: z.object({
    wordCount: z.number(),
    sections: z.array(z.string()),
    entities: z.array(z.string())
  })
});

const pageSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  // Include generated content fields
  ...generatedContentSchema.shape
});

export const collections = {
  pages: defineCollection({
    type: "content",
    schema: pageSchema
  })
};

export type GeneratedContent = z.infer<typeof generatedContentSchema>;
export type PageContent = z.infer<typeof pageSchema>;
```

#### 3.2 Content Loading Utilities
**Helper functions for content management**
- Description: Create utilities for loading and managing generated content
- Files to create: `src/utils/contentLoader.ts`
- Dependencies: Content collections
- Estimated effort: 2 hours

```typescript
// src/utils/contentLoader.ts
import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { generatePageContent } from '../generators/contentGenerator';

export async function loadAndGenerateContent() {
  const examplesPath = path.join(process.cwd(), 'examples', 'pages');
  const contentPath = path.join(process.cwd(), 'src', 'content', 'pages');

  // Get all example page files
  const exampleFiles = fs.readdirSync(examplesPath)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(examplesPath, file));

  for (const filePath of exampleFiles) {
    const pageData = parsePageFile(filePath);
    const generatedContent = await generatePageContent(pageData);

    // Merge with existing frontmatter
    const finalContent = {
      ...pageData.frontmatter,
      ...generatedContent
    };

    // Write to content collection
    writeContentFile(contentPath, pageData.slug, finalContent);
  }
}

function parsePageFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // Parse frontmatter
  let frontmatterStart = -1;
  let frontmatterEnd = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (frontmatterStart === -1) {
        frontmatterStart = i;
      } else {
        frontmatterEnd = i;
        break;
      }
    }
  }

  const frontmatterLines = lines.slice(frontmatterStart + 1, frontmatterEnd);
  const frontmatter: Record<string, any> = {};

  for (const line of frontmatterLines) {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length > 0) {
      const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
      frontmatter[key.trim()] = value;
    }
  }

  return {
    slug: frontmatter.slug || path.basename(filePath, '.md'),
    title: frontmatter.title || '',
    frontmatter,
    content: lines.slice(frontmatterEnd + 1).join('\n')
  };
}

function writeContentFile(contentPath: string, slug: string, data: any) {
  const fileName = `${slug.replace(/\//g, '-')}.md`;
  const filePath = path.join(contentPath, fileName);

  // Convert data to frontmatter format
  const frontmatter = Object.entries(data)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');

  const fileContent = `---\n${frontmatter}\n---\n\n<!-- Generated content will be inserted here -->\n`;

  fs.writeFileSync(filePath, fileContent);
}
```

### Phase 4: Quality Assurance & Validation

#### 4.1 Content Validation System
**Validates generated content quality and compliance**
- Description: Create comprehensive validation pipeline
- Files to create: `src/validators/contentValidator.ts`
- Dependencies: Content generator
- Estimated effort: 3 hours

```typescript
// src/validators/contentValidator.ts
import { GeneratedContent } from '../generators/contentGenerator';

export interface ValidationResult {
  passed: boolean;
  issues: ValidationIssue[];
  score: number;
}

export interface ValidationIssue {
  type: 'error' | 'warning';
  message: string;
  section?: string;
}

export function validateContent(content: GeneratedContent): ValidationResult {
  const issues: ValidationIssue[] = [];

  // Word count validation
  const wordCountValid = validateWordCount(content, issues);

  // Entity validation
  const entityValid = validateEntityStructure(content, issues);

  // CTA validation
  const ctaValid = validateCTAs(content, issues);

  // Language validation
  const languageValid = validateLanguage(content, issues);

  // Prohibited words check
  const prohibitedValid = validateProhibitedWords(content, issues);

  // WCAG compliance check
  const wcagValid = validateWCAGCompliance(content, issues);

  const passed = issues.filter(i => i.type === 'error').length === 0;
  const score = calculateScore(issues);

  return { passed, issues, score };
}

function validateWordCount(content: GeneratedContent, issues: ValidationIssue[]): boolean {
  const targetWordCounts = {
    homepage: { min: 1210, max: 1750 },
    service: { min: 800, max: 1200 },
    landing: { min: 600, max: 900 }
  };

  const target = targetWordCounts[content.pageType as keyof typeof targetWordCounts];
  if (!target) return true;

  const wordCount = content.metadata.wordCount;
  if (wordCount < target.min) {
    issues.push({
      type: 'error',
      message: `Word count too low: ${wordCount} (minimum ${target.min})`
    });
    return false;
  }
  if (wordCount > target.max) {
    issues.push({
      type: 'warning',
      message: `Word count high: ${wordCount} (maximum ${target.max})`
    });
  }
  return true;
}

function validateEntityStructure(content: GeneratedContent, issues: ValidationIssue[]): boolean {
  // Check for entity-first structure in service descriptions
  if (content.pageType === 'service' || content.pageType === 'homepage') {
    const entityPatterns = [
      /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\s+(?:provides?|offers?|delivers?)/i
    ];

    let entityFirstCount = 0;
    for (const pattern of entityPatterns) {
      const matches = content.content.match(pattern);
      entityFirstCount += matches ? matches.length : 0;
    }

    if (entityFirstCount < 3) {
      issues.push({
        type: 'warning',
        message: `Low entity-first structure detected (${entityFirstCount} instances)`
      });
    }
  }
  return true;
}

function validateCTAs(content: GeneratedContent, issues: ValidationIssue[]): boolean {
  // Check for possessive CTAs
  const possessiveCTAs = content.content.match(/\bget my\b|\bstart my\b|\bbook my\b|\bclaim my\b/gi);
  const genericCTAs = content.content.match(/\bget a\b|\bget your\b|\bstart a\b|\bbook a\b/gi);

  if (possessiveCTAs && possessiveCTAs.length > 0 && (!genericCTAs || genericCTAs.length === 0)) {
    return true;
  }

  issues.push({
    type: 'warning',
    message: 'Consider using more possessive CTAs (my/your)'
  });
  return true;
}

function validateLanguage(content: GeneratedContent, issues: ValidationIssue[]): boolean {
  // Check for British English
  const americanSpellings = /\borganize\b|\brecognize\b|\bcenter\b/gi;
  if (americanSpellings.test(content.content)) {
    issues.push({
      type: 'warning',
      message: 'American spellings detected - use British English'
    });
  }
  return true;
}

function validateProhibitedWords(content: GeneratedContent, issues: ValidationIssue[]): boolean {
  const prohibitedWords = [
    'tapestry', 'intricate', 'interplay', 'elevate', 'resonate', 'enhance',
    'offerings', 'leverage', 'embark', 'look no further', 'innovative',
    'cutting-edge', 'game-changing', 'revolutionize', 'seamless'
  ];

  for (const word of prohibitedWords) {
    if (content.content.toLowerCase().includes(word)) {
      issues.push({
        type: 'error',
        message: `Prohibited word detected: "${word}"`
      });
    }
  }
  return true;
}

function validateWCAGCompliance(content: GeneratedContent, issues: ValidationIssue[]): boolean {
  // Basic WCAG checks
  const hasAltText = content.content.includes('alt=') || content.content.includes('alt="');
  const hasHeadings = /<h[1-6]|## /.test(content.content);
  const hasLangAttr = content.content.includes('lang="en"');

  if (!hasAltText) {
    issues.push({
      type: 'warning',
      message: 'Missing alt text for images'
    });
  }

  if (!hasHeadings) {
    issues.push({
      type: 'error',
      message: 'Missing proper heading structure'
    });
  }

  if (!hasLangAttr) {
    issues.push({
      type: 'error',
      message: 'Missing lang attribute'
    });
  }

  return hasHeadings && hasLangAttr;
}

function calculateScore(issues: ValidationIssue[]): number {
  const errorWeight = 10;
  const warningWeight = 2;

  const errorCount = issues.filter(i => i.type === 'error').length;
  const warningCount = issues.filter(i => i.type === 'warning').length;

  const penalty = (errorCount * errorWeight) + (warningCount * warningWeight);
  return Math.max(0, 100 - penalty);
}
```

#### 4.2 CLI Tool for Batch Processing
**Command-line interface for content generation**
- Description: Create CLI tool to process all pages
- Files to create: `src/cli/generate-content.ts`, `package.json` scripts
- Dependencies: All components
- Estimated effort: 2 hours

```typescript
// src/cli/generate-content.ts
#!/usr/bin/env node

import { loadAndGenerateContent } from '../utils/contentLoader';
import { validateContent } from '../validators/contentValidator';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('🚀 Starting Premium Hosting content generation...');

  try {
    // Generate all content
    await loadAndGenerateContent();
    console.log('✅ Content generation completed');

    // Validate generated content
    const contentPath = path.join(process.cwd(), 'src', 'content', 'pages');
    const files = fs.readdirSync(contentPath).filter(f => f.endsWith('.md'));

    let totalScore = 0;
    let passedCount = 0;

    for (const file of files) {
      const filePath = path.join(contentPath, file);
      const content = parseGeneratedContent(filePath);

      const validation = validateContent(content);
      totalScore += validation.score;

      if (validation.passed) {
        passedCount++;
        console.log(`✅ ${file}: PASSED (${validation.score}/100)`);
      } else {
        console.log(`❌ ${file}: FAILED (${validation.score}/100)`);
        validation.issues.forEach(issue => {
          console.log(`   ${issue.type.toUpperCase()}: ${issue.message}`);
        });
      }
    }

    const averageScore = totalScore / files.length;
    console.log(`\n📊 Summary:`);
    console.log(`   Total pages: ${files.length}`);
    console.log(`   Passed: ${passedCount}`);
    console.log(`   Average score: ${averageScore.toFixed(1)}/100`);

    if (passedCount === files.length) {
      console.log('🎉 All content generation completed successfully!');
    } else {
      console.log('⚠️  Some content failed validation. Please review and fix issues.');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ Content generation failed:', error);
    process.exit(1);
  }
}

function parseGeneratedContent(filePath: string): any {
  // Parse the generated content file and return structured data
  const content = fs.readFileSync(filePath, 'utf-8');
  // Parse frontmatter and return GeneratedContent object
  return {}; // Implementation would parse the actual file
}

main();
```

### Phase 5: Integration & Deployment

#### 5.1 Package.json Scripts
**Add content generation scripts**
- Description: Update package.json with generation commands
- Files to modify: `package.json`
- Dependencies: CLI tool
- Estimated effort: 1 hour

```json
{
  "scripts": {
    "generate-content": "tsx src/cli/generate-content.ts",
    "validate-content": "tsx src/cli/generate-content.ts --validate-only",
    "build": "npm run generate-content && astro check && astro build",
    "preview": "astro preview"
  }
}
```

#### 5.2 GitHub Actions Workflow
**Automated content generation on push**
- Description: Create CI/CD pipeline for content generation
- Files to create: `.github/workflows/generate-content.yml`
- Dependencies: CLI tool
- Estimated effort: 1 hour

```yaml
name: Generate Content
on:
  push:
    branches: [ main ]
    paths:
      - 'examples/pages/**'
      - 'DEVELOPMENT/**'
  workflow_dispatch:

jobs:
  generate:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Generate content
      run: npm run generate-content

    - name: Validate content
      run: npm run validate-content

    - name: Commit generated content
      run: |
        git config --local user.email "action@github.com"
        git config --local user.name "GitHub Action"
        git add src/content/pages/
        git commit -m "Generate content for ${GITHUB_SHA}" || echo "No changes to commit"

    - name: Push changes
      uses: actions/git-push@v1
```

## Success Metrics

- [ ] **100% Page Coverage**: All 100+ pages in examples/pages/ processed
- [ ] **WCAG 2.2 Level AA Compliance**: All generated content passes axe-core validation
- [ ] **Content Quality**: Average validation score > 90/100
- [ ] **Entity Optimization**: Proper entity-first structure in service descriptions
- [ ] **SEO Optimization**: All pages have proper title tags and meta descriptions
- [ ] **British English**: Consistent British spelling and terminology
- [ ] **Prohibited Words**: Zero prohibited words in generated content
- [ ] **Performance**: Generated content loads within performance budgets

## Execution Instructions

1. **Create all files** listed in the implementation tasks
2. **Install dependencies**: `npm install tsx @mcp/sequentialthinking`
3. **Run generation**: `npm run generate-content`
4. **Validate results**: Check generated files in `src/content/pages/`
5. **Deploy**: Generated content integrates with existing Astro build process

---

*This PRP implements the complete automated content generation workflow for Premium Hosting. Execute with `/execute-plan PRPs/content-generation-workflow.md`*
