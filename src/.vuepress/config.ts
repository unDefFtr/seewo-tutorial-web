import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "电教委入门指南",
  description: "从小白到高手，轻松玩转班级一体机",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
