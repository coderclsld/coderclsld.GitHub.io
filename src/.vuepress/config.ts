import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "clsld 's blog",
    },
  },
  theme,
  // Enable it with pwa
  shouldPrefetch: true,
});
