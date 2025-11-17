---
sidebar_position: 4
---

---

> **Scope**  
> This page explains each **Right of Data Principals** under the **Digital Personal Data Protection Act, 2023** and connects them to the operational mechanisms in the **Draft DPDP Rules (3–22)** and the **Schedules**. It focuses on _how_ these rights should be delivered in real products and processes, including timelines, evidence, vendor propagation, and carve-outs. Sector examples (BFSI, healthcare, consumer apps) are included for clarity.

---

## TL;DR – Core rights at a glance

1. **Right to Information** — Obtain a summary of personal data being processed, processing purposes/activities, identities of recipients/processors, and other prescribed details.  
2. **Right to Correction, Completion, Updating & Erasure** — Fix mistakes, complete missing fields, update old records, and erase consent-processed data (subject to legal retention).  
3. **Right to Grievance Redressal** — Complain to the Data Fiduciary/Consent Manager; escalate unresolved issues to the Data Protection Board of India.  
4. **Right to Withdraw Consent** — Withdraw consent with **comparable ease** to giving consent; processing must stop unless another legal basis applies.  
5. **Right to Nominate** — Nominate a person to exercise rights upon death or incapacity.

---

## How the Draft Rules (3–22) make rights real

- **Rule 3 (Notice)** mandates discoverable, multilingual notices that include **how to exercise each right**, grievance routes, and Board escalation.
- **Rules on consent/withdrawal** define **comparable ease**, record-keeping, and Consent Manager obligations.
- **Security/TOMs rules** (technical & organizational safeguards) require accuracy, integrity, authentication, logging, vendor controls, and evidence for audits.
- **Breach rule** prescribes rapid notification (e.g., Board within 72 hours) and user communication.
- **Retention/deletion rules** operationalize erasure and purpose-bound storage.
- **Cross-border rule** restricts conditions for availability/processing abroad.
- **Schedules** provide templates and governance scaffolding (notice content, TOMs, retention classes, breach templates, Board procedures).

:::tip Practitioner takeaway
If you build/operate a product, treat the Draft Rules + Schedules as your **functional requirements** for rights UX, backend workflows, logs, and vendor propagation. If you’re an individual, these create **clear paths** to use your rights and **time-bound** obligations for organizations.
:::

---

## Right 1 — Access to information about personal data

**What you can request**
- A **summary** of personal data being processed about you.  
- **Processing activities** and **purposes**.  
- **Identities** (or categories) of Data Fiduciaries/Processors with whom data was shared and **what** was shared.  
- Any **other prescribed information** under the Rules/Schedules.

:::info How Rules 3–22 and Schedules enable this
- **Rule 3 (Notice):** Must clearly describe **how to request access** and **expected timelines**.  
- **Security/TOMs:** Ensure the returned information is **accurate, authenticated, and safe** to disclose.  
- **Vendor/processor controls:** Fiduciary must **know** who received data and **what** was sent to answer access queries completely.  
- **Schedules:** Influence the **notice content**, **retention windows**, and **format** of responses.
:::

### Sector examples
:::tip BFSI
A customer asks: “What data did you share with credit bureaus in the last 12 months?”  
The bank produces a summary including **dates**, **data categories** (identifiers, account status, repayment history), **recipient identity**, and **purpose** (credit scoring, underwriting).
:::

:::tip Healthcare
A patient requests a summary of clinical data shared with a diagnostics network.  
The hospital identifies each **processor**, the **tests/records** shared, and **purposes** (diagnosis, billing). If the lab is a processor, its details are included as part of the fiduciary’s disclosure.
:::

:::tip Consumer apps
A user requests all processors used for analytics/ads.  
The app lists **analytics SDKs/ad partners**, **events/identifiers** shared (e.g., device ID, event names), and purposes (analytics, personalization).
:::

### Product/ops checklist (Access)
- **Self-service page**: “Request your data” with identity proofing.  
- **Data map**: System-of-record + processors + categories + purposes.  
- **Evidence**: Timestamped export, handler, and response sent.  
- **Appeal path**: Explain partial/denied responses and grievance route.

