_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"8M/A":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/students_affairs/admin/courses/course-details",function(){return r("bdbj")}])},A2So:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r("nKUr"),a=r("rePB"),i=r("Ff2n"),o=(r("q1tI"),r("TSYQ")),c=r.n(o),l=r("R/WZ"),d=r("jfJP"),s={card:{border:"0",marginBottom:"30px",marginTop:"30px",borderRadius:"6px",color:"rgba("+Object(d.m)(d.a)+", 0.87)",background:d.E,width:"100%",boxShadow:"0 1px 4px 0 rgba("+Object(d.m)(d.a)+", 0.14)",position:"relative",display:"flex",flexDirection:"column",minWidth:"0",wordWrap:"break-word",fontSize:".875rem"},cardPlain:{background:"transparent",boxShadow:"none"},cardProfile:{marginTop:"30px",textAlign:"center"},cardChart:{"& p":{marginTop:"0px",paddingTop:"0px"}}};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){var t,r=Object(l.a)(s)(),o=e.className,d=e.children,u=e.plain,m=e.profile,v=e.chart,b=Object(i.a)(e,["className","children","plain","profile","chart"]),p=c()((t={},Object(a.a)(t,r.card,!0),Object(a.a)(t,r.cardPlain,u),Object(a.a)(t,r.cardProfile,m),Object(a.a)(t,r.cardChart,v),Object(a.a)(t,o,void 0!==o),t));return Object(n.jsx)("div",h(h({className:p},b),{},{children:d}))}},CqGl:function(e,t,r){"use strict";var n=r("q1tI"),a=r("5AJ6");t.a=Object(a.a)(n.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}),"CloudDownload")},DPAz:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("o0o1"),a=r.n(n),i=r("HaE+"),o=r("1OyB"),c=r("vuIU"),l=r("B6G6"),d=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"GetAll",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="/course",console.log(t),e.next=4,l.a.get(t).then((function(e){if(e.data.success)return e.data})).catch((function(e){throw e}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"Add",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/course/add",console.log(r),e.next=4,l.a.post(r,t).then((function(e){if(e.data.success)return e.data})).catch((function(e){throw e}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"AddDesc",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/course/add/description",console.log(r),e.next=4,l.a.post(r,t).then((function(e){if(e.data.success)return e.data})).catch((function(e){throw e}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"Edit",value:function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/course/edit",e.next=3,l.a.post("/course/edit",t).then((function(e){if(e.data.success)return e.data})).catch((function(e){throw e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"Get",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/course"+"/".concat(t),e.next=3,l.a.get(r).then((function(e){if(e.data.success)return e.data})).catch((function(e){throw console.log("Api Error:",e),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()},Xgir:function(e,t,r){"use strict";var n=r("q1tI"),a=r("5AJ6");t.a=Object(a.a)(n.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack")},bdbj:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("o0o1"),i=r.n(a),o=r("HaE+"),c=r("q1tI"),l=r.n(c),d=r("i6E2"),s=r("BAEn"),u=r("UGp+"),h=r("KYPV"),m=r("8uep"),v=r("FGyW"),b=r("DPAz"),p=r("20a2"),j=r("Xgir"),f=r("dB11"),O=r("xcRO"),x=r("CqGl"),g=r("A2So"),_=r("tRbT"),y=r("ofer"),w=r("r9w1"),q=r("wb2y"),P=r("hlFM"),F=r("jjAL"),N=r("o4QW"),C=r("i4t8"),E=function(e){var t,r,a,d,E,k,A,S,B,T,D,H,z,W,M,R,V,U,G,I,J,L,X,K,Y,Q,Z,$=e.isCreate,ee=e.details,te=e.isEditable,re=e.handleBack,ne=e.activateEdit;console.clear(),console.log(ee);var ae=[{name:"\u0645\u0630\u0627\u0643\u0631\u0629"},{name:"\u0623\u0639\u0645\u0627\u0644"},{name:"\u0627\u0645\u062a\u062d\u0627\u0646"},{name:"\u0622\u062e\u0631"}],ie=(Object(p.useRouter)(),Object(s.a)().translate),oe=Object(c.useState)(ee),ce=oe[0],le=(oe[1],Object(c.useState)(null===ce||void 0===ce||null===(t=ce.current_description)||void 0===t?void 0:t.attachement)),de=le[0],se=le[1],ue=Object(c.useState)($),he=ue[0],me=ue[1],ve=($?u.f({en_name:u.g(ie("English Name")).required(ie("Field is required")),ar_name:u.g(ie("Arabic Name")).required(ie("Field is required")),fr_name:u.g(ie("French Name")).required(ie("Field is required")),code:u.g(ie("Course Code")).required(ie("Field is required")),theoretical_hours:u.e("Theoretical Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),practical_hours:u.e("Practical Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),mixed_hours:u.e("Practical Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),evaluation_methods:u.b().of(u.f().shape({name:u.g(),percentage:u.e().min(0,ie("Field must be greater than 0")).max(100,ie("Field must be less than 100")).transform((function(e){return isNaN(e)?void 0:e})).required("Percentage is required")})).min(1,ie("Need at least one evaluation method")).test((function(e){var t=null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t.percentage}),0);return 100!=t?(isNaN(t)?xe(ie("Percentage should be 100%, but you have:")+"0%"):xe(ie("Percentage should be 100%, but you have:")+t+"%"),new u.a(ie("Percentage should be 100%, but you have ".concat(t,"%"),void 0,ie("Evaluation Methods")))):(xe(""),!0)})),attachement:u.d().required(ie("Need an attachement for this course"))}):u.f({en_name:u.g(ie("English Name")).required(ie("Field is required")),ar_name:u.g(ie("Arabic Name")).required(ie("Field is required")),fr_name:u.g(ie("French Name")).required(ie("Field is required")),code:u.g(ie("Course Code")).required(ie("Field is required")),attachement:u.d().required(ie("Need an attachement for this course"))}),$?{en_name:null===ce||void 0===ce?void 0:ce.en_name,ar_name:null===ce||void 0===ce?void 0:ce.ar_name,fr_name:null===ce||void 0===ce?void 0:ce.fr_name,code:null===ce||void 0===ce?void 0:ce.code,credit:null===ce||void 0===ce||null===(r=ce.current_description)||void 0===r?void 0:r.credit,theoretical_hours:null===ce||void 0===ce||null===(a=ce.current_description)||void 0===a||null===(d=a.hours)||void 0===d||null===(E=d.find((function(e){return"theoretic"==(null===e||void 0===e?void 0:e.type)})))||void 0===E?void 0:E.hours,practical_hours:null===ce||void 0===ce||null===(k=ce.current_description)||void 0===k||null===(A=k.hours)||void 0===A||null===(S=A.find((function(e){return"practical"==(null===e||void 0===e?void 0:e.type)})))||void 0===S?void 0:S.hours,mixed_hours:null===ce||void 0===ce||null===(B=ce.current_description)||void 0===B||null===(T=B.hours)||void 0===T||null===(D=T.find((function(e){return"mixed"==(null===e||void 0===e?void 0:e.type)})))||void 0===D?void 0:D.hours,evaluation_methods:null===ce||void 0===ce||null===(H=ce.current_description)||void 0===H||null===(z=H.evaluation_methods)||void 0===z?void 0:z.map((function(e,t){return{id:e.id,name:e.name,percentage:e.percentage}})),attachement:null===ce||void 0===ce||null===(W=ce.current_description)||void 0===W?void 0:W.attachement}:{id:ce.id,en_name:ce.en_name,ar_name:ce.ar_name,fr_name:ce.fr_name,code:ce.code,credit:null===ce||void 0===ce||null===(M=ce.current_description)||void 0===M?void 0:M.credit,theoretical_hours:null===ce||void 0===ce||null===(R=ce.current_description)||void 0===R||null===(V=R.hours)||void 0===V||null===(U=V.find((function(e){return"theoretic"==(null===e||void 0===e?void 0:e.type)})))||void 0===U?void 0:U.hours,practical_hours:null===ce||void 0===ce||null===(G=ce.current_description)||void 0===G||null===(I=G.hours)||void 0===I||null===(J=I.find((function(e){return"practical"==(null===e||void 0===e?void 0:e.type)})))||void 0===J?void 0:J.hours,mixed_hours:null===ce||void 0===ce||null===(L=ce.current_description)||void 0===L||null===(X=L.hours)||void 0===X||null===(K=X.find((function(e){return"mixed"==(null===e||void 0===e?void 0:e.type)})))||void 0===K?void 0:K.hours,evaluation_methods:null===ce||void 0===ce||null===(Y=ce.current_description)||void 0===Y||null===(Q=Y.evaluation_methods)||void 0===Q?void 0:Q.map((function(e,t){return{id:e.id,name:e.name,percentage:e.percentage}})),attachement:null===ce||void 0===ce||null===(Z=ce.current_description)||void 0===Z?void 0:Z.attachement}),be=function(e){e.preventDefault(),ne()},pe=Object(c.useMemo)((function(){return he?u.f({en_name:u.g(ie("English Name")).required(ie("Field is required")),ar_name:u.g(ie("Arabic Name")).required(ie("Field is required")),fr_name:u.g(ie("French Name")).required(ie("Field is required")),code:u.g(ie("Course Code")).required(ie("Field is required")),theoretical_hours:u.e("Theoretical Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),practical_hours:u.e("Practical Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),mixed_hours:u.e("Practical Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),credit:u.e("Credit Hours").min(0,ie("Field must be greater than 0")).required(ie("Field is required")),evaluation_methods:u.b().of(u.f().shape({name:u.g(),percentage:u.e().min(0,ie("Field must be greater than 0")).max(100,ie("Field must be less than 100")).transform((function(e){return isNaN(e)?void 0:e})).required("Percentage is required")})).min(1,ie("Need at least one evaluation method")).test((function(e){var t=null===e||void 0===e?void 0:e.reduce((function(e,t){return e+t.percentage}),0);return 100!=t?(isNaN(t)?xe(ie("Percentage should be 100%, but you have:")+"0%"):xe(ie("Percentage should be 100%, but you have:")+t+"%"),new u.a(ie("Percentage should be 100%, but you have ".concat(t,"%"),void 0,ie("Evaluation Methods")))):(xe(""),!0)})),attachement:u.d()}):u.f({en_name:u.g(ie("English Name")).required(ie("Field is required")),ar_name:u.g(ie("Arabic Name")).required(ie("Field is required")),fr_name:u.g(ie("French Name")).required(ie("Field is required")),code:u.g(ie("Course Code")).required(ie("Field is required")),attachement:u.d()})}),[he]),je=function(e){var t,r,n,a,i,o,c,l,d,s,u,h,m,v;(e.preventDefault(),me(!he),he)?ve={en_name:null===ce||void 0===ce?void 0:ce.en_name,ar_name:null===ce||void 0===ce?void 0:ce.ar_name,fr_name:null===ce||void 0===ce?void 0:ce.fr_name,code:null===ce||void 0===ce?void 0:ce.code,credit:null===ce||void 0===ce||null===(t=ce.current_description)||void 0===t?void 0:t.credit,theoretical_hours:null===ce||void 0===ce||null===(r=ce.current_description)||void 0===r||null===(n=r.hours)||void 0===n||null===(a=n.find((function(e){return"theoretic"==(null===e||void 0===e?void 0:e.type)})))||void 0===a?void 0:a.hours,practical_hours:null===ce||void 0===ce||null===(i=ce.current_description)||void 0===i||null===(o=i.hours)||void 0===o||null===(c=o.find((function(e){return"practical"==(null===e||void 0===e?void 0:e.type)})))||void 0===c?void 0:c.hours,mixed_hours:null===ce||void 0===ce||null===(l=ce.current_description)||void 0===l||null===(d=l.hours)||void 0===d||null===(s=d.find((function(e){return"mixed"==(null===e||void 0===e?void 0:e.type)})))||void 0===s?void 0:s.hours,evaluation_methods:null===ce||void 0===ce||null===(u=ce.current_description)||void 0===u||null===(h=u.evaluation_methods)||void 0===h?void 0:h.map((function(e,t){return{id:e.id,name:e.name,percentage:100*e.percentage}})),attachement:null===ce||void 0===ce||null===(m=ce.current_description)||void 0===m?void 0:m.attachement}:ve={id:ce.id,en_name:ce.en_name,ar_name:ce.ar_name,fr_name:ce.fr_name,code:ce.code,attachement:null===ce||void 0===ce||null===(v=ce.current_description)||void 0===v?void 0:v.attachement}},fe=Object(c.useState)(""),Oe=fe[0],xe=fe[1],ge=l.a.useRef(null),_e=function(e){var t;null===(t=ge.current)||void 0===t||t.click()},ye=Object(c.useState)(!1),we=ye[0],qe=ye[1],Pe=function(e){return new Promise((function(t,r){var n=new FileReader;n.readAsDataURL(e),se(null===e||void 0===e?void 0:e.name),n.onload=function(){t(n.result)},n.onerror=function(e){r(e)}}))},Fe=function(){var e=Object(o.a)(i.a.mark((function e(t,r){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.files[0],qe(!0),!((null===n||void 0===n?void 0:n.size)/1024/1024<2)){e.next=9;break}return e.next=5,Pe(n);case 5:a=e.sent,r("attachement",a),e.next=10;break;case 9:v.b.error("File size must be of 5MB or less");case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return Object(n.jsx)(_.a,{container:!0,md:12,sm:12,children:Object(n.jsxs)(_.a,{md:12,sm:12,xs:12,children:[Object(n.jsx)(g.a,{style:{padding:"1em 4em",margin:"5px 0px"},children:Object(n.jsxs)(_.a,{container:!0,children:[Object(n.jsxs)(C.a,{item:!0,md:9,xs:12,sm:12,children:[Object(n.jsx)(y.a,{variant:"h5",component:"div"}),Object(n.jsx)(y.a,{sx:{mb:1.5},color:"text.secondary",children:ie("Course Details")})]}),Object(n.jsx)(C.a,{md:3,xs:12,sm:12,children:Object(n.jsxs)(m.a,{onClick:function(){return re()},color:"warning",children:[Object(n.jsx)(j.a,{}),ie("Back To Previous Page")]})})]})}),Object(n.jsx)(g.a,{style:{padding:"3em 3em",margin:"5px 0px"},children:Object(n.jsx)(h.d,{enableReinitialize:!0,initialValues:ve,validationSchema:pe,onSubmit:function(e,t){!function(e,t){if($){var r={en_name:e.en_name,fr_name:e.fr_name,ar_name:e.ar_name,code:e.code,credit:e.credit,theoretic_hours:e.theoretical_hours,practical_hours:e.practical_hours,mixed_hours:e.mixed_hours,evaluation_methods:e.evaluation_methods};console.clear(),""!=ge.current.value&&(r.attachement=e.attachement),console.log(r),b.a.Add(r).then((function(e){e.success?(v.b.success("Course Added Successfully"),re()):(console.log(e.error),v.b.error(e.error.message))})).catch((function(e){throw console.log(e.message),v.b.error(e.message),new Error(e)}))}else if(he){console.clear(),console.log("add desc info");var n={course_id:ce.id,credit:e.credit,theoretic_hours:e.theoretical_hours,practical_hours:e.practical_hours,mixed_hours:e.mixed_hours,evaluation_methods:e.evaluation_methods.map((function(e){return{name:e.name,percentage:e.percentage}}))};""!=ge.current.value&&(n.attachement=e.attachement),console.log(n),b.a.AddDesc(n).then((function(e){e.success?v.b.success("Description Added Successfully"):(console.log(e.error),v.b.error(e.error.message))})).catch((function(e){console.log(e.message),v.b.error(e.message)}))}else{var a={id:ce.id,en_name:e.en_name,ar_name:e.ar_name,fr_name:e.fr_name,code:e.code};""!=ge.current.value&&(a.attachement=e.attachement),console.log(a),b.a.Edit(a).then((function(e){e.success?v.b.success("Courses Edited Successfully"):(console.log(e.error),v.b.error(e.error.message))})).catch((function(e){throw console.log(e.message),v.b.error(e.message),new Error(e)}))}t(!1)}(e,t.setSubmitting)},children:function(e){var t=e.values,r=e.handleChange,a=e.handleSubmit,i=e.errors,o=e.touched,c=e.handleBlur,d=e.isSubmitting,s=e.isValid,u=(e.dirty,e.setFieldValue);return Object(n.jsxs)(h.c,{onSubmit:a,children:[Object(n.jsxs)(_.a,{container:!0,md:12,xs:12,style:{margin:"1em 0em"},children:[Object(n.jsx)(_.a,{container:!0,md:12,style:{margin:"1em 0em",color:"red",display:i&&0===Object.keys(i).length&&Object.getPrototypeOf(i)===Object.prototype?"none":"block"}}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!(te||he),onChange:r,variant:"outlined",size:"small",type:"text",id:"ar_name",name:"ar_name",value:t.ar_name,onBlur:c,error:Boolean(o.ar_name&&i.ar_name),helperText:o.ar_name&&i.ar_name,placeholder:ie("Arabic Name"),label:ie("Arabic Name"),fullWidth:!0})})}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!(te||he),onChange:r,variant:"outlined",size:"small",type:"text",id:"en_name",name:"en_name",value:t.en_name,onBlur:c,error:Boolean(o.en_name&&i.en_name),helperText:o.en_name&&i.en_name,placeholder:ie("English Name"),label:ie("English Name"),fullWidth:!0})})}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!(te||he),onChange:r,variant:"outlined",size:"small",type:"text",id:"fr_name",name:"fr_name",value:t.fr_name,onBlur:c,error:Boolean(o.fr_name&&i.fr_name),helperText:o.fr_name&&i.fr_name,placeholder:ie("French Name"),label:ie("French Name"),fullWidth:!0})})}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!(te||he),onChange:r,variant:"outlined",size:"small",type:"text",id:"code",name:"code",value:t.code,onBlur:c,error:Boolean(o.code&&i.code),helperText:o.code&&i.code,placeholder:ie("Course Code"),label:ie("Course Code"),fullWidth:!0})})})]}),($||he)&&Object(n.jsxs)(_.a,{container:!0,md:12,xs:12,children:[Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!te,onChange:r,variant:"outlined",size:"small",type:"number",id:"theoretical_hours",name:"theoretical_hours",value:t.theoretical_hours,onBlur:c,error:Boolean(o.theoretical_hours&&i.theoretical_hours),helperText:o.theoretical_hours&&i.theoretical_hours,placeholder:ie("Theoretical Hours"),label:ie("Theoretical Hours"),fullWidth:!0})})}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!te,onChange:r,variant:"outlined",size:"small",type:"number",id:"practical_hours",name:"practical_hours",value:t.practical_hours,onBlur:c,error:Boolean(o.practical_hours&&i.practical_hours),helperText:o.practical_hours&&i.practical_hours,placeholder:ie("Practical Hours"),label:ie("Practical Hours"),fullWidth:!0})})}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!te,onChange:r,variant:"outlined",size:"small",type:"number",id:"mixed_hours",name:"mixed_hours",value:t.mixed_hours,onBlur:c,error:Boolean(o.mixed_hours&&i.mixed_hours),helperText:o.mixed_hours&&i.mixed_hours,placeholder:ie("Mixed Hours"),label:ie("Mixed Hours"),fullWidth:!0})})}),Object(n.jsx)(_.a,{item:!0,xs:3,md:3,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(w.a,{disabled:!te,onChange:r,variant:"outlined",size:"small",type:"text",id:"credit",name:"credit",value:t.credit,onBlur:c,error:Boolean(o.credit&&i.credit),helperText:o.credit&&i.credit,placeholder:ie("Number of accredited hours"),label:ie("Number of accredited hours"),fullWidth:!0})})})]}),Object(n.jsx)(_.a,{container:!0,md:12,xs:12,style:{margin:"1em 0em"},children:Object(n.jsx)(_.a,{item:!0,xs:3,md:3})}),Object(n.jsx)(q.a,{style:{margin:"2em 0em"}}),($||he)&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P.a,{mb:1,ml:.5,children:Object(n.jsx)(y.a,{component:"label",variant:"caption",children:Object(n.jsx)("h5",{children:ie("Evaluations Method")})})}),Object(n.jsx)(P.a,{my:1,children:Object(n.jsx)(y.a,{component:"label",variant:"caption",children:Oe&&Object(n.jsx)("label",{style:{color:"rgb(234, 6, 6)"},children:Oe})})}),Object(n.jsx)(h.b,{name:"evaluation_methods",render:function(e){return Object(n.jsx)("div",{children:null!==t&&void 0!==t&&t.evaluation_methods&&(null===t||void 0===t?void 0:t.evaluation_methods.length)>0?null===t||void 0===t?void 0:t.evaluation_methods.map((function(t,a){return Object(n.jsx)("div",{children:Object(n.jsxs)(_.a,{container:!0,spacing:2,children:[Object(n.jsx)(_.a,{item:!0,xs:4,children:Object(n.jsx)(w.a,{disabled:!te,variant:"outlined",size:"small",type:"select",id:"evaluation_methods.".concat(a,".name"),name:"evaluation_methods.".concat(a,".name"),select:!0,value:t.name,onChange:r("evaluation_methods.".concat(a,".name")),onBlur:c,fullWidth:!0,children:null===ae||void 0===ae?void 0:ae.map((function(e){return Object(n.jsx)(F.a,{value:e.name,children:e.name},e.name)}))})}),Object(n.jsxs)(_.a,{item:!0,xs:4,style:{display:"flex",flexDirection:"column"},children:[Object(n.jsx)(w.a,{disabled:!te,onChange:r("evaluation_methods.".concat(a,".percentage")),variant:"outlined",size:"small",type:"number",id:"$evaluation_methods.".concat(a,".percentage"),name:"evaluation_methods.".concat(a,".percentage"),value:t.percentage,onBlur:c,error:Boolean(i&&i.evaluation_methods&&i.evaluation_methods[a]&&i.evaluation_methods[a].percentage&&o&&o.evaluation_methods&&o.evaluation_methods[a]&&o.evaluation_methods[a].percentage),helperText:i&&i.evaluation_methods&&i.evaluation_methods[a]&&i.evaluation_methods[a].percentage&&o&&o.evaluation_methods&&o.evaluation_methods[a]&&o.evaluation_methods[a].percentage,placeholder:ie("Percentage")}),Object(n.jsx)("label",{style:{color:"rgb(234, 6, 6)"},children:Object(n.jsx)(h.a,{name:"evaluation_methods.".concat(a,".percentage")})})]}),Object(n.jsxs)(_.a,{item:!0,xs:4,style:{display:te?"":"none"},children:[Object(n.jsx)(m.a,{style:{margin:5},color:"error",onClick:function(){return e.remove(a)},children:"-"}),Object(n.jsx)(m.a,{style:{margin:5},color:"primary",onClick:function(){return e.push({name:"",percentage:0})},children:"+"})]})]})},a)})):Object(n.jsx)(l.a.Fragment,{children:Object(n.jsxs)(m.a,{style:{display:te?"":"none"},color:"primary",onClick:function(){return e.push({name:"",percentage:0})},children:[ie("Add an evaluation method"),Object(n.jsx)(f.a,{})]})})})}}),Object(n.jsx)(q.a,{style:{margin:"2em 0em"}})]}),Object(n.jsx)(P.a,{mb:1,ml:.5,children:Object(n.jsx)(y.a,{component:"label",variant:"caption",children:Object(n.jsx)("h5",{children:ie("Attachements")})})}),Object(n.jsxs)(P.a,{children:[Object(n.jsxs)(m.a,{disabled:!te,color:"primary",onClick:_e,children:[ie("Upload a file"),Object(n.jsx)(O.a,{})]}),Object(n.jsx)("input",{id:"attachement",name:"attachement",type:"file",ref:ge,style:{display:"none"},onChange:function(e){Fe(e,u)},className:"form-control"}),Object(n.jsx)(_.a,{md:6,style:{marginTop:"1em"},children:Object(n.jsx)(w.a,{fullWidth:!0,helperText:(null===o||void 0===o?void 0:o.attachement)&&(null===i||void 0===i?void 0:i.attachement),error:Boolean((null===i||void 0===i?void 0:i.attachement)&&(null===o||void 0===o?void 0:o.attachement)),variant:"outlined",type:"text",size:"small",disabled:!0,placeholder:"",value:de})}),null!=t.attachement&&""!=t.attachement&&!we&&Object(n.jsx)(_.a,{md:6,style:{marginTop:"1em"},children:Object(n.jsx)("a",{href:"http://teststudent.hiast.edu.sy/backend/public/"+t.attachement,target:"_blank",rel:"noopener noreferrer",children:Object(n.jsxs)(m.a,{type:"button",disabled:!0,variant:"gradient",color:"warning",fullWidth:!0,children:[Object(n.jsx)(x.a,{style:{margin:"0em .3em"}}),ie("Download")]})})})]}),Object(n.jsxs)(P.a,{mt:4,mb:1,style:{display:"flex",justifyContent:"space-between"},children:[te?d?Object(n.jsx)(m.a,{type:"button",disabled:!0,variant:"gradient",color:"info",children:ie("Processing ...")}):Object(n.jsx)(m.a,{style:{color:"rgb(255, 255, 255)",background:"rgb(23, 193, 232)"},disabled:!s&&d,type:"submit",children:ie("Save")}):Object(n.jsx)(m.a,{onClick:be,type:"button",variant:"gradient",color:"info",children:ie("Edit Course")}),te&&!(he&&te)&&Object(n.jsx)(m.a,{onClick:je,type:"button",variant:"gradient",color:"primary",children:ie(he?"Back to edit basic info":"Edit description")})]})]})}})}),Object(n.jsx)(N.a,{})]})})};E.layout=d.a,E.auth=!1,t.default=E},dB11:function(e,t,r){"use strict";var n=r("q1tI"),a=r("5AJ6");t.a=Object(a.a)(n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},i6E2:function(e,t,r){"use strict";r.d(t,"a",(function(){return A}));var n=r("nKUr"),a=r("rePB"),i=r("ODXe"),o=r("Ff2n"),c=r("q1tI"),l=r.n(c),d=r("20a2"),s=r("t/UT"),u=(r("faiq"),r("R/WZ")),h=r("gWHO"),m=r("HXcA"),v=r("RG8o"),b=(r("em7R"),r("8cHP")),p=r("jfJP");function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O,x=function(e){var t;return{wrapper:{position:"relative",top:"0",height:"100vh"},mainPanelToggle:Object(a.a)({},e.breakpoints.up("md"),{width:"calc(100% - ".concat(p.j,"px) !important"),transition:"0.5s ease all !important"}),mainPanel:f(f((t={},Object(a.a)(t,e.breakpoints.up("md"),{width:"calc(100% - ".concat(p.k,"px)")}),Object(a.a)(t,"overflow","auto"),Object(a.a)(t,"position","relative"),Object(a.a)(t,"float","right"),t),p.A),{},{maxHeight:"100%",width:"100%",overflowScrolling:"touch"}),content:{marginTop:"70px",padding:"30px 15px",minHeight:"calc(100vh - 123px)"},container:p.c,map:{marginTop:"70px"}}},g=r("Ll0l"),_=r("fC67"),y=r.n(_),w=r("e46U"),q=r.n(w),P=r("TSYQ"),F=r.n(P),N=r("2FK4"),C=r("BAEn");function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e){var t=e.children,r=Object(o.a)(e,["children"]),c=Object(C.a)().translate,p=(Object(N.i)(),Object(N.j)(N.b)),j=Object(d.useRouter)(),f=Object(u.a)("ar"===j.locale?g.a:x)(),_=l.a.createRef(),w=l.a.useState(y.a),P=Object(i.a)(w,2),E=P[0],A=(P[1],l.a.useState("white")),S=Object(i.a)(A,2),B=S[0],T=(S[1],l.a.useState("dropdown show")),D=Object(i.a)(T,2),H=(D[0],D[1],l.a.useState(!1)),z=Object(i.a)(H,2),W=z[0],M=z[1],R=function(){M(!W)},V=function(){return"/students_affairs/maps"!==j.pathname},U=function(){window.innerWidth>=960&&M(!1)};return l.a.useEffect((function(){return navigator.platform.indexOf("Win")>-1&&(O=new s.a(_.current,{suppressScrollX:!0,suppressScrollY:!1}),document.body.style.overflow="hidden"),window.addEventListener("resize",U),function(){navigator.platform.indexOf("Win")>-1&&O.destroy(),window.removeEventListener("resize",U)}}),[_]),Object(n.jsxs)("div",{className:f.wrapper,children:[Object(n.jsx)(v.a,k(k({routes:b.a,logoText:c("Hiast Students Affairs"),logo:q.a,image:E,handleDrawerToggle:R,open:W,color:B,rtlActive:"ar"===j.locale},r),{},{toggle:p})),Object(n.jsxs)("div",{className:F()(f.mainPanel,Object(a.a)({},f.mainPanelToggle,p)),ref:_,children:[Object(n.jsx)(h.a,k({routes:b.a,handleDrawerToggle:R,rtlActive:"ar"===j.locale},r)),V()?Object(n.jsx)("div",{className:f.content,children:Object(n.jsx)("div",{className:f.container,children:t})}):Object(n.jsx)("div",{className:f.map,children:t}),V()?Object(n.jsx)(m.a,{}):null]})]})}},xcRO:function(e,t,r){"use strict";var n=r("q1tI"),a=r("5AJ6");t.a=Object(a.a)(n.createElement("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"}),"AttachFile")}},[["8M/A",0,2,1,3,4,5,6,7,8,9,10,12,14,13,15,16,17,18,19,20,25,11]]]);