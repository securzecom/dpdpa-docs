---
sidebar_position: 5
---

# Rule 5: Processing for provision or issue of subsidy, benefit, service, certificate, licence or permit by State and its instrumentalities

<details>
  <summary><strong>Statutory Text — Rule 5: Processing for provision or issue of subsidy, benefit, service, certificate, licence or permit by State and its instrumentalities.</strong> (click to expand)</summary>

5. Processing for provision or issue of subsidy, benefit, service, certificate, licence or permit by State and its instrumentalities.—(1) The State and any of its instrumentalities may process the personal data of a Data Principal under clause (b) of section 7 of the Act to provide or to issue to her any subsidy, benefit, service, certificate, licence or permit that is provided or issued under law or policy or using public funds. <br></br>(2) Processing under this rule shall be done following the standards specified in Second Schedule. <br></br>(3) In this rule and Second Schedule, the reference to any subsidy, benefit, service, certificate, licence or permit that is provided or issued— <br></br>(a) under law shall be construed as a reference to provision or issuance of such subsidy, benefit, service, certificate, licence or permit in exercise of any power of or the performance of any function by the State or any of its instrumentalities under any law for the time being in force; <br></br>(b) under policy shall be construed as a reference to provision or issuance of such subsidy, benefit, service, certificate, licence or permit under any policy or instruction issued by the Central Government or a State Government in exercise of its executive power; and <br></br>(c) using public funds shall be construed as a reference to provision or issuance of such subsidy, benefit, service, certificate, licence or permit by incurring expenditure on the same from, or with accrual of receipts to,—(i) in case of the Central Government or a State Government, the Consolidated Fund of India or the Consolidated Fund of the State or the public account of India or the public account of the State; or (ii) in case of any local or other authority within the territory of India or under the control of the Government of India or of any State, the fund or funds of such authority.
</details>

---

Rule 5 recognises that the **State and its agencies** often need to process personal data for governance and public service delivery. Under Section 7(b) of the Act, such processing **does not require individual consent** when it is necessary to provide or issue any *subsidy, benefit, service, certificate, licence, or permit* that is backed by law, public policy, or public funding. In other words, the government can process relevant personal data (for example, name, Aadhaar, income details, or address) to deliver legitimate welfare and administrative functions without waiting for express consent each time.

Processing, however, must follow the **standards and safeguards specified in the Second Schedule**—these typically include purpose limitation, data minimisation, secure storage, and timely deletion once the service or scheme is fulfilled. The objective is to balance operational efficiency with protection of citizens’ privacy.

---

### When Processing is Permitted  

1. **Under Law:** When the State performs a statutory duty—such as issuing driving licences, birth certificates, or property records—data processing is inherently lawful because it arises from a legal mandate.  
2. **Under Policy:** When benefits are extended through executive orders or welfare schemes (for example, scholarship or pension policies) framed by Central or State Governments.  
3. **Using Public Funds:** When expenditure for a subsidy, service, or licence comes from the **Consolidated Fund of India**, a **State Fund**, or any **public account or authority fund**, the processing qualifies under this rule.

:::info Example
When a government department processes citizens’ personal and financial data to transfer LPG subsidies directly into their bank accounts, such processing is covered under Rule 5 since it uses public funds and serves a welfare purpose.
:::

---

### Standards to be Followed  

All such data processing must adhere to the technical and organisational measures listed in the **Second Schedule**, which may include:
- Collecting only data that is necessary for the stated purpose (for example, income range instead of full financial history).  
- Retaining data only for the operational period of the scheme or service.  
- Applying encryption, role-based access control, and periodic audit of access logs.  
- Ensuring transparent public notices and grievance mechanisms for individuals.  
- Implementing regular review of relevance and accuracy of stored records.

---

### Edge and Critical Scenarios  

:::danger Critical Case
If a government portal uses beneficiary data collected for one welfare scheme (say, food subsidy) to cross-link and profile citizens for unrelated purposes (like credit scoring or targeted advertising), it will violate the principle of purpose limitation under the Act and breach Rule 5.
:::

:::info Example
A State Transport Department processing driving-licence applications may access an applicant’s biometric and address details through Aadhaar authentication for verification. This is permitted as long as the information is used strictly for issuing the licence, handled in accordance with Aadhaar authentication protocols, protected as required under the Second Schedule, and deleted once the statutory retention period ends.
:::

