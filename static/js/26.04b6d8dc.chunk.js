(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[26],{616:function(e,t,n){"use strict";var r=n(3),a=n(19),o=(n(1),n(31)),s=n(617),i=n.n(s);t.a=function(){return Object(r.jsx)(a.s,{className:i.a.header,children:o.h})}},617:function(e,t,n){e.exports={header:"Header_header__3Keph"}},622:function(e,t,n){"use strict";var r=n(3),a=(n(1),n(19)),o=n(623),s=n.n(o),i=n(616);t.a=function(e){var t=e.className,n=void 0===t?"":t,o=e.children;return Object(r.jsxs)("div",{className:"hb-user c-app c-default-layout flex-row align-items-center ".concat(s.a.wrapper," ").concat(n),children:[Object(r.jsx)(i.a,{}),Object(r.jsx)(a.k,{className:s.a.container,children:Object(r.jsx)("div",{className:s.a.cardWrapper,children:Object(r.jsx)("div",{className:s.a.cardBody,children:o})})})]})}},623:function(e,t,n){e.exports={wrapper:"Container_wrapper__z5goK",container:"Container_container__3GmCQ",cardWrapper:"Container_cardWrapper__17yG1",cardBody:"Container_cardBody__1YCba"}},853:function(e,t,n){e.exports={inputText:"ForgotPassword_inputText__WLMP3",cardTitle:"ForgotPassword_cardTitle__2LAJg",cardContent:"ForgotPassword_cardContent__2FAFl",inputPassword:"ForgotPassword_inputPassword__3cEd1",inputTextPassword:"ForgotPassword_inputTextPassword__WVTmr",iconPassword:"ForgotPassword_iconPassword__p-42_",email:"ForgotPassword_email__1fapw",forgotPassword:"ForgotPassword_forgotPassword__3ckC-",btnSubmit:"ForgotPassword_btnSubmit__1ayl4",createAccount:"ForgotPassword_createAccount__75cvw",register_link:"ForgotPassword_register_link__38ALX",header:"ForgotPassword_header__2EoMy",accept:"ForgotPassword_accept__oasTY",link:"ForgotPassword_link__KCeg1",btnSignUp:"ForgotPassword_btnSignUp__2ekLI",hbIcon:"ForgotPassword_hbIcon__34xm0",lbTermsOfService:"ForgotPassword_lbTermsOfService__3w4Re",formGroupActions:"ForgotPassword_formGroupActions__1SJSN"}},985:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(7),o=n(16),s=n(1),i=n(19),c=n(39),l=n(603),d=n(29),u=n(38),h=n(32),_=n(853),b=n.n(_),m=n(622),g=n(115),p=n(186),w=n(602),j=function(e){return l.b().shape({email:l.d().min(3,"Das E-Mail Format ist nicht korrekt.").matches(d.d.validate.validateEmail(),"Das E-Mail Format ist nicht korrekt.").required("E-Mail ist erforderlich!")})};t.default=function(e){var t,n=Object(c.h)(),l=Object(p.b)().callApi,_={email:new URLSearchParams(null===(t=e.location)||void 0===t?void 0:t.search).get("email")||""},f=Object(s.useState)({show:!1,title:"",content:""}),x=Object(o.a)(f,2),v=x[0],P=x[1],O=function(){P(Object(a.a)(Object(a.a)({},v),{},{show:!1}))},k=function(){n.push("/sign-in")},C=Object(s.useRef)();Object(s.useEffect)((function(){var e;null===C||void 0===C||null===(e=C.current)||void 0===e||e.validateForm()}),[]);return Object(r.jsxs)("div",{className:"petrol",children:[Object(r.jsx)(g.j,{show:v.show,handleClose:v.handleClose||O,title:v.title,content:v.content,up:v.btnText||"Verstanden",upCallback:function(){return v.onClick?v.onClick():k()}}),Object(r.jsx)(m.a,{className:"FormSignUp-container",children:Object(r.jsx)(w.c,{innerRef:C,initialValues:_,validate:Object(h.A)(j),onSubmit:function(e){l({method:"get",api:d.d.rest.forgotPasswordUser(e.email),loading:!0,msg:d.d.messages.forgotPasswordFailure},(function(t){var n=t.id,r=t.status,a=t.text_de;r===u.c&&P({show:!0,title:"Information",content:"Wir haben Ihnen gerade eine E-Mail gesendet. Bitte folgen Sie den Anweisungen dort, um Ihr Passwort zur\xfcckzusetzen.",handleClose:k}),r===u.b&&P("1116"===n?{show:!0,title:"Vergessen fehlgeschlagen",content:a,onClick:function(){return function(e){l({method:"get",api:d.d.rest.resendVerifyEmail(e),loading:!0},(function(e){var t=e.text_de;P({show:!0,title:"Information",content:t||"Fehler beim erneuten Senden der Verifizierungs-E-Mail.",upText:"Verstanden",handleClose:k,onClick:k})}))}(e.email)},btnText:"Erneut senden"}:{show:!0,title:"Information",content:a||"Ihre E-Mail Adresse konnte nicht gefunden werden. Bitte versuchen Sie es erneut.",onClick:O})}))},children:function(e){var t=e.values,a=e.errors,o=e.handleChange,s=e.handleBlur,c=e.handleSubmit,l=e.isValid;return Object(r.jsxs)(i.q,{onSubmit:c,children:[Object(r.jsxs)(g.e,{type:"button",color:"petrol",onClick:function(){return n.push("/sign-in")},className:b.a.btnSignUp,children:[Object(r.jsx)("i",{className:"hb-icon-arrow-left ".concat(b.a.hbIcon)})," Zur\xfcck"]}),Object(r.jsxs)("h1",{className:b.a.cardTitle,children:["Passwort",Object(r.jsx)("br",{}),"vergessen?"]}),Object(r.jsx)("p",{className:b.a.cardContent,children:"Bitte geben Sie Ihre E-Mail Adresse ein und wir senden Ihnen sofort einen Link, damit Sie Ihr Passwort zur\xfccksetzen k\xf6nnen."}),Object(r.jsx)(g.f,{type:"email",className:"mb-0",placeholder:"E-Mail",autoComplete:"email",invalid:""!==t.email&&!!a.email,name:"email",maxLength:50,value:t.email,onChange:function(e){e.target.value.includes(" ")||o(e)},onBlur:s,error:null===a||void 0===a?void 0:a.email}),Object(r.jsx)(i.r,{className:"m-0",children:Object(r.jsx)(i.I,{children:Object(r.jsx)(i.j,{xs:"12",children:Object(r.jsx)(g.a,{color:"violet",children:"Passwort zur\xfccksetzen",disabled:!l,btnClassName:b.a.btnSubmit})})})})]})}})})]})}}}]);
//# sourceMappingURL=26.04b6d8dc.chunk.js.map