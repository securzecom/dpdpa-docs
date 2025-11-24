import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0e1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/blog',
    component: ComponentCreator('/blog/blog', '011'),
    exact: true
  },
  {
    path: '/blog/bot',
    component: ComponentCreator('/blog/bot', 'e28'),
    exact: true
  },
  {
    path: '/blog/Bot',
    component: ComponentCreator('/blog/Bot', '4cf'),
    exact: true
  },
  {
    path: '/blog/Bot',
    component: ComponentCreator('/blog/Bot', 'c15'),
    exact: true
  },
  {
    path: '/blog/dpdpa-bot',
    component: ComponentCreator('/blog/dpdpa-bot', '69c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '26c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '83a'),
    exact: true
  },
  {
    path: '/dpdpa-bot',
    component: ComponentCreator('/dpdpa-bot', '335'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '690'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '418'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'dc3'),
            routes: [
              {
                path: '/docs/Board & Enforcement Questions/01',
                component: ComponentCreator('/docs/Board & Enforcement Questions/01', 'f3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Board & Enforcement Questions/02',
                component: ComponentCreator('/docs/Board & Enforcement Questions/02', 'a84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Board & Enforcement Questions/03',
                component: ComponentCreator('/docs/Board & Enforcement Questions/03', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Board & Enforcement Questions/04',
                component: ComponentCreator('/docs/Board & Enforcement Questions/04', 'f2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Checklists/DPDPA Checklists',
                component: ComponentCreator('/docs/Checklists/DPDPA Checklists', '746'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/01',
                component: ComponentCreator('/docs/Consent Manager General Questions/01', 'd71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/02',
                component: ComponentCreator('/docs/Consent Manager General Questions/02', 'e0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/03',
                component: ComponentCreator('/docs/Consent Manager General Questions/03', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/04',
                component: ComponentCreator('/docs/Consent Manager General Questions/04', '08d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/05',
                component: ComponentCreator('/docs/Consent Manager General Questions/05', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/06',
                component: ComponentCreator('/docs/Consent Manager General Questions/06', '563'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Consent Manager General Questions/07',
                component: ComponentCreator('/docs/Consent Manager General Questions/07', '248'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/01',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/01', '6c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/02',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/02', 'c3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/03',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/03', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/04',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/04', 'aec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/05',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/05', 'e3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/06',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/06', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/07',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/07', '18a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/08',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/08', '19c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Data Fiduciary General Questions/09',
                component: ComponentCreator('/docs/Data Fiduciary General Questions/09', '013'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA General Questions/01',
                component: ComponentCreator('/docs/DPDPA General Questions/01', '3ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA General Questions/02',
                component: ComponentCreator('/docs/DPDPA General Questions/02', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA General Questions/03',
                component: ComponentCreator('/docs/DPDPA General Questions/03', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA General Questions/04',
                component: ComponentCreator('/docs/DPDPA General Questions/04', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Additional Obligations of Significant Data Fiduciaries',
                component: ComponentCreator('/docs/DPDPA Rules/Additional Obligations of Significant Data Fiduciaries', 'f73'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Appeal to Appellate Tribunal',
                component: ComponentCreator('/docs/DPDPA Rules/Appeal to Appellate Tribunal', 'b2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Appointment of Chairperson and Other Members',
                component: ComponentCreator('/docs/DPDPA Rules/Appointment of Chairperson and Other Members', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Calling for Information from Data Fiduciary or Intermediary',
                component: ComponentCreator('/docs/DPDPA Rules/Calling for Information from Data Fiduciary or Intermediary', '9d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Contact Information for Queries about Processing',
                component: ComponentCreator('/docs/DPDPA Rules/Contact Information for Queries about Processing', '979'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Definitions',
                component: ComponentCreator('/docs/DPDPA Rules/Definitions', 'b24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Exemption from Act for Research, Archiving or Statistical Purposes',
                component: ComponentCreator('/docs/DPDPA Rules/Exemption from Act for Research, Archiving or Statistical Purposes', 'fde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Exemptions from certain obligations applicable to processing of personal data of child',
                component: ComponentCreator('/docs/DPDPA Rules/Exemptions from certain obligations applicable to processing of personal data of child', 'e6a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Functioning of Board as Digital Office',
                component: ComponentCreator('/docs/DPDPA Rules/Functioning of Board as Digital Office', 'eaf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Intimation of Personal Data Breach',
                component: ComponentCreator('/docs/DPDPA Rules/Intimation of Personal Data Breach', '1dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Notice by Data Fiduciary to Data Principal',
                component: ComponentCreator('/docs/DPDPA Rules/Notice by Data Fiduciary to Data Principal', '696'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Procedure for Meetings of Board and Authentication of its Orders, Directions and Instruments',
                component: ComponentCreator('/docs/DPDPA Rules/Procedure for Meetings of Board and Authentication of its Orders, Directions and Instruments', '3dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Processing for Subsidy, Benefit, Service, Licence or Permit by the State',
                component: ComponentCreator('/docs/DPDPA Rules/Processing for Subsidy, Benefit, Service, Licence or Permit by the State', '6d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Reasonable Security Safeguards',
                component: ComponentCreator('/docs/DPDPA Rules/Reasonable Security Safeguards', 'c8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Registration and Obligations of Consent Manager',
                component: ComponentCreator('/docs/DPDPA Rules/Registration and Obligations of Consent Manager', '293'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Rights of Data Principals',
                component: ComponentCreator('/docs/DPDPA Rules/Rights of Data Principals', 'b95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Salary, Allowances and Other Terms and Conditions of Service of Chairperson and Other Members',
                component: ComponentCreator('/docs/DPDPA Rules/Salary, Allowances and Other Terms and Conditions of Service of Chairperson and Other Members', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Terms and Conditions of Appointment and Service of Officers and Employees of Board',
                component: ComponentCreator('/docs/DPDPA Rules/Terms and Conditions of Appointment and Service of Officers and Employees of Board', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Title and Commencement',
                component: ComponentCreator('/docs/DPDPA Rules/Title and Commencement', '8ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Transfer of personal data outside the territory of India',
                component: ComponentCreator('/docs/DPDPA Rules/Transfer of personal data outside the territory of India', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Verifiable Consent for Processing of Personal Data of Child',
                component: ComponentCreator('/docs/DPDPA Rules/Verifiable Consent for Processing of Personal Data of Child', 'b78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/Verifiable Consent for Processing of Personal Data of Person with Disability who has Lawful Guardian',
                component: ComponentCreator('/docs/DPDPA Rules/Verifiable Consent for Processing of Personal Data of Person with Disability who has Lawful Guardian', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/DPDPA Rules/When the Specified Purpose is Deemed No Longer Served',
                component: ComponentCreator('/docs/DPDPA Rules/When the Specified Purpose is Deemed No Longer Served', '67e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General Breach and Penalty Questions/01',
                component: ComponentCreator('/docs/General Breach and Penalty Questions/01', 'a50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General Breach and Penalty Questions/02',
                component: ComponentCreator('/docs/General Breach and Penalty Questions/02', '76b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General Breach and Penalty Questions/03',
                component: ComponentCreator('/docs/General Breach and Penalty Questions/03', '421'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General Breach and Penalty Questions/04',
                component: ComponentCreator('/docs/General Breach and Penalty Questions/04', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General Breach and Penalty Questions/05',
                component: ComponentCreator('/docs/General Breach and Penalty Questions/05', 'c34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 01 - Conduct a Gap Assessment',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 01 - Conduct a Gap Assessment', 'e3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 02 - Map Personal Data Flows',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 02 - Map Personal Data Flows', 'dfd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 03 - Draft or Update Privacy Notices',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 03 - Draft or Update Privacy Notices', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 04 - Appoint a Grievance Officer or Data Protection Officer',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 04 - Appoint a Grievance Officer or Data Protection Officer', '06e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 05 - Building Internal Policies for DPDPA Compliance',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 05 - Building Internal Policies for DPDPA Compliance', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 06 - Handling Data Principal Rights Requests',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 06 - Handling Data Principal Rights Requests', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 07 - Breach Management Under DPDPA',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 07 - Breach Management Under DPDPA', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 08 - Special Duties for Significant Data Fiduciaries',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 08 - Special Duties for Significant Data Fiduciaries', '793'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 09 - Cross-Border Transfers Compliance',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 09 - Cross-Border Transfers Compliance', '488'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 10 - Penalties, Fines, and Risk Mitigation',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 10 - Penalties, Fines, and Risk Mitigation', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Implementing DPDPA/Step 11 - Compliance Checklists by Industry',
                component: ComponentCreator('/docs/Implementing DPDPA/Step 11 - Compliance Checklists by Industry', '6e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/International Cross-Border General Questions/01',
                component: ComponentCreator('/docs/International Cross-Border General Questions/01', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/International Cross-Border General Questions/02',
                component: ComponentCreator('/docs/International Cross-Border General Questions/02', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/International Cross-Border General Questions/03',
                component: ComponentCreator('/docs/International Cross-Border General Questions/03', '75c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/International Cross-Border General Questions/04',
                component: ComponentCreator('/docs/International Cross-Border General Questions/04', '723'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/International Cross-Border General Questions/05',
                component: ComponentCreator('/docs/International Cross-Border General Questions/05', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Background and Purpose of DPDPA',
                component: ComponentCreator('/docs/Overview/Background and Purpose of DPDPA', 'fb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Cross-Border Data Transfers under DPDPA',
                component: ComponentCreator('/docs/Overview/Cross-Border Data Transfers under DPDPA', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Duties and Obligations of Data Fiduciaries',
                component: ComponentCreator('/docs/Overview/Duties and Obligations of Data Fiduciaries', '76c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Key Definitions under DPDPA',
                component: ComponentCreator('/docs/Overview/Key Definitions under DPDPA', '5ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Penalties and Enforcement under the DPDPA',
                component: ComponentCreator('/docs/Overview/Penalties and Enforcement under the DPDPA', 'dd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Rights of Data Principals',
                component: ComponentCreator('/docs/Overview/Rights of Data Principals', '3c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Role of Consent Managers',
                component: ComponentCreator('/docs/Overview/Role of Consent Managers', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Scope & Applicability of DPDPA',
                component: ComponentCreator('/docs/Overview/Scope & Applicability of DPDPA', '306'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Security Safeguards and Breach Notification',
                component: ComponentCreator('/docs/Overview/Security Safeguards and Breach Notification', '5ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/Special Duties of Significant Data Fiduciaries',
                component: ComponentCreator('/docs/Overview/Special Duties of Significant Data Fiduciaries', 'c14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Overview/The Data Protection Board of India',
                component: ComponentCreator('/docs/Overview/The Data Protection Board of India', '5bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rights of Data Principals/01',
                component: ComponentCreator('/docs/Rights of Data Principals/01', 'fe7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rights of Data Principals/02',
                component: ComponentCreator('/docs/Rights of Data Principals/02', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rights of Data Principals/03',
                component: ComponentCreator('/docs/Rights of Data Principals/03', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rights of Data Principals/04',
                component: ComponentCreator('/docs/Rights of Data Principals/04', '13f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Rights of Data Principals/05',
                component: ComponentCreator('/docs/Rights of Data Principals/05', '111'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/FIRST SCHEDULE: PART A — Conditions for Registration of Consent Manager',
                component: ComponentCreator('/docs/Schedules/FIRST SCHEDULE: PART A — Conditions for Registration of Consent Manager', '738'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/FIRST SCHEDULE: PART B — Obligations of Consent Manager',
                component: ComponentCreator('/docs/Schedules/FIRST SCHEDULE: PART B — Obligations of Consent Manager', '36c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/FOURTH SCHEDULE: PART A:  Classes of Data Fiduciaries in Respect of Whom Provisions of Sub-sections 1 and 3 of Section 9 Shall Not Apply',
                component: ComponentCreator('/docs/Schedules/FOURTH SCHEDULE: PART A:  Classes of Data Fiduciaries in Respect of Whom Provisions of Sub-sections 1 and 3 of Section 9 Shall Not Apply', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/FOURTH SCHEDULE: PART B - Purposes for Which Provisions of Sub-sections 1 and 3 of Section 9 Shall Not Apply',
                component: ComponentCreator('/docs/Schedules/FOURTH SCHEDULE: PART B - Purposes for Which Provisions of Sub-sections 1 and 3 of Section 9 Shall Not Apply', '5c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/Purposes And Authorised Persons For Which Information May Be Called For Under Section 36 Of The Act',
                component: ComponentCreator('/docs/Schedules/Purposes And Authorised Persons For Which Information May Be Called For Under Section 36 Of The Act', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/SCHEDULE FIVE: Terms and Conditions of Service of Chairperson and Other Members copy',
                component: ComponentCreator('/docs/Schedules/SCHEDULE FIVE: Terms and Conditions of Service of Chairperson and Other Members copy', '67d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/SCHEDULE SIX: Terms and Conditions of Appointment and Service of Officers and Employees of the Board copy',
                component: ComponentCreator('/docs/Schedules/SCHEDULE SIX: Terms and Conditions of Appointment and Service of Officers and Employees of the Board copy', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/SECOND SCHEDULE: Standards for Processing of Personal Data by the State and its Instrumentalities',
                component: ComponentCreator('/docs/Schedules/SECOND SCHEDULE: Standards for Processing of Personal Data by the State and its Instrumentalities', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Schedules/THIRD SCHEDULE: Classes of Data Fiduciaries, Purposes, and Time Periods',
                component: ComponentCreator('/docs/Schedules/THIRD SCHEDULE: Classes of Data Fiduciaries, Purposes, and Time Periods', '49b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Significant Data Fiduciary General Questions/01',
                component: ComponentCreator('/docs/Significant Data Fiduciary General Questions/01', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Significant Data Fiduciary General Questions/02',
                component: ComponentCreator('/docs/Significant Data Fiduciary General Questions/02', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Significant Data Fiduciary General Questions/03',
                component: ComponentCreator('/docs/Significant Data Fiduciary General Questions/03', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Significant Data Fiduciary General Questions/04',
                component: ComponentCreator('/docs/Significant Data Fiduciary General Questions/04', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Significant Data Fiduciary General Questions/05',
                component: ComponentCreator('/docs/Significant Data Fiduciary General Questions/05', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Special Cases or Edge Situations/01',
                component: ComponentCreator('/docs/Special Cases or Edge Situations/01', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Special Cases or Edge Situations/02',
                component: ComponentCreator('/docs/Special Cases or Edge Situations/02', '1cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Special Cases or Edge Situations/03',
                component: ComponentCreator('/docs/Special Cases or Edge Situations/03', '023'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Special Cases or Edge Situations/04',
                component: ComponentCreator('/docs/Special Cases or Edge Situations/04', 'e9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Special Cases or Edge Situations/05',
                component: ComponentCreator('/docs/Special Cases or Edge Situations/05', '9fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
