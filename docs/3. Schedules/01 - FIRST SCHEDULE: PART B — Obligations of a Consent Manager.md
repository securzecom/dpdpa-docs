---
sidebar_position: 2
---

# Schedule I: PART B — Obligations of a Consent Manager

<details>  
  <summary><strong>FIRST SCHEDULE [See rule 4] PART B — Obligations of a Consent Manager</strong> (click to expand)</summary>  

1. The Consent Manager shall enable a Data Principal using its platform to give consent to the processing of her personal data by a Data Fiduciary onboarded onto such platform either directly to such Data Fiduciary or through another Data Fiduciary onboarded onto such platform, who maintains such personal data with the consent of that Data Principal.  

 **Illustration.** Individuals are enabled to give, manage, review and withdraw their consent to the processing of their personal data through P, a platform maintained by a Consent Manager. X, an individual, is a registered user on P. B1 and B2 are banks onboarded onto P.  
 Case 1: B1 sends a request on P to X for consent to process personal data contained in her bank account statement. X maintains the bank account statement as a digital record in her digital locker. X uses P to directly give her consent to B1, and proceeds to give B1 access to her bank account statement.  
 Case 2: B1 sends a request on P to X for consent to process personal data contained in her bank account statement. X maintains her bank account with B2. X uses P to route her consent through B2 to B1, while also digitally instructing B2 to send her bank account statement to B1. B2 proceeds to send the bank account statement to B1.  

2. The Consent Manager shall ensure that the manner of making available the personal data or its sharing is such that the contents thereof are not readable by it.  

3. The Consent Manager shall maintain on its platform a record of the following, namely:—  
 (a) Consents given, denied or withdrawn by her;  
 (b) Notices preceding or accompanying requests for consent; and  
 (c) Sharing of her personal data with a transferee Data Fiduciary.  

4. The Consent Manager—  
 (a) shall give the Data Principal using such platform access to such record;  
 (b) shall, on the request of the Data Principal and in accordance with its terms of service, make available to her the information contained in such record, in machine-readable form; and  
 (c) shall maintain such record for at least seven years, or for such longer period as the Data Principal and Consent Manager may agree upon or as may be required by law.  

5. The Consent Manager shall develop and maintain a website or app, or both, as the primary means through which a Data Principal may access the services provided by the Consent Manager.  

6. The Consent Manager shall not sub-contract or assign the performance of any of its obligations under the Act and these rules.  

7. The Consent Manager shall take reasonable security safeguards to prevent personal data breach.  

8. The Consent Manager shall act in a fiduciary capacity in relation to the Data Principal.  

9. The Consent Manager shall avoid conflict of interest with Data Fiduciaries, including in respect of their promoters and key managerial personnel.  

10. The Consent Manager shall have in place measures to ensure that no conflict of interest arises on account of its directors, key managerial personnel and senior management holding a directorship, financial interest, employment or beneficial ownership in Data Fiduciaries, or having a material pecuniary relationship with them.  

11. The Consent Manager shall publish in an easily accessible manner, on its website or app, or both, as the case may be, information regarding—  
 (a) the promoters, directors, key managerial personnel and senior management of the company registered as Consent Manager;  
 (b) every person who holds shares in excess of two per cent of the shareholding of the company registered as Consent Manager;  
 (c) every body corporate in whose shareholding any promoter, director, key managerial personnel or senior management of the Consent Manager holds shares in excess of two per cent as on the first day of the preceding calendar month; and  
 (d) such other information as the Board may direct the Consent Manager to disclose in the interests of transparency.  

12. The Consent Manager shall have in place effective audit mechanisms to review, monitor, evaluate and report the outcome of such audit to the Board, periodically and on such other occasions as the Board may direct, in respect of—  
 (a) technical and organisational controls, systems, procedures and safeguards;  
 (b) continued fulfilment of the conditions of registration; and  
 (c) adherence to its obligations under the Act and these rules.  

13. The control of the company registered as the Consent Manager shall not be transferred by way of sale, merger or otherwise, except with the previous approval of the Board and subject to fulfilment of such conditions as the Board may specify in this behalf.  

**Note:** In this Schedule,—  
(a) the expression “body corporate” shall include a company, a body corporate as defined under clause (11) of section 2 of the Companies Act, 2013 (18 of 2013), a firm, a financial institution, a scheduled bank or a public sector enterprise established or constituted by or under any Central Act, Provincial Act or State Act, and any other incorporated association of persons or body of individuals;  
(b) the expressions “company”, “control”, “director” and “key managerial personnel” shall have the same meanings as are respectively assigned to them in the Companies Act, 2013 (18 of 2013);  
(c) the expression “net worth” shall mean the aggregate value of total assets as reduced by the value of liabilities of the Consent Manager as appearing in its books of accounts; and  
(d) the expressions “promoter” and “senior management” shall have the same meanings as are respectively assigned to them in the Companies Act, 2013 (18 of 2013).  

</details>


### 1. Enabling Consent through the Platform  

The Consent Manager’s platform must allow users to **give, manage, review, or withdraw** consent for their data being processed by any onboarded Data Fiduciary.  

