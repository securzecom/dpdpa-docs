import clsx from 'clsx';
import React, {useMemo, useState, useEffect, useRef} from 'react';
import {FaLinkedin} from 'react-icons/fa';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

/**
 * DPDPAedu Public Quiz (Docusaurus component)
 * - Captures ONLY: Name, Email, Company (via Apps Script GET)
 * - Shows results AFTER lead capture
 * - On results: for every question, show dropdown reasoning (paragraphs only)
 * - Certificate download: generates PNG on frontend using template image
 */

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycby_KrvN7LqN45Nig1sMRlMe1Fv4LvtiT8MnhCvm3wA4mVVQ0hck_f1sb4A8TriiPnDL/exec';

const CERT_TEMPLATE_SRC = '/img/dpdpa_certificate.png';

const POINTS_PER_QUESTION = 5;
const QUIZ_TIME_SECONDS = 5 * 60;

const FeatureList = [
  {
    title: "Aligned with India's Privacy Law",
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Built to explain the Digital Personal Data Protection Act (DPDPA) in simple terms and help individuals
        and organizations understand their rights and responsibilities clearly.
      </>
    ),
  },
  {
    title: 'Practical, Actionable Guidance',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn what to do—not just what the law says. Templates, checklists, and examples designed for real-world
        implementation.
      </>
    ),
  },
  {
    title: 'Community-Driven & Updated',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Maintained with inputs from a growing community and review panel. Updated as guidance and rules evolve.
      </>
    ),
  },
];

const BOARD_MEMBERS = [
  {
    id: 'harsh',
    tag: 'Lead',
    name: 'Harsh Parekh',
    role: 'Founder & CEO, Securze',
    summary: 'Conceptualization, Drafting, and Project Leadership',
    img: '/img/harsh-parekh.png',
    linkedin: 'https://www.linkedin.com/in/harshfromsecurze',
    details:
      'Harsh Parekh is a cybersecurity and privacy leader with a strong focus on building practical, scalable, and business-relevant data protection ecosystems. Through DPDPAedu.org, he provides strategic direction to an education-first initiative designed to help organizations clearly understand and responsibly implement India’s Digital Personal Data Protection Act. His leadership bridges regulation, technology, and real-world business needs, positioning privacy as a foundation for trust, governance, and long-term growth.',
  },
  {
    id: 'team',
    tag: 'Team',
    name: 'Team Secure',
    role: 'Content & Research',
    summary: 'Research, Legal Reference Compilation, and Documentation Support',
    img: '/img/securze-logo.png',
    linkedin: 'https://www.linkedin.com/company/securze',
    details:
      'This document has been developed with the support of Team Securze, whose efforts span in-depth research, structured legal reference compilation, and meticulous documentation. The team worked closely to analyze statutory provisions, interpret regulatory guidance, and organize complex information into a clear, accessible, and practical format. Their contribution ensured that the content remains accurate, implementation-focused, and aligned with real-world organizational needs. By combining technical understanding with regulatory awareness, Team Securze played a key role in shaping this document into a reliable resource for professionals, institutions, and decision-makers navigating India’s data protection landscape.',
  },
  {
    id: 'gokulavan',
    tag: 'Expert',
    name: 'Gokulavan Jayaraman',
    role:
      'Infosec Leader – Mahindra Group | PMP | CISSP | CISM | CISO | CISA | CCSP | CRISC | DPO | GRC Specalist | ISO27001 | ISO9000 LA',
    summary: 'Cybersecurity, privacy & risk leader (20+ years).',
    img: '/img/gokulavan-jayaram.png',
    linkedin: 'https://www.linkedin.com/in/gokulavan/',
    details:
      'Gokulavan Jayaraman is a highly respected cybersecurity, data privacy, and risk-management leader with over two decades of experience safeguarding large enterprises. His expertise spans information security, privacy governance, fraud risk management, business continuity, vendor risk, and building organisation-wide security maturity across NBFC, Manufacturing, BPO, KPO, and global service environments. With a strong command of regulatory frameworks, data-protection laws, and industry best practices, he has consistently enabled organisations to stay resilient, compliant, and operationally effective in a rapidly evolving threat landscape.',
  },
  {
    id: 'gauri',
    tag: 'Expert',
    name: 'Gauri Saple',
    role: 'CISA, ISO 27001, 42001, 22301, 27701 LA',
    summary: 'GRC & cybersecurity consultant (10+ years).',
    img: '/img/gaurri-sapple.png',
    linkedin: 'https://www.linkedin.com/in/gaurisaple/',
    details:
      'Gauri Saple is an experienced GRC and Cybersecurity Consultant with over more than a decade experience and expertise in building and strengthening governance, risk, and compliance frameworks across diverse IT and OT environments. She serves as Principal Consultant with multiple organisations, leading end-to-end implementations of ISMS, BCMS, and Privacy Programs (ISO 27001, 27701, 22301, 42001), conducting comprehensive ITGC and process control audits, SOC 2 readiness assessments, and regulatory compliance reviews aligned with SEBI, RBI, and the DPDP Act. Gauri has developed risk management methodologies, audit frameworks, control libraries, and assessment toolkits that help organisations operationalise governance and uplift their cybersecurity maturity. She has extensive experience working with financial institutions, fintech companies, SOC service providers, and industrial sectors - translating regulatory and security requirements into practical, measurable controls that enhance enterprise resilience and accountability.',
  },
  {
    id: 'sundar',
    tag: 'Expert',
    name: 'Sundaravenkataraman Sundararaman',
    role: 'GRC Lead - OneCard',
    summary: 'Fintech-focused security & GRC leader.',
    img: '/img/sundar.jpeg',
    linkedin: 'https://www.linkedin.com/in/ssvrnyl/',
    details:
      'Sundar is a fintech-focused cybersecurity and GRC leader, currently GRC Lead at FPL Technologies (OneCard), where he partners with CXOs to align security and privacy with business goals. He builds and uplifts programs across incident management, SOC/SIEM, cloud security, and cryptography, with hands-on experience implementing PCI DSS, ISO 27001, and RBI-aligned controls. Previously CISO/AVP at LivQuik and a long-time security leader at M2P Fintech, he is a frequent speaker and panelist on data protection and cyber resilience.',
  },
  {
    id: 'swapnali',
    tag: 'Expert',
    name: 'Swapnali Naik',
    role: 'Independent Consultant',
    summary: 'Audit & compliance professional (23+ years).',
    img: '/img/swapnali-naik.jpeg',
    linkedin: 'https://www.linkedin.com/in/swapnali-naik-042a5363/',
    details:
      'Swapnali Naik with over 23 years of extensive experience is a seasoned audit and compliance professional with deep expertise in ISO 9001, 20000, 27001, ITGC, SOC controls, Data Centre and customer audits, and enterprise risk management. She has been recognized by BSI auditors for excellence in streamlining audit processes, timely closure of findings, and driving stronger governance through risk-based internal controls and compliance frameworks.',
  },
];

