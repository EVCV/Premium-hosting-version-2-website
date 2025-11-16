/**
 * Core accessibility preference engine
 * WCAG 2.2 Level AA compliant - handles OS preference detection and manual overrides
 */

export interface AccessibilityPreferences {
  // Visual preferences
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  contrast: 'default' | 'high-light' | 'high-dark' | 'dark';
  spacing: 'normal' | 'relaxed' | 'loose';

  // Motion & interaction
  motion: 'enabled' | 'reduced' | 'disabled';
  focusEnhancement: boolean;
  linkHighlighting: boolean;
  readingGuide: boolean;

  // Communication
  letterSpacing: boolean;
  wordSpacing: boolean;
}

export interface OSPreferences {
  colorScheme: 'light' | 'dark' | 'no-preference';
  reducedMotion: 'reduce' | 'no-preference';
  reducedTransparency?: boolean;
  highContrast?: boolean;
}

export class AccessibilityEngine {
  private static instance: AccessibilityEngine;
  private osPreferences: OSPreferences = {
    colorScheme: 'no-preference',
    reducedMotion: 'no-preference'
  };

  static getInstance(): AccessibilityEngine {
    if (!AccessibilityEngine.instance) {
      AccessibilityEngine.instance = new AccessibilityEngine();
    }
    return AccessibilityEngine.instance;
  }

  /**
   * Detect OS/user agent preferences
   * WCAG 2.2 Level AA - Respect system settings where possible
   */
  detectOSPreferences(): OSPreferences {
    // Color scheme detection
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.osPreferences.colorScheme = colorSchemeQuery.matches ? 'dark' :
                                   window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' :
                                   'no-preference';

    // Reduced motion detection
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.osPreferences.reducedMotion = motionQuery.matches ? 'reduce' : 'no-preference';

    // Reduced transparency detection (if supported)
    const transparencyQuery = window.matchMedia('(prefers-reduced-transparency: reduce)');
    this.osPreferences.reducedTransparency = transparencyQuery.matches;

    // High contrast detection (limited browser support)
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    this.osPreferences.highContrast = contrastQuery.matches;

    // Listen for changes
    colorSchemeQuery.addEventListener('change', (e) => {
      this.osPreferences.colorScheme = e.matches ? 'dark' : 'light';
      this.notifyPreferenceChanged('colorScheme', this.osPreferences.colorScheme);
    });

    motionQuery.addEventListener('change', (e) => {
      this.osPreferences.reducedMotion = e.matches ? 'reduce' : 'no-preference';
      this.notifyPreferenceChanged('motion', this.osPreferences.reducedMotion);
    });

    return { ...this.osPreferences };
  }

  /**
   * Get default preferences based on OS settings
   * Follows progressive enhancement pattern
   */
  getDefaultPreferences(): Partial<AccessibilityPreferences> {
    const defaults: Partial<AccessibilityPreferences> = {
      fontSize: 'medium',
      contrast: 'default',
      spacing: 'normal',
      focusEnhancement: true, // WCAG requires visible focus indicators
      linkHighlighting: false,
      readingGuide: false,
      letterSpacing: false,
      wordSpacing: false
    };

    // Apply OS-based defaults
    if (this.osPreferences.colorScheme === 'dark') {
      defaults.contrast = 'dark';
    }

    if (this.osPreferences.reducedMotion === 'reduce') {
      defaults.motion = 'reduced';
    } else {
      defaults.motion = 'enabled';
    }

    return defaults;
  }

  /**
   * Validate preference combinations for WCAG compliance
   * Ensures no dangerous combinations (e.g., high contrast + low contrast text)
   */
  validatePreferences(prefs: Partial<AccessibilityPreferences>): Partial<AccessibilityPreferences> {
    const validated = { ...prefs };

    // Ensure focus enhancement is always available unless explicitly disabled for medical reasons
    if (validated.focusEnhancement === false) {
      // WCAG requires visible focus indicators - only disable if medically necessary
      console.warn('Focus enhancement disabled - ensure keyboard navigation remains accessible');
    }

    // High contrast should maintain readability
    if (validated.contrast?.startsWith('high-')) {
      if (validated.fontSize === 'small') {
        console.warn('Small font size with high contrast may reduce readability');
      }
    }

    // Motion preferences validation
    if (validated.motion === 'disabled') {
      // All animations disabled - ensure UI remains functional
      validated.readingGuide = false; // Reading guides typically use animation
    }

    return validated;
  }

  /**
   * Calculate WCAG-compliant sizing multipliers
   * Supports up to 200% text resize requirement (Level AA)
   */
  getSizingMultiplier(prefs: AccessibilityPreferences): {
    fontSize: number;
    spacing: number;
    letterSpacing?: number;
    wordSpacing?: number;
  } {
    const multipliers = {
      fontSize: 1,
      spacing: 1
    };

    // Font size scaling (supports 200% WCAG requirement)
    switch (prefs.fontSize) {
      case 'small': multipliers.fontSize = 0.875; break;
      case 'medium': multipliers.fontSize = 1; break;
      case 'large': multipliers.fontSize = 1.25; break;
      case 'extra-large': multipliers.fontSize = 2; break;
    }

    // Line height and spacing adjustments
    switch (prefs.spacing) {
      case 'normal': multipliers.spacing = 1; break;
      case 'relaxed': multipliers.spacing = 1.5; break;
      case 'loose': multipliers.spacing = 2; break;
    }

    // Letter/word spacing for dyslexia support
    if (prefs.letterSpacing) {
      (multipliers as any).letterSpacing = multipliers.fontSize * 0.1; // 0.1em additional spacing
    }
    if (prefs.wordSpacing) {
      (multipliers as any).wordSpacing = multipliers.fontSize * 0.25; // 0.25em additional spacing
    }

    return multipliers as any;
  }

  private notifyPreferenceChanged(type: string, value: any) {
    // Emit custom event for store updates
    const event = new CustomEvent('accessibilityPreferenceChanged', {
      detail: { type, value }
    });
    window.dispatchEvent(event);
  }
}
