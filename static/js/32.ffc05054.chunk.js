(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[32],{608:function(e,t,n){var r=n(609),a=n(610),o=n(611),i=n(613);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},609:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},610:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},611:function(e,t,n){var r=n(612);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},612:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},613:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},621:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(608),a=n.n(r),o=n(194),i=n.n(o),s=n(1),c=n(595);function u(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var l={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&l[t[0]]||("string"===typeof t[0]&&(l[t[0]]=new Date),u.apply(void 0,t))}function f(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var i=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!i(r,e)||a&&!i(o,e))))}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(s.useContext)(c.a)||{},o=r.i18n,i=r.defaultNS,u=n||o||Object(c.d)();if(u&&!u.reportNamespaces&&(u.reportNamespaces=new c.b),!u){d("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},b=[l,{},!1];return b.t=l,b.i18n={},b.ready=!1,b}u.options.react&&void 0!==u.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var h=m(m(m({},Object(c.c)()),u.options.react),t),g=h.useSuspense,j=e||i||u.options&&u.options.defaultNS;j="string"===typeof j?[j]:j||["translation"],u.reportNamespaces.addUsedNamespaces&&u.reportNamespaces.addUsedNamespaces(j);var O=(u.isInitialized||u.initializedStoreOnce)&&j.every((function(e){return p(e,u,h)}));function v(){return{t:u.getFixedT(null,"fallback"===h.nsMode?j:j[0])}}var x=Object(s.useState)(v()),y=a()(x,2),w=y[0],S=y[1],A=Object(s.useRef)(!0);Object(s.useEffect)((function(){var e=h.bindI18n,t=h.bindI18nStore;function n(){A.current&&S(v())}return A.current=!0,O||g||f(u,j,(function(){A.current&&S(v())})),e&&u&&u.on(e,n),t&&u&&u.store.on(t,n),function(){A.current=!1,e&&u&&e.split(" ").forEach((function(e){return u.off(e,n)})),t&&u&&t.split(" ").forEach((function(e){return u.store.off(e,n)}))}}),[j.join()]);var C=[w.t,u,O];if(C.t=w.t,C.i18n=u,C.ready=O,O)return C;if(!O&&!g)return C;throw new Promise((function(e){f(u,j,(function(){e()}))}))}},985:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(7),o=n(16),i=n(1),s=n(20),c=n(19),u=n(606),l=n(607),d=n(45),f=n(621),p=n(39),b=n(32),m=n(38),h=n(31),g=n(29),j=n(198),O=n(189),v=function(e){return l.b().shape({email:l.d().required("email-must-be-at-least-3-chara").min(3,"email-must-be-at-least-3-chara").matches(g.d.validate.validateEmail(),"email-format-is-incorrect"),password:l.d().required("Your password must be at least 8 characters long with one letter, and a number").min(8,"Your password must be at least 8 characters long with one letter, and a number").matches(g.d.validate.validatePassword(),"Your password must be at least 8 characters long with one letter, and a number")})},x={email:"",password:""};t.default=function(){var e=Object(f.a)().t,t=Object(p.h)(),n=Object(s.c)(),l=Object(O.b)().callApi,y=Object(i.useState)(!1),w=Object(o.a)(y,2),S=w[0],A=w[1];return Object(r.jsx)("div",{className:"hb-admin c-app c-default-layout flex-row align-items-center",children:Object(r.jsx)(c.k,{children:Object(r.jsx)("div",{className:"justify-content-center",children:Object(r.jsx)(c.h,{children:Object(r.jsx)(c.e,{className:"p-4",style:{maxWidth:560,margin:"0 auto"},children:Object(r.jsx)(c.f,{children:Object(r.jsx)(u.c,{initialValues:x,validate:Object(b.A)(v),onSubmit:function(e){l({method:"post",api:g.d.rest.signInAdmin(),body:e,loading:!0,msg:g.d.messages.signInFailure},(function(r){var o=r.status,i=r.data;if(o===m.c){var s=Object(a.a)(Object(a.a)({},i),{},{email:e.email});n(Object(d.j)(s)),i.challengename?(t.push("/admin/reset-password"),h.i.set("email",e.email),h.i.set("session",i.session)):(Object(b.u)(s),t.push(g.d.routes.managerUsers()))}}))},children:function(t){var n=t.values,a=t.errors,o=t.touched,i=t.dirty,s=t.handleChange,u=t.handleBlur,l=t.handleSubmit,d=t.isValid;return Object(r.jsxs)(c.q,{onSubmit:l,children:[Object(r.jsx)("h1",{children:e("sign-in-admin")}),Object(r.jsx)("p",{className:"text-muted",children:e("sign-in-to-your-account")}),Object(r.jsxs)(c.r,{children:[Object(r.jsx)(c.u,{type:"text",placeholder:"Email",autoComplete:"email",invalid:""!==n.email&&o.email&&!!a.email,name:"email",maxLength:50,value:n.email,onBlur:u,onChange:function(e){e.target.value.includes(" ")||s(e)}}),Object(r.jsx)(c.A,{children:e(a.email||"")})]}),Object(r.jsx)(j.a,{name:"password",label:"Password",autoComplete:"current-password",show:S,setShow:function(){return A(!S)},values:n,errors:a,handleBlur:u,handleChange:s,touched:o,hideLabel:!0}),Object(r.jsx)(c.r,{children:Object(r.jsx)(c.I,{children:Object(r.jsx)(c.j,{xs:"6",children:Object(r.jsx)(c.d,{color:"primary",className:"px-4",type:"submit",disabled:!(d&&i),children:e("sign-in")})})})})]})}})})})})})})})}}}]);
//# sourceMappingURL=32.ffc05054.chunk.js.map