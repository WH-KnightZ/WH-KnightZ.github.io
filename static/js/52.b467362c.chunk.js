(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[52],{1036:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c(1),i=c(29),a=c(32),r=function(e){var t=e.label,c=e.your_topics,n=e.saveSetting,i=e.data;return Object(s.jsxs)("div",{className:"hb-categories-wrapper",children:[Object(s.jsx)("div",{className:"label",children:t}),Object(s.jsx)("div",{className:"items-wrapper",children:i.map((function(e,t){return Object(s.jsx)("div",{className:"item".concat(Object(a.p)(c,e)?" active":""),onClick:function(){return n(e)},children:e.name},t)}))})]})},l=function(e){var t=e.your_topics,c=e.saveSetting;return Object(s.jsxs)("div",{className:"hb-my-categories-wrapper",children:[Object(s.jsx)("div",{className:"label",children:"Ihre Auswahl"}),Object(s.jsx)("div",{className:"items-wrapper",children:t.map((function(e,t){return Object(s.jsx)("div",{className:"item",onClick:function(){return c(e)},children:Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)("div",{style:{marginRight:10},children:e.name}),Object(s.jsx)("i",{className:"hb-icon-close"})]})},t)}))})]})},d=c(38),o=c(39),h=c(21),j=c(31),b=c(115),u=(c(632),c(135)),m=c(186);t.default=function(){var e=Object(h.c)(),t=Object(m.b)().callApi,c=Object(o.h)(),a=Object(h.d)((function(e){return e.auth.email})),p=j.i.get("has-back-".concat(a)),f=Object(h.d)((function(e){return e.newsfeed})),O=f.top_topics,x=f.top_search_keywords,v=f.your_topics;Object(n.useEffect)((function(){j.i.set("screen-".concat(a),j.i.get("screen-".concat(a))||"/newsfeed/select-category"),0===O.length&&t({method:"get",api:i.d.rest.getNewsfeedCategories(),loading:!0},(function(t){var c=t.data;t.status===d.c&&e(Object(u.e)(c))}))}),[]);var g=function(t){e(Object(u.f)(t))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"hb-wrapper",children:Object(s.jsxs)("div",{className:"hb-mx-20",children:[Object(s.jsx)("div",{className:"d-flex justify-content-between hb-my-28",children:Object(s.jsxs)(b.e,{style:{visibility:p?"visible":"hidden"},onClick:function(){e(Object(u.d)("Fake")),j.i.set("screen-".concat(a),"/newsfeed"),c.push("/newsfeed")},children:[Object(s.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]})}),Object(s.jsx)("h1",{style:{color:"white",textAlign:"center"},children:"Themenauswahl"}),Object(s.jsx)("div",{className:"hb-select-category-intro",children:Object(s.jsx)("p",{children:"Zeigen Sie uns hier, f\xfcr welche Themen Sie sich interessieren. Bitte w\xe4hlen Sie mindestens drei Themen aus."})}),Object(s.jsx)(b.m,{handleClick:function(){return c.push("/newsfeed/select-category/search")},readOnly:!0,placeholder:"Thema suchen",className:"hb-select-category-search"}),Object(s.jsxs)("div",{className:"row NewsfeedSelectCategory-content",children:[Object(s.jsxs)("div",{className:"col-md-8",children:[Object(s.jsx)(r,{label:"Top Themen",your_topics:v,saveSetting:g,data:O}),Object(s.jsx)(r,{label:"Meistgesucht",your_topics:v,saveSetting:g,data:x})]}),Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)(l,{your_topics:v,saveSetting:g})})]})]})}),Object(s.jsx)("div",{style:{marginTop:100},children:Object(s.jsx)("div",{className:"hb-start-newsfeed-wrapper",children:Object(s.jsx)(b.a,{style:{width:"100%",padding:"12px 0"},className:"hb-start-newsfeed",onClick:function(){t({method:"post",api:"/api/v1/newsfeed/starts",loading:!0,body:{keywords:v.map((function(e){return e.id}))}},(function(t){t.status===d.c&&(j.i.set("has-back-".concat(a),"ok"),e(Object(u.d)("Real")),j.i.set("screen-".concat(a),"/newsfeed"),c.push("/newsfeed"))}))},disabled:v.length<3,children:"Pflegemagazin erstellen"})})})]})}},632:function(e,t,c){}}]);
//# sourceMappingURL=52.b467362c.chunk.js.map