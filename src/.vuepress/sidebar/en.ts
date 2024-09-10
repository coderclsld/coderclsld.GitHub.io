import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "📖 数据库",
      // icon: "book",
      prefix: "database/",
      children: "structure",
    },
    {
      text: "🥔 Go",
      // icon: "book",
      prefix: "golang/",
      children: "structure",
    },
    {
      text: "📮 Linux",
      // icon: "book",
      prefix: "linux/",
      children: "structure",
    },
    {
      text: "🚌 中间件",
      // icon: "book",
      prefix: "middleware/",
      children: "structure",
    },
    {
      text: "📝 计划学习",
      // icon: "book",
      prefix: "planlearn/",
      children: "structure",
    },
    {
      text: "👍 分享",
      // icon: "book",
      prefix: "share/",
      children: "structure",
    },
    {
      text: "🔨 工具",
      // icon: "book",
      prefix: "tools/",
      children: "structure",
    },
    {
      text:"关于我",
      link:"README.html"
    }
  ],
});
