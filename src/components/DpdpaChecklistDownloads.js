import React, { useState, useEffect } from 'react';

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
    label: '🎓 Education Sector (Coming Soon)',
    filePath: null,
    buttonText: 'Coming Soon',
  },
  {
    id: 'manufacturing',
    label: '🏭 Manufacturing & Industrial',
    filePath: '/checklists/DPDPA_Manufacturing_Industrial_Checklist.xlsx',
    buttonText: 'Download Manufacturing & Industrial Checklist (Free)',
  },
];

// ========================================================
// DOMAIN HELPERS (CLIENT-SIDE)
// ========================================================
function isCommonPersonalDomain(domain) {
  domain = domain.toLowerCase();
  const list = [
    'gmail.com',
    'googlemail.com',
    'yahoo.com',
    'yahoo.in',
    'yahoo.co.in',
    'outlook.com',
    'outlook.in',
    'hotmail.com',
    'live.com',
    'live.in',
    'icloud.com',
    'me.com',
    'aol.com',
    'proton.me',
    'protonmail.com',
    'zoho.com',
    'gmx.com',
    'yandex.com',
    'pm.me',
    'tutanota.com',
    'tuta.io',
    'fastmail.com',
    'hey.com'
  ];
  return list.indexOf(domain) !== -1;
}

function isDisposableDomain(domain) {
  domain = domain.toLowerCase();

  const exact = [
    'mailinator.com',
    '10minutemail.com',
    '10minutemail.net',
    'guerrillamail.com',
    'trashmail.com',
    'temp-mail.org',
    'tempmail.com',
    'tempmail.net',
    'yopmail.com',
    'getnada.com',
    'sharklasers.com',
    'dispostable.com',
    'maildrop.cc',
    'mailnull.com',
    'throwawaymail.com'
  ];

  if (exact.indexOf(domain) !== -1) return true;

  const partial = [
    'mailinator',
    'guerrillamail',
    '10minutemail',
    'tempmail',
    'trashmail',
    'yopmail',
    'sharklasers',
    'nospam'
  ];

  return partial.some((k) => domain.includes(k));
}

function isAcademicDomain(domain) {
  const d = domain.toLowerCase();
  return (
    d.endsWith('.edu') ||
    d.endsWith('.edu.in') ||
    d.endsWith('.ac.in') ||
    d.endsWith('.ac.uk') ||
    d.includes('.ac.')
  );
}

// ========================================================
// FAKE EMAIL DETECTION
// ========================================================
function looksGibberishToken(token) {
  const letters = token.replace(/[^a-z]/g, '');
  if (letters.length <= 6) return false; // short names often fine (e.g. harsh, alice)

  const vowels = (letters.match(/[aeiou]/g) || []).length;
  const vowelRatio = vowels / letters.length;

  // No vowels at all in a long token → very suspicious
  if (vowels === 0 && letters.length >= 7) return true;

  // Very low vowel ratio in a long token → likely random
  if (letters.length >= 9 && vowelRatio < 0.2) return true;

  // Multiple long consonant runs
  const consonantRuns = letters.match(/[^aeiou]{4,}/g) || [];
  if (consonantRuns.length >= 2) return true;

  return false;
}

function isFakeEmail(email) {
  const trimmed = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return true;

  const [local, domain] = trimmed.split('@');
  if (!local || !domain) return true;

  const domainRoot = domain.split('.')[0];

  // 1. obvious local-part patterns
  if (local === domainRoot) return true;
  if (/^(.)\1{2,}$/.test(local)) return true;

  const bad = [
    'test','demo','sample','temp','spam','fake','trial','user',
    'hello','mail','email','abc','xyz','qwerty','asdf','tester'
  ];
  if (bad.some(k => local === k || local.startsWith(k))) return true;
  if (/^(test|demo|sample|user)[0-9]+$/.test(local)) return true;
  if (local.length < 3) return true;

  // 2. DOMAIN-BASED RULES
  // Block personal & disposable domains
  if (isCommonPersonalDomain(domain) || isDisposableDomain(domain)) {
    // Even if academic-like part exists, these are treated as personal.
    return true;
  }

  // Academic & corporate domains are allowed unless they look fake/gibberish.

  // 3. Gibberish check – only if BOTH parts look random
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const flag = window.localStorage.getItem('dpdpaedu_checklist_email_submitted');
      if (flag === 'true') setHasSubmittedOnce(true);
    }
  }, []);

  const markSubmitted = () => {
    setHasSubmittedOnce(true);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('dpdpaedu_checklist_email_submitted', 'true');
    }
  };

  const triggerDownload = (filePath) => {
    if (typeof window !== 'undefined' && filePath) {
      window.open(filePath, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownloadClick = (checklist) => {
    if (!checklist.filePath) return;

    setSelectedChecklist(checklist);

    if (hasSubmittedOnce) {
      triggerDownload(checklist.filePath);
      return;
    }

    setError('');
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    const trimmedOrg = org.trim();

    if (!trimmedEmail) {
      setError('Please enter your email address.');
      return;
    }

    if (!trimmedOrg) {
      setError('Please enter your organisation / company name.');
      return;
    }

    if (isFakeEmail(trimmedEmail)) {
      setError(
        'Please use your organisation / institution email. We avoid personal or disposable emails so that this free resource reaches the right organisations and isn’t misused. Your support helps us keep offering these checklists to the community.'
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbxI2zkrLqv8dMge0vHDwDX2bnVndytOzgIUC9UkHtGs6hh4eA5OzDGL-ReRWzFj3nRf/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          email: trimmedEmail,
          organisation: trimmedOrg,
          source: 'dpdpaedu_checklist_page',
          checklistId: selectedChecklist?.id || '',
        }),
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok || data.success === false) {
        throw new Error('Invalid');
      }

      markSubmitted();
      setShowModal(false);
      triggerDownload(selectedChecklist?.filePath);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="margin-vert--md">
        <h2>📂 Available Checklists</h2>
        <p>
          Click any checklist to download. For first-time access, we ask for your email
          and organisation.
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

      {/* POPUP */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', // dim the page
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
              backgroundColor: '#ffffff',
              color: '#000000',
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

            <form onSubmit={handleSubmit}>
              <label><strong>Email address *</strong></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@organisation.com"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  marginTop: '4px',
                  marginBottom: '12px',
                  borderRadius: '6px',
                  border: '1px solid #d0d0d0',
                }}
              />

              <label><strong>Organisation *</strong></label>
              <input
                value={org}
                onChange={(e) => setOrg(e.target.value)}
                placeholder="Company / Institution"
                required
                style={{
                  width: '100%',
                  padding: '8px',
                  marginTop: '4px',
                  marginBottom: '8px',
                  borderRadius: '6px',
                  border: '1px solid #d0d0d0',
                }}
              />

              {error && (
                <p style={{ color: 'red', marginTop: '4px', marginBottom: '4px' }}>
                  {error}
                </p>
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
