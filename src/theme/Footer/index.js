import React from 'react';
import OriginalFooter from '@theme-original/Footer';
import VisitorCounter from '../../components/HomepageFeatures/VisitorCounter';

export default function Footer(props) {
  return (
    <>
      <OriginalFooter {...props} />

      <div
        style={{
          background: 'var(--ifm-footer-background-color)',
          color: 'var(--ifm-footer-link-color)',
          textAlign: 'center',
          padding: '0.5rem 0',
          fontSize: '0.8rem',
          borderTop: '1px solid rgba(255,255,255,0.16)',
        }}
      >
        <VisitorCounter />
      </div>
    </>
  );
}
