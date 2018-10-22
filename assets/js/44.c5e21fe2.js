(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{233:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("D2Admin 1.1.5 - 1.2.0 之间修复了一些之前的错误，有一些小的功能改进，也有较大的升级。新功能介绍见 "),a("a",{attrs:{href:"https://juejin.im/post/5b7d9640f265da436631a5a7",target:"_blank",rel:"noopener noreferrer"}},[t._v("《D2Admin 8月更新: 高级数据持久化|标签页右键|模块化等》"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("旧版文档")]),t._v(" "),a("p",[t._v("如果您暂时不想升级到新版本，旧版本文档会一直为您保留，"),a("a",{attrs:{href:"http://app.d3collection.cn/d2-admin-doc/1.1.11/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档地址"),a("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("首先将您的旧项目整体复制一份到其它位置，防止修改失败丢失文件。")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("初始化成功后您应该有两个项目：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("如果您使用飞冰创建的页面，您的业务页面应该在 pages 目录下，例如下图中的 page6 文件夹：")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("将您的业务代码文件全部转移至新版项目的 pages 目录：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("将旧版本中的 menuConfig.js 和 routerConfig.js 移动到新项目中的同样位置，替换新版本初始化时的默认文件：")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("移动到新文件夹：")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("选择替换已有文件：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("由于您之前的项目中会使用一些区块，区块在创建在您的项目里时会自动在 package.json 文件中新增相关依赖，现在您需要手动将这些依赖添加到新的项目中：")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("重新安装依赖完成后启动新的项目，即完成了旧项目的升级工作。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("如果您修改了包含但不仅限于以下文件时，您需要注意将您以前的修改更新至新的项目：")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("此版本对 store 文件夹下的设置进行了拆分：")]),t._v(" "),a("p",[t._v("旧版的 d2admin 模块所有代码写在了一个文件中：")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("导致这个模块看起来足够混乱以至于在修改某些功能时很不容易找到相关的代码。")]),t._v(" "),a("p",[t._v("新版的 D2Admin ICE 针对这部分做了优化，将这个模块根据功能进行了拆分：")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("这样在您需要修改某些功能时可以更快速地找到对应的代码位置。但是相应而来的是模块中的方法在调用时的方法都发生了变化，以登录为例：")]),t._v(" "),a("p",[t._v("旧版（示例）：")]),t._v(" "),t._m(26),a("p",[t._v("新版（示例）：")]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("旧版的数据持久化文档 "),a("a",{attrs:{href:"http://app.d3collection.cn/d2-admin-doc/1.1.11/zh/plugins/vuex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VUEX 实用工具"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("新版的数据持久化更加强大，文档见 "),a("a",{attrs:{href:"http://app.d3collection.cn/d2-admin-doc/lastest/zh/sys-db/",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据持久化"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("请在业务代码中注意将您使用的数据持久化方法升级。")]),t._v(" "),t._m(30),t._v(" "),a("p",[a("router-link",{attrs:{to:"/zh/communication-group-chat/"}},[t._v("交流群")])],1)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"ice-1-2-6-to-1-2-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ice-1-2-6-to-1-2-7","aria-hidden":"true"}},[this._v("#")]),this._v(" ICE 1.2.6 TO 1.2.7")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("D2Admin ICE 1.2.6 是基于 D2Admin 1.1.5 版本简化而来。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("D2Admin ICE 1.2.7 是基于 D2Admin 1.2.0 版本简化而来。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何升级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何升级","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何升级")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"备份旧项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#备份旧项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 备份旧项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"下载新版本-d2admin-ice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载新版本-d2admin-ice","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载新版本 D2Admin ICE")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826155154.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"移动页面文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动页面文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 移动页面文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826155652.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826160031.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"更新路由和菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新路由和菜单","aria-hidden":"true"}},[this._v("#")]),this._v(" 更新路由和菜单")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826160219.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826160642.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826160659.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"更新-package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新-package-json","aria-hidden":"true"}},[this._v("#")]),this._v(" 更新 package.json")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826161511.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("lodash.uniqueid 这个插件不需要添加到新的项目中，新项目中全量引入了 lodash")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"重新安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重新安装依赖","aria-hidden":"true"}},[this._v("#")]),this._v(" 重新安装依赖")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826160847.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"启动新的项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动新的项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动新的项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826162202.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"特殊情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊情况","aria-hidden":"true"}},[this._v("#")]),this._v(" 特殊情况")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("pages 目录下的首页和登录页面")]),this._v(" "),s("li",[this._v("公用样式和主题")]),this._v(" "),s("li",[this._v("HeaderAside 布局组件")]),this._v(" "),s("li",[this._v("store")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"store-更新说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#store-更新说明","aria-hidden":"true"}},[this._v("#")]),this._v(" store 更新说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826162820.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://qiniucdn.fairyever.com/20180826163056.png?imageMogr2/auto-orient/thumbnail/1480x/blur/1x0/quality/100%7Cimageslim",alt:""}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mapActions "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token function"}},[t._v("mapActions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'d2adminLogin'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("submit")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("d2adminLogin")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        password"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mapActions "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token function"}},[t._v("mapActions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'d2admin/account'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v("'login'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("submit")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("login")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vm"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        username"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        password"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("规律")]),t._v(" "),a("p",[t._v("在调用 vuex D2Admin 系统模块时，无论是直接操作还是使用：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("mapState")])]),t._v(" "),a("li",[a("code",[t._v("mapActions")])]),t._v(" "),a("li",[a("code",[t._v("mapMutations")])])]),t._v(" "),a("p",[t._v("都要注意现在的方法和数据都根据功能模块化了，如果您之前业务代码中使用了相关的数据和方法，请注意。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据持久化更新说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化更新说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据持久化更新说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"需要帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要帮助","aria-hidden":"true"}},[this._v("#")]),this._v(" 需要帮助")])}],!1,null,null,null);e.options.__file="ice-1.2.6-to-1.2.7.md";s.default=e.exports}}]);