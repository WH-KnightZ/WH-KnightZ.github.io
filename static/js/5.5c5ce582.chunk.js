(this["webpackJsonpvinhquang-frontend"]=this["webpackJsonpvinhquang-frontend"]||[]).push([[5],{473:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);var n=a(143),i=a.n(n),r=a(179),l=a(9),c=a(13),s=a(0),o=a(466),d=a(428),u=a(129),j=a(451),b=a(427),h=a(439),m=a(450),O=a(69),p=a(76),g=a(443),v=a(123),x=(a(473),a(122)),f=a(54),y=a.n(f),w=a(1),_=v.a().shape({email:v.b().email("email_not_valid").required(),password:v.b().required()});t.default=function(){var e,t,a=Object(g.a)().t,n=Object(p.c)(),v=n.showModalConfirm,f=n.hideModalConfirm,S=Object(p.a)().callApi,k=Object(p.b)().updateProfile,C=Object(s.useState)(0),N=Object(c.a)(C,2),W=N[0],D=N[1],I=Object(s.useState)(1),q=Object(c.a)(I,2),z=q[0],A=q[1],B=Object(s.useState)(15),M=Object(c.a)(B,2),T=M[0],V=M[1],J=Object(s.useState)(15),K=Object(c.a)(J,2),P=K[0],R=K[1],U=Object(s.useState)(0),F=Object(c.a)(U,2),H=F[0],E=F[1],G=Object(s.useState)(!1),L=Object(c.a)(G,2),Q=L[0],X=L[1],Y=Object(s.useRef)(),Z=Object(x.c)({initialValues:{email:"lehuong.hp9794@gmail.com",password:"Admin@1234"},validationSchema:_,onSubmit:function(e){var t=e.email,a=e.password;X(!0),S({method:"post",api:"user/auth/signin",body:{email:t,password:a}},(function(e){var a=e.status,n=e.data;X(!1),a&&(y.a.defaults.headers.common.Authorization=n.id_token,k(Object(l.a)(Object(l.a)({},n),{},{email:t,full_name:n.first_name+" "+n.last_name,avatar_url:n.avatar})),D(1))}))}}),$=Z.errors,ee=Z.values,te=Z.handleSubmit,ae=Z.getFieldProps,ne=Z.isValid,ie=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!1),clearInterval(Y.current),t=0,e.next=5,E((function(e){return t=e,e}));case 5:v({title:"Th\xf4ng B\xe1o",content:"\u0110\xe3 book th\xe0nh c\xf4ng ".concat(t," trong t\u1ed5ng s\u1ed1 ").concat(T," appointments!"),confirm:{text:"OK",action:function(){return f()}}});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)(O.l,{title:"User Management",className:"Users-page",children:Object(w.jsxs)(o.a,{children:[Object(w.jsx)(d.a,{direction:"row",alignItems:"center",justifyContent:"center",mb:5,children:Object(w.jsx)(u.a,{variant:"h4",gutterBottom:!0,children:"T\u1ef1 \u0111\u1ed9ng book l\u1ecbch by khanh.nguyen@boot.ai"})}),Object(w.jsx)("div",{style:{maxWidth:500,margin:"0 auto"},children:0===W?Object(w.jsx)(x.b,{value:Z,children:Object(w.jsxs)(x.a,{autoComplete:"off",noValidate:!0,onSubmit:te,children:[Object(w.jsxs)(d.a,{spacing:3,my:3,children:[Object(w.jsx)(O.b,Object(l.a)(Object(l.a)({autoComplete:"email",type:"email",label:a("email")},ae("email")),{},{invalid:!!ee.email&&!!$.email,error:a((null===(e=$.email)||void 0===e?void 0:e.toString())||""),disabled:Q})),Object(w.jsx)(O.b,Object(l.a)(Object(l.a)({autoComplete:"new-password",label:a("password")},ae("password")),{},{invalid:!!ee.password&&!!$.password,error:a((null===(t=$.password)||void 0===t?void 0:t.toString())||""),disabled:Q}))]}),Object(w.jsx)(O.d,{loading:Q,fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:!ne,children:a("login")})]})}):Object(w.jsxs)("div",{children:[Object(w.jsxs)(d.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(w.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(w.jsx)(b.a,{children:"Book cho:"})}),Object(w.jsxs)(h.a,{style:{width:"100%"},value:z,onChange:function(e){return A(e.target.value)},children:[Object(w.jsx)(m.a,{value:1,children:"Nurse"}),Object(w.jsx)(m.a,{value:2,children:"Assistant"})]})]}),Object(w.jsxs)(d.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(w.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(w.jsx)(b.a,{children:"Th\u1eddi gian:"})}),Object(w.jsxs)(h.a,{style:{width:"100%"},value:P,onChange:function(e){return R(e.target.value)},children:[Object(w.jsx)(m.a,{value:15,children:"15 ph\xfat"}),Object(w.jsx)(m.a,{value:30,children:"30 ph\xfat"}),Object(w.jsx)(m.a,{value:45,children:"45 ph\xfat"}),Object(w.jsx)(m.a,{value:60,children:"1 ti\u1ebfng"})]})]}),Object(w.jsxs)(d.a,{my:3,display:"flex",flexDirection:"row",alignItems:"center",children:[Object(w.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(w.jsx)(b.a,{style:{width:100},children:"S\u1ed1 l\u01b0\u1ee3ng:"})}),Object(w.jsx)(O.b,{type:"number",label:"S\u1ed1 l\u01b0\u1ee3ng",value:T.toString(),onChange:function(e){return V(e.target.value)},name:"amount",disabled:Q})]}),Object(w.jsxs)(d.a,{display:"flex",flexDirection:"row",my:3,children:[Object(w.jsx)(O.d,{loading:Q,fullWidth:!0,size:"large",variant:"contained",style:{marginRight:20},onClick:function(){E(0);var e=Number(T),t=60*Number(P),a=Number(z);X(!0);var n=0;Y.current=setInterval((function(){var i=Math.ceil((new Date).getTime()/1e3/t+n)*t,r=i+t,l={appointment_type:Number(z),result_survey:1===a?{}:void 0,relatives:1===a?[{email:"nguyenkhanhsl1997@gmail.com",first_name:"Khanh",last_name:"Nguyen"}]:void 0,appointment_time_begin:i,appointment_time_end:r,cost:54,selected_treatments_id:1===a?2:void 0,customer_gender:0,phone_number:"+843456789",street:"Ha Noi",postcode:"0809",no:"0809",place:"0809"};S({method:"post",api:"consulting/appointments",body:l},(function(){E((function(t){var a=t+1;return a>=e&&ie(),a}))})),(n+=1)>=e&&clearInterval(Y.current)}),500)},children:"Book"}),Object(w.jsx)(O.d,{loading:!1,fullWidth:!0,size:"large",variant:"contained",color:"error",disabled:!Q,onClick:ie,children:"D\u1eebng"})]}),Q&&Object(w.jsx)(d.a,{display:"flex",flexDirection:"row",children:Object(w.jsx)(j.a,{style:{minWidth:100},mr:3,children:Object(w.jsxs)(b.a,{style:{width:100},children:["\u0110\xe3 book \u0111\u01b0\u1ee3c ",H,"/",T," appointments"]})})})]})})]})})}}}]);
//# sourceMappingURL=5.5c5ce582.chunk.js.map