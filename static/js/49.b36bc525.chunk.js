(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[49],{1034:function(e,c,t){"use strict";t.r(c);var n=t(3),i=t(16),a=t(1),s=t(39),r=t(57),l=t.p+"static/media/MenuBar.068ae40e.svg",o=t(115),d=(t(945),t(21)),b=t(31),u=t(96),h=function(e){var c=e.show,t=e.setShow,s=e.navlinkItems,l=e.profileItems,h=Object(a.useState)(!1),j=Object(i.a)(h,2),m=j[0],v=j[1],p=Object(d.d)((function(e){return e.auth.avatar})),f=function(){return t(!1)};return Object(a.useEffect)((function(){document.getElementsByTagName("html")[0].style.overflowY=c?"hidden":"overlay"}),[c]),c?Object(n.jsx)("div",{className:"hb-sidebar-wrapper",children:Object(n.jsxs)("div",{className:"hb-sidebar",children:[Object(n.jsx)("div",{className:"hb-sidebar-header",children:Object(n.jsxs)("div",{className:"hb-menubar",onClick:f,children:[Object(n.jsx)("i",{className:"hb-icon-close"}),Object(n.jsx)("div",{style:{marginLeft:4},children:"Men\xfc"})]})}),s.filter((function(e){return e.show})).map((function(e){return Object(n.jsx)(r.a,{onClick:f,className:"hb-sidebar-navlink ".concat(e.active?"active":""),to:e.link,children:Object(n.jsxs)("div",{className:"d-flex align-items-center",children:[Object(n.jsx)("div",{style:{marginRight:14,width:30,height:30},children:Object(n.jsx)(o.g,{name:e.icon,filled:e.active})}),Object(n.jsx)("div",{className:"hb-sidebar-label",style:{color:e.active?"var(--violet-120)":"var(--petrol-100)"},children:e.value})]})},e.value)})),Object(n.jsxs)("div",{className:"hb-sidebar-navlink",onClick:function(){return v(!m)},children:[Object(n.jsxs)("div",{className:"d-flex align-items-center",children:[Object(n.jsx)("div",{style:{marginRight:14,width:30,height:30,display:"flex",justifyContent:"center",alignItems:"center"},children:Object(n.jsx)("i",{className:"hb-icon-angle-down angle-down ".concat(m?"rotate":""),style:{color:"#005f71",fontSize:10}})}),Object(n.jsx)("div",{className:"hb-sidebar-label",style:{color:"var(--petrol-100)"},children:"Profil"})]}),Object(n.jsx)(u.q,{src:p||b.c,style:{width:40,height:40,borderRadius:"50%"},alt:"avatar"})]}),Object(n.jsx)("div",{className:"hb-sidebar-profile ".concat(m?"show":""),children:l.filter((function(e){return e.show})).map((function(e){return Object(n.jsx)("div",{className:"hb-sidebar-profile-item",onClick:function(){f(),e.callback()},children:Object(n.jsxs)("div",{className:"hb-sidebar-profile-item-div",children:[Object(n.jsx)("i",{className:"".concat(e.icon," hb-sidebar-profile-icon")}),e.label]})},e.label)}))})]})}):Object(n.jsx)("div",{style:{position:"absolute"}})},j=t(19),m=function(e){var c=e.profileItems,t=Object(d.d)((function(e){return e.auth})).avatar;return Object(n.jsxs)(j.m,{className:"c-header-nav-items mx-2",children:[Object(n.jsx)(j.p,{className:"c-header-nav-link",caret:!1,children:Object(n.jsxs)("div",{className:"hb-profile-dropdown-wrapper",children:[Object(n.jsx)("div",{style:{backgroundImage:"url(".concat(l,")"),width:13,height:9,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}),Object(n.jsx)(u.q,{className:"hb-profile-dropdown-avatar",src:t||b.c})]})}),Object(n.jsxs)(j.o,{className:"hb-dropdown-menu",placement:"bottom-end",children:[Object(n.jsx)("div",{className:"hb-dropdown-arrow-up"}),Object(n.jsx)("div",{className:"hb-dropdown-items",children:c.filter((function(e){return e.show})).map((function(e){return Object(n.jsx)(j.n,{className:"hb-dropdown-item",onClick:e.callback,children:Object(n.jsxs)("div",{className:"hb-dropdown-item-div",children:[Object(n.jsx)("i",{className:"".concat(e.icon," hb-dropdown-icon")}),e.label]})},e.label)}))})]})]})},v=t(45),p=t(29),f=t(186);c.default=function(e){var c=Object(d.d)((function(e){return e.auth.stripe_payment})),t=Object(a.useState)(!1),u=Object(i.a)(t,2),j=u[0],O=u[1],x=Object(a.useState)(!1),w=Object(i.a)(x,2),k=w[0],g=w[1],N=Object(a.useState)(!1),y=Object(i.a)(N,2),_=y[0],C=y[1],I=e.pathname,P=Object(s.h)(),S=Object(f.b)().callApi,R=Object(d.d)((function(e){return e.auth.group_name})),A=Object(d.d)((function(e){return e.notifications})),z=Object(d.c)(),B=[{value:"Pflegemagazin",active:I.includes("/newsfeed"),link:"/newsfeed",show:"user"===R,icon:"newsfeed"},{value:"Mobilit\xe4t",active:I.includes("/mobility"),link:"/mobility",show:"user"===R,icon:"mobility"},{value:"Beratung",active:I.includes("/consulting"),link:"/consulting",show:p.e!==p.a.PRD,icon:"consulting"},{value:"Aktivit\xe4ten",active:I.includes("/activity"),link:"/activity",show:p.e!==p.a.PRD,icon:"activity"}],J=[{icon:"hb-icon-calendar-person",label:"Pers\xf6nliche Angaben",show:!0,callback:function(){return P.push("/profile")}},{icon:"hb-icon-file-text",label:"Dokumente",show:"nurse"===R,callback:function(){return P.push("/nurse-documents")}},{icon:"hb-icon-creditcard",label:"Ihr Abonnement",show:"user"===R,callback:function(){P.push("/payment")}},{icon:"hb-icon-creditcard",label:"Reset Payment (Testing)",show:"user"===R,callback:function(){return function(){var e=c.find((function(e){return"prod_JoXW23PIXK9Q8j"===e.product_id})),t={customer_id:e.customer_id,subscription_id:e.subscription_id,product_id:e.product_id,price_id:e.price_id};S({method:"delete",api:p.d.rest.payment(),body:t},(function(e){e.status===f.a&&g(!0)}))}()}},{icon:"hb-icon-shield-check",label:"Passwort \xe4ndern",show:!0,callback:function(){return P.push("/change-password")}},{icon:"hb-icon-lock-2-opened",label:"Abmelden",show:!0,callback:function(){return O(!0)}}];return Object(n.jsxs)("div",{className:"UserHeader-container",children:[Object(n.jsx)("div",{className:"hb-tablet",children:Object(n.jsx)(h,{show:_,setShow:C,navlinkItems:B,profileItems:J})}),Object(n.jsx)(o.j,{show:j,handleClose:function(){return O(!1)},title:"Abmelden",content:"Sie wollen sich von Ihrem Account abmelden?",up:"Ja, abmelden",down:"Abbrechen",upCallback:function(){O(!1),z(Object(v.k)())},downCallback:function(){return O(!1)}}),Object(n.jsx)(o.j,{show:k,handleClose:function(){return g(!1)},title:"Zahlung zur\xfccksetzen",content:"Erfolg l\xf6schen",up:"Best\xe4tigen",upCallback:function(){g(!1);var e=c.find((function(e){return"prod_JoXW23PIXK9Q8j"===e.product_id})),t={customer_id:e.customer_id,subscription_id:e.subscription_id,product_id:e.product_id,price_id:e.price_id};z(Object(v.i)(t)),P.push("/mobility/posture")},hideCloseBtn:!0}),Object(n.jsx)("div",{className:"hb-header",children:Object(n.jsx)("div",{className:"hb-wrapper",children:Object(n.jsxs)("div",{className:"d-flex justify-content-between align-items-center hb-mx-20",style:{height:"100%"},children:[Object(n.jsx)(r.a,{to:"/",children:b.h}),Object(n.jsx)("div",{className:"hb-navlinks",children:B.filter((function(e){return e.show})).map((function(e){return Object(n.jsxs)(r.a,{className:"hb-navlink ".concat(e.active?"active":""),to:e.link,children:[e.value,e.active&&Object(n.jsx)("div",{className:"hb-navlink-circle"}),"activity"===e.icon&&A.new>0&&Object(n.jsx)("div",{className:"hb-activities-circle small",children:A.new})]},e.value)}))}),Object(n.jsx)("div",{className:"hb-dropdown-profile",children:Object(n.jsx)(m,{profileItems:J})}),Object(n.jsxs)("div",{className:"hb-menubar",onClick:function(){return C(!0)},children:[Object(n.jsx)("div",{style:{backgroundImage:"url(".concat(l,")"),width:13,height:9,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",marginRight:8}}),Object(n.jsx)("span",{children:"Men\xfc"})]})]})})})]})}},945:function(e,c,t){}}]);
//# sourceMappingURL=49.b36bc525.chunk.js.map