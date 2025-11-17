---
sidebar_position: 8
---

# Rule 8: Time Period for Specified Purpose to be Deemed as No Longer Being Served

<details>
  <summary><strong>Statutory Text — Rule 8:Time period for specified purpose to be deemed as no longer being served.</strong> (click to expand)</summary>

(1) A Data Fiduciary, who is of such class and is processing personal data for such corresponding purposes as are specified in Third Schedule, shall erase such personal data, unless its retention is necessary for compliance with any law for the time being in force, if, for the corresponding time period specified in the said Schedule, the Data Principal neither approaches such Data Fiduciary for the performance of the specified purpose nor exercises her rights in relation to such processing.  

(2) At least forty-eight hours before completion of the time period for erasure of personal data under this rule, the Data Fiduciary shall inform the Data Principal that such personal data shall be erased upon completion of such period, unless she logs into her user account or otherwise initiates contact with the Data Fiduciary for the performance of the specified purpose or exercises her rights in relation to the processing of such personal data.  

(3) In this rule, “user account” means the online account registered by the Data Principal with the Data Fiduciary, and includes any profiles, pages, handles, email address, mobile number and other similar presences by means of which she is able to access the services of such Data Fiduciary.
</details>

---

Rule 8 introduces the concept of **purpose-linked retention**—a critical data-governance principle ensuring that personal information is deleted once it no longer serves a lawful business or statutory purpose.  

It applies to certain classes of Data Fiduciaries and activities listed in the **Third Schedule**, each associated with a defined inactivity or dormancy period after which data must be erased unless there is a legal or regulatory reason to retain it.

---

### 1. Defining “No Longer Being Served”  

A specified purpose is considered no longer being served when the Data Principal has not interacted with the Data Fiduciary—through login, transaction, or rights-exercise—for the period defined in the Third Schedule. After this window closes, and in the absence of any ongoing legal requirement, the organisation must erase that data permanently.  

:::info Example
If the Third Schedule lists **e-commerce order data** with a retention period of **24 months after the last transaction**, the platform must delete customer information if the user has not logged in or placed an order within those two years. Retaining such data “just in case” would breach Rule 8(1).
:::
---

### 2. Mandatory Pre-Erasure Notification  

At least **48 hours before deletion**, the Data Fiduciary must alert the Data Principal that their data is scheduled for erasure.  
This notice gives the individual a final opportunity to preserve or reactivate her account, access her information, or exercise rights such as data portability.  

Notifications should be clear, non-technical, and issued through verified communication channels—email, app notification, or SMS—depending on how the user normally interacts with the service. This advance intimation demonstrates good faith and compliance transparency.

<details>
  <summary><strong>Free Template: Sample Pre-Erasure Notification Email / Message to Data Principal</strong></summary>

**Subject:** Upcoming Deletion of Your Account Data — Action Required  

Dear [Name of Data Principal],  

This is to inform you that your account and related personal data with **[Organisation Name]** are scheduled for **deletion on [Date + Time]**, as no activity has been recorded for the past [retention period as per Third Schedule].  

Under Rule 8 of the Digital Personal Data Protection Rules, 2025, we are required to erase inactive personal-data records once the specified purpose is no longer being served.  

**What this means for you**  
Unless you take action before the above date, your personal data — including [briefly describe data types e.g., profile information, transaction history, uploaded documents] — will be permanently deleted from our systems.  

**To retain your data or continue using our services, please:**  
1. Log in to your account at [website URL / app link]; or  
2. Contact our support team before [date and time] to request continued access.  

**Need assistance?**  
Our Data Protection Officer will be happy to help:  
**[Full Name of DPO or Contact Person]**  
📧 [Email Address]     
📞 [Phone Number]  

If you take no action, your data will be securely and permanently deleted after the retention period expires, in line with our obligations under the Digital Personal Data Protection Rules, 2025.  

Thank you for your continued trust in **[Organisation Name]**.  

Warm regards,  
**[Authorised Signatory Name]**  
[Title] | [Organisation Name]  
[Website URL]  

---

*This communication has been sent in compliance with Rule 8(2) of the Digital Personal Data Protection Rules, 2025.*  
</details>


---

### 3. Exceptions for Legal or Regulatory Retention  

Data may be retained beyond the defined period only if another law explicitly requires it—for example, record-keeping under taxation, anti-money-laundering, or medical-records regulations.  

In such cases, the fiduciary should flag the dataset as “legal-hold” and restrict access to only those authorised for compliance functions. Once the statutory period expires, deletion must resume automatically.

---

### 4. Operational Implementation  

Implementing Rule 8 requires both **technical automation** and **policy discipline**. A Data Fiduciary should maintain a **data-retention schedule** mapping each data category to its lawful purpose, retention period, and disposal method.  
Automated workflows within the database or data-lifecycle-management (DLM) tool should trigger:  
1. Identification of dormant accounts or inactive datasets,  
2. Generation of pre-erasure notifications 48 hours in advance, and  
3. Verified deletion, backed by audit logs and erasure certificates.  

Open-source utilities such as **Apache Airflow**, **Metabase + SQL triggers**, or **Elastic ILM policies** can automate these tasks. Enterprise-grade systems like **OneTrust Data Governance**, **BigID**, **Informatica ILM**, or **Microsoft Purview** provide advanced retention-policy orchestration and reporting.

---

### 5. Examples of Application  

:::info Banking / Fintech
A digital-lending app must delete inactive loan-applicant profiles after the prescribed period unless required for RBI audit or anti-fraud investigations.  
:::
:::info Healthcare
A diagnostic portal may erase lab-test data after three years of inactivity, retaining only anonymised statistics for research.  
:::
:::info Web3 / Crypto / Securities
An exchange must purge dormant KYC records when no trading or login activity occurs beyond the specified duration, except where SEBI or FIU-IND mandates retention.  
:::
:::info Government Portals
A citizen-service platform should remove inactive profiles post the retention window unless those records are linked to ongoing welfare benefits or legal claims.
:::
---

### 6. Demonstrating Compliance  

To prove adherence, organisations should maintain:  
- A documented **Retention and Erasure Policy**,  
- System logs showing scheduled and completed deletions,  
- Evidence of pre-erasure notifications, and  
- Reports confirming residual data anonymisation.  

Such evidence may be requested by the Data Protection Board during audits or breach investigations.

---


Rule 8 operationalises the principle of **data minimisation** by linking every dataset to its lawful purpose and limiting its lifetime.  
By notifying users before erasure and automating deletion once inactivity thresholds are reached, Data Fiduciaries uphold both privacy rights and system hygiene, aligning India’s data-retention practices with global best standards.
