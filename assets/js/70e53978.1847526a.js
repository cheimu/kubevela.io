(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{151:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),i=(t(0),t(263)),a={title:"Setting Up Deployment Environment"},c={unversionedId:"developer-experience-guide/cli/config-enviroments",id:"developer-experience-guide/cli/config-enviroments",isDocsHomePage:!1,title:"Setting Up Deployment Environment",description:"A deployment environment is where you could configure the workspace, email for certificate issuer and domain for your applications globally. A typical set of deployment environment is test, staging, prod, etc.",source:"@site/docs/developer-experience-guide/cli/config-enviroments.md",slug:"/developer-experience-guide/cli/config-enviroments",permalink:"/docs/next/developer-experience-guide/cli/config-enviroments",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/developer-experience-guide/cli/config-enviroments.md",version:"current",sidebar:"docs",previous:{title:"Managing Capabilities",permalink:"/docs/next/developer-experience-guide/cli/cap-center"},next:{title:"Configuring Data/Env in Application",permalink:"/docs/next/developer-experience-guide/cli/config-app"}},l=[{value:"Create environment",id:"create-environment",children:[]},{value:"Check the deployment environment metadata",id:"check-the-deployment-environment-metadata",children:[]},{value:"Configure changes",id:"configure-changes",children:[]},{value:"Optional Configure Domain if you have public IP",id:"optional-configure-domain-if-you-have-public-ip",children:[{value:"Using domain in Appfile",id:"using-domain-in-appfile",children:[]}]}],p={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A deployment environment is where you could configure the workspace, email for certificate issuer and domain for your applications globally. A typical set of deployment environment is ",Object(i.b)("inlineCode",{parentName:"p"},"test"),", ",Object(i.b)("inlineCode",{parentName:"p"},"staging"),", ",Object(i.b)("inlineCode",{parentName:"p"},"prod"),", etc."),Object(i.b)("h2",{id:"create-environment"},"Create environment"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --email my@email.com\nenvironment demo created, Namespace: default, Email: my@email.com\n")),Object(i.b)("h2",{id:"check-the-deployment-environment-metadata"},"Check the deployment environment metadata"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env ls\nNAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       default     my@email.com\n")),Object(i.b)("p",null,"By default, the environment will use ",Object(i.b)("inlineCode",{parentName:"p"},"default")," namespace in K8s."),Object(i.b)("h2",{id:"configure-changes"},"Configure changes"),Object(i.b)("p",null,"You could change the config by executing the environment again."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --namespace demo\nenvironment demo created, Namespace: demo, Email: my@email.com\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env ls\nNAME    CURRENT NAMESPACE   EMAIL                   DOMAIN\ndefault         default     \ndemo    *       demo        my@email.com\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note that the created apps won't be affected, only newly created apps will use the updated info.")),Object(i.b)("h2",{id:"optional-configure-domain-if-you-have-public-ip"},"[Optional]"," Configure Domain if you have public IP"),Object(i.b)("p",null,"If your K8s cluster is provisioned by cloud provider and has public IP for ingress.\nYou could configure your domain in the environment, then you'll be able to visit\nyour app by this domain with an mTLS supported automatically."),Object(i.b)("p",null,"For example, you could get the public IP from ingress service.  "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get svc -A | grep LoadBalancer\nNAME                         TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                      AGE\nnginx-ingress-lb             LoadBalancer   172.21.2.174    123.57.10.233   80:32740/TCP,443:32086/TCP   41d\n")),Object(i.b)("p",null,"The fourth column is public IP. Configure 'A' record for your custom domain."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"*.your.domain => 123.57.10.233\n")),Object(i.b)("p",null,"You could also use ",Object(i.b)("inlineCode",{parentName:"p"},"123.57.10.233.xip.io")," as your domain, if you don't have a custom one.\n",Object(i.b)("inlineCode",{parentName:"p"},"xip.io")," will automatically route to the prefix IP ",Object(i.b)("inlineCode",{parentName:"p"},"123.57.10.233"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ vela env init demo --domain 123.57.10.233.xip.io\nenvironment demo updated, Namespace: demo, Email: my@email.com\n")),Object(i.b)("h3",{id:"using-domain-in-appfile"},"Using domain in Appfile"),Object(i.b)("p",null,"Since you now have domain configured globally in deployment environment, you don't need to specify the domain in route configuration anymore."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# in demo environment\nservcies:\n  express-server:\n    ...\n\n    route:\n      rules:\n        - path: /testapp\n          rewriteTarget: /\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ curl http://123.57.10.233.xip.io/testapp\nHello World\n")))}u.isMDXComponent=!0},263:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=u(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),s=o,b=m["".concat(a,".").concat(s)]||m[s]||d[s]||i;return t?r.a.createElement(b,c(c({ref:n},p),{},{components:t})):r.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);