(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[51],{905:function(e,t,n){e.exports={posture:"PostureType_posture__3xpUi",title:"PostureType_title__1gb8w",sub_title:"PostureType_sub_title__1ZUvB",search:"PostureType_search__7sSEb",cardWrapper:"PostureType_cardWrapper__3afHZ",cardWrapperFirst:"PostureType_cardWrapperFirst__10ghc",card:"PostureType_card__2Gel4",radio:"PostureType_radio__3BI1c",container:"PostureType_container__1umok",infomation:"PostureType_infomation__TdYaH",titleCard:"PostureType_titleCard__3MdLk",content:"PostureType_content__3TEp8",footer:"PostureType_footer__16G_-",wrapperBack:"PostureType_wrapperBack__-MKIa",button:"PostureType_button__1-AzC"}},998:function(e,t,n){"use strict";n.r(t);var i=n(3),s=n(47),c=n(16),a=n(19),r=n(1),o=n(21),l=n(39),u=n(29),d=n(31),b=n(115),h=n(38),p=n(905),j=n.n(p),_=n(133),m=n(186),g=[{id:"all",title:"Alle \xdcbungen",content:"Lassen Sie sich alle Inhalte in allen Schwierigkeitsstufen anzeigen (stehen, sitzen, liegen)."},{id:"standing",title:"\xdcbungen im Stehen",content:"Sie haben keine Einschr\xe4nkungen in ihren Bewegungen, bevorzugen jedoch ausschlie\xdflich \xdcbungen im Stehen."},{id:"sit",title:"\xdcbungen im Sitzen",content:"Sie k\xf6nnen nicht lange stehen und f\xfchlen sich sicherer, wenn sie die \xdcbungen im Sitzen ausf\xfchren."},{id:"lie",title:"\xdcbungen im Liegen",content:"Sie k\xf6nnen keine \xdcbungen im Stehen und Sitzen ausf\xfchren und m\xf6chten nur Angebote im Liegen anzeigen."}];t.default=function(e){var t=Object(o.c)(),n=Object(m.b)().callApi,p=Object(l.h)(),O=Object(o.d)((function(e){return e.auth.email})),f=Object(r.useState)(!1),y=Object(c.a)(f,2),k=y[0],x=y[1],S=Object(o.d)((function(e){return e.settings.posture_type}))||"all",T=Object(r.useState)(S),v=Object(c.a)(T,2),P=v[0],N=v[1],w=Object(r.useState)(!1),z=Object(c.a)(w,2),C=z[0],B=z[1],F=d.i.get("mobility-attentions")||[],W=!F.includes(O);Object(r.useEffect)((function(){d.i.set("posture-".concat(O),S)}),[]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b.j,{show:C,handleClose:function(){return B(!1)},title:"Achtung",content:"Bevor Sie die \xdcbung starten, konsultieren Sie Ihren Arzt um m\xf6gliche Verletzungsrisiken zu vermeiden.",up:"Best\xe4tigen",upCallback:function(){d.i.set("mobility-attentions",[].concat(Object(s.a)(F),[O])),B(!1),p.push("/mobility")},hideCloseBtn:!0}),Object(i.jsx)("div",{className:"wide",children:Object(i.jsxs)("div",{className:"hb-wrapper ".concat(j.a.posture),children:[Object(i.jsx)("h1",{className:j.a.title,children:"Welche \xdcbungen k\xf6nnen Sie ausf\xfchren?"}),Object(i.jsx)("div",{className:j.a.sub_title,children:"Passen Sie das \xdcbungsprogramm entsprechend ihrer k\xf6rperlichen M\xf6glichkeiten individuell an."}),Object(i.jsx)(a.I,{className:[j.a.cardWrapper,j.a.cardWrapperFirst],style:{justifyContent:"center"},children:g.map((function(e){return Object(i.jsx)(a.j,{md:6,children:Object(i.jsxs)(a.e,{className:j.a.card,children:[Object(i.jsxs)("div",{className:j.a.radio,children:[Object(i.jsx)("input",{id:e.id,type:"radio",name:"posture",onChange:function(){return N(e.id)},checked:e.id===P}),Object(i.jsx)("label",{htmlFor:e.id,className:"".concat(j.a.container," container")})]}),Object(i.jsxs)("label",{className:j.a.infomation,htmlFor:e.id,children:[Object(i.jsx)("h3",{className:j.a.titleCard,children:e.title}),Object(i.jsxs)("span",{className:j.a.content,children:[e.content," "]})]})]})},e.id)}))}),Object(i.jsx)("div",{className:j.a.footer,children:Object(i.jsx)("div",{className:j.a.wrapperBack,children:Object(i.jsx)(b.c,{className:j.a.button,disabled:"none"===P,color:"violet",children:k?Object(i.jsx)(a.M,{size:"sm",color:"light"}):"Filter anwenden",onClick:function(){return function(e){var i={posture_type:e};x(!0),n({method:"post",api:u.d.rest.settings(),body:i},(function(n){var i=n.status,s=n.data;i===h.c&&(d.i.set("posture-".concat(O),e),x(!1),t(Object(_.b)(s)),W?B(!0):p.push("/mobility"))}))}(P)},type:"button"})})})]})})]})}}}]);
//# sourceMappingURL=51.b3f8bd72.chunk.js.map