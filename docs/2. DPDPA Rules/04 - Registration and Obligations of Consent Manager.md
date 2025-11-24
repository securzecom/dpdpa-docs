---
sidebar_position: 4
---

# Rule 4: Registration and Obligations of Consent Manager

<details>
<summary><strong>4. Registration and obligations of Consent Manager</strong></summary>

(1) A person who fulfils the conditions for registration of Consent Managers set out in Part A of First Schedule may apply to the Board for registration as a Consent Manager by furnishing such particulars and such other information and documents as the Board may publish in this behalf on its website.

(2) On receipt of such application, the Board may make such inquiry as it may deem fit to satisfy itself regarding fulfilment of the conditions set out in Part A of First Schedule, and if it—  
(a) is satisfied, register the applicant as a Consent Manager, under intimation to the applicant, and publish on its website the particulars of such Consent Manager; or  
(b) is not satisfied, reject the application and communicate the reasons for the rejection to the applicant.

(3) The Consent Manager shall have obligations as specified in Part B of First Schedule.

(4) If the Board is of the opinion that a Consent Manager is not adhering to the conditions and obligations under this rule, it may, after giving an opportunity of being heard, inform the Consent Manager of such non-adherence and direct the Consent Manager to take measures to ensure adherence.

(5) The Board may, if it is satisfied that it is necessary so to do in the interests of Data Principals, after giving the Consent Manager an opportunity of being heard, by order, for reasons to be recorded in writing,—  
(a) suspend or cancel the registration of such Consent Manager; and  
(b) give such directions as it may deem fit to that Consent Manager, to protect the interests of the Data Principals.

(6) The Board may, for the purposes of this rule, require the Consent Manager to furnish such information as the Board may call for.

</details>


---

Rule 4 defines the **complete regulatory framework** for Consent Managers — entities that help individuals give, manage, or withdraw consent in a secure and verifiable way. It governs **how they are registered, supervised, and held accountable** by the Data Protection Board of India.

---

### 1. Eligibility and Application  

To become a registered Consent Manager, an organisation must satisfy the technical, financial, and governance standards listed in **Part A of the First Schedule**. This generally includes:

- Demonstrated capability to operate a **secure, interoperable consent platform**.  
- Independent legal status and sound financial standing.  
- Documented data-protection and grievance-redressal policies.  
- Capability to provide **real-time APIs** for consent creation, modification, and withdrawal.  

Applications must be filed online with the Board, along with evidence of compliance such as SOC 2 or ISO 27001 certifications, architecture diagrams, security audit reports, and contact details of the designated Data Protection Officer.

:::info Example
A financial-technology consortium developing a user dashboard that allows customers to authorise data-sharing between banks and lending apps must demonstrate encryption, user authentication, and audit-log capabilities before registration.
:::

---

### 2. Verification and Registration  

The Board reviews each application through documentation checks and may conduct **technical or operational audits**.  
Once satisfied, it grants registration and publishes the Consent Manager’s name and contact details on its official website to enable public trust and discoverability. If the applicant fails to meet requirements, the Board must communicate the reasons for rejection in writing.

:::danger Critical Case
If a company hosts its consent database on a third-party cloud outside India without contractual or technical guarantees of equivalent protection, the Board can either reject the application or insist that the data be migrated to compliant infrastructure before approval.
:::

<details>
  <summary><strong>Can a Consent Manager be an International Company Outside India?</strong></summary>

A Consent Manager must be an **entity registered in India** under Indian law and subject to the jurisdiction of the **Data Protection Board of India (DPBI)**.  
While individual shareholders, directors, or technical specialists may be Non-Resident Indians (NRIs) or foreign nationals, the **operating legal entity** must have its **registered office, data operations, and compliance contact within India**.

This ensures that the Board has direct legal oversight, can conduct audits, and can enforce corrective or disciplinary action when required.

**Example:** A Singapore-based technology company may participate by forming an Indian subsidiary registered under the Companies Act, 2013 and then applying for Consent Manager registration through that Indian entity.

</details>

<details>
  <summary><strong>Can Data Managed by a Consent Manager be Stored Outside India?</strong></summary>

The DPDPA 2023 and the Digital Personal Data Protection Rules 2025 do **not mandate full data localisation**. 

However, a Consent Manager must ensure that any storage or processing **outside India** provides an **equivalent level of protection** and maintains **lawful accessibility** for Indian regulators.

Key compliance expectations include:
- Executing **cross-border data-transfer agreements** or Standard Contractual Clauses (SCCs).  
- Ensuring **technical and organisational safeguards**—encryption, restricted access, and secure network configurations.  
- Guaranteeing that the Data Protection Board or authorised authorities can access required data for investigation or audit.

:::danger Critical Case
If consent logs or audit trails are hosted in a jurisdiction that refuses lawful access requests from Indian regulators, the Consent Manager may be declared non-compliant and face suspension or cancellation of registration.
:::


**Example:** Many Consent Managers adopt a **hybrid architecture**—storing live consent records and identifiers on Indian cloud servers while using global data centres only for analytics or backup copies that contain anonymised data.

</details>


---

### 3. Obligations of a Consent Manager  

After registration, a Consent Manager must comply with the **operational, security, and accountability standards** in Part B of the First Schedule. Key obligations include:

:::tip Transparent Consent Interface  
Provide individuals with a unified dashboard—web or app—showing where their consent has been given, what data is shared, and with whom. The interface must allow **one-click withdrawal** and real-time status updates.


