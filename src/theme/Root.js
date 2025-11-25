import React, { useEffect } from 'react';
import CookieConsentBanner from '../components/HomepageFeatures/CookieConsentBanner';
import { hasAcceptedConsent, loadClarity } from '../analytics/consent';

export default function Root({ children }) {
  useEffect(() => {
    if (hasAcceptedConsent()) {
      loadClarity();
    }
  }, []);

  return (
    <>
      {children}
      <CookieConsentBanner />
    </>
  );
}