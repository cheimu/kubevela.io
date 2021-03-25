(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(272),o=a(293),s=a(267),i=a(279),c=a(266),u=a(265);function m(e){var t,a=e.tagName,r=e.count,l=(t=Object(u.usePluralForm)().selectMessage,function(e){return t(e,Object(c.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return n.a.createElement(c.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:l(r),tagName:a}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){var t=e.metadata,a=e.items,r=e.sidebar,u=t.allTagsPath,p=t.name,d=t.count;return n.a.createElement(l.a,{title:'Posts tagged "'+p+'"',description:'Blog | Tagged "'+p+'"',wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(i.a,{sidebar:r})),n.a.createElement("main",{className:"col col--7"},n.a.createElement("h1",null,n.a.createElement(m,{count:d,tagName:p})),n.a.createElement(s.a,{href:u},n.a.createElement(c.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),n.a.createElement("div",{className:"margin-vert--xl"},a.map((function(e){var t=e.content;return n.a.createElement(o.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},n.a.createElement(t,null))})))))))}},263:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return a?n.a.createElement(g,s(s({ref:t},c),{},{components:a})):n.a.createElement(g,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r),l=a(264),o=a(267),s=a(56),i=a.n(s);function c(e){var t=e.sidebar;return 0===t.items.length?null:n.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:i.a.sidebarItemTitle},t.title),n.a.createElement("ul",{className:i.a.sidebarItemList},t.items.map((function(e){return n.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},n.a.createElement(o.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))}))))}},281:function(e,t,a){"use strict";function r(e,{target:t=document.body}={}){const a=document.createElement("textarea"),r=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const n=document.getSelection();let l=!1;n.rangeCount>0&&(l=n.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}return a.remove(),l&&(n.removeAllRanges(),n.addRange(l)),r&&r.focus(),o}a.d(t,"a",(function(){return r}))},282:function(e,t){function a(e){let t,a=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))a.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,n,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==n&&".."!==n&&"\u2025"!==n||(l+=e);for(let t=r;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},285:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(267),o=a(280),s=a(7),i=a(264),c=a(266),u=a(265),m=(a(58),a(59)),p=a.n(m),d=function(e){return function(t){var a,r=t.id,l=Object(s.a)(t,["id"]),o=Object(u.useThemeConfig)().navbar.hideOnScroll;return r?n.a.createElement(e,l,n.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(i.a)("anchor",(a={},a[p.a.enhancedAnchor]=!o,a)),id:r}),l.children,n.a.createElement("a",{className:"hash-link",href:"#"+r,title:Object(c.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.a.createElement(e,l)}},g={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?n.a.createElement(o.a,e):n.a.createElement("code",e):t},a:function(e){return n.a.createElement(l.a,e)},pre:function(e){var t=e.children;return n.a.createElement(o.a,Object(r.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=g},286:function(e,t,a){"use strict";var r={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},n=a(290),l=a(265);t.a=function(){var e=Object(l.useThemeConfig)().prism,t=Object(n.a)().isDarkTheme,a=e.theme||r,o=e.darkTheme||a;return t?o:a}},287:function(e,t,a){"use strict";a.d(t,"b",(function(){return o}));var r=a(23),n={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=a(0),o={Prism:r.a,theme:n};function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},p=function(e,t){var a=e.plain,r=Object.create(null),n=e.styles.reduce((function(e,a){var r=a.languages,n=a.style;return r&&!r.includes(t)||a.types.forEach((function(t){var a=i({},e[t],n);e[t]=a})),e}),r);return n.root=a,n.plain=i({},a,{backgroundColor:null}),n};function d(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(a[r]=e[r]);return a}var g=function(e){function t(){for(var t=this,a=[],r=arguments.length;r--;)a[r]=arguments[r];e.apply(this,a),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?p(e.theme,e.language):void 0;return t.themeDict=a})),s(this,"getLineProps",(function(e){var a=e.key,r=e.className,n=e.style,l=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==n&&(l.style=void 0!==l.style?i({},l.style,n):n),void 0!==a&&(l.key=a),r&&(l.className+=" "+r),l})),s(this,"getStyleForToken",(function(e){var a=e.types,r=e.empty,n=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===n&&"plain"===a[0])return r?{display:"inline-block"}:void 0;if(1===n&&!r)return l[a[0]];var o=r?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),s(this,"getTokenProps",(function(e){var a=e.key,r=e.className,n=e.style,l=e.token,o=i({},d(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==n&&(o.style=void 0!==o.style?i({},o.style,n):n),void 0!==a&&(o.key=a),r&&(o.className+=" "+r),o})),s(this,"tokenize",(function(e,t,a,r){var n={code:t,grammar:a,language:r,tokens:[]};e.hooks.run("before-tokenize",n);var l=n.tokens=e.tokenize(n.code,n.grammar,n.language);return e.hooks.run("after-tokenize",n),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,r=e.code,n=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return n({tokens:function(e){for(var t=[[]],a=[e],r=[0],n=[e.length],l=0,o=0,s=[],i=[s];o>-1;){for(;(l=r[o]++)<n[o];){var p=void 0,d=t[o],g=a[o][l];if("string"==typeof g?(d=o>0?d:["plain"],p=g):(d=m(d,g.type),g.alias&&(d=m(d,g.alias)),p=g.content),"string"==typeof p){var y=p.split(c),f=y.length;s.push({types:d,content:y[0]});for(var h=1;h<f;h++)u(s),i.push(s=[]),s.push({types:d,content:y[h]})}else o++,t.push(d),a.push(p),r.push(0),n.push(p.length)}o--,t.pop(),a.pop(),r.pop(),n.pop()}return u(s),i}(void 0!==o?this.tokenize(t,r,o,a):[r]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component);t.a=g},293:function(e,t,a){"use strict";var r=a(0),n=a.n(r),l=a(264),o=a(263),s=a(266),i=a(267),c=a(285),u=a(292),m=a(61),p=a.n(m),d=a(265);t.a=function(e){var t,a,r=(t=Object(d.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,Object(s.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),m=e.children,g=e.frontMatter,y=e.metadata,f=e.truncated,h=e.isBlogPostPage,b=void 0!==h&&h,v=y.date,E=y.formattedDate,k=y.permalink,O=y.tags,N=y.readingTime,T=g.author,w=g.title,j=g.image,P=g.keywords,_=g.author_url||g.authorURL,x=g.author_title||g.authorTitle,D=g.author_image_url||g.authorImageURL;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{keywords:P,image:j}),n.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(a=b?"h1":"h2",n.a.createElement("header",null,n.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",p.a.blogPostTitle)},b?w:n.a.createElement(i.a,{to:k},w)),n.a.createElement("div",{className:"margin-vert--md"},n.a.createElement("time",{dateTime:v,className:p.a.blogPostDate},E,N&&n.a.createElement(n.a.Fragment,null," \xb7 ",r(N)))),n.a.createElement("div",{className:"avatar margin-vert--md"},D&&n.a.createElement(i.a,{className:"avatar__photo-link avatar__photo",href:_},n.a.createElement("img",{src:D,alt:T})),n.a.createElement("div",{className:"avatar__intro"},T&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement(i.a,{href:_},T)),n.a.createElement("small",{className:"avatar__subtitle"},x)))))),n.a.createElement("div",{className:"markdown"},n.a.createElement(o.a,{components:c.a},m)),(O.length>0||f)&&n.a.createElement("footer",{className:"row margin-vert--lg"},O.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,n.a.createElement(s.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),O.map((function(e){var t=e.label,a=e.permalink;return n.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),f&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(i.a,{to:y.permalink,"aria-label":"Read more about "+w},n.a.createElement("strong",null,n.a.createElement(s.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);