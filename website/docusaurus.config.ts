import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'USO',
  tagline: 'Utilizarea Sistemelor de Operare',
  favicon: 'img/uso.svg',

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
            routeBasePath: '/',
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
      logo: {
        alt: 'USO Logo',
        src: 'img/uso.svg',
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
<<<<<<< HEAD
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resurse',
=======
          sidebarId: 'homeworkSidebar',
          position: 'left',
          label: 'Teme',
>>>>>>> 5e8149b (feat: added schaffold for labs and homework)
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
              to: '/labs/intro',
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
