(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{245:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("本文将会带领您从 0 开始使用 D2Admin 创建下面的页面：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("在 "),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js 官网"),a("OutboundLink")],1),t._v(" 下载合适您系统的 node.js。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("安装完毕后检查版本（最好使用 node 8 版本）。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("由于网络原因，npm 在国内使用比较慢，建议切换 npm 源到国内镜像。")]),t._v(" "),a("p",[t._v("有两种比较方便的方式切换您的 npm 源：")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/nrm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nrm"),a("OutboundLink")],1),t._v(" [ 建议 ]")])]),t._v(" "),a("p",[t._v("安装：")]),t._v(" "),t._m(8),a("p",[t._v("查看所有可用源：")]),t._v(" "),t._m(9),a("p",[t._v("切换源：")]),t._v(" "),t._m(10),a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"https://npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cnpm"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("安装：")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/d2-projects/d2-admin-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("D2 Admin CLI"),a("OutboundLink")],1),t._v(" 是一个基于 "),a("code",[t._v("D2 Admin")]),t._v(" 的脚手架系统，可以快速生成 "),a("code",[t._v("D2 Admin")]),t._v(" 项目。")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("使用 npm")]),t._v(" "),t._m(15),a("p",[t._v("使用 yarn")]),t._v(" "),t._m(16),t._m(17),t._v(" "),a("p",[t._v("进入想要创建项目的文件夹，运行以下命令来创建一个新项目：")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("运行以下命令:")]),t._v(" "),t._m(24),t._m(25),t._v(" "),a("p",[t._v("如果你不喜欢使用命令行工具，可以前往仓库下载源码：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("完整版仓库 "),a("a",{attrs:{href:"https://github.com/d2-projects/d2-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://gitee.com/fairyever/d2-admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("简化版起始模板 "),a("a",{attrs:{href:"https://github.com/d2-projects/d2-admin-start-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1),t._v(" | "),a("a",{attrs:{href:"https://gitee.com/fairyever/d2-admin-start-kit",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[t._v("挑选一个您喜欢的网站 Fork 代码到您的仓库，然后下载或克隆。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果使用 Github 下载过慢，请参考 "),a("router-link",{attrs:{to:"/zh/question/"}},[t._v("常见问题")]),t._v("。")],1)]),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("下面的步骤都以简化版起始模板为基础演示如何使用。")]),t._v(" "),a("p",[t._v("下载完成后您会得到这些资源（以 1.1.5 版本为例）：")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("将终端切换到项目目录之后安装依赖：")]),t._v(" "),t._m(29),a("p",[t._v("如果遇到问题比如 node-sass 安装不上，请参考 "),a("router-link",{attrs:{to:"/zh/question/"}},[t._v("常见问题")]),t._v("。")],1),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("在项目目录内启动项目：")]),t._v(" "),t._m(31),a("p",[t._v("或者使用：")]),t._v(" "),t._m(32),a("p",[t._v("也可以使用 cli3 新推荐的命令：")]),t._v(" "),t._m(33),t._m(34),t._v(" "),a("p",[t._v("成功运行后会显示登录界面：")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),a("p",[t._v("上面的代码生成了一个带有 header 和 footer 的页面，页面内容只有一句话，如果您好奇为什么这么写，可以参考 "),a("router-link",{attrs:{to:"./../sys-components/container.html"}},[t._v("页面容器")])],1),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._m(46),t._v(" "),t._m(47),t._m(48),t._v(" "),t._m(49),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("D2Admin 现在将顶栏和侧边栏菜单分别存放然后赋值的逻辑只是一个最简单的演示，请根据您的需要自己修改菜变化逻辑，您可以只用一行代码就可以动态更新菜单，方法见 "),a("router-link",{attrs:{to:"/zh/sys-vuex/menu.html"}},[t._v("vuex menu 模块")]),t._v("。")],1)]),t._v(" "),t._m(50),t._v(" "),t._m(51),t._m(52),t._v(" "),t._m(53),t._m(54),t._v(" "),a("p",[t._v("经过上述步骤您得到了一个具有顶栏和底栏的页面，这个页面的入口在顶栏菜单和侧边栏菜单都会显示，并且打开此页面时浏览器 title 也会做出相应更新。")]),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),a("p",[t._v("上述教程只是介绍了 D2Admin 的冰山一角，更多的配置项和组件文档请查阅本文档其它板块。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"快速上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速上手","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速上手")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729102354.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("如果您以前运行过 webpack 项目，并且本机 node 版本为 8，可以忽略这一步。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node","aria-hidden":"true"}},[this._v("#")]),this._v(" node")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729091640.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("node -v\nv8.11.1\nnpm -v\n5.6.0\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"nrm-or-cnpm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nrm-or-cnpm","aria-hidden":"true"}},[this._v("#")]),this._v(" nrm or cnpm")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install -g nrm\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("nrm ls\n* npm -----  https://registry.npmjs.org/\n  cnpm ----  http://r.cnpmjs.org/\n  taobao --  https://registry.npm.taobao.org/\n  nj ------  https://registry.nodejitsu.com/\n  rednpm -- http://registry.mirror.cqupt.edu.cn\n  skimdb -- https://skimdb.npmjs.com/registry\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("nrm use taobao\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下载项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"d2-admin-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d2-admin-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" d2-admin-cli")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"安装-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 cli")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -g @d2-admin/d2-admin-cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn global add @d2-admin/d2-admin-cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("d2 create\n"),s("span",{attrs:{class:"token comment"}},[this._v("# 或者")]),this._v("\nd2 c\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"项目名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目名称","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目名称")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("项目名称即所要创建项目的文件夹名称，默认为 "),s("code",[this._v("d2-admin-demo")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"项目模板"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目模板","aria-hidden":"true"}},[this._v("#")]),this._v(" 项目模板")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("完整版：包含所有插件和示例代码")]),this._v(" "),s("li",[this._v("简化版：不包含非必须插件和组件，保留所有系统功能")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"查看-d2-admin-文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-d2-admin-文档","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看 "),s("code",[this._v("D2 Admin")]),this._v(" 文档")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("d2 doc\n"),s("span",{attrs:{class:"token comment"}},[this._v("# 或者")]),this._v("\nd2 d\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"手动下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动下载","aria-hidden":"true"}},[this._v("#")]),this._v(" 手动下载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我的建议是使用 "),s("strong",[this._v("简化版起始模板")]),this._v(" 因为在完整版的基础上做减法，要比在简化版基础上做加法复杂。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729091149.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装依赖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm i\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开发调试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 开发调试")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm run dev\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm start\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("npm run serve\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("以上每种方式效果都是一样的，只是为了照顾不同人的习惯起了三个名字，实质上都是运行了 "),s("code",[this._v("vue-cli-service serve --open")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729094841.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"新建页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建页面","aria-hidden":"true"}},[this._v("#")]),this._v(" 新建页面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("src/pages")]),this._v(" 目录是页面存放目录，在此目录下新建目录，例如 "),s("strong",[this._v("page-demo")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729095509.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后在文件夹内新建 "),s("strong",[this._v("index.vue")]),this._v(" 文件：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("d2-container")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("header"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("header"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Hello World\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("footer"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("d2-container")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729095919.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"设置路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置路由","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置路由")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("src/router/routes.js")]),this._v(" 是路由配置文件。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 "),s("code",[this._v("frameIn")]),this._v(" 变量最后添加：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'新建示例'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最后 "),s("code",[this._v("frameIn")]),this._v(" 变量应该是这样：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" frameIn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    redirect"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'index'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" layoutHeaderAside"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'page3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/page3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 3'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/pages/page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'新建示例'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"设置菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置菜单","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置菜单")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("src/menu")]),this._v(" 目录是菜单存放目录，里面的两个文件分别存放顶栏和侧边栏的菜单。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打开 "),s("code",[this._v("src/menu/header.js")]),this._v(" 添加新的菜单（高亮行）：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'home'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'folder-o'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 1'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 2'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 3'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'新建示例'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("打开 "),s("code",[this._v("src/menu/aside.js")]),this._v(" 添加新的菜单（高亮行）：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'home'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'folder-o'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 1'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 2'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'页面 3'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/page-demo'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'新建示例'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果","aria-hidden":"true"}},[this._v("#")]),this._v(" 效果")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729101736.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180729101708.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])}],!1,null,null,null);e.options.__file="getting-started.md";s.default=e.exports}}]);