---

## Right 2 — Correction, completion, updating & erasure

**Actions you can demand**
- **Correct** inaccuracies; **complete** missing fields; **update** outdated info.  
- **Erase** data processed on the basis of consent (unless retention is mandated by law).

:::info How Rules 3–22 and Schedules enable this
- **Rule 3 (Notice)**: Must explain **how to request correction/erasure** and **where limits apply**.  
- **Retention/Deletion rules**: Purpose-bound retention with **automated deletion triggers** after expiry or withdrawal.  
- **Processor obligations**: Propagate changes/erasure to **downstream processors** via DPA terms and technical hooks.  
- **Grievance escalation**: If refused (e.g., AML/KYC retention), provide **reason + appeal path**.
:::

### Sector examples
:::tip Fintech (BFSI)
User asks to erase marketing profiles and tracking identifiers.  
Company erases profiles across CRM/analytics/ads and notifies partners; retains **KYC/transactions** per AML/tax law; documents **legal basis** and **retention period**.
:::

:::tip Healthcare
Patient corrects a wrong blood group.  
The provider updates the EHR, notify the laboratory and any care partners, log the change, and proactively inform the patient about any potential risks that could arise from the earlier incorrect information.
:::

:::tip Consumer apps
User updates phone/email.  
App updates auth/notification systems and **syncs** with SMS/email vendors; confirms completion to the user.
:::

### Product/Ops checklist (Correction/Erasure)
- Unified **change/erase form** with safe **identity verification**.  
- **Propagation**: Webhooks/API to processors; DPA clauses enforce completion.  
- **Decline templates**: Statutory retention rationale + auto-erase date.  
- **Audit log**: Before/after values (where lawful), handler, timestamps.

:::warning Statutory retention overrides erasure
If law requires keeping data (e.g., AML, taxation, medical record laws), fiduciaries **must** retain it. Provide **partial-grant** with rationale and the **future deletion date**.
:::

Post erasure a certificate or communication confirming that this has been done needs to be sent to subject.

---

## Right 3 — Grievance redressal

You can complain about **failure to honor rights** or other obligations under the Act to the Data Fiduciary/Consent Manager; unresolved issues can be **escalated to the Board**.

:::info How Rules 3–22 and Schedules enable this
- **Notice** must publish **channels** (web, in-app, email) and **service levels**.  
- **Schedules for Board**: Define **intake → hearing → decision** flows.  
- **Record-keeping**: Audit logs for each complaint and each right’s request.
:::

### Product/ops checklist (Grievances)
- Prominent **“File a privacy complaint”** link.  
- **Categorization**: Rights request vs. incident vs. third-party request.  
- **SLA clock** with reminders; **escalation matrix**.  
- **Evidence pack**: All correspondence, decisions, timestamps.

---

## Right 4 — Withdraw consent (comparable ease)

You can **withdraw consent** as easily as it was given. Processing must **stop within a reasonable time** unless another legal regulatory basis applies.

:::info How Rules 3–22 and Schedules enable this
- **Rule 3 (Notice)**: Must spell out **comparable ease** withdrawal; no dark patterns.  
- **Consent Manager**: Unified panel to view and withdraw consents across services.  
- **Processor stop-signal**: Propagate withdrawal to partners and purge where required.
:::

### UX pattern & examples
:::tip Comparable ease
If consent was **one-tap** in a settings toggle or during onboarding, withdrawal must be **one-tap in the same area**, not an email form or external ticket.
:::

:::tip BFSI/Healthcare/App
- **Banking app**: “Personalized offers” toggle → Off = withdrawal; CRM/ads updates in minutes.  
- **Hospital portal**: “Research use of de-identified data” opt-in → Off = withdrawal; research registry updated, confirmations recorded.  
- **Social app**: “Ad personalization” toggle → Off; ad SDK configs refreshed and ID syncs removed.
:::

