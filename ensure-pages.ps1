<# 
  ensure-pages.ps1
  Creates missing page directories under .\.clinerules\pages and an index.md for each.
  External URLs are ignored. Front matter includes title, slug, and created timestamp.
#>

param(
  # Base directory for pages (relative or absolute). Defaults to .\.clinerules\pages next to this script.
  [string]$BaseDir = (Join-Path $PSScriptRoot '.clinerules\pages')
)

# ---- Input catalogue (Title, Path) ----
# Paths starting with '/.clinerules/pages' will become <BaseDir>\<subpath>\index.md
# External URLs (http/https) are skipped.
$catalogue = @(
  @{ Title='Homepage'; Path='/.clinerules/pages/' }
  @{ Title='Shared Hosting'; Path='/.clinerules/pages/shared-hosting' }
  @{ Title='WordPress Hosting'; Path='/.clinerules/pages/wordpress' }
  @{ Title='Cloud Hosting'; Path='/.clinerules/pages/cloud-hosting' }
  @{ Title='Windows Hosting'; Path='/.clinerules/pages/windows' }
  @{ Title='Linux Hosting'; Path='/.clinerules/pages/linux' }
  @{ Title='VPS Hosting'; Path='/.clinerules/pages/vps' }
  @{ Title='Web Hosting'; Path='/.clinerules/pages/web-hosting' }
  @{ Title='Domain Hosting'; Path='/.clinerules/pages/domain-hosting' }
  @{ Title='Free Hosting'; Path='/.clinerules/pages/free-hosting' }
  @{ Title='Hosting Products Overview'; Path='/.clinerules/pages/hosting' }
  @{ Title='Additional Services'; Path='/.clinerules/pages/services' }
  @{ Title='SSL Certificates'; Path='/.clinerules/pages/certificates' }
  @{ Title='CDN Services'; Path='/.clinerules/pages/cdn' }
  @{ Title='Website Builder'; Path='/.clinerules/pages/website-builder' }
  @{ Title='Find Your Domain'; Path='/.clinerules/pages/domain' }
  @{ Title='Pricing'; Path='/.clinerules/pages/pricing' }
  @{ Title='Compare Plans'; Path='/.clinerules/pages/compare' }
  @{ Title='Business Email'; Path='/.clinerules/pages/business-email' }
  @{ Title='Email'; Path='/.clinerules/pages/email' }
  @{ Title='Dedicated Servers'; Path='/.clinerules/pages/dedicated-servers' }
  @{ Title='Managed Hosting Overview'; Path='/.clinerules/pages/managed-hosting' }
  @{ Title='Server Locations / Data Centers'; Path='/.clinerules/pages/data-centers' }
  @{ Title='Control Panel Overview (cPanel, Plesk, etc.)'; Path='/.clinerules/pages/control-panel' }
  @{ Title='Domain Transfers'; Path='/.clinerules/pages/domain-transfer' }
  @{ Title='DNS Management / DNS Services'; Path='/.clinerules/pages/dns' }
  @{ Title='WHOIS Lookup'; Path='/.clinerules/pages/whois' }
  @{ Title='Domain Privacy / Protection'; Path='/.clinerules/pages/domain-privacy' }
  @{ Title='Solutions Overview'; Path='/.clinerules/pages/solutions' }
  @{ Title='Business Hosting'; Path='/.clinerules/pages/solutions/business-hosting' }
  @{ Title='eCommerce Hosting'; Path='/.clinerules/pages/solutions/ecommerce-hosting' }
  @{ Title='Agency & Developer Hosting'; Path='/.clinerules/pages/solutions/agency-hosting' }
  @{ Title='High-Traffic & Scaling'; Path='/.clinerules/pages/solutions/high-traffic' }
  @{ Title='Enterprise Cloud Hosting'; Path='/.clinerules/pages/solutions/enterprise' }
  @{ Title='Managed Services & Care Plans'; Path='/.clinerules/pages/managed-services' }
  @{ Title='Website Services Overview'; Path='/.clinerules/pages/website-services' }
  @{ Title='Website Maintenance'; Path='/.clinerules/pages/website-maintenance' }
  @{ Title='Website Care Plans'; Path='/.clinerules/pages/website-care-plans' }
  @{ Title='Website Updates'; Path='/.clinerules/pages/website-updates' }
  @{ Title='Custom Development'; Path='/.clinerules/pages/custom-development' }
  @{ Title='Website Redesign'; Path='/.clinerules/pages/website-redesign' }
  @{ Title='Landing Pages'; Path='/.clinerules/pages/landing-pages' }
  @{ Title='eCommerce Development'; Path='/.clinerules/pages/ecommerce-development' }
  @{ Title='Portfolio / Showcase'; Path='/.clinerules/pages/portfolio' }
  @{ Title='Industries Served'; Path='/.clinerules/pages/industries' }
  @{ Title='Digital Marketing Overview'; Path='/.clinerules/pages/digital-marketing' }
  @{ Title='SEO Services'; Path='/.clinerules/pages/seo' }
  @{ Title='PPC Management'; Path='/.clinerules/pages/ppc' }
  @{ Title='Content Marketing'; Path='/.clinerules/pages/content-marketing' }
  @{ Title='Email Marketing'; Path='/.clinerules/pages/email-marketing' }
  @{ Title='Conversion Optimization'; Path='/.clinerules/pages/conversion-optimization' }
  @{ Title='Social Media Overview'; Path='/.clinerules/pages/social-media' }
  @{ Title='Social Media Management'; Path='/.clinerules/pages/social-media-management' }
  @{ Title='Social Media Advertising'; Path='/.clinerules/pages/social-media-ads' }
  @{ Title='Content Creation'; Path='/.clinerules/pages/content-creation' }
  @{ Title='Analytics & Tracking'; Path='/.clinerules/pages/analytics' }
  @{ Title='Marketing Automation'; Path='/.clinerules/pages/marketing-automation' }
  @{ Title='Brand Strategy / Positioning'; Path='/.clinerules/pages/brand-strategy' }
  @{ Title='Influencer Marketing'; Path='/.clinerules/pages/influencer-marketing' }
  @{ Title='Video Marketing'; Path='/.clinerules/pages/video-marketing' }
  @{ Title='Request a Quote / Proposal'; Path='/.clinerules/pages/request-quote' }
  @{ Title='Free Consultation'; Path='/.clinerules/pages/free-consultation' }
  @{ Title='Demos / Walkthroughs'; Path='/.clinerules/pages/demo' }
  @{ Title='Onboarding Process Overview'; Path='/.clinerules/pages/onboarding' }
  @{ Title='Business Communications Overview'; Path='/.clinerules/pages/business-communications' }
  @{ Title='Phone Answering Services'; Path='/.clinerules/pages/phone-answering' }
  @{ Title='Virtual Receptionist'; Path='/.clinerules/pages/virtual-receptionist' }
  @{ Title='Live Chat Services'; Path='/.clinerules/pages/live-chat' }
  @{ Title='Chatbot Solutions'; Path='/.clinerules/pages/chatbots' }
  @{ Title='Customer Support Services'; Path='/.clinerules/pages/customer-support-services' }
  @{ Title='Reputation Management'; Path='/.clinerules/pages/reputation-management' }
  @{ Title='Review Management'; Path='/.clinerules/pages/review-management' }
  @{ Title='Online Reputation'; Path='/.clinerules/pages/online-reputation' }
  @{ Title='Complete Website Solution'; Path='/.clinerules/pages/solutions/complete-website-solution' }
  @{ Title='Startup Package'; Path='/.clinerules/pages/solutions/startup-package' }
  @{ Title='Growth Package'; Path='/.clinerules/pages/solutions/growth-package' }
  @{ Title='All-in-One Business Package'; Path='/.clinerules/pages/solutions/all-in-one' }
  @{ Title='Website Package Bundle'; Path='/.clinerules/pages/coupons/website-package' }
  @{ Title='Marketing Bundle Deal'; Path='/.clinerules/pages/coupons/marketing-bundle' }
  @{ Title='Complete Solution Package'; Path='/.clinerules/pages/coupons/complete-solution' }
  @{ Title='Website Launch Checklist'; Path='/.clinerules/pages/guides/website-launch-checklist' }
  @{ Title='Digital Marketing Basics'; Path='/.clinerules/pages/guides/digital-marketing-basics' }
  @{ Title='Social Media Best Practices'; Path='/.clinerules/pages/guides/social-media-best-practices' }
  @{ Title='Knowledge Base'; Path='/.clinerules/pages/knowledge-base' }
  @{ Title='Migrations & Onboarding'; Path='/.clinerules/pages/migrations' }
  @{ Title='FAQs'; Path='/.clinerules/pages/faqs' }
  @{ Title='System Status'; Path='/.clinerules/pages/status' }
  @{ Title='Service Status History'; Path='/.clinerules/pages/status/history' }
  @{ Title='Trust Center'; Path='/.clinerules/pages/trust' }
  @{ Title='Infrastructure Overview'; Path='/.clinerules/pages/infrastructure' }
  @{ Title='Data Centers Map / Infrastructure Transparency'; Path='/.clinerules/pages/infrastructure-map' }
  @{ Title='Security & DDoS Protection'; Path='/.clinerules/pages/security' }
  @{ Title='Performance & Speed'; Path='/.clinerules/pages/performance' }
  @{ Title='Sustainability / Green Hosting'; Path='/.clinerules/pages/sustainability' }
  @{ Title='Platform Changelog / Updates'; Path='/.clinerules/pages/changelog' }
  @{ Title='Uptime Reports & Benchmarks'; Path='/.clinerules/pages/uptime' }
  @{ Title='Report Abuse / Security Issue'; Path='/.clinerules/pages/legal/report-abuse' }
  @{ Title='Contact Us'; Path='/.clinerules/pages/contact' }
  @{ Title='Client Login / Control Panel'; Path='/.clinerules/pages/login' }
  @{ Title='About Us'; Path='/.clinerules/pages/about' }
  @{ Title='Leadership / Team Page'; Path='/.clinerules/pages/team' }
  @{ Title='Awards & Certifications'; Path='/.clinerules/pages/awards' }
  @{ Title='Investors / Corporate Info'; Path='/.clinerules/pages/investors' }
  @{ Title='Events / Webinars'; Path='/.clinerules/pages/events' }
  @{ Title='Newsletter Signup / Resources Hub'; Path='/.clinerules/pages/newsletter' }
  @{ Title='Our Web Design & Development Agency'; Path='/.clinerules/pages/web-design-and-development' }
  @{ Title='Partners & Integrations'; Path='/.clinerules/pages/partners' }
  @{ Title='Affiliates'; Path='/.clinerules/pages/affiliates' }
  @{ Title='Careers'; Path='/.clinerules/pages/careers' }
  @{ Title='News & Pressroom'; Path='/.clinerules/pages/news' }
  @{ Title='Case Studies & Success Stories'; Path='/.clinerules/pages/case-studies' }
  @{ Title='Customer Reviews'; Path='/.clinerules/pages/reviews' }
  @{ Title='Legal Overview'; Path='/.clinerules/pages/legal' }
  @{ Title='Privacy Compliance Hub'; Path='/.clinerules/pages/legal/privacy-compliance' }
  @{ Title='Terms and Conditions'; Path='/.clinerules/pages/terms-and-conditions' }
  @{ Title='Website Terms of Use'; Path='/.clinerules/pages/legal/website-terms-of-use' }
  @{ Title='Privacy Policy'; Path='/.clinerules/pages/privacy-policy' }
  @{ Title='Cookie Policy'; Path='/.clinerules/pages/legal/cookie-policy' }
  @{ Title='GDPR Compliance'; Path='/.clinerules/pages/gdpr' }
  @{ Title='Data Processing Agreement (DPA)'; Path='/.clinerules/pages/legal/data-processing-agreement' }
  @{ Title='Acceptable Use Policy (AUP)'; Path='/.clinerules/pages/legal/acceptable-use-policy' }
  @{ Title='Abuse Policy'; Path='/.clinerules/pages/legal/abuse-policy' }
  @{ Title='DMCA / Copyright Policy'; Path='/.clinerules/pages/legal/dmca' }
  @{ Title='Affiliate Programme Terms'; Path='/.clinerules/pages/legal/affiliate-terms' }
  @{ Title='Security Responsible Disclosure Policy'; Path='/.clinerules/pages/legal/security-responsible-disclosure' }
  @{ Title='Responsible Disclosure / Bug Bounty'; Path='/.clinerules/pages/legal/responsible-disclosure' }
  @{ Title='Accessibility Statement'; Path='/.clinerules/pages/legal/accessibility' }
  @{ Title='Ethical AI / Technology Use Policy'; Path='/.clinerules/pages/legal/ai-policy' }
  @{ Title='Sustainability Statement'; Path='/.clinerules/pages/sustainability' }             # duplicate path, will dedupe
  @{ Title='Service Change Log / Policy Updates'; Path='/.clinerules/pages/changelog' }      # duplicate path, will dedupe
  @{ Title='Legal Archive / Version History'; Path='/.clinerules/pages/legal/archive' }
  @{ Title='Shared Hosting SLA'; Path='/.clinerules/pages/legal/shared-hosting-sla' }
  @{ Title='WordPress Hosting SLA'; Path='/.clinerules/pages/legal/wordpress-hosting-sla' }
  @{ Title='Cloud Hosting SLA'; Path='/.clinerules/pages/legal/cloud-hosting-sla' }
  @{ Title='VPS Service Level Agreement'; Path='/.clinerules/pages/legal/vps-service-level-agreement' }
  @{ Title='CDN Services SLA'; Path='/.clinerules/pages/legal/cdn-sla' }
  @{ Title='Coupons & Current Offers'; Path='/.clinerules/pages/coupons' }
  @{ Title='New Year Sale'; Path='/.clinerules/pages/coupons/new-year-sale' }
  @{ Title='Valentine''s Day Sale'; Path='/.clinerules/pages/coupons/valentines' }
  @{ Title='Easter Hosting Deals'; Path='/.clinerules/pages/coupons/easter' }
  @{ Title='Financial Year-End Sale'; Path='/.clinerules/pages/coupons/financial-year-end' }
  @{ Title='Small Business Week'; Path='/.clinerules/pages/coupons/small-business-week' }
  @{ Title='Mid-Year Mega Sale'; Path='/.clinerules/pages/coupons/mid-year' }
  @{ Title='Prime Day Deals'; Path='/.clinerules/pages/coupons/prime-day' }
  @{ Title='Back to School / Business Deals'; Path='/.clinerules/pages/coupons/back-to-school' }
  @{ Title='Halloween Hosting Sale'; Path='/.clinerules/pages/coupons/halloween' }
  @{ Title='Black Friday Hosting Deals'; Path='/.clinerules/pages/coupons/black-friday' }
  @{ Title='Cyber Monday Discounts'; Path='/.clinerules/pages/cyber-monday' }                 # note: not under /coupons in source list
  @{ Title='Christmas Hosting Sale'; Path='/.clinerules/pages/coupons/christmas' }
  @{ Title='Boxing Day Sale'; Path='/.clinerules/pages/coupons/boxing-day' }
  @{ Title='Student Hosting Discounts'; Path='/.clinerules/pages/coupons/student' }
  @{ Title='Nonprofit & Charity Hosting'; Path='/.clinerules/pages/coupons/nonprofit' }
  @{ Title='Referral Rewards'; Path='/.clinerules/pages/coupons/referral' }
  @{ Title='Flash Deals & Time-Limited Offers'; Path='/.clinerules/pages/coupons/flash-deal' }
  @{ Title='New Customer Exclusive'; Path='/.clinerules/pages/coupons/new-customer' }
  @{ Title='Switch & Save / Free Migration'; Path='/.clinerules/pages/coupons/switch-save' }
  @{ Title='Long-Term Plan Discount'; Path='/.clinerules/pages/coupons/3-year-deal' }
  @{ Title='VPS Hosting Specials'; Path='/.clinerules/pages/coupons/vps-deals' }
  @{ Title='Dedicated Server Promotions'; Path='/.clinerules/pages/coupons/dedicated' }
  @{ Title='Managed WordPress Specials'; Path='/.clinerules/pages/coupons/managed-wp' }
  @{ Title='Domain & Hosting Bundle'; Path='/.clinerules/pages/coupons/bundle-deal' }
  @{ Title='Ecommerce Hosting Deals'; Path='/.clinerules/pages/coupons/ecommerce' }
  @{ Title='Agency & Reseller Discounts'; Path='/.clinerules/pages/coupons/reseller' }
  @{ Title='Developer Hosting Offers'; Path='/.clinerules/pages/coupons/developer' }
  @{ Title='Local Business Hosting Deals'; Path='/.clinerules/pages/coupons/local-business' }
  @{ Title='Blogger & Creator Specials'; Path='/.clinerules/pages/coupons/blog-creator' }
  @{ Title='Website Speed Check & Audit'; Path='/.clinerules/pages/free-audit' }
  @{ Title='Site Migration Checklist'; Path='/.clinerules/pages/guides/migration-checklist' }
  @{ Title='WordPress Security Guide'; Path='/.clinerules/pages/guides/wp-security' }
  @{ Title='Hosting Plan Recommendation Quiz'; Path='/.clinerules/pages/quiz/hosting-selector' }
  @{ Title='The Premium Hosting Fine Tuned Formula - 7 Steps to 90+ PageSpeed'; Path='/.clinerules/pages/7-steps-to-90-pagespeed' }
  # External (skipped)
  @{ Title='Support Portal (Login)'; Path='https://support.yoursite.tld/login' }
  @{ Title='Knowledge Base (External)'; Path='https://support.yoursite.tld/knowledge-base' }
  @{ Title='Submit Ticket / Contact Support (External)'; Path='https://support.yoursite.tld/tickets' }
  @{ Title='System Status (External)'; Path='https://status.yoursite.tld/' }
  # Gaming
  @{ Title='Gaming Hub'; Path='/.clinerules/pages/gaming' }
  @{ Title='COD Mobile Stats'; Path='/.clinerules/pages/gaming/cod-mobile' }
  @{ Title='Gameplay Highlights / Clips'; Path='/.clinerules/pages/gaming/clips' }
  @{ Title='Setup / Gear'; Path='/.clinerules/pages/gaming/gear' }
  @{ Title='Game Servers (Coming Soon)'; Path='/.clinerules/pages/gaming/servers' }
  @{ Title='Game Server: Minecraft (Future)'; Path='/.clinerules/pages/gaming/servers/minecraft' }
  @{ Title='Voice / Discord / Bot Hosting (Future)'; Path='/.clinerules/pages/gaming/servers/voice' }
  @{ Title='Custom Private Server / Scrim Server (Future)'; Path='/.clinerules/pages/gaming/servers/custom' }
)

