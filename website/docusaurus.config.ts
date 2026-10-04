import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'USO',
  tagline: 'Utilizarea Sistemelor de Operare',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cs-pub-ro.github.io',
  baseUrl: '/uso-labs',

  organizationName: 'cs-pub-ro', // Usually your GitHub org/user
  projectName: 'uso-labs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'ro',
    locales: ['ro'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/cs-pub-ro/uso-lab-book',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'USO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'labsSidebar',
          position: 'left',
          label: 'Laboratoare',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resurse',
        },
        {
          href: 'https://github.com/cs-pub-ro/uso-lab-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Labs',
              to: '/docs/labs',
            },
            {
              label: 'Courses Moodle',
              href: 'https://curs.upb.ro/',
            },
            {
              label: 'OCW',
              href: 'https://ocw.cs.pub.ro/courses/uso/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Repository',
              href: 'https://github.com/cs-pub-ro/uso-lab-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} USO Team.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
