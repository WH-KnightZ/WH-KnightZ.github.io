(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[47],{1005:function(e,t,n){"use strict";n.r(t);var i=n(3),c=n(7),a=n(47),s=n(16),r=n(1),d=n(19),l=n(56),o=n(20),j=n(38),u=n(29),f=n(193),h=n(192),b=n(31),m=n(614),p=n(650);t.default=function(){var e=Object(o.c)(),t=function(t,n){return e(Object(j.d)(t,n))},n=Object(r.useState)({data:[],loading:!0,full:!1,page:0}),O=Object(s.a)(n,2),x=O[0],g=O[1],v=Object(r.useState)(""),y=Object(s.a)(v,2),w=y[0],C=y[1],N=function(e,n){t({method:"get",api:u.d.rest.getListUsersConfirm(e,n,10),loading:1===n},(function(e){var t=e.data;e.status===j.c&&g({data:1===n?t.friends:[].concat(Object(a.a)(x.data),Object(a.a)(t.friends)),full:t.friends.length<10,loading:!1,page:n})}))};Object(r.useEffect)((function(){N(w,1)}),[]);var _=function(e,n){t({method:"confirm"===n?"put":"delete",api:"confirm"===n?u.d.rest.changeStatusFriend(e):u.d.rest.deleteFriend(e),loading:!0},(function(e){e.status;j.c}))},k={className:"header-topic--wrapper__search--selection__world",searchName:w,setSearchName:C,searchEmpty:!0,callbackSearch:function(e){return N(e,1)},validate:u.d.validate.valueTypingExpressionsName,inputStyle:{width:400}};return Object(i.jsx)("div",{children:Object(i.jsx)(d.k,{children:Object(i.jsxs)("div",{className:"add-friend-page-wrapper",children:[Object(i.jsxs)(d.s,{style:{padding:10,display:"flex",justifyContent:"space-between",alignItems:"center",zIndex:1},children:[Object(i.jsx)("h4",{children:"Friend Requests"}),Object(i.jsx)("div",{style:{width:650},children:Object(i.jsxs)("ul",{style:{listStyle:"none",display:"flex",paddingLeft:0,justifyContent:"space-between",marginBottom:0,alignItems:"center"},children:[Object(i.jsx)("li",{children:Object(i.jsx)(f.a,Object(c.a)(Object(c.a)({},k),{},{className:"add-friend__search",placeholder:"Search friend"}))}),Object(i.jsx)("li",{children:Object(i.jsx)(l.a,{to:"/consulting/add-friend",children:"Friend List"})}),Object(i.jsx)("li",{children:Object(i.jsx)(l.a,{to:"/consulting/search-friend",children:"Search Friend"})})]})})]}),Object(i.jsx)("div",{className:"add-friend-main-page-body",children:Object(i.jsx)(d.I,{children:0===x.data.length?Object(i.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"No result"}):x.data.map((function(e,t){return Object(i.jsx)(d.j,{md:6,style:{marginTop:"15px"},children:Object(i.jsx)(p.a,{first_name:e.first_name,last_name:e.last_name,img:e.avatar,id:e.id,changeStatus:_,status:"confirm"},t)})}))})}),0!==x.page&&x.loading&&Object(i.jsx)(m.a,{size:"large",render:b.g}),Object(i.jsx)(h.a,{onEnter:function(){x.loading||x.full||(g(Object(c.a)(Object(c.a)({},x),{},{loading:!0})),N(w,x.page+1))}})]})})})}},614:function(e,t,n){"use strict";var i=n(3),c=(n(1),{large:80,medium:48,small:36});t.a=function(e){var t=e.size,n=e.render;return Object(i.jsx)("div",{className:"video-comments--comment",children:Object(i.jsx)("div",{style:{width:"100%",height:c[t]},children:n})})}},650:function(e,t,n){"use strict";var i=n(3),c=n(16),a=n(1),s=n(19),r=n(39);t.a=function(e){var t=e.first_name,n=e.last_name,d=e.img,l=e.id,o=e.changeStatus,j=e.status,u=e.handleOpen,f=e.search,h=e.setPopUpCancel,b=e.setPopupRequestCancel,m=Object(r.h)(),p=Object(a.useState)(""),O=Object(c.a)(p,2),x=O[0],g=O[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"friend-request-main-page-body--wrapper",style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderRadius:7,border:"1px solid ",padding:8},children:[Object(i.jsxs)("div",{className:"friend-request-main-page-body--information",style:{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:function(){return m.push("/consulting/information/".concat(l))},children:[Object(i.jsx)(s.t,{src:d||"https://i.stack.imgur.com/l60Hf.png",alt:"Avatar",width:80,height:80,style:{borderRadius:10}}),Object(i.jsxs)("h4",{style:{marginLeft:20},children:[t," ",n]})]}),Object(i.jsx)("div",{className:"friend-request-main-page-body--config",children:function(e,t){return"friend"===e?!1===t?Object(i.jsx)("div",{onClick:function(e){return u(e,{id:l})},children:Object(i.jsx)("i",{className:"fas fa-ellipsis-h"})}):Object(i.jsxs)("div",{children:[Object(i.jsx)(s.d,{color:"primary",variant:"outline",onClick:function(){h({show:!0})},children:"Unfriend"}),Object(i.jsxs)(s.d,{color:"primary",variant:"outline",onClick:function(){console.log("123")},children:[Object(i.jsx)("i",{className:"fas fa-phone"})," Call"]})]}):"confirm"===e?""!==x?Object(i.jsx)("div",{children:x}):Object(i.jsxs)("div",{style:{width:150,display:"flex",justifyContent:"space-between"},children:[Object(i.jsx)(s.d,{id:"btn_delete",color:"primary",variant:"outline",onClick:function(){o(l,"cancel"),g("Request removed")},children:"Delete"}),Object(i.jsx)(s.d,{id:"btn_confirm",color:"primary",variant:"outline",onClick:function(){o(l,"confirm"),g("Request accepted")},children:"Confirm"})]}):"cancel"===e?Object(i.jsx)(s.d,{color:"primary",variant:"outline",onClick:function(){return b({show:!0})},children:"Cancel request"}):Object(i.jsx)(s.d,{color:"primary",variant:"outline",onClick:function(){return o(l,null)},children:"Add friend"})}(j,f)})]})})}}}]);
//# sourceMappingURL=47.92830960.chunk.js.map