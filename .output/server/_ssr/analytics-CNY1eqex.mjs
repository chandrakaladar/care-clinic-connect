//#region node_modules/.nitro/vite/services/ssr/assets/analytics-CNY1eqex.js
var measurementId = "G-1P379ERH5V";
var initialized = false;
function initAnalytics() {
	if (initialized || false) return;
	initialized = true;
	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
	document.head.appendChild(script);
	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag(...args) {
		window.dataLayer.push(args);
	};
	window.gtag("js", /* @__PURE__ */ new Date());
	window.gtag("config", measurementId);
}
function trackEvent(eventName, params) {
	if (!initialized || typeof window.gtag !== "function") return;
	window.gtag("event", eventName, params);
}
function trackPageView(path) {
	trackEvent("page_view", { page_path: path });
}
/** Appointment form submitted successfully. */
function trackAppointmentSubmit(source, concern) {
	trackEvent("appointment_submit", {
		source,
		concern: concern || "not_specified"
	});
}
/** Click-to-call (tel:) link clicked. */
function trackPhoneCall(location) {
	trackEvent("phone_call_click", { link_location: location });
}
/** WhatsApp chat / booking link clicked. */
function trackWhatsAppClick(location) {
	trackEvent("whatsapp_click", { link_location: location });
}
/**
* Global delegated listener: automatically tracks every tel: and wa.me link
* click anywhere in the app, so nav/footer/button links are covered.
*/
function initGlobalClickTracking() {
	document.addEventListener("click", (e) => {
		const anchor = e.target.closest?.("a[href]");
		if (!anchor) return;
		const href = anchor.getAttribute("href") || "";
		if (href.startsWith("tel:")) trackPhoneCall(window.location.pathname);
		else if (href.includes("wa.me") || href.includes("whatsapp")) trackWhatsAppClick(window.location.pathname);
	}, { capture: true });
}
//#endregion
export { trackWhatsAppClick as a, trackPageView as i, initGlobalClickTracking as n, trackAppointmentSubmit as r, initAnalytics as t };