# ---- Helpers ----
$prefix = '/.clinerules/pages'
$created = @()
$already = @()
$skipped = @()
$errors  = @()

function New-MarkdownIfMissing {
  param(
    [string]$Title,
    [string]$RelDir    # relative directory (may be '')
  )
  $targetDir  = if ([string]::IsNullOrWhiteSpace($RelDir)) { $BaseDir } else { Join-Path $BaseDir $RelDir.TrimStart('\','/') }
  $targetFile = Join-Path $targetDir 'index.md'

  try {
    if (-not (Test-Path -LiteralPath $targetFile)) {
      New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

      # Build slug ("/" for homepage, otherwise "/<rel>")
      $slug = if ([string]::IsNullOrWhiteSpace($RelDir)) { '/' } else { '/' + ($RelDir.TrimStart('\','/').Replace('\','/')) }

      $content = @"
---
title: "$Title"
slug: "$slug"
created: "$(Get-Date -Format o)"
---

# $Title

<!-- Write content for $Title here -->
"@

      $null = $content | Set-Content -LiteralPath $targetFile -Encoding UTF8
      $script:created += $targetFile
    } else {
      $script:already += $targetFile
    }
  }
  catch {
    $script:errors += "Error creating $targetFile : $($_.Exception.Message)"
  }
}

# ---- Validate / normalize list & process ----
# Deduplicate by normalized page path (case-insensitive)
$seen = @{}
foreach ($item in $catalogue) {
  $title = $item.Title
  $path  = $item.Path

  if ($path -match '^(http|https)://') {
    $skipped += "$title -> $path (external URL)"
    continue
  }

  if (-not $path.StartsWith($prefix, [System.StringComparison]::OrdinalIgnoreCase)) {
    $skipped += "$title -> $path (not under $prefix)"
    continue
  }

  # Normalize: strip prefix and leading slashes, drop trailing slash for homepage detection later
  $rel = $path.Substring($prefix.Length)
  $rel = $rel.Trim('/')  # '' means homepage

  # Dedupe key is the relative dir
  $key = $rel.ToLowerInvariant()
  if ($seen.ContainsKey($key)) {
    continue
  }
  $seen[$key] = $true

  New-MarkdownIfMissing -Title $title -RelDir $rel
}

# ---- Report ----
Write-Host ""
Write-Host "Base directory: $BaseDir" -ForegroundColor Cyan
Write-Host "----------------------------------------------"
Write-Host ("Created: {0}" -f $created.Count) -ForegroundColor Green
$created | ForEach-Object { Write-Host "  + $_" -ForegroundColor Green }
Write-Host ("Already present: {0}" -f $already.Count) -ForegroundColor Yellow
$already | ForEach-Object { Write-Host "  = $_" -ForegroundColor Yellow }
Write-Host ("Skipped: {0}" -f $skipped.Count) -ForegroundColor DarkGray
$skipped | ForEach-Object { Write-Host "  - $_" -ForegroundColor DarkGray }
if ($errors.Count -gt 0) {
  Write-Host ("Errors: {0}" -f $errors.Count) -ForegroundColor Red
  $errors | ForEach-Object { Write-Host "  ! $_" -ForegroundColor Red }
}