<details>
  <summary><strong>Example 1: Income Tax Department using citizen financial data</strong></summary>

The **Income Tax Department** processes citizens’ income statements, PAN, bank details, and employment data to compute taxes, detect evasion, and issue refunds. This processing is conducted under statutory powers granted by the **Income-tax Act, 1961**, and therefore falls under **Rule 5(3)(a)** — processing “under law.”

Since the processing is performed under a clear legal mandate, it does not require individual consent. The Department must, however, follow the Second Schedule standards — ensuring data accuracy, confidentiality, secure storage, and retention only for statutory periods. Sharing anonymised data with policy-research agencies for budget analysis may also be permissible if it cannot re-identify individuals.

:::danger Violation scenario
If the Department shares citizens’ tax or account data with private marketing or credit-rating agencies for “insights” without legal authorisation or explicit consent, it breaches the **purpose-limitation** rule. Such use would violate both the DPDPA and the fiduciary duty of the State.
:::

</details>

<details>
  <summary><strong>Example 2: Government using voter-registration data</strong></summary>

The **Election Commission of India** and State election offices maintain the electoral roll containing voters’ names, addresses, age, and gender. This is collected under the **Representation of the People Act, 1951** and used for electoral verification, polling-booth management, and voter-ID issuance.

Processing for verification, roll maintenance, or voter-ID printing is a lawful function under statute and therefore permitted. The data can be shared only with authorised government printing presses or NIC systems that meet prescribed security standards.

:::danger Violation scenario
If voter data is shared with political parties, data-analytics firms, or social-media advertisers for campaign micro-targeting, it becomes **unauthorised secondary use**. Even though the data originated from a lawful collection, repurposing it for electoral advantage without consent violates **Rule 5** and **purpose-specific limitation** principles.
:::

</details>

<details>
  <summary><strong>Example 3: Government hospitals processing patient data</strong></summary>

A **State Government Hospital** collects patient details such as name, Aadhaar, health condition, prescriptions, and diagnostic results for treatment and insurance claims. This processing is necessary to deliver public healthcare — a legitimate State function funded through the public exchequer.

Processing for medical treatment, billing under public health schemes, and reporting aggregated statistics to the Health Department is lawful. Hospitals must secure records using encryption and limit staff access to medical data. Retention should align with medical-record retention guidelines and the Second Schedule standards.

:::danger Violation scenario
If the hospital later shares identifiable patient data with a private pharmaceutical company for drug marketing or product testing without explicit patient consent, it breaches **data-minimisation** and **lawful-purpose** principles. Even anonymised sharing must follow due-diligence and de-identification protocols.
:::

</details>

<details>
  <summary><strong>Example 4: Government collaborating with private companies using citizens’ personal data</strong></summary>

A **State Transport Department** partners with a private technology vendor to develop a digital-licensing and vehicle-registration portal. The vendor receives access to citizens’ photographs, address proofs, and driving-test data for system operation and maintenance.

This collaboration is permitted if the vendor acts as a **data processor on behalf of the State**, bound by a formal contract specifying purpose, duration, confidentiality, and security obligations. The State remains the **data fiduciary**, retaining full accountability for compliance and user grievance handling.

:::danger Violation scenario
If the private vendor later uses the same citizen database to train AI facial-recognition models, conduct analytics for unrelated commercial projects, or transfer raw data abroad without authorisation, it constitutes to a **serious violation**. Such misuse may lead to termination of contract, regulatory penalties, and even criminal liability under other applicable laws.
:::

</details>


---

### Implementation Guidance  

Government departments and their IT service providers can achieve compliance by:  
- Maintaining a **Data-Processing Register** documenting each scheme, data category, purpose, and retention period.  
- Publishing **Citizen Data-Use Notices** on official websites explaining how data is used for each scheme.  
- Designating a **Data-Protection Officer** or nodal officer responsible for audits and breach reporting.  
- Conducting annual reviews of all active datasets to remove obsolete or redundant information.  
- Ensuring all contractors, cloud providers, or NIC-managed systems handling data under this rule sign **binding confidentiality and security clauses**.

---

Rule 5 thus enables the government to continue critical welfare operations—such as issuing digital certificates, licences, or subsidies—without friction, while mandating robust internal controls. The intent is not to expand government surveillance but to codify lawful public-interest data use within a strict accountability framework.

---