/**
 * Each question has:
 * - q
 * - options
 * - answerIndex
 * - correctReason (paragraph text)
 * - wrongReasons: { [optionIndex]: paragraph text }
 */
const QUIZ_QUESTIONS = [
  {
    q: 'A retail chain retains CCTV footage for 2 years “for future investigation purposes” without any active cases. This violates which DPDPA principle?',
    options: ['Consent', 'Accuracy', 'Storage limitation', 'Lawful purpose'],
    answerIndex: 3,
    correctReason:
      'Keeping CCTV footage for a blanket “future investigation” purpose for two years is not a clear, specific lawful purpose. A valid purpose must be defined and tied to necessity, not open-ended justification.',
    wrongReasons: {
      0: 'Consent is not the core issue in this scenario. The problem is the vague justification and extended retention without a defined lawful purpose.',
      1: 'Accuracy concerns whether data is correct and up to date. Retention for two years is not an accuracy issue.',
      2: 'Storage limitation is impacted by long retention, but the question tests the weak justification. The main failure is relying on a vague “future investigation” purpose instead of a defined lawful purpose.',
    },
  },
  {
    q: 'An oil & gas company shares employee health data with an overseas emergency response vendor during a disaster. Is consent required?',
    options: ['Yes.', 'No, emergency exception applies', 'Only anonymised data allowed', 'Only if vendor is outside India'],
    answerIndex: 1,
    correctReason:
      'In a genuine emergency, sharing necessary health data to protect life and safety can be done without consent. The processing should still be limited to what is necessary for the response.',
    wrongReasons: {
      0: 'In emergencies, the lawful basis is necessity to protect life and safety, not waiting for consent to be obtained.',
      2: 'Anonymisation may not be practical because responders may need to identify specific employees to provide help. The key is sharing only what is necessary.',
      3: 'Whether the vendor is overseas is not the deciding factor for the emergency exception. What matters is necessity and proportionality in an emergency.',
    },
  },
  {
    q: 'A manufacturing company tracks machine operators using RFID badges even during lunch breaks. Which principle is most impacted?',
    options: ['Transparency', 'Proportionality (Data Minimisation & Necessity)', 'Accuracy', 'Consent'],
    answerIndex: 1,
    correctReason:
      'Tracking during lunch breaks goes beyond what is reasonably necessary for operations or safety. Proportionality requires limiting collection to what is needed for the stated purpose.',
    wrongReasons: {
      0: 'Transparency may be an issue if employees are not informed, but the core issue highlighted is excessive collection beyond necessity.',
      2: 'Accuracy relates to correctness of data, not whether the tracking should happen during breaks.',
      3: 'Consent is not the primary point here. The issue is over-collection and unnecessary continuous monitoring.',
    },
  },
  {
    q: 'A social media platform uses public posts to infer mental health status for advertising. This is:',
    options: ['Allowed, as data is public', 'Allowed if anonymised', 'Unlawful processing', 'Allowed with notice only'],
    answerIndex: 2,
    correctReason:
      'Inferring sensitive attributes like mental health for targeted advertising is intrusive profiling. Public availability does not automatically make such processing fair or lawful.',
    wrongReasons: {
      0: 'Public data can still be personal data. Being public does not permit sensitive inference for advertising.',
      1: 'If the inference is tied to an account, it is not anonymous. Sensitive inference for ads remains problematic even with claimed anonymisation.',
      3: 'Notice alone does not make sensitive profiling lawful or proportionate.',
    },
  },
  {
    q: 'A bank outsources KYC verification to an AI startup but never audits its data practices. Who is liable under DPDPA?',
    options: ['AI startup only', 'Bank only', 'Both share liability', 'Regulator'],
    answerIndex: 2,
    correctReason:
      'Under the DPDPA, the bank (as the Data Fiduciary) remains primarily responsible for ensuring lawful processing of personal data, even when it outsources KYC to an AI startup (the Data Processor). If the bank fails to exercise due diligence—such as audits, contractual safeguards, or oversight—and the processor mishandles data, liability can extend to both parties based on their respective roles and failures.',
    wrongReasons: {
      0: 'Processors act on behalf of the fiduciary. Primary accountability remains with the bank as the fiduciary.',
      1: 'The Bank solely is not responsible because liability under the DPDPA is not exclusive when a processor independently violates obligations.',
      3: 'The regulator enforces the law; it is not the liable party for a compliance failure.',
    },
  },
  {
    q: 'A tech company trains an AI model using employee emails for “internal productivity analysis” without informing employees. This violates:',
    options: ['Purpose limitation', 'Transparency', 'Storage limitation', 'Security safeguards'],
    answerIndex: 1,
    correctReason:
      'Not informing employees about using their emails for AI training is a transparency failure. People must be told clearly what data is used and for what purpose.',
    wrongReasons: {
      0: 'Purpose limitation depends on what was originally communicated. The explicit issue here is lack of notice, making transparency the clearest violation.',
      2: 'Storage limitation relates to retention periods, not undisclosed use.',
      3: 'Security safeguards concern protection from breaches and misuse. The issue here is undisclosed processing.',
    },
  },
  {
    q: 'A fast-food chain links POS purchase history with its mobile app data without updating the privacy notice. Is this lawful?',
    options: ['Yes', 'No', 'Only a consent issue', 'Only if profiling occurs'],
    answerIndex: 1,
    correctReason:
      'Linking POS data with app data is a material change in processing. Without updating the privacy notice, it fails transparency requirements and is not lawful as done.',
    wrongReasons: {
      0: 'Silent linking without disclosure is not compliant even if a business justification is claimed.',
      2: 'It is not only about consent. Failing to update notice for a significant new use breaches transparency requirements.',
      3: 'Profiling is not required for the compliance issue. The undisclosed linkage itself is the problem.',
    },
  },
  {
    q: 'A logistics firm deletes raw GPS data but retains derived heatmaps showing individual driver routes. Is this still personal data?',
    options: ['No', 'Yes', 'Only statistical data', 'Only if PII exist'],
    answerIndex: 1,
    correctReason:
      'If derived heatmaps still allow a driver to be singled out or re-identified through unique route patterns, it remains personal data.',
    wrongReasons: {
      0: 'Deleting raw GPS does not automatically remove identifiability. Derived outputs can still identify someone through patterns.',
      2: 'It is only statistical when it is truly aggregated and cannot be used to single out an individual. Individual routes typically allow identification.',
      3: 'Direct identifiers are not required. Indirect identification through patterns or IDs can still make it personal data.',
    },
  },
  {
    q: 'What is the maximum monetary penalty under the Digital Personal Data Protection Act, 2023?',
    options: ['₹50 crore', '₹100 crore', '₹250 crore', '₹500 crore'],
    answerIndex: 2,
    correctReason:
      'The Act provides for penalties up to ₹250 crore for certain contraventions, making ₹250 crore the maximum penalty amount referenced in the statute.',
    wrongReasons: {
      0: '₹50 crore is below the maximum penalty cap provided under the Act.',
      1: '₹100 crore is below the maximum penalty cap provided under the Act.',
      3: '₹500 crore is not the maximum penalty amount specified under the Act.',
    },
  },
  {
    q: 'Under DPDPA, who determines the purpose and means of processing personal data?',
    options: ['Data Processor', 'Data Principal', 'Data Fiduciary', 'Data Auditor'],
    answerIndex: 2,
    correctReason:
      'A Data Fiduciary decides why personal data is processed and how processing is carried out, which is why the fiduciary determines purpose and means.',
    wrongReasons: {
      0: 'A Data Processor processes data on behalf of the fiduciary and does not decide the purpose and means.',
      1: 'A Data Principal is the individual to whom the data relates and does not decide processing purpose and means for the organisation.',
      3: 'An auditor may review compliance but does not determine the purpose and means of processing.',
    },
  },
  {
    q: 'Which right is NOT explicitly provided under DPDPA?',
    options: ['Right to correction', 'Right to data portability', 'Right to grievance redressal', 'Right to erasure'],
    answerIndex: 1,
    correctReason:
      'DPDPA does not explicitly provide a general right to data portability like some other global privacy laws.',
    wrongReasons: {
      0: 'Correction is explicitly provided so individuals can fix inaccurate or incomplete personal data.',
      2: 'Grievance redressal is explicitly provided, including the ability to approach the Board after the fiduciary process.',
      3: 'Erasure is explicitly provided in the context of withdrawal of consent and when retention is no longer necessary for the purpose.',
    },
  },
  {
    q: 'Which type of data falls outside the scope of DPDPA?',
    options: ['Anonymised data', 'Pseudonymised data', 'Encrypted data', 'Archived data'],
    answerIndex: 0,
    correctReason:
      'Truly anonymised data is outside the scope of DPDPA because it no longer relates to an identifiable individual.',
    wrongReasons: {
      1: 'Pseudonymised data can often be re-linked to a person and can remain within scope if re-identification is reasonably possible.',
      2: 'Encrypted data can still be personal data because it relates to an identifiable individual once decrypted by authorised parties.',
      3: 'Archived data can still be personal data. Archiving does not remove identifiability.',
    },
  },
  {
    q: 'Who can be notified as a Significant Data Fiduciary (SDF)?',
    options: ['Any startup', 'Only banks', 'Entities notified by the government', 'Only government departments'],
    answerIndex: 2,
    correctReason:
      'Significant Data Fiduciaries are notified by the government based on factors like volume and sensitivity of data and risk to rights of individuals.',
    wrongReasons: {
      0: 'SDF status is not voluntary or automatic for startups; it is notified based on statutory criteria.',
      1: 'Banks may be notified, but SDF status is not limited only to banks.',
      3: 'SDF status is not limited only to government departments; private entities can also be notified.',
    },
  },
  {
    q: 'DPDPA applies to processing of:',
    options: ['Only digital personal data', 'Only offline data', 'Digital personal data and digitised offline data', 'Only biometric data'],
    answerIndex: 2,
    correctReason:
      'DPDPA applies to digital personal data and to non-digital data that is digitised, because the Act governs processing in digital form.',
    wrongReasons: {
      0: 'The Act also covers offline data once it is digitised, not only data that is born-digital.',
      1: 'Purely offline data that is never digitised is generally not covered as processing must be in digital form.',
      3: 'The Act applies broadly to personal data in digital form, not only biometric data.',
    },
  },
  {
    q: 'Which authority adjudicates penalties under DPDPA?',
    options: ['Supreme Court of India', 'CERT-In', 'Data Protection Board of India', 'Reserve Bank of India'],
    answerIndex: 2,
    correctReason:
      'Penalties are adjudicated by the Data Protection Board of India, which is the statutory authority established for enforcement and adjudication under the Act.',
    wrongReasons: {
      0: 'The Supreme Court is not the adjudicating authority for penalties under the Act’s enforcement mechanism.',
      1: 'CERT-In is a cybersecurity incident response body and does not adjudicate DPDPA penalties.',
      3: 'RBI regulates banking and payments but does not adjudicate DPDPA penalties.',
    },
  },
  {
    q: 'Under DPDPA, valid consent must be:',
    options: ['Explicit only', 'Written only', 'Free, specific, informed, and unambiguous', 'Recorded on paper'],
    answerIndex: 2,
    correctReason:
      'Valid consent must be freely given, specific, informed, and unambiguous, ensuring the individual understands what they agree to and can withdraw consent.',
    wrongReasons: {
      0: 'Consent need not be “explicit only” in all cases; the standard is free, specific, informed, and unambiguous.',
      1: 'Consent does not have to be in writing only; it can be obtained through digital mechanisms provided it meets validity requirements.',
      3: 'Consent does not have to be recorded on paper. The key requirement is validity and recordability, not paper format.',
    },
  },
  {
    q: 'An Indian company transfers personal data to a country later restricted by government notification. What is the impact?',
    options: ['No impact', 'Future transfers prohibited; past transfers reviewed', 'Only contractual issue', 'GDPR overrides DPDPA'],
    answerIndex: 1,
    correctReason:
      'If the government restricts transfers to a country, future transfers would be prohibited. The organisation should also review existing arrangements to ensure ongoing compliance.',
    wrongReasons: {
      0: 'Government restriction affects cross-border transfers. There is an impact on permissible future transfers.',
      2: 'This is not only contractual; it becomes a legal compliance issue once a country is restricted.',
      3: 'GDPR does not override Indian law for Indian applicability. DPDPA controls transfers under its framework.',
    },
  },
  {
    q: 'A multinational processes Indian personal data entirely outside India but offers services in India. Does DPDPA apply?',
    options: ['No', 'Yes', 'Only GDPR applies', 'Only RBI-regulated entities'],
    answerIndex: 1,
    correctReason:
      'DPDPA can apply extraterritorially when processing is connected with offering goods or services to individuals in India, even if processing occurs outside India.',
    wrongReasons: {
      0: 'Processing location alone does not exclude applicability if the organisation targets individuals in India.',
      2: 'Other laws may apply, but DPDPA can still apply when services are offered in India.',
      3: 'Applicability is not limited to RBI-regulated entities; it is based on processing and connection with India.',
    },
  },
  {
    q: 'An AI vendor sub-processes Indian personal data across multiple cloud regions dynamically shared by Indian. Who is responsible for compliance?',
    options: ['Cloud provider', 'AI vendor', 'Indian Data Fiduciary', 'All jointly'],
    answerIndex: 2,
    correctReason:
      'The Indian Data Fiduciary remains responsible because it determines the purpose and means of processing and must ensure processors and sub-processors follow compliant practices.',
    wrongReasons: {
      0: 'Cloud providers generally act as sub-processors. The primary responsibility sits with the fiduciary that decides why and how data is processed.',
      1: 'The AI vendor is a processor acting on behalf of the fiduciary. Accountability under DPDPA remains with the fiduciary.',
      3: 'While multiple parties have duties, the statutory accountability for compliance sits with the fiduciary. The question tests that responsibility.',
    },
  },
  {
    q: 'Which is the strongest compliance control for cross-border personal data transfers under DPDPA?',
    options: ['Standard Contractual Clauses (SCCs)', 'Encryption', 'Government-notified allowed countries', 'User consent'],
    answerIndex: 2,
    correctReason:
      'Cross-border transfers are primarily controlled by government notification of permitted or restricted jurisdictions, making the notified list the strongest control under DPDPA.',
    wrongReasons: {
      0: 'Contracts can help manage obligations, but they do not override statutory restrictions on where data can be transferred.',
      1: 'Encryption is an important safeguard but does not by itself make a restricted transfer lawful.',
      3: 'Consent does not override a statutory restriction on transfers to restricted jurisdictions.',
    },
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
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

function awardTitle(score) {
  if (score >= 100) return 'DPDPA Sentinel Supreme';
  if (score >= 85) return 'Privacy Shield Champion';
  if (score >= 70) return 'Consent Guardian Pro';
  if (score >= 55) return 'Data Protection Pathfinder';
  return 'Compliance Cadet';
}

/* =========================
   EMAIL VALIDATION (ADDED)
   - Valid format
   - Block temp/disposable
   - Block test/fake patterns
   - Block personal mail domains (gmail/outlook/yahoo/etc.)
   ========================= */

const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.in',
  'yahoo.in',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
  'yandex.com',
  'yandex.ru',
  'gmx.com',
  'gmx.net',
  'mail.com',
  'rediffmail.com',
]);

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'tempmail.com',
  'mailinator.com',
  '10minutemail.com',
  'guerrillamail.com',
  'yopmail.com',
  'trashmail.com',
  'fakeinbox.com',
  'getnada.com',
  'dispostable.com',
  'temp-mail.org',
  'mohmal.com',
  'minuteinbox.com',
]);

