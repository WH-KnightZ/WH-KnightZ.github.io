(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[16,38],{1028:function(e,t,n){"use strict";n.r(t);var c=n(3),i=(n(1),n(39)),r=n(629),s=n(115),a=(n(925),function(e){var t=e.title,n=void 0===t?"":t,i=e.btnBack,r=void 0===i?"Zur\xfcck":i,a=e.onBack,l=void 0===a?function(){}:a,o=e.children;return Object(c.jsxs)("div",{className:"hb-mx-20 AppointmentDetailLayout-wrapper",children:[Object(c.jsx)("div",{className:"AppointmentDetailLayout-header",children:r&&Object(c.jsx)("div",{className:"d-flex justify-content-between hb-my-28",children:Object(c.jsxs)(s.e,{onClick:l,children:[Object(c.jsx)("i",{className:"hb-icon-arrow-left"})," ",r]})})}),Object(c.jsxs)("div",{className:"AppointmentDetailLayout-wrapperContainer",children:[n&&Object(c.jsx)("h3",{className:"AppointmentDetailLayout-title",children:n}),Object(c.jsx)("div",{className:"AppointmentDetailLayout-container",children:o})]})]})}),l=(n(694),n(647),n(19)),o=(n(926),function(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:"AppointmentDetail-wrapper",children:[Object(c.jsx)("div",{className:"AppointmentDetail-title",children:t}),n]})}),d=(n(927),function(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{className:"AppointmentDetailModule-wrapper",children:[Object(c.jsx)("div",{className:"AppointmentDetailModule-title",children:t}),n]})}),j=(n(928),function(e){var t=e.title,n=e.value,i=e.borderTop,r=e.levelOfCare,s=e.borderRadius;return Object(c.jsxs)("div",{className:"AppointmentDetailItem-wrapper",style:{borderTop:i?"1px solid var(--petrol-10)":0,borderRadius:s?"0px 0px 16px 16px":0},children:[!r&&Object(c.jsx)("div",{className:"AppointmentDetailItem-title",children:t}),Object(c.jsx)("div",{className:"AppointmentDetailItem-value",style:{color:r?"var(--nightblue-90)":"var(--petrol-100)"},children:n})]})});t.default=function(e){var t=Object(i.h)(),n=e.match,h=(void 0===n?{params:{appointmentType:"",requestType:"",id:""}}:n).params.requestType;return Object(c.jsx)(a,{title:"Ausgew\xe4hlte Beratung",onBack:function(){return t.goBack()},children:Object(c.jsxs)(l.I,{children:[Object(c.jsx)(l.j,{md:4,children:Object(c.jsx)(r.c,{requestType:h,appointment:{treatments:{diseases_title:"Pflegenotfall Soforthilfe"}},isDetail:!0})}),Object(c.jsx)(l.j,{md:8,children:Object(c.jsxs)(o,{title:"Ihre Informationen",children:[Object(c.jsxs)(d,{title:"Pers\xf6nliche Daten",children:[Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht"}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0}),Object(c.jsx)(j,{value:"M\xe4nnlich",title:"Geschlecht",borderTop:!0,borderRadius:!0})]}),Object(c.jsx)(d,{title:"Pers\xf6nliche Daten",children:Object(c.jsx)(j,{value:"M\xe4nnlich",levelOfCare:!0,borderTop:!0,borderRadius:!0})}),Object(c.jsx)(d,{title:"Pers\xf6nliche Daten",children:Object(c.jsx)(j,{value:"M\xe4nnlich",levelOfCare:!0,borderTop:!0,borderRadius:!0})}),Object(c.jsx)("div",{className:"AppointmentDetail-btn",children:Object(c.jsx)(s.c,{color:"petrol",children:"Beratung stornieren",onClick:function(){return t.push("/consulting/feedback")}})})]})})]})})}},647:function(e,t,n){"use strict";var c=n(3),i=(n(1),n(685),{sm:14,md:20,lg:30});t.a=function(e){for(var t=e.size,n=e.rating,r=e.setRating,s=[],a=1;a<=n;a++)s.push("hb-icon-star-s star-default checked");for(var l=n+1;l<=5;l++)s.push("hb-icon-star-s star-default");return Object(c.jsx)("div",{className:"d-flex justify-content-evenly",style:{width:"90%"},children:s.map((function(e,n){return Object(c.jsx)("span",{className:e,style:{fontSize:i[t]},onClick:function(){return r(n+1)}},n)}))})}},685:function(e,t,n){},686:function(e,t,n){},694:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(16);var r=n(19),s=n(31),a=n(115),l=n(1),o=n(39),d=n(647),j=(n(686),n(96));t.default=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(o.h)(),n=Object(l.useState)(""),h=Object(i.a)(n,2),b=h[0],u=h[1],p=Object(l.useState)(0),m=Object(i.a)(p,2),x=m[0],O=m[1],v=Object(l.useState)(!1),f=Object(i.a)(v,2),g=f[0],k=f[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"petrol",children:Object(c.jsx)(a.j,{show:g,handleClose:function(){return k(!1)},title:"Bewertung gespeichert",content:"Vielen Dank f\xfcr Ihre Bewertung",up:"Zur\xfcck",upCallback:function(){return t.push("/consulting")}})}),Object(c.jsx)("div",{className:"wide",children:Object(c.jsxs)("div",{className:"Feedback-wrapper hb-mx-20",children:[Object(c.jsx)("div",{className:"hb-my-28",children:Object(c.jsxs)(a.e,{color:"nightblue",onClick:function(){return t.push("/consulting")},children:[Object(c.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]})}),Object(c.jsx)("h3",{className:"Feedback-title",children:"Wie gut war ihr Beratungsgespr\xe4ch?"}),Object(c.jsx)("div",{className:"Feedback-container",children:Object(c.jsxs)(r.I,{children:[Object(c.jsx)(r.j,{md:4,children:Object(c.jsxs)("div",{className:"Feedback-leftContent__wrapper",children:[Object(c.jsx)(j.n,{backgroundImage:s.c,className:"Feedback-leftContent__nurseAvatar"}),Object(c.jsx)("div",{className:"Feedback-leftContent__nurseName",children:"Maximilian Mustermann"})]})}),Object(c.jsx)(r.j,{md:8,children:Object(c.jsxs)("div",{className:"Feedback-rightContent__wrapper",children:[Object(c.jsx)("p",{className:"Feedback-rightContent__intro",children:"Bewerten Sie in Sternen: 5 Sterne f\xfcr hervorragend und 1 Stern f\xfcr nicht zufriedenstellend?"}),Object(c.jsx)("div",{className:"Feedback-rightContent__rate",children:Object(c.jsx)(d.a,{size:"lg",rating:x,setRating:O})}),Object(c.jsx)("h3",{className:"Feedback-rightContent__title",children:"Ihr Kommentar"}),Object(c.jsx)("p",{className:"Feedback-rightContent__subtitle",children:"Erkl\xe4ren Sie, was Ihnen an der Beratung gut oder nicht gefallen hat."}),Object(c.jsx)("p",{className:"Feedback-rightContent__content",children:"Wichtig: Bitte geben Sie konstruktive Kritik und achten Sie auf eine h\xf6fliche Formulierung."}),Object(c.jsx)(r.O,{type:"text",maxLength:500,value:b,onChange:function(e){return u(e.target.value)},name:"feedback",rows:10,className:"Feedback-rightContent__input",style:{resize:"none"}}),Object(c.jsx)("div",{className:"Feedback-rightContent__btnSubmit",children:Object(c.jsx)(a.c,{onClick:function(){return k(!0)},children:"Ihre Bewertung senden"})})]})})]})})]})})]})}},925:function(e,t,n){},926:function(e,t,n){},927:function(e,t,n){},928:function(e,t,n){}}]);
//# sourceMappingURL=16.8f72c905.chunk.js.map