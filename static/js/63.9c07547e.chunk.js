(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[63],{1048:function(e,t,a){"use strict";a.r(t);var c=a(3),i=a(7),n=a(16),s=a(1),l=a(57),r=a(19),d=a(96),o=a(190),j=a(38),u=a(29),m=a(47),b=a(602),h=a(603),O=a(21),x=a(32),g=a(89),f=a(611),p=a(186),y=function(e){return h.b().shape({title:h.d().trim().required(""),summary:h.d().trim().required(""),source:h.d().trim().required("").matches(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,"URL is invalid")})},v={title:"",summary:"",source:"",image:"",type:"text"},w=function(e){var t=Object(O.c)(),a=Object(p.b)().callApi,l=Object(s.useState)({url:"",name:""}),o=Object(n.a)(l,2),h=o[0],w=o[1],N=e.id,k=e.name,C=e.setArticles,S=e.handleClose,A=e.show,_=e.page,z=e.pageSize,D=Object(s.useRef)(null),T=Object(s.useRef)(null),B=function(e){var c=e.target.files[0];c&&(t(Object(g.c)()),a({api:"/api/v1/upload/image-article?file_name=".concat(c.name),method:"get"},(function(e){var a=e.status,i=e.data;if(a===j.c){var n=i.file_path.link,s=new Headers;s.append("x-amz-acl","public-read");var l={method:"PUT",headers:s,body:c,redirect:"follow"};fetch(i.link,l).then((function(e){return e.text()})).then((function(e){w({url:n,name:c.name}),t(Object(g.d)())})).catch((function(e){console.log(e),t(Object(g.d)())}))}else t(Object(g.d)())})))},R=Object(s.useState)(!1),P=Object(n.a)(R,2),L=P[0],q=P[1],U=function(){D.current.resetForm(),w({url:"",name:""}),q(!1),S()};return Object(c.jsx)("div",{className:"flex-row align-items-center",children:Object(c.jsxs)(d.c,{size:"lg",centered:!0,show:A,onClose:S,closeOnBackdrop:!1,children:[Object(c.jsxs)(d.d,{children:["Create new article",Object(c.jsx)(d.b,{onClick:function(){D.current.dirty||h.name?q(!0):U()}})]}),Object(c.jsxs)(r.D,{children:[Object(c.jsxs)(d.c,{size:"sm",show:L,centered:!0,closeOnBackdrop:!1,children:[Object(c.jsx)(r.D,{style:{textAlign:"center",padding:20},children:"Are you sure you want to discard your changes?"}),Object(c.jsxs)(r.E,{style:{display:"flex",justifyContent:"space-around"},children:[Object(c.jsx)(r.d,{style:{width:120},color:"danger",onClick:U,children:"Discard"}),Object(c.jsx)(r.d,{style:{width:120},color:"primary",onClick:function(){return q(!1)},children:"Keep editing"})]})]}),Object(c.jsx)(b.c,{innerRef:D,enableReinitialize:!0,initialValues:v,validate:Object(x.A)(y),onSubmit:function(e){var t={title:e.title.trim(),summary:e.summary.trim(),source:e.source.trim(),image:h.url,type:e.type};a({method:"post",api:u.d.rest.adminCreateNewsfeedArticle(N),body:t,loading:!0},(function(e){e.status===j.c&&(C((function(e){var a=[Object(i.a)(Object(i.a)({},t),{},{created_date:(new Date).getTime()/1e3})].concat(Object(m.a)(e.data)).slice(0,z).map((function(e,t){return Object(i.a)(Object(i.a)({},e),{},{no:t+1+z*(_-1)})}));return Object(i.a)(Object(i.a)({},e),{},{data:a,total:e.total+1,totalPages:Math.ceil((e.total+1)/z),loading:!1})})),U())}))},children:function(e){var t=e.values,a=e.errors,i=e.touched,n=e.dirty,s=e.handleChange,l=e.handleSubmit,d=e.isValid,o=e.handleBlur;return Object(c.jsxs)(r.q,{onSubmit:l,children:[Object(c.jsx)(f.a,{label:"Title (*)",children:Object(c.jsx)(r.u,{type:"text",placeholder:"Title (*)",maxLength:100,invalid:""!==t.title.trim()&&i.title&&!!a.title,value:t.title,onChange:s,name:"title"})}),Object(c.jsx)(f.a,{label:"Summary (*)",children:Object(c.jsx)(r.O,{type:"text",placeholder:"Summary (*)",rows:5,maxLength:1e3,invalid:""!==t.summary.trim()&&i.summary&&!!a.summary,value:t.summary,onChange:s,name:"summary"})}),Object(c.jsx)(f.a,{label:"Category",children:Object(c.jsx)(r.u,{value:k,disabled:!0})}),Object(c.jsx)(f.a,{label:"URL (*)",children:Object(c.jsxs)(r.r,{className:"m-0",children:[Object(c.jsx)(r.u,{placeholder:"URL (*)",invalid:""!==t.source.trim()&&i.source&&!!a.source,value:t.source,onChange:s,onBlur:o,name:"source"}),Object(c.jsx)(r.A,{className:"ml-2",children:a.source})]})}),Object(c.jsxs)(f.a,{label:"Image (*)",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)(r.d,{color:"primary",className:"mr-3",onClick:function(){return T.current.click()},disabled:!!h.name,style:{minWidth:120},children:"Upload image"}),Object(c.jsx)("div",{className:"ellipsis-1-line",children:h.name}),h.name&&Object(c.jsx)("i",{className:"fa fa-times-circle ml-2 cursor-pointer",style:{color:"gray",minWidth:30},onClick:function(){return w({url:"",name:""})}})]}),Object(c.jsx)("input",{type:"file",hidden:!0,ref:T,accept:"image/x-png,image/gif,image/jpeg",onChange:B})]}),Object(c.jsx)("div",{style:{textAlign:"right"},children:Object(c.jsx)(r.d,{color:"primary",className:"px-4",type:"submit",disabled:!(d&&n&&h.url),children:"Save"})})]})}})]})]})})},N=a(31),k={show:!1,id:"",name:""};t.default=function(e){var t,a=Object(p.b)().callApi,m=null===(t=e.match)||void 0===t?void 0:t.params,b=null===m||void 0===m?void 0:m.id,h=Object(s.useState)(""),O=Object(n.a)(h,2),x=O[0],g=O[1],f=Object(s.useState)(null),y=Object(n.a)(f,2),v=y[0],C=y[1],S=Object(s.useState)(null),A=Object(n.a)(S,2),_=A[0],z=A[1],D=Object(s.useState)({data:[],total:0,totalPages:0,page:1,loading:!0,name:""}),T=Object(n.a)(D,2),B=T[0],R=T[1],P=Object(s.useState)({show:!1,id:""}),L=Object(n.a)(P,2),q=L[0],U=L[1],V=Object(s.useState)(k),E=Object(n.a)(V,2),W=E[0],F=E[1],I=[{key:"no",_style:{width:"4%"}},{key:"title",_style:{width:"24%"}},{key:"summary",_style:{width:"30%"}},{key:"source",label:"Link",_style:{width:"24%"},renderContent:function(e){return Object(c.jsx)("a",{target:"_blank",href:e.source,children:e.source})}},{key:"created_date",_style:{width:"10%"},isDate:!0},{key:"action",_style:{width:"10%"},renderContent:function(e){return Object(c.jsx)(r.d,{color:"primary",variant:"outline",shape:"square",size:"sm",style:{marginRight:10},onClick:function(){return U({show:!0,id:e.id})},children:Object(c.jsx)("i",{className:"fas fa-trash-alt",children:" "})})}}],J=function(e,t){R(Object(i.a)(Object(i.a)({},B),{},{loading:!0})),a({method:"get",api:u.d.rest.adminGetNewsfeedArticles(b,e,t,v?v.getTime()/1e3:null,_?_.getTime()/1e3+86399:null)},(function(t){var a=t.status,c=t.data;a===j.c?R({data:c.articles.map((function(t,a){return Object(i.a)(Object(i.a)({},t),{},{no:a+1+10*(e-1)})})),total:c.total,totalPages:Math.ceil(c.total/10),page:e,loading:!1,name:c.category_name}):R((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!1})}))}))};Object(s.useEffect)((function(){J(1,x)}),[v,_]);var M=Object(c.jsx)("div",{});return B.loading||B.total||(M=Object(c.jsx)("div",{children:"No items found"})),Object(c.jsxs)("div",{className:"px-5 mx-3",style:{marginTop:10},children:[Object(c.jsx)(w,Object(i.a)(Object(i.a)({},W),{},{handleClose:function(){return F(k)},setArticles:R,page:B.page,pageSize:10})),Object(c.jsx)(d.e,{isVisible:q.show,title:"Delete Article",renderContent:Object(N.a)("Are you sure to delete this article"),leftButtonText:"No",rightButtonText:"Yes",leftButtonOnPress:function(){return U(Object(i.a)(Object(i.a)({},q),{},{show:!1}))},rightButtonOnPress:function(){return e=q.id,U(Object(i.a)(Object(i.a)({},q),{},{show:!1})),R(Object(i.a)(Object(i.a)({},B),{},{loading:!0})),void a({method:"delete",api:u.d.rest.adminDeleteNewsfeedArticle(b,e)},(function(e){e.status===j.c&&J(B.page,x)}));var e}}),Object(c.jsx)(l.a,{className:"py-2 size-1",to:"/admin/newsfeed",children:"All Categories"}),Object(c.jsxs)("span",{className:"size-0 pl-2",children:["> ",B.name]}),Object(c.jsxs)("div",{className:"mt-3",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center justify-content-between mt-4 mb-5",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[Object(c.jsx)(o.a,{className:"mr-5",searchName:x,setSearchName:g,searchEmpty:!0,callbackSearch:function(e){return J(1,e)}}),Object(c.jsx)("div",{children:"From date:"}),Object(c.jsx)("div",{children:Object(c.jsx)(d.g,{maxDate:_,date:v,setDate:C})}),Object(c.jsx)("div",{children:"To date:"}),Object(c.jsx)("div",{children:Object(c.jsx)(d.g,{minDate:v,date:_,setDate:z})})]}),Object(c.jsx)("div",{className:"d-flex align-items-center",children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){return F({show:!0,id:b,name:B.name})},disabled:B.loading&&0===B.data.length,children:"Create new article"})})]}),Object(c.jsx)("div",{className:"hb-table",children:Object(c.jsx)(r.l,{items:B.data,fields:I,loading:B.loading,noItemsViewSlot:M,hover:!0,striped:!0,scopedSlots:Object(N.k)(I)})}),Object(N.j)(B.totalPages,B.page,(function(e){B.page!==e&&J(e,x)}),B.total)]})]})}},611:function(e,t,a){"use strict";var c=a(3);a(1);t.a=function(e){var t=e.className,a=e.label,i=e.children,n=e.width,s=e.centered,l=e.style;return n=n||110,Object(c.jsxs)("div",{className:"d-flex mb-3 ".concat(s?"align-items-center":""," ").concat(t||""),style:l,children:[Object(c.jsx)("div",{style:{minWidth:n,marginTop:6},children:a}),Object(c.jsx)("div",{style:{width:"calc(100% - ".concat(n,"px)")},children:i})]})}}}]);
//# sourceMappingURL=63.9c07547e.chunk.js.map