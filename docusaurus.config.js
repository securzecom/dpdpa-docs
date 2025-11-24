// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DPDPA | Digital Personal Data Protection Act India',
  tagline: 'India’s Data Protection Law 🇮🇳',
  favicon: 'img/securze-favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dpdpaedu.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Securze', // Usually your GitHub org/user name.
  projectName: 'DPDPA Documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@gracefullight/docusaurus-plugin-microsoft-clarity',
      { projectId: 'YOUR_PROJECT_ID' }, // <-- replace with your Clarity ID
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  

  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      // Replace with your project's social card
      image: '/img/DPDPA-Homepage.png',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/dpdpa-logo-black.png',
          srcDark: 'img/dpdpa-logo-white.png',
          href: 'https://dpdpaedu.org',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          {to: '/blog', label: 'Board', position: 'left'},
          {
            href: 'https://securze.com/',
            label: 'DPDPA Implementation Consultation',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'My Site Logo',
          src: '/img/securze-logo-white.png',
          width: 200,
        },
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'DPDPA Guide',
                to: '/docs/Overview/Background and Purpose of DPDPA',
              },
              {
                label: 'Schedule a Expert DPDPA Consultation Call',
                to: 'http://calendly.com/harshparekh-securze',
              },
            ],
          },
          {
            title: 'Services',
            items: [
              {
                label: 'DPO as a Service',
                href: 'https://securze.com/services/',
              },
              {
                label: '24x7x365 Managed Cybersecurity',
                href: 'https://securze.com/next-gen-managed-cybersecurity/',
              },
              {
                label: 'VAPT',
                href: 'https://securze.com/services/vapt-services/',
              },              
              {
                label: 'Red Team Services',
                href: 'https://securze.com/services/red-teaming/',
              },
              {
                label: '24x7 SOC - Blue Team',
                href: 'https://securze.com/services/security-operations-center/',
              },
              {
                label: 'Purple Team Services',
                href: 'https://securze.com/services/table-top-exercises/',
              },
              {
                label: 'GRC Services',
                href: 'https://securze.com/services/',
              },
              {
                label: 'Web3 Security',
                href: 'https://securze.com/services/web3-security/',
              },
              {
                label: 'AI Security',
                href: 'https://securze.com/services/',
              },
              {
                label: 'Cybersecurity Training',
                href: 'https://securze.com/services/cybersecurity-training/',
              },
              {
                label: 'Network Security',
                href: 'https://securze.com/services/',
              },
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/securze',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@securze',
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                label: 'www.securze.com',
                href: 'https://securze.com/',
              },
              {
                html: `<span>Email: info@securze.com</span>`,
              },
              {
                html: `<span>Call: +91-8451073938</span>`,
              },
              {
                html: `<span>HQ: India</span>`,
              },
              {
                label: 'Schedule a Call',
                href: 'https://calendly.com/harshparekh-securze',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} A community project powered by Securze - a cyber-security brand under Navneetpriya Softech Solutions LLP`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      
      
    }),

    
};

export default config;

