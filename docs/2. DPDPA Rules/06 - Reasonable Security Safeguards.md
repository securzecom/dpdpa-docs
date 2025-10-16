---
sidebar_position: 6
---

# Rule 6: Reasonable Security Safeguards

<details>
  <summary><strong>Statutory Text — Rule 6:Reasonable security safeguards.</strong> (click to expand)</summary>

6. Reasonable security safeguards.— <br></br>(1) A Data Fiduciary shall protect personal data in its possession or under its control, including in respect of any processing undertaken by it or on its behalf by a Data Processor, by taking reasonable security safeguards to prevent personal data breach, which shall include, at the minimum,—<br></br>(a) appropriate data security measures, including securing of such personal data through its encryption, obfuscation or masking or the use of virtual tokens mapped to that personal data;<br></br>(b) appropriate measures to control access to the computer resources used by such Data Fiduciary or such a Data Processor;<br></br>(c) visibility on the accessing of such personal data, through appropriate logs, monitoring and review, for enabling detection of unauthorised access, its investigation and remediation to prevent recurrence;<br></br>(d) reasonable measures for continued processing in the event of confidentiality, integrity or availability of such personal data being compromised as a result of destruction or loss of access to personal data or otherwise, including by way of data-backups;<br></br>(e) for enabling the detection of unauthorised access, its investigation, remediation to prevent recurrence and continued processing in the event of such a compromise, retain such logs and personal data for a period of one year, unless compliance with any law for the time being in force requires otherwise;<br></br>(f) appropriate provision in the contract entered into between such Data Fiduciary and such a Data Processor for taking reasonable security safeguards; and(g) appropriate technical and organisational measures to ensure effective observance of security safeguards.<br></br>(2) In this rule, the expression “computer resource” shall have the same meaning as is assigned to it in Information Technology Act, 2000 (21 of 2000).
</details>


### 1. Securing Personal Data — Encryption, Masking, and Tokenisation  

Every data element that could directly or indirectly identify an individual must be protected through strong cryptographic and anonymisation practices. This is the **first and most fundamental line of defence** against breaches.

Encryption should be implemented both at rest and in transit. Databases must use AES-256, ChaCha20, or equivalent algorithms; file systems can leverage native disk encryption such as BitLocker (Windows) or LUKS (Linux). Transport security must enforce TLS 1.3 with Perfect Forward Secrecy and modern ciphers.  

Masking hides sensitive values in display or reporting environments — e.g., showing “XXXX-XXXX-4321” instead of a full account number. Tokenisation replaces live identifiers with random tokens mapped in a secure vault. Open-source tools like **HashiCorp Vault**, **Apache Ranger**, or enterprise systems such as **Thales CipherTrust**, **AWS KMS**, or **Azure Key Vault** are commonly used to manage keys and tokens.

:::info Example
A health-insurance platform encrypts all claim data stored in PostgreSQL using database-level AES encryption and masks patients’ names in analytics dashboards. In the event of a leak, only encrypted, non-identifiable values are exposed — satisfying Rule 6(a).
:::

---

### 2. Access Control on Computer Resources  

Only authorised personnel should have access to systems storing or processing personal data, and access must align with their defined role. This is enforced using **Role-Based Access Control (RBAC)**, **Attribute-Based Access Control (ABAC)**, and segregation of duties. Privileged accounts should employ **multi-factor authentication** (MFA) and hardware tokens (e.g., YubiKeys) to prevent credential theft. Administrative access must be logged and regularly reviewed.  

Open-source frameworks like **FreeIPA**, **Keycloak**, or enterprise platforms such as **Okta**, **Ping Identity**, and **Azure AD** can be used to centralise identity governance. Integration with HR systems ensures that when an employee leaves, their access is automatically revoked, preventing insider risks.

:::danger Critical Case
If a terminated developer retains SSH access to production servers and later downloads user data, the organisation fails its access-control obligation under Rule 6(b). The liability remains with the Data Fiduciary, even if the breach occurs through negligence of a vendor.
:::

:::tip Building access control for large teams?  
Securze partnered with Fortinet to assist organisations in setting up **Zero Trust Identity Architectures**, integrating IAM, MFA, and session monitoring aligned with Rule 6(b) and ISO 27001 standards.  <a href="https://securze.com/network-security/" target="_blank">Click here to Learn more</a>.  
:::

