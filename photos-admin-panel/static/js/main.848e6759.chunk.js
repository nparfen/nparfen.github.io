(window["webpackJsonpphotos-admin-panel"]=window["webpackJsonpphotos-admin-panel"]||[]).push([[0],{206:function(e,t,r){e.exports=r(413)},413:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(15),l=r.n(a),i=r(467),c=r(193),u=r(31),s=r(49),p=r(195),m=r(33),f=r(14),b=r(72),d=Object(b.a)("GET_ITEMS"),h=Object(b.a)("ADD_ITEM"),g=Object(b.a)("UPDATE_ITEM"),O=Object(b.a)("DELETE_ITEM");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={items:[],loading:!1,error:null},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;if([d.TRIGGER,h.TRIGGER,g.TRIGGER,O.TRIGGER].includes(t.type))return j({},e,{loading:!0,error:null});if(d.SUCCESS===t.type)return j({},e,{items:t.payload});if(h.SUCCESS===t.type){var r=[t.payload].concat(Object(m.a)(e.items));return localStorage.setItem("photo_items",JSON.stringify(r)),j({},e,{items:r})}if(g.SUCCESS===t.type){var n=e.items.map((function(e){return e.id===t.payload.id?j({},e,{},t.payload,{tooltip:j({},e.tooltip,{},t.payload.tooltip)}):e}));return localStorage.setItem("photo_items",JSON.stringify(n)),j({},e,{items:n})}if(O.SUCCESS===t.type){var o=e.items.filter((function(e){return e.id!==t.payload.id}));return localStorage.setItem("photo_items",JSON.stringify(o)),j({},e,{items:o})}return[d.FAILURE,h.FAILURE,g.FAILURE,O.FAILURE].includes(t.type)?j({},e,{error:t.payload}):[d.FULFILL,h.FULFILL,g.FULFILL,O.FULFILL].includes(t.type)?j({},e,{loading:!1}):e},x=r(17),w=r.n(x),P=r(10),S=r(184),k=r.n(S);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=w.a.mark(U),D=w.a.mark(q),R=w.a.mark(W),F=w.a.mark(A),B=w.a.mark(_),N=w.a.mark(M),G=w.a.mark(J),L=w.a.mark(z),V=JSON.parse(localStorage.getItem("photo_items"))||[];function U(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(P.e)(d.request());case 3:return e.next=5,Object(P.c)(1e3);case 5:return e.next=7,Object(P.e)(d.success(V));case 7:e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),e.next=13,Object(P.e)(d.failure(e.t0.message));case 13:return e.prev=13,e.next=16,Object(P.e)(d.fulfill());case 16:return e.finish(13);case 17:case"end":return e.stop()}}),I,null,[[0,9,13,17]])}function q(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(P.e)(h.request());case 3:return t.next=5,Object(P.c)(1e3);case 5:return t.next=7,Object(P.e)(h.success({id:k()(),url:e.payload.url,title:e.payload.title,tooltip:T({},e.payload.tooltip)}));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(P.e)(h.failure(t.t0.message));case 13:return t.prev=13,t.next=16,Object(P.e)(h.fulfill());case 16:return t.finish(13);case 17:case"end":return t.stop()}}),D,null,[[0,9,13,17]])}function W(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(P.e)(g.request());case 3:return t.next=5,Object(P.c)(1e3);case 5:return t.next=7,Object(P.e)(g.success(T({},e.payload)));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(P.e)(g.failure(t.t0.message));case 13:return t.prev=13,t.next=16,Object(P.e)(g.fulfill());case 16:return t.finish(13);case 17:case"end":return t.stop()}}),R,null,[[0,9,13,17]])}function A(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(P.e)(O.request());case 3:return t.next=5,Object(P.c)(1e3);case 5:return t.next=7,Object(P.e)(O.success({id:e.payload.id}));case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(P.e)(O.failure(t.t0.message));case 13:return t.prev=13,t.next=16,Object(P.e)(O.fulfill());case 16:return t.finish(13);case 17:case"end":return t.stop()}}),F,null,[[0,9,13,17]])}function _(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.h)(d.TRIGGER,U);case 2:case"end":return e.stop()}}),B)}function M(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.h)(h.TRIGGER,q);case 2:case"end":return e.stop()}}),N)}function J(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.h)(g.TRIGGER,W);case 2:case"end":return e.stop()}}),G)}function z(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.h)(O.TRIGGER,A);case 2:case"end":return e.stop()}}),L)}var X=w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)([Object(P.d)(_),Object(P.d)(M),Object(P.d)(J),Object(P.d)(z)]);case 2:case"end":return e.stop()}}),e)})),Y=Object(p.a)(),H=Object(s.d)(y,Object(s.a)(Y));Y.run(X);var $=H,K=r(51),Q=r(189),Z=r(461),ee=r(465),te=r(415),re=r(466),ne=r(192),oe=r.n(ne),ae=r(463),le=r(462),ie=r(464),ce=r(97),ue=r(456),se=r(470),pe=r(455),me=r(454),fe=r(453),be=r(471),de=r(468),he=r(188),ge=Object(Q.a)((function(e){return{root:{display:"inline-flex",width:"100%"},picker:{position:"absolute",zIndex:1500,marginBottom:e.spacing(2),top:"auto",left:"auto",right:"auto",bottom:0},background:{position:"fixed",top:0,right:0,bottom:0,left:0}}})),Oe=function(e){var t=e.name,r=e.label,a=e.placeholder,l=e.setFieldValue,i=e.handleBlur,c=e.value,u=e.touched,s=e.error,p=ge(),m=Object(n.useState)(!1),f=Object(K.a)(m,2),b=f[0],d=f[1];return o.a.createElement("div",{className:p.root},o.a.createElement(de.a,{name:t,label:r,placeholder:a,margin:"normal",fullWidth:!0,value:c,onClick:function(){return d(!0)},onChange:function(e){return l(t,e.target.value)},onBlur:i,helperText:u?s:"",error:u&&Boolean(s),InputProps:{style:{color:""===c?"#ffffff":c}}}),b&&o.a.createElement("div",{className:p.picker},o.a.createElement("div",{className:p.background,onClick:function(){return d(!1)}}),o.a.createElement(he.ChromePicker,{color:c,onClick:function(){return d(!1)},onChange:function(e){return l(t,e.hex)}})))},ve=r(194),je=Object(Q.a)((function(e){return{dropzone:{width:"100%",height:180,padding:e.spacing(1),cursor:"pointer",border:"1px dashed ".concat(e.palette.divider),display:"inline-flex",position:"relative",outline:"none !important"},photoPreview:{maxHeight:"100%",maxWidth:"100%",objectFit:"cover",width:"100%",height:180,position:"absolute",top:0,left:0,zIndex:0}}})),Ee=function(e){var t=e.url,r=e.setFieldValue,a=je(),l=Object(n.useCallback)((function(e){var t=new FileReader;t.onabort=function(){return console.log("file reading was aborted")},t.onerror=function(){return console.log("file reading has failed")},t.onload=function(){var e=t.result;r("url",e)},t.readAsDataURL(e[0])}),[r]),i=Object(ve.a)({multiple:!1,accept:"image/*",onDrop:l}),c=i.getRootProps,u=i.getInputProps;return o.a.createElement("div",c({className:a.dropzone}),o.a.createElement("input",u()),o.a.createElement(te.a,null,"Drag 'n' drop some photo here, or click to select photo*"),t&&o.a.createElement("img",{className:a.photoPreview,src:t,alt:"Preview"}))},ye=[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"left",label:"Left"},{value:"right",label:"Right"}],xe=r(53),we=xe.object().shape({url:xe.string().required("Upload photo"),title:xe.string().min(2,"Title is too smal").max(20,"Title is to long").required("Title is required"),tooltip:xe.object().shape({color:xe.string().required("Choose color"),position:xe.string().required("Choose position")})});function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Se=function(e){var t=e.open,r=e.closeDialog,n=Object(u.b)();return o.a.createElement(se.a,{open:t,onClose:r},o.a.createElement(fe.a,null,"Create New Item"),o.a.createElement(ce.a,{initialValues:{url:"",title:"",tooltip:{color:"",position:""}},validationSchema:we,onSubmit:function(e){n(h(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))),r()}},(function(e){var t=e.isValid,n=e.handleSubmit,a=e.handleChange,l=e.handleBlur,i=e.values,c=e.errors,u=e.touched,s=e.setFieldValue;return o.a.createElement("form",{onSubmit:n,autoComplete:"off"},o.a.createElement(me.a,null,o.a.createElement(Ee,{setFieldValue:s,url:i.url}),o.a.createElement(de.a,{name:"title",type:"text",label:"Photo title",placeholder:"Photo title",margin:"normal",fullWidth:!0,value:i.title,onChange:a,onBlur:l,helperText:u.title?c.title:"",error:u.title&&Boolean(c.title)}),o.a.createElement(Oe,{name:"tooltip.color",label:"Tooltip color",placeholder:"Tooltip color",setFieldValue:s,handleBlur:l,value:i.tooltip.color,touched:u.tooltip&&u.tooltip.color,error:c.tooltip&&c.tooltip.color}),o.a.createElement(de.a,{name:"tooltip.position",type:"text",label:"Tooltip position",placeholder:"Tooltip position",margin:"normal",fullWidth:!0,select:!0,onChange:a,onBlur:l,value:i.tooltip.position,helperText:u.tooltip&&u.tooltip.position?c.tooltip&&c.tooltip.position:"",error:u.tooltip&&u.tooltip.position&&Boolean(c.tooltip&&c.tooltip.position)},ye.map((function(e){return o.a.createElement(be.a,{key:e.value,value:e.value},e.label)})))),o.a.createElement(pe.a,null,o.a.createElement(ue.a,{type:"button",color:"secondary",onClick:function(){return r()}},"Cancel"),o.a.createElement(ue.a,{type:"submit",color:"primary",disabled:!t},"Create")))})))},ke=r(191),Ce=r.n(ke);function Te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Te(r,!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Te(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var De=Object(Q.a)((function(e){return{leftIcon:{marginRight:e.spacing(1)},grow:{flexGrow:1}}})),Re=function(e){var t=e.initialValues,r=e.open,n=e.closeDialog,a=De(),l=Object(u.b)();return o.a.createElement(se.a,{open:r,onClose:n},o.a.createElement(fe.a,null,"Update Item"),o.a.createElement(ce.a,{initialValues:t,validationSchema:we,onSubmit:function(e){l(g(Ie({},e))),n()}},(function(e){var t=e.isValid,r=e.handleSubmit,i=e.handleChange,c=e.handleBlur,u=e.values,s=e.errors,p=e.touched,m=e.setFieldValue;return o.a.createElement("form",{onSubmit:r,autoComplete:"off"},o.a.createElement(me.a,null,o.a.createElement(Ee,{setFieldValue:m,url:u.url}),o.a.createElement(de.a,{name:"title",type:"text",label:"Photo title",placeholder:"Photo title",margin:"normal",fullWidth:!0,value:u.title,onChange:i,onBlur:c,helperText:p.title?s.title:"",error:p.title&&Boolean(s.title)}),o.a.createElement(Oe,{name:"tooltip.color",label:"Tooltip color",placeholder:"Tooltip color",setFieldValue:m,handleBlur:c,value:u.tooltip.color,touched:p.tooltip&&p.tooltip.color,error:s.tooltip&&s.tooltip.color}),o.a.createElement(de.a,{name:"tooltip.position",type:"text",label:"Tooltip position",placeholder:"Tooltip position",margin:"normal",fullWidth:!0,select:!0,onChange:i,onBlur:c,value:u.tooltip.position,helperText:p.tooltip&&p.tooltip.position?s.tooltip&&s.tooltip.position:"",error:p.tooltip&&p.tooltip.position&&Boolean(s.tooltip&&s.tooltip.position)},ye.map((function(e){return o.a.createElement(be.a,{key:e.value,value:e.value},e.label)})))),o.a.createElement(pe.a,null,o.a.createElement(ue.a,{type:"button",onClick:function(){l(O(Ie({},u))),n()}},o.a.createElement(Ce.a,{className:a.leftIcon}),"Delete"),o.a.createElement("div",{className:a.grow}),o.a.createElement(ue.a,{type:"button",color:"secondary",onClick:function(){return n()}},"Cancel"),o.a.createElement(ue.a,{type:"submit",color:"primary",disabled:!t},"Update")))})))},Fe=r(5),Be=Object(Q.a)((function(e){return{root:{position:"relative"},tooltip:{position:"absolute",zIndex:1500},bottom:{top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:e.spacing(1)},top:{bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:e.spacing(1)},left:{right:"100%",top:"50%",transform:"translateY(-50%)",marginRight:e.spacing(1)},right:{left:"100%",top:"50%",transform:"translateY(-50%)",marginLeft:e.spacing(1)},container:{color:"#ffffff",background:function(e){return e.color},padding:e.spacing(1),borderRadius:e.spacing(1)}}})),Ne=function(e){var t=e.children,r=e.position,a=void 0===r?"top":r,l=e.color,i=void 0===l?"#000000":l,c=e.title,u=void 0===c?"Tooltip":c,s=Be({color:i}),p=Object(n.useState)(!1),m=Object(K.a)(p,2),f=m[0],b=m[1];return o.a.createElement("div",{className:s.root,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)}},t,f&&o.a.createElement("div",{className:Object(Fe.a)(s.tooltip,s[a])},o.a.createElement("div",{className:s.container},o.a.createElement(te.a,{variant:"caption"},u))))},Ge=r(457),Le=r(458),Ve=r(460),Ue=r(459),qe=Object(Q.a)((function(e){return{media:{height:180}}})),We=function(e){var t=e.title,r=e.url,n=e.openDialog,a=qe();return o.a.createElement(Ge.a,{onClick:function(){return n()}},o.a.createElement(Le.a,null,o.a.createElement(Ue.a,{className:a.media,image:r,title:t}),o.a.createElement(Ve.a,null,o.a.createElement(te.a,{variant:"h6"},t))))},Ae=Object(Q.a)((function(e){return{container:{height:"100vh"},toolbar:{borderBottom:"1px solid ".concat(e.palette.divider),padding:e.spacing(2)},title:{flexGrow:1},gridRoot:{flexGrow:1,marginTop:e.spacing(2),marginBottom:e.spacing(2)},progress:{margin:e.spacing(2)},fab:{position:"fixed",top:"auto",left:"auto",right:e.spacing(3),bottom:e.spacing(3),margin:0}}})),_e=function(){var e=Ae(),t=Object(u.b)(),r=Object(n.useState)(!1),a=Object(K.a)(r,2),l=a[0],i=a[1],c=Object(n.useState)({open:!1,initialValues:null}),s=Object(K.a)(c,2),p=s[0],m=s[1],f=Object(u.c)((function(e){return e.items})),b=Object(u.c)((function(e){return e.loading})),h=Object(u.c)((function(e){return e.error}));return Object(n.useEffect)((function(){t(d())}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,null),o.a.createElement(le.a,{maxWidth:"lg",className:e.container},o.a.createElement(ae.a,{className:e.toolbar,disableGutters:!0},o.a.createElement(te.a,{variant:"h6",className:e.title},"Photos Admin Panel")),o.a.createElement(ie.a,{container:!0,className:e.gridRoot,justify:b||h?"center":"flex-start",spacing:2},b&&o.a.createElement(ee.a,{className:e.progress}),h&&o.a.createElement(ie.a,{item:!0,xs:12},o.a.createElement(te.a,{color:"error"},h)),!b&&0===f.length&&o.a.createElement(ie.a,{item:!0,xs:12},o.a.createElement(te.a,null,"There is no items...")),!b&&f.length>0&&f.map((function(e){return o.a.createElement(ie.a,{key:e.id,item:!0,xs:12,sm:6,md:4},o.a.createElement(Ne,Object.assign({title:e.title},e.tooltip),o.a.createElement(We,{title:e.title,url:e.url,openDialog:function(){return m({initialValues:e,open:!0})}})))}))),o.a.createElement(Se,{open:l,closeDialog:function(){return i(!1)}}),o.a.createElement(Re,{initialValues:p.initialValues,open:p.open,closeDialog:function(){return m({initialValues:null,open:!1})}})),o.a.createElement(re.a,{className:e.fab,color:"secondary",onClick:function(){return i(!0)}},o.a.createElement(oe.a,null)))},Me=Object(c.a)({typography:{fontFamily:["Muli","sans-serif"].join(",")}}),Je=function(){return o.a.createElement(i.a,{theme:Me},o.a.createElement(u.a,{store:$},o.a.createElement(_e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[206,1,2]]]);
//# sourceMappingURL=main.848e6759.chunk.js.map