import React, { useEffect, useState } from 'react';
import {
  getConsentStatus,
  setConsentStatus,
  loadClarity,
} from '../../../analytics/consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    if (!status) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus('accepted');
    loadClarity();
    setVisible(false);
  };

  const handleReject = () => {
    setConsentStatus('rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '16px 20px',
        background: '#000',     // 🔥 Black background
        color: '#fff',          // 🔥 White text
        borderTop: '1px solid #333',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      <span style={{ flex: 1, fontSize: '0.95rem', lineHeight: 1.4 }}>
        This site uses optional analytics to understand usage and improve content. Analytics will load only if you choose to enable it. You can withdraw your consent anytime by clearing your localStorage or visiting our dedicated Privacy Notice page. Our Privacy Notice page has one click button to revoke cookie consent. Read our{' '}
        <a href="/privacy" style={{ color: '#4FC3F7', textDecoration: 'underline' }}>
          Privacy Policy
        </a>.
      </span>

      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Reject Button */}
        <button
          type="button"
          onClick={handleReject}
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #fff',
            background: '#fff',      // 🔥 White background
            color: '#000',            // 🔥 Black text
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
          }}
        >
          Reject
        </button>

        {/* Accept Button */}
        <button
          type="button"
          onClick={handleAccept}
          style={{
            padding: '8px 16px',
            borderRadius: '6px',
            border: 'none',
            background: '#00C853',   // 🔥 Green
            color: '#fff',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
