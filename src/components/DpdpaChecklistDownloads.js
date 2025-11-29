import React, { useState, useEffect } from 'react';

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
    filePath: null, // Coming soon
    buttonText: 'Coming Soon',
  },
  {
    id: 'manufacturing',
    label: '🏭 Manufacturing & Industrial',
    filePath: '/checklists/DPDPA_Manufacturing_Industrial_Checklist.xlsx',
    buttonText: 'Download Manufacturing & Industrial Checklist (Free)',
  },
];

export default function DpdpaChecklistDownloads() {  // 👈 default export, function
  const [showModal, setShowModal] = useState(false);
  const [selectedChecklist, setSelectedChecklist] = useState(null);
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
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
    if (!filePath) return;
    if (typeof window !== 'undefined') {
      window.open(filePath, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownloadClick = (checklist) => {
    if (!checklist.filePath) return; // Coming soon

    setSelectedChecklist(checklist);

    if (hasSubmittedOnce) {
      triggerDownload(checklist.filePath);
      return;
    }

    setShowModal(true);
    setError('');
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedChecklist(null);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbwFNXBMLP4DuTR_jOINwdqtwNLqIbO6zSdpF_WMZVGC_8j6zMvxKAftWjCEuatlSLmZ/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // avoid CORS preflight
        },
        body: JSON.stringify({
          email,
          organisation: org,
          source: 'dpdpaedu_checklist_page',
          checklistId: selectedChecklist?.id || '',
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch (err) {
        // ignore if not JSON
      }

      if (!res.ok || data.success === false) {
        throw new Error(data.error || 'Failed to submit form. Please try again.');
      }

      markSubmitted();
      setShowModal(false);

      if (selectedChecklist?.filePath) {
        triggerDownload(selectedChecklist.filePath);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong while submitting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="card margin-vert--md padding--lg">
        <h2>📂 Available Checklists</h2>
        <p>
          Click on any checklist to download. For first-time access, we&apos;ll ask for
          your email to share DPDPA updates and related resources from Securze.
        </p>

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
            className="card"
            style={{
              maxWidth: 480,
              width: '100%',
              padding: '1.5rem 1.75rem',
              position: 'relative',
              boxShadow: '0 18px 45px rgba(0,0,0,0.25)',
              borderRadius: '12px',
              background: 'var(--ifm-background-surface-color)',
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
              aria-label="Close"
            >
              ×
            </button>

            <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
              Access {selectedChecklist?.label || 'Checklist'}
            </h2>
            <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
              Enter your email to access this checklist and receive occasional DPDPA
              insights, updates, and implementation resources from Securze. No spam,
              ever. Work email preferred if you’d like implementation updates & enterprise resources.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="margin-bottom--sm">
                <label htmlFor="checklist-email">
                  <strong>Email address *</strong>
                </label>
                <br />
                <input
                  id="checklist-email"
                  type="email"
                  required
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
                />
              </div>

              <div className="margin-bottom--sm">
                <label htmlFor="checklist-org">
                  <strong>Organisation (optional)</strong>
                </label>
                <br />
                <input
                  id="checklist-org"
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
                <p style={{ color: 'red', marginTop: '4px', marginBottom: '4px' }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="button button--primary button--sm"
                disabled={loading}
                style={{ marginTop: '8px', width: '100%' }}
              >
                {loading ? 'Submitting…' : 'Submit & Download'}
              </button>

              <p
                style={{
                  fontSize: '0.75rem',
                  marginTop: '8px',
                  color: 'var(--ifm-color-emphasis-600)',
                }}
              >
                By submitting this form, you consent to receive DPDPA-related updates
                from Securze and dpdpaedu.org. You can unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