const FAKE_LOCAL_PARTS = new Set([
  'test',
  'testing',
  'demo',
  'sample',
  'temp',
  'user',
  'email',
  'mail',
  'admin',
  'abc',
  'abcd',
  'xyz',
  'null',
  'undefined',
  'qwerty',
  '123',
  '1234',
  '111',
]);

function normalizeEmail(email) {
  return (email || '').trim().toLowerCase();
}

function parseEmailParts(email) {
  const e = normalizeEmail(email);
  const at = e.lastIndexOf('@');
  if (at < 1) return null;
  return {local: e.slice(0, at), domain: e.slice(at + 1)};
}

// Your strict regex (kept) + blocks many throwaway patterns
function isEmailSyntaxAcceptable(email) {
  return /^(?!^(?:a|ab|abc|abcd|test|testing|demo|sample|temp|user|email|xyz|123|1234|111|qwerty)@)(?!^[a-z]{1,2}@)(?!^\d{1,3}@)[^\s@]+@(?!example\.com$)(?!test\.)(?!fake\.)(?!.*(?:tempmail|mailinator|10minutemail|guerrillamail|yopmail|trashmail|getnada|dispostable)\.)[^\s@]+\.[^\s@]{2,}$/i.test(
    normalizeEmail(email),
  );
}

