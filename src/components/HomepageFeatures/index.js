import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby_KrvN7LqN45Nig1sMRlMe1Fv4LvtiT8MnhCvm3wA4mVVQ0hck_f1sb4A8TriiPnDL/exec';
const CERT_TEMPLATE_SRC = '/img/dpdpa_certificate.png';

const FeatureList = [
  {
    title: 'Aligned with India\'s Privacy Law',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>Built to explain the Digital Personal Data Protection Act (DPDPA) in simple terms and help individuals and organizations understand their rights and responsibilities clearly.</>
    ),
  },
  {
    title: 'Practical, Actionable Guidance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>Learn what to do—not just what the law says. Templates, checklists, and examples designed for real-world implementation.</>
    ),
  },
  {
    title: 'Community-Driven & Updated',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>Maintained with inputs from a growing community and review panel. Updated as guidance and rules evolve.</>
    ),
  },
];

const QUIZ_QUESTIONS = [
  {
    q: 'A retail chain retains CCTV footage for 2 years “for future investigation purposes” without any active cases. This violates which DPDPA principle?',
    options: ['Consent', 'Accuracy', 'Storage limitation', 'Lawful purpose'],
    answerIndex: 2,
  },
  {
    q: 'An oil & gas company shares employee health data with an overseas emergency response vendor during a disaster. Is consent required?',
    options: ['Yes', 'No, emergency exception applies', 'Only anonymised data allowed', 'Only if vendor is outside India'],
    answerIndex: 1,
  },
  {
    q: 'A manufacturing company tracks machine operators using RFID badges even during lunch breaks. Which principle is most impacted?',
    options: ['Transparency', 'Proportionality', 'Accuracy', 'Consent'],
    answerIndex: 1,
  },
  {
    q: 'A social media platform uses public posts to infer mental health status for advertising. This is:',
    options: ['Allowed, as data is public', 'Allowed if anonymised', 'Unlawful processing', 'Allowed with notice only'],
    answerIndex: 2,
  },
  {
    q: 'A bank outsources KYC verification to an AI startup but never audits its data practices. Who is liable under DPDPA?',
    options: ['AI startup only', 'Bank only', 'Both share liability', 'Regulator'],
    answerIndex: 1,
  },
  {
    q: 'A tech company trains an AI model using employee emails for “internal productivity analysis” without informing employees. This violates:',
    options: ['Purpose limitation', 'Transparency', 'Storage limitation', 'Security safeguards'],
    answerIndex: 1,
  },
  {
    q: 'A fast-food chain links POS purchase history with its mobile app data without updating the privacy notice. Is this lawful?',
    options: ['Yes', 'No', 'Only a consent issue', 'Only if profiling occurs'],
    answerIndex: 1,
  },
  {
    q: 'A logistics firm deletes raw GPS data but retains derived heatmaps showing individual driver routes. Is this still personal data?',
    options: ['No', 'Yes', 'Only statistical data', 'Only if names exist'],
    answerIndex: 1,
  },
  {
    q: 'What is the maximum monetary penalty under the Digital Personal Data Protection Act, 2023?',
    options: ['₹50 crore', '₹100 crore', '₹250 crore', '₹500 crore'],
    answerIndex: 2,
  },
  {
    q: 'Under DPDPA, who determines the purpose and means of processing personal data?',
    options: ['Data Processor', 'Data Principal', 'Data Fiduciary', 'Data Auditor'],
    answerIndex: 2,
  },
  {
    q: 'Which right is NOT explicitly provided under DPDPA?',
    options: ['Right to correction', 'Right to data portability', 'Right to grievance redressal', 'Right to erasure'],
    answerIndex: 1,
  },
  {
    q: 'Which type of data falls outside the scope of DPDPA?',
    options: ['Anonymised data', 'Pseudonymised data', 'Encrypted data', 'Archived data'],
    answerIndex: 0,
  },
  {
    q: 'Who can be notified as a Significant Data Fiduciary (SDF)?',
    options: ['Any startup', 'Only banks', 'Entities notified by the government', 'Only government departments'],
    answerIndex: 2,
  },
  {
    q: 'DPDPA applies to processing of:',
    options: ['Only digital personal data', 'Only offline data', 'Digital personal data and digitised offline data', 'Only biometric data'],
    answerIndex: 2,
  },
  {
    q: 'Which authority adjudicates penalties under DPDPA?',
    options: ['Supreme Court of India', 'CERT-In', 'Data Protection Board of India', 'Reserve Bank of India'],
    answerIndex: 2,
  },
  {
    q: 'Under DPDPA, valid consent must be:',
    options: ['Explicit only', 'Written only', 'Free, specific, informed, and unambiguous', 'Recorded on paper'],
    answerIndex: 2,
  },
  {
    q: 'An Indian company transfers personal data to a country later restricted by government notification. What is the impact?',
    options: ['No impact', 'Future transfers prohibited; past transfers reviewed', 'Only contractual issue', 'GDPR overrides DPDPA'],
    answerIndex: 1,
  },
  {
    q: 'A multinational processes Indian personal data entirely outside India but offers services in India. Does DPDPA apply?',
    options: ['No', 'Yes', 'Only GDPR applies', 'Only RBI-regulated entities'],
    answerIndex: 1,
  },
  {
    q: 'An AI vendor sub-processes Indian personal data across multiple cloud regions dynamically. Who is responsible for compliance?',
    options: ['Cloud provider', 'AI vendor', 'Indian Data Fiduciary', 'All jointly'],
    answerIndex: 2,
  },
  {
    q: 'Which is the strongest compliance control for cross-border personal data transfers under DPDPA?',
    options: ['Standard Contractual Clauses (SCCs)', 'Encryption', 'Government-notified allowed countries', 'User consent'],
    answerIndex: 2,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function getAwardTitle(score) {
  if (score >= 100) return 'DPDPA Sentinel Supreme';
  if (score >= 85) return 'Privacy Shield Champion';
  if (score >= 70) return 'Consent Guardian Pro';
  if (score >= 55) return 'Data Protection Pathfinder';
  return 'Compliance Cadet';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
}

async function submitLeadGET(payload) {
  const query = new URLSearchParams(payload).toString();
  const url = `${APPS_SCRIPT_URL}?${query}`;
  try {
    await fetch(url, { method: 'GET', mode: 'no-cors', redirect: 'follow' });
    return true;
  } catch {
    return false;
  }
}

function QuizBlock() {
  const total = QUIZ_QUESTIONS.length;
  const pointsPer = 5;
  const totalScore = total * pointsPer;

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(null));

  const [showLeadModal, setShowLeadModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [leadError, setLeadError] = useState('');

  const [finalScore, setFinalScore] = useState(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const current = QUIZ_QUESTIONS[idx];
  const chosen = answers[idx];

  const progressPct = useMemo(() => {
    const answeredCount = answers.filter((a) => a !== null).length;
    return Math.round((answeredCount / total) * 100);
  }, [answers, total]);

  const computedScore = useMemo(() => {
    let correct = 0;
    for (let i = 0; i < total; i++) {
      if (answers[i] === QUIZ_QUESTIONS[i].answerIndex) correct++;
    }
    return correct * pointsPer;
  }, [answers, total, pointsPer]);

  const computedRank = useMemo(() => getAwardTitle(computedScore), [computedScore]);

  function selectOption(optionIndex) {
    if (chosen !== null) return;
    const next = [...answers];
    next[idx] = optionIndex;
    setAnswers(next);

    setTimeout(() => {
      if (idx < total - 1) setIdx((v) => v + 1);
      else setShowLeadModal(true);
    }, 250);
  }

  function goPrev() {
    if (idx > 0) setIdx((v) => v - 1);
  }

  function goNext() {
    if (idx < total - 1 && answers[idx] !== null) setIdx((v) => v + 1);
  }

  function resetQuiz() {
    setIdx(0);
    setAnswers(Array(total).fill(null));
    setShowLeadModal(false);
    setFullName('');
    setEmail('');
    setCompany('');
    setLeadError('');
    setFinalScore(null);
    setShowAnswerKey(false);
    setIsSubmitting(false);
  }

  async function submitLeadAndReveal() {
    if (fullName.trim().length < 2 || !isValidEmail(email.trim()) || company.trim().length < 2) return;

    // ✅ ONLY capture these 3 fields
    const payload = {
      name: fullName.trim(),
      email: email.trim(),
      company: company.trim(),
    };

    setIsSubmitting(true);
    setLeadError('');

    const ok = await submitLeadGET(payload);

    setIsSubmitting(false);
    setShowLeadModal(false);
    setFinalScore(computedScore);
    setShowAnswerKey(true);

    if (!ok) setLeadError('Submission could not be confirmed (network). If Apps Script is deployed as "Anyone", it will still log.');
  }

  async function downloadCertificate() {
    if (finalScore === null) return;

    const name = fullName.trim() || 'Recipient';
    const scoreText = `${finalScore}`; // only number
    const rankTitle = getAwardTitle(finalScore);

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = CERT_TEMPLATE_SRC;

    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // ===== TUNE THESE NUMBERS =====
    const nameX = Math.round(canvas.width * 0.07);
    const nameY = Math.round(canvas.height * 0.50);
    const rankX = nameX;
    const rankY = nameY + 44;
    const scoreX = Math.round(canvas.width * 0.28);
    const scoreY = Math.round(canvas.height * 0.78);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';

    // Name
    let nameFontSize = Math.min(Math.max(Math.round(canvas.width * 0.04), 44), 86);
    ctx.fillStyle = '#111111';
    ctx.font = `700 ${nameFontSize}px "Playfair Display", Inter, system-ui, sans-serif`;

    const maxNameWidth = canvas.width * 0.58;
    while (ctx.measureText(name).width > maxNameWidth && nameFontSize > 40) {
      nameFontSize -= 2;
      ctx.font = `700 ${nameFontSize}px "Playfair Display", Inter, system-ui, sans-serif`;
    }
    ctx.fillText(name, nameX, nameY);

    // Rank
    ctx.fillStyle = '#2b2b2b';
    ctx.font = `600 ${Math.round(canvas.width * 0.018)}px "Cormorant Garamond", Inter, system-ui, sans-serif`;
    ctx.fillText(rankTitle, rankX, rankY);

    // Score
    ctx.fillStyle = '#111111';
    ctx.font = `700 ${Math.round(canvas.width * 0.02)}px Inter, system-ui, sans-serif`;
    ctx.fillText(scoreText, scoreX, scoreY);

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `DPDPA-Certificate-${name.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  const locked = chosen !== null;

  return (
    <div className={styles.quizOuter}>
      <div className={styles.quizCard}>
        <div className={styles.quizHeader}>
          <div>
            <div className={styles.quizKicker}>DPDPAedu Public Quiz</div>
            <div className={styles.quizTitle}>Digital Personal Data Protection Act (DPDPA) Knowledge Check</div>
          </div>

          <div className={styles.quizMeta}>
            <div className={styles.quizMetaItem}>
              <span className={styles.quizMetaLabel}>Questions</span>
              <span className={styles.quizMetaValue}>{total}</span>
            </div>
            <div className={styles.quizMetaItem}>
              <span className={styles.quizMetaLabel}>Progress</span>
              <span className={styles.quizMetaValue}>{progressPct}%</span>
            </div>
          </div>
        </div>

        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progressPct}%` }} />
          </div>
          <div className={styles.progressText}>
            Q{idx + 1} of {total} • Answered: {answers.filter((a) => a !== null).length}/{total}
          </div>
        </div>

        <div className={styles.questionBlock}>
          <div className={styles.questionText}>{current.q}</div>

          <div className={styles.optionsGrid}>
            {current.options.map((opt, i) => (
              <button
                key={i}
                className={clsx(styles.optionBtn, chosen === i && styles.optionSelected)}
                onClick={() => selectOption(i)}
                disabled={locked}
                type="button"
              >
                <span className={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                <span className={styles.optionText}>{opt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.quizNav}>
          <button className={styles.navBtn} onClick={goPrev} disabled={idx === 0} type="button">
            ← Previous
          </button>

          <div className={styles.navHint}>
            {chosen === null ? 'Select an answer to continue' : 'Locked in — moving on…'}
          </div>

          <button className={styles.navBtn} onClick={goNext} disabled={idx >= total - 1 || answers[idx] === null} type="button">
            Next →
          </button>
        </div>

        {finalScore !== null && (
          <div className={styles.resultCard}>
            <div className={styles.resultTop}>
              <div className={styles.resultScore}>{finalScore}</div>
              <div className={styles.resultAward}>{computedRank}</div>
            </div>

            <div className={styles.resultActions}>
              <button className={styles.primaryBtn} onClick={downloadCertificate} type="button">
                Download certificate
              </button>
              <button className={styles.secondaryBtn} onClick={resetQuiz} type="button">
                Retake quiz
              </button>
              {leadError ? <span className={styles.noteLater}>{leadError}</span> : null}
            </div>

            {showAnswerKey && (
              <div className={styles.answerKeyWrap}>
                <div className={styles.answerKeyTitle}>Answer key (shown after completion)</div>
                <div className={styles.answerKeyList}>
                  {QUIZ_QUESTIONS.map((q, i) => {
                    const userIdx = answers[i];
                    const correctIdx = q.answerIndex;
                    const userText = userIdx === null ? '—' : q.options[userIdx];
                    const correctText = q.options[correctIdx];
                    const isCorrect = userIdx === correctIdx;
                    return (
                      <div key={i} className={clsx(styles.answerKeyItem, isCorrect ? styles.answerKeyCorrect : styles.answerKeyWrong)}>
                        <div className={styles.answerKeyQ}>
                          <span className={styles.answerKeyNum}>Q{i + 1}.</span> {q.q}
                        </div>
                        <div className={styles.answerKeyA}>
                          <div>
                            <span className={styles.answerKeyLabel}>Your answer:</span> {userText}
                          </div>
                          <div>
                            <span className={styles.answerKeyLabel}>Correct:</span> {correctText}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {showLeadModal && (
        <div className={styles.modalBackdrop} role="dialog" aria-modal="true">
          <div className={styles.modalCard}>
            <div className={styles.modalTitle}>Get your score + certificate</div>
            <div className={styles.modalDesc}>
              Enter your <b>Name</b>, <b>Email</b>, and <b>Company</b>. We’ll show your score and let you download your certificate.
            </div>

            <div className={styles.formGrid}>
              <label className={styles.formLabel}>
                Full name<span className={styles.req}>*</span>
                <input
                  className={clsx(styles.input, fullName.trim().length > 0 && fullName.trim().length < 2 && styles.inputError)}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </label>

              <label className={styles.formLabel}>
                Email<span className={styles.req}>*</span>
                <input
                  className={clsx(styles.input, email.trim().length > 0 && !isValidEmail(email.trim()) && styles.inputError)}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className={styles.formLabel}>
                Company<span className={styles.req}>*</span>
                <input
                  className={clsx(styles.input, company.trim().length > 0 && company.trim().length < 2 && styles.inputError)}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
            </div>

            <div className={styles.privacyNote}>
              We collect information to prevent automated misuse and to share relevant updates and awareness resources related to DPDPA and data protection.
              <br />
              <a
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our Privacy Policy
              </a>
            </div>

            <div className={styles.modalActions}>
              <button className={styles.secondaryBtn} onClick={resetQuiz} type="button" disabled={isSubmitting}>
                Cancel
              </button>
              <button
                className={styles.primaryBtn}
                onClick={submitLeadAndReveal}
                type="button"
                disabled={isSubmitting || fullName.trim().length < 2 || !isValidEmail(email.trim()) || company.trim().length < 2}
              >
                {isSubmitting ? 'Submitting…' : 'Reveal score'}
              </button>
            </div>

            {isSubmitting && (
              <div className={styles.loaderWrap} aria-hidden="true">
                <div className={styles.tricolorLoader}>
                  <span className={styles.dotOrange}></span>
                  <span className={styles.dotWhite}></span>
                  <span className={styles.dotGreen}></span>
                </div>
                <div className={styles.loaderText}>Submitting…</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col col--10" style={{ textAlign: 'center' }}>
            <Heading as="h2">DPDPAedu.org</Heading>
            <p style={{ opacity: 0.85 }}>Community-built resources, checklists, and practical guidance for India’s DPDPA.</p>
          </div>
        </div>

        <div className="row" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
          <div className="col col--10">
            <QuizBlock />
          </div>
        </div>

        <div className="row" style={{ marginTop: '2.5rem' }}>
          {FeatureList.map((props, i) => (
            <Feature key={i} {...props} />
          ))}
        </div>

        <div className="row" style={{ marginTop: '3rem', justifyContent: 'center' }}>
          <div className="col col--8" style={{ textAlign: 'center' }}>
            <img
              src="/img/dpdpa_review_panel_homepage.png"
              alt="DPDPA Collage"
              style={{ width: '100%', maxWidth: '5000px', borderRadius: '12px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}