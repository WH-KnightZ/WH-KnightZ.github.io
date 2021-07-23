(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[16],{1028:function(e,t,n){"use strict";n.r(t);var a=n(7),s=n(16),i=n(3),c=n(1),r=n(19),l=n(29),o=n(21),d=n(602),u=n(603),j=n(38),b=n(618),m=n(32),h=n(96),f=n(611),O=n(195),p=n(186),x=function(e,t){return u.b().shape({first_name:u.d().trim().required("first-name-must-be-at-least-1"),last_name:u.d().trim().required("last-name-must-be-at-least-1-c"),email:u.d().notOneOf([t.email],"this-email-already-exists-ple").matches(l.d.validate.validateEmail(),"email-format-is-incorrect").required("email-must-be-at-least-3-chara"),password:u.d().trim().min(8,"Your password must be at least 8 characters long with one letter, and a number").required("Your password must be at least 8 characters long with one letter, and a number").matches(l.d.validate.validatePassword(),"Your password must be at least 8 characters long with one letter, and a number")})},v=function(e,t){return function(n){var a=e(n,t);try{return a.validateSync(n,{abortEarly:!1}),{}}catch(s){return Object(m.k)(s)}}},g=function(e){var t=Object(b.a)().t,n=Object(p.b)().callApi,a=e.searchUsers,o=e.handleClose,u=e.show,g=e.initialValues,y=Object(c.useState)({email:"",text:""}),w=Object(s.a)(y,2),_=w[0],N=w[1],C=Object(c.useState)(!0),S=Object(s.a)(C,2),k=S[0],A=S[1],I=Object(c.useRef)(null),E=Object(c.useState)(null),D=Object(s.a)(E,2),z=D[0],M=D[1];Object(c.useEffect)((function(){u&&(M(null),I.current.resetForm())}),[u]);var B=Object(c.useState)(!1),T=Object(s.a)(B,2),R=T[0],P=T[1],V=function(){I.current.resetForm(),e.handleClose(),P(!1)};return Object(i.jsx)("div",{className:"flex-row align-items-center",children:Object(i.jsxs)(h.c,{centered:!0,show:u,onClose:o,closeOnBackdrop:!1,children:[Object(i.jsxs)(h.d,{children:[t("create-new-user"),Object(i.jsx)(h.b,{onClick:function(){I.current.dirty||z?P(!0):V()}})]}),Object(i.jsxs)(r.D,{className:"popup--update-user",children:[Object(i.jsxs)(h.c,{size:"sm",show:R,centered:!0,closeOnBackdrop:!1,children:[Object(i.jsx)(r.D,{style:{textAlign:"center",padding:20},children:"Are you sure you want to discard your changes?"}),Object(i.jsxs)(r.E,{style:{display:"flex",justifyContent:"space-around"},children:[Object(i.jsx)("button",{className:"btn btn-danger",style:{width:120},color:"danger",onClick:V,children:"Discard"}),Object(i.jsx)("button",{style:{width:120},className:"btn btn-primary",onClick:function(){return P(!1)},children:"Keep Editing"})]})]}),Object(i.jsx)(r.I,{className:"justify-content-center",children:Object(i.jsx)(r.j,{md:"12",children:Object(i.jsx)(r.h,{children:Object(i.jsx)(r.e,{className:"popup--update-user__card--wrapper",children:Object(i.jsx)(r.f,{children:Object(i.jsx)(d.c,{innerRef:I,enableReinitialize:!0,initialValues:g,validate:v(x,_),onSubmit:function(e){var t={first_name:e.first_name.trim(),last_name:e.last_name.trim(),email:e.email.trim(),password:e.password.trim(),status_id:Number(e.status_id),gender:Number(e.gender),birth_date:Object(m.j)(z)},s=JSON.stringify(t);n({method:"post",api:l.d.rest.createUser(),body:s,loading:!0},(function(e){var n=e.status,s=e.text,i=e.id;n===j.c?(a(),o()):"2"===i&&(N({email:t.email,text:s}),I.current.validateForm())}))},children:function(e){var n=e.values,a=e.errors,s=e.touched,c=e.dirty,o=e.handleChange,d=e.handleBlur,u=e.handleSubmit,j=e.isValid;return Object(i.jsxs)(r.q,{onSubmit:u,children:[Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsxs)(f.a,{label:"First Name",width:110,children:[Object(i.jsx)(r.u,{type:"text",placeholder:t("first-name"),invalid:""!==n.first_name.trim()&&s.first_name&&!!a.first_name,autoComplete:"first_name",maxLength:50,value:Object(m.e)(n.first_name),onBlur:d,onChange:function(e){l.d.validate.valueTypingExpressionsName(e)&&o(e)},name:"first_name"}),Object(i.jsx)(r.A,{children:t(a.first_name||"")})]})}),Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsxs)(f.a,{label:"Last Name",width:110,children:[Object(i.jsx)(r.u,{type:"text",placeholder:t("last-name"),invalid:""!==n.last_name.trim()&&s.last_name&&!!a.last_name,autoComplete:"last_name",maxLength:50,value:Object(m.e)(n.last_name),onBlur:d,onChange:function(e){l.d.validate.valueTypingExpressionsName(e)&&o(e)},name:"last_name"}),Object(i.jsx)(r.A,{children:t(a.last_name||"")})]})}),Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsxs)(f.a,{label:"Email",width:110,children:[Object(i.jsx)(r.u,{type:"text",placeholder:t("email"),maxLength:50,invalid:""!==n.email&&s.email&&!!a.email,autoComplete:"email",value:n.email,onBlur:d,onChange:function(e){e.target.value.includes(" ")||o(e)},name:"email"}),Object(i.jsx)(r.A,{children:t(a.email||"")})]})}),Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsx)(f.a,{label:"Password",width:110,children:Object(i.jsx)(O.a,{errors:a,values:n,show:k,setShow:function(){return A(!k)},handleBlur:d,handleChange:o,label:"Password",name:"password",touched:s,hideLabel:!0})})}),Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsx)(f.a,{label:"Gender",width:110,children:Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)(r.u,{type:"radio",name:"gender",value:"0",onChange:o,checked:"0"===n.gender}),"Male",Object(i.jsx)(r.u,{type:"radio",name:"gender",value:"1",onChange:o,checked:"1"===n.gender}),"Female",Object(i.jsx)(r.u,{type:"radio",name:"gender",value:"2",onChange:o,checked:"2"===n.gender}),"Other"]})})}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(f.a,{label:"Date Of Birth",width:110,children:Object(i.jsx)(h.g,{date:z,setDate:M,fullWidth:!0,maxDate:Object(m.l)()})})}),Object(i.jsx)(r.r,{children:Object(i.jsx)(f.a,{label:"Status",width:110,children:Object(i.jsxs)(r.J,{value:n.status_id,onChange:o,name:"status_id",children:[Object(i.jsx)("option",{value:3,children:"Approved"}),Object(i.jsx)("option",{value:2,children:"Disapproved"})]})})}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)(r.d,{color:"primary",className:"px-4",type:"submit",disabled:!j||!z||!["0","1","2"].includes(n.gender)||!c&&z===g.birth_date,children:t("create")})})]})}})})})})})})]})]})})},y=n(656),w=function(e){return u.b().shape({first_name:u.d().trim().required("first-name-must-be-at-least-1"),last_name:u.d().trim().required("last-name-must-be-at-least-1-c")})},_=new Date;_.setMonth(_.getMonth()+1);var N,C=function(e){var t=Object(b.a)().t,n=Object(p.b)().callApi,a=e.searchUsers,o=e.handleClose,u=e.show,O=e.initialValues,x=e.type,v=Object(c.useState)(null),g=Object(s.a)(v,2),_=g[0],N=g[1];Object(c.useEffect)((function(){u&&N(O.birth_date)}),[u]);var C=Object(c.useState)(!1),S=Object(s.a)(C,2),k=S[0],A=S[1],I=Object(c.useRef)(null),E=function(){I.current.resetForm(),e.handleClose(),A(!1)};return Object(i.jsx)("div",{className:"flex-row align-items-center",children:Object(i.jsxs)(h.c,{centered:!0,show:u,onClose:E,closeOnBackdrop:!1,children:[Object(i.jsxs)(h.d,{children:["Edit ",x===y.a.ASSISTANT?"Assistant":"Account",Object(i.jsx)(h.b,{onClick:function(){I.current.dirty||_!==O.birth_date?A(!0):E()}})]}),Object(i.jsxs)(r.D,{className:"popup--update-user",children:[Object(i.jsxs)(h.c,{size:"sm",show:k,centered:!0,closeOnBackdrop:!1,children:[Object(i.jsx)(r.D,{style:{textAlign:"center",padding:20},children:"Are you sure you want to discard your changes?"}),Object(i.jsxs)(r.E,{style:{display:"flex",justifyContent:"space-around"},children:[Object(i.jsx)("button",{className:"btn btn-danger",style:{width:120},color:"danger",onClick:E,children:"Discard"}),Object(i.jsx)("button",{style:{width:120},className:"btn btn-primary",onClick:function(){return A(!1)},children:"Keep Editing"})]})]}),Object(i.jsx)(r.I,{className:"justify-content-center",children:Object(i.jsx)(r.j,{md:"12",children:Object(i.jsx)(r.h,{children:Object(i.jsx)(r.e,{className:"popup--update-user__card--wrapper",children:Object(i.jsx)(r.f,{children:Object(i.jsx)(d.c,{innerRef:I,enableReinitialize:!0,initialValues:O,validate:Object(m.A)(w),onSubmit:function(e){var t={first_name:e.first_name.trim(),last_name:e.last_name.trim(),email:e.email,status_id:Number(e.status_id),gender:Number(e.gender),birth_date:Object(m.j)(_)};n({method:"put",api:"/api/v1/admin/users/".concat(y.b[x],"/").concat(e.id),body:t,loading:!0,msg:l.d.messages.createUserFailure},(function(e){e.status===j.c&&(a(),o())}))},children:function(e){var n=e.values,a=e.errors,s=e.touched,c=e.dirty,o=e.handleChange,d=e.handleBlur,u=e.handleSubmit,j=e.isValid;return Object(i.jsxs)(r.q,{onSubmit:u,children:[Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsxs)(f.a,{label:"First Name",width:110,children:[Object(i.jsx)(r.u,{type:"text",placeholder:t("first-name"),invalid:""!==n.first_name.trim()&&s.first_name&&!!a.first_name,autoComplete:"first_name",maxLength:50,value:Object(m.e)(n.first_name),onBlur:d,onChange:function(e){l.d.validate.valueTypingExpressionsName(e)&&o(e)},name:"first_name"}),Object(i.jsx)(r.A,{children:t(a.first_name||"")})]})}),Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsxs)(f.a,{label:"Last Name",width:110,children:[Object(i.jsx)(r.u,{type:"text",placeholder:t("last-name"),invalid:""!==n.last_name.trim()&&s.last_name&&!!a.last_name,autoComplete:"last_name",maxLength:50,value:Object(m.e)(n.last_name),onBlur:d,onChange:function(e){l.d.validate.valueTypingExpressionsName(e)&&o(e)},name:"last_name"}),Object(i.jsx)(r.A,{children:t(a.last_name||"")})]})}),Object(i.jsx)(r.r,{className:"mb-4",children:Object(i.jsx)(f.a,{label:"Email",width:110,children:Object(i.jsx)(r.u,{type:"text",placeholder:t("email"),invalid:""!==n.email&&s.email&&!!a.email,autoComplete:"email",maxLength:50,value:n.email,onBlur:d,onChange:function(e){e.target.value.includes(" ")||o(e)},name:"email",disabled:!0})})}),Object(i.jsx)(r.r,{className:"mb-3",children:Object(i.jsx)(f.a,{label:"Gender",width:110,children:Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsx)(r.u,{type:"radio",name:"gender",value:"0",onChange:o,checked:"0"===n.gender}),"Male",Object(i.jsx)(r.u,{type:"radio",name:"gender",value:"1",onChange:o,checked:"1"===n.gender}),"Female",Object(i.jsx)(r.u,{type:"radio",name:"gender",value:"2",onChange:o,checked:"2"===n.gender}),"Other"]})})}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)(f.a,{label:"Date Of Birth",width:110,children:Object(i.jsx)(h.g,{date:_,setDate:N,fullWidth:!0,yearDropdownItemNumber:100,maxDate:Object(m.l)()})})}),(x===y.a.ADMIN||x===y.a.USER)&&Object(i.jsx)(r.r,{children:Object(i.jsx)(f.a,{label:"Status",width:110,children:Object(i.jsxs)(r.J,{value:n.status_id,onChange:o,name:"status_id",children:[Object(i.jsx)("option",{value:3,children:"Approved"}),Object(i.jsx)("option",{value:2,children:"Disapproved"})]})})}),Object(i.jsx)("div",{style:{textAlign:"right"},children:Object(i.jsx)(r.d,{color:"primary",className:"px-4",type:"submit",disabled:!j||!c&&_===O.birth_date,children:t("update")})})]})}})})})})})})]})]})})},S=function(e){var t=Object(b.a)().t,n=Object(p.b)().callApi,a=e.show,s=e.email,c=e.userId,o=e.handleClose;return Object(i.jsxs)(h.c,{centered:!0,show:a,onClose:o,closeOnBackdrop:!1,children:[Object(i.jsx)(h.d,{children:t("reset-password-confirmation")}),Object(i.jsxs)(r.D,{children:[t("do-you-want-to-reset-password")," ",s," ",t("admin"),"?"]}),Object(i.jsx)(r.E,{children:Object(i.jsxs)(r.I,{children:[Object(i.jsx)(r.j,{children:Object(i.jsx)(r.d,{color:"danger",className:"px-4",onClick:o,children:t("no")})}),Object(i.jsx)(r.j,{children:Object(i.jsx)(r.d,{color:"info",className:"px-4",onClick:function(){e.handleClose(),n({method:"get",api:l.d.rest.resetPassword(c),msg:l.d.messages.resetPasswordFailure})},children:t("yes")})})]})})]})},k=n(49),A=n(31),I=n(78),E=n.n(I),D=(n(971),function(e){var t,n=e.show,a=e.handleClose,s=e.url,c=e.name,r=null===s||void 0===s||null===(t=s.split)||void 0===t?void 0:t.call(s,"."),l="pdf"===(null===r||void 0===r?void 0:r[r.length-1]);return Object(i.jsxs)("div",{style:{width:"100vw",height:"100vh",position:"fixed",display:n?"flex":"none",zIndex:100,top:0,left:0,background:"#1b2638",flexDirection:"column",alignItems:"center",overflow:"auto"},children:[Object(i.jsx)("div",{style:{height:60},children:Object(i.jsxs)("div",{className:"d-flex justify-content-between p-3",style:{width:"100vw",color:"#afc0dc",fontSize:16,position:"fixed",top:0,left:0},children:[Object(i.jsx)("div",{children:c}),Object(i.jsx)("div",{className:"modal-view-image-close-btn",onClick:a,children:Object(i.jsx)("i",{className:"fas fa-times",style:{color:"#9fb0cc",fontSize:20}})})]})}),l?Object(i.jsx)("div",{style:{height:"90vh",display:"flex",alignItems:"center",width:"95vw"},children:Object(i.jsx)(h.p,{title:c,width:"100%",height:"100%",style:{border:"solid 1px gray",textAlign:"center"},src:s},s)}):Object(i.jsx)("div",{style:{height:"90vh",display:"flex",alignItems:"center"},children:Object(i.jsx)("div",{style:{width:1e3,minHeight:500,background:"white",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(i.jsx)(h.q,{src:s||"https://i.imgur.com/hGefqAz.jpg",alt:c,style:{maxWidth:1e3,maxHeight:640}})})})]})}),z=n(117),M={signature:"",card_number:"",image_back:"",card_expires:0,image_front:"",card_location:"",gender:"",last_name:"",first_name:"",date_of_birth:"",files_professional:[],files_consultation:[],files:{curriculum_vitae:[]},loading:!1},B=function(e){var t,n=null===e||void 0===e||null===(t=e.split)||void 0===t?void 0:t.call(e,".");return"pdf"===n[n.length-1]?Object(i.jsx)(h.o,{file:e,children:Object(i.jsx)(z.b,{pageNumber:1,height:240})}):Object(i.jsx)(h.q,{src:e,alt:"document",style:{objectFit:"contain",width:"100%",height:"100%"}})},T=y.a.NURSE,R=y.a.ASSISTANT,P=(N={},Object(k.a)(N,T,{prefix:"nurse",postfix:"documents-profile"}),Object(k.a)(N,R,{prefix:"assistants",postfix:"documents"}),N),V=function(e){var t,n=Object(p.b)().callApi,l=e.show,o=e.handleClose,d=e.id,u=e.userStatus,b=e.modalSendEmail,f=e.getUsers,O=e.setModalSendEmail,x=e.type,v=Object(c.useState)(M),g=Object(s.a)(v,2),w=g[0],_=g[1],N=Object(c.useState)({show:!1,url:"",name:""}),C=Object(s.a)(N,2),S=C[0],k=C[1],I=P[x];Object(c.useEffect)((function(){l&&d&&(_(Object(a.a)(Object(a.a)({},w),{},{loading:!0})),n({method:"get",api:"/api/v1/admin/users/".concat(null===I||void 0===I?void 0:I.prefix,"/").concat(d,"/").concat(null===I||void 0===I?void 0:I.postfix)},(function(e){var t=e.status,n=e.data;t===j.c?_(Object(a.a)(Object(a.a)({},n),{},{loading:!1})):_(M)})))}),[d]);var z,T=function(e){n({method:"put",api:"/api/v1/admin/users/".concat(null===I||void 0===I?void 0:I.prefix,"/").concat(d,"/").concat(null===I||void 0===I?void 0:I.postfix),body:{approval:e},loading:!0},(function(e){e.status===j.c&&(o(),f())}))},R=Object(c.useCallback)((function(e){return e.map((function(e){return Object(i.jsxs)("div",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},className:"link mt-1",onClick:function(){return k({show:!0,url:e.link,name:e.file_name})},children:["\u2022 ",e.file_name]})}))}),[]),V=(null===w||void 0===w||null===(t=w.signature)||void 0===t?void 0:t.length)>0?null===w||void 0===w?void 0:w.signature[0]:"https://i.imgur.com/hGefqAz.jpg",L=A.g;w.loading||(L=Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"modal-view-documents-title",children:["Name: ",w.first_name+" "+w.last_name]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"col-4",children:[Object(i.jsx)("div",{className:"modal-view-documents-title mt-3",children:"I. Identification Information"}),Object(i.jsxs)("div",{className:"modal-view-documents-children mb-3",children:[Object(i.jsxs)("div",{className:"mt-1",children:["ID number: ",w.card_number]}),Object(i.jsxs)("div",{className:"mt-1",children:["Expires on: ",E()(1e3*w.card_expires).format("DD-MM-YYYY")]}),Object(i.jsxs)("div",{className:"mt-1",children:["Location: ",w.card_location]})]}),Object(i.jsxs)("div",{className:"modal-view-documents-title mt-3",children:["II. ",x===y.a.NURSE?"Certificate":"CV"]}),Object(i.jsxs)("div",{className:"modal-view-documents-children",children:[R(w.files_professional||[]),R(w.files_consultation||[]),R((null===(z=w.files)||void 0===z?void 0:z.curriculum_vitae)||[])]})]}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsxs)("div",{className:"row mr-3",children:[Object(i.jsx)("div",{className:"cursor-pointer col-md-6 px-3",onClick:function(){return k({show:!0,url:w.image_front,name:"Front Card"})},style:{height:240,display:"flex",justifyContent:"center"},children:B(w.image_front||"https://i.imgur.com/hGefqAz.jpg")}),Object(i.jsx)("div",{className:"cursor-pointer col-md-6 px-3",onClick:function(){return k({show:!0,url:w.image_back,name:"Back Card"})},style:{height:240,display:"flex",justifyContent:"center"},children:B(w.image_back||"https://i.imgur.com/hGefqAz.jpg")})]})})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("div",{className:"modal-view-documents-title mt-3",children:"III. E-Signature"}),Object(i.jsx)("div",{className:"d-flex justify-content-center",children:Object(i.jsx)("div",{className:"cursor-pointer",onClick:function(){return k({show:!0,url:V,name:"E-Signature"})},style:{width:480,height:250,alignItems:"center",display:"flex",justifyContent:"center"},children:B(V)})})]}),Object(i.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(i.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return O({show:!0})},children:"Send email"}),Object(i.jsx)("button",{className:"btn btn-primary mr-3",onClick:function(){return T(!1)},disabled:2===u,children:"Disapproved"}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){return T(!0)},disabled:3===u,children:"Approved"})]})]}));return Object(i.jsx)("div",{className:b.show?"hb-modal-hidden":"",children:Object(i.jsxs)(h.c,{size:"xl",centered:!0,show:l,onClosed:o,onClose:o,closeOnBackdrop:!1,children:[Object(i.jsxs)(h.d,{closeButton:!0,children:[Object(m.d)(x)," Infomation"]}),Object(i.jsxs)(r.D,{children:[Object(i.jsx)(D,Object(a.a)(Object(a.a)({},S),{},{handleClose:function(){return k(Object(a.a)(Object(a.a)({},S),{},{show:!1}))}})),L]})]})})},L=(n(972),[0,5,4,3,2,1]),U=function(e){var t,n=e.show,d=e.nurseId,u=e.nurseName,b=e.nurseThumbnail,m=e.nurseRating,f=e.handleClose,O=Object(o.c)(),p=Object(c.useState)({data:[],loading:!0,full:!0,page:1}),x=Object(s.a)(p,2),v=x[0],g=x[1],y=Object(c.useState)(0),w=Object(s.a)(y,2),_=w[0],N=w[1];Object(c.useEffect)((function(){var e,t;n&&(N(0),g(Object(a.a)(Object(a.a)({},v),{},{loading:!0})),e={method:"get",api:l.d.rest.getDetailFeedbacks(d,1)},t=function(e){var t=e.status,n=e.data;t===j.c&&g((function(e){return{data:n,loading:!1,full:!0,page:1}}))},O(Object(j.d)(e,t)))}),[d]);return Object(i.jsxs)(h.c,{size:"xl",style:{height:"90vh"},centered:!0,show:n,onClose:f,closeOnBackdrop:!1,children:[Object(i.jsx)(h.d,{closeButton:!0,children:"Feedbacks"}),Object(i.jsxs)(r.D,{className:"px-0 py-3",style:{overflowY:"auto",overflowX:"hidden"},children:[Object(i.jsxs)("div",{className:"p-5 nurse-wrapper",children:[Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)("img",{alt:"nurse-avatar",src:b||A.c,className:"nurse-avatar"}),Object(i.jsx)("div",{className:"nurse-name",children:u})]}),Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsxs)("span",{className:"rating-wrapper",children:[Object(i.jsx)("span",{className:"rating",children:null===(t=Number(m))||void 0===t?void 0:t.toFixed(1)}),Object(i.jsx)("span",{className:"max-rating",children:"/5.0"})]}),Object(i.jsx)(h.y,{size:"lg",rating:m})]})]}),v.loading?Object(i.jsx)("div",{className:"mt-5",children:A.g}):Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"row px-5 py-3",children:L.map((function(e){return function(e){var t;return t=0===e?Object(i.jsx)("span",{children:"All"}):Array.from({length:e}).map((function(e,t){return Object(i.jsx)("i",{className:"fa fa-star"},t)})),Object(i.jsx)("div",{onClick:function(){return N(e)},className:"col-md-2",children:Object(i.jsxs)("div",{className:"rating-select ".concat(e===_?"active":""),style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(i.jsx)("div",{children:t}),Object(i.jsxs)("div",{children:["(",v.data[e].number_feedback,")"]})]})},e)}(e)}))}),Object(i.jsx)("div",{children:v.data[_].user_comments.map((function(e){return function(e){var t=e.user_id,n=e.avatar,a=e.first_name,s=e.last_name,c=e.feedback,r=e.customer_comments,l=e.modified_date;return Object(i.jsxs)("div",{className:"feedback-wrapper",children:[Object(i.jsx)("div",{className:"mx-3",children:Object(i.jsx)("img",{alt:"user-avatar",src:n||A.c,className:"user-avatar"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"feedback-username",children:a+" "+s}),Object(i.jsx)(h.z,{size:"sm",rating:c}),Object(i.jsx)("div",{className:"feedback-content",children:r}),Object(i.jsx)("div",{className:"feedback-created-date",children:E()(1e3*l).format("DD.MM.YYYY hh:mm")})]})]},t)}(e)}))}),0===v.data[_].user_comments.length&&Object(i.jsx)("div",{className:"mt-5",style:{textAlign:"center",fontSize:20},children:"There is no feedback yet"})]})]})]})},F=function(e){var t=e.show,n=e.handleClose,a=e.popupViewDocuments,l=e.handleCloseParent,o=e.callApi,d=Object(c.useState)(""),u=Object(s.a)(d,2),b=u[0],m=u[1];Object(c.useEffect)((function(){t&&m("")}),[t]);return Object(i.jsxs)(h.c,{style:{borderRadius:10},size:"lg",centered:!0,show:t,onClosed:n,onClose:n,closeOnBackdrop:!1,children:[Object(i.jsxs)(h.d,{closeButton:!0,children:["To: ",a.userEmail]}),Object(i.jsxs)(r.D,{className:"px-4 pt-3",style:{textAlign:"right"},children:[Object(i.jsx)("textarea",{value:b,onChange:function(e){return m(e.target.value)},className:"form-control",rows:12,placeholder:"Email content ..."}),Object(i.jsx)("button",{className:"btn btn-primary px-4 mt-3",onClick:function(){o({method:"post",api:"/api/v1/admin/users/nurse/".concat(a.id,"/re-upload-email"),loading:!0,body:{data:b}},(function(e){e.status===j.c&&(n(),l())}))},disabled:""===b.trim(),children:"Send"})]})]})},q=(n(973),{first_name:"",last_name:"",email:"",password:"",status_id:3}),Y={first_name:"",last_name:"",email:"",status_id:3,gender:"3",birth_date:null};t.default=function(e){var t,n,d=Object(b.a)().t,u=Object(p.b)().callApi,f="admin"===Object(o.d)((function(e){return e.auth})).group_name,O=new URLSearchParams(null===(t=e.location)||void 0===t?void 0:t.search),x=O.get("type")||y.a.ADMIN,v=Number(O.get("status"))||0;Object.values(y.a).includes(x)||(x=y.a.ADMIN),(v<0||v>4)&&(v=0);var w=[{key:"no",_style:{width:"3%"}},{key:"first_name",_classes:"font-weight-bold",_style:{width:"12%"}},{key:"last_name",_classes:"font-weight-bold",_style:{width:"12%"}},{key:"email",_style:{width:"17%"}},{key:"gender",_style:{width:"8%"},renderContent:function(e){return l.k[e.gender]}},{key:"birth_date",_style:{width:"10%"},label:"Date Of Birth",renderContent:function(e){return e.birth_date?Object(m.j)(e.birth_date):Object(i.jsx)("div",{style:{marginLeft:"25%"},children:"-"})}},{key:"feed_back",_style:{width:"10%"},label:"Feedback",renderContent:function(e){return Object(i.jsx)(i.Fragment,{children:e.feed_back?Object(i.jsxs)("div",{children:[Object(i.jsx)(h.y,{rating:e.feed_back,size:"sm"}),Object(i.jsx)("div",{className:"link",style:{fontSize:12},onClick:function(){return pe({show:!0,nurseId:e.id,nurseName:e.first_name+" "+e.last_name,nurseThumbnail:"",nurseRating:e.feed_back})},children:"View detail"})]}):Object(i.jsx)("div",{style:{marginLeft:"25%"},children:"-"})})}},{key:"verify_email",_style:{width:"10%"}},{key:"status_id",label:"Status",_style:{width:"8%"},disableMaxLine:!0,renderContent:function(e){return Object(i.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(i.jsx)("div",{className:"user-status",children:l.l[e.status_id]}),Object(i.jsx)("div",{style:{width:"100%",textAlign:"right",fontSize:15,visibility:x!==y.a.NURSE&&x!==y.a.ASSISTANT||4===e.status_id?"hidden":"visible",cursor:"pointer"},onClick:function(){return Se(e)},children:Object(i.jsx)("i",{className:"fas fa-caret-square-down"})})]})}},{key:"action",_style:{width:"10%"},renderContent:function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.d,{color:"primary",variant:"outline",shape:"square",size:"sm",style:{marginRight:10,visibility:f||"admin"!==e.type?"hidden":"visible"},onClick:function(){return ce({show:!0,email:e.email,userId:e.id})},children:Object(i.jsx)("i",{className:"fas fa-sync-alt",children:" "})}),Object(i.jsx)(r.d,{disabled:"Inactive"===e.verify_email,color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){return ne({show:!0,initialValues:e})},children:Object(i.jsx)("i",{className:"fas fa-pencil-alt",children:" "})})]})}}];"nurse"!==x&&w.splice(6,1);var _=(null===(n=l.j.filter((function(e){return(null===e||void 0===e?void 0:e.id)===v})))||void 0===n?void 0:n[0])||null,N=Object(c.useState)(""),k=Object(s.a)(N,2),I=k[0],E=k[1],D=Object(c.useState)(x),z=Object(s.a)(D,2),M=z[0],B=z[1],T=Object(c.useState)(_),R=Object(s.a)(T,2),P=R[0],L=R[1],G=Object(c.useState)({data:[],loading:!0,total:0,totalPages:0,page:1}),J=Object(s.a)(G,2),W=J[0],K=J[1],H=Object(c.useState)({show:!1,initialValues:q}),X=Object(s.a)(H,2),$=X[0],Q=X[1],Z=Object(c.useState)({show:!1,initialValues:Y}),ee=Object(s.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(c.useState)({show:!1,email:"",userId:""}),se=Object(s.a)(ae,2),ie=se[0],ce=se[1],re=Object(c.useState)({show:!1,id:"",userStatus:0,userEmail:"",type:"nurse"}),le=Object(s.a)(re,2),oe=le[0],de=le[1],ue=Object(c.useState)(!1),je=Object(s.a)(ue,2),be=je[0],me=je[1],he=Object(c.useState)({show:!1,nurseId:"",nurseName:"",nurseThumbnail:"",nurseRating:0}),fe=Object(s.a)(he,2),Oe=fe[0],pe=fe[1],xe=Object(c.useState)({show:!1}),ve=Object(s.a)(xe,2),ge=ve[0],ye=ve[1],we=Object(c.useRef)(0),_e=y.b[M],Ne=function(e){e||(e=W.page),K(Object(a.a)(Object(a.a)({},W),{},{loading:!0})),u({method:"get",api:"/api/v1/admin/users/".concat(_e,"?status=").concat(P?P.id:"","&page_size=").concat(10,"&page_number=").concat(e,"&search_name=").concat(I)},(function(t){var n=t.data;t.status===j.c?K({data:n.users.map((function(t,n){return Object(a.a)(Object(a.a)({},t),{},{no:n+1+10*(e-1),birth_date:Object(m.h)(t.birth_date)})})),loading:!1,total:n.total,totalPages:Math.ceil(n.total/10),page:e}):K(Object(a.a)(Object(a.a)({},W),{},{loading:!1}))}))};Object(c.useEffect)((function(){B(x),x!==y.a.NURSE&&L(null),K(Object(a.a)(Object(a.a)({},W),{},{loading:!0,data:[],total:0,totalPages:0}))}),[x]),Object(c.useEffect)((function(){L(_)}),[v]),Object(c.useEffect)((function(){be&&(we.current&&clearTimeout(we.current),we.current=setTimeout((function(){Ne(1)}),1e3)),me(!0)}),[I]);Object(c.useEffect)((function(){Ne(1)}),[P,M]);var Ce=Object(i.jsx)("div",{});W.loading||W.total||(Ce=Object(i.jsx)("div",{children:d("no-items-found")}));var Se=function(e){de({show:!0,id:e.id,userStatus:e.status_id,userEmail:e.email,type:e.type})},ke=function(){de(Object(a.a)(Object(a.a)({},oe),{},{show:!1}))};return Object(i.jsxs)("div",{style:{width:"90%",margin:"10px auto"},children:[Object(i.jsx)(U,Object(a.a)(Object(a.a)({},Oe),{},{handleClose:function(){return pe(Object(a.a)(Object(a.a)({},Oe),{},{show:!1}))}})),Object(i.jsx)(g,{initialValues:$.initialValues,show:$.show,handleClose:function(){return Q({show:!1,initialValues:q})},searchUsers:function(){return Ne(1)}}),Object(i.jsx)(C,{type:M,initialValues:te.initialValues,show:te.show,handleClose:function(){return ne({show:!1,initialValues:Y})},searchUsers:function(){return Ne(1)}}),Object(i.jsx)(S,{show:ie.show,handleClose:function(){return ce({show:!1,email:"",userId:""})},email:ie.email,userId:ie.userId}),Object(i.jsx)(V,Object(a.a)(Object(a.a)({modalSendEmail:ge},oe),{},{setModalSendEmail:ye,handleClose:ke,getUsers:Ne})),Object(i.jsx)(F,Object(a.a)(Object(a.a)({callApi:u},ge),{},{popupViewDocuments:oe,handleClose:function(){return ye(Object(a.a)(Object(a.a)({},ge),{},{show:!1}))},handleCloseParent:ke})),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:M===y.a.ADMIN?"Admin Management":M===y.a.USER?"Basic Member Management":M===y.a.NURSE?"Nurse ".concat(1===v?"- Pending Approval":"Management"):"Assistant ".concat(1===v?"- Pending Approval":"Management")}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:20,marginBottom:30},children:[Object(i.jsxs)("div",{style:{position:"relative",width:218,height:35},children:[Object(i.jsx)(r.u,{className:"mr-3",style:{width:218,position:"absolute",paddingLeft:32},type:"text",placeholder:d("search"),value:I,maxLength:50,onChange:function(e){return E(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&Ne(1)}}),Object(i.jsx)("i",{style:{position:"absolute",left:10,top:11,color:"#777"},className:"fa fa-search icon"})]}),!v&&Object(i.jsx)("div",{style:{width:250},children:Object(i.jsx)(h.x,{className:"mx-3",selected:P,setSelected:L,defaultValue:"Select status",data:x===y.a.NURSE||y.a.ASSISTANT?l.j:l.j.filter((function(e){return 1!==(null===e||void 0===e?void 0:e.id)&&4!==(null===e||void 0===e?void 0:e.id)})),loading:!1,full:!0,value:P?P.name:""})}),!f&&"admin"===x&&Object(i.jsx)("div",{style:{textAlign:"right",flex:1},children:Object(i.jsx)(r.d,{color:"primary",onClick:function(){return Q({show:!0,initialValues:{first_name:"",last_name:"",email:"",password:"",status_id:3}})},children:d("add-new-user")})})]})]}),Object(i.jsx)("div",{className:"hb-table",children:Object(i.jsx)(r.l,{items:W.data,fields:w,loading:W.loading,noItemsViewSlot:Ce,hover:!0,striped:!0,scopedSlots:Object(A.k)(w)})}),Object(A.j)(W.totalPages,W.page,(function(e){W.page!==e&&Ne(e)}),W.total)]})}},604:function(e,t,n){var a=n(605),s=n(606),i=n(607),c=n(609);e.exports=function(e,t){return a(e)||s(e,t)||i(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},605:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},606:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,s=!1,i=void 0;try{for(var c,r=e[Symbol.iterator]();!(a=(c=r.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(l){s=!0,i=l}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},607:function(e,t,n){var a=n(608);e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},608:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.default=e.exports,e.exports.__esModule=!0},609:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},611:function(e,t,n){"use strict";var a=n(3);n(1);t.a=function(e){var t=e.className,n=e.label,s=e.children,i=e.width,c=e.centered,r=e.style;return i=i||110,Object(a.jsxs)("div",{className:"d-flex mb-3 ".concat(c?"align-items-center":""," ").concat(t||""),style:r,children:[Object(a.jsx)("div",{style:{minWidth:i,marginTop:6},children:n}),Object(a.jsx)("div",{style:{width:"calc(100% - ".concat(i,"px)")},children:s})]})}},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(604),s=n.n(a),i=n(191),c=n.n(i),r=n(1),l=n(592);function o(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var d={};function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&d[t[0]]||("string"===typeof t[0]&&(d[t[0]]=new Date),o.apply(void 0,t))}function j(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function b(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return u("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],s=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var c=function(e,n){var a=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===a||2===a};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!c(a,e)||s&&!c(i,e))))}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,a=Object(r.useContext)(l.a)||{},i=a.i18n,c=a.defaultNS,o=n||i||Object(l.d)();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new l.b),!o){u("You will need to pass in an i18next instance by using initReactI18next");var d=function(e){return Array.isArray(e)?e[e.length-1]:e},m=[d,{},!1];return m.t=d,m.i18n={},m.ready=!1,m}o.options.react&&void 0!==o.options.react.wait&&u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=h(h(h({},Object(l.c)()),o.options.react),t),O=f.useSuspense,p=e||c||o.options&&o.options.defaultNS;p="string"===typeof p?[p]:p||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(p);var x=(o.isInitialized||o.initializedStoreOnce)&&p.every((function(e){return b(e,o,f)}));function v(){return{t:o.getFixedT(null,"fallback"===f.nsMode?p:p[0])}}var g=Object(r.useState)(v()),y=s()(g,2),w=y[0],_=y[1],N=Object(r.useRef)(!0);Object(r.useEffect)((function(){var e=f.bindI18n,t=f.bindI18nStore;function n(){N.current&&_(v())}return N.current=!0,x||O||j(o,p,(function(){N.current&&_(v())})),e&&o&&o.on(e,n),t&&o&&o.store.on(t,n),function(){N.current=!1,e&&o&&e.split(" ").forEach((function(e){return o.off(e,n)})),t&&o&&t.split(" ").forEach((function(e){return o.store.off(e,n)}))}}),[p.join()]);var C=[w.t,o,x];if(C.t=w.t,C.i18n=o,C.ready=x,x)return C;if(!x&&!O)return C;throw new Promise((function(e){j(o,p,(function(){e()}))}))}},971:function(e,t,n){},972:function(e,t,n){},973:function(e,t,n){}}]);
//# sourceMappingURL=16.2f58e0dc.chunk.js.map