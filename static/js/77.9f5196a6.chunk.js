(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[77],{1008:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(7),i=a(16),r=a(1),s=a(39),l=a(19),d=a(21),o=a(38),u=a(29),j=a(96);t.default=function(e){var t=Object(d.c)(),a=function(e,a){return t(Object(o.d)(e,a))},h=e.match.params.userName,f=Object(s.h)(),b=Object(r.useState)({data:{},loading:!0}),m=Object(i.a)(b,2),O=m[0],p=m[1],x=Object(r.useState)({show:!1}),v=Object(i.a)(x,2),y=v[0],g=v[1],w=Object(r.useState)({show:!1}),N=Object(i.a)(w,2),k=N[0],C=N[1];Object(r.useEffect)((function(){var e;e=h,a({method:"get",api:u.d.rest.getUserInformation(e),loading:!0},(function(e){var t=e.data;e.status===o.c&&p({data:Object(c.a)({},t),loading:!1})}))}),[]);var A=function(e,t){a({method:null===t?"post":"confirm"===t?"put":"delete",api:null===t?u.d.rest.addFriend(e):"confirm"===t?u.d.rest.changeStatusFriend(e):u.d.rest.deleteFriend(e),loading:!0},(function(e){e.status===o.c&&p((function(e){var a=Object(c.a)({},e);return a.data.type={confirm:"friend",cancel:null,friend:null,null:"cancel"}[t],a}))}))},B=function(){var e;console.log("12312"),g({show:!1}),e=O.data.id,a({method:"delete",api:u.d.rest.deleteFriend(e),loading:!0},(function(e){e.status===o.c&&p((function(e){return Object(c.a)({},e)}))}))};return Object(n.jsx)("div",{className:"information-friend",style:{textAlign:"center"},children:Object(n.jsxs)(l.k,{fluid:!0,className:"profile-user__container nopadding",children:[Object(n.jsxs)("div",{className:"profile-user--top",children:[Object(n.jsx)("div",{style:{width:"100%",textAlign:"left"},children:Object(n.jsxs)(l.d,{color:"primary",variant:"ghost",onClick:function(){f.push("/consulting/add-friend")},children:[Object(n.jsx)("i",{className:"fas fa-chevron-left"})," Back friend list page"]})}),Object(n.jsx)("div",{className:"avatar-user",children:Object(n.jsx)(l.t,{className:"avatar-user--img",src:O.data.avatar||"https://i.stack.imgur.com/l60Hf.png",alt:"Avatar",width:"128",height:"128"})})]}),Object(n.jsx)("div",{className:"profile-user--bottom",children:Object(n.jsxs)(l.I,{children:[Object(n.jsx)(j.e,{isVisible:"cancel"===O.data.type?k.show:y.show,title:"Cancel",content:"cancel"===O.data.type?"Are you sure you want to cancel request?":"Are you sure you want to unfriend?",leftButtonText:"No",rightButtonText:"Yes",leftButtonOnPress:function(){return"cancel"===O.data.type?C({show:!1}):g({show:!1})},rightButtonOnPress:function(){return"cancel"===O.data.type?(console.log("123"),C({show:!1}),void A(O.data.id,O.data.type)):B()}}),0===Object.keys(O.data).length?Object(n.jsx)("div",{style:{textAlign:"center",width:"100%"},children:" Search Friend "}):Object(n.jsxs)(l.j,{md:12,children:[Object(n.jsxs)("h3",{className:"user-name",children:[O.data.first_name," ",O.data.last_name]}),Object(n.jsx)("div",{className:"email",children:Object(n.jsxs)("p",{className:"email",children:[" ",O.data.email," "]})}),Object(n.jsx)("div",{className:"bio",children:Object(n.jsxs)("p",{className:"bio-content",children:[" ",O.data.bio," "]})}),Object(n.jsx)("div",{className:"btn_call",children:"friend"===O.data.type?Object(n.jsxs)("div",{children:[Object(n.jsx)(l.d,{color:"primary",variant:"outline",onClick:function(){g({show:!0})},children:"Unfriend"}),Object(n.jsxs)(l.d,{color:"primary",variant:"outline",onClick:function(){console.log("123")},children:[Object(n.jsx)("i",{className:"fas fa-phone"})," Call"]})]}):"confirm"===O.data.type?Object(n.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:[Object(n.jsx)(l.d,{color:"primary",variant:"outline",onClick:function(){return A(O.data.id,"cancel")},children:"Delete"}),Object(n.jsx)(l.d,{color:"primary",variant:"outline",onClick:function(){A(O.data.id,O.data.type)},children:"Confirm"})]}):"cancel"===O.data.type?Object(n.jsx)(l.d,{color:"primary",variant:"outline",onClick:function(){return C({show:!0})},children:"Cancel request"}):Object(n.jsx)(l.d,{color:"primary",variant:"outline",onClick:function(){return A(O.data.id,O.data.type)},children:"Add friend"})})]})]})})]})})}}}]);
//# sourceMappingURL=77.9f5196a6.chunk.js.map