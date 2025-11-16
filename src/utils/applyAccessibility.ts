/**
 * Accessibility application initialization
 * WCAG 2.2 Level AA compliant - applies preferences to DOM on page load
 */

import { AccessibilityEngine } from './accessibilityEngine';
import { AccessibilityStore } from './accessibilityStore';
import type { AccessibilityPreferences } from './accessibilityEngine';

/**
 * Initialize accessibility system on page load
 * WCAG 2.2 Level AA - Progressive enhancement approach
 */
export function initializeAccessibility(): void {
  // Prevent multiple initializations
  if (window.__accessibilityInitialized) {
    return;
  }
  window.__accessibilityInitialized = true;

  const engine = AccessibilityEngine.getInstance();
  const store = AccessibilityStore.getInstance();

  // Step 1: Detect and apply OS preferences
  try {
    const osPrefs = engine.detectOSPreferences();
    store.setOSPreferences(osPrefs);

    // Step 2: Apply stored or default preferences
    const preferences = store.getPreferences();
    applyAccessibilityPreferences(preferences);

    // Step 3: Subscribe to preference changes
    const unsubscribe = store.subscribe((state) => {
      if (state.isInitialized || !state.preferences) return;
      applyAccessibilityPreferences(state.preferences);
    });

    // Store unsubscribe function for cleanup if needed
    (window as any).__accessibilityCleanup = unsubscribe;

    // Mark as ready
    store.markInitialized();

  } catch (error) {
    console.error('Failed to initialize accessibility system:', error);
    // Fallback to basic accessible defaults
    applyFallbackDefaults();
  }
}

/**
 * Apply accessibility preferences to DOM
 * Uses CSS custom properties for theme variables
 */
export function applyAccessibilityPreferences(prefs: AccessibilityPreferences): void {
  const root = document.documentElement;
  const engine = AccessibilityEngine.getInstance();
  const sizing = engine.getSizingMultiplier(prefs);

  // Font size scaling (WCAG 200% requirement)
  root.style.setProperty('--font-scale', sizing.fontSize.toString());

  // Line height and spacing
  root.style.setProperty('--line-height-scale', sizing.spacing.toString());
  root.style.setProperty('--paragraph-spacing-scale', (sizing.spacing * 0.8).toString());

  // Letter and word spacing for dyslexia support
  if (sizing.letterSpacing) {
    root.style.setProperty('--letter-spacing', `${sizing.letterSpacing}em`);
  } else {
    root.style.removeProperty('--letter-spacing');
  }

  if (sizing.wordSpacing) {
    root.style.setProperty('--word-spacing', `${sizing.wordSpacing}em`);
  } else {
    root.style.removeProperty('--word-spacing');
  }

  // High contrast themes
  applyContrastTheme(prefs.contrast, root);

  // Motion preferences (critical for vestibular disorders)
  applyMotionPreferences(prefs.motion, root);

  // Focus enhancement (WCAG requirement)
  applyFocusEnhancement(prefs.focusEnhancement, root);

  // Link highlighting
  if (prefs.linkHighlighting) {
    root.classList.add('accessibility-link-highlighting');
  } else {
    root.classList.remove('accessibility-link-highlighting');
  }

  // Reading guide (focus line)
  if (prefs.readingGuide) {
    root.classList.add('accessibility-reading-guide');
  } else {
    root.classList.remove('accessibility-reading-guide');
  }

  // Apply body classes for comprehensive theming
  updateBodyClasses(prefs);

  // Announce changes to screen readers (WCAG AA)
  announcePreferenceChanges(prefs);
}

/**
 * Apply high contrast theme variants
 * WCAG 2.2 Level AA contrast requirements
 */
function applyContrastTheme(contrast: string, root: HTMLElement): void {
  // Reset all contrast classes
  root.classList.remove('theme-high-contrast-light', 'theme-high-contrast-dark', 'theme-dark');

  switch (contrast) {
    case 'high-light':
      root.classList.add('theme-high-contrast-light');
      root.style.setProperty('--text-color', '#000000');
      root.style.setProperty('--background-color', '#FFFFFF');
      root.style.setProperty('--border-color', '#000000');
      break;

    case 'high-dark':
      root.classList.add('theme-high-contrast-dark');
      root.style.setProperty('--text-color', '#FFFF00');
      root.style.setProperty('--background-color', '#000000');
      root.style.setProperty('--border-color', '#FFFF00');
      break;

    case 'dark':
      root.classList.add('theme-dark');
      root.style.setProperty('--text-color', '#FFFFFF');
      root.style.setProperty('--background-color', '#1a1a1a');
      root.style.setProperty('--border-color', '#FFFFFF');
      break;

    default: // 'default'
      root.style.setProperty('--text-color', 'var(--black)');
      root.style.setProperty('--background-color', '#FFF8DC'); // Original cream
      root.style.setProperty('--border-color', 'var(--black)');
      break;
  }
}

