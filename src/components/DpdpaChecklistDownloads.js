import React, { useState, useEffect } from 'react';

// ----------------------------------------------------------
// CHECKLIST CONFIGURATION
// ----------------------------------------------------------
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

// ----------------------------------------------------------
// FAKE EMAIL DETECTION (block test, demo, abc@abc.com etc.)
// ----------------------------------------------------------
function isFakeEmail(email) {
  const trimmed = email.trim().toLowerCase();

  // Basic regex
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return true;

  const [local, domain] = trimmed.split('@');
  if (!local || !domain) return true;

  const domainRoot = domain.split('.')[0];

  // Block abc@abc.com patterns
  if (local === domainRoot) return true;

  // Block repeated characters e.g. aaa@aaa.com, 111@111.com
  if (/^(.)\1{2,}$/.test(local)) return true;

  // Common fake/test keywords
  const badKeywords = [
    'test','demo','sample','temp','spam','fake','trial','user',
    'hello','mail','email','abc','xyz','qwerty','asdf','tester'
  ];
  if (badKeywords.some(k => local === k || local.startsWith(k))) return true;

  // Block test123, demo123, sample123
  if (/^(test|demo|sample|user)[0-9]+$/.test(local)) return true;

  // Minimum length
  if (local.length < 3) return true;

  return false;
}

// ----------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------
export default function DpdpaChecklistDownloads() {
  const [showModal, setShowModal] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState(null);

  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [hasSubmittedOnce, setHasSubmittedOnce] = useState(false);

  // Load flag from localStorage
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
    if (filePath && typeof window !== 'undefined') {
      window.open(filePath, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownloadClick = (checklist) => {
    if (!checklist.filePath) return; // Coming soon

    setSelectedChecklist(checklist);

    // If already submitted once → skip popup
    if (hasSubmittedOnce) {
      triggerDownload(checklist.filePath);
      return;
    }

    setError('');
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedChecklist(null);
    setError('');
  };

  // ----------------------------------------------------------
  // SUBMIT TO GOOGLE APPS SCRIPT
  // ----------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();

    // Basic check
    if (!trimmedEmail) {
      setError('Please enter your email address.');
      return;
    }

    // Fake email detection
    if (isFakeEmail(trimmedEmail)) {
      setError('Please enter a real email address. Test / placeholder emails are not allowed.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbzG-wF5Ozi4lrkWPcn7Za1uWydgNtAO-fldpgammHFk2ieeFD0xWWb7LUPdp95qe5pJ/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // avoid CORS preflight
        },
        body: JSON.stringify({
          email: trimmedEmail,
          organisation: org,
          source: 'dpdpaedu_checklist_page',
          checklistId: selectedChecklist?.id || '',
        }),
      });

      let data = {};
      try { data = await res.json(); } catch (_) {}

      if (!res.ok || data.success === false) {
        throw new Error('invalid email');
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

  // ----------------------------------------------------------
  // RENDER
  // ----------------------------------------------------------
  return (
    <>
      <div className="margin-vert--md">
        <h2>📂 Available Checklists</h2>
        <p>Click any checklist to download. For first-time access, we ask for your email.</p>

        <div className="margin-top--md">
          {CHECKLISTS.map((c) => (
            <div key={c.id} className="margin-bottom--md">
              <h3>{c.label}</h3>

              {c.filePath ? (
                <button
                  type="button"
                  className="button button--primary button--sm"
                  onClick={() => handleDownloadClick(c)}
                >
                  {c.buttonText}
                </button>
              ) : (
                <button
                  type="button"
                  className="button button--secondary button--sm"
                  disabled
                >
                  {c.buttonText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              maxWidth: 480,
              width: '100%',
              padding: '1.5rem 1.75rem',
              borderRadius: '12px',
              background: 'var(--ifm-background-color)',
              position: 'relative',
              boxShadow: '0 18px 45px rgba(0,0,0,0.25)',
            }}
          >
            <button
              type="button"
              onClick={handleModalClose}
              style={{
                position: 'absolute',
                top: 10,
                right: 12,
                border: 'none',
                background: 'transparent',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              ×
            </button>

            <h2 style={{ marginTop: 0 }}>
              Access {selectedChecklist?.label || 'Checklist'}
            </h2>
            <p style={{ marginBottom: '1rem' }}>
              Enter your email to access this checklist and receive updates.  
              <br />No spam. No selling. No misuse.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="margin-bottom--sm">
                <label><strong>Email address *</strong></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '4px',
                    borderRadius: '6px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                  }}
                  required
                />
              </div>

              <div className="margin-bottom--sm">
                <label><strong>Organisation (optional)</strong></label>
                <input
                  type="text"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                  placeholder="Company / Institution"
                  style={{
                    width: '100%',
                    padding: '8px',
                    marginTop: '4px',
                    borderRadius: '6px',
                    border: '1px solid var(--ifm-color-emphasis-300)',
                  }}
                />
              </div>

              {error && (
                <p style={{ color: 'red', marginTop: '4px' }}>{error}</p>
              )}

              <button
                type="submit"
                className="button button--primary button--sm"
                disabled={loading}
                style={{ marginTop: '8px', width: '100%' }}
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
