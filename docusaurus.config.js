// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'คู่มือการใช้งานโปรแกรม TMLT Mapping',
  tagline: '',
  favicon: 'img/TMLT_icon.ico',

  future: {
    v4: false,
  },

  url: 'https://organ.this.or.th',
  baseUrl: '/tmltdocs/',

  organizationName: 'Supercellz603',
  projectName: 'tmlt-manual',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-image-zoom',
      {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        config: {
          margin: 24,
          scrollOffset: 0,
        },
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/tmlt-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
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