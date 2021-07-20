(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[24],{1049:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(3),i=n(16),c=n(1),s=n(39),o=n(19),l=n(618),u=n(602),d=n(603),b=n(32),j=n(29),h=n(38),f=n(96),p=n(611),O=function(e){return d.b().shape({title:d.d().trim().required("Category name is required")})},g=function(e){var t=Object(l.a)().t,n=e.searchCategories,r=e.show,s=e.initialValues,d=e.callApi,g=Object(c.useRef)(null),m=Object(c.useState)(!1),y=Object(i.a)(m,2),x=y[0],v=y[1],w=function(){g.current.resetForm(),e.handleClose(),v(!1)};return Object(a.jsxs)(f.c,{centered:!0,show:r,onClose:w,closeOnBackdrop:!1,children:[Object(a.jsxs)(f.d,{children:["New Category",Object(a.jsx)(f.b,{onClick:function(){g.current.dirty?v(!0):w()}})]}),Object(a.jsxs)(o.D,{className:"popup--update-user",children:[Object(a.jsxs)(f.c,{size:"sm",show:x,centered:!0,closeOnBackdrop:!1,children:[Object(a.jsx)(o.D,{style:{textAlign:"center",padding:20},children:"Are you sure you want to discard your changes?"}),Object(a.jsxs)(o.E,{style:{display:"flex",justifyContent:"space-around"},children:[Object(a.jsx)("button",{className:"btn btn-danger",style:{width:120},color:"danger",onClick:w,children:"Discard"}),Object(a.jsx)("button",{style:{width:120},className:"btn btn-primary",onClick:function(){return v(!1)},children:"Keep Editing"})]})]}),Object(a.jsx)(o.I,{className:"justify-content-center",children:Object(a.jsx)(o.j,{md:"12",children:Object(a.jsx)(o.h,{children:Object(a.jsx)(o.e,{className:"popup--update-user__card--wrapper",children:Object(a.jsx)(o.f,{children:Object(a.jsx)(u.c,{innerRef:g,enableReinitialize:!0,initialValues:s,validate:Object(b.A)(O),onSubmit:function(e){var t={title:e.title.trim(),description:e.description.trim()};d({method:"post",api:j.d.rest.adminCreateMobilityCategory(),body:t,loading:!0},(function(e){e.status===h.c&&n()})),w()},children:function(e){var n=e.values,r=e.errors,i=e.touched,c=(e.status,e.dirty),s=e.handleChange,l=e.handleBlur,u=e.handleSubmit,d=(e.isSubmitting,e.isValid);e.handleReset,e.setTouched;return Object(a.jsxs)(o.q,{onSubmit:u,children:[Object(a.jsx)(p.a,{label:"Title (*)",width:100,children:Object(a.jsxs)(o.r,{className:"m-0",children:[Object(a.jsx)(o.u,{type:"text",placeholder:"Title (*)",invalid:""!==n.title.trim()&&i.title&&!!r.title,maxLength:100,value:n.title,onBlur:l,onChange:s,name:"title"}),Object(a.jsx)(o.A,{children:r.title})]})}),Object(a.jsx)(p.a,{label:"Description",width:100,children:Object(a.jsx)(o.O,{type:"text",placeholder:"Description",maxLength:1e3,value:n.description,onBlur:l,onChange:s,name:"description",rows:5})}),Object(a.jsx)(o.r,{className:"mb-0",children:Object(a.jsx)(o.I,{children:Object(a.jsxs)(o.j,{xs:"12",style:{textAlign:"right"},children:[Object(a.jsx)(o.d,{color:"secondary",className:"px-4 mr-4",onClick:w,children:t("cancel")}),Object(a.jsx)(o.d,{color:"primary",className:"px-4",type:"submit",disabled:!(d&&c),children:t("create")})]})})})]})}})})})})})})]})]})},m=n(190),y=n(31),x=n(186),v={title:"",description:""};t.default=function(e){var t=Object(l.a)().t,n=Object(x.b)().callApi,u=Object(s.h)(),d=Object(c.useState)({data:[],total:0,totalPages:0,page:1,loading:!0}),b=Object(i.a)(d,2),p=b[0],O=b[1],w=Object(c.useState)({show:!1,initialValues:v}),C=Object(i.a)(w,2),N=C[0],S=C[1],k=Object(c.useState)({show:!1,id:"",name:""}),_=Object(i.a)(k,2),A=_[0],D=_[1],T=Object(c.useState)({show:!1,id:"",name:""}),I=Object(i.a)(T,2),P=I[0],B=I[1],M=Object(c.useState)(null),V=Object(i.a)(M,2),E=V[0],z=V[1],R=Object(c.useState)(null),L=Object(i.a)(R,2),q=L[0],F=L[1],U=Object(c.useState)(""),Y=Object(i.a)(U,2),J=Y[0],G=Y[1],K=[{key:"no",_style:{width:"5%"}},{key:"title",label:"Category name",_style:{width:"15%"}},{key:"description",_style:{width:"20%"}},{key:"created_date",_style:{width:"10%"},isDate:!0},{key:"total_video",label:"Number Of Videos",_style:{width:"10%"}},{key:"action",_style:{width:"8%"},renderContent:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.d,{color:"primary",variant:"outline",shape:"square",size:"sm",style:{marginRight:10},onClick:function(){return D({show:!0,id:e.id,name:e.title})},children:Object(a.jsx)("i",{className:"fas fa-trash-alt",children:" "})}),Object(a.jsx)(o.d,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){return u.push("/admin/mobility/categories/".concat(e.id))},children:Object(a.jsx)("i",{className:"fas fa-pencil-alt",children:" "})})]})}}];Object(c.useEffect)((function(){$(1,J)}),[E,q]);var W=Object(a.jsx)("div",{});p.loading||p.total||(W=Object(a.jsx)("div",{children:t("no-items-found")}));var $=function(e,t){O(Object(r.a)(Object(r.a)({},p),{},{loading:!0})),n({method:"get",api:j.d.rest.adminGetMobilityCategories(e,t,E?E.getTime()/1e3:null,q?q.getTime()/1e3+86399:null)},(function(t){var n=t.status,a=t.data;n===h.c?O({data:a.data.map((function(t,n){return Object(r.a)(Object(r.a)({},t),{},{no:n+1+10*(e-1)})})),total:a.total,totalPages:Math.ceil(a.total/10),page:e,loading:!1}):O((function(e){return Object(r.a)(Object(r.a)({},e),{},{loading:!1})}))}))};return Object(a.jsxs)("div",{className:"px-5 mx-3",style:{marginTop:10},children:[Object(a.jsx)(g,{callApi:n,initialValues:N.initialValues,show:N.show,handleClose:function(){return S(Object(r.a)(Object(r.a)({},N),{},{show:!1}))},searchCategories:function(){return $(p.page,J)}}),Object(a.jsx)(f.e,{isVisible:A.show,title:"Delete Category",renderContent:Object(y.a)("Are you sure to delete the category",A.name,"If Yes, all videos in this category are also deleted immediately."),leftButtonText:"No",rightButtonText:"Yes",leftButtonOnPress:function(){return D(Object(r.a)(Object(r.a)({},A),{},{show:!1}))},rightButtonOnPress:function(){B({show:!0,id:A.id,name:A.name}),D(Object(r.a)(Object(r.a)({},A),{},{show:!1}))}}),Object(a.jsx)(f.f,{isVisible:P.show,title:"Delete Category",leftButtonText:"Cancel",rightButtonText:"Delete",type:"category",name:P.name,callback:function(e){return function(e,t){D(Object(r.a)(Object(r.a)({},A),{},{show:!1})),O(Object(r.a)(Object(r.a)({},p),{},{loading:!0})),n({method:"post",api:j.d.rest.confirmPassword(),body:{password:t}},(function(t){t.status===h.c?n({method:"delete",api:j.d.rest.adminDeleteMobilityCategory(e)},(function(e){e.status===h.c?$(p.page,J):O((function(e){return Object(r.a)(Object(r.a)({},e),{},{loading:!1})}))})):O((function(e){return Object(r.a)(Object(r.a)({},e),{},{loading:!1})}))}))}(P.id,e)},handleClose:function(){return B(Object(r.a)(Object(r.a)({},P),{},{show:!1}))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Category Management"}),Object(a.jsxs)("div",{className:"d-flex align-items-center mt-4",style:{marginBottom:"2.4rem"},children:[Object(a.jsx)(m.a,{className:"mr-5",searchName:J,setSearchName:G,searchEmpty:!0,callbackSearch:function(e){return $(1,e)}}),Object(a.jsx)("div",{children:"From date:"}),Object(a.jsx)("div",{children:Object(a.jsx)(f.g,{maxDate:q||new Date,date:E,setDate:z})}),Object(a.jsx)("div",{children:"To date:"}),Object(a.jsx)("div",{children:Object(a.jsx)(f.g,{minDate:E,date:q,setDate:F})}),Object(a.jsx)("div",{style:{textAlign:"right",flex:1},children:Object(a.jsx)(o.d,{color:"primary",onClick:function(){return S({show:!0,initialValues:{title:"",description:""}})},children:"Add new category"})})]})]}),Object(a.jsx)("div",{className:"hb-table",children:Object(a.jsx)(o.l,{items:p.data,fields:K,loading:p.loading,noItemsViewSlot:W,hover:!0,striped:!0,scopedSlots:Object(y.k)(K)})}),Object(y.j)(p.totalPages,p.page,(function(e){p.page!==e&&$(e,J)}),p.total)]})}},604:function(e,t,n){var r=n(605),a=n(606),i=n(607),c=n(609);e.exports=function(e,t){return r(e)||a(e,t)||i(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},605:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},606:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var c,s=e[Symbol.iterator]();!(r=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(o){a=!0,i=o}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},607:function(e,t,n){var r=n(608);e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},608:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},609:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},611:function(e,t,n){"use strict";var r=n(3);n(1);t.a=function(e){var t=e.className,n=e.label,a=e.children,i=e.width,c=e.centered,s=e.style;return i=i||110,Object(r.jsxs)("div",{className:"d-flex mb-3 ".concat(c?"align-items-center":""," ").concat(t||""),style:s,children:[Object(r.jsx)("div",{style:{minWidth:i,marginTop:6},children:n}),Object(r.jsx)("div",{style:{width:"calc(100% - ".concat(i,"px)")},children:a})]})}},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(604),a=n.n(r),i=n(191),c=n.n(i),s=n(1),o=n(592);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function b(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],a=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var c=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!c(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!c(r,e)||a&&!c(i,e))))}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=Object(s.useContext)(o.a)||{},i=r.i18n,c=r.defaultNS,l=n||i||Object(o.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new o.b),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},h=[u,{},!1];return h.t=u,h.i18n={},h.ready=!1,h}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=f(f(f({},Object(o.c)()),l.options.react),t),O=p.useSuspense,g=e||c||l.options&&l.options.defaultNS;g="string"===typeof g?[g]:g||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(g);var m=(l.isInitialized||l.initializedStoreOnce)&&g.every((function(e){return j(e,l,p)}));function y(){return{t:l.getFixedT(null,"fallback"===p.nsMode?g:g[0])}}var x=Object(s.useState)(y()),v=a()(x,2),w=v[0],C=v[1],N=Object(s.useRef)(!0);Object(s.useEffect)((function(){var e=p.bindI18n,t=p.bindI18nStore;function n(){N.current&&C(y())}return N.current=!0,m||O||b(l,g,(function(){N.current&&C(y())})),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){N.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[g.join()]);var S=[w.t,l,m];if(S.t=w.t,S.i18n=l,S.ready=m,m)return S;if(!m&&!O)return S;throw new Promise((function(e){b(l,g,(function(){e()}))}))}}}]);
//# sourceMappingURL=24.a6eb1322.chunk.js.map