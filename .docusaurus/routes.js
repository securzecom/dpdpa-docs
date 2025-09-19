import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dpdpa-docs/__docusaurus/debug',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug', '3ec'),
    exact: true
  },
  {
    path: '/dpdpa-docs/__docusaurus/debug/config',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug/config', '388'),
    exact: true
  },
  {
    path: '/dpdpa-docs/__docusaurus/debug/content',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug/content', '7c1'),
    exact: true
  },
  {
    path: '/dpdpa-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug/globalData', '053'),
    exact: true
  },
  {
    path: '/dpdpa-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug/metadata', 'fd3'),
    exact: true
  },
  {
    path: '/dpdpa-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug/registry', 'e74'),
    exact: true
  },
  {
    path: '/dpdpa-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/dpdpa-docs/__docusaurus/debug/routes', 'b06'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog',
    component: ComponentCreator('/dpdpa-docs/blog', 'e6f'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/archive',
    component: ComponentCreator('/dpdpa-docs/blog/archive', '263'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/authors',
    component: ComponentCreator('/dpdpa-docs/blog/authors', 'a07'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/dpdpa-docs/blog/authors/all-sebastien-lorber-articles', '6d9'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/authors/yangshun',
    component: ComponentCreator('/dpdpa-docs/blog/authors/yangshun', '764'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/first-blog-post',
    component: ComponentCreator('/dpdpa-docs/blog/first-blog-post', '02c'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/long-blog-post',
    component: ComponentCreator('/dpdpa-docs/blog/long-blog-post', '3df'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/mdx-blog-post',
    component: ComponentCreator('/dpdpa-docs/blog/mdx-blog-post', 'ecf'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/tags',
    component: ComponentCreator('/dpdpa-docs/blog/tags', '82c'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/tags/docusaurus',
    component: ComponentCreator('/dpdpa-docs/blog/tags/docusaurus', 'ef1'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/tags/facebook',
    component: ComponentCreator('/dpdpa-docs/blog/tags/facebook', 'ab5'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/tags/hello',
    component: ComponentCreator('/dpdpa-docs/blog/tags/hello', 'af3'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/tags/hola',
    component: ComponentCreator('/dpdpa-docs/blog/tags/hola', '35e'),
    exact: true
  },
  {
    path: '/dpdpa-docs/blog/welcome',
    component: ComponentCreator('/dpdpa-docs/blog/welcome', 'dc3'),
    exact: true
  },
  {
    path: '/dpdpa-docs/markdown-page',
    component: ComponentCreator('/dpdpa-docs/markdown-page', 'db9'),
    exact: true
  },
  {
    path: '/dpdpa-docs/docs',
    component: ComponentCreator('/dpdpa-docs/docs', '24d'),
    routes: [
      {
        path: '/dpdpa-docs/docs',
        component: ComponentCreator('/dpdpa-docs/docs', 'c98'),
        routes: [
          {
            path: '/dpdpa-docs/docs',
            component: ComponentCreator('/dpdpa-docs/docs', 'dbd'),
            routes: [
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Additional Obligations of Significant Data Fiduciaries',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Additional Obligations of Significant Data Fiduciaries', '8a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Appeals to the Appellate Tribunal',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Appeals to the Appellate Tribunal', 'cf5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Appointment of Chairperson and Members of the Data Protection Board',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Appointment of Chairperson and Members of the Data Protection Board', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Contact Information for Queries about Processing',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Contact Information for Queries about Processing', '3c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Data Protection Board to Function as a Digital Office',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Data Protection Board to Function as a Digital Office', 'e80'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Definitions',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Definitions', 'b2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Exemptions for Processing Children’s Data',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Exemptions for Processing Children’s Data', 'b08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Exemptions for Research, Archiving, and Statistical Purposes',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Exemptions for Research, Archiving, and Statistical Purposes', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Intimation of Personal Data Breach',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Intimation of Personal Data Breach', '37d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Notice by Data Fiduciary to Data Principal',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Notice by Data Fiduciary to Data Principal', 'afd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Power to Call for Information from Data Fiduciaries or Intermediaries',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Power to Call for Information from Data Fiduciaries or Intermediaries', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Procedure of Board Meetings and Authentication of Orders or Instruments',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Procedure of Board Meetings and Authentication of Orders or Instruments', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Processing for Subsidy, Benefit, Service, Licence or Permit by the State',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Processing for Subsidy, Benefit, Service, Licence or Permit by the State', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Processing of Personal Data Outside India',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Processing of Personal Data Outside India', '162'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Reasonable Security Safeguards',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Reasonable Security Safeguards', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Registration and Obligations of Consent Manager',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Registration and Obligations of Consent Manager', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Rights of Data Principals',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Rights of Data Principals', '3c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Salary, Allowances and Service Conditions of the Chairperson and Members',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Salary, Allowances and Service Conditions of the Chairperson and Members', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Terms and Conditions of Officers and Employees of the Board',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Terms and Conditions of Officers and Employees of the Board', '51a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Title and Commencement',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Title and Commencement', 'db7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/Verifiable Consent for Children and Persons with Disabilities',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/Verifiable Consent for Children and Persons with Disabilities', 'a28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/DPDPA Rules/When the Specified Purpose is Deemed No Longer Served',
                component: ComponentCreator('/dpdpa-docs/docs/DPDPA Rules/When the Specified Purpose is Deemed No Longer Served', 'd19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Background and Purpose of DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Background and Purpose of DPDPA', '5c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Cross-Border Data Transfers under DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Cross-Border Data Transfers under DPDPA', '1af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Duties and Obligations of Data Fiduciaries',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Duties and Obligations of Data Fiduciaries', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Key Definitions under DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Key Definitions under DPDPA', '6e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Penalties and Enforcement under the DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Penalties and Enforcement under the DPDPA', '2c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Rights of Data Principals',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Rights of Data Principals', '764'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Role of Consent Managers',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Role of Consent Managers', '7a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Scope & Applicability of DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Scope & Applicability of DPDPA', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Security Safeguards and Breach Notification',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Security Safeguards and Breach Notification', '1c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Special Duties of Significant Data Fiduciaries',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Special Duties of Significant Data Fiduciaries', '866'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/The Data Protection Board of India',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/The Data Protection Board of India', '804'),
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
    path: '/dpdpa-docs/',
    component: ComponentCreator('/dpdpa-docs/', '4d6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
