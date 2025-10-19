---
sidebar_position: 14
---

# Rule 14: Processing of Personal Data Outside India

<details>
  <summary><strong>Statutory Text — Rule 14:Processing of personal data outside India.</strong> (click to expand)</summary>

Transfer to any country or territory outside India of personal data processed by a Data Fiduciary—  
(a) within the territory of India; or  
(b) outside the territory of India in connection with any activity related to offering of goods or services to Data Principals within the territory of India,  
is subject to the restriction that the Data Fiduciary shall meet such requirements as the Central Government may, by general or special order, specify in respect of making such personal data available to any foreign State, or to any person or entity under the control of or any agency of such a State.
</details>

---

Rule 14 establishes India’s foundational principle for **cross-border data governance**: personal data generated in India, or data about Indian citizens processed elsewhere in connection with goods or services offered in India, **cannot be freely transferred** outside the country unless it complies with **conditions specified by the Central Government**.

---


### 1. Scope of the Rule  

This rule applies to two broad scenarios:  
1. **Data processed within India** — where a company located in India stores or processes data locally and wishes to send it abroad for analytics, hosting, or subcontracting.  
2. **Data processed outside India but linked to Indian users** — where a foreign company (for instance, a global e-commerce or social-media platform) offers services to Indian residents and processes their personal data in overseas servers.

In both cases, the transfer is not automatically permitted. The Data Fiduciary must confirm that its data sharing aligns with any **Government-issued orders**—for example, country-specific whitelists, adequacy standards, or security certifications.

---

#### **Case 1: Cloud Servers Located Outside India**

If your organization (the **Data Fiduciary**) stores or processes **personal data of Indian Data Principals** on **foreign cloud regions** — such as **AWS US-East**, **GCP Singapore**, or **Azure Europe** — it qualifies as a **cross-border data transfer**.

Such transfer is **allowed only if**:

1. No government order **prohibits** the destination country; and  
2. The foreign entity (AWS, GCP, etc.) maintains **comparable data protection standards**, as required by **DPDPA obligations**.

**Example:**  
If you use **AWS Singapore**, you remain responsible for ensuring:
- AWS acts only as a **Data Processor** under your instructions.  
- It provides **technical and organizational safeguards** (encryption, access control, monitoring).  
- It does **not transfer data onward** without your consent or a valid legal basis.

---

#### **Case 2: Cloud with Data Centers in India but Global Backup / Replication**

Many cloud providers — such as **AWS (Mumbai Region)** and **GCP (Delhi-NCR Region)** — host data within India but still perform **replication, telemetry, or disaster recovery (DR)** to servers outside India.

In such cases:
- Even **temporary replication or metadata flow** outside India counts as **cross-border data transfer** under **Rule 14**.  
- You must ensure that all such transfers comply with **DPDPA’s adequacy and lawful purpose** principles.  
- **Contractual clauses** (e.g., **Data Processing Addendums (DPAs)**, **Standard Contractual Clauses (SCCs)**) should **restrict unauthorized sub-processing** or storage outside approved regions.

---

:::tip Compliance Tip
Organizations using cloud services should:
- Prefer **India-based regions** where feasible.  
- Include **data localization and transfer clauses** in their vendor agreements.  
- Monitor for **Central Government notifications** that may restrict or whitelist specific countries.  
:::


---

### 2. Government Oversight  

The **Central Government** retains the power to define:  
- **Permitted jurisdictions** (for example, countries with comparable privacy protections);  
- **Restricted jurisdictions** (for example, nations where data-security or diplomatic concerns exist); and  
- **Special conditions** such as encryption standards, lawful-access frameworks, or notification requirements.

Once notified, organisations must map their data flows and ensure every international transfer complies with these parameters.

:::info Example – Cloud Hosting Provider  
An Indian fintech hosts customer data on servers located in Singapore. If the Government later restricts transfers of “financial transaction data” to that region, the company must migrate the dataset back to an approved Indian or whitelisted location, or obtain special permission. Failure to act could constitute non-compliance under Rule 14.  
:::

---

### 3. Corporate and Contractual Controls  

Data Fiduciaries should proactively build **data-transfer compliance frameworks** even before formal Government orders are issued. Recommended measures include:  

- **Data-flow documentation:** Maintain clear records showing where data is stored, mirrored, or transmitted.  
- **Cross-border clauses:** Include contractual obligations in vendor and processor agreements ensuring alignment with DPDPA and any localisation orders.  
- **Encryption and access control:** Ensure exported data remains encrypted both in transit and at rest, and is accessible only to authorised personnel under NDA.  
- **Government-access compliance:** Avoid making data available to foreign governments unless specifically permitted by Indian law or bilateral agreements.

:::info Example – SaaS Company  
A CRM SaaS provider headquartered abroad collects leads from Indian businesses. Before syncing user data to its U.S. servers, it configures a data-segregation model ensuring Indian customer data is stored in the company’s India-region cluster. Only anonymised metadata is transmitted abroad for analytics. This design supports operational efficiency while respecting sovereignty expectations under Rule 14.  
:::

---

### 4. Handling Requests from Foreign States  

The final portion of Rule 14 explicitly mentions **“making such personal data available to any foreign State or agency.”**  
This means that if an overseas government or investigative body requests Indian user data, the Data Fiduciary must not comply directly unless the Central Government has laid down a lawful route—such as a **mutual legal-assistance treaty (MLAT)** or specific executive order.  

This clause safeguards national interest and prevents unauthorised foreign access.

:::info Example – Critical Case  
A global social-networking platform receives a request from a foreign law-enforcement agency to share details of Indian users involved in online protests. Without Central Government authorisation or a recognised treaty mechanism, providing that data would breach Rule 14 and could lead to penalties under the Act.  
:::

---

### 5. Implementation Practices  

- **Data-localisation mapping:** Maintain an updated inventory of all databases, their physical locations, and replication endpoints.  
- **Risk assessments:** Conduct a transfer-impact analysis to evaluate privacy risks for each destination country.  
- **Breach-response alignment:** Ensure any data stored abroad still follows Indian breach-notification timelines and security controls.  
- **Board oversight:** Major organisations should have their compliance or audit committees review cross-border arrangements annually.

---

Rule 14 reinforces **India’s data-sovereignty principle** — that Indian personal data remains subject to Indian protection standards wherever it travels. Companies operating across borders must therefore design systems that respect both **technical localisation** and **legal compliance**, ensuring transparency, accountability, and the security of every citizen’s data.