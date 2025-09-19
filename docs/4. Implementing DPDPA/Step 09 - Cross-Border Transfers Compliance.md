---
sidebar_position: 9
---

## Step 9: Cross-Border Transfers Compliance

The Digital Personal Data Protection Act (DPDPA), 2023 allows personal data to be transferred outside India, but with important restrictions. The Central Government retains the authority to notify countries or territories where transfers are prohibited.  
Organizations must ensure that when they move data abroad — whether for cloud hosting, analytics, customer service, or research — the transfers remain lawful and provide individuals with the same protection as required under Indian law.

---

### 1. Check if the Country is Restricted
**Requirement:**  
Transfers are generally allowed unless the Government has specifically restricted certain countries.  

**How to Comply:**  
- Maintain a watchlist of restricted countries based on official notifications.  
- Build a compliance process to immediately stop transfers to restricted countries if notified.  

:::info Example
A telecom operator storing call records in Singapore must ensure Singapore is not on the restricted list. If the Government later restricts it, the operator must migrate data to an approved location.
:::

---

### 2. Build Contractual Safeguards
**Requirement:**  
When sending data abroad, Data Fiduciaries remain accountable. They must ensure that the recipient organization offers comparable protection.  

**How to Comply:**  
- Sign Data Processing Agreements (DPAs) with foreign vendors.  
- Include clauses covering:  
  - Purpose limitation.  
  - Prohibition on unauthorized sharing.  
  - Data security standards (encryption, audits).  
  - Liability for breaches.  
- Use Standard Contractual Clauses (SCCs) if prescribed by the Government.  

:::info Example
A pharmaceutical company sharing anonymised clinical trial results with its research partner in Germany must sign an agreement ensuring that German labs use the data only for approved medical research and secure it with proper safeguards.
:::

---

### 3. Technical Safeguards for Transfers
**Requirement:**  
Beyond contracts, technical controls must ensure that data is not intercepted or altered during transfer.  

**How to Comply:**  
- Use strong encryption in transit (TLS 1.3 or above).  
- Apply encryption at rest at the foreign location.  
- Maintain access logs and real-time monitoring for suspicious activities.  

:::info Example
A stock broking firm exporting anonymized trading patterns to a U.S.-based analytics provider must ensure data is encrypted during transfer and decrypted only on secure systems abroad.
:::

---

### 4. Transparency with Data Principals
**Requirement:**  
Privacy notices must clearly state if data is being transferred outside India and for what purpose.  

**How to Comply:**  
- Update privacy policies to include the name of countries where data is stored or processed.  
- Provide Data Principals with a way to ask questions about cross-border transfers.  

:::info Example
A social media platform must disclose in its notice: “Your profile data and photos may be processed on servers located in Ireland and the United States.”
:::

---

### 5. Maintain Accountability
**Requirement:**  
Even if the data is stored or processed abroad, the Indian Data Fiduciary remains responsible under the DPDPA.  

**How to Comply:**  
- Document all transfers (who, where, why, safeguards used).  
- Maintain audit records for Board inspections.  
- Regularly test compliance of overseas vendors.  

:::info Example
A crypto exchange outsourcing wallet authentication to a vendor in Dubai must keep audit logs proving that the vendor does not misuse customer KYC data.
:::

---

Cross-border transfers are essential for global business operations — cloud storage, international research, global HR systems. But they also pose risks if foreign jurisdictions have weaker protections. Rule 14 and Schedule II–III ensure that India stays connected to the global economy while still retaining sovereignty and accountability over its citizens’ data.