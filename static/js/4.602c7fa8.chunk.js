(this["webpackJsonpvinhquang-frontend"]=this["webpackJsonpvinhquang-frontend"]||[]).push([[4],{364:function(e,t,n){},365:function(e,t,n){},480:function(e,t){},482:function(e,t,n){},483:function(e,t,n){},491:function(e,t,n){"use strict";n.r(t);var a=n(0),i=(n(364),n(13)),c=n(4),r=n(5),s=n(263),l=n(495),o=n(286),d=n(288),j=n(293),b=n(490),h=n(65),u=n(487),m=n(488),O=n(301),p=n(287),x=n(304),f=(n(365),n(285)),g=n(1),v=function(){var e=Object(f.a)().t,t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],s=function(){r(!1)};return Object(g.jsx)(u.a,{onClickAway:s,children:Object(g.jsxs)("div",{children:[!c&&Object(g.jsx)(d.a,{onClick:function(){r((function(e){return!e}))},children:Object(g.jsx)(h.d,{icon:"search"})}),Object(g.jsx)(m.a,{direction:"down",in:c,mountOnEnter:!0,unmountOnExit:!0,children:Object(g.jsxs)("div",{className:"Searchbar",children:[Object(g.jsx)(O.a,{autoFocus:!0,fullWidth:!0,disableUnderline:!0,placeholder:e("search")+" \u2026",startAdornment:Object(g.jsx)(p.a,{position:"start",children:Object(g.jsx)(h.d,{icon:"search"})}),sx:{mr:1,fontWeight:"fontWeightBold"}}),Object(g.jsx)(x.a,{variant:"contained",onClick:s,children:e("search")})]})})]})})},y=n(12),w=n(231),_=n(99),k=n(493),S=n(98),C=n(489),T=n(292),I=n(59),N=n(55),A=n.n(N),W=n(78),B=function(e){var t=e.history,n=e.dispatch;W.d.remove("user"),n({type:"SIGN_OUT"}),A.a.defaults.headers.common.Authorization="",t.push("/")},z=n(19),D=[{label:"home",icon:"home",linkTo:"/"},{label:"profile",icon:"person",linkTo:"#"},{label:"settings",icon:"settings",linkTo:"#"}],E=function(){var e=Object(f.a)().t,t=Object(a.useRef)(null),n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],l=c[1],o=Object(I.b)(),b=Object(w.g)(),u=Object(z.c)(),m=function(){l(!1)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{ref:t,onClick:function(){l(!0)},sx:Object(y.a)({padding:0,width:44,height:44},r&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:function(e){return Object(s.a)(e.palette.grey[900],.15)}}}),children:Object(g.jsx)(k.a,{src:o.avatar_url,alt:"avatar"})}),Object(g.jsxs)(h.f,{open:r,onClose:m,anchorEl:t.current,sx:{width:220},children:[Object(g.jsxs)(j.a,{sx:{my:1.5,px:2.5},children:[Object(g.jsx)(S.a,{variant:"subtitle1",noWrap:!0,children:o.full_name}),Object(g.jsx)(S.a,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:o.email})]}),Object(g.jsx)(C.a,{sx:{my:1}}),D.map((function(t){return Object(g.jsxs)(T.a,{to:t.linkTo,component:_.a,onClick:m,sx:{typography:"body2",py:1,px:2.5},children:[Object(g.jsx)(j.a,{mr:2,display:"flex",alignItems:"center",children:Object(g.jsx)(h.d,{icon:t.icon})}),e(t.label)]},t.label)})),Object(g.jsx)(j.a,{sx:{p:2,pt:1.5},children:Object(g.jsx)(x.a,{fullWidth:!0,color:"inherit",variant:"outlined",onClick:function(){B({history:b,dispatch:u}),l(!1)},children:e("logout")})})]})]})},R=n(269),H=n(270),M=n(105),P=[{value:"vi",label:"Ti\u1ebfng Vi\u1ec7t",icon:"/static/icons/ic_flag_vi.svg"},{value:"en",label:"English",icon:"/static/icons/ic_flag_en.svg"}],F=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1],l=Object(a.useState)(0),o=Object(i.a)(l,2),b=o[0],u=o[1],m=function(){r(!1)};return Object(a.useEffect)((function(){var e=M.a.language||P[0].value,t=P.findIndex((function(t){return t.value===e}));u(t)}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{ref:e,onClick:function(){r(!0)},sx:Object(y.a)({padding:0,width:44,height:44},c&&{bgcolor:function(e){return Object(s.a)(e.palette.primary.main,e.palette.action.focusOpacity)}}),children:Object(g.jsx)("img",{src:P[b].icon,alt:P[b].label})}),Object(g.jsx)(h.f,{open:c,onClose:m,anchorEl:e.current,children:Object(g.jsx)(j.a,{sx:{py:1},children:P.map((function(e,t){return Object(g.jsxs)(T.a,{selected:e.value===P[b].value,onClick:function(){return function(e){M.a.changeLanguage(P[e].value),u(e),m()}(t)},sx:{py:1,px:2.5},children:[Object(g.jsx)(R.a,{children:Object(g.jsx)(j.a,{component:"img",alt:e.label,src:e.icon})}),Object(g.jsx)(H.a,{primaryTypographyProps:{variant:"body2"},children:e.label})]},e.value)}))})})]})},L=Object(r.a)(l.a)((function(e){var t=e.theme;return Object(c.a)({boxShadow:"none",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:Object(s.a)(t.palette.background.default,.72)},t.breakpoints.up("lg"),{width:"calc(100% - ".concat(281,"px)")})})),J=Object(r.a)(o.a)((function(e){var t=e.theme;return Object(c.a)({minHeight:64},t.breakpoints.up("lg"),{minHeight:92,padding:t.spacing(0,5)})})),U=function(e){var t=e.onOpenSidebar;return Object(g.jsx)(L,{children:Object(g.jsxs)(J,{children:[Object(g.jsx)(h.c,{width:"lgUp",children:Object(g.jsx)(d.a,{onClick:t,sx:{mr:1,color:"text.primary"},children:Object(g.jsx)(h.d,{icon:"menu_open",color:"#666"})})}),Object(g.jsx)(v,{}),Object(g.jsx)(j.a,{sx:{flexGrow:1}}),Object(g.jsxs)(b.a,{direction:"row",alignItems:"center",spacing:{xs:.5,sm:1.5},children:[Object(g.jsx)(F,{}),Object(g.jsx)(E,{})]})]})})},G=n(496),K=n(272),V=n(497),q=n(67),X=[{title:"\u0110\u0103ng Nh\u1eadp",path:q.b.LOGIN,icon:"account_circle"},{title:"Auto Book",path:q.b.AUTO_BOOK,icon:"book_online"},{title:"Fake Time",path:q.b.FAKE_TIME,icon:"update"},{title:"Ch\u01b0a Ngh\u0129 Ra",path:q.b.MORE,icon:"more_time"}],Z=Object(r.a)("div")((function(e){var t=e.theme;return Object(c.a)({},t.breakpoints.up("lg"),{flexShrink:0,width:280})})),Q=Object(r.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(2,2.5),borderRadius:t.shape.borderRadiusSm,backgroundColor:t.palette.grey[200]}})),Y=function(e){var t=e.isOpenSidebar,n=e.onCloseSidebar,i=Object(I.b)(),c=Object(z.d)((function(e){return e.screen}));Object(a.useEffect)((function(){t&&n()}),[c]);var r=Object(g.jsxs)(h.k,{sx:{height:"100%"},children:[Object(g.jsx)(j.a,{sx:{px:2.5,py:3}}),Object(g.jsx)(j.a,{sx:{mb:5,mx:2.5},children:Object(g.jsx)(G.a,{underline:"none",component:_.a,to:"#",children:Object(g.jsxs)(Q,{children:[Object(g.jsx)(k.a,{src:i.avatar_url,alt:"avatar"}),Object(g.jsxs)(j.a,{sx:{ml:2},style:{overflow:"hidden"},children:[Object(g.jsx)(S.a,{variant:"subtitle2",sx:{color:"text.primary",whiteSpace:"nowrap"},children:i.full_name}),Object(g.jsx)(S.a,{style:{overflow:"hidden",textOverflow:"ellipsis"},variant:"body2",sx:{color:"text.secondary"},children:i.email})]})]})})}),Object(g.jsx)(h.h,{navConfig:X}),Object(g.jsx)(j.a,{sx:{flexGrow:1}}),Object(g.jsxs)(j.a,{sx:{px:2.5,pb:3,mt:10},children:[Object(g.jsx)(b.a,{alignItems:"center",spacing:3,sx:{p:2.5,borderRadius:2,position:"relative",bgcolor:"grey.200"},children:W.a}),Object(g.jsx)(j.a,{style:{margin:"28px auto 12px",textAlign:"center"},children:Object(g.jsx)(K.a,{style:{fontSize:15},children:"by khanh.nguyen@boot.ai"})})]})]});return Object(g.jsxs)(Z,{children:[Object(g.jsx)(h.c,{width:"lgUp",children:Object(g.jsx)(V.a,{open:t,onClose:n,PaperProps:{sx:{width:280}},children:r})}),Object(g.jsx)(h.c,{width:"lgDown",children:Object(g.jsx)(V.a,{open:!0,variant:"persistent",PaperProps:{sx:{width:280,bgcolor:"background.default"}},children:r})})]})},$=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(U,{onOpenSidebar:function(){return c(!0)}}),Object(g.jsx)(Y,{isOpenSidebar:n,onCloseSidebar:function(){return c(!1)}})]})},ee=n(498),te=n(281),ne=n(363),ae=n(362),ie=n(135),ce=ne.a().shape({email:ne.b().email("email_not_valid").required(),password:ne.b().required()}),re=function(){var e=Object(I.a)().callApi,t=Object(z.d)((function(e){return e.loading})),n=Object(I.e)().changeScreen,c=Object(I.b)().updateProfile,r=W.d.get("user"),s=(null===r||void 0===r?void 0:r.email)||"lehuong.hp9794@gmail.com",l=(null===r||void 0===r?void 0:r.password)||"Admin@1234",o=Object(a.useState)("STG"),d=Object(i.a)(o,2),j=d[0],u=d[1],m=Object(ae.c)({initialValues:{email:s,password:l},validationSchema:ce,onSubmit:function(t){var a=t.email,i=t.password;e({method:"post",api:"user/auth/signin",body:{email:a,password:i},loading:!0},(function(e){var t=e.status,r=e.data;"success"===t&&(A.a.defaults.headers.common.Authorization=r.id_token,W.d.set("user",{email:a,password:i}),c(Object(y.a)(Object(y.a)({},r),{},{email:a,full_name:r.first_name+" "+r.last_name,avatar_url:r.avatar,env:j})),n(q.b.AUTO_BOOK))}))}}),O=m.errors,p=m.values,x=m.handleSubmit,f=m.getFieldProps,v=m.isValid;return Object(g.jsx)("div",{style:{maxWidth:500,margin:"0 auto"},children:Object(g.jsx)(ae.b,{value:m,children:Object(g.jsxs)(ae.a,{autoComplete:"off",noValidate:!0,onSubmit:x,children:[Object(g.jsxs)(b.a,{spacing:3,my:3,children:[Object(g.jsx)(h.a,Object(y.a)(Object(y.a)({autoComplete:"email",type:"email",label:"Email"},f("email")),{},{invalid:!!p.email&&!!O.email,error:"Email kh\xf4ng h\u1ee3p l\u1ec7!",disabled:t})),Object(g.jsx)(h.a,Object(y.a)(Object(y.a)({autoComplete:"new-password",label:"M\u1eadt Kh\u1ea9u"},f("password")),{},{invalid:!!p.password&&!!O.password,error:"",disabled:t})),Object(g.jsxs)(te.a,{style:{width:"100%"},value:j,onChange:function(e){var t=e.target.value;A.a.defaults.baseURL=ie.a[t],u(t)},disabled:t,children:[Object(g.jsx)(T.a,{value:"STG",children:"M\xf4i tr\u01b0\u1eddng STG"}),Object(g.jsx)(T.a,{value:"UAT",children:"M\xf4i tr\u01b0\u1eddng UAT"}),Object(g.jsx)(T.a,{value:"PRD",children:"M\xf4i tr\u01b0\u1eddng PRD"})]})]}),Object(g.jsx)(h.b,{loading:t,fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!v,children:"\u0110\u0103ng Nh\u1eadp"})]})})})},se=n(104),le=n.n(se),oe=n(126),de=n(494),je=n(492),be=n(18),he=n(305),ue=n(306),me=n(307),Oe=n(308),pe=ne.a().shape({email:ne.b().email("Email kh\xf4ng h\u1ee3p l\u1ec7!").required(),first_name:ne.b().required(),last_name:ne.b().required()}),xe=function(e){var t=e.show,n=e.type,i=e.onClose,c=e.initialValues,r=e.setRelatives,s=Object(ae.c)({initialValues:c,enableReinitialize:!0,validationSchema:pe,onSubmit:function(e){var t=e.email,n=e.first_name,a=e.last_name;r((function(e){return-1!==e.findIndex((function(e){return e.email===t}))?e:[{email:t,first_name:n,last_name:a}].concat(Object(be.a)(e))})),i()}}),l=s.errors,o=s.values,d=s.handleSubmit,b=s.getFieldProps,u=s.isValid,m=s.resetForm,O=s.dirty,p=s.validateForm;return Object(a.useEffect)((function(){t&&(m(),setTimeout((function(){return p()}),10))}),[t]),Object(g.jsx)(he.a,{open:t,fullWidth:!0,maxWidth:"sm",children:Object(g.jsx)(ae.b,{value:s,children:Object(g.jsxs)(ae.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:[Object(g.jsx)(ue.a,{children:"create"===n?"Th\xeam Ng\u01b0\u1eddi Th\xe2n":"S\u1eeda Ng\u01b0\u1eddi Th\xe2n"}),Object(g.jsxs)(me.a,{children:[Object(g.jsx)(j.a,{py:1,children:Object(g.jsx)(h.a,Object(y.a)(Object(y.a)({label:"Email",type:"email"},b("email")),{},{invalid:!!o.email&&!!l.email,error:l.email}))}),Object(g.jsx)(j.a,{py:1,children:Object(g.jsx)(h.a,Object(y.a)(Object(y.a)({label:"H\u1ecd"},b("last_name")),{},{invalid:!!o.last_name&&!!l.last_name,error:l.last_name}))}),Object(g.jsx)(j.a,{py:1,children:Object(g.jsx)(h.a,Object(y.a)(Object(y.a)({label:"T\xean"},b("first_name")),{},{invalid:!!o.first_name&&!!l.first_name,error:l.first_name}))})]}),Object(g.jsxs)(Oe.a,{children:[Object(g.jsx)(j.a,{mr:1,mb:1,children:Object(g.jsx)(x.a,{type:"button",onClick:i,color:"primary",children:"H\u1ee7y"})}),Object(g.jsx)(j.a,{mr:1,mb:1,children:Object(g.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",disabled:!u||"update"===n&&!O,children:"create"===n?"Th\xeam":"S\u1eeda"})})]})]})})})},fe=n(360),ge=n.n(fe),ve="Bearer sk_test_51J8hJ1HOUefBe0xwQGnhxP5vTD5KfnnR7MJDQh0JdM5o6rJ46Z7XsCUZ7HL5jy8FCalrXqDEmxqL8zAgQBhnLWim00LbEy0JdS",ye="pk_test_51J8hJ1HOUefBe0xw2JCZmcGDGPgR8fwuGChF0HKgCGqjmIRjcgVrybQhXOwI9XXJ3MuZPKrPANlcpYNMIKAhmB2T001QhHT6nh",we="acct_1J8hJ1HOUefBe0xw",_e={message:"Thanh to\xe1n th\xe0nh c\xf4ng!"},ke=function(e){var t=e.price,n=e.appointmentId,a=e.appointmentName,i=e.email,c=ge.a.stringify({amount:t,currency:"eur","payment_method_types[]":"card","metadata[appointment_id]":n,"metadata[type]":"appointment","metadata[product_name]":a,receipt_email:i}),r={method:"post",url:"https://api.stripe.com/v1/payment_intents",headers:{Authorization:ve,"Content-Type":"application/x-www-form-urlencoded"},data:c};A()(r).then((function(t){!function(e){e.name;var t=e.email,n=e.paymentId,a=(e.clientSecret,e.paymentMethod),i=e.createToast,c=e.done,r=ge.a.stringify({receipt_email:t,payment_method:a,key:ye,_stripe_account:we}),s={method:"post",url:"https://api.stripe.com/v1/payment_intents/".concat(n,"/confirm"),headers:{Authorization:ve,"Content-Type":"application/x-www-form-urlencoded"},data:r};A()(s).then((function(){i(_e),c()}))}(Object(y.a)(Object(y.a)({},e),{},{clientSecret:t.data.client_secret,paymentId:t.data.id}))}))},Se=function(e,t){if(t){var a={method:"post",url:"https://ktg3nkjw3g.execute-api.eu-central-1.amazonaws.com/HBTestConsulting/api/v1/pay",data:{id:e.appointmentId}};A()(a).then((function(){e.createToast(_e),e.done()}))}else!function(e){var t=n(55),a=n(360).stringify({type:"card","card[number]":"4242424242424242","card[cvc]":"424","card[exp_month]":"04","card[exp_year]":"24",_stripe_account:we,key:ye});t({method:"post",url:"https://api.stripe.com/v1/payment_methods",headers:{Authorization:ve,"Content-Type":"application/x-www-form-urlencoded"},data:a}).then((function(t){var n=t.data;ke(Object(y.a)(Object(y.a)({},e),{},{paymentMethod:n.id}))})).catch((function(e){console.log(e)}))}(e)},Ce=(n(482),{15:"0da3c6d403e14c8da465ee145b4476f8",30:"0da3c6d403e14c8da465ee145b4476f9",45:"0da3c6d403e14c8da465ee145b4476f0",60:"0da3c6d403e14c8da465ee145b4476f1"}),Te={email:"",first_name:"",last_name:""},Ie=function(){var e=Object(I.d)(),t=e.showModalConfirm,n=e.hideModalConfirm,c=Object(I.c)(),r=c.startLoading,s=c.stopLoading,l=Object(I.a)().callApi,o=Object(I.e)().changeScreen,d=Object(I.f)().createToast,u=Object(I.b)(),m=W.d.get("relatives")||[{email:"hang.bui@boot.ai",first_name:"Hang",last_name:"Bui"},{email:"nguyenkhanhsl1997@gmail.com",first_name:"Dealer",last_name:"319"}],O=Object(a.useState)(1),p=Object(i.a)(O,2),f=p[0],v=p[1],w=Object(a.useState)(10),_=Object(i.a)(w,2),k=_[0],S=_[1],C=Object(a.useState)(15),N=Object(i.a)(C,2),A=N[0],B=N[1],D=Object(a.useState)(0),E=Object(i.a)(D,2),R=E[0],H=E[1],M=Object(a.useState)(0),P=Object(i.a)(M,2),F=P[0],L=P[1],J=Object(a.useState)({show:!1,type:"create",initialValues:Te}),U=Object(i.a)(J,2),G=U[0],V=U[1],X=Object(a.useState)(!0),Z=Object(i.a)(X,2),Q=Z[0],Y=Z[1],$=Object(a.useState)(m),ee=Object(i.a)($,2),ne=ee[0],ae=ee[1],ie=Object(a.useRef)(),ce=Object(z.d)((function(e){return e.loading})),re=function(){var e=Object(oe.a)(le.a.mark((function e(){var a;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(),clearInterval(ie.current),a=0,e.next=5,L((function(e){return a=e,e}));case 5:t({title:"Th\xf4ng B\xe1o",content:"\u0110\xe3 book th\xe0nh c\xf4ng ".concat(a," trong t\u1ed5ng s\u1ed1 ").concat(k," appointments!"),confirm:{text:"OK",action:function(){return n()}}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){W.d.set("relatives",ne)}),[ne]);return Object(a.useEffect)((function(){u.id_token||t({title:"Th\xf4ng B\xe1o",content:"\u0110\u0103ng nh\u1eadp \u0111i \u0111\xe3 b\u1ea1n \xea!",confirm:{text:"Hi\u1ec3u r\xf9i",action:function(){o(q.b.LOGIN),n()}}})}),[]),Object(g.jsxs)("div",{className:"AutoBook",children:[Object(g.jsx)(xe,Object(y.a)(Object(y.a)({},G),{},{setRelatives:ae,onClose:function(){return V(Object(y.a)(Object(y.a)({},G),{},{show:!1}))}})),Object(g.jsxs)(de.a,{container:!0,spacing:3,children:[Object(g.jsxs)(de.a,{item:!0,xs:12,md:6,className:"AutoBook-form",children:[Object(g.jsxs)(b.a,{mb:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(K.a,{style:{width:130},children:"Book cho:"})}),Object(g.jsxs)(te.a,{style:{width:"100%"},value:f,onChange:function(e){return v(e.target.value)},children:[Object(g.jsx)(T.a,{value:1,children:"Nurse"}),Object(g.jsx)(T.a,{value:2,children:"Assistant"})]})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(K.a,{style:{width:130},children:"Th\u1eddi gian:"})}),Object(g.jsxs)(te.a,{style:{width:"100%"},value:A,onChange:function(e){return B(e.target.value)},children:[Object(g.jsx)(T.a,{value:15,children:"15 ph\xfat"}),Object(g.jsx)(T.a,{value:30,children:"30 ph\xfat"}),Object(g.jsx)(T.a,{value:45,children:"45 ph\xfat"}),Object(g.jsx)(T.a,{value:60,children:"1 ti\u1ebfng"})]})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(K.a,{style:{width:130},children:"S\u1ed1 l\u01b0\u1ee3ng:"})}),Object(g.jsx)(h.a,{type:"number",value:k.toString(),onChange:function(e){return S(e.target.value)},name:"amount",disabled:ce})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(K.a,{style:{width:130},children:"Sau 15 ph\xfat:"})}),Object(g.jsx)(h.a,{type:"number",value:R.toString(),onChange:function(e){return H(e.target.value)},name:"after",disabled:ce})]}),Object(g.jsxs)(b.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:130},mr:3,children:Object(g.jsx)(K.a,{style:{width:130},children:"Thanh to\xe1n lu\xf4n:"})}),Object(g.jsx)(je.a,{checked:Q,onChange:function(){return Y(!Q)},style:{marginLeft:10}})]}),Object(g.jsx)("i",{style:{fontSize:13},children:"L\u01b0u \xfd: \u1ede tr\u01b0\u1eddng Sau 15p, khi nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng, th\u1eddi gian book s\u1ebd sau hi\u1ec7n t\u1ea1i 15 * s\u1ed1 l\u01b0\u1ee3ng (ph\xfat), n\u1ebfu mu\u1ed1n book sau 1 ti\u1ebfng c\xf3 th\u1ec3 nh\u1eadp 4."}),Object(g.jsxs)(b.a,{display:"flex",flexDirection:"row",my:3,children:[Object(g.jsx)(h.b,{loading:ce,fullWidth:!0,size:"large",variant:"contained",style:{marginRight:20},onClick:function(){L(0);var e=Number(k),t=60*Number(A),n=Number(R),a=Number(f),i=1===a;r();var c=0;ie.current=setInterval((function(){var r=900*Math.ceil((new Date).getTime()/1e3/900)+t*c+900*n;l({method:"post",api:"consulting/appointments",body:{appointment_type:a,result_survey:i?{}:void 0,relatives:i?ne:void 0,appointment_time_begin:r,appointment_time_end:i?r+t:void 0,selected_treatments_id:i?2:void 0,time_block_id:i?void 0:Ce[A],recurring_calendar_id:i?void 0:"",customer_gender:0,phone_number:"+84366918587",street:"Ha Noi",postcode:"2408",no:"2408",place:"2408"}},(function(t){var n=t.status,a=t.data,c=function(){return L((function(t){var n=t+1;return n>=e&&re(),n}))};if(Q&&"success"===n){var r=a.treatments,s={appointmentName:null===r||void 0===r?void 0:r.diseases_title,appointmentId:a.id,price:100*(i?(null===r||void 0===r?void 0:r.price)||55:Number(A)/15*12.5),email:u.email,name:u.first_name+" "+u.last_name,createToast:d,done:c};Se(s,"PRD"===u.env)}else c()})),(c+=1)>=e&&clearInterval(ie.current)}),500)},children:"Book"}),Object(g.jsx)(h.b,{loading:!1,fullWidth:!0,size:"large",variant:"contained",color:"error",disabled:!ce,onClick:re,children:"D\u1eebng"})]}),ce&&Object(g.jsx)(b.a,{display:"flex",flexDirection:"row",children:Object(g.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(g.jsxs)(K.a,{style:{width:100},children:["\u0110\xe3 book \u0111\u01b0\u1ee3c ",F,"/",k," appointments"]})})})]}),Object(g.jsxs)(de.a,{item:!0,xs:12,md:6,className:"AutoBook-relatives",children:[Object(g.jsxs)(j.a,{display:"flex",style:{justifyContent:"space-between"},children:[Object(g.jsx)("div",{}),Object(g.jsx)(x.a,{size:"small",variant:"contained",style:{marginBottom:18,height:40,fontSize:15},startIcon:Object(g.jsx)(h.d,{icon:"add"}),onClick:function(){return V({show:!0,type:"create",initialValues:Te})},children:"Ng\u01b0\u1eddi Th\xe2n"})]}),ne.map((function(e){return Object(g.jsxs)(b.a,{direction:"row",spacing:2,mb:3,children:[Object(g.jsx)(h.a,{size:"small",type:"email",label:"Email",value:e.email,name:"email",readOnly:!0}),Object(g.jsxs)(b.a,{direction:"row",spacing:1,children:[Object(g.jsx)(x.a,{variant:"contained",size:"small",style:{minWidth:40,width:40},onClick:function(){return V({show:!0,type:"update",initialValues:e})},children:Object(g.jsx)(h.d,{icon:"edit"})}),Object(g.jsx)(x.a,{variant:"contained",size:"small",style:{minWidth:40,width:40},color:"error",onClick:function(){return ae(ne.filter((function(t){return t.email!==e.email})))},children:Object(g.jsx)(h.d,{icon:"delete"})})]})]},e.email)}))]})]})]})},Ne=(n(483),n(123)),Ae=n.n(Ne),We=function(){var e=W.d.get("appointment_id")||"",t=Object(I.a)().callApi,n=Object(a.useState)(e),c=Object(i.a)(n,2),r=c[0],s=c[1],l=Object(a.useState)("30"),o=Object(i.a)(l,2),d=o[0],u=o[1],m=Object(a.useState)("30"),O=Object(i.a)(m,2),x=O[0],f=O[1],v=Object(a.useState)(!1),y=Object(i.a)(v,2),w=y[0],_=y[1],k=Object(a.useState)(!1),S=Object(i.a)(k,2),C=S[0],T=S[1],N=Object(z.d)((function(e){return e.loading}));return Object(g.jsxs)("div",{className:"FakeTime",children:[Object(g.jsxs)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(K.a,{style:{width:"100%"},children:"Appointment Id:"})}),Object(g.jsx)(h.a,{value:r,placeholder:"Appointment ho\u1eb7c Meeting Id",onChange:function(e){var t=e.target.value;s(t),W.d.set("appointment_id",t)},name:"id",disabled:N})]}),Object(g.jsxs)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(K.a,{style:{width:"100%"},children:"Th\u1eddi gian b\u1eaft \u0111\u1ea7u:"})}),Object(g.jsx)(h.a,{type:"number",placeholder:"Tr\u01b0\u1edbc th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i bao nhi\xeau ph\xfat",value:d,onChange:function(e){return u(e.target.value)},name:"begin_time",disabled:N,InputProps:{endAdornment:Object(g.jsx)(p.a,{position:"end",children:Object(g.jsx)("div",{className:"adornment",children:"ph\xfat tr\u01b0\u1edbc"})})}})]}),Object(g.jsxs)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(K.a,{style:{width:"100%"},children:"Th\u1eddi gian k\u1ebft th\xfac:"})}),Object(g.jsx)(h.a,{type:"number",placeholder:"Sau th\u1eddi \u0111i\u1ec3m hi\u1ec7n t\u1ea1i bao nhi\xeau ph\xfat",value:x,onChange:function(e){return f(e.target.value)},name:"end_time",disabled:N,InputProps:{endAdornment:Object(g.jsx)(p.a,{position:"end",children:Object(g.jsx)("div",{className:"adornment",children:"ph\xfat sau"})})}})]}),Object(g.jsx)(b.a,{my:2,display:"flex",flexDirection:"row",alignItems:"center",children:Object(g.jsxs)(de.a,{container:!0,children:[Object(g.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(g.jsxs)(j.a,{display:"flex",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(K.a,{style:{width:"100%"},children:"Xo\xe1 tr\u1ea1ng th\xe1i start:"})}),Object(g.jsx)(je.a,{checked:w,onChange:function(){return _(!w)},style:{marginLeft:10}})]})}),Object(g.jsx)(de.a,{item:!0,xs:12,md:6,children:Object(g.jsxs)(j.a,{display:"flex",alignItems:"center",children:[Object(g.jsx)(j.a,{style:{minWidth:150},mr:3,children:Object(g.jsx)(K.a,{style:{width:"100%"},children:"M\xf4i tr\u01b0\u1eddng PRD:"})}),Object(g.jsx)(je.a,{checked:C,onChange:function(){return T(!C)},style:{marginLeft:10}})]})})]})}),Object(g.jsxs)("i",{style:{fontSize:13},children:["- N\u1ebfu appointment \u0111\xe3 b\u1ecb cancel ho\u1eb7c finish s\u1ebd t\u1ef1 \u0111\u1ed9ng chuy\u1ec3n sang accept, v\u1eady n\xean \u0111\xf4i khi c\xf3 th\u1ec3 d\xf9ng l\u1ea1i c\xe1c meeting \u0111\xe3 finish, \u0111\u1ee1 m\u1ea5t c\xf4ng book l\u1ea7n n\u1eefa.",Object(g.jsx)("br",{}),"- N\u1ebfu mu\u1ed1n test case popup 10s c\xf3 th\u1ec3 \u0111\u1eb7t time finish l\xe0 kho\u1ea3ng 32p tr\u01b0\u1edbc (nh\u1eadp -32 t\u1ea1i \xf4 time end) sau \u0111\xf3 v\xe0o call \u0111\u1ee3i 2p"]}),Object(g.jsx)(b.a,{display:"flex",flexDirection:"row",my:3,children:Object(g.jsx)(h.b,{loading:N,fullWidth:!0,size:"large",variant:"contained",onClick:function(){var e=Ae()().unix(),n=e-60*Number(d||0),a=e+60*Number(x||0);t({method:"put",api:"https://ktg3nkjw3g.execute-api.eu-central-1.amazonaws.com/HBTestConsulting/api/v1/appointments".concat(C?"-prd":""),body:{id:r,time_begin:n,time_end:a,reload_start:w},loading:!0})},disabled:!r,children:"Fake"})})]})},Be=function(){return Object(g.jsx)("div",{style:{maxWidth:500,margin:"0 auto"},children:Object(g.jsx)(ee.a,{children:Object(g.jsxs)(j.a,{sx:{margin:"auto",textAlign:"center"},children:[Object(g.jsxs)(S.a,{sx:{color:"text.secondary",fontSize:17},children:["Hi\u1ec7n ch\u01b0a bi\u1ebft cho g\xec v\xe0o \u0111\xe2y! N\u1ebfu ai mu\u1ed1n th\xeam tool g\xec \u0111\xf3 hay ho c\xf3 th\u1ec3 ping",Object(g.jsxs)(G.a,{href:"https://www.messenger.com/t/WH.KnightZ",underline:"none",target:"_blank",children:[" ","khanh.nguyen@boot.ai"]}),Object(g.jsx)("br",{}),"Tool s\u1ebd c\xf3 sau v\xe0i ph\xfat."]}),Object(g.jsx)(j.a,{component:"img",src:"/static/illustrations/illustration_404.svg",sx:{height:160,mx:"auto",my:{xs:2,sm:5}}}),Object(g.jsx)(x.a,{size:"large",variant:"contained",onClick:function(){return window.open("https://www.messenger.com/t/WH.KnightZ")},children:"Ping Ngay"})]})})})},ze=q.b.AUTO_BOOK,De=q.b.FAKE_TIME,Ee=q.b.MORE;t.default=function(){var e,t=Object(z.d)((function(e){return e.screen}));switch(t){case ze:e=Ie;break;case Ee:e=Be;break;case De:e=We;break;default:e=re}return Object(g.jsxs)("div",{className:"LayoutAdmin",children:[Object(g.jsx)($,{}),Object(g.jsx)("div",{className:"LayoutAdmin-main",children:Object(g.jsx)(h.i,{title:"V\xe0i C\xf4ng C\u1ee5 H\u1ed7 Tr\u1ee3 Tester",className:"LayoutAdmin-main__page",children:Object(g.jsxs)(ee.a,{children:[Object(g.jsx)(b.a,{direction:"row",alignItems:"center",justifyContent:"center",mb:1,pb:2,children:Object(g.jsx)(S.a,{variant:"h4",gutterBottom:!0,style:{marginBottom:0},children:q.c[t]})}),Object(g.jsx)(e,{})]})})})]})}}}]);