(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=r,f=u["".concat(i,".").concat(b)]||u[b]||m[b]||c;return n?o.a.createElement(f,a(a({ref:t},p),{},{components:n})):o.a.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),c=(n(0),n(263)),i={},a={unversionedId:"cli-references/vela_completion",id:"cli-references/vela_completion",isDocsHomePage:!1,title:"vela_completion",description:"vela completion",source:"@site/docs/cli-references/vela_completion.md",slug:"/cli-references/vela_completion",permalink:"/docs/next/cli-references/vela_completion",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cli-references/vela_completion.md",version:"current"},l=[{value:"vela completion",id:"vela-completion",children:[{value:"Synopsis",id:"synopsis",children:[]},{value:"Options",id:"options",children:[]},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"vela-completion"},"vela completion"),Object(c.b)("p",null,"Output shell completion code for the specified shell (bash or zsh)"),Object(c.b)("h3",{id:"synopsis"},"Synopsis"),Object(c.b)("p",null,"Output shell completion code for the specified shell (bash or zsh).\nThe shell code must be evaluated to provide interactive completion\nof vela commands."),Object(c.b)("h3",{id:"options"},"Options"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -h, --help   help for completion\n")),Object(c.b)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"  -e, --env string   specify environment name for application\n")),Object(c.b)("h3",{id:"see-also"},"SEE ALSO"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/cli-references/vela"},"vela"),"\t - "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/cli-references/vela_completion_bash"},"vela completion bash"),"\t - generate autocompletions script for bash"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/docs/next/cli-references/vela_completion_zsh"},"vela completion zsh"),"\t - generate autocompletions script for zsh")),Object(c.b)("h6",{id:"auto-generated-by-spf13cobra-on-20-mar-2021"},"Auto generated by spf13/cobra on 20-Mar-2021"))}s.isMDXComponent=!0}}]);