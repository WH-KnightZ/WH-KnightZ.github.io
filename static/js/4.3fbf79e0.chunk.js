(this["webpackJsonpvinhquang-frontend"]=this["webpackJsonpvinhquang-frontend"]||[]).push([[4],{368:function(e,t,n){},369:function(e,t,n){},370:function(e,t,n){},485:function(e,t){},487:function(e,t,n){},488:function(e,t,n){},496:function(e,t,n){"use strict";n.r(t);var a=n(0),i=(n(368),n(13)),c=n(4),r=n(5),s=n(267),l=n(500),o=n(290),d=n(292),j=n(297),b=n(495),u=n(67),h=n(492),O=n(493),m=n(305),x=n(291),p=n(308),f=(n(369),n(289)),g=n(1),v=function(){var e=Object(f.a)().t,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=function(){r(!1)};return Object(g.jsx)(h.a,{onClickAway:s,children:Object(g.jsxs)("div",{children:[!c&&Object(g.jsx)(d.a,{onClick:function(){r((function(e){return!e}))},children:Object(g.jsx)(u.d,{icon:"search"})}),Object(g.jsx)(O.a,{direction:"down",in:c,mountOnEnter:!0,unmountOnExit:!0,children:Object(g.jsxs)("div",{className:"Searchbar",children:[Object(g.jsx)(m.a,{autoFocus:!0,fullWidth:!0,disableUnderline:!0,placeholder:e("search")+" \u2026",startAdornment:Object(g.jsx)(x.a,{position:"start",children:Object(g.jsx)(u.d,{icon:"search"})}),sx:{mr:1,fontWeight:"fontWeightBold"}}),Object(g.jsx)(p.a,{variant:"contained",onClick:s,children:e("search")})]})})]})})},y=n(11),w=n(235),_=n(101),k=n(498),S=n(100),C=n(494),T=n(296),I=n(60),N=n(56),W=n.n(N),A=n(82),D=function(e){var t=e.history,n=e.dispatch;A.d.remove("user"),n({type:"SIGN_OUT"}),W.a.defaults.headers.common.Authorization="",t.push("/")},z=n(20),B=[{label:"home",icon:"home",linkTo:"/"},{label:"profile",icon:"person",linkTo:"#"},{label:"settings",icon:"settings",linkTo:"#"}],E=function(){var e=Object(f.a)().t,t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],l=c[1],o=Object(I.b)(),b=Object(w.g)(),h=Object(z.c)(),O=function(){l(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{ref:t,onClick:function(){l(!0)},sx:Object(y.a)({padding:0,width:44,height:44},r&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:function(e){return Object(s.a)(e.palette.grey[900],.15)}}}),children:Object(g.jsx)(k.a,{src:o.avatar_url,alt:"avatar"})}),Object(g.jsxs)(u.f,{open:r,onClose:O,anchorEl:t.current,sx:{width:220},children:[Object(g.jsxs)(j.a,{sx:{my:1.5,px:2.5},children:[Object(g.jsx)(S.a,{variant:"subtitle1",noWrap:!0,children:o.full_name}),Object(g.jsx)(S.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:o.email})]}),Object(g.jsx)(C.a,{sx:{my:1}}),B.map((function(t){return Object(g.jsxs)(T.a,{to:t.linkTo,component:_.a,onClick:O,sx:{typography:"body2",py:1,px:2.5},children:[Object(g.jsx)(j.a,{mr:2,display:"flex",alignItems:"center",children:Object(g.jsx)(u.d,{icon:t.icon})}),e(t.label)]},t.label)})),Object(g.jsx)(j.a,{sx:{p:2,pt:1.5},children:Object(g.jsx)(p.a,{fullWidth:!0,color:"inherit",variant:"outlined",onClick:function(){D({history:b,dispatch:h}),l(!1)},children:e("logout")})})]})]})},R=n(273),L=n(274),P=n(108),M=[{value:"vi",label:"Ti\u1ebfng Vi\u1ec7t",icon:"/static/icons/ic_flag_vi.svg"},{value:"en",label:"English",icon:"/static/icons/ic_flag_en.svg"}],F=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(0),o=Object(i.a)(l,2),b=o[0],h=o[1],O=function(){r(!1)};return Object(a.useEffect)((function(){var e=P.a.language||M[0].value,t=M.findIndex((function(t){return t.value===e}));h(t)}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{ref:e,onClick:function(){r(!0)},sx:Object(y.a)({padding:0,width:44,height:44},c&&{bgcolor:function(e){return Object(s.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(g.jsx)("img",{src:M[b].icon,alt:M[b].label})}),Object(g.jsx)(u.f,{open:c,onClose:O,anchorEl:e.current,children:Object(g.jsx)(j.a,{sx:{py:1},children:M.map((function(e,t){return Object(g.jsxs)(T.a,{selected:e.value===M[b].value,onClick:function(){return function(e){P.a.changeLanguage(M[e].value),h(e),O()}(t)},sx:{py:1,px:2.5},children:[Object(g.jsx)(R.a,{children:Object(g.jsx)(j.a,{component:"img",alt:e.label,src:e.icon})}),Object(g.jsx)(L.a,{primaryTypographyProps:{variant:"body2"},children:e.label})]},e.value)}))})})]})},H=Object(r.a)(l.a)((function(e){var t=e.theme;return Object(c.a)({boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:Object(s.a)(t.palette.background.default,.72)},t.breakpoints.up("lg"),{width:"calc(100% - ".concat(281,"px)")})})),U=Object(r.a)(o.a)((function(e){var t=e.theme;return Object(c.a)({minHeight:64},t.breakpoints.up("lg"),{minHeight:92,padding:t.spacing(0,5)})})),V=function(e){var t=e.onOpenSidebar;return Object(g.jsx)(H,{children:Object(g.jsxs)(U,{children:[Object(g.jsx)(u.c,{width:"lgUp",children:Object(g.jsx)(d.a,{onClick:t,sx:{mr:1,color:"text.primary"},children:Object(g.jsx)(u.d,{icon:"menu_open",color:"#666"})})}),Object(g.jsx)(v,{}),Object(g.jsx)(j.a,{sx:{flexGrow:1}}),Object(g.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1.5},children:[Object(g.jsx)(F,{}),Object(g.jsx)(E,{})]})]})})},K=n(501),G=n(276),q=n(502),J=n(71),Z=[{title:"G\u1ecdi Api T\u1ef1 \u0110\u1ed9ng",path:J.b.AUTO_API,icon:"api"},{title:"\u0110\u0103ng Nh\u1eadp",path:J.b.LOGIN,icon:"account_circle"},{title:"Auto Book",path:J.b.AUTO_BOOK,icon:"book_online"},{title:"Fake Time",path:J.b.FAKE_TIME,icon:"update"},{title:"Ch\u01b0a Ngh\u0129 Ra",path:J.b.MORE,icon:"more_time"}],X=Object(r.a)("div")((function(e){var t=e.theme;return Object(c.a)({},t.breakpoints.up("lg"),{flexShrink:0,width:280})})),Q=Object(r.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(2,2.5),borderRadius:t.shape.borderRadiusSm,backgroundColor:t.palette.grey[200]}})),Y=function(e){var t=e.isOpenSidebar,n=e.onCloseSidebar,i=Object(I.b)(),c=Object(z.d)((function(e){return e.screen}));Object(a.useEffect)((function(){t&&n()}),[c]);var r=Object(g.jsxs)(u.k,{sx:{height:"100%"},children:[Object(g.jsx)(j.a,{sx:{px:2.5,py:3}}),Object(g.jsx)(j.a,{sx:{mb:5,mx:2.5},children:Object(g.jsx)(K.a,{underline:"none",component:_.a,to:"#",children:Object(g.jsxs)(Q,{children:[Object(g.jsx)(k.a,{src:i.avatar_url,alt:"avatar"}),Object(g.jsxs)(j.a,{sx:{ml:2},style:{overflow:"hidden"},children:[Object(g.jsx)(S.a,{variant:"subtitle2",sx:{color:"text.primary",whiteSpace:"nowrap"},children:i.full_name}),Object(g.jsx)(S.a,{style:{overflow:"hidden",textOverflow:"ellipsis"},variant:"body2",sx:{color:"text.secondary"},children:i.email})]})]})})}),Object(g.jsx)(u.h,{navConfig:Z}),Object(g.jsx)(j.a,{sx:{flexGrow:1}}),Object(g.jsxs)(j.a,{sx:{px:2.5,pb:3,mt:5},children:[Object(g.jsx)(b.a,{alignItems:"center",spacing:3,sx:{p:2.5,borderRadius:2,position:"relative",bgcolor:"grey.200"},children:A.a}),Object(g.jsx)(j.a,{style:{margin:"28px auto 12px",textAlign:"center"},children:Object(g.jsx)(G.a,{style:{fontSize:15},children:"by khanh.nguyen@boot.ai"})})]})]});return Object(g.jsxs)(X,{children:[Object(g.jsx)(u.c,{width:"lgUp",children:Object(g.jsx)(q.a,{open:t,onClose:n,PaperProps:{sx:{width:280}},children:r})}),Object(g.jsx)(u.c,{width:"lgDown",children:Object(g.jsx)(q.a,{open:!0,variant:"persistent",PaperProps:{sx:{width:280,bgcolor:"background.default"}},children:r})})]})},$=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(V,{onOpenSidebar:function(){return c(!0)}}),Object(g.jsx)(Y,{isOpenSidebar:n,onCloseSidebar:function(){return c(!1)}})]})},ee=n(503),te=n(118),ne=n(105),ae=n.n(ne),ie=n(285),ce=n(497),re=(n(370),function(){var e=Object(I.d)(),t=e.showModalConfirm,n=e.hideModalConfirm,c=Object(I.c)(),r=c.startLoading,s=c.stopLoading,l=Object(I.a)().callApi,o=(Object(I.e)().changeScreen,Object(I.f)().createToast,Object(I.b)().updateProfile),d=(A.d.get("relatives"),Object(a.useState)("/api/v1/manage/products")),h=Object(i.a)(d,2),O=(h[0],h[1],Object(a.useState)(1)),m=Object(i.a)(O,2),x=m[0],p=(m[1],Object(a.useState)(10)),f=Object(i.a)(p,2),v=f[0],y=f[1],w=Object(a.useState)(15),_=Object(i.a)(w,2),k=_[0],S=_[1],C=Object(a.useState)(0),N=Object(i.a)(C,2),D=N[0],B=N[1],E=Object(a.useState)(0),R=Object(i.a)(E,2),L=R[0],P=R[1],M=Object(a.useState)(!0),F=Object(i.a)(M,2),H=F[0],U=F[1],V=Object(a.useRef)(),K=Object(z.d)((function(e){return e.loading})),q=function(){var e=Object(te.a)(ae.a.mark((function e(){var a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),clearInterval(V.current),a=0,e.next=5,P((function(e){return a=e,e}));case 5:t({title:"Th\xf4ng B\xe1o",content:"\u0110\xe3 book th\xe0nh c\xf4ng ".concat(a," trong t\u1ed5ng s\u1ed1 ").concat(v," appointments!"),confirm:{text:"OK",action:function(){return n()}}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){l({method:"post",api:"/api/v1/auth/login",body:{email:"admin.fit.mta@gmail.com",password:"admin@1234"},loading:!0,hideToast:!0},(function(e){var t=e.status,n=e.data;"success"===t&&(W.a.defaults.headers.common.Authorization=n.access_token,o(n))}))}),[]),Object(g.jsxs)("div",{className:"AutoApi",children:[Object(g.jsxs)(b.a,{mb:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Book cho:"})}),Object(g.jsx)(u.a,{type:"number",value:v.toString(),onChange:function(e){return y(e.target.value)},name:"amount",size:"small",disabled:K})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Th\u1eddi gian:"})}),Object(g.jsxs)(ie.a,{style:{width:"100%"},value:k,onChange:function(e){return S(e.target.value)},children:[Object(g.jsx)(T.a,{value:15,children:"15 ph\xfat"}),Object(g.jsx)(T.a,{value:30,children:"30 ph\xfat"}),Object(g.jsx)(T.a,{value:45,children:"45 ph\xfat"}),Object(g.jsx)(T.a,{value:60,children:"1 ti\u1ebfng"})]})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"S\u1ed1 l\u01b0\u1ee3ng:"})}),Object(g.jsx)(u.a,{type:"number",value:v.toString(),onChange:function(e){return y(e.target.value)},name:"amount",disabled:K})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Sau 15 ph\xfat:"})}),Object(g.jsx)(u.a,{type:"number",value:D.toString(),onChange:function(e){return B(e.target.value)},name:"after",disabled:K})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Thanh to\xe1n lu\xf4n:"})}),Object(g.jsx)(ce.a,{checked:H,onChange:function(){return U(!H)},style:{marginLeft:10}})]}),Object(g.jsx)("i",{style:{fontSize:13},children:"L\u01b0u \xfd: \u1ede tr\u01b0\u1eddng Sau 15p, khi nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng, th\u1eddi gian book s\u1ebd sau hi\u1ec7n t\u1ea1i 15 * s\u1ed1 l\u01b0\u1ee3ng (ph\xfat), n\u1ebfu mu\u1ed1n book sau 1 ti\u1ebfng c\xf3 th\u1ec3 nh\u1eadp 4."}),Object(g.jsxs)(b.a,{display:"flex",flexDirection:"row",my:3,children:[Object(g.jsx)(u.b,{loading:K,fullWidth:!0,size:"large",variant:"contained",style:{marginRight:20},onClick:function(){P(0);var e=Number(v),t=60*Number(k),n=Number(D),a=Number(x),i=1===a;r();var c=0;V.current=setInterval((function(){var r=900*Math.ceil((new Date).getTime()/1e3/900)+t*c+900*n;l({method:"post",api:"consulting/appointments",body:{appointment_type:a,result_survey:i?{}:void 0,appointment_time_begin:r,appointment_time_end:i?r+t:void 0,selected_treatments_id:i?2:void 0,recurring_calendar_id:i?void 0:"",customer_gender:0,phone_number:"+84366918587",street:"Ha Noi",postcode:"2408",no:"2408",place:"2408"}},(function(t){var n=t.status;t.data;H&&"success"===n||P((function(t){var n=t+1;return n>=e&&q(),n}))})),(c+=1)>=e&&clearInterval(V.current)}),500)},children:"Book"}),Object(g.jsx)(u.b,{loading:!1,fullWidth:!0,size:"large",variant:"contained",color:"error",disabled:!K,onClick:q,children:"D\u1eebng"})]}),K&&Object(g.jsx)(b.a,{display:"flex",flexDirection:"row",children:Object(g.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(g.jsxs)(G.a,{style:{width:100},children:["\u0110\xe3 book \u0111\u01b0\u1ee3c ",L,"/",v," appointments"]})})})]})}),se=n(367),le=n(366),oe=n(136),de=se.a().shape({phone:se.b().required(),password:se.b().required()}),je=function(){var e=Object(I.a)().callApi,t=Object(z.d)((function(e){return e.loading})),n=Object(I.e)().changeScreen,c=Object(I.b)().updateProfile,r=A.d.get("user"),s=(null===r||void 0===r?void 0:r.phone)||"010203",l=(null===r||void 0===r?void 0:r.password)||"admin@1234",o=Object(a.useState)("STG"),d=Object(i.a)(o,2),j=d[0],h=d[1],O=Object(le.c)({initialValues:{phone:s,password:l},validationSchema:de,onSubmit:function(t){var a=t.phone,i=t.password;e({method:"post",api:"https://api.shop.stg.inreal.boot.ai/api/v1/auth/login",body:{phone:a,password:i},loading:!0},(function(e){var t=e.status,r=e.data;"success"===t&&(W.a.defaults.headers.common.Authorization=r.access_token,A.d.set("user",{phone:a,password:i}),c(Object(y.a)(Object(y.a)({},r),{},{phone:a,env:j})),n(J.b.AUTO_BOOK))}))}}),m=O.errors,x=O.values,p=O.handleSubmit,f=O.getFieldProps,v=O.isValid;return Object(g.jsx)("div",{style:{maxWidth:500,margin:"0 auto"},children:Object(g.jsx)(le.b,{value:O,children:Object(g.jsxs)(le.a,{autoComplete:"off",noValidate:!0,onSubmit:p,children:[Object(g.jsxs)(b.a,{spacing:3,my:3,children:[Object(g.jsx)(u.a,Object(y.a)(Object(y.a)({autoComplete:"phone",type:"phone",label:"\u0110i\u1ec7n tho\u1ea1i"},f("phone")),{},{invalid:!!x.phone&&!!m.phone,disabled:t})),Object(g.jsx)(u.a,Object(y.a)(Object(y.a)({autoComplete:"new-password",label:"M\u1eadt Kh\u1ea9u"},f("password")),{},{invalid:!!x.password&&!!m.password,error:"",disabled:t})),Object(g.jsxs)(ie.a,{style:{width:"100%"},value:j,onChange:function(e){var t=e.target.value;W.a.defaults.baseURL=oe.a[t],h(t)},disabled:t,children:[Object(g.jsx)(T.a,{value:"STG",children:"M\xf4i tr\u01b0\u1eddng STG"}),Object(g.jsx)(T.a,{value:"UAT",children:"M\xf4i tr\u01b0\u1eddng UAT"}),Object(g.jsx)(T.a,{value:"PRD",children:"M\xf4i tr\u01b0\u1eddng PRD"})]})]}),Object(g.jsx)(u.b,{loading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!v,children:"\u0110\u0103ng Nh\u1eadp"})]})})})},be=n(499),ue=n(18),he=n(309),Oe=n(310),me=n(311),xe=n(312),pe=se.a().shape({email:se.b().email("Email kh\xf4ng h\u1ee3p l\u1ec7!").required(),first_name:se.b().required(),last_name:se.b().required()}),fe=function(e){var t=e.show,n=e.type,i=e.onClose,c=e.initialValues,r=e.setRelatives,s=Object(le.c)({initialValues:c,enableReinitialize:!0,validationSchema:pe,onSubmit:function(e){var t=e.email,n=e.first_name,a=e.last_name;r((function(e){return-1!==e.findIndex((function(e){return e.email===t}))?e:[{email:t,first_name:n,last_name:a}].concat(Object(ue.a)(e))})),i()}}),l=s.errors,o=s.values,d=s.handleSubmit,b=s.getFieldProps,h=s.isValid,O=s.resetForm,m=s.dirty,x=s.validateForm;return Object(a.useEffect)((function(){t&&(O(),setTimeout((function(){return x()}),10))}),[t]),Object(g.jsx)(he.a,{open:t,fullWidth:!0,maxWidth:"sm",children:Object(g.jsx)(le.b,{value:s,children:Object(g.jsxs)(le.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:[Object(g.jsx)(Oe.a,{children:"create"===n?"Th\xeam Ng\u01b0\u1eddi Th\xe2n":"S\u1eeda Ng\u01b0\u1eddi Th\xe2n"}),Object(g.jsxs)(me.a,{children:[Object(g.jsx)(j.a,{py:1,children:Object(g.jsx)(u.a,Object(y.a)(Object(y.a)({label:"Email",type:"email"},b("email")),{},{invalid:!!o.email&&!!l.email,error:l.email}))}),Object(g.jsx)(j.a,{py:1,children:Object(g.jsx)(u.a,Object(y.a)(Object(y.a)({label:"H\u1ecd"},b("last_name")),{},{invalid:!!o.last_name&&!!l.last_name,error:l.last_name}))}),Object(g.jsx)(j.a,{py:1,children:Object(g.jsx)(u.a,Object(y.a)(Object(y.a)({label:"T\xean"},b("first_name")),{},{invalid:!!o.first_name&&!!l.first_name,error:l.first_name}))})]}),Object(g.jsxs)(xe.a,{children:[Object(g.jsx)(j.a,{mr:1,mb:1,children:Object(g.jsx)(p.a,{type:"button",onClick:i,color:"primary",children:"H\u1ee7y"})}),Object(g.jsx)(j.a,{mr:1,mb:1,children:Object(g.jsx)(p.a,{type:"submit",variant:"contained",color:"primary",disabled:!h||"update"===n&&!m,children:"create"===n?"Th\xeam":"S\u1eeda"})})]})]})})})},ge=(n(364),function(e,t){e.done()}),ve=(n(487),{15:"0da3c6d403e14c8da465ee145b4476f8",30:"0da3c6d403e14c8da465ee145b4476f9",45:"0da3c6d403e14c8da465ee145b4476f0",60:"0da3c6d403e14c8da465ee145b4476f1"}),ye={email:"",first_name:"",last_name:""},we=function(){var e=Object(I.d)(),t=e.showModalConfirm,n=e.hideModalConfirm,c=Object(I.c)(),r=c.startLoading,s=c.stopLoading,l=Object(I.a)().callApi,o=Object(I.e)().changeScreen,d=Object(I.f)().createToast,h=Object(I.b)(),O=A.d.get("relatives")||[{email:"hang.bui@boot.ai",first_name:"Hang",last_name:"Bui"},{email:"nguyenkhanhsl1997@gmail.com",first_name:"Dealer",last_name:"319"}],m=Object(a.useState)(1),x=Object(i.a)(m,2),f=x[0],v=x[1],w=Object(a.useState)(10),_=Object(i.a)(w,2),k=_[0],S=_[1],C=Object(a.useState)(15),N=Object(i.a)(C,2),W=N[0],D=N[1],B=Object(a.useState)(0),E=Object(i.a)(B,2),R=E[0],L=E[1],P=Object(a.useState)(0),M=Object(i.a)(P,2),F=M[0],H=M[1],U=Object(a.useState)({show:!1,type:"create",initialValues:ye}),V=Object(i.a)(U,2),K=V[0],q=V[1],Z=Object(a.useState)(!0),X=Object(i.a)(Z,2),Q=X[0],Y=X[1],$=Object(a.useState)(O),ee=Object(i.a)($,2),ne=ee[0],re=ee[1],se=Object(a.useRef)(),le=Object(z.d)((function(e){return e.loading})),oe=function(){var e=Object(te.a)(ae.a.mark((function e(){var a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),clearInterval(se.current),a=0,e.next=5,H((function(e){return a=e,e}));case 5:t({title:"Th\xf4ng B\xe1o",content:"\u0110\xe3 book th\xe0nh c\xf4ng ".concat(a," trong t\u1ed5ng s\u1ed1 ").concat(k," appointments!"),confirm:{text:"OK",action:function(){return n()}}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){A.d.set("relatives",ne)}),[ne]);return Object(a.useEffect)((function(){h.access_token||t({title:"Th\xf4ng B\xe1o",content:"\u0110\u0103ng nh\u1eadp \u0111i \u0111\xe3 b\u1ea1n \xea!",confirm:{text:"Hi\u1ec3u r\xf9i",action:function(){o(J.b.LOGIN),n()}}})}),[]),Object(g.jsxs)("div",{className:"AutoBook",children:[Object(g.jsx)(fe,Object(y.a)(Object(y.a)({},K),{},{setRelatives:re,onClose:function(){return q(Object(y.a)(Object(y.a)({},K),{},{show:!1}))}})),Object(g.jsxs)(be.a,{container:!0,spacing:3,children:[Object(g.jsxs)(be.a,{item:!0,xs:12,md:6,className:"AutoBook-form",children:[Object(g.jsxs)(b.a,{mb:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Book cho:"})}),Object(g.jsxs)(ie.a,{style:{width:"100%"},value:f,onChange:function(e){return v(e.target.value)},children:[Object(g.jsx)(T.a,{value:1,children:"Nurse"}),Object(g.jsx)(T.a,{value:2,children:"Assistant"})]})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Th\u1eddi gian:"})}),Object(g.jsxs)(ie.a,{style:{width:"100%"},value:W,onChange:function(e){return D(e.target.value)},children:[Object(g.jsx)(T.a,{value:15,children:"15 ph\xfat"}),Object(g.jsx)(T.a,{value:30,children:"30 ph\xfat"}),Object(g.jsx)(T.a,{value:45,children:"45 ph\xfat"}),Object(g.jsx)(T.a,{value:60,children:"1 ti\u1ebfng"})]})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"S\u1ed1 l\u01b0\u1ee3ng:"})}),Object(g.jsx)(u.a,{type:"number",value:k.toString(),onChange:function(e){return S(e.target.value)},name:"amount",disabled:le})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Sau 15 ph\xfat:"})}),Object(g.jsx)(u.a,{type:"number",value:R.toString(),onChange:function(e){return L(e.target.value)},name:"after",disabled:le})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(G.a,{style:{width:130},children:"Thanh to\xe1n lu\xf4n:"})}),Object(g.jsx)(ce.a,{checked:Q,onChange:function(){return Y(!Q)},style:{marginLeft:10}})]}),Object(g.jsx)("i",{style:{fontSize:13},children:"L\u01b0u \xfd: \u1ede tr\u01b0\u1eddng Sau 15p, khi nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng, th\u1eddi gian book s\u1ebd sau hi\u1ec7n t\u1ea1i 15 * s\u1ed1 l\u01b0\u1ee3ng (ph\xfat), n\u1ebfu mu\u1ed1n book sau 1 ti\u1ebfng c\xf3 th\u1ec3 nh\u1eadp 4."}),Object(g.jsxs)(b.a,{display:"flex",flexDirection:"row",my:3,children:[Object(g.jsx)(u.b,{loading:le,fullWidth:!0,size:"large",variant:"contained",style:{marginRight:20},onClick:function(){H(0);var e=Number(k),t=60*Number(W),n=Number(R),a=Number(f),i=1===a;r();var c=0;se.current=setInterval((function(){var r=900*Math.ceil((new Date).getTime()/1e3/900)+t*c+900*n;l({method:"post",api:"consulting/appointments",body:{appointment_type:a,result_survey:i?{}:void 0,relatives:i?ne:void 0,appointment_time_begin:r,appointment_time_end:i?r+t:void 0,selected_treatments_id:i?2:void 0,time_block_id:i?void 0:ve[W],recurring_calendar_id:i?void 0:"",customer_gender:0,phone_number:"+84366918587",street:"Ha Noi",postcode:"2408",no:"2408",place:"2408"}},(function(t){var n=t.status,a=t.data,c=function(){return H((function(t){var n=t+1;return n>=e&&oe(),n}))};if(Q&&"success"===n){var r=a.treatments,s={appointmentName:null===r||void 0===r?void 0:r.diseases_title,appointmentId:a.id,price:100*(i?(null===r||void 0===r?void 0:r.price)||55:Number(W)/15*12.5),email:h.email,name:h.first_name+" "+h.last_name,createToast:d,done:c};ge(s,h.env)}else c()})),(c+=1)>=e&&clearInterval(se.current)}),500)},children:"Book"}),Object(g.jsx)(u.b,{loading:!1,fullWidth:!0,size:"large",variant:"contained",color:"error",disabled:!le,onClick:oe,children:"D\u1eebng"})]}),le&&Object(g.jsx)(b.a,{display:"flex",flexDirection:"row",children:Object(g.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(g.jsxs)(G.a,{style:{width:100},children:["\u0110\xe3 book \u0111\u01b0\u1ee3c ",F,"/",k," appointments"]})})})]}),Object(g.jsxs)(be.a,{item:!0,xs:12,md:6,className:"AutoBook-relatives",children:[Object(g.jsxs)(j.a,{display:"flex",style:{justifyContent:"space-between"},children:[Object(g.jsx)("div",{}),Object(g.jsx)(p.a,{size:"small",variant:"contained",style:{marginBottom:18,height:40,fontSize:15},startIcon:Object(g.jsx)(u.d,{icon:"add"}),onClick:function(){return q({show:!0,type:"create",initialValues:ye})},children:"Ng\u01b0\u1eddi Th\xe2n"})]}),ne.map((function(e){return Object(g.jsxs)(b.a,{direction:"row",spacing:2,mb:3,children:[Object(g.jsx)(u.a,{size:"small",type:"email",label:"Email",value:e.email,name:"email",readOnly:!0}),Object(g.jsxs)(b.a,{direction:"row",spacing:1,children:[Object(g.jsx)(p.a,{variant:"contained",size:"small",style:{minWidth:40,width:40},onClick:function(){return q({show:!0,type:"update",initialValues:e})},children:Object(g.jsx)(u.d,{icon:"edit"})}),Object(g.jsx)(p.a,{variant:"contained",size:"small",style:{minWidth:40,width:40},color:"error",onClick:function(){return re(ne.filter((function(t){return t.email!==e.email})))},children:Object(g.jsx)(u.d,{icon:"delete"})})]})]},e.email)}))]})]})]})},_e=(n(488),n(125)),ke=n.n(_e),Se=function(){var e=A.d.get("appointment_id")||"",t=Object(I.a)().callApi,n=Object(a.useState)(e),c=Object(i.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)("30"),o=Object(i.a)(l,2),d=o[0],h=o[1],O=Object(a.useState)("30"),m=Object(i.a)(O,2),p=m[0],f=m[1],v=Object(a.useState)(!1),y=Object(i.a)(v,2),w=y[0],_=y[1],k=Object(a.useState)(!1),S=Object(i.a)(k,2),C=S[0],T=S[1],N=Object(z.d)((function(e){return e.loading}));return Object(g.jsxs)("div",{className:"FakeTime",children:[Object(g.jsxs)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(G.a,{style:{width:"100%"},children:"Appointment Id:"})}),Object(g.jsx)(u.a,{value:r,placeholder:"Appointment ho\u1eb7c Meeting Id",onChange:function(e){var t=e.target.value;s(t),A.d.set("appointment_id",t)},name:"id",disabled:N})]}),Object(g.jsxs)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(G.a,{style:{width:"100%"},children:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u:"})}),Object(g.jsx)(u.a,{type:"number",placeholder:"Tr\u01b0\u1edbc th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i bao nhi\xeau ph\xfat",value:d,onChange:function(e){return h(e.target.value)},name:"begin_time",disabled:N,InputProps:{endAdornment:Object(g.jsx)(x.a,{position:"end",children:Object(g.jsx)("div",{className:"adornment",children:"ph\xfat tr\u01b0\u1edbc"})})}})]}),Object(g.jsxs)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(G.a,{style:{width:"100%"},children:"Th\u1eddi gian k\u1ebft th\xfac:"})}),Object(g.jsx)(u.a,{type:"number",placeholder:"Sau th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i bao nhi\xeau ph\xfat",value:p,onChange:function(e){return f(e.target.value)},name:"end_time",disabled:N,InputProps:{endAdornment:Object(g.jsx)(x.a,{position:"end",children:Object(g.jsx)("div",{className:"adornment",children:"ph\xfat sau"})})}})]}),Object(g.jsx)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:Object(g.jsxs)(be.a,{container:!0,children:[Object(g.jsx)(be.a,{item:!0,xs:12,md:6,children:Object(g.jsxs)(j.a,{display:"flex",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(G.a,{style:{width:"100%"},children:"Xo\xe1 tr\u1ea1ng th\xe1i start:"})}),Object(g.jsx)(ce.a,{checked:w,onChange:function(){return _(!w)},style:{marginLeft:10}})]})}),Object(g.jsx)(be.a,{item:!0,xs:12,md:6,children:Object(g.jsxs)(j.a,{display:"flex",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(G.a,{style:{width:"100%"},children:"M\xf4i tr\u01b0\u1eddng PRD:"})}),Object(g.jsx)(ce.a,{checked:C,onChange:function(){return T(!C)},style:{marginLeft:10}})]})})]})}),Object(g.jsxs)("i",{style:{fontSize:13},children:["- N\u1ebfu appointment \u0111\xe3 b\u1ecb cancel ho\u1eb7c finish s\u1ebd t\u1ef1 \u0111\u1ed9ng chuy\u1ec3n sang accept, v\u1eady n\xean \u0111\xf4i khi c\xf3 th\u1ec3 d\xf9ng l\u1ea1i c\xe1c meeting \u0111\xe3 finish, \u0111\u1ee1 m\u1ea5t c\xf4ng book l\u1ea7n n\u1eefa.",Object(g.jsx)("br",{}),"- N\u1ebfu mu\u1ed1n test case popup 10s c\xf3 th\u1ec3 \u0111\u1eb7t time finish l\xe0 kho\u1ea3ng 28p tr\u01b0\u1edbc (nh\u1eadp -28 t\u1ea1i \xf4 time end) sau \u0111\xf3 v\xe0o call \u0111\u1ee3i 2p"]}),Object(g.jsx)(b.a,{display:"flex",flexDirection:"row",my:3,children:Object(g.jsx)(u.b,{loading:N,fullWidth:!0,size:"large",variant:"contained",onClick:function(){var e=ke()().unix(),n=e-60*Number(d||0),a=e+60*Number(p||0);t({method:"put",api:"https://xurbhazai4.execute-api.ap-southeast-1.amazonaws.com/K_Support/fake-time".concat(C?"-prd":""),body:{id:r,time_begin:n,time_end:a,reload_start:w},loading:!0})},disabled:!r,children:"Fake"})})]})},Ce=function(){return Object(g.jsx)("div",{style:{maxWidth:500,margin:"0 auto"},children:Object(g.jsx)(ee.a,{children:Object(g.jsxs)(j.a,{sx:{margin:"auto",textAlign:"center"},children:[Object(g.jsxs)(S.a,{sx:{color:"text.secondary",fontSize:17},children:["Hi\u1ec7n ch\u01b0a bi\u1ebft cho g\xec v\xe0o \u0111\xe2y! N\u1ebfu ai mu\u1ed1n th\xeam tool g\xec \u0111\xf3 hay ho c\xf3 th\u1ec3 ping",Object(g.jsxs)(K.a,{href:"https://www.messenger.com/t/WH.KnightZ",underline:"none",target:"_blank",children:[" ","khanh.nguyen@boot.ai"]}),Object(g.jsx)("br",{}),"Tool s\u1ebd c\xf3 sau v\xe0i ph\xfat."]}),Object(g.jsx)(j.a,{component:"img",src:"/static/illustrations/illustration_404.svg",sx:{height:160,mx:"auto",my:{xs:2,sm:5}}}),Object(g.jsx)(p.a,{size:"large",variant:"contained",onClick:function(){return window.open("https://www.messenger.com/t/WH.KnightZ")},children:"Ping Ngay"})]})})})},Te=J.b.AUTO_API,Ie=J.b.AUTO_BOOK,Ne=J.b.FAKE_TIME,We=J.b.MORE;t.default=function(){var e,t=Object(z.d)((function(e){return e.screen}));switch(t){case Te:e=re;break;case Ie:e=we;break;case We:e=Ce;break;case Ne:e=Se;break;default:e=je}return Object(g.jsxs)("div",{className:"LayoutAdmin",children:[Object(g.jsx)($,{}),Object(g.jsx)("div",{className:"LayoutAdmin-main",children:Object(g.jsx)(u.i,{title:"V\xe0i C\xf4ng C\u1ee5 H\u1ed7 Tr\u1ee3 Tester",className:"LayoutAdmin-main__page",children:Object(g.jsxs)(ee.a,{children:[Object(g.jsx)(b.a,{direction:"row",alignItems:"center",justifyContent:"center",mb:1,pb:2,children:Object(g.jsx)(S.a,{variant:"h4",gutterBottom:!0,style:{marginBottom:0},children:J.c[t]})}),Object(g.jsx)(e,{})]})})})]})}}}]);