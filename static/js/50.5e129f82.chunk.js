(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[50],{867:function(e,t,c){e.exports={searchArea:"MobilitySearch_searchArea__2-eLj",listSuggestItems:"MobilitySearch_listSuggestItems__3l84N",suggestItemWrapper:"MobilitySearch_suggestItemWrapper__2Mf14",suggestItemContent:"MobilitySearch_suggestItemContent__1SQkA"}},995:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c(3),r=c(16),i=c(1),a=c(29),l=c(38),o=c(39),h=c(115),d=c(867),u=c.n(d),b=c(186);t.default=function(){var e=Object(b.b)().callApi,t=Object(o.h)(),c=Object(i.useState)(""),d=Object(r.a)(c,2),j=d[0],f=d[1],m=Object(i.useState)([]),g=Object(r.a)(m,2),O=g[0],p=g[1],y=Object(i.useRef)(null),v=Object(i.useState)(!1),x=Object(r.a)(v,2),S=x[0],w=x[1],k=function(t){p(t?O.filter((function(e){return e.id!==t})):[]),e({loading:!1,method:"delete",api:t?a.d.rest.removeSearchHistoryKeyword(t):a.d.rest.removeAllSearchHistoryKeywords()},(function(e){}))},N=function(e){t.push("/mobility?search=".concat(e.keyword))},C={innerRef:y,clearBtn:!0,searchName:j,setSearchName:f,handleEnter:function(e){return N({id:"",keyword:e})}};Object(i.useEffect)((function(){y.current.focus(),e({method:"get",api:a.d.rest.getHistoriesKeywords("")},(function(e){var t=e.data;e.status===l.c&&p(t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{keyword:e.keyword.toLowerCase()})})))}))}),[]);var _=O.length>0&&!j;return Object(n.jsxs)("div",{children:[Object(n.jsx)(h.j,{show:S,handleClose:function(){return w(!1)},title:"Suchverlauf l\xf6schen",content:"Sind Sie sicher, dass Sie Ihren Suchverlauf vollst\xe4ndig l\xf6schen m\xf6chten?",up:"Ja, l\xf6schen",down:"Abbrechen",upCallback:function(){w(!1),k()},downCallback:function(){return w(!1)}}),Object(n.jsx)("div",{className:"hb-mx-20",children:Object(n.jsx)("div",{className:"d-flex justify-content-end hb-my-28",children:Object(n.jsxs)(h.e,{onClick:function(){return t.push("/mobility")},children:[Object(n.jsx)("i",{className:"hb-icon-cross hb-icon-lg"})," Schlie\xdfen"]})})}),Object(n.jsx)("div",{className:"hb-card",children:Object(n.jsxs)("div",{className:"hb-margin-30 ".concat(u.a.searchArea),children:[Object(n.jsx)(h.m,Object(s.a)(Object(s.a)({},C),{},{placeholder:"Suchbegriff"})),Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"hb-select-category-title d-flex justify-content-between",children:[_?"Zuletzt gesucht":"Suchergebnisse",Object(n.jsx)(h.e,{style:{visibility:_?"visible":"hidden"},onClick:function(){return w(!0)},children:"Verlauf l\xf6schen"})]}),Object(n.jsx)("div",{className:"hb-select-category-search-suggestion",children:Object(n.jsx)("div",{className:"violet hb-scroll ".concat(u.a.listSuggestItems),children:function(){var e=j.toLowerCase(),t=O.filter((function(t){return t.keyword.includes(e)})).slice(0,10);return 0===t.length?Object(n.jsx)("div",{className:"search-group-item disabled",children:"-"}):t.map((function(c,s){var r=[];return e&&(c.keyword.split(e).forEach((function(t){r.push(Object(n.jsx)("span",{style:{whiteSpace:"pre"},children:t},Math.random())),r.push(Object(n.jsx)("span",{style:{whiteSpace:"pre",color:"var(--violet-80)"},children:e},Math.random()))})),r.splice(r.length-1,1)),Object(n.jsxs)("div",{className:"search-group-item d-flex align-items-center justify-content-between ".concat(u.a.suggestItemWrapper),style:s===t.length-1?{border:"none"}:{},children:[Object(n.jsxs)("div",{className:"d-flex align-items-center ".concat(u.a.suggestItemContent),onClick:function(){return N(c)},children:[Object(n.jsx)("i",{className:"hb-icon-zoom-in hb-select-category-icon-search"}),r.length>0?r:c.keyword]}),Object(n.jsx)(h.d,{circle:{color:"#d3d4d5",size:24},icon:"cross",size:18,color:"var(--violet-100)",onClick:function(e){return k(c.id)},iconStyle:{fontWeight:"bold"}})]},c.id)}))}()})})]})]})})]})}}}]);
//# sourceMappingURL=50.5e129f82.chunk.js.map