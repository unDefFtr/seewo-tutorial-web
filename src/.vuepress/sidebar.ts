import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/docs": [
    {
      text: "一体机硬件简介",
      collapsible: false,
      expanded: true,
      prefix: "seewo-hardware-introduction",
      link: "seewo-hardware-introduction/",
      children: [
        "pc-module",
        "android-part",
      ],
    },
    {
      text: "一体机软件推荐",
      collapsible: false,
      expanded: true,
      prefix: "seewo-software-suggestion",
      link: "seewo-software-suggestion/",
      children: [
        "os-suggestion",
      ],
    },
  ],
});
