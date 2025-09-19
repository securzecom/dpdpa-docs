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
    component: ComponentCreator('/dpdpa-docs/docs', 'a2f'),
    routes: [
      {
        path: '/dpdpa-docs/docs',
        component: ComponentCreator('/dpdpa-docs/docs', 'f59'),
        routes: [
          {
            path: '/dpdpa-docs/docs',
            component: ComponentCreator('/dpdpa-docs/docs', 'c90'),
            routes: [
              {
                path: '/dpdpa-docs/docs/Overview/Background and Purpose of DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Background and Purpose of DPDPA', 'd28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Cross-Border Data Transfers under DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Cross-Border Data Transfers under DPDPA', '551'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Duties and Obligations of Data Fiduciaries',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Duties and Obligations of Data Fiduciaries', '460'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/intro',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/intro', '6e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Key Definitions under DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Key Definitions under DPDPA', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Penalties and Enforcement under the DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Penalties and Enforcement under the DPDPA', '741'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Rights of Data Principals',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Rights of Data Principals', 'b90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Role of Consent Managers',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Role of Consent Managers', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Scope & Applicability of DPDPA',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Scope & Applicability of DPDPA', 'f92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Security Safeguards and Breach Notification',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Security Safeguards and Breach Notification', 'd4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/Special Duties of Significant Data Fiduciaries',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/Special Duties of Significant Data Fiduciaries', 'bea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dpdpa-docs/docs/Overview/The Data Protection Board of India',
                component: ComponentCreator('/dpdpa-docs/docs/Overview/The Data Protection Board of India', 'b2f'),
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
