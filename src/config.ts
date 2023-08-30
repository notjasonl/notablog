import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://notjaso.nl",
  author: "Jason Liu",
  desc: "A personal blog/portfolio/about page",
  title: "notjaso.nl",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/notjasonl",
    linkTitle: `Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/notjasonl",
    linkTitle: `LinkedIn`,
    active: true,
  },
];
