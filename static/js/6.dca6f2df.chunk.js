(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[6],{604:function(e,t,n){var i=n(605),a=n(606),o=n(607),r=n(609);e.exports=function(e,t){return i(e)||a(e,t)||o(e,t)||r()},e.exports.default=e.exports,e.exports.__esModule=!0},605:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},606:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,a=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(i=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(s){a=!0,o=s}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},607:function(e,t,n){var i=n(608);e.exports=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},608:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i},e.exports.default=e.exports,e.exports.__esModule=!0},609:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},618:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(604),a=n.n(i),o=n(191),r=n.n(o),c=n(1),s=n(592);function l(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var u={};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&u[t[0]]||("string"===typeof t[0]&&(u[t[0]]=new Date),l.apply(void 0,t))}function b(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return d("i18n.languages were undefined or empty",t.languages),!0;var i=t.languages[0],a=!!t.options&&t.options.fallbackLng,o=t.languages[t.languages.length-1];if("cimode"===i.toLowerCase())return!0;var r=function(e,n){var i=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===i||2===i};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(i,e)||(!t.services.backendConnector.backend||!(!r(i,e)||a&&!r(o,e))))}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,i=Object(c.useContext)(s.a)||{},o=i.i18n,r=i.defaultNS,l=n||o||Object(s.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new s.b),!l){d("You will need to pass in an i18next instance by using initReactI18next");var u=function(e){return Array.isArray(e)?e[e.length-1]:e},j=[u,{},!1];return j.t=u,j.i18n={},j.ready=!1,j}l.options.react&&void 0!==l.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var m=f(f(f({},Object(s.c)()),l.options.react),t),O=m.useSuspense,h=e||r||l.options&&l.options.defaultNS;h="string"===typeof h?[h]:h||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(h);var v=(l.isInitialized||l.initializedStoreOnce)&&h.every((function(e){return p(e,l,m)}));function g(){return{t:l.getFixedT(null,"fallback"===m.nsMode?h:h[0])}}var x=Object(c.useState)(g()),y=a()(x,2),D=y[0],N=y[1],S=Object(c.useRef)(!0);Object(c.useEffect)((function(){var e=m.bindI18n,t=m.bindI18nStore;function n(){S.current&&N(g())}return S.current=!0,v||O||b(l,h,(function(){S.current&&N(g())})),e&&l&&l.on(e,n),t&&l&&l.store.on(t,n),function(){S.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,n)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,n)}))}}),[h.join()]);var E=[D.t,l,v];if(E.t=D.t,E.i18n=l,E.ready=v,v)return E;if(!v&&!O)return E;throw new Promise((function(e){b(l,h,(function(){e()}))}))}},661:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_FILTER",(function(){return U})),n.d(t,"TITLES",(function(){return q})),n.d(t,"MODE_OPTIONS",(function(){return H})),n.d(t,"BUFFER_PAGE",(function(){return J}));var i,a,o,r,c=n(3),s=n(47),l=n(16),u=n(49),d=n(1),b=n(39),p=n(187),j=n(78),f=n.n(j),m=n(7),O=n(24),h=n(96),v=n(115),g=(n(915),function(e){var t=e.className,n=void 0===t?"":t,i=e.open,a=e.title,o=void 0===a?"":a,r=e.description,s=void 0===r?"":r,l=e.hasClose,u=e.btnConfirm,d=e.btnCancel,b=e.onConfirm,p=void 0===b?function(){}:b,j=e.onCancel,f=void 0===j?function(){}:j,m=e.onClose,O=void 0===m?function(){}:m,h=e.children;return Object(c.jsxs)(v.i,{className:"Dialog-container ".concat(n),centered:!0,show:i,closeBtn:l,onClose:O,closeOnBackdrop:!1,children:[Object(c.jsxs)("div",{className:"Dialog-body",children:[Object(c.jsx)("h3",{className:"Dialog-title",children:o}),s&&Object(c.jsx)("p",{className:"Dialog-desc",children:s}),h]}),(u||d)&&Object(c.jsxs)("div",{className:"Dialog-actions",children:[u&&Object(c.jsx)(v.e,{onClick:p,children:u}),d&&Object(c.jsx)("span",{className:u&&"margin",onClick:f,children:d})]})]})}),x=function(e){var t=e.open,n=e.maxLength,i=e.onConfirm,a=void 0===i?function(){}:i,o=Object(O.a)(e,["open","maxLength","onConfirm"]),r=Object(d.useState)(""),s=Object(l.a)(r,2),u=s[0],b=s[1];Object(d.useEffect)((function(){return function(){t||b("")}}),[t]);return Object(c.jsx)(g,Object(m.a)(Object(m.a)({open:t,onConfirm:function(){a(u)}},o),{},{children:Object(c.jsx)(h.m,{className:"Dialog-textArea",value:u,maxLength:n,onChange:function(e){var t=e.target.value,i=void 0===t?"":t;(Object(p.isNil)(n)||i.length<=n)&&b(i)}})}))},y=n(727),D=n(618),N=n(629),S=n(31),E=n(73),A=E.b.REQUESTED,C=E.b.ACCEPTED,w=E.b.FINISHED,F=E.b.CANCELLED,_=(i={},Object(u.a)(i,A,"Hier finden Sie alle Beratungen die sie beantragt haben."),Object(u.a)(i,C,"Hier finden Sie alle Beratungen die von unseren Pflegeberatern angenommen wurden."),Object(u.a)(i,w,"Hier finden Sie alle Beratungen die Sie durchgef\xfchrt haben."),Object(u.a)(i,F,"Hier finden Sie alle Beratungen die storniert wurden."),i),k=(a={},Object(u.a)(a,A,"Sie haben noch keine Beratung gebucht."),Object(u.a)(a,C,"Sie haben noch keine akzeptierten Beratungen."),Object(u.a)(a,w,"Sie haben noch keine durchgef\xfchrten Beratungen."),Object(u.a)(a,F,"Sie haben keine stornierten Beratungen."),a),T=function(e){var t=Object(b.h)(),n=Object(D.a)().t,i=e.currentPage,a=e.totalRecords,o=e.isLoading,r=e.appointments,s=void 0===r?[]:r,l=e.requestType,u=e.setMode,d=e.setSelectedAppointment,p=e.setIsOpenPopupCancel,j=e.handleLoadmore;return Object(c.jsxs)(c.Fragment,{children:[!!(null===s||void 0===s?void 0:s.length)&&Object(c.jsx)("p",{className:"AllAppointmentsLayout-desc",children:_[l]}),Object(c.jsx)("div",{className:"AllAppointmentsLayout-list",children:(null===s||void 0===s?void 0:s.length)?s.map((function(e,n){return Object(c.jsx)(N.c,{requestType:l,appointment:e,onOpenPopupEdit:function(){return u(H.EDIT)},onOpenPopupCancel:function(){return p(!0)},onSetSelectedAppointment:d,onClick:function(){return t.push("/consulting/user/view-appointments/".concat(l,"/").concat(e.id))}},n)})):Object(c.jsx)(c.Fragment,{children:!o&&Object(c.jsxs)("div",{className:"AllAppointmentsLayout-noResults",children:[Object(c.jsx)("p",{children:k[l]}),l===A&&Object(c.jsx)("div",{className:"AllAppointmentsLayout-noResults_footer",children:Object(c.jsx)(v.e,{onClick:function(){return t.push("/consulting/book-an-appointment")},children:"Beratung buchen"})})]})})}),Object(c.jsxs)("div",{className:"AllAppointmentsLayout-loadmore",children:[o&&i>J&&Object(c.jsx)(h.k,{className:"AllAppointmentsLayout-loading",size:"lg",render:S.g}),!o&&(null===s||void 0===s?void 0:s.length)<a&&Object(c.jsx)(v.a,{onClick:j,children:n("loadMore")})]})]})},L=n(683),I=n(684),M=n(186),Y=n(29),B=E.b.REQUESTED,P=E.b.ACCEPTED,R=E.b.FINISHED,z=E.b.CANCELLED,U={selectedDate:"",timeStart:"00:00",timeEnd:E.v},q=(o={},Object(u.a)(o,B,"Angefragt"),Object(u.a)(o,P,"Akzeptiert"),Object(u.a)(o,R,"Durchgef\xfchrt"),Object(u.a)(o,z,"Storniert"),o),H={VIEW:1,FILTER:2,EDIT:3},J=2,G={id:""},Q=H.VIEW,V=H.FILTER,W=H.EDIT,Z=(r={},Object(u.a)(r,V,"Filter"),Object(u.a)(r,W,"Ausgew\xe4hlte Beratung"),r);t.default=function(){var e=Object(b.h)(),t=Object(b.j)(),n=t.appointmentType,i=t.requestType,a=Object(M.b)().callApi,o=Object(d.useState)(Q),r=Object(l.a)(o,2),u=r[0],j=r[1],m=Object(d.useState)(U),O=Object(l.a)(m,2),h=O[0],v=O[1],g=Object(d.useState)({appointments:[],totalRecords:0}),D=Object(l.a)(g,2),N=D[0],S=D[1],A=Object(d.useState)(!1),C=Object(l.a)(A,2),w=C[0],F=C[1],_=Object(d.useState)(1),k=Object(l.a)(_,2),B=k[0],P=k[1],R=Object(d.useState)(G),H=Object(l.a)(R,2),$=H[0],K=H[1],X=Object(d.useState)(!1),ee=Object(l.a)(X,2),te=ee[0],ne=ee[1],ie=N.appointments,ae=void 0===ie?[]:ie,oe=N.totalRecords,re=void 0===oe?0:oe,ce=Object(d.useMemo)((function(){return!Object(p.isEqual)(h,U)}),[h]),se=Object(d.useMemo)((function(){return Z[u]||q[i]}),[u,i]),le=Object(d.useMemo)((function(){return!(null===ae||void 0===ae?void 0:ae.length)&&!ce||u===W?"":u===V?"Schlie\xdfen":"Filtern"}),[ae,ce,u]),ue=Object(d.useCallback)((function(e,t){var o=1===e?J:1,r=t||h,c={begin:-1,end:-1};if(!Object(p.isEqual)(r,U)){var l=r.selectedDate,u=r.timeStart,d=r.timeEnd,b=(l===E.D.TODAY?f()():f()(l)).format("YYYY-MM-DD");c={begin:f()("".concat(b," ").concat(u)).utc().unix(),end:f()("".concat(b," ").concat(d)).utc().unix()}}F(!0),a({api:Y.d.rest.getAppointments(),method:"post",body:{appointment_type:E.f[n],appointment_status:E.c[i],between:[c],page:e,page_size:o*E.h},loading:1===e},(function(t){F(!1);var n=t.status,i=t.data;if(n===M.a){var a=i.consulting_appointments,o=void 0===a?[]:a,r=i.total_record;S((function(t){var n=t.appointments,i=void 0===n?[]:n;return{appointments:1===e?o:[].concat(Object(s.a)(i),Object(s.a)(o)),totalRecords:r}})),1===e&&P(2)}}))}),[n,i,h]);Object(d.useEffect)((function(){Object(p.includes)(Object.values(E.e),n)&&Object(p.includes)(Object.values(E.b),i)||e.push("/404")}),[]),Object(d.useEffect)((function(){ue(1)}),[i]);var de=function(){var e=B+1;P(e),ue(e)},be=function(){j(Q),K(G),ue(1,h)},pe=function(e){j(Q),v(e),ue(1,e)};return Object(c.jsxs)(y.a,{className:ce&&"filter",title:se,onBack:function(){Object(p.includes)([V,W],u)?j(Q):e.push("/consulting/".concat(n,"/view-appointments"))},btnFilterIcon:u===V&&"cross",btnFilter:le,onFilter:function(){return j(u===V?Q:V)},noBackground:u===W,children:[function(){switch(u){case Q:return Object(c.jsx)(T,{appointments:ae,currentPage:B,totalRecords:re,isLoading:w,requestType:i,setMode:j,setSelectedAppointment:K,setIsOpenPopupCancel:ne,handleLoadmore:de});case V:return Object(c.jsx)(L.a,{timeFilter:h,onFilter:pe});case W:return Object(c.jsx)(I.a,{requestType:i,appointment:$,onConfirm:be})}}(),Object(c.jsx)(x,{open:te,maxLength:200,hasClose:!0,title:"Assistenz stornieren",description:"Bitte nennen Sie uns dne Grund warum Sie die Assitenz stornieren wollen",btnConfirm:"Grund \xfcbermitteln",btnCancel:"Stornierung abbrechen",onConfirm:function(e){a({method:"delete",api:Y.d.rest.updateDeleteAppointment(),body:{appointment_id:$.id,update_status:E.c[z],reason_refusal:e||""},loading:!0},(function(e){var t=e.status;ne(!1),t===M.a&&(ue(1,U),j(Q))}))},onCancel:function(){return ne(!1)},onClose:function(){return ne(!1)}})]})}},683:function(e,t,n){"use strict";var i=n(3),a=n(16),o=n(1),r=n(78),c=n.n(r),s=n(115),l=n(96),u=n(73),d=n(612),b=n(661),p=u.D.TODAY,j=u.D.OTHER,f=[p,j].map((function(e){return{label:e,value:e}})),m=new Date(c()().add(1,"d").format("YYYY-MM-DD")),O=new Date(c()().add(21,"d").format("YYYY-MM-DD")),h=Object(d.e)("00:00",{maxTime:u.w});t.a=function(e){var t=e.timeFilter,n=e.onFilter,r=void 0===n?function(){}:n,v=t||{},g=v.selectedDate,x=void 0===g?"":g,y=v.timeStart,D=v.timeEnd,N=x&&x!==p,S=Object(o.useState)(N?j:x),E=Object(a.a)(S,2),A=E[0],C=E[1],w=Object(o.useState)(N?new Date(x):m),F=Object(a.a)(w,2),_=F[0],k=F[1],T=Object(o.useState)(y||"00:00"),L=Object(a.a)(T,2),I=L[0],M=L[1],Y=Object(o.useState)(D||u.v),B=Object(a.a)(Y,2),P=B[0],R=B[1],z=Object(o.useMemo)((function(){return Object(d.e)(Object(d.d)(I,.25))}),[I]),U=Object(o.useMemo)((function(){return c()(_).format("DD.MM.YYYY")}),[_]),q=function(e){return function(t){var n=t.target.value,i=void 0===n?"":n;if(e)return M(i),void R(Object(d.c)(i));R(i)}};return Object(i.jsx)("div",{className:"Filter-area",children:Object(i.jsxs)("div",{className:"Filter-container",children:[Object(i.jsxs)("div",{className:"Filter-chooseDate",children:[Object(i.jsxs)("div",{className:"Filter-listDates",children:[Object(i.jsx)("h5",{className:"Filter-lb",children:"Datum"}),Object(i.jsx)(l.a,{className:"Filter-options",value:A,options:f,onClick:C})]}),A===j&&Object(i.jsxs)("div",{className:"Filter-datePicker",children:[Object(i.jsx)("h5",{className:"Filter-lb small",children:"Datum w\xe4hlen"}),Object(i.jsx)(l.h,{disabled:!0,showYearDropdown:!0,showMonthDropdown:!0,placeholder:"TT.MM.JJJJ",selected:_,value:U,maxDate:O,onChange:function(e){k(e)}})]})]}),Object(i.jsxs)("div",{className:"Filter-times",children:[Object(i.jsx)("h5",{className:"Filter-lb",children:"Von \u2013 Bis"}),Object(i.jsxs)("div",{className:"Filter-timesOptions",children:[Object(i.jsx)(l.j,{value:I,options:h,disabled:!A,onChange:q(!0)}),Object(i.jsx)("span",{children:"und"}),Object(i.jsx)(l.j,{value:P,options:z,disabled:!A,onChange:q()})]})]}),Object(i.jsxs)("div",{className:"Filter-actions",children:[Object(i.jsx)(s.e,{disabled:!A,onClick:function(){var e={selectedDate:A===j?c()(_).format("YYYY-MM-DD"):A,timeStart:I,timeEnd:P};r(e)},children:"Filter anwenden"}),Object(i.jsx)("span",{onClick:function(){C(""),M("00:00"),R(u.v),r(b.DEFAULT_FILTER)},children:"Filter zur\xfccksetzen"})]})]})})}},684:function(e,t,n){"use strict";var i=n(3),a=n(7),o=(n(1),n(629)),r=n(612),c=n(186),s=n(29),l=n(73),u=l.b.REQUESTED;t.a=function(e){var t=Object(c.b)().callApi,n=e.requestType,d=e.appointment,b=e.onConfirm,p=d||{},j=p.id,f=p.appointment_status;return Object(i.jsxs)("div",{className:"Edit-area",children:[Object(i.jsx)("div",{className:"Edit-info",children:Object(i.jsx)(o.c,{requestType:n,appointment:d,isDetail:!0})}),Object(i.jsx)("div",{className:"Edit-content",children:Object(i.jsx)(o.f,{className:"Edit-schedule",isEditSchedule:!0,lbDate:"Neues Datum",lbTime:"Neue Uhrzeit",onConfirm:function(e){var n=Object(r.a)(e),i=n.appointment_time_begin,o=n.appointment_time_end,d=f===l.c[u]?n:{appointment_time_begin_want_edit:i,appointment_time_end_want_edit:o};t({method:"put",api:s.d.rest.updateDeleteAppointment(),body:Object(a.a)({appointment_id:j,update_status:f},d),loading:!0},(function(e){e.status===c.a&&b()}))}})})]})}},727:function(e,t,n){"use strict";var i=n(3),a=(n(1),n(115));n(916);t.a=function(e){var t=e.className,n=void 0===t?"":t,o=e.title,r=void 0===o?"":o,c=e.noBackground,s=void 0!==c&&c,l=e.btnBack,u=void 0===l?"Zur\xfcck":l,d=e.btnFilterIcon,b=e.btnFilter,p=void 0===b?"Filtern":b,j=e.onBack,f=void 0===j?function(){}:j,m=e.onFilter,O=e.children;return Object(i.jsxs)("div",{className:"hb-mx-20 AllAppointmentsLayout-area ".concat(n),children:[Object(i.jsxs)("div",{className:"AllAppointmentsLayout-header",children:[u&&Object(i.jsxs)(a.e,{color:"petrol",onClick:f,children:[Object(i.jsx)("i",{className:"hb-icon-arrow-left"})," ",u]}),p&&Object(i.jsxs)(a.e,{className:"btnFilter",color:"petrol",onClick:function(){return m?m():function(){}},children:[p," ",d&&Object(i.jsx)("i",{className:"hb-icon-".concat(d)})]})]}),Object(i.jsxs)("div",{className:"AllAppointmentsLayout-wrapperContainer",children:[r&&Object(i.jsx)("h3",{className:"AllAppointmentsLayout-title",children:r}),Object(i.jsx)("div",{className:"AllAppointmentsLayout-container ".concat(!s&&"bg"),children:O})]})]})}},915:function(e,t,n){},916:function(e,t,n){}}]);
//# sourceMappingURL=6.dca6f2df.chunk.js.map