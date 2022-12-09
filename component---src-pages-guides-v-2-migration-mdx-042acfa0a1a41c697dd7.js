"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1824],{7470:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return u}});var n=a(3366),r=(a(7294),a(4983)),i=a(4295),o=["components"],l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},m=s("PageDescription"),p=s("InlineNotification"),c={_frontmatter:l},d=i.Z;function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"title: V2.0 Migration\ndescription: Guide for migrating to v2.0 of the theme"),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Earlier this year, Gatsby released ",(0,r.kt)("inlineCode",{parentName:"p"},"v3")," of their library. This update introduces\nseveral big improvements to Gatsby sites including incremental builds, fast\nrefresh, and image processing. The major version change comes with the potential\nfor breaking changes, this guide aims to cover the most likely issues a site\nbuilt with the Carbon Gatsby theme might encounter.")),(0,r.kt)("h2",null,"Breaking Changes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bumped minimum version of Gatsby to ",(0,r.kt)("inlineCode",{parentName:"li"},"v3")),(0,r.kt)("li",{parentName:"ol"},"Removed the ",(0,r.kt)("inlineCode",{parentName:"li"},"emotion")," theme provider and its dependenices.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This impacts sites styling their project using ",(0,r.kt)("inlineCode",{parentName:"li"},"emotion")," and depending on\ntheme values supplied by the theme"),(0,r.kt)("li",{parentName:"ul"},"If this applies to your project, you can recreate the theme’s emotion\nintegration installing ",(0,r.kt)("inlineCode",{parentName:"li"},"emotion")," and replicating the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/857abf691590d86b9384a8f35256e8f54fad299e/packages/gatsby-theme-carbon/src/components/ThemeProvider.js"},(0,r.kt)("inlineCode",{parentName:"a"},"ThemeProvider")),"\ncomponent and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/gatsby-theme-carbon/src/util/theme.js"},(0,r.kt)("inlineCode",{parentName:"a"},"theme.js")),".\nFinally, you’ll want to shadow\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/857abf691590d86b9384a8f35256e8f54fad299e/packages/gatsby-theme-carbon/src/util/wrap-root-element.js#L1"},(0,r.kt)("inlineCode",{parentName:"a"},"wrap-root-element.js")),"\nto add back the ",(0,r.kt)("inlineCode",{parentName:"li"},"ThemeProvider")," wrapper.")))),(0,r.kt)("h2",null,"Migration guide"),(0,r.kt)("p",null,"In this section we’ll cover the most likely issues site’s built with the Carbon\ngatsby theme might encounter when migrating. If you encounter any issues, or\nyour site leverages more advanced gatsby configuration, check to see if it’s\ncovered in the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/"},"official Gatsby v3 migration guide"),"."),(0,r.kt)(p,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"Note: We’ll use yarn for the shell commands here. Replace them with the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm"),"\nequivalent if your project uses ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," as its package manager.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update Gatsby"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"yarn add gatsby@latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update gatsby plugins (including the theme)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"yarn upgrade-interactive --latest\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check to see if you’re using ",(0,r.kt)("inlineCode",{parentName:"p"},"sizes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"resolutions")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby-image"),". Do\na project wide search for ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby-image"),". Check to make sure that you’re not\nusing these\n",(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#removal-of-sizes--resolutions-for-image-queries"},"deprecated props"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check your Sass (and potentially JSON) to ensure they’re imported as ES\nModules. “Default exports” are no longer supported."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"path=Before",path:"Before"},"import styles from './MySpan.module.scss';\nimport metadata from './metadata.json';\n\nconst MySpan = () => <span className={styles.mySpan} />;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"path=After",path:"After"},"import { mySpan } from './MySpan.module.scss';\n// Or import * as styles from './MySpan.module.scss'\n\nimport * as metadata from './metadata.json';\n\nconst MySpan = () => <span className={mySpan} />;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure to update the path of your shadowed components (Footer and Header). "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a folder each for ",(0,r.kt)("inlineCode",{parentName:"li"},"Footer")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Header"),"."),(0,r.kt)("li",{parentName:"ul"},"Change the file name to ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," inside each corresponding folder. More info can be found in the ",(0,r.kt)("a",{parentName:"li",href:"https://gatsby-theme-carbon.vercel.app/guides/shadowing/#shadowing-basics"},"shadowing docs")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you have a custom webpack config, be sure your config is compatible with ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/migrate/5/"},"Webpack 5")," (the version Gatsby 3 uses)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx gatsby clean")," to delete your projects development bundle")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn dev")))),(0,r.kt)("h2",null,"Troubleshooting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try deleting your node_modules, running ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn cache clean")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn install"),"\n(or ",(0,r.kt)("inlineCode",{parentName:"li"},"npm cache clean --force")," and npm install)"),(0,r.kt)("li",{parentName:"ul"},"Feel free to reach out in the #gatsby-theme-carbon slack channel or open an\nissue on GitHub")))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7294),r=a(8650),i=a.n(r),o=a(5444),l=a(5426),s=a(4311),m=a(5900),p=a.n(m),c=function(e){var t,a=e.title,r=e.theme,i=e.tabs,o=void 0===i?[]:i;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||r,l=i.baseUrl,s=i.subDirectory,m=l+"/edit/"+i.branch+s+"/src/pages"+t;return l?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,l=r.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,m=new RegExp(l+"/?(#.*)?$"),c=r.replace(m,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component),k=g,b=a(2881),f=a(6958),N=a(36),y=function(e){var t=e.date,a=new Date(t);return t?n.createElement(N.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(N.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},v=function(e){var t=e.pageContext,a=e.children,r=e.location,m=e.Title,p=t.frontmatter,h=void 0===p?{}:p,g=t.relativePagePath,N=t.titleType,v=h.tabs,w=h.title,C=h.theme,E=h.description,x=h.keywords,P=h.date,T=(0,f.Z)().interiorTheme,j=(0,o.useStaticQuery)("2456312558").site.pathPrefix,S=j?r.pathname.replace(j,""):r.pathname,M=v?S.split("/").filter(Boolean).slice(-1)[0]||i()(v[0],{lower:!0}):"",D=C||T;return n.createElement(s.Z,{tabs:v,homepage:!1,theme:D,pageTitle:w,pageDescription:E,pageKeywords:x,titleType:N},n.createElement(c,{title:m?n.createElement(m,null):w,label:"label",tabs:v,theme:D}),v&&n.createElement(k,{title:w,slug:S,tabs:v,currentTab:M}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(y,{date:P})),n.createElement(u.Z,{pageContext:t,location:r,slug:S,tabs:v,currentTab:M}),n.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-v-2-migration-mdx-042acfa0a1a41c697dd7.js.map