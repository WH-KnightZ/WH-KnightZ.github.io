(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[13],{1027:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(3),s=n(7),c=n(16),o=n(59),r=n.n(o),l=n(29),d=n(32),u=n(38),m=n(676),b=n(39),j=n(57),h=n(610),v=n(47),p=n(21),O=n(31),f=n(115),x=function(e){return Object(i.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:56,width:"100%",marginTop:16},children:O.g})},g=n(186),y=n(96),w=function(e){var t=Object(g.b)().callApi,n=Object(a.useState)(!1),o=Object(c.a)(n,2),r=o[0],d=o[1],m=e.videoId,b=e.commentId,j=e.commentContent,h=e.setComments,w=e.setShowUpdateInput,N=Object(a.useState)(b?j:""),k=Object(c.a)(N,2),_=k[0],C=k[1],S=Object(p.d)((function(e){return e.auth})),I=S.avatar||O.c,q=Object(a.useRef)(null);Object(a.useEffect)((function(){var e;b&&(null===(e=q.current)||void 0===e||e.focus())}),[]);var R=function(){(null===_||void 0===_?void 0:_.trim())&&(d(!0),t({method:"post",api:l.d.rest.createComment(m),body:{comment:_}},(function(e){d(!1);var t=e.data;e.status===u.c&&(C(""),h((function(e){return{data:[{id:t.id,user_id:S.user_id,user_avatar:I,username:S.first_name+" "+S.last_name,content:_,liked_amount:0,is_liked:!1,replied_amount:0,created_date:(new Date).getTime()/1e3}].concat(Object(v.a)(e.data)),total:e.total+1}})))})))},T=function(){(null===_||void 0===_?void 0:_.trim())&&(null===d||void 0===d||d(!0),t({method:"put",api:l.d.rest.updateComment(m,b||""),body:{comment:_}},(function(e){null===d||void 0===d||d(!1),null===w||void 0===w||w(!1),e.status===u.c&&h((function(e){var t=Object(v.a)(e.data),n=t.findIndex((function(e){return e.id===b}));return t[n].content=_,Object(s.a)(Object(s.a)({},e),{},{data:t})}))})))};return r?Object(i.jsx)(x,{}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"hb-comment-input",children:[Object(i.jsx)(y.q,{className:"hb-avatar-img",alt:"avatar",src:I}),Object(i.jsxs)("div",{className:"input-wrapper",children:[Object(i.jsx)("input",{ref:q,placeholder:"Ihr Kommentar ...",value:_,onChange:function(e){return C(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(b?T():R())},maxLength:500,style:{marginRight:b?0:8}}),_&&Object(i.jsx)(f.d,{style:{position:"absolute",right:b?16:24},circle:{color:"#dddedf",size:24},icon:"cross",size:16,color:"var(--violet-80)",onClick:function(){return C("")}})]}),!b&&Object(i.jsx)(f.d,{icon:"send",size:24,color:"var(--violet-80)",disabled:""===(null===_||void 0===_?void 0:_.trim()),onClick:b?T:R})]}),b&&Object(i.jsxs)("div",{className:"d-flex justify-content-end mt-3",children:[Object(i.jsx)("div",{className:"hb-btn-comment-wrapper mr-2",children:Object(i.jsx)(f.c,{outline:!0,small:!0,onClick:function(){return b?null===w||void 0===w?void 0:w(!1):C("")},children:"Abbrechen"})}),Object(i.jsx)("div",{className:"hb-btn-comment-wrapper",children:Object(i.jsx)(f.c,{small:!0,disabled:!(null===_||void 0===_?void 0:_.trim())||(null===_||void 0===_?void 0:_.trim())===j,onClick:b?T:R,children:"Speichern"})})]})]})},N=function(e){var t=Object(g.b)().callApi,n=Object(a.useState)(!1),o=Object(c.a)(n,2),r=o[0],d=o[1],m=e.videoId,b=e.commentId,j=e.replyId,h=e.replyContent,w=e.setReplies,N=e.setShowReplyInput,k=Object(a.useState)(h||""),_=Object(c.a)(k,2),C=_[0],S=_[1],I=Object(p.d)((function(e){return e.auth})),q=I.avatar||O.c,R=Object(a.useRef)(null);Object(a.useEffect)((function(){var e;return null===(e=R.current)||void 0===e?void 0:e.focus()}),[]);var T=function(){var e=null===C||void 0===C?void 0:C.trim();e&&e!==h&&(d(!0),t({method:"post",api:l.d.rest.createReply(m,b),body:{comment:C}},(function(e){N(!1);var t=e.data;e.status===u.c&&w((function(e){return Object(s.a)(Object(s.a)({},e),{},{data:[{id:t.id,user_id:I.user_id,user_avatar:q,username:I.first_name+" "+I.last_name,content:C,liked_amount:0,is_liked:!1,created_date:(new Date).getTime()/1e3,is_new:!0}].concat(Object(v.a)(e.data))})}))})))},P=function(){(null===C||void 0===C?void 0:C.trim())&&(null===d||void 0===d||d(!0),t({method:"put",api:l.d.rest.updateReply(m,b,j||""),body:{comment:C}},(function(e){null===d||void 0===d||d(!1),N(!1),e.status===u.c&&w((function(e){var t=Object(v.a)(e.data),n=t.findIndex((function(e){return e.id===j}));return t[n].content=C,Object(s.a)(Object(s.a)({},e),{},{data:t})}))})))};return r?Object(i.jsx)(x,{}):Object(i.jsxs)("div",{className:"hb-comment-input hb-ml-40",children:[Object(i.jsx)(y.q,{className:"hb-avatar-img",alt:"avatar",src:q}),Object(i.jsxs)("div",{className:"input-wrapper",children:[Object(i.jsx)("input",{ref:R,placeholder:"Ihre Antwort ...",value:C,onChange:function(e){return S(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(j?P():T())},maxLength:500}),Object(i.jsx)(f.d,{style:{position:"absolute",right:24},circle:{color:"#dddedf",size:24},icon:"cross",size:16,color:"var(--violet-80)",onClick:function(){return null===N||void 0===N?void 0:N(!1)}})]}),Object(i.jsx)(f.d,{icon:"send",size:24,color:"var(--violet-80)",disabled:""===(null===C||void 0===C?void 0:C.trim()),onClick:j?P:T})]})},k=function(e){var t=Object(g.b)().callApi,n=Object(a.useState)(!1),o=Object(c.a)(n,2),r=o[0],m=o[1],b=Object(a.useState)(!1),j=Object(c.a)(b,2),h=j[0],w=j[1],k=e.videoId,_=e.commentId,C=e.reply,S=e.setComments,I=e.setReplies,q=e.setPopupDelete,R=e.handleOpenPopup,T=Object(p.d)((function(e){return e.auth})),P=function(){m(!0);var e=C.id;t({method:"delete",api:l.d.rest.deleteReply(k,_,e)},(function(t){m(!1),t.status===u.c&&(I((function(t){var n=t.data.filter((function(t){return t.id!==e}));return Object(s.a)(Object(s.a)({},t),{},{data:n})})),C.is_new||S((function(e){var t=Object(s.a)({},e),n=t.data,a=n.findIndex((function(e){return e.id===_}));return n[a].replied_amount-=1,t})))}))};return r?Object(i.jsx)(x,{}):h?Object(i.jsx)(N,{videoId:k,commentId:_,replyId:C.id,replyContent:C.content,setReplies:I,setShowReplyInput:w}):Object(i.jsxs)("div",{className:"hb-comment reply hb-ml-40",style:{borderRadius:"0 16px 16px 0",borderLeft:"4px solid var(--violet-20)"},children:[C.user_id===T.user_id&&Object(i.jsx)("div",{className:"more-ver",onClick:function(e){return R(e,{edit:function(){return w(!0)},del:function(){return q({show:!0,isReply:!0,deleteComment:P})}})},children:Object(i.jsx)("i",{className:"hb-icon-more-ver"})}),Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)(y.q,{className:"hb-avatar-img",alt:"avatar",src:C.user_avatar||O.c}),Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"username",children:C.username}),Object(i.jsx)("div",{className:"time",children:Object(d.w)(C.created_date,!0)})]})]}),Object(i.jsxs)("div",{className:"body",children:[Object(i.jsx)("div",{className:"content",children:C.content}),Object(i.jsx)("div",{className:"d-flex align-items-center justify-content-between",children:Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)(f.d,{size:25,icon:C.is_liked?"heart-s":"heart-r",color:"var(--violet-80)",onClick:function(){var e=C.is_liked,n=C.id;I((function(e){var t=Object(v.a)(e.data),a=t.findIndex((function(e){return e.id===n})),i=t[a],c=i.is_liked;return i.is_liked=!c,i.liked_amount+=c?-1:1,Object(s.a)(Object(s.a)({},e),{},{data:t})})),t({method:e?"put":"post",api:e?l.d.rest.unlikeReply(k,_,n):l.d.rest.likeReply(k,_,n)},(function(e){e.status;u.c}))}}),C.liked_amount>0&&Object(i.jsx)("span",{className:"ml-2 like-comment-amount",children:C.liked_amount})]})})]})]})},_=function(e){var t=Object(g.b)().callApi,n=Object(a.useState)(!1),o=Object(c.a)(n,2),r=o[0],m=o[1],b=Object(a.useState)(!1),j=Object(c.a)(b,2),h=j[0],_=j[1],C=Object(a.useState)(!1),S=Object(c.a)(C,2),I=S[0],q=S[1],R=Object(a.useState)({data:[],loading:!1,loaded:!1,show:!1}),T=Object(c.a)(R,2),P=T[0],B=T[1],M=e.videoId,A=e.comment,D=e.setComments,V=e.setPopupDelete,L=e.handleOpenPopup,E=Object(p.d)((function(e){return e.auth})),z=(Object(a.useRef)(1),function(e){t({api:l.d.rest.getReplies(M,A.id,e),method:"get"},(function(e){var t=e.status,n=e.data;t===u.c?B((function(e){var t=e.data;return Object(s.a)(Object(s.a)({},e),{},{show:!0,loading:!1,loaded:!0,data:[].concat(Object(v.a)(t),Object(v.a)(n.replies.filter((function(e){return!Object(d.p)(t,e)}))))})})):B((function(e){return Object(s.a)(Object(s.a)({},e),{},{loading:!1})}))}))}),W=function(){m(!0);var e=A.id;t({method:"delete",api:l.d.rest.deleteComment(M,e)},(function(t){m(!1),t.status===u.c&&D((function(t){var n=t.data.filter((function(t){return t.id!==e}));return Object(s.a)(Object(s.a)({},t),{},{data:n,total:t.total-1})}))}))};return Object(i.jsxs)(i.Fragment,{children:[r?Object(i.jsx)(x,{}):h?Object(i.jsx)(w,{videoId:M,commentId:A.id,commentContent:A.content,setComments:D,setShowUpdateInput:_}):Object(i.jsxs)("div",{className:"hb-comment",children:[A.user_id===E.user_id&&Object(i.jsx)("div",{className:"more-ver",onClick:function(e){return L(e,{edit:function(){return _(!0)},del:function(){return V({show:!0,deleteComment:W})}})},children:Object(i.jsx)("i",{className:"hb-icon-more-ver"})}),Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)(y.q,{className:"hb-avatar-img",alt:"avatar",src:A.user_avatar||O.c}),Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h6",{className:"username",children:A.username}),Object(i.jsx)("div",{className:"time",children:Object(d.w)(A.created_date,!0)})]})]}),Object(i.jsxs)("div",{className:"body",children:[Object(i.jsx)("div",{className:"content",children:A.content}),Object(i.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)(f.d,{size:25,icon:A.is_liked?"heart-s":"heart-r",color:"var(--violet-80)",onClick:function(){var e=A.is_liked,n=A.id;D((function(e){var t=Object(v.a)(e.data),a=t.findIndex((function(e){return e.id===n})),i=t[a],c=i.is_liked;return i.is_liked=!c,i.liked_amount+=c?-1:1,Object(s.a)(Object(s.a)({},e),{},{data:t})})),t({method:e?"put":"post",api:e?l.d.rest.unlikeComment(M,n):l.d.rest.likeComment(M,n)},(function(e){e.status;u.c}))}}),A.liked_amount>0&&Object(i.jsx)("span",{className:"ml-2 like-comment-amount",children:A.liked_amount}),A.replied_amount>0&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(f.d,{style:{fontWeight:"bold",marginLeft:28},size:23,icon:P.show?"comment-s":"comment-r",color:"var(--violet-80)",onClick:function(){P.show?B(Object(s.a)(Object(s.a)({},P),{},{show:!1})):(B(Object(s.a)(Object(s.a)({},P),{},{loading:!0,show:!0})),P.loaded?B(Object(s.a)(Object(s.a)({},P),{},{show:!0})):z(1))}}),Object(i.jsx)("span",{className:"ml-2 like-comment-amount",children:A.replied_amount})]})]}),Object(i.jsx)("div",{className:"btn-reply",onClick:function(){return q(!0)},children:"Antworten"})]})]})]}),Object(i.jsxs)("div",{children:[I&&Object(i.jsx)(N,{videoId:M,commentId:A.id,replyContent:"",setReplies:B,setShowReplyInput:q}),P.data.filter((function(e){return e.is_new})).map((function(e){return Object(i.jsx)(k,{videoId:M,setPopupDelete:V,commentId:A.id,reply:e,setComments:D,setReplies:B,handleOpenPopup:L},e.id)})),A.replied_amount>0&&P.show&&P.data.filter((function(e){return!e.is_new})).map((function(e){return Object(i.jsx)(k,{videoId:M,setPopupDelete:V,commentId:A.id,reply:e,setComments:D,setReplies:B,handleOpenPopup:L},e.id)})),P.loading&&Object(i.jsx)(x,{})]})]})},C=function(e){var t=e.popupDelete,n=e.setPopupDelete,a=t.deleteComment,c=t.show,o=t.isReply,r=function(){n(Object(s.a)(Object(s.a)({},t),{},{show:!1}))};return Object(i.jsx)(f.j,{show:c,handleClose:r,title:o?"Antwort l\xf6schen":"Kommentar l\xf6schen",content:o?"Sind Sie sicher, dass Sie Ihren Antwort unwiederruflich l\xf6schen wollen?":"Sind Sie sicher, dass Sie Ihren Kommentar unwiederruflich l\xf6schen wollen?",up:"Jetzt l\xf6schen",down:"Abbrechen",upCallback:function(){null===a||void 0===a||a(),r()},downCallback:r})},S=n(189),I=n(644),q=function(e){var t=e.data,n=Object(a.useState)(!1),s=Object(c.a)(n,2),o=(s[0],s[1],Object(a.useState)({show:!1,name:"",link:""})),r=Object(c.a)(o,2),l=r[0],d=r[1];Object(a.useRef)(null);return Object(i.jsxs)("div",{children:[Object(i.jsxs)(f.i,{size:"xl",style:{height:"90vh"},centered:!0,closeBtn:!0,show:l.show,onClose:function(){return d({show:!1,name:"",link:""})},closeOnBackdrop:!1,children:[Object(i.jsx)("div",{className:"hb-modal-body",children:l.name}),Object(i.jsx)(y.p,{title:l.name,width:"100%",height:"95%",src:l.link,style:{border:"none"}},l.link)]}),Object(i.jsx)("h3",{className:"header pr-3",children:"Arbeitsunterlagen und Anleitungen"}),t.map((function(e){return Object(i.jsx)(I.a,{label:e.file_name,icon:"file-text",callback:function(){return d({show:!0,name:e.file_name,link:e.link})}},e.key)}))]})},R=n(642),T=n(672),P=(n(901),function(e){var t=e.handleClose,n=Object(a.useState)([{id:"1",title:"Wie kann ich die Intensit\xe4t der \xdcbung steigern?",content:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."],show:!1},{id:"2",title:"Wie kann ich die Intensit\xe4t der \xdcbung steigern?",content:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."],show:!1},{id:"3",title:"Wie kann ich die Intensit\xe4t der \xdcbung steigern?",content:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."],show:!1},{id:"4",title:"Wie kann ich die Intensit\xe4t der \xdcbung steigern?",content:["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo."],show:!1}]),s=Object(c.a)(n,2),o=s[0],r=s[1];return Object(i.jsxs)("div",{className:"hb-wrapper",children:[Object(i.jsxs)("div",{className:"hb-mx-20",children:[Object(i.jsx)("div",{className:"hb-my-28",children:Object(i.jsxs)(f.e,{color:"nightblue",onClick:function(){t(),window.scrollTo(0,0)},children:[Object(i.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]})}),Object(i.jsx)("div",{className:"hb-title hb-qna-title",children:"H\xe4ufige Fragen zum \xdcbung"})]}),Object(i.jsx)("div",{className:"hb-mx-20 hb-qna-contentWrapper",children:Object(i.jsx)("div",{className:"hb-qna-card",children:o.map((function(e,t){return Object(i.jsxs)("div",{style:{marginTop:0===t?0:16},children:[Object(i.jsxs)("div",{className:"hb-qna-item-header",style:{borderRadius:e.show?"24px 24px 0 0":24},onClick:function(){return function(e){var t=Object(v.a)(o);t[e].show=!t[e].show,r(t)}(t)},children:[Object(i.jsxs)("h4",{children:[e.title," "]}),Object(i.jsx)("i",{className:"hb-icon-angle-down",style:{transform:"rotate(".concat(e.show?-180:0,"deg)"),fontSize:8,height:9}})]}),e.show&&Object(i.jsx)("div",{className:"hb-qna-item-wrapper",children:e.content.map((function(e,t){return Object(i.jsx)("div",{className:"hb-qna-content",style:{marginTop:0===t?0:10},children:e},t)}))})]},e.id)}))})})]})}),B=n(902),M=n.n(B),A=n(193),D=(n(192),n(73));t.default=function(e){var t,n,o=Object(g.b)().callApi,v=new URLSearchParams(null===e||void 0===e||null===(t=e.location)||void 0===t?void 0:t.search),x=Object(p.d)((function(e){return e.auth.access_token})),N=Object(b.i)(),k=v.get("video"),B=Object(a.useState)(Math.max(Number(v.get("time"))||0,0)),V=Object(c.a)(B,2),L=V[0],E=V[1],z=Object(a.useState)(v.get("qna")||!1),W=Object(c.a)(z,2),Q=W[0],F=W[1],K=v.get("autoplay"),U=Object(b.h)(),H=Object(a.useRef)(1),J=Object(a.useRef)(1),Z=Object(a.useState)(null),G=Object(c.a)(Z,2),X=G[0],Y=G[1],$=Object(a.useState)(!1),ee=Object(c.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({data:[],loading:!0}),ie=Object(c.a)(ae,2),se=ie[0],ce=ie[1],oe=Object(a.useState)({data:[],loading:!0,total:0,full:!1}),re=Object(c.a)(oe,2),le=re[0],de=re[1],ue=Object(a.useState)(null),me=Object(c.a)(ue,2),be=me[0],je=me[1],he=Object(a.useState)({deleteComment:null,show:!1,isReply:!1}),ve=Object(c.a)(he,2),pe=ve[0],Oe=ve[1],fe=Object(a.useState)({show:!1,top:0,left:0,width:0,items:[]}),xe=Object(c.a)(fe,2),ge=xe[0],ye=xe[1],we=Object(a.useMemo)((function(){var e,t;return null===X||void 0===X||null===(e=X.tag)||void 0===e||null===(t=e.split)||void 0===t?void 0:t.call(e,",").filter((function(e){return""!==e}))}),[X]),Ne=function(e){o({method:"get",api:l.d.rest.getComments(k,e)},(function(t){var n=t.data;t.status===u.c?de((function(t){var a=t.data;return Object(s.a)(Object(s.a)({},t),{},{data:Object(d.g)(e,a,n.comments.filter((function(e){return!Object(d.p)(a,e)}))),loading:!1,full:n.comments.length<D.h})})):de((function(e){return Object(s.a)(Object(s.a)({},e),{},{loading:!1})}))}))};function ke(e){var t=document.documentElement.clientWidth,n=t<=860?e.left-131:e.left+window.scrollX,a=e.top+window.scrollY-20;return{top:a=t<=860?a+50:a,left:n+30}}function _e(){var e=ge.targetEle,t=r.a.findDOMNode(e),n=null===t||void 0===t?void 0:t.getBoundingClientRect();if(n){var a=ke(n);ye(Object(s.a)(Object(s.a)({},ge),a))}}Object(a.useEffect)((function(){k?(X&&be&&be.reset(),window.scrollTo(0,0),de(Object(s.a)(Object(s.a)({},le),{},{data:[],loading:!0})),function(e){o({method:"get",api:l.d.rest.getVideoById(e),loading:!X},(function(e){var t=e.data;e.status===u.c&&(Y(Object(s.a)(Object(s.a)({},t.video),{},{link_hls:Object(d.a)(t.video.link_hls,x)})),ne(t.video.is_saved),de((function(e){return Object(s.a)(Object(s.a)({},e),{},{total:t.video.commented_amount})})))}))}(k),Ne(H.current),function(e,t){o({method:"get",api:l.d.rest.getRelatedVideos(e,Object(d.n)(t),t)},(function(e){var t=e.data;e.status===u.c&&ce({data:t.videos,loading:!1})}))}(k,J.current),ye(Object(s.a)(Object(s.a)({},ge),{},{show:!1}))):U.push("/mobility")}),[k]),Object(a.useEffect)((function(){be&&X.link_hls&&be.src(X.link_hls)}),[X]),Object(a.useEffect)((function(){return window.addEventListener("resize",_e),function(){window.removeEventListener("resize",_e)}}),[ge]);var Ce=X?{setPlayer:je,autoplay:"0"!==K,sources:[{src:null===X||void 0===X?void 0:X.link_hls,type:"application/x-mpegURL",overrideNative:!0}],poster:null===X||void 0===X?void 0:X.thumbnail,relatedVideos:se,setRelatedVideos:ce,startTime:L,showQuality:!0}:{},Se=function(e,t){var n=ke(e.target.getBoundingClientRect());ye(Object(s.a)(Object(s.a)({targetEle:e.target,show:!0,width:141,items:[{id:"edit",label:"Bearbeiten",icon:"edit-2",handle:t.edit},{id:"del",label:"L\xf6schen",icon:"trash",handle:t.del}]},t),n))},Ie=X&&!se.loading?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"hb-video mb-2",children:Object(i.jsx)(m.a,Object(s.a)({className:M.a.videoWrapper},Ce))}),Object(i.jsxs)("div",{className:"d-flex justify-content-between align-items-center hb-my-28 ".concat(M.a.author),children:[Object(i.jsxs)("div",{className:"d-flex align-items-center",children:[Object(i.jsx)(y.n,{backgroundImage:X.trainer_avatar||O.d,onClick:function(e){e.preventDefault(),X.trainer_id&&U.push("/mobility/trainer-detail/".concat(X.trainer_id))},style:{cursor:X.trainer_id?"pointer":"default"},className:"hb-card-avatar"}),Object(i.jsx)(A.a,{interactive:!0,content:(null===X||void 0===X?void 0:X.viewed_amount)||"0",children:Object(i.jsxs)("div",{className:"hb-card-views-wrapper detail",children:[Object(i.jsx)("i",{className:"hb-icon-eye",style:{color:"var(--violet-80)",fontSize:22,marginRight:7}}),Object(i.jsx)("span",{children:Object(d.r)(null===X||void 0===X?void 0:X.viewed_amount)})]})})]}),Object(i.jsx)("div",{className:"hb-save",onClick:function(){ne((function(e){return!e})),o({method:te?"put":"post",api:te?l.d.rest.unsaveVideo(k):l.d.rest.saveVideo(k)},(function(e){e.status;u.c}))},children:Object(i.jsx)("i",{className:"".concat(te?"hb-icon-heart-s":"hb-icon-heart-r")})})]}),Object(i.jsx)("h2",{className:"hb-title-video",children:null===X||void 0===X?void 0:X.title}),!!(null===we||void 0===we?void 0:we.length)&&Object(i.jsx)("div",{className:"d-flex ".concat(M.a.tags),children:we.map((function(e,t){return Object(i.jsx)(j.a,{to:"/mobility/hashtag/".concat(e),className:"hb-card-keyword",children:"#".concat(e)},t)}))}),(null===X||void 0===X?void 0:X.description)&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h4",{className:"hb-video-description-title",children:"Beschreibung"}),Object(i.jsx)("div",{className:"hb-video-description-content",children:X.description})]}),Object(i.jsxs)("div",{className:"hb-card-video",children:[Object(i.jsxs)("h3",{className:"header",children:[le.total," Kommentar",le.total>1&&"e"]}),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{videoId:X.id,setComments:de}),le.data.map((function(e){return Object(i.jsx)(_,{handleOpenPopup:Se,videoId:k,comment:e,setComments:de,setPopupDelete:Oe},e.id)}))]}),le.loading&&Object(i.jsx)(h.a,{size:"large",render:O.g}),Object(i.jsx)(S.a,{onEnter:function(){le.loading||le.total<=le.data.length||le.full||(de(Object(s.a)(Object(s.a)({},le),{},{loading:!0})),H.current+=1,Ne(H.current))}})]})]}):Object(i.jsx)("div",{className:"hb-video mb-2",children:Object(i.jsx)("div",{className:"video-wrapper ".concat(M.a.videoWrapper)})});return Q?Object(i.jsx)(P,{handleClose:function(){F(!1),U.push(N.pathname+"?video=".concat(k,"&autoplay=").concat(K))}}):Object(i.jsxs)(T.a,{children:[Object(i.jsx)(f.h,Object(s.a)(Object(s.a)({},ge),{},{className:"userOptions",handleClose:function(){return ye(Object(s.a)(Object(s.a)({},ge),{},{show:!1}))}})),Object(i.jsxs)("div",{className:"hb-mx-20",children:[Object(i.jsx)("div",{className:"hb-my-28",children:Object(i.jsxs)(f.e,{onClick:function(){return U.goBack()},children:[Object(i.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]})}),Object(i.jsxs)("div",{className:"mobility-detail",children:[Object(i.jsx)(C,{popupDelete:pe,setPopupDelete:Oe}),Object(i.jsxs)("div",{className:"row ".concat(M.a.detailWrapperContainer),children:[Object(i.jsx)("div",{className:"col-md-8",children:Ie}),Object(i.jsxs)("div",{className:"col-md-4",children:[(null===X||void 0===X||null===(n=X.documents)||void 0===n?void 0:n.length)>0&&Object(i.jsx)("div",{className:"hb-card-video",children:Object(i.jsx)(q,{data:X.documents})}),Object(i.jsxs)("div",{className:"hb-card-video",children:[Object(i.jsx)("h3",{className:"header",children:"H\xe4ufige Fragen zum \xdcbung"}),Object(i.jsx)(I.a,{label:"Fragen & Antworten",icon:"comment-2-question",callback:function(){var e,t=Math.floor((null===be||void 0===be||null===(e=be.currentTime)||void 0===e?void 0:e.call(be))||0);U.push(N.pathname+"?video=".concat(k,"&qna=true&time=").concat(t,"&autoplay=").concat(be.paused()?"0":"1")),E(t),F(!0),window.scrollTo(0,0)}})]}),se.data.length>0&&Object(i.jsxs)("div",{className:"hb-card-video ".concat(M.a.listVideosWrapper),children:[Object(i.jsx)("h3",{className:"header",children:"Empfohlene \xdcbungen"}),Object(i.jsx)("div",{className:M.a.listVideos,children:se.data.map((function(e,t){return Object(a.createElement)(R.a,Object(s.a)(Object(s.a)({setVideos:ce},e),{},{key:e.id,index:t,isRelated:!0}))}))})]})]})]})]})]})]})}},610:function(e,t,n){"use strict";var a=n(3),i=(n(1),{large:80,medium:48,small:36});t.a=function(e){var t=e.size,n=e.render;return Object(a.jsx)("div",{className:"video-comments--comment",children:Object(a.jsx)("div",{style:{width:"100%",height:i[t]},children:n})})}},642:function(e,t,n){"use strict";var a=n(3),i=n(7),s=n(47),c=(n(1),n(39)),o=n(57),r=n(29),l=n(38),d=n(31),u=n(32),m=n(193),b=(n(192),n(186)),j=n(96);t.a=function(e){var t=Object(b.b)().callApi,n=e.index,h=e.id,v=e.thumbnail,p=e.title,O=e.viewed_amount,f=e.setVideos,x=e.is_saved,g=e.screenSaved,y=e.isRelated,w=e.isDetail,N=e.category_name,k=e.trainer_avatar,_=e.trainer_id,C=e.className,S=e.setLibrary,I=Object(c.h)();return Object(a.jsx)("div",{className:"".concat(y?"hb-card-item":w?"col-md-6 hb-card-item":"col-lg-4 col-md-6 hb-card-item"," ").concat(C),style:{marginBottom:y?0:16,marginTop:y?16:0},children:Object(a.jsxs)(o.a,{to:"/mobility/watch?video=".concat(h),children:[Object(a.jsx)(j.n,{backgroundImage:v||d.l,className:"Video-thumbnail",style:{overflow:"hidden",width:"100%",display:"block",borderRadius:"32px 32px 0 0",height:182,backgroundSize:"cover"}}),Object(a.jsxs)("div",{style:{backgroundColor:"white",padding:"20px",borderRadius:"0 0 30px 30px",border:y?"1px solid var(--petrol-5)":"none"},children:[Object(a.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(a.jsxs)("div",{className:"d-flex align-items-center",children:[Object(a.jsx)(j.n,{backgroundImage:k||d.d,onClick:function(e){e.preventDefault(),_&&I.push("/mobility/trainer-detail/".concat(_))},style:{cursor:_?"pointer":"default"},className:"hb-card-avatar"}),Object(a.jsx)(m.a,{interactive:!0,content:O||"0",children:Object(a.jsxs)("div",{className:"hb-card-views-wrapper",children:[Object(a.jsx)("i",{className:"hb-icon-eye",style:{color:"var(--violet-80)",fontSize:22,marginRight:7}}),Object(a.jsx)("span",{className:"small",children:Object(u.r)(O)})]})})]}),Object(a.jsx)("div",{className:"hb-save",onClick:function(e){e.preventDefault(),f(g?function(e){var t=e.data.filter((function(e){return e.id!==h}));return Object(i.a)(Object(i.a)({},e),{},{data:t})}:function(e){var t=Object(s.a)(e.data);return t[n].is_saved=!x,Object(i.a)(Object(i.a)({},e),{},{data:t})}),S&&S((function(e){return e?Object(i.a)(Object(i.a)({},e),{},{is_save_number:e.is_save_number+(x?-1:1)}):null})),t({method:x?"put":"post",api:x?r.d.rest.unsaveVideo(h):r.d.rest.saveVideo(h)},(function(e){e.status;l.c}))},children:Object(a.jsx)("i",{className:"".concat(x?"hb-icon-heart-s":"hb-icon-heart-r")})})]}),Object(a.jsx)("h4",{className:"hb-card-title video",children:p}),Object(a.jsx)("div",{className:"d-flex",style:{marginTop:10},children:Object(d.b)(N||"")})]})]})})}},644:function(e,t,n){"use strict";var a=n(3);n(1);t.a=function(e){var t=e.className,n=void 0===t?"":t,i=e.icon,s=e.label,c=e.callback,o=void 0===c?function(){}:c;return Object(a.jsxs)("div",{className:"hb-workbook-item ".concat(n),onClick:o,children:[Object(a.jsxs)("div",{className:"d-flex align-items-center",style:{width:"calc(100% - 30px)"},children:[Object(a.jsx)("div",{className:"icon",children:Object(a.jsx)("i",{className:"hb-icon-".concat(i)})}),Object(a.jsx)("div",{className:"label",children:s})]}),Object(a.jsx)("div",{className:"arrow",children:Object(a.jsx)("i",{className:"hb-icon-arrow-right"})})]})}},672:function(e,t,n){"use strict";var a=n(3);n(1);t.a=function(e){var t=e.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"hb-ellipse",children:Object(a.jsx)("div",{className:"hb-ellipse-children"})}),Object(a.jsx)("div",{className:"hb-wrapper",children:t})]})}},676:function(e,t,n){"use strict";var a=n(3),i=n(7),s=n(1),c=n(637),o=(n(679),n(680),n(726),n(681),n(682),n(39));c.default.addLanguage("de",{Play:"Wiedergabe",Replay:"Wiedergabe",Pause:"Pause",Fullscreen:"Vollbild","Non-Fullscreen":"Vollbild beenden",Mute:"Stummschalten",Unmute:"Stummschaltung aufheben","Play Video":"Video abspielen"});var r=function(e){var t=e.className,n=e.setPlayer,r=e.autoplay,l=e.controls,d=e.poster,u=e.sources,m=e.relatedVideos,b=e.setRelatedVideos,j=e.startTime,h=e.showQuality,v=e.isTrainer,p=Object(o.h)(),O=Object(s.useRef)(null);return Object(s.useEffect)((function(){var t=setInterval((function(){var t=O&&O.current||null;if(t&&!t.paused){var n=t.duration,a=t.currentTime;e.videoProgress({duration:n,currentTime:a})}}),500);return function(){clearInterval(t)}}),[]),Object(s.useEffect)((function(){var e=h?{qualitySelector:{}}:{},t=Object(c.default)(O.current,{html5:{hls:{overrideNative:!0},nativeAudioTracks:!1,nativeVideoTracks:!1,nativeTextTracks:!1},autoplay:r,controls:l,poster:d,sources:u,plugins:v?void 0:Object(i.a)(Object(i.a)({},e),{},{seekButtons:{forward:15,back:15}}),controlBar:{volumePanel:{inline:!1},liveDisplay:!0,pictureInPictureToggle:!1,children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","fullscreenToggle"]}},(function(){var e;if(j&&t.currentTime(j),b&&(null===m||void 0===m||null===(e=m.data)||void 0===e?void 0:e.length)>0){var n=c.default.getComponent("Button"),a=c.default.extend(n,{constructor:function(){n.apply(this,arguments),this.controlText("N\xe4chstes Video"),this.addClass("vjs-next-video")},handleClick:function(){var e;b((function(t){var n,a;return e=null===t||void 0===t||null===(n=t.data)||void 0===n||null===(a=n[0])||void 0===a?void 0:a.id,t})),e&&p.push("/mobility/watch?video=".concat(e))}});c.default.registerComponent("nextButton",a),t.controlBar.addChild("nextButton",{},5)}t.controlBar.addChild("Component",{},6).addClass("logo")}));return n&&n(t),function(){t&&t.dispose()}}),[]),Object(a.jsx)("div",{className:"video-wrapper ".concat(t),children:Object(a.jsx)("div",{"data-vjs-player":!0,children:Object(a.jsx)("video",{ref:O,className:"video-js vjs-fill","data-setup":'{"language":"de"}'})})})};r.defaultProps={className:"",autoplay:!0,controls:!0,playbackRates:[.5,.75,1,1.5,2],poster:"",sources:[],videoProgress:function(){return null},nextVideo:"",startTime:0},t.a=r},679:function(e,t,n){"use strict";(function(t){var a,i=(a=n(637))&&"object"===typeof a&&"default"in a?a.default:a;t.videojsQualitySelector=i;var s={},c=i.registerPlugin||i.plugin,o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},d=i.getComponent("MenuButton"),u=i.getComponent("Menu"),m=i.getComponent("Component"),b=i.getComponent("MenuItem"),j=i.dom,h=function(e){function t(n){return o(this,t),l(this,e.call(this,n,{}))}return r(t,e),t.prototype.createItems=function(){return[]},t.prototype.createMenu=function(){var e=new u(this.player_,{menuButton:this});this.hideThreshold_=0;var t=j.createEl("li",{className:"vjs-menu-title",innerHTML:"",tabIndex:-1}),n=new m(this.player_,{el:t});if(this.hideThreshold_+=1,e.addItem(n),this.items=this.createItems(),this.items)for(var a=0;a<this.items.length;a++)e.addItem(this.items[a]);return e},t}(d),v=function(e){function t(n,a,i,s){o(this,t);var c=l(this,e.call(this,n,{label:a.label,selectable:!0,selected:a.selected||!1}));return c.item=a,c.qualityMenu=i,c.plugin=s,c}return r(t,e),t.prototype.handleClick=function(){for(var e=0;e<this.qualityMenu.items.length;++e)this.qualityMenu.items[e].selected(!1);this.plugin.setQuality(this.item),this.selected(!0)},t}(b),p=function(){function e(e,t){this.player=e,this.qualityParams=this.getQualityParams(e.el().dataset.qualityParams),this.qualityParams.length>0&&(this.createQualityMenu(),this.onAddQualityLevel())}return e.prototype.getQualityParams=function(e){return(e=[{quality:-1,level:-1,label:"Auto",order:0},{quality:480,level:0,label:"480p",order:3},{quality:720,level:1,label:"720p",order:2},{quality:1080,level:2,label:"1080p",order:1}]).length>0?(e.sort((function(e,t){return e.order<t.order?-1:e.order>t.order?1:0})),e):[]},e.prototype.createQualityMenu=function(){var e=this.player;this._qualityMenu=new h(e);var t=e.controlBar.children().length-2,n=e.controlBar.addChild(this._qualityMenu,{componentClass:"qualitySelector"},t);n.addClass("vjs-quality-selector"),n.menuButton_.$(".vjs-icon-placeholder").className+=" vjs-icon-quality",n.removeClass("vjs-hidden")},e.prototype.getQualityMenuItem=function(e){var t=this.player;return new v(t,e,this._qualityMenu,this)},e.prototype.onAddQualityLevel=function(){for(var e=this,t=(this.player,this.qualityParams),n=[],a=function(a){if(!n.filter((function(e){return e.item&&e.item.level===t[a].level})).length){var i=e.getQualityMenuItem.call(e,{label:t[a].label,level:t[a].level,quality:t[a].quality,selected:-1==t[a].level||!1});n.push(i)}},i=0;i<t.length;++i)a(i);this._qualityMenu&&(this._qualityMenu.createItems=function(){return n},this._qualityMenu.update())},e.prototype.getHls=function(){return this.player.tech({IWillNotUseThisInPlugins:!0}).hls},e.prototype.setQuality=function(e){this.player;this.getHls().representations().forEach((function(t){t.enabled(t.height===e.quality||-1===e.quality)})),this._qualityMenu.unpressButton()},e}(),O=function(e){var t=this;this.ready((function(){!function(e,t){e.addClass("vjs-quality-selector"),e.qualitySelector=new p(e,t)}(t,i.mergeOptions(s,e))}))};c("qualitySelector",O),O.VERSION="0.0.0",e.exports=O}).call(this,n(35))},680:function(e,t,n){var a,i=(a=n(637))&&"object"===typeof a&&"default"in a?a.default:a;var s=i.getComponent("Button"),c={},o=i.registerPlugin||i.plugin,r=function(e){var t=this;this.ready((function(){!function(e,t){e.addClass("vjs-seek-buttons"),t.forward&&t.forward>0&&(e.controlBar.seekForward=e.controlBar.addChild("seekButton",{direction:"forward",seconds:t.forward},5)),t.back&&t.back>0&&(e.controlBar.seekBack=e.controlBar.addChild("seekButton",{direction:"back",seconds:t.back},5))}(t,i.mergeOptions(c,e))}))};r.VERSION="1.5.0";var l=function(e){var t,n;function a(t,n){var a;return"forward"===(a=e.call(this,t,n)||this).options_.direction?a.controlText("15 Sekunden vorw\xe4rts"):"back"===a.options_.direction&&a.controlText("15 Sekunden zur\xfcckspulen"),a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.buildCSSClass=function(){return"vjs-seek-button skip-"+this.options_.direction+" skip-"+this.options_.seconds+" "+e.prototype.buildCSSClass.call(this)},i.handleClick=function(){var e=this.player_.currentTime();"forward"===this.options_.direction?this.player_.currentTime(e+this.options_.seconds):"back"===this.options_.direction&&this.player_.currentTime(e-this.options_.seconds)},a}(s);i.registerComponent("SeekButton",l),o("seekButtons",r),e.exports=r},681:function(e,t,n){},682:function(e,t,n){},721:function(e,t){},901:function(e,t,n){},902:function(e,t,n){e.exports={detailWrapperContainer:"MobilityDetail_detailWrapperContainer__3pS4z",videoWrapper:"MobilityDetail_videoWrapper__3N8GP",tags:"MobilityDetail_tags__ASK7K",listVideosWrapper:"MobilityDetail_listVideosWrapper__3IM6q",listVideos:"MobilityDetail_listVideos__QEinQ",author:"MobilityDetail_author__239cv"}}}]);
//# sourceMappingURL=13.2b44b52c.chunk.js.map