/**
 * Analytics utility for tracking landing page events
 * Captures UTM parameters and logs page views, CTA clicks, and form submissions
 */

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

interface AnalyticsEvent {
  event_type: 'page_view' | 'cta_click' | 'form_submission';
  landing_slug: string;
  utm_params: UTMParams;
  timestamp: string;
}

/**
 * Extract UTM parameters from URL query string
 */
export function getUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined,
  };
}

/**
 * Log an analytics event
 */
export function logAnalyticsEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;
  
  // Send to analytics service (e.g., Google Analytics, Mixpanel, etc.)
  console.log('Analytics Event:', event);
  
  // Store in localStorage for reference
  const events = JSON.parse(localStorage.getItem('landing_events') || '[]');
  events.push(event);
  localStorage.setItem('landing_events', JSON.stringify(events));
  
  // If you have a custom analytics endpoint, you can send it here:
  // fetch('/api/analytics', { method: 'POST', body: JSON.stringify(event) });
}

/**
 * Track page view
 */
export function trackPageView(landingSlug: string): void {
  const utmParams = getUTMParams();
  logAnalyticsEvent({
    event_type: 'page_view',
    landing_slug: landingSlug,
    utm_params: utmParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track CTA click
 */
export function trackCTAClick(landingSlug: string): void {
  const utmParams = getUTMParams();
  logAnalyticsEvent({
    event_type: 'cta_click',
    landing_slug: landingSlug,
    utm_params: utmParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Track form submission
 */
export function trackFormSubmission(landingSlug: string): void {
  const utmParams = getUTMParams();
  logAnalyticsEvent({
    event_type: 'form_submission',
    landing_slug: landingSlug,
    utm_params: utmParams,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Get all stored analytics events
 */
export function getStoredEvents(): AnalyticsEvent[] {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('landing_events') || '[]');
}

/**
 * Clear stored analytics events
 */
export function clearStoredEvents(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('landing_events');
}
