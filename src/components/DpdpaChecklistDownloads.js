import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';

// ========================================================
// CHECKLIST CONFIGURATION
// ========================================================
const CHECKLISTS = [
  {
    id: 'general',
    label: '🏢 DPDPA General Compliance Checklist (Universal)',
    filePath: '/checklists/DPDPA_2025_Checklist.xlsx',
    buttonText: 'Download General Checklist (Free)',
  },
  {
    id: 'healthcare',
    label: '🏥 Healthcare Sector',
    filePath: '/checklists/DPDPA_Healthcare_Checklist.xlsx',
    buttonText: 'Download Healthcare Checklist (Free)',
  },
  {
    id: 'social',
    label: '📱 Social Media & Digital Platforms',
    filePath: '/checklists/DPDPA_SocialMedia_Checklist.xlsx',
    buttonText: 'Download Social Media Checklist (Free)',
  },
  {
    id: 'bfsi',
    label: '💰 BFSI (Banking, Financial Services & Insurance)',
    filePath: '/checklists/DPDPA_BFSI_Checklist.xlsx',
    buttonText: 'Download BFSI Checklist (Free)',
  },
  {
    id: 'education',
    label: '🎓 Education Sector',
    filePath: '/checklists/DPDPA_Edu_2025_Checklist.xlsx',
    buttonText: 'Download Education Checklist (Free)',
  },
  {
    id: 'manufacturing',
    label: '🏭 Manufacturing & Industrial',
    filePath: '/checklists/DPDPA_Manufacturing_Industrial_Checklist.xlsx',
    buttonText: 'Download Manufacturing & Industrial Checklist (Free)',
  },
];

// ========================================================
// PERSONAL / DISPOSABLE DOMAIN BLOCKING
// ========================================================
function isCommonPersonalDomain(domain) {
  domain = domain.toLowerCase();
  const list = [
    'gmail.com','googlemail.com','yahoo.com','yahoo.in','yahoo.co.in',
    'outlook.com','outlook.in','hotmail.com','live.com','live.in',
    'icloud.com','me.com','aol.com','proton.me','protonmail.com','zoho.com',
    'gmx.com','yandex.com','pm.me','tutanota.com','tuta.io','fastmail.com',
    'hey.com',
  ];
  return list.includes(domain);
}

function isDisposableDomain(domain) {
  domain = domain.toLowerCase();

  const exact = [
    'mailinator.com','10minutemail.com','10minutemail.net','guerrillamail.com',
    'trashmail.com','temp-mail.org','tempmail.com','tempmail.net','yopmail.com',
    'getnada.com','sharklasers.com','dispostable.com','maildrop.cc',
    'mailnull.com','throwawaymail.com',
  ];

  if (exact.includes(domain)) return true;

  const partial = [
    'mailinator','guerrillamail','10minutemail','tempmail','trashmail',
    'yopmail','sharklasers','nospam',
  ];

  return partial.some((k) => domain.includes(k));
}

// ========================================================
// FAKE EMAIL DETECTION (LOCAL-PART)
// ========================================================
function looksGibberishToken(token) {
  const letters = token.replace(/[^a-z]/g, '');
  if (letters.length <= 6) return false;

  const vowels = (letters.match(/[aeiou]/g) || []).length;
  const vowelRatio = vowels / letters.length;

  if (vowels === 0 && letters.length >= 7) return true;
  if (letters.length >= 9 && vowelRatio < 0.2) return true;

  const consonantRuns = letters.match(/[^aeiou]{4,}/g) || [];
  if (consonantRuns.length >= 2) return true;

  return false;
}

// ========================================================
// MASTER VALIDATOR
// ========================================================
function isFakeEmail(email) {
  const trimmed = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return true;

  const [local, domain] = trimmed.split('@');
  if (!local || !domain) return true;

  const domainRoot = domain.split('.')[0];

  if (local === domainRoot) return true;
  if (/^(.)\1{2,}$/.test(local)) return true;

  const bad = [
    'test','demo','sample','temp','spam','fake','trial','user',
    'hello','mail','email','abc','xyz','qwerty','asdf','tester',
  ];
  if (bad.some((k) => local === k || local.startsWith(k))) return true;

  if (/^(test|demo|sample|user)[0-9]+$/.test(local)) return true;
  if (local.length < 3) return true;

  // domain-based block
  if (isCommonPersonalDomain(domain) || isDisposableDomain(domain)) {
    return true;
  }

  // gibberish block
  if (looksGibberishToken(local) && looksGibberishToken(domainRoot)) {
    return true;
  }

  return false;
}

