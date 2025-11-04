$pages = @(
  '', 'wordpress', 'cloud-hosting', 'managed-vps', 'vps', 'free-hosting', 'hosting',
  'services', 'certificates', 'cdn', 'website-builder', 'domain', 'pricing', 'compare',
  'business-email', 'email', 'solutions', 'solutions/business-hosting',
  'solutions/ecommerce-hosting', 'solutions/agency-hosting', 'solutions/high-traffic',
  'solutions/enterprise', 'managed-services', 'website-services', 'website-maintenance',
  'website-care-plans', 'website-updates', 'custom-development', 'website-redesign',
  'landing-pages', 'ecommerce-development', 'digital-marketing', 'seo', 'ppc',
  'content-marketing', 'email-marketing', 'conversion-optimization', 'social-media',
  'social-media-management', 'social-media-ads', 'content-creation',
  'business-communications', 'phone-answering', 'virtual-receptionist', 'live-chat',
  'chatbots', 'customer-support-services', 'reputation-management', 'review-management',
  'online-reputation', 'solutions/complete-website-solution', 'solutions/startup-package',
  'solutions/growth-package', 'solutions/all-in-one', 'coupons/website-package',
  'coupons/marketing-bundle', 'coupons/complete-solution',
  'guides/website-launch-checklist', 'guides/digital-marketing-basics',
  'guides/social-media-best-practices', 'knowledge-base', 'migrations', 'faqs', 'status',
  'legal/report-abuse', 'contact', 'login', 'trust', 'infrastructure', 'security',
  'performance', 'sustainability', 'case-studies', 'reviews', 'about',
  'web-design-and-development', 'partners', 'affiliates', 'careers', 'news', 'changelog',
  'uptime', 'coupons', 'coupons/new-year-sale', 'coupons/valentines', 'coupons/easter',
  'coupons/financial-year-end', 'coupons/small-business-week', 'coupons/mid-year',
  'coupons/prime-day', 'coupons/back-to-school', 'coupons/halloween',
  'coupons/black-friday', 'coupons/cyber-monday', 'coupons/christmas',
  'coupons/boxing-day', 'coupons/student', 'coupons/nonprofit', 'coupons/referral',
  'coupons/flash-deal', 'coupons/new-customer', 'coupons/switch-save',
  'coupons/3-year-deal', 'coupons/vps-deals', 'coupons/dedicated', 'coupons/managed-wp',
  'coupons/bundle-deal', 'coupons/ecommerce', 'coupons/reseller', 'coupons/developer',
  'coupons/local-business', 'coupons/blog-creator', 'free-audit',
  'guides/migration-checklist', 'guides/wp-security', 'quiz/hosting-selector',
  '7-steps-to-90-pagespeed', 'legal', 'terms-and-conditions',
  'legal/website-terms-of-use', 'privacy-policy', 'legal/cookie-policy', 'gdpr',
  'legal/data-processing-agreement', 'legal/acceptable-use-policy',
  'legal/abuse-policy', 'legal/dmca', 'legal/affiliate-terms',
  'legal/security-responsible-disclosure', 'legal/responsible-disclosure',
  'legal/archive', 'legal/shared-hosting-sla', 'legal/wordpress-hosting-sla',
  'legal/cloud-hosting-sla', 'legal/vps-service-level-agreement', 'legal/cdn-sla',
  'gaming', 'gaming/cod-mobile', 'gaming/clips', 'gaming/gear', 'gaming/servers',
  'gaming/servers/minecraft', 'gaming/servers/voice', 'gaming/servers/custom'
)

foreach ($page in $pages) {
  if ($page -eq '') {
    $filePath = "index.md"
  } else {
    $filePath = "$page.md"
  }
  
  $dir = Split-Path -Parent $filePath
  if ($dir) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }
  
  New-Item -ItemType File -Force -Path $filePath | Out-Null
  Write-Host "Created: $filePath"
}

Write-Host "`n✅ All pages created successfully!"