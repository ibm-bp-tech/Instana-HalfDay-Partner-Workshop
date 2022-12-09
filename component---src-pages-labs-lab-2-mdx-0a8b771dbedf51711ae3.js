"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8594],{207:function(e,a,t){t.r(a),t.d(a,{Title:function(){return o},_frontmatter:function(){return i},default:function(){return d}});var n=t(3366),l=(t(7294),t(4983)),r=t(4295),s=["components"],o=function(){return(0,l.kt)("span",null,"Lab 2 - Agent Troubleshooting ",(0,l.kt)("br",null))},i={},p={Title:o,_frontmatter:i},c=r.Z;function d(e){var a=e.components,t=(0,n.Z)(e,s);return(0,l.kt)(c,Object.assign({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"For this lab we will focus on Linux deployments of the Instana agent."),(0,l.kt)("h2",null,"Step 1:"),(0,l.kt)("p",null,"We will SSH into the machine that was provided to us. Agent logs are located at:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/instana/agent/data/log\n")),(0,l.kt)("p",null,"In the event that there is an issue, this would be where we would pull our logfiles. "),(0,l.kt)("p",null,"This is an important area to have knowledge of, as support will ask for these logs during troubleshooting sessions. "),(0,l.kt)("p",null,"It is also possible to download the logs in the UI if you have access to the UI."),(0,l.kt)("h2",null,"Step 2:"),(0,l.kt)("p",null,"To start agent debug logging, you will need to stop the agent."),(0,l.kt)("p",null,"Enter the following in your terminal window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent stop\n")),(0,l.kt)("p",null,"We can then validate that the service has stopped by entering:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent status\n")),(0,l.kt)("p",null,"Hint: type “q” to exit status command."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"35.06944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABIElEQVQoz32Sy26DMBBFjRKFRxLANhjbAQJS1LS0UldZ9ROaHf//Lbe6jpxN1S6OxiDPGV/L4vr1itPnAP/uYc8XGPMG032gszO0lpBSQWuNsiyR5zmKovjFfr9HmqYYxhHCzg66b9CcGnS+h7UzlO5xLBWKIg+bY0OSJBBC/IlUCqIqa8hawlkH7xyMadA0ClLWqKoKh8MhyFi32+2/QkWhdQ5tS8mDrutgrQ0RKYyVZFmG3W73jM5vDsuyHJvNBuP5DDHNM4wxAU6gkPDe+K9t2xCZkhg/3luUslJIVzghp8eTDcMA7z2cc08ojgnicO6t6zokkFIG8bIsEN/3O9Z1xe12C9JpmjCOYxCTvu+DgM1sjJVpCNePV3DEy/WKH780qKdHh5UVAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab2",title:"Lab2",src:"/Instana-HalfDay-Partner-Workshop/static/1ddaef1994309134f59cf3c8163a81e9/3cbba/2.3.png",srcSet:["/Instana-HalfDay-Partner-Workshop/static/1ddaef1994309134f59cf3c8163a81e9/7fc1e/2.3.png 288w","/Instana-HalfDay-Partner-Workshop/static/1ddaef1994309134f59cf3c8163a81e9/a5df1/2.3.png 576w","/Instana-HalfDay-Partner-Workshop/static/1ddaef1994309134f59cf3c8163a81e9/3cbba/2.3.png 1152w","/Instana-HalfDay-Partner-Workshop/static/1ddaef1994309134f59cf3c8163a81e9/b5909/2.3.png 1400w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("h2",null,"Step 3:"),(0,l.kt)("p",null,"Delete all of the files in /opt/instana/agent/data/log"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo rm *\n")),(0,l.kt)("p",null,"Check to make sure files are deleted."),(0,l.kt)("h2",null,"Step 4:"),(0,l.kt)("p",null,"To set the log level to debug, first browse to "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/instana/agent/etc\n")),(0,l.kt)("p",null,"We will be editing org.ops4j.pax.logging.cfg using the vi editor."),(0,l.kt)("p",null,"Note that a list of common vi commands are provided towards the end of this Lab Material. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo vi org.ops4j.pax.logging.cfg\n")),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"15.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAApUlEQVQI1z2OzQ7CIACD9yIqZtMwYDBg/hAZbNMDN9//XZbVQNRD035p0rRa5nkNYcQ0xS2lhDCOGKyFcw6cc7SUou97aK2LpJSo67pkY0zphBDFsyof4zotL9jLdVPaZEecFzjvsSdH7A4E6jumlCqDTdMUzgM/zl1W9Q6PNbkHXMu3O2W40RMmrfAcDLwUcO0ZVjDwriuP8xtKafHMjDEQQv7dBxUFXhlcPhToAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab2",title:"Lab2",src:"/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/3cbba/lab2.2.png",srcSet:["/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/7fc1e/lab2.2.png 288w","/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/a5df1/lab2.2.png 576w","/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/3cbba/lab2.2.png 1152w","/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/0b124/lab2.2.png 1728w","/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/4ea69/lab2.2.png 2304w","/Instana-HalfDay-Partner-Workshop/static/b1540ea51e60ea89975720f72869785d/9620d/lab2.2.png 3030w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"Now, change from INFO to DEBUG on the line seen below.\nCheck out vi commands if you are experiencing an issue."),(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABHUlEQVQoz42Ry27CMBBF+Q+EPQOFIHAISXg4CTERj0X//3vsW40pUKTSdHE1kyyO5lwPyFrPhwO4aQK3LeL+SPPyTVUFpTVGoxGUUr9mQGXpKc9BRRGoKPC9P+fPlOU/gHnuua5B223gupJLQfs94r+qijtZC9rtoOfzfqBerTyfTuC2DXEej2DnwF2H8fUSJ5/PUVmN+QF7Bx3oJPG0XotioM3mqVqW0FkGNZtBEUEx9153AxrjRU0eRdRElUXZOakhgqNynr8A314YOxRF5wLVNXTbQklfcu09AhZgkvwJe3QoajpNA2UZpqlBYgzYGOh70hR6uYReLPofxTrnq65DYavgGovPJMVlMsdq9oHhZAI9nd56lMuGw17lL0O/BfEG40vDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Lab2",title:"Lab2",src:"/Instana-HalfDay-Partner-Workshop/static/ae3cd7074091d72f3e312ea4d2446ec0/3cbba/lab2.3.png",srcSet:["/Instana-HalfDay-Partner-Workshop/static/ae3cd7074091d72f3e312ea4d2446ec0/7fc1e/lab2.3.png 288w","/Instana-HalfDay-Partner-Workshop/static/ae3cd7074091d72f3e312ea4d2446ec0/a5df1/lab2.3.png 576w","/Instana-HalfDay-Partner-Workshop/static/ae3cd7074091d72f3e312ea4d2446ec0/3cbba/lab2.3.png 1152w","/Instana-HalfDay-Partner-Workshop/static/ae3cd7074091d72f3e312ea4d2446ec0/0b124/lab2.3.png 1728w","/Instana-HalfDay-Partner-Workshop/static/ae3cd7074091d72f3e312ea4d2446ec0/85018/lab2.3.png 2252w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,l.kt)("p",null,"Once you have modified with the proper value, save your work."),(0,l.kt)("h2",null,"Step 5:"),(0,l.kt)("p",null,"Start the agent by entering the following line into the terminal window:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent start\n")),(0,l.kt)("p",null,"Validate that the service has started by entering:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo service instana-agent status\n")),(0,l.kt)("h2",null,"Step 6:"),(0,l.kt)("p",null,"Verify logging is now at Debug by viewing the"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/opt/instana/agent/data/log\n")),(0,l.kt)("p",null,"Feel free to revert the log level to INFO if you’d like."))}d.isMDXComponent=!0},4295:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(7294),l=t(8650),r=t.n(l),s=t(5444),o=t(5426),i=t(4311),p=t(5900),c=t.n(p),d=function(e){var a,t=e.title,l=e.theme,r=e.tabs,s=void 0===r?[]:r;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=s.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===l,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},g=function(e){var a=e.relativePagePath,t=e.repository,l=(0,s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=t||l,o=r.baseUrl,i=r.subDirectory,p=o+"/edit/"+r.branch+i+"/src/pages"+a;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},m=t(4275),u=t(1721),h=function(e){function a(){return e.apply(this,arguments)||this}return(0,u.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,l=e.slug,o=l.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),i=t===o,p=new RegExp(o+"/?(#.*)?$"),d=l.replace(p,t);return n.createElement("li",{key:e,className:c()((a={},a["PageTabs-module--selected-item--aBB0K"]=i,a),"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},a}(n.Component),b=h,f=t(2881),k=t(6958),A=t(36),y=function(e){var a=e.date,t=new Date(a);return a?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var a=e.pageContext,t=e.children,l=e.location,p=e.Title,c=a.frontmatter,u=void 0===c?{}:c,h=a.relativePagePath,A=a.titleType,w=u.tabs,v=u.title,N=u.theme,x=u.description,E=u.keywords,P=u.date,D=(0,k.Z)().interiorTheme,I=(0,s.useStaticQuery)("2456312558").site.pathPrefix,H=I?l.pathname.replace(I,""):l.pathname,B=w?H.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",W=N||D;return n.createElement(i.Z,{tabs:w,homepage:!1,theme:W,pageTitle:v,pageDescription:x,pageKeywords:E,titleType:A},n.createElement(d,{title:p?n.createElement(p,null):v,label:"label",tabs:w,theme:W}),w&&n.createElement(b,{title:v,slug:H,tabs:w,currentTab:B}),n.createElement(f.Z,{padded:!0},t,n.createElement(g,{relativePagePath:h}),n.createElement(y,{date:P})),n.createElement(m.Z,{pageContext:a,location:l,slug:H,tabs:w,currentTab:B}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-labs-lab-2-mdx-0a8b771dbedf51711ae3.js.map