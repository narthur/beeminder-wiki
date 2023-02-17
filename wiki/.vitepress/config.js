import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Beeminder Wiki",
  description: "Community-maintained wiki for Beeminder",
  markdown: {
    toc: {
      pattern: /TOCPLACEHOLDER/,
    },
  },
  themeConfig: {
    logo: "beeminder.png",
    editLink: {
      pattern:
        "https://github.com/narthur/beeminder-wiki/edit/master/wiki/:path",
    },
    sidebar: [
      {
        text: "Pages",
        items: [
          { text: "What Is Beeminder?", link: "/what-is-beeminder.md" },
          {
            text: "Getting Started",
            link: "/getting-started.md",
          },
          {
            text: "The Beeminder Philosophy",
            link: "/philosophy.md",
          },
          { text: "Use Cases", link: "/use-cases.md" },
          { text: "Tutorials", link: "/tutorials.md" },
          { text: "Integrations", link: "/integrations.md" },
          { text: "Extending Beeminder", link: "/extending-beeminder.md" },
          { text: "Articles", link: "/articles.md" },
        ],
      },
      {
        text: "Links",
        items: [
          { text: "Beeminder", link: "https://beeminder.com" },
          { text: "Blog", link: "https://blog.beeminder.com/" },
          { text: "Forum", link: "https://forum.beeminder.com/" },
          {
            text: "Mobile Apps",
            link: "https://help.beeminder.com/category/59-apps",
          },
          { text: "Unofficial Merch", link: "https://beeminder.com/merch" },
          {
            text: "Unofficial Discord",
            link: "https://discord.com/invite/gSBYEqqRG2",
          },
        ],
      },
      {
        text: "Twitter",
        items: [
          { text: "@bmndr", link: "https://twitter.com/bmndr" },
          { text: "@beeminfra", link: "https://twitter.com/beeminfra" },
          { text: "@beemstat", link: "https://twitter.com/beemstat" },
          { text: "@beemuvi", link: "https://twitter.com/beemuvi" },
          { text: "@bmndrdogfood", link: "https://twitter.com/bmndrdogfood" },
          { text: "@thatgirl", link: "https://twitter.com/thatgirl" },
          { text: "@dreev", link: "https://twitter.com/dreev" },
        ],
      },
    ],
  },
});
