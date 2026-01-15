/**
 * Intersection Observer utility for lazy loading components
 * Optimizes INP and reduces initial JavaScript execution
 */

export function createIntersectionObserver(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
}

export function observeElement(
  element: Element,
  onIntersect: () => void,
  options?: IntersectionObserverInit
): () => void {
  const observer = createIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
          observer?.unobserve(entry.target);
        }
      });
    },
    options
  );

  if (observer) {
    observer.observe(element);
    return () => observer.disconnect();
  }

  // Fallback: execute immediately if IntersectionObserver not supported
  onIntersect();
  return () => {};
}

/**
 * Request Idle Callback with fallback for older browsers
 */
export function requestIdleCallback(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if (typeof window === 'undefined') return 0;

  if ('requestIdleCallback' in window) {
    return (window as Window).requestIdleCallback(callback, options);
  }

  // Fallback to setTimeout
  return (window as Window).setTimeout(() => {
    const start = Date.now();
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
    });
  }, 1);
}

export function cancelIdleCallback(id: number): void {
  if (typeof window === 'undefined') return;

  if ('cancelIdleCallback' in window) {
    (window as Window).cancelIdleCallback(id);
  } else {
    (window as Window).clearTimeout(id);
  }
}