// Returns { ok, reason } so we can show message while typing
function validateEmail(email) {
  const e = normalizeEmail(email);
  if (!e) return {ok: false, reason: ''}; // no error while empty

  if (!isEmailSyntaxAcceptable(e)) {
    return {ok: false, reason: 'Please enter a valid work email address.'};
  }

  const parts = parseEmailParts(e);
  if (!parts) return {ok: false, reason: 'Please enter a valid email address.'};

  const {local, domain} = parts;

  // Block obvious fake locals
  if (
    FAKE_LOCAL_PARTS.has(local) ||
    /^[a-z]{1,2}$/.test(local) || // a@, ab@
    /^\d{1,3}$/.test(local) // 1@, 12@, 123@
  ) {
    return {ok: false, reason: 'Please use a real work email (not a test email).'};
  }

  // Block personal domains
  if (PERSONAL_EMAIL_DOMAINS.has(domain)) {
    return {ok: false, reason: 'Please use your company/work email (personal emails are not allowed).'};
  }

  // Block disposable domains (exact + subdomain)
  if (DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return {ok: false, reason: 'Temporary/disposable emails are not allowed.'};
  }
  for (const d of DISPOSABLE_EMAIL_DOMAINS) {
    if (domain.endsWith('.' + d)) {
      return {ok: false, reason: 'Temporary/disposable emails are not allowed.'};
    }
  }

  // Block some obviously fake domains
  if (domain === 'example.com' || domain.startsWith('test.') || domain.startsWith('fake.')) {
    return {ok: false, reason: 'Please enter a real company email domain.'};
  }

  return {ok: true, reason: ''};
}