**How to implement:**  
- Use standardised APIs and UI frameworks approved by the Board.  
- Maintain versioning of consent artefacts (timestamp, purpose, data type, validity).  
- Ensure accessibility across languages and devices.
:::

:::tip Secure Storage and Audit Trail  
Maintain verifiable logs of every consent event—creation, update, or withdrawal—for the retention period specified by regulation.

**How to implement:**  
- Use immutable database structures (e.g., append-only logs or blockchain-based audit layers).  
- Employ cryptographic hash-chaining to detect tampering.  
- Store logs with time-stamps, user IDs, and fiduciary references.
:::

:::tip Notification and Synchronisation  
Ensure that any consent or withdrawal is **immediately communicated** to relevant Data Fiduciaries through secure, authenticated channels.

**How to implement:**  
- Design webhook-based notification systems with retry logic.  
- Maintain delivery acknowledgements from fiduciaries to close the transaction loop.  
- Adopt asynchronous queues to handle large volumes safely.
:::

:::info Example
If a user revokes consent for health-data sharing between Hospital A and an insurance provider, the Consent Manager’s system should automatically push revocation notices to both entities within seconds and record confirmation receipts in its audit trail.
:::

:::tip Grievance Handling  
Operate a public grievance mechanism allowing users to raise complaints about delays, inaccurate status, or unauthorised processing.

**How to implement:**  
- Provide a visible “Contact Us / Report Issue” channel inside the app.  
- Assign trained officers and maintain response SLAs (e.g., acknowledge within 24 hours, resolve within 7 days).  
- Maintain case tracking numbers and escalation workflows.
- Provide response to the grievances of Data Principals 90 days [*Rule 14(3)]*
:::

:::tip Data Security and Compliance  
Apply state-of-the-art technical measures:

- End-to-end encryption of personal data and consent artefacts.  
- Multi-factor authentication for users and fiduciary interfaces.  
- Periodic vulnerability assessments and third-party audits.  
- Strict role-based access controls within the organisation.  
:::

---

### 4. Oversight and Corrective Measures  

If the Board finds that a Consent Manager is not adhering to required standards, it will issue a notice, provide a hearing, and direct remedial action. This mechanism ensures corrective compliance before punitive steps are taken.

:::danger Critical Case
If repeated user complaints show that a Consent Manager’s portal fails to execute withdrawals correctly, the Board may order immediate rectification, a third-party audit, and temporarily restrict new user enrolments until issues are resolved.
:::

---

### 5. Suspension or Cancellation  

If continued operation poses a risk to Data Principals, the Board may suspend or cancel the registration. It must document reasons in writing and can issue protective directions such as transferring all active consent data to another authorised Consent Manager.

:::info Example
If a Consent Manager experiences a major data breach exposing millions of consent logs and fails to notify affected users promptly, the Board may cancel its licence and appoint an interim administrator to migrate user records to a secure platform.
:::

<details>
  <summary><strong>What happens if a Consent Manager Faces a Ransomware or Data-Breach Incident?</strong></summary>

If a Consent Manager faces a ransomware attack or data breach, they must immediately inform the Data Protection Board and activate their Cyber Crisis Management Protocol. The incident should be contained quickly, stakeholders should be notified, and a root-cause analysis must be carried out. Corrective and preventive actions must then be applied, systems restored to normal, and a detailed update of all actions taken must be submitted to the Board within 72 hours.

A ransomware or data-breach incident at a Consent Manager is treated as a **major compliance and trust failure**. Since Consent Managers maintain the central repository of consent records, any compromise affects both Data Fiduciaries and millions of Data Principals.

In such events, the Consent Manager must:

1. **Contain and Investigate:** Isolate affected systems, activate the incident-response plan, and initiate forensic analysis.  
2. **Notify Authorities and Partners:** Promptly inform the **Data Protection Board**, impacted **Data Fiduciaries**, and—if required—the affected users.  
3. **Disclose the Extent:** Describe the breach, categories of affected data, and mitigation measures.  
4. **Remediate:** Patch vulnerabilities, restore from clean backups, and submit a post-incident compliance report to the Board.  
5. **Prepare for Enforcement:** Depending on gravity, the Board may impose penalties, suspend operations, or revoke registration.

**Example:** If a ransomware attack encrypts all active consent records, preventing users from withdrawing consent for two days, the Board may treat it as a **breach of data availability**. The Consent Manager would need to notify all affected stakeholders, restore functionality quickly, and submit a detailed root-cause analysis within prescribed timelines.

</details>

---

### 6. Regulatory Reporting and Information Requests  

The Board can require a Consent Manager to furnish technical reports, audit results, incident logs, or other compliance evidence at any time. Periodic reporting templates are expected to include key metrics such as:

- Total consents created, updated, withdrawn.  
- Average processing time for withdrawal requests.  
- Number and category of grievances received and resolved.  
- Details of security incidents or system downtime.

Consent Managers should maintain an internal compliance calendar to ensure timely submissions.

---


:::danger Key Takeaways
- Consent Managers act as the **digital trust intermediaries** of India’s data-protection ecosystem.  
- Compliance is **continuous** — registration is only the first step.  
- Building strong security, transparency, and interoperability mechanisms is essential to sustain user trust and regulatory approval.  
- Proactive reporting and internal audits can prevent enforcement actions and maintain credibility with both Data Principals and Fiduciaries.
:::
