(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[23],{1042:function(e,t,n){"use strict";n.r(t);var i,a=n(1),c=n(3),r=n(47),s=n(7),o=n(16),l=n(868),d=n.n(l),u=n(39),b=n(618),m=n(29),j=n(38),h=n(642),v=n(21),O=n(31),f=n(610),p=n(115),g=n(674),_=n(869),x=n.n(_),y=n(976),w=n(49),N=n(73),T=(i={},Object(w.a)(i,N.A.ALL,"Passen Sie die Videos Ihren Bewegungsm\xf6glichkeiten an."),Object(w.a)(i,N.A.STANDING,"Sie k\xf6nnen nur \xdcbungen im Stehen absolvieren? Passen Sie die Videos Ihren Bewegungsm\xf6glichkeiten an."),Object(w.a)(i,N.A.SIT,"Sie k\xf6nnen nur \xdcbungen im Sitzen absolvieren? Passen Sie die Videos Ihren Bewegungsm\xf6glichkeiten an."),Object(w.a)(i,N.A.LIE,"Sie k\xf6nnen nur \xdcbungen im Liegen absolvieren? Passen Sie die Videos Ihren Bewegungsm\xf6glichkeiten an."),i),k=function(e){var t=e.showTooltip,n=e.confirmTooltip,i=Object(v.d)((function(e){return e.settings.posture_type}));return Object(a.useEffect)((function(){document.getElementsByTagName("html")[0].style.overflowY=t?"hidden":"overlay"}),[t]),Object(c.jsxs)("div",{className:"d-flex",style:{position:"relative"},children:[t&&Object(c.jsx)("div",{className:"hb-backdrop"}),e.children,t&&Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"hb-mobility-tooltip",children:[Object(c.jsx)("div",{className:"arrow"}),Object(c.jsx)("div",{className:"title",children:"Sind die \xdcbungen zu schwer?"}),Object(c.jsx)("div",{className:"content",children:T[i]}),Object(c.jsx)("div",{className:"btn",onClick:n,children:"Verstanden"})]})})]})},S=n(32),V=n(186);t.default=function(e){var t,n=Object(b.a)().t,i=Object(V.b)().callApi,l=Object(u.i)(),_=new URLSearchParams(null===(t=e.location)||void 0===t?void 0:t.search),w=Object(u.h)(),N=Object(v.d)((function(e){return e.settings.posture_type})),T=_.get("topic")||"all",M=_.get("search")||"",I=Object(a.useState)({data:[],loading:!0}),C=Object(o.a)(I,2),A=C[0],D=C[1],Y=Object(a.useState)({data:[],loading:!0,full:!1,page:0}),B=Object(o.a)(Y,2),E=B[0],q=B[1],R=Object(a.useState)({data:[],loading:!0,full:!1,page:0,amount_trainers:0}),z=Object(o.a)(R,2),W=z[0],L=z[1],G=Object(a.useState)(null),U=Object(o.a)(G,2),F=U[0],H=U[1],J=Object(v.d)((function(e){return e.auth.email})),P=O.i.get("posture-".concat(J)),X=O.i.get("mobility-tooltip-".concat(J)),Q=Object(a.useState)(!1),K=Object(o.a)(Q,2),Z=K[0],$=K[1],ee=O.i.get("mobility-attentions")||[],te=function(e,t){i({method:"get",api:m.d.rest.getSearchVideos("",e,T,Object(S.n)(t),t,N),loading:1===t},(function(e){var n=e.data;e.status===j.c&&(q((function(e){var i=Object(S.g)(t,e.data,n.videos);return{data:i,full:i.length>=n.total_videos,loading:!1,page:t}})),X||$(!0))}))};Object(a.useEffect)((function(){P?["all","sit","lie","standing"].includes(N)&&ee.includes(J)?0===A.data.length?i({method:"get",api:m.d.rest.getAllMobilityCategories(N),loading:!0},(function(e){var t=e.data;e.status===j.c&&(D((function(e){var n=Object(s.a)(Object(s.a)({},e),{},{loading:!1});return n.data=[{id:"all",name:"Alle \xdcbungen",amount_new_videos:t.total_new_videos}].concat(Object(r.a)(t.categories)),n})),"all"!==T&&-1===t.categories.findIndex((function(e){return e.id===T}))?ne("all"):te(M,1))})):(q(Object(s.a)(Object(s.a)({},E),{},{loading:!0,full:!1,page:0})),te(M,1),window.scrollTo(0,0)):w.push("/mobility/posture"):w.push("/mobility/intro")}),[T,l]),Object(a.useEffect)((function(){var e;M||(i({method:"get",api:"/api/v1/mobility/libraries"},(function(e){var t=e.data;e.status===j.c&&H(t)})),e=1,i({method:"get",api:m.d.rest.getAllTrainers(e,12)},(function(t){var n=t.data;t.status===j.c&&L((function(t){return{data:n.trainers,full:n.trainers.length<12,loading:!1,page:e,amount_trainers:n.amount_trainers}}))})))}),[]);var ne=function(e){"all"===e?w.push("/mobility"):w.push("/mobility/?topic=".concat(e))},ie=A.data.findIndex((function(e){return e.id===T})),ae=A.data[ie===A.data.length-1?0:ie+1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"hb-mx-20",children:Object(c.jsx)("div",{className:"d-flex hb-my-28 header",style:{justifyContent:"space-between"},children:M?Object(c.jsxs)(p.e,{onClick:function(){return w.goBack()},children:[Object(c.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{showTooltip:Z,confirmTooltip:function(){O.i.set("mobility-tooltip-".concat(J),"ok"),$(!1)},children:Object(c.jsx)(p.e,{style:{zIndex:Z?40:1},onClick:function(){return w.push("/mobility/posture")},children:"\xdcbungen filtern"})}),Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)(p.d,{icon:"search",size:24,color:"var(--violet-10)",onClick:function(){return w.push("/mobility/search")},style:{fontWeight:800,margin:"2px 1vw 0"}}),Object(c.jsx)(y.a,{interactive:!0,trigger:"click",render:function(e){return Object(c.jsxs)("div",Object(s.a)(Object(s.a)({className:"".concat(x.a.tippy," box")},e),{},{children:[Object(c.jsxs)("div",{className:x.a.tippyItem,style:{width:"100%",borderBottom:"1px solid var(--petrol-5)"},onClick:function(){return w.push("/mobility/saved")},children:[Object(c.jsx)("div",{children:(null===F||void 0===F?void 0:F.is_save_number)||0}),"Gespeicherte \xdcbungen"]}),Object(c.jsxs)("div",{className:x.a.tippyItem,style:{width:"100%",borderBottom:"1px solid var(--petrol-5)"},onClick:function(){return w.push("/mobility/saved?history=true")},children:[Object(c.jsx)("div",{children:(null===F||void 0===F?void 0:F.watch_history_number)||0}),"Angesehene \xdcbungen"]}),Object(c.jsxs)("div",{className:x.a.tippyItem,style:{width:"100%"},onClick:function(){return w.push("/mobility/all-trainers?is_mine=true")},children:[Object(c.jsx)("div",{children:(null===F||void 0===F?void 0:F.trainer_number)||0}),"Gespeicherte Trainer"]}),Object(c.jsx)("div",{className:x.a.arrow,"data-popper-arrow":!0})]}))},popperOptions:{modifiers:[{name:"arrow",options:{element:null}}]},children:Object(c.jsxs)("div",{className:x.a.bibliothek,children:[Object(c.jsx)("i",{className:"hb-icon-heart-r hb-icon-md"}),Object(c.jsx)("span",{children:"Ihre pers\xf6nliche Bibliothek"})]})})]})]})})}),M?Object(c.jsx)("h1",{className:x.a.title,style:{color:"white",textAlign:"center",marginBottom:40},children:M}):Object(c.jsx)("h1",{className:x.a.title,style:{color:"white",textAlign:"center"},children:"Mobilit\xe4t"}),!M&&Object(c.jsx)(p.l,{data:A.data.filter((function(e){return"1"!==e.id})),topic:T,goto:ne}),!E.loading&&0===E.data.length&&Object(c.jsx)("div",{className:"hb-no-items",children:"Keine Suchergebnisse"}),E.data.length>0&&Object(c.jsxs)("div",{className:"hb-card ".concat(x.a.contentWrapper),children:[!M&&"all"===T&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:x.a.header,children:[Object(c.jsx)("h2",{className:x.a.contentTitle,children:"Unsere Trainer"}),W.data.length>10&&Object(c.jsx)("div",{className:x.a.allTrainers,onClick:function(){return w.push("mobility/all-trainers")},children:"Alle Trainer"})]}),Object(c.jsx)("div",{className:"trainer ".concat(x.a.contentTrainer),children:Object(c.jsx)(d.a,Object(s.a)(Object(s.a)({},m.m),{},{data:W.data.slice(0,10).map((function(e){return Object(a.createElement)(g.a,Object(s.a)(Object(s.a)({},e),{},{key:e.id,fullWidth:!1,className:x.a.item}))})),menuClass:"menu-scroll ".concat(x.a.menuScroll)}))})]}),!M&&Object(c.jsx)("h2",{className:"".concat(x.a.contentTitle," ").concat(x.a.margin),children:"Ihre \xdcbungen"}),Object(c.jsx)("div",{className:"row MobilityVideo-listVideos ".concat(x.a.listVideos),children:E.data.map((function(e,t){return Object(a.createElement)(h.a,Object(s.a)(Object(s.a)({className:"MobilityView-video",setVideos:q},e),{},{index:t,key:e.id,setLibrary:H}))}))})]}),0!==E.page&&E.loading&&Object(c.jsx)(f.a,{size:"large",render:O.g}),Object(c.jsx)("div",{className:"text-center mb-2 ".concat(x.a.actions),children:!E.loading&&(!M||!E.full)&&Object(c.jsx)(p.a,{onClick:function(){return E.full?ne(ae.id):void(E.loading||E.full||(q(Object(s.a)(Object(s.a)({},E),{},{loading:!0})),te(M,Object(S.m)(E.page))))},style:{padding:"10px 20px"},children:E.full?"Zum n\xe4chsten Thema: ".concat(ae.name):n("loadMore")})})]})}},610:function(e,t,n){"use strict";var i=n(3),a=(n(1),{large:80,medium:48,small:36});t.a=function(e){var t=e.size,n=e.render;return Object(i.jsx)("div",{className:"video-comments--comment",children:Object(i.jsx)("div",{style:{width:"100%",height:a[t]},children:n})})}},612:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"h",(function(){return u})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return h})),n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var i=n(78),a=n.n(i),c=n(29),r=n(73),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.maxTime,i=void 0===n?r.v:n,a=c.g.filter((function(t){return t>=e&&t<=i}));return a.map((function(e){return{label:e,value:e}}))},o=function(e){if(e)return e;var t=a()().add(2,"hours").format("HH:mm");return c.g.find((function(e){return e>=t&&e<="23:45"}))||t},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=a()("".concat(a()().format("YYYY-MM-DD")," ").concat(e));return e<r.w?n.add(t,"hours").format("HH:mm"):r.v},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e<"23:00"?l(e):r.v},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en";return e>1?"".concat(t).concat(n):t},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"".concat(e," ").concat(1===e?"\xdcbung":"\xdcbungen")},m=n(47),j=n(187),h=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.every((function(t){var i=t.id,a=t.required,c=t.question_type,s=t.answers,o=void 0===s?[]:s,l=o.reduce((function(e,t){return[].concat(Object(m.a)(e),[t.answer_title])}),[]),d=n[i]||{},u=d.answer,b=void 0===u?"":u,h=d.parentQuestionId;if(a&&!b)return!1;switch(c){case r.B.YES_NO:case r.B.RADIO:if(!Object(j.includes)(l,b))return!1;break;case r.B.TEXTBOX:if(b.length>r.u)return!1;if(h&&b.length>r.x)return!1}var v=o.find((function(e){return e.answer_title===b}));if(v){var O=v.sub_questions;if(!e(void 0===O?[]:O,n))return!1}return!0}))},v=function(e){var t=e||{},n=t.selectedOption,i=t.timeStart,c=t.specificDate,s=a()().format("YYYY-MM-DD"),o=a.a.duration(a()("".concat(s," ").concat(i)).diff(a()())).asHours(),l=a()(c).format("YYYY-MM-DD");return n===r.D.TOMORROW||n===r.D.LATER&&s<=l||o>=r.E},O=n(7),f=function(e){var t=e.selectedOption,n=e.specificDate,i=e.timeStart,c=e.timeEnd,s=a()();t!==r.D.TODAY&&(s=t===r.D.LATER?a()(n):a()().add(1,"d"));var o=s.format("YYYY-MM-DD");return{appointment_time_begin:a()("".concat(o," ").concat(i)).utc().unix(),appointment_time_end:a()("".concat(o," ").concat(c)).utc().unix()}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.f[r.e.NURSE],n=e||{},i=n.selectedTopic,a=n.adviceRelatives,c=void 0===a?[]:a,s=n.scheduleData,o=void 0===s?{}:s,l=n.userInfo,d=void 0===l?{}:l,u=n.surveyAnswers,b=void 0===u?{}:u,j=d.phone_number,h=void 0===j?"":j,v=d.street,p=d.gender,g=d.postal_code,_=d.no,x=d.place,y=Object(m.a)(Object.values(b)).reduce((function(e,t){var n=t||{},i=n.question_id,a=n.answer,c=n.question_title,r=n.parentQuestionId,s={question_id:i,answer:a,question_title:c};return r?e=e.map((function(e){var t=e||{},n=t.question_id,i=t.sub_questions;return n===r?Object(O.a)(Object(O.a)({},e),{},{sub_questions:[].concat(Object(m.a)(i),[s])}):e})):[].concat(Object(m.a)(e),[Object(O.a)(Object(O.a)({},s),{},{sub_questions:[]})])}),[]),w=f(o);return Object(O.a)({result_survey:{questions:y},appointment_type:t,selected_treatments_id:i,customer_gender:p,phone_number:h,street:v,postcode:g,no:_,place:x,relatives:c,cost:1},w)}},642:function(e,t,n){"use strict";var i=n(3),a=n(7),c=n(47),r=(n(1),n(39)),s=n(57),o=n(29),l=n(38),d=n(31),u=n(32),b=n(193),m=(n(192),n(186)),j=n(96);t.a=function(e){var t=Object(m.b)().callApi,n=e.index,h=e.id,v=e.thumbnail,O=e.title,f=e.viewed_amount,p=e.setVideos,g=e.is_saved,_=e.screenSaved,x=e.isRelated,y=e.isDetail,w=e.category_name,N=e.trainer_avatar,T=e.trainer_id,k=e.className,S=e.setLibrary,V=Object(r.h)();return Object(i.jsx)("div",{className:"".concat(x?"hb-card-item":y?"col-md-6 hb-card-item":"col-lg-4 col-md-6 hb-card-item"," ").concat(k),style:{marginBottom:x?0:16,marginTop:x?16:0},children:Object(i.jsxs)(s.a,{to:"/mobility/watch?video=".concat(h),children:[Object(i.jsx)(j.n,{backgroundImage:v||d.l,className:"Video-thumbnail",style:{overflow:"hidden",width:"100%",display:"block",borderRadius:"32px 32px 0 0",height:182,backgroundSize:"cover"}}),Object(i.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"0 0 30px 30px",border:x?"1px solid var(--petrol-5)":"none"},children:[Object(i.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)(j.n,{backgroundImage:N||d.d,onClick:function(e){e.preventDefault(),T&&V.push("/mobility/trainer-detail/".concat(T))},style:{cursor:T?"pointer":"default"},className:"hb-card-avatar"}),Object(i.jsx)(b.a,{interactive:!0,content:f||"0",children:Object(i.jsxs)("div",{className:"hb-card-views-wrapper",children:[Object(i.jsx)("i",{className:"hb-icon-eye",style:{color:"var(--violet-80)",fontSize:22,marginRight:7}}),Object(i.jsx)("span",{className:"small",children:Object(u.r)(f)})]})})]}),Object(i.jsx)("div",{className:"hb-save",onClick:function(e){e.preventDefault(),p(_?function(e){var t=e.data.filter((function(e){return e.id!==h}));return Object(a.a)(Object(a.a)({},e),{},{data:t})}:function(e){var t=Object(c.a)(e.data);return t[n].is_saved=!g,Object(a.a)(Object(a.a)({},e),{},{data:t})}),S&&S((function(e){return e?Object(a.a)(Object(a.a)({},e),{},{is_save_number:e.is_save_number+(g?-1:1)}):null})),t({method:g?"put":"post",api:g?o.d.rest.unsaveVideo(h):o.d.rest.saveVideo(h)},(function(e){e.status;l.c}))},children:Object(i.jsx)("i",{className:"".concat(g?"hb-icon-heart-s":"hb-icon-heart-r")})})]}),Object(i.jsx)("h4",{className:"hb-card-title video",children:O}),Object(i.jsx)("div",{className:"d-flex",style:{marginTop:10},children:Object(d.b)(w||"")})]})]})})}},674:function(e,t,n){"use strict";var i=n(3),a=n(96),c=n(1),r=n.n(c),s=n(39),o=n(612),l=n(675),d=n.n(l),u=function(e){var t=e.id,n=e.avatar,c=e.first_name,r=e.last_name,l=e.amount_videos,u=e.followed,b=e.fullWidth,m=e.className,j=e.followOrUnFollow,h=e.isMine,v=Object(s.h)(),O=function(e){return e.length>13?e.slice(0,10)+"...":e};return Object(i.jsx)("div",{className:"".concat(b?"col-lg-3 col-md-3 hb-card-item":m),children:Object(i.jsx)("div",{className:d.a.trainerItem,children:Object(i.jsxs)("div",{className:d.a.trainerWrapper,children:[Object(i.jsx)(a.n,{backgroundImage:n,className:"".concat(d.a.avatar," ").concat(b?d.a.big:""),onClick:function(){return v.push("/mobility/trainer-detail/".concat(t))}}),Object(i.jsx)("div",{className:d.a.name,onClick:function(){return v.push("/mobility/trainer-detail/".concat(t))},children:O(c)}),Object(i.jsx)("div",{className:d.a.lastName,onClick:function(){return v.push("/mobility/trainer-detail/".concat(t))},children:O(r)}),Object(i.jsx)("div",{className:d.a.videosAmount,onClick:function(){return v.push("/mobility/trainer-detail/".concat(t))},children:Object(o.i)(l)}),h&&Object(i.jsx)("div",{className:d.a.icon,onClick:function(){return j(t,u)},children:Object(i.jsx)("i",{className:"".concat(u?"hb-icon-heart-s":"hb-icon-heart-r"),style:{fontSize:20,color:"var(--violet-80)"}})})]})})})};t.a=r.a.memo(u)},675:function(e,t,n){e.exports={trainerItem:"Trainer_trainerItem__2CBqO",trainerWrapper:"Trainer_trainerWrapper__SmQ3G",avatar:"Trainer_avatar__1RiTw",big:"Trainer_big__3uhXp",name:"Trainer_name__1NbrS",lastName:"Trainer_lastName__1VmOJ",videosAmount:"Trainer_videosAmount__TSYnr",icon:"Trainer_icon__2eCzv"}},869:function(e,t,n){e.exports={title:"MobilityView_title__25JUx",menuWrapper:"MobilityView_menuWrapper__1QSKX",contentWrapper:"MobilityView_contentWrapper__1MNYl",contentTitle:"MobilityView_contentTitle__2z_9i",margin:"MobilityView_margin__mC1Lc",contentTrainer:"MobilityView_contentTrainer__14mOd",menuScroll:"MobilityView_menuScroll__3G3fV",item:"MobilityView_item__35ecO",listVideos:"MobilityView_listVideos__SiOK7",bibliothek:"MobilityView_bibliothek__3TzCd",tippy:"MobilityView_tippy__3JdLj",tippyItem:"MobilityView_tippyItem__2Btu-",arrow:"MobilityView_arrow__3V7-m",header:"MobilityView_header__3-1xU",headerBtn:"MobilityView_headerBtn__FG7hs",allTrainers:"MobilityView_allTrainers__XeS7w",actions:"MobilityView_actions__1hNiv"}}}]);
//# sourceMappingURL=23.8088cb0c.chunk.js.map