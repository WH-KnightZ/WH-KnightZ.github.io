(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[35],{1031:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(49),s=a(7),i=a(41),r=a.n(i),o=a(85),l=a(16),d=a(19),u=a(115),m=a(1),b=a(196),p=(a(930),function(e){var t=e.promotionCode,a=(e.className,e.product),c=Object(m.useState)(t),s=Object(l.a)(c,2),i=s[0],r=s[1],o=Object(m.useState)(!1),d=Object(l.a)(o,2),p=d[0],j=d[1],h=function(e){return e.reduce((function(e,t){return e+t.price}),0).toFixed(2)};return Object(n.jsxs)("div",{className:"InformationProduct-wrapper",children:[Object(n.jsxs)("div",{className:"InformationProduct-header",children:["Subcribe to ".concat(function(e){return e.map((function(e){return e.productName}))}(a)," "),Object(n.jsxs)("div",{className:"InformationProduct-header__wrapper",children:[Object(n.jsxs)("span",{className:"InformationProduct-header__price",children:["\u20ac",h(a)]}),Object(n.jsxs)("div",{className:"InformationProduct-header__recuring",children:[Object(n.jsx)("span",{children:"per"}),Object(n.jsx)("span",{children:"month"})]})]})]}),Object(n.jsxs)("div",{className:"InformationProduct-body",children:[Object(n.jsx)("h3",{children:"Content"}),Object(n.jsxs)("div",{children:[function(e){return e.map((function(e,t){var a;return Object(n.jsxs)("div",{className:"InformationProduct-prices",children:[Object(n.jsxs)("div",{className:"InformationProduct-prices__label",children:[e.productName,Object(n.jsx)("p",{children:"Billed monthly"})]}),Object(n.jsxs)("div",{className:"InformationProduct-prices__itemPrice",children:["\u20ac",null===(a=e.price)||void 0===a?void 0:a.toFixed(2)]})]},t)}))}(a),Object(n.jsxs)("div",{className:"InformationProduct-prices",children:[Object(n.jsx)("div",{className:"InformationProduct-prices__label",children:"Subtotal"}),Object(n.jsxs)("div",{className:"InformationProduct-prices__itemPrice",children:["\u20ac",h(a)]})]}),Object(n.jsx)("div",{className:"InformationProduct-coupon",children:p?Object(n.jsx)(b.a,{onChange:function(e){return r(e.target.value)},placeholder:"Add promotion code",value:i,name:"promote",onBlur:function(e){j(!!i)},className:"InformationProduct-coupon__input",autoFocus:!0}):Object(n.jsx)("div",{className:"InformationProduct-coupon__btn",children:Object(n.jsx)(u.c,{onClick:function(e){j(!0)},children:" Add Promotion code "})})}),Object(n.jsxs)("div",{className:"InformationProduct-total",children:[Object(n.jsx)("div",{children:"Total due today"}),Object(n.jsxs)("div",{className:"InformationProduct-total__value",children:["\u20ac",h(a)]})]})]})]})]})}),j=function(e){var t=e.handleSubmit,a=e.children;return Object(n.jsx)("form",{onSubmit:t,children:a})},h=a(975),f=a(688),O=function(e){e.options;var t=e.typeCard,a=(e.onReady,e.onBlur,e.onChange,e.onForcus,e.label),c=e.placeholder,i=e.value,r=e.disable,o=t;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{className:"CreditCard-tabsPanelItems__label",children:a}),Object(n.jsx)(o,Object(s.a)(Object(s.a)({},e),{},{className:"hb-input-credit",placeholder:c,value:i,diable:r}))]})},v=function(e){var t=e.fullName,a=e.emailUser,c=e.className,i=e.disableNumber,r=e.setDisableNumber,o=e.disableDate,u=e.setDisableDate,p=e.disableCVC,j=e.setDisableCVC,h=e.disableEmail,v=e.setDisableEmail,_=e.disableName,x=e.setDisableName,g=(e.isCredit,Object(m.useState)(t)),y=Object(l.a)(g,2),C=y[0],N=y[1],S=Object(m.useState)(a),w=Object(l.a)(S,2),E=w[0],P=w[1],I=Object(m.useMemo)((function(){return{style:{base:{fontSize:"13px",color:" #005F71",fontWeight:"500",letterSpacing:"0.025em","::placeholder":{color:" #abafbf"}},invalid:{color:"#9e2146"}}}}),[]),D=[{id:1,onChange:function(e){e.target.value?(N(e.target.value),x(!1)):(x(!0),N(""))},type:"text",placeholder:"Vorname Nachname",autoComplete:"name",name:"name",value:C,label:"Vollst\xe4ndiger Name des Inhabers",typeCard:b.a},{id:2,onChange:function(e){e.target.value?(P(e.target.value),v(!1)):(v(!0),P(""))},type:"text",placeholder:"E-Mail",autoComplete:"email",name:"email",value:E,label:"E-Mail",typeCard:b.a},{id:3,onChange:function(e){e.complete?r(!1):r(!0)},label:"Kreditkartennummer",typeCard:f.CardNumberElement},{id:4,onChange:function(e){e.complete?u(!1):u(!0)},label:"G\xfcltig bis",typeCard:f.CardExpiryElement},{id:5,onChange:function(e){e.complete?j(!1):j(!0)},label:"CVV",typeCard:f.CardCvcElement}];return Object(n.jsx)("div",{className:c,children:Object(n.jsx)(d.I,{className:"p-0",children:D.map((function(e){var t=Object(s.a)(Object(s.a)({},e),{},{options:I});return Object(n.jsx)(d.j,{md:12,children:Object(n.jsx)(O,Object(s.a)(Object(s.a)({},t),{},{placeholder:t.placeholder,disable:!(i||o||p||h||_)}))},t.id)}))})})},_=function(e){e.onClick;var t=e.fullName,a=e.emailUser,c=e.className,i=(e.children,e.disableSEPA),r=e.setDisableSEPA,o=e.disableEmail,u=e.setDisableEmail,p=e.disableName,j=e.setDisableName,h=Object(m.useState)(t),v=Object(l.a)(h,2),_=v[0],x=v[1],g=Object(m.useState)(a),y=Object(l.a)(g,2),C=y[0],N=y[1],S=Object(m.useMemo)((function(){return{supportedCountries:["SEPA"],style:{base:{fontSize:"13px",color:" #005F71",fontWeight:"500",letterSpacing:"0.025em","::placeholder":{color:" #abafbf"},placeholderCountry:"DE"},invalid:{color:"#9e2146"}}}}),[]),w=[{id:1,onChange:function(e){e.target.value?(x(e.target.value),j(!1)):(j(!0),x(""))},type:"text",placeholder:"Vorname Nachname",autoComplete:"name",name:"name",value:_,label:"Vollst\xe4ndiger Name des Inhabers",typeCard:b.a},{id:2,onChange:function(e){e.target.value?(N(e.target.value),u(!1)):(u(!0),N(""))},type:"text",placeholder:"E-Mail",autoComplete:"email",name:"email",value:C,label:"E-Mail",typeCard:b.a},{id:3,onChange:function(e){e.complete?r(!1):r(!0)},onReady:function(){return console.log("234")},label:"IBAN eingeben",typeCard:f.IbanElement}];return Object(n.jsx)("div",{className:c,children:Object(n.jsx)(d.I,{className:"p-0",children:w.map((function(e){var t=Object(s.a)(Object(s.a)({},e),{},{options:S});return Object(n.jsx)(d.j,{md:12,children:Object(n.jsx)(O,Object(s.a)(Object(s.a)({},t),{},{disable:!(o||p||i)}))},t.id)}))})})},x=a(21),g=a(73),y=a(39),C=(a(931),a(932),a(44)),N=a.n(C),S=a(933),w=a.n(S),E=a(29),P=a(186),I=a(45);t.default=function(e){var t,a=Object(x.d)((function(e){return e.auth.first_name})),i=Object(x.d)((function(e){return e.auth.last_name})),b=Object(x.d)((function(e){return e.auth.email})),O=Object(x.d)((function(e){return e.auth.stripe_payment})),C=a+" "+i,S=Object(x.c)(),D=Object(P.b)().callApi,A=Object(y.h)(),k=Object(f.useStripe)(),M=Object(f.useElements)(),R=Object(m.useState)(0),B=Object(l.a)(R,2),K=B[0],z=B[1],V=Object(m.useState)(!1),F=Object(l.a)(V,2),q=F[0],Z=F[1],J=Object(m.useState)({show:!1,content:"",status:""}),L=Object(l.a)(J,2),T=L[0],U=L[1],W=Object(m.useState)({show:!1,url:""}),X=Object(l.a)(W,2),G=X[0],Q=X[1],H=Object(m.useState)(""),Y=Object(l.a)(H,2),$=Y[0],ee=Y[1],te=Object(m.useState)(!C),ae=Object(l.a)(te,2),ne=ae[0],ce=ae[1],se=Object(m.useState)(!b),ie=Object(l.a)(se,2),re=ie[0],oe=ie[1],le=Object(m.useState)(!0),de=Object(l.a)(le,2),ue=de[0],me=de[1],be=Object(m.useState)(!0),pe=Object(l.a)(be,2),je=pe[0],he=pe[1],fe=Object(m.useState)(!0),Oe=Object(l.a)(fe,2),ve=Oe[0],_e=Oe[1],xe=Object(m.useState)(!0),ge=Object(l.a)(xe,2),ye=ge[0],Ce=ge[1],Ne=Object(m.useState)(""),Se=Object(l.a)(Ne,2),we=Se[0],Ee=Se[1],Pe=function(e,t,a,n,c,s,i){(null===O||void 0===O?void 0:O.some((function(e){return"prod_JoXW23PIXK9Q8j"===e.product_id})))?Be(e,t,a,n,c,s):Ke(i)},Ie=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),Z(!0),k&&M){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,k.createPaymentMethod({type:"card",card:M.getElement(f.CardNumberElement),billing_details:{name:t.target.name.value,email:t.target.email.value}}).then((function(e){Z(!0),Ae(e.paymentMethod.id,e.paymentMethod.billing_details.name)}));case 6:a=e.sent,console.log("[PaymentMethod]",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),k&&M){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,k.createPaymentMethod({type:"sepa_debit",sepa_debit:M.getElement(f.IbanElement),billing_details:{name:t.target.name.value,email:t.target.email.value}}).then((function(e){Z(!0),Ae(e.paymentMethod.id,e.paymentMethod.billing_details.name)}));case 5:a=e.sent,console.log("[PaymentMethod]",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.stringify({email:b,"invoice_settings[default_payment_method]":t,payment_method:t}),c={method:"post",url:"https://api.stripe.com/v1/customers",headers:{Authorization:E.d.app.authenSecretKey},data:n},e.next=4,N()(c).then((function(e){Z(!0),ke(e.data.id,a)})).catch((function(e){U({show:!0,content:e.response.data.error.message,status:"error"})}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ke=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.a.stringify({"items[0][price]":"price_1JAuRXKzetBOhA7Kqsdd0ASw",customer:t,expand:["latest_invoice.payment_intent","latest_invoice.customer"]}),c={method:"post",url:"https://api.stripe.com/v1/subscriptions",headers:{Authorization:E.d.app.authenSecretKey,"Content-Type":"application/x-www-form-urlencoded"},data:n},e.next=4,N()(c).then((function(e){var n=e.data.latest_invoice.payment_intent.status,c=e.data.latest_invoice.payment_intent.next_action;"incomplete"===e.data.status?(Z(!0),"requires_action"===n?c&&"use_stripe_sdk"===c.type&&(ee(e.data.latest_invoice.payment_intent.client_secret),Q(Object(s.a)(Object(s.a)({},G),{},{show:!0,url:null===c||void 0===c?void 0:c.use_stripe_sdk.stripe_js})),Ee(e.data.id),Z(!0)):"requires_payment_method"===n?U({show:!0,content:e.data.latest_invoice.payment_intent.last_payment_error.message,status:n}):"requires_confirmation"===n?Je===g.g.CARD?Re(e.data.latest_invoice.payment_intent.client_secret,e.data.latest_invoice.customer_email,a):Me(e.data.latest_invoice.payment_intent.client_secret,e.data.latest_invoice.customer_email,a):U({show:!0,content:"Zahlungserfolg",status:n})):"active"===e.data.status&&(Pe(t,e.data.id,e.data.plan.product,"price_1JAuRXKzetBOhA7Kqsdd0ASw",e.data.status,e.data.latest_invoice.payment_intent.status,e.data),Z(!1))})).catch((function(e){console.log(e)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Me=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.confirmSepaDebitPayment(t,{payment_method:{sepa_debit:M.getElement(f.IbanElement),billing_details:{name:n,email:a}}}).then((function(e){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Re=function(e,t,a){k.confirmCardPayment(e,{payment_method:{card:M.getElement(f.CardNumberElement),billing_details:{name:a,email:t}}}).then((function(e){}))},Be=function(e,t,a,n,c,s){var i={method:"stripe",customer_id:e,subscription_id:t,product_id:a,price_id:n,subscription_status:c,payment_intent_status:s};D({method:"put",api:E.d.rest.payment(),body:i},(function(e){e.status===P.a&&(U({show:!0,content:"Zahlungserfolg",status:"active"}),A.push("/mobility"),S(Object(I.g)(i)))}))},Ke=function(e){var t={method:"stripe",subscription:Object(s.a)({},e)};D({method:"post",api:E.d.rest.payment(),body:t},(function(t){if(t.status===P.a){var a={expired_date:null,subscription_status:e.status,paid_date:null,customer_id:e.customer,payment_intent_status:null===e||void 0===e?void 0:e.latest_invoice.payment_intent.status,payment_app_status:"",subscription_id:e.id,method:"stripe",price_id:e.plan.id,product_id:e.plan.product};U({show:!0,content:"Zahlungserfolg",status:"active"}),A.push("/mobility"),S(Object(I.g)(a))}}))},ze=function(){Ue(),k.retrievePaymentIntent($).then((function(e){console.log(e.paymentIntent),e.error?console.log(e.error):"succeeded"===e.paymentIntent.status?function(e){var t={method:"get",url:"https://api.stripe.com/v1/subscriptions/".concat(e),headers:{Authorization:E.d.app.authenSecretKey}};N()(t).then((function(e){Pe(e.data.customer,e.data.id,e.data.plan.product,e.data.plan.id,e.data.status,"success",e.data)})).catch((function(e){console.log(e)}))}(we):"requires_payment_method"===e.paymentIntent.status&&U({show:!0,content:"Please enter another payment method",status:"requires_payment_method"})}))},Ve=function(e){"stripe-3ds-result"===e.data.type&&ze()};Object(m.useEffect)((function(){return window.addEventListener("message",Ve,!1),function(){window.removeEventListener("message",Ve,!1)}}),[$,we]);var Fe=(t={},Object(c.a)(t,g.g.CARD,{param:"card",text:"Kreditkarte hinzuf\xfcgen",handleSubmit:Ie}),Object(c.a)(t,g.g.SEPA_DEBIT,{param:"sepa_debit",text:"SEPA Lastschrift",handleSubmit:De}),t),qe=Object(m.useState)(g.g.CARD),Ze=Object(l.a)(qe,2),Je=Ze[0],Le=Ze[1],Te=Fe[Je],Ue=function(){Q(Object(s.a)(Object(s.a)({},G),{},{show:!1}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u.i,{show:G.show,closeOnBackdrop:!1,onClose:Ue,size:"lg",children:Object(n.jsx)("iframe",{title:"",width:"100%",height:700,src:G.url,style:{border:"none"}},G.url)}),Object(n.jsx)("div",{className:"violet",children:Object(n.jsx)(u.j,{show:T.show,title:"Zahlung",content:T.content,up:"Zustimmen",upCallback:function(){return"succeeded"===T.status?A.push("/mobility"):(U(Object(s.a)(Object(s.a)({},T),{},{show:!1})),void Z(!1))},hideCloseBtn:!0})}),Object(n.jsx)("div",{className:"Subscriptions-wrapper",children:Object(n.jsxs)(d.I,{children:[Object(n.jsxs)(d.j,{md:6,className:"Subscriptions-contentLeft",style:{height:"80vh",background:"var(--nightblue-20)"},children:[Object(n.jsx)("div",{className:"hb-mx-20 ",children:Object(n.jsx)("div",{className:"d-flex justify-content-between hb-my-28",children:Object(n.jsxs)(u.e,{onClick:function(){return A.goBack()},children:[Object(n.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]})})}),Object(n.jsx)(p,{product:[{productName:"Mobility",price:50}]})]}),Object(n.jsx)(d.j,{md:6,className:"Subscriptions-contentRight",style:{height:"80vh",background:"var(--nightblue-10)"},children:Object(n.jsxs)(j,{handleSubmit:Te.handleSubmit,children:[Object(n.jsxs)(h.d,{selectedIndex:K,onSelect:function(e){return z(e)},children:[Object(n.jsxs)(h.b,{className:"CreditCard-tabslist",children:[Object(n.jsx)(h.a,{className:"CreditCard-tabsItem",children:Object(n.jsx)("div",{className:"CreditCard-tabstitle",onClick:function(){Le(g.g.CARD),console.log("CARD")},children:"Kreditkarte"})}),Object(n.jsx)(h.a,{className:"CreditCard-tabsItem",children:Object(n.jsx)("div",{className:"CreditCard-tabstitle",onClick:function(){Le(g.g.SEPA_DEBIT),console.log("SEPA")},children:"SEPA"})})]}),Object(n.jsx)(h.c,{className:"CreditCard-tabs-panel",children:Object(n.jsx)(v,{fullName:C,emailUser:b,className:"CreditCard-tabsPanelItems",disableName:ne,disableEmail:re,disableCVC:ve,disableNumber:ue,disableDate:je,setDisableName:ce,setDisableEmail:oe,setDisableNumber:me,setDisableDate:he,setDisableCVC:_e,isCredit:g.g.CARD})}),Object(n.jsx)(h.c,{className:"CreditCard-tabs-panel",children:Object(n.jsx)(_,{className:"CreditCard-tabsPanelItems",fullName:C,emailUser:b,disableName:ne,disableEmail:re,disableSEPA:ye,setDisableName:ce,setDisableEmail:oe,setDisableSEPA:Ce})})]}),Object(n.jsx)("div",{className:"CreditCard-btnSubmit",children:Object(n.jsx)(u.c,{color:"violet",children:q?Object(n.jsx)(d.M,{color:"light",size:"small"}):"Weiter",type:"submit",disabled:Je===g.g.CARD?ne||re||ve||ue||je:ne||re||ye})})]})})]})})]})}},930:function(e,t,a){},931:function(e,t,a){},932:function(e,t,a){},943:function(e,t){}}]);
//# sourceMappingURL=35.dcf3f010.chunk.js.map