---

### 3. Logging, Monitoring, and Detection  

Rule 6(c) requires “visibility on the accessing of personal data”. This means that every read, modification, export, or deletion of personal data must be recorded, analysed, and reviewed. Logs must be **tamper-evident** and stored in secure, centralised systems.  

Open-source solutions such as **Wazuh**, **ELK (Elasticsearch–Logstash–Kibana)**, and **OSSEC** provide real-time log aggregation, anomaly detection, and dashboarding. Enterprise SOC platforms like **Splunk**, **IBM QRadar**, or **Microsoft Sentinel** offer advanced correlation, user-behaviour analytics, and automated alerting.  

Regular review of alerts — daily for high-risk data and monthly for general logs — ensures continuous threat visibility.

:::info Example
A fintech platform monitors database queries that access customer PII. When a support account executes an unexpected “SELECT * FROM users” query, the SIEM flags the event and triggers an automated lockdown. Such monitoring directly fulfils Rule 6(c).
:::

:::tip Continuous Monitoring Under Rule 6  
For expert assistance in implementing 24×7×365 threat monitoring, incident detection, and compliance reporting, explore <a href="https://securze.com/services/security-operations-center/" target="_blank">Securze’s Managed SOC Services</a>.  
:::

---

### 4. Business Continuity and Data Resilience  

Availability is a critical dimension of data protection. Rule 6(d) expects that if personal data becomes unavailable — through corruption, system failure, or ransomware — the organisation must still ensure **continued processing** through backups or redundant systems.  

Practical implementation involves maintaining encrypted, offline and cloud-based backups, versioning snapshots, and replicating data to a secondary site or region. Testing of restoration procedures at least quarterly demonstrates operational readiness. Tools like **Veeam**, **Acronis Cyber Protect**, **BorgBackup**, or native cloud backup services (AWS Backup, Azure Recovery Vault, Google DRaaS) are widely used. For critical applications, **geo-redundancy** and load-balancing ensure continuity without human intervention.

:::info Example
A government portal replicates its citizen-data servers nightly to a disaster-recovery site managed by NIC. During a data-centre outage, traffic automatically switches to the backup node, ensuring citizens can still access services — satisfying Rule 6(d).
:::

:::tip Planning disaster recovery or backup strategy?  
See how <a href="https://securze.com/purple-team-operations/" target="_blank">Securze’s Business Continuity Solutions</a> help maintain availability and resilience under Rule 6(d).  
:::


---

### 5. Retention of Logs and Breach Forensics  

Logs and minimal supporting datasets must be retained for **at least one year**, enabling post-incident investigation and demonstrating due diligence. Retention must balance evidence preservation with privacy — retaining only what is required for detection and remediation.  

Immutable storage such as **WORM (Write Once Read Many)** systems or **object-lock features** in S3/Wasabi provide reliable, tamper-proof archiving. Forensics teams often maintain **air-gapped storage** or use platforms like **Graylog**, **SIEMonster**, or **Splunk Enterprise Security** for searchable retention. Organisations should also implement a deletion workflow to purge logs beyond the mandated period unless longer retention is required by another law (e.g., RBI or SEBI guidelines).

---

### 6. Security Clauses in Contracts with Data Processors  

When third parties process personal data, the Data Fiduciary remains responsible for compliance.  
Contracts must explicitly define the processor’s duties:  
- Implementation of equivalent security controls and audits.  
- Immediate notification (usually within 24 hours) of any breach or incident.  
- Data-return and secure-erasure obligations after contract completion.  
- Restrictions on sub-processing and offshore data transfer.  

Templates should align with **ISO 27701 Annex D** or **NIST SP 800-171** standards. Fiduciaries can perform **vendor-risk assessments** using tools like **UpGuard**, **SecurityScorecard**, or free checklists such as the **OWASP SAMM Vendor Security** framework.

:::info Example
A retail bank engages a managed-cloud provider under a contract mandating ISO 27001 compliance, 24-hour breach reporting, and quarterly vulnerability scans. These clauses demonstrate compliance with Rule 6(f).
:::

:::tip Drafting or reviewing vendor contracts?  
Learn how <a href="https://securze.com/governance-risk-and-compliance/" target="_blank">Securze’s Compliance Advisory</a> can help define processor security clauses, breach-notification requirements, and audit provisions under Rule 6(f).  
:::


