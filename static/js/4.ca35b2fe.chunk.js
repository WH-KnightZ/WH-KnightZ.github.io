(this["webpackJsonpvinhquang-frontend"]=this["webpackJsonpvinhquang-frontend"]||[]).push([[4],{355:function(e,t,n){},356:function(e,t,n){},470:function(e,t,n){"use strict";n.r(t);var a=n(0),i=(n(355),n(13)),c=n(5),r=n(4),s=n(261),l=n(472),o=n(284),j=n(286),d=n(291),b=n(469),u=n(65),h=n(466),O=n(467),x=n(299),p=n(285),m=n(302),g=(n(356),n(283)),f=n(1),v=function(){var e=Object(g.a)().t,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=function(){r(!1)};return Object(f.jsx)(h.a,{onClickAway:s,children:Object(f.jsxs)("div",{children:[!c&&Object(f.jsx)(j.a,{onClick:function(){r((function(e){return!e}))},children:Object(f.jsx)(u.e,{icon:"search"})}),Object(f.jsx)(O.a,{direction:"down",in:c,mountOnEnter:!0,unmountOnExit:!0,children:Object(f.jsxs)("div",{className:"Searchbar",children:[Object(f.jsx)(x.a,{autoFocus:!0,fullWidth:!0,disableUnderline:!0,placeholder:e("search")+" \u2026",startAdornment:Object(f.jsx)(p.a,{position:"start",children:Object(f.jsx)(u.e,{icon:"search"})}),sx:{mr:1,fontWeight:"fontWeightBold"}}),Object(f.jsx)(m.a,{variant:"contained",onClick:s,children:e("search")})]})})]})})},y=n(12),w=n(229),k=n(99),_=n(471),S=n(98),C=n(468),T=n(290),A=n(59),N=n(55),W=n.n(N),I=n(80),R=function(e){var t=e.history,n=e.dispatch;I.d.remove("user"),n({type:"SIGN_OUT"}),W.a.defaults.headers.common.Authorization="",t.push("/")},E=n(20),B=[{label:"home",icon:"home",linkTo:"/"},{label:"profile",icon:"person",linkTo:"#"},{label:"settings",icon:"settings",linkTo:"#"}],D=function(){var e=Object(g.a)().t,t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],l=c[1],o=Object(A.b)(),b=Object(w.g)(),h=Object(E.c)(),O=function(){l(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{ref:t,onClick:function(){l(!0)},sx:Object(y.a)({padding:0,width:44,height:44},r&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:function(e){return Object(s.a)(e.palette.grey[900],.15)}}}),children:Object(f.jsx)(_.a,{src:o.avatar_url,alt:"avatar"})}),Object(f.jsxs)(u.g,{open:r,onClose:O,anchorEl:t.current,sx:{width:220},children:[Object(f.jsxs)(d.a,{sx:{my:1.5,px:2.5},children:[Object(f.jsx)(S.a,{variant:"subtitle1",noWrap:!0,children:o.full_name}),Object(f.jsx)(S.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:o.email})]}),Object(f.jsx)(C.a,{sx:{my:1}}),B.map((function(t){return Object(f.jsxs)(T.a,{to:t.linkTo,component:k.a,onClick:O,sx:{typography:"body2",py:1,px:2.5},children:[Object(f.jsx)(d.a,{mr:2,display:"flex",alignItems:"center",children:Object(f.jsx)(u.e,{icon:t.icon})}),e(t.label)]},t.label)})),Object(f.jsx)(d.a,{sx:{p:2,pt:1.5},children:Object(f.jsx)(m.a,{fullWidth:!0,color:"inherit",variant:"outlined",onClick:function(){R({history:b,dispatch:h}),l(!1)},children:e("logout")})})]})]})},P=n(267),U=n(268),z=n(106),L=[{value:"vi",label:"Ti\u1ebfng Vi\u1ec7t",icon:"/static/icons/ic_flag_vi.svg"},{value:"en",label:"English",icon:"/static/icons/ic_flag_en.svg"}],M=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(0),o=Object(i.a)(l,2),b=o[0],h=o[1],O=function(){r(!1)};return Object(a.useEffect)((function(){var e=z.a.language||L[0].value,t=L.findIndex((function(t){return t.value===e}));h(t)}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{ref:e,onClick:function(){r(!0)},sx:Object(y.a)({padding:0,width:44,height:44},c&&{bgcolor:function(e){return Object(s.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(f.jsx)("img",{src:L[b].icon,alt:L[b].label})}),Object(f.jsx)(u.g,{open:c,onClose:O,anchorEl:e.current,children:Object(f.jsx)(d.a,{sx:{py:1},children:L.map((function(e,t){return Object(f.jsxs)(T.a,{selected:e.value===L[b].value,onClick:function(){return function(e){z.a.changeLanguage(L[e].value),h(e),O()}(t)},sx:{py:1,px:2.5},children:[Object(f.jsx)(P.a,{children:Object(f.jsx)(d.a,{component:"img",alt:e.label,src:e.icon})}),Object(f.jsx)(U.a,{primaryTypographyProps:{variant:"body2"},children:e.label})]},e.value)}))})})]})},G=Object(r.a)(l.a)((function(e){var t=e.theme;return Object(c.a)({boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:Object(s.a)(t.palette.background.default,.72)},t.breakpoints.up("lg"),{width:"calc(100% - ".concat(281,"px)")})})),K=Object(r.a)(o.a)((function(e){var t=e.theme;return Object(c.a)({minHeight:64},t.breakpoints.up("lg"),{minHeight:92,padding:t.spacing(0,5)})})),F=function(e){var t=e.onOpenSidebar;return Object(f.jsx)(G,{children:Object(f.jsxs)(K,{children:[Object(f.jsx)(u.d,{width:"lgUp",children:Object(f.jsx)(j.a,{onClick:t,sx:{mr:1,color:"text.primary"},children:Object(f.jsx)(u.e,{icon:"menu_open",color:"#666"})})}),Object(f.jsx)(v,{}),Object(f.jsx)(d.a,{sx:{flexGrow:1}}),Object(f.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1.5},children:[Object(f.jsx)(M,{}),Object(f.jsx)(D,{})]})]})})},H=n(473),V=n(270),q=n(474),J=n(67),Z=[{title:"\u0110\u0103ng Nh\u1eadp",path:J.b.LOGIN,icon:"account_circle"},{title:"Auto Book",path:J.b.AUTO_BOOK,icon:"book_online"},{title:"Ch\u01b0a Ngh\u0129 Ra",path:J.b.MORE,icon:"more_time"}],Q=Object(r.a)("div")((function(e){var t=e.theme;return Object(c.a)({},t.breakpoints.up("lg"),{flexShrink:0,width:280})})),X=Object(r.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(2,2.5),borderRadius:t.shape.borderRadiusSm,backgroundColor:t.palette.grey[200]}})),Y=function(e){var t=e.isOpenSidebar,n=e.onCloseSidebar,i=Object(w.h)().pathname,c=Object(A.b)();Object(a.useEffect)((function(){t&&n()}),[i]);var r=Object(f.jsxs)(u.l,{sx:{height:"100%"},children:[Object(f.jsx)(d.a,{sx:{px:2.5,py:3},children:Object(f.jsx)(d.a,{component:k.a,to:"/",sx:{display:"inline-flex"},children:Object(f.jsx)(u.c,{})})}),Object(f.jsx)(d.a,{sx:{mb:5,mx:2.5},children:Object(f.jsx)(H.a,{underline:"none",component:k.a,to:"#",children:Object(f.jsxs)(X,{children:[Object(f.jsx)(_.a,{src:c.avatar_url,alt:"avatar"}),Object(f.jsxs)(d.a,{sx:{ml:2},style:{overflow:"hidden"},children:[Object(f.jsx)(S.a,{variant:"subtitle2",sx:{color:"text.primary"},children:c.full_name}),Object(f.jsx)(S.a,{style:{overflow:"hidden",textOverflow:"ellipsis"},variant:"body2",sx:{color:"text.secondary"},children:c.email})]})]})})}),Object(f.jsx)(u.i,{navConfig:Z}),Object(f.jsx)(d.a,{sx:{flexGrow:1}}),Object(f.jsxs)(d.a,{sx:{px:2.5,pb:3,mt:10},children:[Object(f.jsx)(b.a,{alignItems:"center",spacing:3,sx:{p:2.5,borderRadius:2,position:"relative",bgcolor:"grey.200"},children:I.a}),Object(f.jsx)(d.a,{style:{margin:"28px auto 12px",textAlign:"center"},children:Object(f.jsx)(V.a,{style:{fontSize:15},children:"by khanh.nguyen@boot.ai"})})]})]});return Object(f.jsxs)(Q,{children:[Object(f.jsx)(u.d,{width:"lgUp",children:Object(f.jsx)(q.a,{open:t,onClose:n,PaperProps:{sx:{width:280}},children:r})}),Object(f.jsx)(u.d,{width:"lgDown",children:Object(f.jsx)(q.a,{open:!0,variant:"persistent",PaperProps:{sx:{width:280,bgcolor:"background.default"}},children:r})})]})},$=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F,{onOpenSidebar:function(){return c(!0)}}),Object(f.jsx)(Y,{isOpenSidebar:n,onCloseSidebar:function(){return c(!1)}})]})},ee=n(475),te=n(279),ne=n(463),ae=n(462),ie=n(134),ce=ne.a().shape({email:ne.b().email("email_not_valid").required(),password:ne.b().required()}),re=function(){var e=Object(A.a)().callApi,t=Object(E.d)((function(e){return e.loading})),n=Object(A.e)().changeScreen,c=Object(A.b)().updateProfile,r=I.d.get("user"),s=(null===r||void 0===r?void 0:r.email)||"lehuong.hp9794@gmail.com",l=(null===r||void 0===r?void 0:r.password)||"Admin@1234",o=Object(a.useState)("STG"),j=Object(i.a)(o,2),d=j[0],h=j[1],O=Object(ae.c)({initialValues:{email:s,password:l},validationSchema:ce,onSubmit:function(t){var a=t.email,i=t.password;e({method:"post",api:"user/auth/signin",body:{email:a,password:i},loading:!0},(function(e){var t=e.status,r=e.data;"success"===t&&(W.a.defaults.headers.common.Authorization=r.id_token,I.d.set("user",{email:a,password:i}),c(Object(y.a)(Object(y.a)({},r),{},{email:a,full_name:r.first_name+" "+r.last_name,avatar_url:r.avatar})),n(J.b.AUTO_BOOK))}))}}),x=O.errors,p=O.values,m=O.handleSubmit,g=O.getFieldProps,v=O.isValid;return Object(f.jsx)(ae.b,{value:O,children:Object(f.jsxs)(ae.a,{autoComplete:"off",noValidate:!0,onSubmit:m,children:[Object(f.jsxs)(b.a,{spacing:3,my:3,children:[Object(f.jsx)(u.a,Object(y.a)(Object(y.a)({autoComplete:"email",type:"email",label:"Email"},g("email")),{},{invalid:!!p.email&&!!x.email,error:"Email kh\xf4ng h\u1ee3p l\u1ec7!",disabled:t})),Object(f.jsx)(u.a,Object(y.a)(Object(y.a)({autoComplete:"new-password",label:"M\u1eadt Kh\u1ea9u"},g("password")),{},{invalid:!!p.password&&!!x.password,error:"",disabled:t})),Object(f.jsxs)(te.a,{style:{width:"100%"},value:d,onChange:function(e){var t=e.target.value;W.a.defaults.baseURL=ie.a[t],h(t)},disabled:t,children:[Object(f.jsx)(T.a,{value:"STG",children:"M\xf4i tr\u01b0\u1eddng STG"}),Object(f.jsx)(T.a,{value:"UAT",children:"M\xf4i tr\u01b0\u1eddng UAT"}),Object(f.jsx)(T.a,{value:"PRD",children:"M\xf4i tr\u01b0\u1eddng PRD"})]})]}),Object(f.jsx)(u.b,{loading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!v,children:"\u0110\u0103ng Nh\u1eadp"})]})})},se=n(105),le=n.n(se),oe=n(125),je=function(){var e=Object(A.d)(),t=e.showModalConfirm,n=e.hideModalConfirm,c=Object(A.c)(),r=c.startLoading,s=c.stopLoading,l=Object(A.a)().callApi,o=Object(A.e)().changeScreen,j=Object(A.b)(),h=Object(a.useState)(1),O=Object(i.a)(h,2),x=O[0],p=O[1],m=Object(a.useState)(15),g=Object(i.a)(m,2),v=g[0],y=g[1],w=Object(a.useState)(15),k=Object(i.a)(w,2),_=k[0],S=k[1],C=Object(a.useState)(0),N=Object(i.a)(C,2),W=N[0],I=N[1],R=Object(a.useRef)(),B=Object(E.d)((function(e){return e.loading})),D=function(){var e=Object(oe.a)(le.a.mark((function e(){var a;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),clearInterval(R.current),a=0,e.next=5,I((function(e){return a=e,e}));case 5:t({title:"Th\xf4ng B\xe1o",content:"\u0110\xe3 book th\xe0nh c\xf4ng ".concat(a," trong t\u1ed5ng s\u1ed1 ").concat(v," appointments!"),confirm:{text:"OK",action:function(){return n()}}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){j.id_token||t({title:"Th\xf4ng B\xe1o",content:"\u0110\u0103ng nh\u1eadp \u0111i \u0111\xe3 b\u1ea1n \xea!",confirm:{text:"Okii",action:function(){o(J.b.LOGIN),n()}}})}),[]),Object(f.jsxs)("div",{children:[Object(f.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(f.jsx)(d.a,{style:{minWidth:100},mr:3,children:Object(f.jsx)(V.a,{children:"Book cho:"})}),Object(f.jsxs)(te.a,{style:{width:"100%"},value:x,onChange:function(e){return p(e.target.value)},children:[Object(f.jsx)(T.a,{value:1,children:"Nurse"}),Object(f.jsx)(T.a,{value:2,children:"Assistant"})]})]}),Object(f.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(f.jsx)(d.a,{style:{minWidth:100},mr:3,children:Object(f.jsx)(V.a,{children:"Th\u1eddi gian:"})}),Object(f.jsxs)(te.a,{style:{width:"100%"},value:_,onChange:function(e){return S(e.target.value)},children:[Object(f.jsx)(T.a,{value:15,children:"15 ph\xfat"}),Object(f.jsx)(T.a,{value:30,children:"30 ph\xfat"}),Object(f.jsx)(T.a,{value:45,children:"45 ph\xfat"}),Object(f.jsx)(T.a,{value:60,children:"1 ti\u1ebfng"})]})]}),Object(f.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(f.jsx)(d.a,{style:{minWidth:100},mr:3,children:Object(f.jsx)(V.a,{style:{width:100},children:"S\u1ed1 l\u01b0\u1ee3ng:"})}),Object(f.jsx)(u.a,{type:"number",label:"S\u1ed1 l\u01b0\u1ee3ng",value:v.toString(),onChange:function(e){return y(e.target.value)},name:"amount",disabled:B})]}),Object(f.jsxs)(b.a,{display:"flex",flexDirection:"row",my:3,children:[Object(f.jsx)(u.b,{loading:B,fullWidth:!0,size:"large",variant:"contained",style:{marginRight:20},onClick:function(){I(0);var e=Number(v),t=60*Number(_),n=Number(x);r();var a=0;R.current=setInterval((function(){var i=Math.ceil((new Date).getTime()/1e3/t+a)*t,c=i+t,r={appointment_type:Number(x),result_survey:1===n?{}:void 0,relatives:1===n?[{email:"nguyenkhanhsl1997@gmail.com",first_name:"Khanh",last_name:"Nguyen"}]:void 0,appointment_time_begin:i,appointment_time_end:c,cost:54,selected_treatments_id:1===n?2:void 0,customer_gender:0,phone_number:"+843456789",street:"Ha Noi",postcode:"0809",no:"0809",place:"0809"};l({method:"post",api:"consulting/appointments",body:r},(function(){I((function(t){var n=t+1;return n>=e&&D(),n}))})),(a+=1)>=e&&clearInterval(R.current)}),500)},children:"Book"}),Object(f.jsx)(u.b,{loading:!1,fullWidth:!0,size:"large",variant:"contained",color:"error",disabled:!B,onClick:D,children:"D\u1eebng"})]}),B&&Object(f.jsx)(b.a,{display:"flex",flexDirection:"row",children:Object(f.jsx)(d.a,{style:{minWidth:100},mr:3,children:Object(f.jsxs)(V.a,{style:{width:100},children:["\u0110\xe3 book \u0111\u01b0\u1ee3c ",W,"/",v," appointments"]})})})]})},de=function(){return Object(f.jsx)(ee.a,{children:Object(f.jsxs)(d.a,{sx:{margin:"auto",textAlign:"center"},children:[Object(f.jsxs)(S.a,{sx:{color:"text.secondary",fontSize:17},children:["Hi\u1ec7n ch\u01b0a bi\u1ebft cho g\xec v\xe0o \u0111\xe2y! N\u1ebfu ai mu\u1ed1n th\xeam tool g\xec \u0111\xf3 hay ho c\xf3 th\u1ec3 ping",Object(f.jsxs)(H.a,{href:"https://www.messenger.com/t/WH.KnightZ",underline:"none",target:"_blank",children:[" ","khanh.nguyen@boot.ai"]}),Object(f.jsx)("br",{}),"Tool s\u1ebd c\xf3 sau v\xe0i ph\xfat."]}),Object(f.jsx)(d.a,{component:"img",src:"/static/illustrations/illustration_404.svg",sx:{height:160,mx:"auto",my:{xs:2,sm:5}}}),Object(f.jsx)(m.a,{size:"large",variant:"contained",onClick:function(){return window.open("https://www.messenger.com/t/WH.KnightZ")},children:"Ping Ngay"})]})})},be=J.b.AUTO_BOOK,ue=J.b.MORE;t.default=function(){var e,t=Object(E.d)((function(e){return e.screen}));switch(t){case be:e=je;break;case ue:e=de;break;default:e=re}return Object(f.jsxs)("div",{className:"LayoutAdmin",children:[Object(f.jsx)($,{}),Object(f.jsx)("div",{className:"LayoutAdmin-main",children:Object(f.jsx)(u.j,{title:"V\xe0i C\xf4ng C\u1ee5 H\u1ed7 Tr\u1ee3 Tester",className:"LayoutAdmin-main__page",children:Object(f.jsxs)(ee.a,{children:[Object(f.jsx)(b.a,{direction:"row",alignItems:"center",justifyContent:"center",mb:5,pb:3,children:Object(f.jsx)(S.a,{variant:"h4",gutterBottom:!0,children:J.c[t]})}),Object(f.jsx)("div",{style:{maxWidth:500,margin:"0 auto"},children:Object(f.jsx)(e,{})})]})})})]})}}}]);
//# sourceMappingURL=4.ca35b2fe.chunk.js.map