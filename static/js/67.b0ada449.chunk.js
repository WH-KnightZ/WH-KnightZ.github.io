(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[67],{1042:function(e,t,s){"use strict";s.r(t);var i=s(3),c=s(7),a=s(47),n=s(16),l=s(1),r=s(20),d=s(39),j=s(38),o=s(19),b=s(78),h=s.n(b),m=function(e){var t=e.title,s=e.host_name,c=e.description,a=e.id,n=e.amount_viewers,l=(e.created_date,e.start_date),r=e.diseases,d=a?s:"HerzBegleiter",j=c,b=h()(1e3*l).format("h:mm | MMMM D, YYYY"),m=r,u="",O="";d.length>15&&(u=(null===d||void 0===d?void 0:d.slice(0,12))+"..."),j.length>200&&(O=j.slice(0,198)+"...");var x=Object(i.jsxs)("div",{className:"webinar-consulting",children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("div",{className:"title",children:[Object(i.jsx)("div",{className:"title-name",children:t}),Object(i.jsxs)("div",{className:"nurse-name",children:["Nurse: ",u||d]})]}),Object(i.jsxs)("div",{className:"views-amount",children:[Object(i.jsx)("i",{className:"far fa-user"})," ",Object(i.jsx)("span",{style:{marginLeft:8},children:n})]})]}),Object(i.jsx)("div",{className:"sub-header",children:Object(i.jsx)("p",{children:b})}),Object(i.jsx)("div",{className:"content",children:Object(i.jsx)("p",{children:O||j})}),Object(i.jsxs)("div",{className:"diseases",children:[0===m.length?Object(i.jsx)("div",{children:"No diseases"}):m.length>2?[].map((function(e){return Object(i.jsxs)(o.d,{color:"primary",className:"diseases-item--block",onClick:function(){console.log("123")},children:[Object(i.jsx)(o.t,{src:e.thumbnail,width:"20",height:"20"}),Object(i.jsxs)("div",{className:"treatment-item--title",children:[e.diseases_title," "]})]},e.id)})):m.map((function(e){return Object(i.jsxs)(o.d,{color:"primary",className:"diseases-item--block",onClick:function(){console.log("123")},children:[Object(i.jsx)(o.t,{src:e.thumbnail,width:"20",height:"20"}),Object(i.jsxs)("div",{className:"treatment-item--title",children:[e.diseases_title," "]})]},e.id)})),m.length>2&&Object(i.jsx)("div",{children:"...."})]})]});return Object(i.jsx)("div",{style:{padding:"4px 3px"},title:d,children:Object(i.jsx)("div",{className:"webinar-consulting-wrapper",style:{margin:"".concat(a?"0":"1px"," 0.4rem 0 0.4rem")},children:x})})},u=s(192),O=s(31),x=s(614),v=s(29);t.default=function(e){var t=Object(r.c)(),s=Object(d.h)(),b=Object(l.useState)({data:[],loading:!0,full:!1,page:0}),h=Object(n.a)(b,2),g=h[0],f=h[1],p=function(e,s){var i,c;i={method:"get",api:v.d.rest.getAllWebinars(e,s,10),loading:1===s},c=function(e){var t=e.data;e.status===j.c&&f((function(e){return{data:1===s?t.webinars:[].concat(Object(a.a)(e.data),Object(a.a)(t.webinars)),full:t.length<10,loading:!1,page:s}}))},t(Object(j.d)(i,c))};Object(l.useEffect)((function(){p("live",1)}),[]);return Object(i.jsx)("div",{className:"webinar-main-page",children:Object(i.jsxs)(o.k,{children:[Object(i.jsxs)("div",{className:"d-flex justify-content-between p-4 mb-3",children:[Object(i.jsx)("h3",{children:"Webinars"}),Object(i.jsx)("i",{className:"fas fa-plus-circle btn-icon",onClick:function(){return s.push("/consulting/schedule-webinar")}})]}),Object(i.jsx)(o.I,{children:g.data.map((function(e,t){return Object(i.jsx)(o.j,{md:4,children:Object(i.jsx)(m,{title:e.title,host_name:e.host_name,description:e.description,amount_viewers:e.amount_viewers,id:e.id,start_date:e.start_date,created_date:e.created_date,diseases:e.diseases},t)})}))}),0!==g.page&&g.loading&&Object(i.jsx)(x.a,{size:"large",render:O.g}),Object(i.jsx)(u.a,{onEnter:function(){g.loading||g.full||(f(Object(c.a)(Object(c.a)({},g),{},{loading:!0})),p("live",g.page+1))}})]})})}},614:function(e,t,s){"use strict";var i=s(3),c=(s(1),{large:80,medium:48,small:36});t.a=function(e){var t=e.size,s=e.render;return Object(i.jsx)("div",{className:"video-comments--comment",children:Object(i.jsx)("div",{style:{width:"100%",height:c[t]},children:s})})}}}]);
//# sourceMappingURL=67.b0ada449.chunk.js.map