---

### 7. Technical and Organisational Safeguards  

Security must be embedded into the organisation’s structure, not treated as a product. An **Information Security Management System (ISMS)** aligned with **ISO 27001** or **NIST Cybersecurity Framework** should define roles, policies, and escalation mechanisms. Employee training, awareness campaigns, and simulated phishing exercises build a “human firewall”.  

Regular **vulnerability assessments and penetration tests** (using tools like **OpenVAS**, **Burp Suite**, **Metasploit**, or enterprise scanners such as **Qualys Guard**, **Tenable Nessus**) validate control effectiveness. Incident Response Plans should assign responsibilities, communication templates, and post-mortem reviews. A governance committee — chaired by the CISO or Data-Protection Officer — should review audit outcomes and improvement actions quarterly.

---

### 8. Linkage to IT Act 2000  

The term “computer resource” derives from Section 2(k) of the **Information Technology Act, 2000**, meaning any computer, system, network, data, or communication device. Therefore, all these safeguards extend not just to servers and desktops but also to **mobile apps, IoT devices, APIs, routers, and cloud services** used in personal-data processing.

---

### Real-World Industry Perspectives  

:::tip BFSI  
Banks deploy hardware security modules (HSMs) for key storage, enforce transaction-logging with tamper-proof ledgers, and apply RBI’s cyber-resilience controls. Non-compliance could trigger regulatory penalties and compensation obligations.
:::

:::tip Healthcare  
Hospitals encrypt EHRs, segment networks, and restrict access to attending doctors only. Use of audit-trail systems like MediLog or HIPAA-grade EMR software ensures compliance with both DPDPA and health-sector norms.
:::

:::tip Web3 / Crypto  
Exchanges secure wallet addresses with tokenisation, store customer KYC data in isolated databases, and integrate blockchain monitoring tools (e.g., Chainalysis or Elliptic) to trace fraud while preserving privacy.
:::

:::tip Government Portals  
Departments rely on NIC-approved data centres, follow MeitY’s Security Policy 2022, maintain 12-month access logs, and conduct STQC-certified audits — demonstrating State-level adherence to Rule 6.
:::

---

### Tools and Frameworks for Implementing Reasonable Security Safeguards

