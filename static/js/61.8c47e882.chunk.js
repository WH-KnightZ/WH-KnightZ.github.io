(this["webpackJsonphb-frontend"]=this["webpackJsonphb-frontend"]||[]).push([[61],{1051:function(e,t,a){"use strict";a.r(t);var i=a(7),s=a(47),n=a(3),c=a(16),l=a(1),r=a(19),o=a(602),d=a(603),u=a(32),j=a(29),b=a(38),h=a(96),O=a(611),m=function(e){return d.b().shape({diseases_title:d.d().trim().required("required")})},p=function(e){var t=e.searchDiseases,a=e.show,d=e.initialValues,p=e.callApi,g=e.type,x=Object(l.useRef)(null),f=Object(l.useState)(""),y=Object(c.a)(f,2),v=y[0],_=y[1],w=Object(l.useState)({data:[],loading:!0,full:!1,page:1}),C=Object(c.a)(w,2),N=C[0],S=C[1],k=Object(l.useState)(null),B=Object(c.a)(k,2),D=B[0],V=B[1],T=Object(l.useState)(!1),A=Object(c.a)(T,2),q=A[0],E=A[1],P=function(){x.current.resetForm(),e.handleClose(),E(!1)},z=function(e,t){p({method:"get",api:j.d.rest.adminGetConsultingCategories(t,e,80)},(function(a){var i=a.status,n=a.data;i===b.c&&S((function(a){var i=n.categories.map((function(e){return{id:e.id,name:e.title_treatments}}));return{data:1===t?""===e?[null].concat(Object(s.a)(i)):i:[].concat(Object(s.a)(a.data),Object(s.a)(i)),loading:!1,full:n.categories.length<10,page:t}}))}))};return Object(l.useEffect)((function(){var e,t;a&&(z("",1),_(d.group_treatments_name),V(d.group_treatments_id?{id:d.group_treatments_id,name:d.group_treatments_name}:null),null===x||void 0===x||null===(e=x.current)||void 0===e||e.resetForm(),null===x||void 0===x||null===(t=x.current)||void 0===t||t.validateForm())}),[a]),Object(n.jsxs)(h.c,{centered:!0,show:a,onClose:P,closeOnBackdrop:!1,children:[Object(n.jsxs)(h.d,{children:["create"===g?"Create New":"Edit"," Consultation Topic",Object(n.jsx)(h.b,{onClick:function(){x.current.dirty||((null===D||void 0===D?void 0:D.id)||"")!==d.group_treatments_id?E(!0):P()}})]}),Object(n.jsxs)(r.D,{className:"popup--update-user",children:[Object(n.jsxs)(h.c,{size:"sm",show:q,centered:!0,closeOnBackdrop:!1,children:[Object(n.jsx)(r.D,{style:{textAlign:"center",padding:20},children:"Are you sure you want to discard your changes?"}),Object(n.jsxs)(r.E,{style:{display:"flex",justifyContent:"space-around"},children:[Object(n.jsx)("button",{className:"btn btn-danger",style:{width:120},color:"danger",onClick:P,children:"Discard"}),Object(n.jsx)("button",{style:{width:120},className:"btn btn-primary",onClick:function(){return E(!1)},children:"Keep Editing"})]})]}),Object(n.jsx)(r.I,{className:"justify-content-center",children:Object(n.jsx)(r.j,{md:"12",children:Object(n.jsx)(r.h,{children:Object(n.jsx)(r.e,{className:"popup--update-user__card--wrapper",children:Object(n.jsx)(r.f,{children:Object(n.jsx)(o.c,{innerRef:x,enableReinitialize:!0,initialValues:d,validate:Object(u.A)(m),onSubmit:function(e){var a={diseases_title:e.diseases_title.trim(),group_treatments_id:D.id,status:Number(e.status),description:e.description.trim(),priority:e.priority&&(1===e.priority||1===e.priority.length)?1:0};p({method:"create"===g?"post":"put",api:j.d.rest.adminConsultingDisease(d.id),body:a,loading:!0},(function(e){e.status===b.c&&(P(),t())}))},children:function(e){var t=e.values,a=e.errors,s=e.touched,c=e.dirty,l=e.handleChange,o=e.handleBlur,u=e.handleSubmit,j=e.isValid;return Object(n.jsxs)(r.q,{onSubmit:u,children:[Object(n.jsx)(O.a,{label:"Consultation Topic (*)",width:164,children:Object(n.jsxs)(r.r,{className:"m-0",children:[Object(n.jsx)(r.u,{type:"text",placeholder:"Consultation Topic (*)",invalid:""!==t.diseases_title.trim()&&s.diseases_title&&!!a.diseases_title,maxLength:50,value:t.diseases_title,onBlur:o,onChange:l,name:"diseases_title"}),Object(n.jsx)(r.A,{children:a.diseases_title})]})}),Object(n.jsx)(O.a,{label:"Category (*)",width:164,children:Object(n.jsx)("div",{style:{width:"100%"},children:Object(n.jsx)(h.x,Object(i.a)(Object(i.a)({selected:D,setSelected:V,defaultValue:"Select category",value:v,setValue:_,callbackSearch:z},N),{},{maxLength:50}))})}),Object(n.jsx)(O.a,{label:"Status (*)",width:164,children:Object(n.jsx)(r.r,{className:"m-0",children:Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)(r.u,{type:"radio",checked:1===Number(t.status),value:1,onBlur:o,onChange:l,name:"status"}),"Show",Object(n.jsx)(r.u,{style:{marginLeft:18},type:"radio",checked:0===Number(t.status),value:0,onBlur:o,onChange:l,name:"status"}),"Hide"]})})}),Object(n.jsx)(O.a,{label:"Priority (*)",width:164,children:Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)(r.u,{type:"radio",checked:0===Number(t.priority),value:0,onBlur:o,onChange:l,name:"priority"}),"0",Object(n.jsx)(r.u,{className:"ml-5",type:"radio",checked:1===Number(t.priority),value:1,onBlur:o,onChange:l,name:"priority"}),"1"]})}),Object(n.jsx)(O.a,{label:"Description",width:164,children:Object(n.jsx)(r.O,{type:"text",placeholder:"Description",maxLength:1e3,value:t.description||"",onBlur:o,onChange:l,name:"description",rows:5})}),Object(n.jsx)(r.r,{className:"mb-0",children:Object(n.jsx)(r.I,{children:Object(n.jsxs)(r.j,{xs:"12",style:{textAlign:"right"},children:[Object(n.jsx)(r.d,{color:"secondary",className:"px-4 mr-4",onClick:P,children:"Cancel"}),Object(n.jsx)(r.d,{color:"primary",className:"px-4",type:"submit",disabled:!D||!j||!c&&((null===D||void 0===D?void 0:D.id)||"")===d.group_treatments_id,children:"create"===g?"Create":"Save"})]})})})]})}})})})})})})]})]})},g=a(190),x=a(31),f=a(186),y={thumbnail:"",diseases_title:"",group_treatments_id:"",group_treatments_name:"",status:1,description:"",priority:0};t.default=function(e){var t=Object(f.b)().callApi,a=Object(l.useState)({data:[],total:0,page:1,totalPages:0,loading:!0}),o=Object(c.a)(a,2),d=o[0],u=o[1],O=Object(l.useState)({show:!1,initialValues:y,type:"create"}),m=Object(c.a)(O,2),v=m[0],_=m[1],w=Object(l.useState)(null),C=Object(c.a)(w,2),N=C[0],S=C[1],k=Object(l.useState)(""),B=Object(c.a)(k,2),D=(B[0],B[1],Object(l.useState)({data:[],loading:!0,full:!1,page:1})),V=Object(c.a)(D,2),T=(V[0],V[1]),A=Object(l.useState)(null),q=Object(c.a)(A,2),E=q[0],P=(q[1],Object(l.useState)({show:!1,id:"",name:""})),z=Object(c.a)(P,2),F=z[0],I=z[1],L=Object(l.useState)(""),R=Object(c.a)(L,2),G=R[0],H=R[1],J=[{key:"no",_style:{width:"4%"}},{key:"diseases_title",label:"Consultation Topic",_style:{width:"15%"}},{key:"group_treatments_name",label:"Category",_style:{width:"15%"}},{key:"description",_style:{width:"15%"}},{key:"priority",_style:{width:"8%"}},{key:"created_date",_style:{width:"10%"},isDate:!0},{key:"question_number",label:"Number Of Questions",_style:{width:"12%"}},{key:"status",_style:{width:"12%"},renderContent:function(e){return e.status?"Show":"Hide"}},{key:"action",_style:{width:"10%"},renderContent:function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(r.d,{color:"primary",variant:"outline",shape:"square",size:"sm",style:{marginRight:10},onClick:function(){return I({show:!0,id:e.id,name:e.diseases_title})},children:Object(n.jsx)("i",{className:"fas fa-trash-alt",children:" "})}),Object(n.jsx)(r.d,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){return _({show:!0,type:"update",initialValues:e})},children:Object(n.jsx)("i",{className:"fas fa-pencil-alt",children:" "})})]})}}];Object(l.useEffect)((function(){Q(1,G)}),[N,E]),Object(l.useEffect)((function(){K("",1)}),[]);var M=Object(n.jsx)("div",{});d.loading||d.total||(M=Object(n.jsx)("div",{children:"No items found!"}));var K=function(e,a){t({method:"get",api:j.d.rest.adminGetConsultingCategories(a,e)},(function(t){var i=t.status,n=t.data;i===b.c&&T((function(t){var i=n.categories.map((function(e){return{id:e.id,name:e.title_treatments}}));return{data:1===a?""===e?[null].concat(Object(s.a)(i)):i:[].concat(Object(s.a)(t.data),Object(s.a)(i)),loading:!1,full:n.categories.length<10,page:a}}))}))},Q=function(e,a){u(Object(i.a)(Object(i.a)({},d),{},{loading:!0})),t({method:"get",api:j.d.rest.adminGetConsultingDiseases(e,a,E?E.id:"",N?N.id:"")},(function(t){var a=t.status,s=t.data;a===b.c?u({data:s.diseases.map((function(t,a){return Object(i.a)(Object(i.a)({},t),{},{no:a+1+10*(e-1)})})),page:e,total:s.total,totalPages:Math.ceil(s.total/10),loading:!1}):u((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!1})}))}))};return Object(n.jsxs)("div",{className:"px-5 mx-3",style:{marginTop:10},children:[Object(n.jsx)(p,Object(i.a)(Object(i.a)({callApi:t},v),{},{handleClose:function(){return _(Object(i.a)(Object(i.a)({},v),{},{show:!1}))},searchDiseases:function(){return Q(d.page,G)}})),Object(n.jsx)(h.e,{isVisible:F.show,title:"Delete Consultation Topic",renderContent:Object(x.a)("Are you sure to delete the topic",F.name,"If yes, all questions in this consultation topic are also deleted immediately."),leftButtonText:"Cancel",rightButtonText:"Delete",leftButtonOnPress:function(){return I(Object(i.a)(Object(i.a)({},F),{},{show:!1}))},rightButtonOnPress:function(){return e=F.id,I(Object(i.a)(Object(i.a)({},F),{},{show:!1})),u(Object(i.a)(Object(i.a)({},d),{},{loading:!0})),void t({method:"delete",api:j.d.rest.adminConsultingDisease(e)},(function(e){e.status===b.c?Q(d.page,G):u((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!1})}))}));var e}}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Consultation Topics Management"}),Object(n.jsxs)("div",{className:"d-flex align-items-center justify-content-between mt-4",style:{marginBottom:"2.4rem"},children:[Object(n.jsxs)("div",{className:"d-flex",children:[Object(n.jsx)("div",{style:{width:250},children:Object(n.jsx)(g.a,{className:"mr-3",searchName:G,setSearchName:H,searchEmpty:!0,callbackSearch:function(e){return Q(1,e)}})}),Object(n.jsx)("div",{style:{width:250},children:Object(n.jsx)(h.x,{className:"mr-3",selected:N,setSelected:S,defaultValue:"Select status",data:j.f,loading:!1,full:!0,value:N?N.name:""})})]}),Object(n.jsx)(r.d,{color:"primary",onClick:function(){return _({type:"create",show:!0,initialValues:y})},children:"Create new topic"})]})]}),Object(n.jsx)("div",{className:"hb-table",children:Object(n.jsx)(r.l,{items:d.data,fields:J,loading:d.loading,noItemsViewSlot:M,hover:!0,striped:!0,scopedSlots:Object(x.k)(J)})}),Object(x.j)(d.totalPages,d.page,(function(e){d.page!==e&&Q(e,G)}),d.total)]})}},611:function(e,t,a){"use strict";var i=a(3);a(1);t.a=function(e){var t=e.className,a=e.label,s=e.children,n=e.width,c=e.centered,l=e.style;return n=n||110,Object(i.jsxs)("div",{className:"d-flex mb-3 ".concat(c?"align-items-center":""," ").concat(t||""),style:l,children:[Object(i.jsx)("div",{style:{minWidth:n,marginTop:6},children:a}),Object(i.jsx)("div",{style:{width:"calc(100% - ".concat(n,"px)")},children:s})]})}}}]);
//# sourceMappingURL=61.8c47e882.chunk.js.map