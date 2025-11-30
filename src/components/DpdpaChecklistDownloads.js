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

  // 1. obvious patterns (as before)
  if (local === domainRoot) return true;
  if (/^(.)\1{2,}$/.test(local)) return true;

  const bad = [
    'test','demo','sample','temp','spam','fake','trial','user',
    'hello','mail','email','abc','xyz','qwerty','asdf','tester'
  ];
  if (bad.some(k => local === k || local.startsWith(k))) return true;
  if (/^(test|demo|sample|user)[0-9]+$/.test(local)) return true;
  if (local.length < 3) return true;

  // 2. NEW: gibberish check – only if BOTH parts look random
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
      setError('Please enter a real email address. Test / placeholder emails are not allowed.');
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
              // make the popup fully opaque in both themes
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
                placeholder="you@example.com"
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
