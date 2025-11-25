// src/analytics/consent.js
const STORAGE_KEY = 'cookie-consent'; // 'accepted' | 'rejected' | null

export function getConsentStatus() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(STORAGE_KEY);
}

export function setConsentStatus(status) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, status);
}

export function hasAcceptedConsent() {
  return getConsentStatus() === 'accepted';
}

// --- Microsoft Clarity loader ---
let clarityLoaded = false;

export function loadClarity() {
  if (clarityLoaded) return;
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  clarityLoaded = true;

  // 💡 Replace this with YOUR real Clarity project ID from clarity.ms
  const CLARITY_ID = 'tdrwobhc5y';

  (function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
}