### Product/ops checklist (Withdrawal)
- **In-context toggle** (same surface as opt-in).  
- **Event pipeline** that broadcasts **withdrawal** to all processors.  
- **User confirmation** with effective time and what will stop/change.  
- **Exception handling** if another legal ground applies (explain clearly).

---

## Right 5 — Nominate

You may **nominate** a person to exercise your rights upon your **death or incapacity**. 

:::tip Note
The Right to Nominate is considered a unique and innovative feature of the Digital Personal Data Protection Act (DPDPA), 2023, that is not explicitly granted in a general form to data subjects/consumers under the GDPR or the CCPA.
:::

:::info How Rules 3–22 and Schedules enable this
- **Notice**: Must describe **nomination flow** and acceptable **proofs of authority**.  
- **Grievance**: If nomination is rejected (identity/authority concerns), provide reasons and an appeal path.
:::

### Product/ops checklist (Nomination)
- Simple **nomination form** with eKYC / digital signature.  
- Store nominee linkage with **timestamps** and **verification method**.  
- **Activation conditions**: death/incapacity proof; restricted access scope; logged actions.

---

## Mapping Rights ↔ Draft Rules 3–22 (Operational View)

| Rule | What it requires (rights-relevant) | Why it matters for rights |
|---|---|---|
| **3. Notice** | Clear, itemized notice in required languages; how to exercise rights; grievance + Board details. | **Discoverability** and **usability** of rights. |
| **4–7. Consent & Withdrawal** | Verifiable consent; **comparable ease** withdrawal; records. | **Control**: give/withdraw quickly without friction. |
| **8–10. Consent Manager** | Registration, obligations, standardized interfaces. | **Centralized control** across services. |
| **11–12. Security (TOMs)** | Authentication, authorization, integrity, logging; processor controls. | Rights responses are **accurate, safe, auditable**. |
| **13. Personal Data Breach** | Notify Board (e.g., within 72 hours) and affected users per plan. | **Timely awareness** and reactive actions. |
| **14. Cross-Border Processing** | Conditions/restrictions for making data available abroad. | Keeps rights **enforceable** across borders and makes sure that data is not stored in unapproved geographies. |
| **15–16. Retention & Deletion** | Purpose-bound retention classes; deletion triggers. | **Real erasure** after expiry/withdrawal. |
| **17–18. Children & PwDs** | Verifiable guardian consent; special protections; tailored notices. | **Enhanced safeguards** for vulnerable groups. |
| **19–20. Significant Data Fiduciaries** | DPIA (Data Protection Impact Analysis), audits, algorithmic transparency, accountability. | Higher-risk entities must do **more** to protect rights. |
| **21–22. State & Board Ops** | State instrumentality carve-outs; Board procedures. | Clarifies **how complaints are handled** nationally. |

:::tip Implementation note
Link each Rule to **internal controls** (policy, SOP, runbook, queue), **technical artifacts** (APIs, webhooks, logs), and **user-facing elements** (notice sections, settings toggles, forms).
:::

---

## Schedules — Practical impact on your rights

- **Notice Schedule** — Expected content, placement, and language coverage (including any language specified in the Eighth Schedule to the Constitution of India).  
- **TOMs Schedule** — Baseline security controls for rights flows: identity proofing, logging, change controls, vendor propagation, periodic testing.  
- **Retention/Deletion Schedule** — Classes & durations; deletion job requirements; handling of backups and archives.  
- **Breach Schedule** — Templates: what to tell affected users (nature, scope, mitigations, contact).  
- **Board Schedules (x3)** — Complaint intake, hearing, decision/appeal flows and formats.

:::info For readers (Data Principals)
Schedules make sure that when you use your rights, organizations **must** have the **process, security, and documentation** to execute them reliably.
:::

---

## Limits, conflicts, and carve-outs

