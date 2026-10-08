// Google Analytics (GA4) initialization and event tracking helpers.

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as
  | string
  | undefined;

let initialized = false;

export function initAnalytics() {
  if (initialized || !measurementId) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (!initialized || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

export function trackPageView(path: string) {
  trackEvent("page_view", { page_path: path });
}

/** Appointment form submitted successfully. */
export function trackAppointmentSubmit(source: string, concern?: string) {
  trackEvent("appointment_submit", { source, concern: concern || "not_specified" });
}

/** Click-to-call (tel:) link clicked. */
export function trackPhoneCall(location: string) {
  trackEvent("phone_call_click", { link_location: location });
}

/** WhatsApp chat / booking link clicked. */
export function trackWhatsAppClick(location: string) {
  trackEvent("whatsapp_click", { link_location: location });
}

/**
 * Global delegated listener: automatically tracks every tel: and wa.me link
 * click anywhere in the app, so nav/footer/button links are covered.
 */
export function initGlobalClickTracking() {
  document.addEventListener(
    "click",
    (e) => {
      const anchor = (e.target as HTMLElement).closest?.("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackPhoneCall(window.location.pathname);
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackWhatsAppClick(window.location.pathname);
      }
    },
    { capture: true }
  );
}
