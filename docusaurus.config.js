// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tutorial',
  tagline: '',
  favicon: 'img/TMLT_icon.ico',

  future: {
    v4: false,
  },

  url: 'https://Supercellz603.github.io',
  baseUrl: '/my-docs/',

  organizationName: 'Supercellz603',
  projectName: 'my-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',        // ← เปิดหน้า docs เป็นหน้าแรกเลย
          sidebarPath: './sidebars.js',
        },
        blog: false,                 // ← ปิด blog ออก
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

 themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,  // ← เพิ่มตรงนี้
      },
    },
    navbar: {
      title: 'Tutorial',
      logo: {
        alt: 'Logo',
        src: 'img/TMLT_main.png',
      },
      items: [],
    },
    footer: undefined,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;