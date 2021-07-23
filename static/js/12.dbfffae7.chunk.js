(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[12],{1021:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(3),s=n(16),i=n(1),r=n(39),o=n(115),l=(n(855),function(e){var t=e.title,n=e.icon,a=e.onClick,r=e.disabled,o=e.className,l=void 0===o?"":o,u=e.isOff,d=void 0!==u&&u,b=Object(i.useState)(d),j=Object(s.a)(b,2),h=j[0],p=j[1];return Object(c.jsx)("span",{title:t,onClick:function(e){p(!h),null===a||void 0===a||a(e)},className:"ControlButton__btn".concat(r?" disabled":""," ").concat(l),children:Object(c.jsx)("i",{className:"hb-icon-".concat(n).concat(h?" off":"")})})}),u=(n(856),function(e){var t=e.onSubmit,n=Object(i.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],l=function(e){e.preventDefault(),r.trim()&&(t(r),o(""))};return Object(c.jsx)("form",{onSubmit:l,children:Object(c.jsxs)("div",{className:"MessageInput",children:[Object(c.jsx)("input",{placeholder:"Antworten ...",value:r,onChange:function(e){return o(e.target.value)}}),Object(c.jsx)("button",{children:Object(c.jsx)("i",{className:"hb-icon-send-2",onClick:l})})]})})}),d=(n(857),function(e){var t=e.label,n=e.switchState,a=e.setSwitchState;return Object(c.jsxs)("div",{className:"RenderSwitch-switch-wrapper",children:[Object(c.jsx)("h6",{className:"RenderSwitch-switch-wrapper__label",children:t}),Object(c.jsx)(o.n,{checked:n,onClick:function(){return a(!n)}})]})}),b=n(31),j=(n(858),function(e){var t=e.isMe,n=e.avatar,a=void 0===n?b.c:n,s=e.content;return Object(c.jsxs)("div",{className:"MessageItem".concat(t?" is-me":""),children:[!t&&Object(c.jsx)("img",{className:"MessageItem-avatar",src:a,alt:"avatar"}),Object(c.jsx)("div",{children:s})]})}),h=function(e){return Object(c.jsx)(l,Object(a.a)({icon:"call-decline",title:"Leave",className:"leave"},e))},p=(n(859),function(e){var t=e.onChangeVolume,n=Object(i.useState)(100),a=Object(s.a)(n,2),r=a[0],o=a[1],l=Object(i.useState)(!1),u=Object(s.a)(l,2),d=u[0],b=u[1];return Object(c.jsx)("div",{className:"ControlButtonVolume",children:Object(c.jsxs)("span",{onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},title:"Volume",className:"ControlButton__btn".concat(d?" square":""),children:[d&&Object(c.jsx)("div",{className:"ControlButton__btn-control",children:Object(c.jsx)("input",{type:"range",min:0,max:100,value:r,onChange:function(e){var n=e.target.value;o(n),t(parseInt(n))}})}),Object(c.jsx)("i",{className:"hb-icon-meeting-volume-high"})]})})}),m=(n(860),function(e){var t,n=Object(i.useState)(e.defaultTime),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(i.useEffect)((function(){var e=setInterval((function(){return o((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.jsxs)("div",{className:"MeetingTimer",children:[Object(c.jsx)("div",{className:"MeetingTimer-ellipse"}),Object(c.jsx)("span",{children:(t=r,("0"+Math.floor(t/60)).substr(-2)+":"+("0"+t%60).substr(-2))})]})}),v=(n(861),function(e){var t=e.audio,n=e.video,a=e.joinMeeting,r=Object(i.useState)(t),l=Object(s.a)(r,2),u=l[0],b=l[1],j=Object(i.useState)(n),h=Object(s.a)(j,2),p=h[0],m=h[1];return Object(c.jsx)(o.i,{contentClassname:"padding-small",backdropOpacity:0,show:!0,onClose:function(){},closeOnBackdrop:!1,centered:!0,closeBtn:!0,children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("h2",{className:"Options-title",children:"Teilnehmeroptionen"}),Object(c.jsx)(d,{label:"Ton einschalten",switchState:u,setSwitchState:b}),Object(c.jsx)("div",{className:"Options-hr"}),Object(c.jsx)(d,{label:"Video einschalten",switchState:p,setSwitchState:m}),Object(c.jsx)("div",{className:"Options-btn-join",children:Object(c.jsx)(o.c,{onClick:function(){a(u,p)},children:"Teilnehmen"})})]})})}),f=n.p+"static/media/loading.5f9bf437.gif",g=(n(862),function(){return Object(c.jsx)("div",{className:"MeetingLoading",children:Object(c.jsxs)("div",{className:"MeetingLoading-wrapper",children:[Object(c.jsx)("img",{src:f,alt:"loading"}),Object(c.jsx)("h3",{children:"Verbindung wird aufgebaut..."})]})})}),O=n(47),x=n(863),C=n.n(x),y={1:["span 12/span 24"],2:["span 12/span 12/13/25","span 12/span 12/13/13"],3:["span 6/span 12","span 6/span 12","span 6/span 12/7/19"],4:["span 6/span 12","span 6/span 12","span 6/span 12","span 6/span 12/7/13"],5:["span 3/span 4/13/9","span 3/span 4/13/13","span 3/span 4/13/17","span 3/span 4/13/21","span 9/span 16/10/21"],6:["span 3/span 4/13/7","span 3/span 4/13/11","span 3/span 4/13/15","span 3/span 4/13/19","span 3/span 4/13/23","span 9/span 16/10/21"],7:["span 3/span 4/13/5","span 3/span 4/13/9","span 3/span 4/13/13","span 3/span 4/13/17","span 3/span 4/13/21","span 3/span 4/13/25","span 9/span 16/10/21"]},S=n(41),w=n.n(S),N=n(85),k=n(97),A=n(98),M=n(864),_=n.n(M),T=function(){function e(t,n,a,c,s){Object(k.a)(this,e),this.channels=void 0,this._logined=void 0,this.client=void 0,this.accountName=void 0,this.addMessage=void 0,this.channelName=void 0,this.channels={},this._logined=!1,this.accountName="",this.client=_.a.createInstance(t,{enableLogUpload:!1,logFilter:_.a.LOG_FILTER_OFF}),this.channelName=a,this.subscribeClientEvents(),this.joinChannel(a,n,c),this.addMessage=s}return Object(A.a)(e,[{key:"subscribeClientEvents",value:function(){["ConnectionStateChanged","MessageFromPeer"].forEach((function(e){}))}},{key:"subscribeChannelEvents",value:function(e){var t=this;["MemberJoined","MemberLeft"].forEach((function(n){t.channels[e].channel.on(n,(function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];console.log("emit ",n,t)}))})),this.channels[e].channel.on("ChannelMessage",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];console.log("emit ","ChannelMessage",n),t.addMessage({uid:n[1],content:n[0].text})}))}},{key:"login",value:function(){var e=Object(N.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.accountName=t,e.abrupt("return",this.client.login({uid:this.accountName,token:n}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(N.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.client.logout());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"joinChannel",value:function(){var e=Object(N.a)(w.a.mark((function e(t,n,a){var c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.login(n,a);case 2:return c=this.client.createChannel(t),this.channels[t]={channel:c,joined:!1},this.subscribeChannelEvents(t),e.abrupt("return",c.join());case 6:case"end":return e.stop()}}),e,this)})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"leaveChannel",value:function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("leaveChannel",t),this.channels[t]&&(!this.channels[t]||this.channels[t].joined)){e.next=3;break}return e.abrupt("return");case 3:return e.abrupt("return",this.channels[t].channel.leave());case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendChannelMessage",value:function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.channelName,this.channels[n]){e.next=3;break}return e.abrupt("return");case 3:return this.addMessage({uid:this.accountName,content:t}),e.abrupt("return",this.channels[n].channel.sendMessage({text:t}));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendPeerMessage",value:function(){var e=Object(N.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("sendPeerMessage",t,n),e.abrupt("return",this.client.sendMessageToPeer({text:t},n.toString()));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"queryPeersOnlineStatus",value:function(){var e=Object(N.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("queryPeersOnlineStatus",t),e.abrupt("return",this.client.queryPeersOnlineStatus([t]));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();n(865);C.a.Logger.setLogLevel(4);var V=function(e){var t=e.audio,n=e.video,r=e.leaveMeeting,o=e.meetingId,d=e.uid,b=e.rtmUid,v=e.token,f=e.rtmToken,g="8d7e950852c341c7b2050e83261bde49",x=Object(i.useRef)({}),S=Object(i.useRef)(null),w=Object(i.useRef)({}),N=Object(i.useRef)({}),k=Object(i.useRef)(""),A=Object(i.useRef)(null),M=Object(i.useState)("pip"),_=Object(s.a)(M,2),V=_[0],I=(_[1],Object(i.useState)([])),L=Object(s.a)(I,2),E=L[0],P=L[1],R=Object(i.useState)(!1),q=Object(s.a)(R,2),D=q[0],B=q[1],F=Object(i.useState)(!1),U=Object(s.a)(F,2),z=U[0],G=(U[1],Object(i.useState)([{uid:"System",content:"Hi there!"},{uid:"System",content:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}])),J=Object(s.a)(G,2),H=J[0],K=J[1],Q=Object(i.useState)(0),W=Object(s.a)(Q,2),X=W[0],Y=W[1],Z=function(e){return K((function(t){return[].concat(Object(O.a)(t),[Object(a.a)(Object(a.a)({},e),{},{created_date:(new Date).getTime()/1e3})])}))},$=Object(i.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];P((function(n){return n.some((function(t){return t.getId()===e.getId()}))?n:t?n.concat([e]):[e].concat(n)}))}),[]),ee=Object(i.useCallback)((function(e,a){var c={streamID:e,audio:t,video:n,screen:!1},s=C.a.createStream(c);return s.setVideoProfile(a),s}),[]),te=Object(i.useCallback)((function(){x.current.on("stream-added",(function(e){var t=e.stream;Z({uid:"System",content:"New stream added: "+t.getId()}),console.log("At "+(new Date).toLocaleTimeString()),console.log("Subscribe ",t),x.current.subscribe(t,(function(e){console.log("Subscribe stream failed",e)}))})),x.current.on("peer-leave",(function(e){console.log("Peer has left: "+e.uid),console.log((new Date).toLocaleTimeString()),console.log(e),ne(e.uid)})),x.current.on("stream-subscribed",(function(e){var t=e.stream;console.log("Got stream-subscribed event"),console.log((new Date).toLocaleTimeString()),console.log("Subscribe remote stream successfully: "+t.getId()),console.log(e),$(t)})),x.current.on("stream-removed",(function(e){var t=e.stream;console.log("Stream removed: "+t.getId()),console.log((new Date).toLocaleTimeString()),console.log(e),ne(t.getId())}))}),[]),ne=Object(i.useCallback)((function(e){P((function(t){for(var n=0;n<t.length;n++){var a=t[n];if(a.getId()===e){a.close();var c,s=document.querySelector("#ag-item-"+e);if(s)null===s||void 0===s||null===(c=s.parentNode)||void 0===c||c.removeChild(s);var i=Object(O.a)(t);return i.splice(n,1),i}}return t}))}),[]);Object(i.useLayoutEffect)((function(){var e={mode:"interop"};x.current=C.a.createClient(e),x.current.init(g,(function(){console.log("AgoraRTC client initialized"),te(),x.current.join(v,o,d,(function(e){var t;k.current=e,console.log("User "+e+" join channel successfully"),console.log("At "+(new Date).toLocaleTimeString()),A.current=new T(g,b,o,f,Z),S.current=ee(e,"480p_4"),null===(t=S.current)||void 0===t||t.init((function(){n&&(console.log(S.current),$(S.current,!0),x.current.publish(S.current,(function(e){console.log("Publish local stream error: "+e)}))),B(!0)}),(function(e){console.log("getUserMedia failed",e),B(!0)}))}))}))}),[]),Object(i.useEffect)((function(){return function(){var e,t,n,a,c;(null===(e=x.current)||void 0===e||e.unpublish(S.current),null===(t=S.current)||void 0===t||t.close(),z)&&(null===(a=w.current)||void 0===a||a.unpublish(N.current),null===(c=N.current)||void 0===c||c.close());null===(n=x.current)||void 0===n||n.leave((function(){console.log("Client succeed to leave.")}),(function(){console.log("Client failed to leave.")}))}}),[]);!function(){var e=document.querySelector("#ag-canvas");if("pip"===V){E.length;var t=0;E.map((function(n,a){var c,s,i=n.getId(),r=document.querySelector("#ag-item-"+i),o=document.querySelector("#ag-item-btn-reverse-"+i);if(!r){(r=document.createElement("section")).setAttribute("id","ag-item-"+i),(o=document.createElement("button")).setAttribute("id","ag-item-btn-reverse-"+i),o.setAttribute("class","AgoraVideoCall-btn-reverse"),o.onclick=function(){return Y((function(e){return 1-e}))},r.appendChild(o);var l=document.createElement("i");l.setAttribute("class","hb-icon-refresh-ccw"),o.appendChild(l),null===e||void 0===e||e.appendChild(r),n.play("ag-item-"+i)}a===X?(r.setAttribute("style","position:relative; grid-area: 1/1/5/5"),r.setAttribute("class","ag-item"),o.setAttribute("style","visibility: hidden")):(r.setAttribute("class","ag-item small"),r.setAttribute("style","position:relative; grid-area: span 1/span 1/".concat(5-t,"/5; z-index: 1; padding: 0 19px 17px 0")),o.setAttribute("style","visibility: visible"),t+=1),null===(c=n.player)||void 0===c||null===(s=c.resize)||void 0===s||s.call(c)}))}else if("tile"===V){var n=E.length;E.map((function(t,a){var c=t.getId(),s=document.querySelector("#ag-item-"+c);s||((s=document.createElement("section")).setAttribute("id","ag-item-"+c),s.setAttribute("class","ag-item"),null===e||void 0===e||e.appendChild(s),t.play("ag-item-"+c)),s.setAttribute("style","grid-area: ".concat(y[n][a])),t.player.resize&&t.player.resize()}))}}();return Object(c.jsx)("div",{className:"hb-wrapper",children:Object(c.jsx)("div",{className:"wrapper meeting",children:Object(c.jsxs)("div",{className:"row AgoraVideoCall",children:[Object(c.jsx)("div",{className:"col-md-8",children:Object(c.jsxs)("div",{className:"ag-main",children:[Object(c.jsxs)("div",{className:"AgoraVideoCall-info",children:[Object(c.jsxs)("div",{className:"AgoraVideoCall-info-nurse",children:[Object(c.jsx)("img",{alt:"avatar",src:"https://petmaster.vn/petroom/wp-content/uploads/2020/03/cho-corgi-4.jpg",className:"AgoraVideoCall-info-nurse__avatar"}),Object(c.jsxs)("div",{className:"AgoraVideoCall-info-nurse__name",children:[Object(c.jsx)("h3",{children:"Pflegeberatung"}),Object(c.jsx)("span",{children:"Maxima Mustermann"})]})]}),Object(c.jsx)(m,{defaultTime:0})]}),Object(c.jsx)("div",{className:"ag-container",children:Object(c.jsx)("div",{id:"ag-canvas",style:{display:"grid",gridGap:"10px",alignItems:"center",justifyItems:"center",gridTemplateRows:"repeat(4, auto)",gridTemplateColumns:"repeat(4, auto)"}})}),Object(c.jsxs)("div",{className:"AgoraVideoCall-btn-group",children:[Object(c.jsxs)("div",{className:"AgoraVideoCall-btn-group__left",children:[Object(c.jsx)(l,{icon:"meeting-camera-2",title:"Turn on/off Camera",onClick:function(e){var t,n,a;(null===(t=S.current)||void 0===t?void 0:t.isVideoOn())?null===(n=S.current)||void 0===n||n.disableVideo():null===(a=S.current)||void 0===a||a.enableVideo()},isOff:!n}),Object(c.jsx)(l,{icon:"meeting-mic-2",title:"Turn on/off Mic",onClick:function(e){var t,n;(null===(t=S.current)||void 0===t?void 0:t.isAudioOn())?S.current.disableAudio():null===(n=S.current)||void 0===n||n.enableAudio()},isOff:!t}),Object(c.jsx)(p,{onChangeVolume:function(e){E.map((function(t){return t.setAudioVolume(e)}))}}),Object(c.jsx)(l,{icon:"arrows-expand",title:"Fullscreen"})]}),Object(c.jsx)(h,{disabled:!D,onClick:function(e){if(!e.currentTarget.classList.contains("disabled"))try{var t,n,a;null===(t=x.current)||void 0===t||t.unpublish(S),null===(n=S.current)||void 0===n||n.close(),null===(a=x.current)||void 0===a||a.leave((function(){console.log("Client succeed to leave.")}),(function(){console.log("Client failed to leave.")}))}finally{B(!1),x.current=null,S.current=null,r()}}})]})]})}),Object(c.jsx)("div",{className:"col-md-4",children:Object(c.jsxs)("div",{className:"AgoraVideoCall-messages",children:[Object(c.jsx)("h3",{className:"AgoraVideoCall-messages__header",children:"Chat"}),Object(c.jsxs)("div",{className:"AgoraVideoCall-messages__body",children:[Object(c.jsx)("div",{className:"AgoraVideoCall-messages__body-wrapper",children:Object(c.jsx)("div",{className:"hb-scroll AgoraVideoCall-messages__body-wrapper-scroll",children:H.map((function(e,t){return Object(c.jsx)(j,Object(a.a)({isMe:e.uid===b},e),t)}))})}),Object(c.jsx)(u,{onSubmit:function(e){var t;return null===(t=A.current)||void 0===t?void 0:t.sendChannelMessage(e)}})]})]})})]})})})},I=(n(655),n(186)),L=n(29),E=0,P=1,R=2;t.default=function(e){var t,n=(null===(t=e.match)||void 0===t?void 0:t.params).id,o=Object(I.b)().callApi,l=Object(r.h)(),u=Object(i.useState)({audio:!1,video:!0}),d=Object(s.a)(u,2),b=d[0],j=d[1],h=Object(i.useState)({uid:"",token:"",rtmUid:"",rtmToken:""}),p=Object(s.a)(h,2),m=p[0],f=p[1],O=Object(i.useState)(E),x=Object(s.a)(O,2),C=x[0],y=x[1];Object(i.useEffect)((function(){o({method:"get",api:L.d.rest.startMeeting(n)},(function(e){var t=e.status,n=e.data;t!==I.a?l.push("/sign-in"):(y(P),f({uid:null===n||void 0===n?void 0:n.uid,token:null===n||void 0===n?void 0:n.token,rtmUid:null===n||void 0===n?void 0:n.rtm_user,rtmToken:null===n||void 0===n?void 0:n.rtm_token}))}))}),[]);var S;switch(C){case E:S=Object(c.jsx)(g,{});break;case P:S=Object(c.jsx)(v,Object(a.a)(Object(a.a)({},b),{},{joinMeeting:function(e,t){j({audio:e,video:t}),y(R)}}));break;case R:S=Object(c.jsx)(V,Object(a.a)(Object(a.a)(Object(a.a)({},b),m),{},{meetingId:n,leaveMeeting:function(){y(P)}}))}return Object(c.jsx)("div",{className:"petrol",children:Object(c.jsx)("div",{className:"hb-background",style:{minHeight:"100vh"},children:S})})}},855:function(e,t,n){},856:function(e,t,n){},857:function(e,t,n){},858:function(e,t,n){},859:function(e,t,n){},860:function(e,t,n){},861:function(e,t,n){},862:function(e,t,n){},865:function(e,t,n){}}]);
//# sourceMappingURL=12.dbfffae7.chunk.js.map