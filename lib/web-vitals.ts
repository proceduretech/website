/**
 * Core Web Vitals tracking for PageSpeed optimization
 * Manual tracking without external dependencies
 */

export function reportWebVitals() {
  if (typeof window === 'undefined') return;

  // Track LCP
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        sendToAnalytics({
          name: 'LCP',
          value: lastEntry.startTime,
          id: `v1-${Date.now()}`,
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      // Observer not supported
    }

    try {
      // Track CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value ?? 0;
          }
        }
        sendToAnalytics({
          name: 'CLS',
          value: clsValue,
          id: `v1-${Date.now()}`,
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch {
      // Observer not supported
    }
  }
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
  }
}

function sendToAnalytics(metric: { name: string; value: number; id: string }) {
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log('[Web Vitals]', metric.name, metric.value);
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fonts = [
    '/fonts/outfit-v11.woff2',
    '/fonts/inter-v13.woff2',
  ];

  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
}

/**
 * Defer non-critical CSS
 */
export function deferNonCriticalCSS() {
  if (typeof window === 'undefined') return;

  const loadDeferredStyles = () => {
    const addStylesNode = document.getElementById('deferred-styles');
    if (addStylesNode) {
      const replacement = document.createElement('div');
      replacement.innerHTML = addStylesNode.textContent || '';
      document.body.appendChild(replacement);
      addStylesNode.parentElement?.removeChild(addStylesNode);
    }
  };

  const raf = window.requestAnimationFrame || ((cb) => window.setTimeout(cb, 0));

  if (document.readyState === 'complete') {
    raf(loadDeferredStyles);
  } else {
    window.addEventListener('load', () => raf(loadDeferredStyles));
  }
}