// Keep the old function name used elsewhere
function isValidEmail(email) {
  return validateEmail(email).ok;
}

/* =========================
   END EMAIL VALIDATION
   ========================= */

function isLeadValid({name, email, company}) {
  const n = (name || '').trim();
  const e = (email || '').trim();
  const c = (company || '').trim();
  return n.length >= 2 && isValidEmail(e) && c.length >= 2;
}

async function submitLeadGET({name, email, company}) {
  const qs = new URLSearchParams({name, email, company}).toString();
  const url = `${APPS_SCRIPT_URL}?${qs}`;
  try {
    await fetch(url, {method: 'GET', mode: 'no-cors', redirect: 'follow'});
    return true;
  } catch (e) {
    return false;
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export default function HomepageFeatures() {
  const total = QUIZ_QUESTIONS.length;

  // Hooks MUST be inside the component
  const quizStartAtRef = useRef(null);
  const timerRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME_SECONDS);

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(() => Array(total).fill(null));
  const [showLead, setShowLead] = useState(false);

  const [lead, setLead] = useState({name: '', email: '', company: ''});
  const [submitting, setSubmitting] = useState(false);

  const [finalScore, setFinalScore] = useState(null);
  const [openCard, setOpenCard] = useState(null);

  // ADDED: show email error while typing (validation on input)
  const [emailError, setEmailError] = useState('');

  const answeredCount = useMemo(() => answers.filter((a) => a !== null).length, [answers]);
  const progressPct = useMemo(() => Math.round((answeredCount / total) * 100), [answeredCount, total]);

  const correctCount = useMemo(() => {
    let c = 0;
    for (let i = 0; i < total; i++) if (answers[i] === QUIZ_QUESTIONS[i].answerIndex) c++;
    return c;
  }, [answers, total]);

  const score = useMemo(() => correctCount * POINTS_PER_QUESTION, [correctCount]);
  const current = QUIZ_QUESTIONS[idx];

  // Real-time timer (timestamp based)
  useEffect(() => {
    if (!started) return;
    if (!quizStartAtRef.current) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const tick = () => {
      const elapsedSec = Math.floor((Date.now() - quizStartAtRef.current) / 1000);
      const remaining = Math.max(0, QUIZ_TIME_SECONDS - elapsedSec);
      setTimeLeft(remaining);
      if (remaining === 0 && timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    tick();
    timerRef.current = setInterval(tick, 250);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [started]);

  // Force lead capture ONLY if time is over AND user hasn't revealed results yet
  useEffect(() => {
    if (!started) return;
    if (timeLeft !== 0) return;
    if (finalScore !== null) return;
    if (showLead) return;
    setShowLead(true);
  }, [started, timeLeft, finalScore, showLead]);

  function startQuiz() {
    quizStartAtRef.current = Date.now();
    setStarted(true);
    setTimeLeft(QUIZ_TIME_SECONDS);
    setIdx(0);
    setAnswers(Array(total).fill(null));
    setFinalScore(null);
    setLead({name: '', email: '', company: ''});
    setShowLead(false);
    setEmailError(''); // ADDED
  }

  function selectOption(optionIndex) {
    setAnswers((prev) => {
      if (prev[idx] !== null) return prev;
      const next = [...prev];
      next[idx] = optionIndex;
      return next;
    });

    setTimeout(() => {
      setIdx((prevIdx) => {
        const atEnd = prevIdx >= total - 1;
        if (atEnd) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setShowLead(true);
          return prevIdx;
        }
        return prevIdx + 1;
      });
    }, 200);
  }

  function goPrev() {
    setIdx((i) => Math.max(0, i - 1));
  }

  function goNext() {
    if (answers[idx] === null) return;
    setIdx((i) => Math.min(total - 1, i + 1));
  }

  function resetAll() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;

    quizStartAtRef.current = null;

    setStarted(false);
    setTimeLeft(QUIZ_TIME_SECONDS);
    setIdx(0);
    setAnswers(Array(total).fill(null));
    setShowLead(false);
    setLead({name: '', email: '', company: ''});
    setSubmitting(false);
    setFinalScore(null);
    setEmailError(''); // ADDED
  }

  async function revealScore() {
    if (!isLeadValid(lead)) return;

    setSubmitting(true);
    await submitLeadGET({
      name: (lead.name || '').trim(),
      email: (lead.email || '').trim(),
      company: (lead.company || '').trim(),
    });
    setSubmitting(false);
    setShowLead(false);

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setFinalScore(score);
  }

  async function downloadCertificate() {
    if (finalScore === null) return;

    const name = (lead.name || 'Recipient').trim() || 'Recipient';
    const rank = awardTitle(finalScore);
    const scoreStr = String(finalScore);

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

    const nameX = Math.round(canvas.width * 0.07);
    const nameY = Math.round(canvas.height * 0.5);
    const rankX = nameX;
    const rankY = nameY + Math.round(canvas.height * 0.03);
    const scoreX = Math.round(canvas.width * 0.28);
    const scoreY = Math.round(canvas.height * 0.78);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';

    let nameFontSize = Math.min(Math.max(Math.round(canvas.width * 0.04), 44), 86);
    ctx.fillStyle = '#111111';
    ctx.font = `700 ${nameFontSize}px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;

    const maxNameWidth = canvas.width * 0.58;
    while (ctx.measureText(name).width > maxNameWidth && nameFontSize > 40) {
      nameFontSize -= 2;
      ctx.font = `700 ${nameFontSize}px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
    }
    ctx.fillText(name, nameX, nameY);

    ctx.fillStyle = '#2b2b2b';
    ctx.font = `600 ${Math.round(canvas.width * 0.018)}px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
    ctx.fillText(rank, rankX, rankY);

    ctx.fillStyle = '#111111';
    ctx.font = `700 ${Math.round(canvas.width * 0.02)}px Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
    ctx.fillText(scoreStr, scoreX, scoreY);

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

  const quizLocked = answers[idx] !== null;

  // Full page center layout for quiz
  const quizPageStyle = {
    minHeight: '75vh',
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    gap: 10,
  };

  const quizWidthStyle = {
    width: 'min(1180px, 100%)',
  };

  // Start button centered, big, no text around it
  const startOnlyWrapStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '18px 0 4px',
  };

  const startBtnStyle = {
    borderRadius: '18px',
    padding: '18px 32px',
    fontWeight: 900,
    fontSize: '1.15rem',
    letterSpacing: '0.01em',
    border: '1px solid rgba(22, 163, 74, 0.90)',
    background: 'rgba(22, 163, 74, 0.22)',
    boxShadow: '0 18px 46px rgba(22, 163, 74, 0.16)',
    cursor: 'pointer',
  };

  return (
    <section className={styles.features}>
      <div className="container" style={{display: 'grid', gap: 10}}>
        <div style={quizPageStyle}>
          <div style={quizWidthStyle} className={styles.quizWrap}>
            <div className={styles.quizHeader}>
              <div>
                <div className={styles.kicker}>DPDPAedu Quiz</div>
                <Heading as="h2" className={styles.quizTitle}>
                  Digital Personal Data Protection Act Knowledge Check
                </Heading>
                <p className={styles.quizSub}>
                  Test your knowledge of India’s Data Protection Law and earn a public DPDPA awareness certificate
                </p>
              </div>

              <div className={styles.quizMeta}>
                <div className={styles.metaCard}>
                  <div className={styles.metaLabel}>Questions</div>
                  <div className={styles.metaValue}>{total}</div>
                </div>
                <div className={styles.metaCard}>
                  <div className={styles.metaLabel}>Progress</div>
                  <div className={styles.metaValue}>{started ? `${progressPct}%` : '0%'}</div>
                </div>
                <div className={styles.metaCard}>
                  <div className={styles.metaLabel}>Timer</div>
                  <div className={styles.metaValue}>{started ? formatTime(timeLeft) : '05:00'}</div>
                </div>
              </div>
            </div>

            {!started && (
              <div style={startOnlyWrapStyle}>
                <button className={styles.primaryBtn} onClick={startQuiz} type="button" style={startBtnStyle}>
                  Start quiz
                </button>
              </div>
            )}

            {started && finalScore === null && (
              <>
                <div className={styles.progressWrap} style={{marginTop: 6}}>
                  <div className={styles.bar}>
                    <div className={styles.fill} style={{width: `${progressPct}%`}} />
                  </div>
                  <div className={styles.progressText}>
                    Q{idx + 1} of {total} • Answered: {answeredCount}/{total}
                  </div>
                </div>

                <div className={styles.card} aria-label="Quiz" style={{marginTop: 4}}>
                  <div className={styles.qText}>{current.q}</div>

                  <div className={styles.grid}>
                    {current.options.map((opt, i) => {
                      const selected = answers[idx] === i;
                      return (
                        <button
                          key={`${idx}-${i}`}
                          type="button"
                          className={clsx(styles.opt, selected && styles.selected)}
                          onClick={() => selectOption(i)}
                          disabled={quizLocked || timeLeft === 0}
                        >
                          <span className={styles.letter}>{String.fromCharCode(65 + i)}</span>
                          <span className={styles.optText}>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className={styles.nav}>
                    <button className={styles.btn} onClick={goPrev} type="button" disabled={idx === 0}>
                      ← Previous
                    </button>
                    <div className={styles.hint}>
                      {timeLeft === 0
                        ? 'Time ended'
                        : answers[idx] === null
                          ? 'Select an answer to continue'
                          : 'Locked in — moving on…'}
                    </div>
                    <button
                      className={styles.btn}
                      onClick={goNext}
                      type="button"
                      disabled={idx >= total - 1 || answers[idx] === null}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </>
            )}

            {finalScore !== null && (
              <div className={styles.resultCard} aria-label="Results" style={{marginTop: 6}}>
                <div className={styles.resultTop}>
                  <div>
                    <div className={styles.score}>{finalScore}</div>
                    <div className={styles.sub}>Your score</div>
                  </div>
                  <div className={styles.badge}>{awardTitle(finalScore)}</div>
                </div>

                <div className={styles.actions}>
                  <button className={styles.primaryBtn} onClick={downloadCertificate} type="button">
                    Download certificate
                  </button>
                  <button className={styles.btn} onClick={resetAll} type="button">
                    Retake quiz
                  </button>
                </div>

                <div className={styles.answerKey}>
                  <div className={styles.answerKeyTitle}>Answer key + reasoning</div>

                  <div className={styles.answerKeyList}>
                    {QUIZ_QUESTIONS.map((q, i) => {
                      const userIdx = answers[i];
                      const correctIdx = q.answerIndex;
                      const isCorrect = userIdx === correctIdx;

                      const userText = userIdx === null ? '—' : q.options[userIdx];
                      const correctText = q.options[correctIdx];

                      return (
                        <div key={`ak-${i}`} className={clsx(styles.akItem, isCorrect ? styles.ok : styles.bad)}>
                          <div className={styles.akQ}>
                            Q{i + 1}. {q.q}
                          </div>

                          <div className={styles.akA}>
                            <div>
                              <span className={styles.lbl}>Your answer:</span> {userText}
                            </div>
                            <div>
                              <span className={styles.lbl}>Correct:</span> {correctText}
                            </div>
                          </div>

                          <details className={styles.reason}>
                            <summary>Show reasoning</summary>
                            <p>{q.correctReason}</p>
                            <p>{isCorrect ? 'Your selected option matches the correct answer for this scenario.' : q.wrongReasons[userIdx]}</p>
                          </details>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div style={{marginTop: 6}}>
          <div className="row">{FeatureList.map((props, i) => <Feature key={i} {...props} />)}</div>
        </div>

        <div className={styles.boardShell} aria-label="Review Board" style={{marginTop: 10}}>
          <div className={styles.boardHead}>
            <div className={styles.boardKicker}>Community & Review Panel</div>
            <Heading as="h2" className={styles.boardTitle}>
              Project Leadership & Experts
            </Heading>
            <p className={styles.boardSub}></p>
          </div>

          <div className={styles.boardCenter}>
            <div className={styles.boardCards}>
              {BOARD_MEMBERS.map((m) => {
                const isOpen = openCard === m.id;
                return (
                  <button
                    key={m.id}
                    type="button"
                    className={clsx(styles.miniCard, isOpen && styles.miniCardOpen)}
                    onClick={() => setOpenCard((prev) => (prev === m.id ? null : m.id))}
                    aria-label={`${m.name} card`}
                  >
                    <div className={styles.miniTop}>
                      <img className={styles.avatar} src={m.img} alt={m.name} loading="lazy" />
                      <div className={styles.miniMeta}>
                        <div className={styles.miniTag}>{m.tag}</div>
                        <div className={styles.miniNameRow}>
                          <div className={styles.miniName}>{m.name}</div>
                          {m.linkedin ? (
                            <a
                              className={styles.li}
                              href={m.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`${m.name} LinkedIn`}
                            >
                              <FaLinkedin size={18} />
                            </a>
                          ) : null}
                        </div>
                        <div className={styles.miniRole}>{m.role}</div>
                        <div className={styles.miniSummary}>{m.summary}</div>
                      </div>
                    </div>

                    <div className={styles.reveal} aria-hidden={!isOpen}>
                      <div className={styles.revealInner}>
                        <p className={styles.revealText}>{m.details}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {showLead && (
          <div className={styles.backdrop} role="dialog" aria-modal="true" aria-labelledby="leadTitle">
            <div className={styles.modal}>
              <div className={styles.modalTitle} id="leadTitle">
                Get your score + certificate
              </div>
              <p className={styles.modalDesc}>
                Enter your Name, Email, and Company. We’ll show your score and let you download your certificate.
              </p>

              <div className={styles.formGrid}>
                <label className={styles.label}>
                  Full name<span className={styles.req}>*</span>
                  <input
                    className={styles.input}
                    value={lead.name}
                    onChange={(e) => setLead((p) => ({...p, name: e.target.value}))}
                    placeholder="e.g., Harsh Parekh"
                    autoComplete="name"
                  />
                </label>

                <label className={styles.label}>
                  Email<span className={styles.req}>*</span>
                  <input
                    className={styles.input}
                    value={lead.email}
                    onChange={(e) => {
                      const val = e.target.value;
                      setLead((p) => ({...p, email: val}));

                      // ADDED: validate on typing
                      const v = validateEmail(val);
                      setEmailError(v.ok ? '' : v.reason);
                    }}
                    placeholder="e.g., harsh@company.com"
                    autoComplete="email"
                  />

                  {/* ADDED: inline error (no CSS changes needed) */}
                  {emailError ? (
                    <div style={{marginTop: 6, fontSize: '0.9rem', lineHeight: 1.25, color: '#b42318'}}>
                      {emailError}
                    </div>
                  ) : null}
                </label>

                <label className={styles.label}>
                  Company<span className={styles.req}>*</span>
                  <input
                    className={styles.input}
                    value={lead.company}
                    onChange={(e) => setLead((p) => ({...p, company: e.target.value}))}
                    placeholder="e.g., Securze"
                    autoComplete="organization"
                  />
                </label>
              </div>

              <div className={styles.privacy}>
                We use your details to share relevant updates and awareness resources related to DPDPA and data protection.
                Read our <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> for more details.
              </div>

              <div className={styles.modalActions}>
                <button
                  className={styles.btn}
                  type="button"
                  onClick={() => {
                    setShowLead(false);
                    resetAll();
                  }}
                  disabled={submitting}
                >
                  Cancel
                </button>

                <button
                  className={styles.primaryBtn}
                  type="button"
                  onClick={revealScore}
                  disabled={submitting || !isLeadValid(lead)}
                >
                  Reveal score
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