| **Security Domain (Rule 6 Clause)** | **Purpose / Function** | **Open-Source Tools / Frameworks** | **Commercial / Enterprise Tools** |
|------------------------------------|--------------------------|------------------------------------|-----------------------------------|
| **Encryption & Tokenisation (6a)** | Protect personal data at rest and in transit; anonymise or pseudonymise sensitive identifiers. | **HashiCorp Vault**, **Apache Ranger**, **BitLocker (Linux LUKS)**, **OpenSSL** | **Thales CipherTrust**, **AWS KMS**, **Azure Key Vault**, **Google Cloud KMS**, **Symantec DLP Encryption** |
| **Access Control (6b)** | Enforce least-privilege, identity verification, and privileged-session governance. | **Keycloak**, **FreeIPA**, **OpenLDAP**, **Authelia** | **Okta**, **Ping Identity**, **CyberArk PAM**, **Azure AD**, **SailPoint IdentityNow** |
| **Monitoring & Logging (6c)** | Centralise audit logs, detect anomalies, and correlate security events. | **Wazuh (SIEM & XDR)**, **ELK Stack (Elastic, Logstash, Kibana)**, **OSSEC**, **Graylog**, **TheHive + Cortex** | **Splunk Enterprise Security**, **IBM QRadar**, **Microsoft Sentinel**, **Arcsight ESM**, **Rapid7 InsightIDR** |
| **Backup & Resilience (6d)** | Ensure business continuity and data recovery after breach or loss. | **BorgBackup**, **Restic**, **Duplicati**, **Amanda**, **Rsync + Cron** | **Veeam Backup & Replication**, **Acronis Cyber Protect**, **Commvault**, **AWS Backup**, **Azure Recovery Vault**, **Google DRaaS** |
| **Log Retention & Forensics (6e)** | Preserve evidence for at least one year, support incident investigation. | **Graylog Archive**, **Wazuh SIEM**, **Loki + Promtail**, **Timesketch**, **Volatility (DFIR)** | **Splunk ES Cold Storage**, **IBM QRadar Forensics**, **Exabeam**, **Cynet**, **SentinelOne Vigilance Retain** |
| **Vendor / Processor Security (6f)** | Manage security obligations of Data Processors and third-party vendors. | **OWASP SAMM Vendor Checklist**, **GRC open source**, **Dradis Framework**, **Security Monkey (AWS)** | **UpGuard**, **SecurityScorecard**, **OneTrust TPRM**, **Prevalent**, **ServiceNow VRM**, **Archer IRM** |
| **Governance & Organisational Controls (6g)** | Establish policies, ISMS, audits, and awareness programs. | **OpenControl**, **GRC ToolKit**, **CIS CAT Pro Assessor**, **Lynis**, **Gophish** | **ISO 27001 ISMS Software (Conformio / Vanta)**, **NIST CSF Portals**, **KnowBe4 Training**, **Tenable IO**, **Qualys Guard** |
| **Vulnerability Assessment / Testing** | Identify misconfigurations and exploitable weaknesses. | **OpenVAS**, **Nmap**, **Nikto**, **Metasploit Framework**, **ZAP Proxy**, **Aircrack-ng** | **Qualys Cloud Suite**, **Rapid7 InsightVM**, **Tenable Nessus Pro**, **Burp Suite Pro**, **Acunetix** |
| **Incident Response & SOAR** | Coordinate detection, containment, and remediation actions. | **TheHive Project**, **Cortex Responder**, **MISP (Threat Intel)** | **Splunk SOAR (Phantom)**, **Palo Alto Cortex XSOAR**, **IBM Resilient**, **DFLabs IncMan** |
| **Data Loss Prevention (DLP)** | Prevent unauthorised sharing or exfiltration of personal data. | **MyDLP**, **OpenDLP**, **Zeek Network Monitor** | **Symantec DLP**, **Forcepoint DLP**, **Microsoft Purview**, **Digital Guardian**, **McAfee DLP Endpoint** |
| **Endpoint / EDR Protection** | Detect and respond to malware, ransomware, or insider abuse. | **Wazuh Agent**, **OSSEC**, **Falco (CNCF)**, **ClamAV** | **CrowdStrike Falcon**, **SentinelOne**, **Microsoft Defender XDR**, **Sophos Intercept X**, **ESET Protect** |
| **Cloud Security / CASB** | Protect SaaS and cloud environments, enforce policy compliance. | **CloudSploit**, **ScoutSuite**, **Prowler (AWS)** | **Zscaler**, **Netskope**, **Palo Alto Prisma Cloud**, **Microsoft Defender for Cloud Apps**, **Check Point CloudGuard** |
| **Email & Phishing Defence** | Filter malicious email and train employees. | **Rspamd**, **MailScanner**, **SpamAssassin**, **Gophish Training** | **Proofpoint**, **Mimecast**, **Barracuda ESS**, **KnowBe4 PhishER**, **Cisco ESA** |
| **Security Information Governance** | Maintain ISMS documentation and audit readiness. | **OpenGRC**, **Git-based Policy Repos**, **Rudder Policy Server** | **Vanta**, **Drata**, **Conformio**, **LogicGate Risk Cloud**, **Hyperproof** |
| **Threat Intelligence & Honeypots** | Detect evolving attacks and suspicious behaviour. | **Cowrie SSH Honeypot**, **T-Pot Framework**, **OpenCTI**, **MISP**, **Maltrail** | **Anomali ThreatStream**, **Recorded Future**, **CrowdStrike Intel**, **IBM X-Force Exchange** |
| **Compliance Automation / Audit Readiness** | Map security controls to DPDPA, ISO, NIST frameworks. | **OpenControl**, **OSCAL**, **Eramba Community** | **Hyperproof**, **Drata**, **Scrut Automation**, **Vanta**, **LogicGate** |
| **Awareness & Training** | Educate employees on phishing, data handling, incident response. | **Gophish**, **King Phisher**, **Security Awareness Games** | **KnowBe4**, **Cofense PhishMe**, **Curricula Awareness**, **Hoxhunt** |

---

Rule 6 forms the **technical backbone of the DPDPA**. It transforms privacy compliance from documentation to real engineering. By enforcing encryption, controlled access, proactive monitoring, contractual discipline, and governance maturity, organisations demonstrate “reasonable security safeguards” — a defensible position against both regulators and cyber-threats.