The rule allows two modes:  
- Direct consent between the user and the Data Fiduciary.  
- Routed consent where another Data Fiduciary holds the data and transfers it securely.  

:::info Example  
A user, X, holds her bank account with Bank B2 and wants Bank B1 to access her statement for a loan. Through the Consent Manager platform “P”, X gives consent and instructs B2 to send her statement to B1 securely — without either bank or P reading her data.  
:::

---

### 2. Non-readability of shared data  

The Consent Manager must never access or read the contents of personal data being shared between Data Fiduciaries. It only facilitates transmission securely, acting as a neutral, encrypted pipeline.  

:::tip  
This maintains “data minimisation” — the Consent Manager handles metadata (who shared what, when, and with whom) but never the actual content.  
:::

---

### 3. Record-keeping  

The Consent Manager must maintain detailed records of:  
- Consents given, denied, or withdrawn.  
- Notices sent before consent requests.  
- Every instance of data sharing with another Data Fiduciary.  

This record supports auditability and user transparency.  

:::info Example  
If a user later disputes whether they gave consent for sharing data with an insurance company, the Consent Manager’s log provides digital proof.  
:::

---

### 4. User access to consent records  

The Consent Manager must:  
(a) Provide users access to their consent records.  
(b) Share these records in machine-readable format when requested.  
(c) Retain them for **at least seven years** (or longer, if required by law or user agreement).  

This ensures users can always verify their consent history.  

:::tip  
Machine-readable data (e.g., JSON, CSV) enables easy portability and audit by users or regulators.  
:::

---

### 5. Digital Interface Requirement  

Every Consent Manager must maintain a **website or mobile app** — this is the primary channel for user interaction. All core services like consent management, withdrawal, or review must be accessible digitally.  

---

### 6. No sub-contracting of obligations  

A Consent Manager cannot outsource or assign its legal responsibilities to third parties. This ensures full accountability for compliance, security, and service integrity.  

:::info Example  
A Consent Manager cannot outsource consent storage to an unverified external vendor. Doing so could expose sensitive user metadata and violate DPDPA obligations.  
:::

---

### 7. Security safeguards  

The Consent Manager must take all reasonable **technical and organisational safeguards** to prevent breaches, similar to the obligations under DPDPA Section 8. This includes encryption, access controls, vulnerability assessments, and incident response mechanisms.  

---

### 8. Fiduciary responsibility  

Consent Managers act in a **fiduciary capacity** toward Data Principals — they must act in good faith, prioritising users’ privacy interests. They cannot exploit data access for advertising or analytics.  

:::tip  
This principle aligns with GDPR’s concept of “Data Controller accountability” and India’s fiduciary standard under Section 4 of the DPDPA.  
:::

---

### 9. Avoiding conflict of interest with Data Fiduciaries  

A Consent Manager must remain **independent** from the Data Fiduciaries (companies using its platform). Its promoters, directors, or key personnel should not have conflicting business or financial interests.  

---

### 10. Conflict prevention for directors and management  

Beyond institutional independence, the Consent Manager must ensure its directors and senior managers do not hold **directorships, shares, or material financial ties** with Data Fiduciaries onboarded on its platform.  

This prevents partiality or misuse of access privileges.  

:::info Example  
If a Consent Manager’s director owns shares in a large e-commerce company using the same platform, that relationship must be declared and eliminated to avoid bias.  
:::

---

### 11. Transparency of ownership and structure  

The Consent Manager must publicly disclose:  
- Details of promoters, directors, and key personnel.  
- Shareholders holding over 2% equity.  
- Other corporate bodies linked to its ownership.  
- Any additional information directed by the Board.  

This disclosure fosters **public trust and accountability**.  

---

### 12. Internal and external audits  

The Consent Manager must undergo regular **technical and organisational audits** to verify compliance and security.  
Reports must be periodically submitted to the Data Protection Board.  

Audit scope includes:  
- Effectiveness of security controls.  
- Continued eligibility for registration.  
- Overall adherence to the DPDPA and Rules.  

:::tip  
Independent audit results may influence license renewal, reputation, and user confidence — similar to annual GDPR compliance audits in the EU.  
:::

---

### 13. Restrictions on transfer of control  

The company’s **ownership or control** cannot be transferred (through sale, merger, or acquisition) without prior approval from the Board. This prevents unregulated changes that might compromise user trust or security.  

:::info Example  
If a Consent Manager is acquired by a foreign tech firm, it must first seek approval from the DPBI to ensure the acquiring company meets Indian jurisdiction and data protection standards.  
:::

---

### Note (Definitions)  

(a) “Body corporate” includes companies, financial institutions, scheduled banks, or public sector enterprises established by law.  
(b) “Company”, “Control”, “Director”, and “Key Managerial Personnel” have meanings as per the **Companies Act, 2013**.  
(c) “Net worth” = Total Assets – Total Liabilities (as per company accounts).  
(d) “Promoter” and “Senior Management” are also as defined in the Companies Act, 2013.  

---

The First Schedule sets out both the **eligibility criteria (Part A)** and **operational obligations (Part B)** for companies acting as Consent Managers. It ensures these entities are financially stable, technically competent, transparent, and fully accountable to protect citizens’ data privacy and consent rights under India’s DPDPA.  