:::note Read this before relying on a right
- **Statutory retention beats erasure** (e.g., AML/KYC, taxation, medical laws). Organizations must **explain partial denials** and auto-erase after expiry.  
- **Legitimate uses & state functions** may limit certain rights in defined scenarios; reasons must be documented.  
- **Cross-border** transfers may be restricted by government order to retain **redressability** and **oversight**.  
- **Timelines** are prescribed/expected; organizations should publish **SLA ranges** and meet them, keeping evidence for audits/regulator review.
:::

---

## Templates you can borrow (ready for ops/legal)

<details>
<summary><strong>Access response (comprehensive)</strong></summary>

**What we hold (summary):** account profile, identifiers, transactions, support tickets, device/session metadata.  
**Why we process:** onboarding/KYC, service delivery, payments, fraud/risk, support, analytics (if consented).  
**Who we shared with (last 12 months):**  
- **Payments:** ABC Payments (txn processing), categories: name, masked PAN, txn metadata.  
- **Cloud hosting:** XYZ Cloud (infrastructure), categories: encrypted records and logs.  
- **Fraud control:** FraudShield (risk scoring), categories: device ID, IP, txn risk signals.  
**How to complain:** In-app **Help → Privacy → Complaint** or email privacy@…; unresolved? Escalate to the **Data Protection Board of India**.
</details>

<details>
<summary><strong>Erasure response (partial with statutory retention)</strong></summary>

We **erased**: marketing profiles, analytics identifiers, non-essential logs.  
We **retained**: KYC, invoices, and core transaction records under AML/tax laws.  
**Reason**: Statutory retention requirement. We will **auto-erase** retained data on **YYYY-MM-DD** or upon legal expiry.  
Reference: **ER-2025-00127**. Contact privacy@… to follow up or escalate via our grievance portal.
</details>

<details>
<summary><strong>Withdrawal confirmation</strong></summary>

We received your request to **withdraw consent** for: [Ad personalization / Analytics / Research].  
Effective **immediately/within N hours**, we will stop this processing and notify relevant processors.  
Some processing may continue under **legal obligations** (e.g., security, fraud, compliance) as permitted by law.  
If you believe this is incorrect, please raise a grievance at our portal.
</details>

<details>
<summary><strong>Nomination acknowledgement</strong></summary>

We have recorded **[Nominee Name, ID]** as your nominee to exercise rights if you die or are incapacitated.  
To activate nomination, the nominee must submit **proof of authority** (e.g., court letter/medical certificate).  
You can modify or revoke this nomination anytime in **Settings → Privacy → Nomination**.
</details>

---

## Developer/PM master checklist (ship rights that actually work)

- [ ] **Self-service UX** for Access / Correction / Erasure / Withdrawal / Grievance / Nomination.  
- [ ] **Identity proofing** proportional to risk; avoid dark patterns.  
- [ ] **Data map** with processors and categories; live **processing inventory**.  
- [ ] **Propagation** of changes/withdrawals to processors via API/webhooks; DPA (Data Processing Agreement) enforcement, enrusing that every processor promptly updates, corrects, or deletes the data as required, following the agreed security measures, and complies with legal obligations under the DPDP Act. 
- [ ] **Retention engine**: purpose tags, timers, backup/restore deletion patterns.  
- [ ] **Breach playbook**: Board notice workflow (e.g., within 72 hours), user comms templates.  
- [ ] **Grievance queue**: SLA targets, escalation, audit logging.  
- [ ] **Evidence pack**: rights-request register, decision logs, exports, screenshots.  
- [ ] **Consent Manager integration** where applicable.  
- [ ] **Periodic testing** of rights flows; report + remediation tracking.

---

## Frequently asked practical questions

:::info How long can a company take to respond?
Timelines should be **published** in the notice/portal and met consistently; regulators typically expect **prompt** handling with auditable evidence.
:::

:::info Can a company refuse my erasure request?
Yes, **partially or completely**, if other laws or regulatory requirement prescribes. They must explain **what** and **why**, and **when** it will be deleted.
:::

:::info What happens if my data has been breached?
You should receive a **timely notice** describing the incident and recommended steps; the Board should be notified per the breach rule.
:::

---