/**
 * Apply motion preferences for vestibular disorders
 * Respect user preference for reduced motion
 */
function applyMotionPreferences(motion: string, root: HTMLElement): void {
  // Reset motion classes
  root.classList.remove('motion-reduced', 'motion-disabled');

  if (motion === 'reduced') {
    root.classList.add('motion-reduced');
    root.style.setProperty('--animation-duration', '0.5s'); // Gentler animations
    root.style.setProperty('--transition-duration', '0.3s');
  } else if (motion === 'disabled') {
    root.classList.add('motion-disabled');
    root.style.setProperty('--animation-duration', '0s');
    root.style.setProperty('--transition-duration', '0s');
  } else {
    // Default - normal motion
    root.style.setProperty('--animation-duration', '0.2s');
    root.style.setProperty('--transition-duration', '0.15s');
  }
}

/**
 * Apply focus enhancement for keyboard navigation
 * WCAG 2.2 Level AA requirement - visible focus indicators
 */
function applyFocusEnhancement(enhanced: boolean, root: HTMLElement): void {
  if (enhanced) {
    root.classList.add('focus-enhanced');
    // Ensure 3:1 contrast ratio for focus indicators
    root.style.setProperty('--focus-ring-color', 'var(--gold)');
    root.style.setProperty('--focus-ring-width', '3px');
    root.style.setProperty('--focus-ring-style', 'solid');
  } else {
    root.classList.remove('focus-enhanced');
  }
}

/**
 * Update body classes for comprehensive theming
 */
function updateBodyClasses(prefs: AccessibilityPreferences): void {
  const body = document.body;

  // Font size classes
  body.classList.remove('font-size-small', 'font-size-large', 'font-size-extra-large');
  if (prefs.fontSize !== 'medium') {
    body.classList.add(`font-size-${prefs.fontSize.replace('-', '-')}`);
  }

  // Spacing classes
  body.classList.remove('spacing-relaxed', 'spacing-loose');
  if (prefs.spacing !== 'normal') {
    body.classList.add(`spacing-${prefs.spacing}`);
  }
}

/**
 * Announce preference changes to screen readers
 * WCAG 2.2 Level AA - User notification of dynamic changes
 */
function announcePreferenceChanges(prefs: AccessibilityPreferences): void {
  const announcement = `Accessibility preferences updated. Font size: ${prefs.fontSize}, Contrast: ${prefs.contrast}, Motion: ${prefs.motion}.`;

  // Create or update live region for screen reader announcements
  let liveRegion = document.getElementById('accessibility-announcer');
  if (!liveRegion) {
    liveRegion = document.createElement('div');
    liveRegion.id = 'accessibility-announcer';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
  }

  liveRegion.textContent = announcement;

  // Clear announcement after delay
  setTimeout(() => {
    if (liveRegion) liveRegion.textContent = '';
  }, 5000);
}

/**
 * Fallback defaults when initialization fails
 * Ensures basic accessibility even with JavaScript errors
 */
function applyFallbackDefaults(): void {
  const root = document.documentElement;

  // Basic accessible defaults (no JavaScript enhancements)
  root.style.setProperty('--font-scale', '1');
  root.style.setProperty('--line-height-scale', '1');
  root.style.setProperty('--focus-ring-color', 'var(--gold)');
  root.style.setProperty('--focus-ring-width', '3px');

  // Ensure focus enhancement by default
  root.classList.add('focus-enhanced');

  console.info('Applied basic accessibility fallbacks');
}

// Global type for initialization flag
declare global {
  interface Window {
    __accessibilityInitialized?: boolean;
    __accessibilityCleanup?: () => void;
  }
}

// Initialize immediately when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAccessibility);
} else {
  // DOM already loaded
  initializeAccessibility();
}
