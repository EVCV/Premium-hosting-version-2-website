/**
 * Reactive accessibility preferences store
 * WCAG 2.2 Level AA compliant - manages state persistence and reactive updates
 */

import type { AccessibilityPreferences, OSPreferences } from './accessibilityEngine';

interface StoreState {
  preferences: AccessibilityPreferences;
  osPreferences: OSPreferences;
  isInitialized: boolean;
  isPanelOpen: boolean;
}

type StoreSubscriber = (state: StoreState) => void;

export class AccessibilityStore {
  private static instance: AccessibilityStore;
  private state: StoreState;
  private subscribers: Set<StoreSubscriber> = new Set();
  private storageKey = 'premium-hosting-accessibility-preferences';
  private eventTarget: EventTarget;

  static getInstance(): AccessibilityStore {
    if (!AccessibilityStore.instance) {
      AccessibilityStore.instance = new AccessibilityStore();
    }
    return AccessibilityStore.instance;
  }

  private constructor() {
    this.eventTarget = new EventTarget();

    // Initialize with OS preferences first
    this.state = {
      preferences: this.getDefaultPreferences(),
      osPreferences: {
        colorScheme: 'no-preference',
        reducedMotion: 'no-preference'
      },
      isInitialized: false,
      isPanelOpen: false
    };

    this.loadPersistedPreferences();
    this.bindOSEventListeners();
  }

  /**
   * Get current accessibility preferences
   * WCAG 2.2 Level AA - Always provide accessible defaults
   */
  getPreferences(): AccessibilityPreferences {
    return { ...this.state.preferences };
  }

  /**
   * Update accessibility preferences with validation
   * Persists changes and triggers UI updates
   */
  updatePreferences(updates: Partial<AccessibilityPreferences>): void {
    const newPreferences = { ...this.state.preferences, ...updates };

    // Import engine for validation
    import('./accessibilityEngine').then(({ AccessibilityEngine }) => {
      const engine = AccessibilityEngine.getInstance();
      const validated = engine.validatePreferences(newPreferences);

      // Merge validated preferences
      this.state.preferences = { ...this.state.preferences, ...validated };

      // Persist to storage
      this.persistPreferences();

      // Update DOM immediately for critical preferences
      this.applyImmediateUpdates();

      // Notify subscribers
      this.notifySubscribers();
    });
  }

  /**
   * Set OS preferences detected by the engine
   */
  setOSPreferences(osPrefs: OSPreferences): void {
    this.state.osPreferences = { ...osPrefs };

    // Apply OS preferences to user preferences if not manually overridden
    const savedPrefs = this.loadPersistedPreferences();
    if (!savedPrefs) {
      // First time - apply OS defaults
      import('./accessibilityEngine').then(({ AccessibilityEngine }) => {
        const engine = AccessibilityEngine.getInstance();
        const defaults = engine.getDefaultPreferences();
        this.updatePreferences(defaults);
      });
    }

    this.notifySubscribers();
  }

  /**
   * Toggle accessibility panel visibility
   */
  togglePanel(): void {
    this.state.isPanelOpen = !this.state.isPanelOpen;
    this.notifySubscribers();
  }

  /**
   * Close accessibility panel
   */
  closePanel(): void {
    this.state.isPanelOpen = false;
    this.notifySubscribers();
  }

  /**
   * Subscribe to store changes
   * Returns unsubscribe function
   */
  subscribe(callback: StoreSubscriber): () => void {
    this.subscribers.add(callback);

    // Immediately call with current state
    callback({ ...this.state });

    return () => {
      this.subscribers.delete(callback);
    };
  }

  /**
   * Reset all preferences to defaults
   * WCAG 2.2 Level AA - Always provide accessible fallbacks
   */
  resetToDefaults(): void {
    import('./accessibilityEngine').then(({ AccessibilityEngine }) => {
      const engine = AccessibilityEngine.getInstance();
      const defaults = engine.getDefaultPreferences();
      this.updatePreferences(defaults);
    });
  }

  /**
   * Export preferences for debugging or backup
   */
  exportPreferences(): string {
    return JSON.stringify({
      preferences: this.state.preferences,
      osPreferences: this.state.osPreferences,
      timestamp: new Date().toISOString()
    }, null, 2);
  }

  /**
   * Import preferences from JSON string
   */
  importPreferences(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.preferences) {
        this.updatePreferences(data.preferences);
        return true;
      }
    } catch (error) {
      console.error('Failed to import accessibility preferences:', error);
    }
    return false;
  }

  private getDefaultPreferences(): AccessibilityPreferences {
    return {
      fontSize: 'medium',
      contrast: 'default',
      spacing: 'normal',
      motion: 'enabled',
      focusEnhancement: true, // WCAG requirement
      linkHighlighting: false,
      readingGuide: false,
      letterSpacing: false,
      wordSpacing: false
    };
  }

  private loadPersistedPreferences(): AccessibilityPreferences | null {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.preferences) {
          this.state.preferences = { ...this.getDefaultPreferences(), ...parsed.preferences };
          return this.state.preferences;
        }
      }
    } catch (error) {
      console.warn('Failed to load persisted accessibility preferences:', error);
    }
    return null;
  }

  private persistPreferences(): void {
    try {
      const data = {
        preferences: this.state.preferences,
        timestamp: new Date().toISOString(),
        version: '1.0'
      };
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('Failed to persist accessibility preferences:', error);
    }
  }

  private applyImmediateUpdates(): void {
    // Apply critical preference changes immediately to DOM
    // This ensures accessibility settings work even before full re-render

    const prefs = this.state.preferences;
    const root = document.documentElement;

    // Critical focus enhancement
    if (prefs.focusEnhancement) {
      root.style.setProperty('--focus-outline-width', '3px');
      root.style.setProperty('--focus-outline-style', 'solid');
      root.style.setProperty('--focus-outline-color', 'var(--gold)');
    }

    // Critical motion preferences
    if (prefs.motion !== 'enabled') {
      root.style.setProperty('--animation-duration', '0s');
      root.style.setProperty('--transition-duration', '0s');
    } else {
      root.style.setProperty('--animation-duration', '0.2s');
      root.style.setProperty('--transition-duration', '0.15s');
    }
  }

  private bindOSEventListeners(): void {
    // Listen for OS preference changes
    window.addEventListener('accessibilityPreferenceChanged', (event: any) => {
      const { type, value } = event.detail;

      // Update OS preferences in store
      if (type === 'colorScheme') {
        this.setOSPreferences({
          ...this.state.osPreferences,
          colorScheme: value
        });
      } else if (type === 'motion') {
        this.setOSPreferences({
          ...this.state.osPreferences,
          reducedMotion: value === 'reduce' ? 'reduce' : 'no-preference'
        });
      }
    });
  }

  private notifySubscribers(): void {
    const currentState = { ...this.state };
    this.subscribers.forEach(callback => {
      try {
        callback(currentState);
      } catch (error) {
        console.error('Accessibility store subscriber error:', error);
      }
    });
  }

  // Mark store as initialized after first OS detection
  markInitialized(): void {
    this.state.isInitialized = true;
    this.notifySubscribers();
  }
}
