(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{258:function(e,t,n){"use strict";n.r(t);var a=n(294),r=n(295),c=n.n(r),u=n(0),o=n.n(u),s=n(16),l=n(272),i=n(26),f=n(267),m=n(24),d=n(8);var h=function(){var e=Object(m.useHistory)(),t=Object(m.useLocation)(),n=Object(s.default)().siteConfig.baseUrl;return{searchValue:d.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(311),_=n(326),b=n(296),g=n(327),O=n(313),j=n(314),E=n(274);function w(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var v=n(95),S=n.n(v);function y(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,u=t.metadata,s=0===a,l=2===a,i=(s?n.b:r.b).slice(),m=l?n.s:n.t;return s||i.push(r.t),o.a.createElement("article",{className:S.a.searchResultItem},o.a.createElement("h2",null,o.a.createElement(f.a,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:l?Object(b.a)(m,c):Object(g.a)(m,Object(O.a)(u,"t"),c,100)}})),i.length>0&&o.a.createElement("p",{className:S.a.searchResultItemPath},i.join(" \u203a ")),l&&o.a.createElement("p",{className:S.a.searchResultItemSummary,dangerouslySetInnerHTML:{__html:Object(g.a)(n.t,Object(O.a)(u,"t"),c,100)}}))}t.default=function(){var e=Object(s.default)().siteConfig.baseUrl,t=h(),n=t.searchValue,r=t.updateSearchPath,f=Object(u.useState)(n),m=f[0],d=f[1],b=Object(u.useState)(),g=b[0],O=b[1],v=Object(u.useState)(),k=v[0],I=v[1],R=Object(u.useMemo)((function(){return m?w(E.g.search_results_for,{keyword:m}):E.g.search_the_documentation}),[m]);Object(u.useEffect)((function(){r(m),g&&(m?g(m,(function(e){I(e)})):I(void 0))}),[m,g]);var L=Object(u.useCallback)((function(e){d(e.target.value)}),[]);return Object(u.useEffect)((function(){n&&n!==m&&d(n)}),[n]),Object(u.useEffect)((function(){function t(){return(t=Object(a.a)(c.a.mark((function t(){var n,a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(p.a)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,O((function(){return Object(_.a)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),o.a.createElement(l.a,{title:R},o.a.createElement(i.a,null,o.a.createElement("meta",{property:"robots",content:"noindex, follow"})),o.a.createElement("div",{className:"container margin-vert--lg"},o.a.createElement("h1",null,R),o.a.createElement("form",null,o.a.createElement("input",{type:"search",name:"q",className:S.a.searchQueryInput,"aria-label":"Search",onChange:L,value:m,autoComplete:"off",autoFocus:!0})),!g&&m&&o.a.createElement("div",null,o.a.createElement(j.a,null)),k&&(k.length>0?o.a.createElement("p",null,w(1===k.length?E.g.count_documents_found:E.g.count_documents_found_plural,{count:k.length})):o.a.createElement("p",null,E.g.no_documents_were_found)),o.a.createElement("section",null,k&&k.map((function(e){return o.a.createElement(y,{key:e.document.i,searchResult:e})})))))}},270:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return f}));var a=n(268),r=n.n(a);n(275)(r.a),n(277).lunrLanguageZh(r.a),n(276)(r.a);var c=["en","zh"],u=!1,o=null,s="92a947e9",l=8,i=50,f={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}}}]);