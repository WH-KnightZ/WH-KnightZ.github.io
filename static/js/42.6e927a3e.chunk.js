(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[42],{632:function(e,c,t){},672:function(e,c,t){"use strict";var s=t(3);t(1);c.a=function(e){var c=e.children;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"hb-ellipse",children:Object(s.jsx)("div",{className:"hb-ellipse-children"})}),Object(s.jsx)("div",{className:"hb-wrapper",children:c})]})}},991:function(e,c,t){"use strict";t.r(c);var s=t(7),n=t(3),i=t(16),a=t(1),r=t(29),l=t(38),b=t(39),h=t(21),j=t(115),d=t(135),o=(t(632),t(672)),u=t(32),f=t(186);c.default=function(){var e=Object(h.c)(),c=Object(f.b)().callApi,t=Object(b.h)(),m=Object(a.useState)(""),O=Object(i.a)(m,2),g=O[0],x=O[1],p=Object(a.useState)([]),v=Object(i.a)(p,2),N=v[0],y=v[1],S=Object(a.useRef)(null),w=Object(h.d)((function(e){return e.newsfeed})).your_topics,k={innerRef:S,clearBtn:!0,searchName:g,setSearchName:x,callbackSearch:function(e){c({method:"get",api:r.d.rest.getNewsfeedSearch(e)},(function(e){var c=e.data;e.status===l.c&&g.trim()&&y(c.categories.filter((function(e){return!Object(u.p)(w,e)})))}))},callbackEmpty:function(){return y([])}};return Object(a.useEffect)((function(){S.current.focus()}),[]),Object(n.jsx)(o.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"hb-mx-20",children:Object(n.jsx)("div",{className:"d-flex justify-content-end hb-my-28",children:Object(n.jsxs)(j.e,{onClick:function(){return t.push("/newsfeed/select-category")},children:[Object(n.jsx)("i",{className:"hb-icon-cross hb-icon-lg"})," Schlie\xdfen"]})})}),Object(n.jsx)("div",{className:"hb-card",children:Object(n.jsxs)("div",{className:"hb-margin-30",style:{marginBottom:12},children:[Object(n.jsx)(j.m,Object(s.a)(Object(s.a)({},k),{},{placeholder:"Suchbegriff"})),Object(n.jsx)("div",{className:"hb-select-category-title",children:"Suchergebnisse"}),Object(n.jsx)("div",{className:"hb-select-category-search-suggestion",children:Object(n.jsx)("div",{className:"hb-scroll",style:{maxHeight:320,marginRight:-10,paddingRight:5},children:0===N.length?Object(n.jsx)("div",{className:"search-group-item disabled",children:"-"}):N.map((function(c,s){return Object(n.jsxs)("div",{className:"search-group-item",style:s===N.length-1?{border:"none"}:{},onClick:function(){return function(c){e(Object(d.f)(c)),t.push("/newsfeed/select-category")}(c)},children:[Object(n.jsx)("i",{className:"hb-icon-zoom-in hb-select-category-icon-search"}),c.name]},c.id)}))})})]})})]})})}}}]);
//# sourceMappingURL=42.6e927a3e.chunk.js.map