// ========================================================
// MAIN COMPONENT
// ========================================================
export default function DpdpaChecklistDownloads() {
  const [showModal, setShowModal] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState(null);

  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [emailError, setEmailError] = useState('');
  const [orgError, setOrgError] = useState('');
  const [globalError, setGlobalError] = useState(''); // 'fakeEmail' | 'submitError' | ''
  const [loading, setLoading] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  const [showPrivacyBanner, setShowPrivacyBanner] = useState(false);

  // Privacy banner integration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dismissed = window.localStorage.getItem('dpdpaedu_privacy_banner_dismissed');
      if (dismissed !== 'true') {
        setShowPrivacyBanner(true);
      }
    }
  }, []);

  const dismissPrivacyBanner = () => {
    setShowPrivacyBanner(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dpdpaedu_privacy_banner_dismissed', 'true');
    }
  };

  // === UPDATED: SAME-TAB DOWNLOAD WITHOUT POPUP BLOCKER ===
  const triggerDownload = (filePath) => {
    if (typeof window !== 'undefined' && filePath) {
      const link = document.createElement('a');
      link.href = filePath;
      // Hint browser to download rather than open where possible
      link.setAttribute('download', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleDownloadClick = (checklist) => {
    if (!checklist.filePath) return;

    setSelectedChecklist(checklist);
    setEmailError('');
    setOrgError('');
    setGlobalError('');
    setProgressPercent(0);
    setShowModal(true);
  };

  // Inline field validators
  const validateEmailField = (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return 'Please enter your email address.';
    }
    if (isFakeEmail(trimmed)) {
      return 'Please use your organisation / institution email. Personal or disposable emails are not allowed.';
    }
    return '';
  };

  const validateOrgField = (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return 'Please enter your organisation / company name.';
    }
    return '';
  };

  // ========================================================
  // PROGRESS SIMULATION (0 → ~90% while loading, 100% on success)
  // ========================================================
  useEffect(() => {
    if (!loading) {
      setProgressPercent(0);
      return;
    }

    setProgressPercent(0);

    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 90) return prev; // don't go beyond 90% until request finishes

        let increment = 0;

        if (prev < 30) {
          // quick start
          increment = 5 + Math.random() * 8; // 5–13
        } else if (prev < 60) {
          // normal speed
          increment = 3 + Math.random() * 5; // 3–8
        } else if (prev >= 60 && prev < 75) {
          // pause-ish zone around ~65–70 with small increments / occasional no-op
          if (Math.random() < 0.5) {
            return prev; // small pause
          }
          increment = 1 + Math.random() * 3; // 1–4
        } else {
          // last stretch before 90
          increment = 1 + Math.random() * 2; // 1–3
        }

        const next = Math.min(prev + increment, 90);
        return next;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [loading]);

  // ========================================================
  // SUBMIT HANDLER
  // ========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError('');

    const trimmedEmail = email.trim();
    const trimmedOrg = org.trim();

    const emailErr = validateEmailField(trimmedEmail);
    const orgErr = validateOrgField(trimmedOrg);

    setEmailError(emailErr);
    setOrgError(orgErr);

    if (emailErr || orgErr) {
      if (!trimmedEmail) {
        setGlobalError('');
      } else if (isFakeEmail(trimmedEmail)) {
        setGlobalError('fakeEmail');
      }
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        'https://script.google.com/macros/s/AKfycbxI2zkrLqv8dMge0vHDwDX2bnVndytOzgIUC9UkHtGs6hh4eA5OzDGL-ReRWzFj3nRf/exec',
        {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            email: trimmedEmail,
            organisation: trimmedOrg,
            source: 'dpdpaedu_checklist_page',
            checklistId: selectedChecklist?.id || '',
          }),
        }
      );

      let data = {};
      try {
        data = await res.json();
      } catch (_) {}

      if (!res.ok || data.success === false) {
        throw new Error('Invalid');
      }

      // On success, show 100% and then trigger download
      setProgressPercent(100);
      triggerDownload(selectedChecklist?.filePath);
      setShowModal(false);
    } catch (err) {
      setGlobalError('submitError');
    } finally {
      setLoading(false);
    }
  };

  // ========================================================
  // RENDER
  // ========================================================
  return (
    <>
      <div className="margin-vert--md">
        <h2>📂 Available Checklists</h2>
        <p>
          Click any checklist to download. For each access, we ask for your email
          and organisation to keep this resource useful and abuse-free.
        </p>

        <div className="margin-top--md">
          {CHECKLISTS.map((c) => (
            <div key={c.id} className="margin-bottom--md">
              <h3>{c.label}</h3>

              {c.filePath ? (
                <button
                  className="button button--primary button--sm"
                  onClick={() => handleDownloadClick(c)}
                >
                  {c.buttonText}
                </button>
              ) : (
                <button className="button button--secondary button--sm" disabled>
                  {c.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PRIVACY BANNER (GLOBAL) */}
      {showPrivacyBanner && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9998,
            padding: '0.75rem 1rem',
            backgroundColor: 'var(--ifm-background-surface-color)',
            borderTop: '1px solid var(--ifm-color-emphasis-200)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.85rem' }}>
            We use minimal data (like your email and organisation) to share DPDPA resources and updates.
            No spam. No selling. Learn more in our{' '}
            <Link
              to="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              privacy policy
            </Link>
            .
          </span>
          <button
            className="button button--sm button--primary"
            onClick={dismissPrivacyBanner}
          >
            Got it
          </button>
        </div>
      )}

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              maxWidth: 520,
              width: '100%',
              padding: '1.75rem 1.75rem 1.5rem',
              borderRadius: '14px',
              backgroundColor: 'var(--ifm-background-surface-color)', // theme-aware
              color: 'var(--ifm-font-color-base)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
              position: 'relative',
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: 10,
                right: 12,
                background: 'transparent',
                border: 'none',
                fontSize: '1.3rem',
                cursor: 'pointer',
                lineHeight: 1,
              }}
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              ×
            </button>

            <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
              Access {selectedChecklist?.label}
            </h2>
            <p style={{ marginTop: 0, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Enter your email and organisation to access this checklist and receive
              occasional DPDPA updates from Securze. No spam. No selling. No misuse.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <label>
                <strong>Email address *</strong>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError('');
                  if (globalError === 'fakeEmail') setGlobalError('');
                }}
                onBlur={(e) => {
                  const err = validateEmailField(e.target.value);
                  setEmailError(err);
                  if (err && isFakeEmail(e.target.value.trim())) {
                    setGlobalError('fakeEmail');
                  }
                }}
                placeholder="you@organisation.com"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  marginTop: '4px',
                  borderRadius: '6px',
                  border: emailError
                    ? '1px solid #e55353'
                    : '1px solid var(--ifm-color-emphasis-300)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-font-color-base)',
                }}
              />
              {emailError && (
                <p style={{ color: '#e55353', marginTop: 4, marginBottom: 8, fontSize: '0.85rem' }}>
                  {emailError}
                </p>
              )}

              <label>
                <strong>Organisation *</strong>
              </label>
              <input
                value={org}
                onChange={(e) => {
                  setOrg(e.target.value);
                  if (orgError) setOrgError('');
                }}
                onBlur={(e) => {
                  const err = validateOrgField(e.target.value);
                  setOrgError(err);
                }}
                placeholder="Company / Institution"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  marginTop: '4px',
                  borderRadius: '6px',
                  border: orgError
                    ? '1px solid #e55353'
                    : '1px solid var(--ifm-color-emphasis-300)',
                  backgroundColor: 'var(--ifm-background-color)',
                  color: 'var(--ifm-font-color-base)',
                }}
              />
              {orgError && (
                <p style={{ color: '#e55353', marginTop: 4, marginBottom: 8, fontSize: '0.85rem' }}>
                  {orgError}
                </p>
              )}

              {/* GDPR / DPDPA MICRO-NOTICE */}
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--ifm-color-emphasis-700)',
                  marginTop: 4,
                  marginBottom: 8,
                }}
              >
                We use your email and organisation details only to share this checklist and
                related DPDPA updates. No spam, and no sale of your data. For full details,
                see our{' '}
                <Link
                  to="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }}
                >
                  privacy policy
                </Link>
                .
              </p>

              {/* GLOBAL ERROR (FAKE EMAIL EXPLANATION / SERVER ERRORS) */}
              {globalError === 'fakeEmail' && (
                <p style={{ color: '#e55353', marginTop: 4, marginBottom: 8, fontSize: '0.85rem' }}>
                  Please use your organisation / institution email. We avoid personal or disposable
                  emails so that this free resource reaches the right organisations and isn’t misused.
                  Your support helps us keep offering these checklists to the community. Read our{' '}
                  <Link
                    to="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'underline' }}
                  >
                    privacy policy
                  </Link>{' '}
                  for more details.
                </p>
              )}

              {globalError === 'submitError' && (
                <p style={{ color: '#e55353', marginTop: 4, marginBottom: 8, fontSize: '0.85rem' }}>
                  Something went wrong while submitting your details. Please try again in a moment.
                </p>
              )}

              {/* PROGRESS BAR WHEN LOADING */}
              {loading && (
                <div style={{ marginTop: 10, marginBottom: 8 }}>
                  <div
                    style={{
                      width: '100%',
                      height: '6px',
                      borderRadius: '999px',
                      backgroundColor: 'var(--ifm-color-emphasis-200)',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        backgroundColor: 'var(--ifm-color-primary)',
                        borderRadius: '999px',
                        width: `${Math.round(progressPercent)}%`,
                        transition: 'width 0.25s ease-out',
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      marginTop: 4,
                      marginBottom: 0,
                      color: 'var(--ifm-color-emphasis-700)',
                    }}
                  >
                    Downloading checklist… {Math.round(progressPercent)}%
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="button button--primary button--sm"
                style={{ marginTop: '10px', width: '100%' }}
                disabled={loading}
              >
                {loading ? 'Submitting…' : 'Submit & Download'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
