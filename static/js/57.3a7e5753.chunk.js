(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[57],{1004:function(e,a,t){"use strict";t.r(a);var s=t(3),c=t(16),n=t(1),r=t(96),i=t(78),d=t.n(i),m=(t(908),t(21)),l=t(38),u=t(29),b=t(31),o=t(39),j=t(115),f=[0,5,4,3,2,1];a.default=function(e){var a,t=Object(m.c)(),i=Object(o.h)(),h=Object(m.d)((function(e){return e.auth})),_=Object(n.useState)({data:[],loading:!0,full:!0,page:1,rating:0}),g=Object(c.a)(_,2),v=g[0],x=g[1],O=Object(n.useState)(0),k=Object(c.a)(O,2),N=k[0],p=k[1];Object(n.useEffect)((function(){var e,a;e={method:"get",api:u.d.rest.getDetailFeedbacks(h.user_id,1)},a=function(e){var a=e.status,t=e.data;a===l.c&&x((function(e){var a=(t=[{rating:0,number_feedback:3,user_comments:[{user_id:"0",avatar:"",first_name:"Nguyen",last_name:"Khanh",feedback:4,customer_comments:"sadsad",modified_date:1621236992},{user_id:"1",avatar:"",first_name:"Nguyen",last_name:"Khanh",feedback:5,customer_comments:"sadsad",modified_date:1621236992},{user_id:"2",avatar:"",first_name:"Nguyen",last_name:"Khanh",feedback:5,customer_comments:"sadsad",modified_date:1621236992}]},{rating:1,number_feedback:0,user_comments:[]},{rating:2,number_feedback:0,user_comments:[]},{rating:3,number_feedback:0,user_comments:[]},{rating:4,number_feedback:1,user_comments:[{user_id:"",avatar:"",first_name:"Nguyen",last_name:"Khanh",feedback:4,customer_comments:"sadsad",modified_date:1621236992}]},{rating:5,number_feedback:2,user_comments:[{user_id:"1",avatar:"",first_name:"Nguyen",last_name:"Khanh",feedback:5,customer_comments:"sadsad",modified_date:1621236992},{user_id:"2",avatar:"",first_name:"Nguyen",last_name:"Khanh",feedback:5,customer_comments:"sadsad",modified_date:1621236992}]}]).slice(1).reduce((function(e,a){return{s:e.s+a.rating*a.number_feedback,c:e.c+a.number_feedback}}),{s:0,c:0});console.log(a);var s=a.s/(a.c||1);return{data:t,loading:!1,full:!0,page:1,rating:s}}))},t(Object(l.d)(e,a))}),[]);return Object(s.jsx)("div",{className:"hb-wrapper",children:Object(s.jsxs)("div",{className:"hb-mx-20",style:{paddingBottom:50},children:[Object(s.jsx)("div",{className:"hb-my-28",children:Object(s.jsxs)(j.e,{color:"nightblue",onClick:function(){return i.goBack()},children:[Object(s.jsx)("i",{className:"hb-icon-arrow-left hb-icon-md"})," Zur\xfcck"]})}),Object(s.jsx)("div",{className:"hb-title",children:"R\xfcckmeldungen"}),v.loading?Object(s.jsx)("div",{className:"mt-5",children:b.g}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"pb-5 nurse-wrapper",children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsxs)("span",{className:"rating-wrapper",children:[Object(s.jsx)("span",{className:"rating",children:null===(a=Number(v.rating))||void 0===a?void 0:a.toFixed(1)}),Object(s.jsx)("span",{className:"max-rating",children:"/5.0"})]}),Object(s.jsx)(r.y,{size:"lg",rating:v.rating})]})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"row px-5 py-3",children:f.map((function(e){return function(e){var a;return a=0===e?Object(s.jsx)("span",{children:"All"}):Array.from({length:e}).map((function(e,a){return Object(s.jsx)("i",{className:"fa fa-star"},a)})),Object(s.jsx)("div",{onClick:function(){return p(e)},className:"col-md-2",children:Object(s.jsxs)("div",{className:"rating-select ".concat(e===N?"active":""),style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(s.jsx)("div",{children:a}),Object(s.jsxs)("div",{children:["(",v.data[e].number_feedback,")"]})]})},e)}(e)}))}),Object(s.jsx)("div",{children:v.data[N].user_comments.map((function(e){return function(e){var a=e.user_id,t=e.avatar,c=e.first_name,n=e.last_name,i=e.feedback,m=e.customer_comments,l=e.modified_date;return Object(s.jsxs)("div",{className:"feedback-wrapper",children:[Object(s.jsx)("div",{className:"mx-3",children:Object(s.jsx)(r.q,{alt:"user-avatar",src:t||b.c,className:"user-avatar"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"feedback-username",children:c+" "+n}),Object(s.jsx)(r.z,{size:"sm",rating:i}),Object(s.jsx)("div",{className:"feedback-content",children:m}),Object(s.jsx)("div",{className:"feedback-created-date",children:d()(1e3*l).format("DD.MM.YYYY hh:mm")})]})]},a)}(e)}))}),0===v.data[N].user_comments.length&&Object(s.jsx)("div",{className:"mt-5",style:{textAlign:"center",fontSize:20},children:"There is no feedback yet"})]})]})]})})}},908:function(e,a,t){}}]);
//# sourceMappingURL=57.3a7e5753.chunk.js.map