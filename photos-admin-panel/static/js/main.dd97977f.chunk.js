(window["webpackJsonpphotos-admin-panel"]=window["webpackJsonpphotos-admin-panel"]||[]).push([[0],{223:function(e,t,a){e.exports=a(438)},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),i=a(491),c=a(207),s=a(26),u=a(55),p=a(209),m=a(15),d=a(79),f=Object(d.a)("GET_ITEMS",{trigger:function(e){return e},success:function(e){return{paginatedItems:e}},failure:function(e){return{error:e}},fulfill:function(){return null}}),g=Object(d.a)("ADD_ITEM",{trigger:function(e){return e},success:function(e){return{paginatedItems:e}},failure:function(){return null},fulfill:function(){return null}}),b=Object(d.a)("UPDATE_ITEM",{trigger:function(e){return e},success:function(e){return{paginatedItems:e}},failure:function(){return null},fulfill:function(){return null}}),h=Object(d.a)("DELETE_ITEM",{trigger:function(e){return e},success:function(e){return{paginatedItems:e}},failure:function(){return null},fulfill:function(){return null}});function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E={page:1,totalPages:0,items:[],loading:!1,error:void 0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return f.TRIGGER===t.type?O({},e,{loading:!0,error:void 0}):[f.SUCCESS,g.SUCCESS,b.SUCCESS,h.SUCCESS].includes(t.type)?O({},e,{},t.payload.paginatedItems):f.FAILURE===t.type?O({},e,{error:t.payload.error}):[f.FULFILL,g.FULFILL,b.FULFILL,h.FULFILL].includes(t.type)?O({},e,{loading:!1}):e},j=a(16),y=a.n(j),C=a(12),w=a(35),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,n=(t-1)*a,r=e.slice(n).slice(0,a),o=Math.ceil(e.length/a);return{page:t,totalPages:o,items:r}};function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(){return JSON.parse(localStorage.getItem("photo_items")||"[]")},N=function(e){return k(I(),e)},T=function(e,t){var a=[e].concat(Object(w.a)(I()));return localStorage.setItem("photo_items",JSON.stringify(a)),k(a,t)},L=function(e,t){var a=I().map((function(t){return t.id===e.id?P({},t,{},e,{tooltip:P({},t.tooltip,{},e.tooltip)}):t}));return localStorage.setItem("photo_items",JSON.stringify(a)),k(a,t)},B=function(e,t){var a=I().filter((function(t){return t.id!==e.id}));return localStorage.setItem("photo_items",JSON.stringify(a)),k(a,t)},D=a(46),R=function(e,t){return D.b.info(t,{autoClose:!1,toastId:e})},F=function(e,t){return D.b.update(e,{render:t,type:D.b.TYPE.SUCCESS,autoClose:2e3})},V=function(e,t){return D.b.update(e,{render:t,type:D.b.TYPE.ERROR,autoClose:5e3})},U=y.a.mark(q),W=y.a.mark(Y),G=y.a.mark(X),M=y.a.mark(H),z=y.a.mark($),_=y.a.mark(K),A=y.a.mark(Q),J=y.a.mark(Z);function q(e){var t;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=N(e.payload),a.next=4,Object(C.c)(1e3);case 4:return a.next=6,Object(C.e)(f.success(t));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(C.e)(f.failure(a.t0.message));case 12:return a.prev=12,a.next=15,Object(C.e)(f.fulfill());case 15:return a.finish(12);case 16:case"end":return a.stop()}}),U,null,[[0,8,12,16]])}function Y(e){var t,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="addItem-".concat(e.payload.id),n.prev=1,R(t,"Add in progress..."),n.next=5,Object(C.c)(1e3);case 5:return a=T(e.payload,1),n.next=8,Object(C.e)(g.success(a));case 8:F(t,"".concat(e.payload.title," added successfully.")),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),V(t,n.t0.message);case 14:return n.prev=14,n.next=17,Object(C.e)(g.fulfill());case 17:return n.finish(14);case 18:case"end":return n.stop()}}),W,null,[[1,11,14,18]])}function X(e){var t,a,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="updateItem-".concat(e.payload.id),r.prev=1,R(t,"Update in progress..."),r.next=5,Object(C.g)();case 5:return a=r.sent,r.next=8,Object(C.c)(1e3);case 8:return n=L(e.payload,a.page),r.next=11,Object(C.e)(b.success(n));case 11:F(t,"".concat(e.payload.title," updated successfully.")),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),V(t,r.t0.message);case 17:return r.prev=17,r.next=20,Object(C.e)(b.fulfill());case 20:return r.finish(17);case 21:case"end":return r.stop()}}),G,null,[[1,14,17,21]])}function H(e){var t,a,n;return y.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="deleteItem-".concat(e.payload.id),r.prev=1,R(t,"Delete in progress..."),r.next=5,Object(C.g)();case 5:return a=r.sent,r.next=8,Object(C.c)(1e3);case 8:return n=B(e.payload,1===a.items.length&&a.page===a.totalPages?a.page-1:a.page),r.next=11,Object(C.e)(h.success(n));case 11:F(t,"".concat(e.payload.title," deleted successfully.")),r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),V(t,r.t0.message);case 17:return r.prev=17,r.next=20,Object(C.e)(h.fulfill());case 20:return r.finish(17);case 21:case"end":return r.stop()}}),M,null,[[1,14,17,21]])}function $(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.i)(f.TRIGGER,q);case 2:case"end":return e.stop()}}),z)}function K(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.i)(g.TRIGGER,Y);case 2:case"end":return e.stop()}}),_)}function Q(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.i)(b.TRIGGER,X);case 2:case"end":return e.stop()}}),A)}function Z(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.i)(h.TRIGGER,H);case 2:case"end":return e.stop()}}),J)}var ee=y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.d)($),Object(C.d)(K),Object(C.d)(Q),Object(C.d)(Z)]);case 2:case"end":return e.stop()}}),e)})),te=Object(p.a)(),ae=Object(u.d)(x,Object(u.a)(te));te.run(ee);var ne=ae,re=a(37),oe=a(199),le=a(495),ie=a(486),ce=a(477),se=a(440),ue=a(490),pe=a(206),me=a.n(pe),de=a(488),fe=a(487),ge=a(489),be=a(194),he=a.n(be),ve=function(){return{id:he()(),url:"",title:"",tooltip:{color:"",position:""}}},Oe=a(105),Ee=a(481),xe=a(494),je=a(480),ye=a(479),Ce=a(478),we=a(496),ke=a(492),Se=[{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"left",label:"Left"},{value:"right",label:"Right"}],Pe=a(59),Ie=Pe.object().shape({url:Pe.string().required("Upload photo"),title:Pe.string().min(2,"Title is too smal").max(20,"Title is to long").required("Title is required"),tooltip:Pe.object().shape({color:Pe.string().required("Choose color"),position:Pe.string().required("Choose position")})}),Ne=a(198),Te=Object(oe.a)((function(e){return Object(le.a)({root:{display:"inline-flex",width:"100%"},picker:{position:"absolute",zIndex:1500,marginBottom:e.spacing(6),top:"auto",left:"auto",right:"auto",bottom:0},background:{position:"fixed",top:0,right:0,bottom:0,left:0}})})),Le=function(e){var t=e.name,a=e.label,o=e.placeholder,l=e.setFieldValue,i=e.handleBlur,c=e.value,s=e.touched,u=e.error,p=Te(),m=Object(n.useState)(!1),d=Object(re.a)(m,2),f=d[0],g=d[1];return r.a.createElement("div",{className:p.root},r.a.createElement(ke.a,{name:t,label:a,placeholder:o,margin:"normal",fullWidth:!0,value:c,onClick:function(){return g(!0)},onBlur:i,helperText:s?u:"",error:s&&Boolean(u),InputProps:{readOnly:!0,style:{color:""===c?"#000000":c}}}),f&&r.a.createElement("div",{className:p.picker},r.a.createElement("div",{className:p.background,onClick:function(){return g(!1)}}),r.a.createElement(Ne.ChromePicker,{disableAlpha:!0,color:c,onChangeComplete:function(e){return l(t,e.hex)}})))},Be=a(200),De=a(208),Re=a(475),Fe=a(476),Ve=function(e){return new Promise((function(t,a){setTimeout((function(){var n=new FileReader;n.onload=function(){return t(n.result)},n.onabort=function(){return a("File reading was aborted")},n.onerror=function(){return a("File reading has failed")},n.readAsDataURL(e)}),1e3)}))},Ue=Object(oe.a)((function(e){return Object(le.a)({dropzone:{height:180,padding:e.spacing(1),cursor:"pointer",border:"1px dashed ".concat(e.palette.divider),outline:"none !important"},photoPreview:{maxHeight:"100%",maxWidth:"100%",objectFit:"cover",width:"100%",height:180,position:"absolute",top:0,left:0,zIndex:0},loadingContainer:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"inherit",position:"absolute",top:0,left:0,zIndex:1500}})})),We=function(e){var t=e.name,a=e.url,o=e.setFieldValue,l=Ue(),i=Object(n.useState)(),c=Object(re.a)(i,2),s=c[0],u=c[1],p=Object(n.useState)(!1),m=Object(re.a)(p,2),d=m[0],f=m[1],g=Object(n.useCallback)(function(){var e=Object(Be.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(void 0),f(!0),e.prev=2,e.next=5,Ve(a[0]);case 5:n=e.sent,o(t,n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),u(e.t0);case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),[t,o]),b=Object(De.a)({multiple:!1,accept:"image/*",onDrop:g}),h=b.getRootProps,v=b.getInputProps;return r.a.createElement(Re.a,{fullWidth:!0},r.a.createElement("div",h({className:l.dropzone}),r.a.createElement("input",v()),!d&&!Boolean(a)&&r.a.createElement(se.a,null,"Drag 'n' drop some photo here or click to select photo*"),a&&r.a.createElement("img",{className:l.photoPreview,src:a,alt:"Preview"}),d&&r.a.createElement("div",{className:l.loadingContainer},r.a.createElement(ce.a,null))),s&&r.a.createElement(Fe.a,{error:!0,filled:!0},s))},Ge=function(e){var t=e.open,a=e.closeDialog,n=Object(s.b)();return r.a.createElement(xe.a,{open:t,onClose:a,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"form-dialog"},r.a.createElement(Ce.a,{"aria-labelledby":"form-dialog-title"},"Create New Item"),r.a.createElement(Oe.a,{initialValues:ve(),validationSchema:Ie,onSubmit:function(e){n(g(e)),a()}},(function(e){var t=e.isValid,n=e.handleSubmit,o=e.handleChange,l=e.handleBlur,i=e.values,c=e.errors,s=e.touched,u=e.setFieldValue;return r.a.createElement("form",{onSubmit:n,autoComplete:"off"},r.a.createElement(ye.a,null,r.a.createElement(We,{name:"url",setFieldValue:u,url:i.url}),r.a.createElement(ke.a,{name:"title",type:"text",label:"Photo title",placeholder:"Photo title",margin:"normal",fullWidth:!0,value:i.title,onChange:o,onBlur:l,helperText:s.title?c.title:"",error:s.title&&Boolean(c.title)}),r.a.createElement(Le,{name:"tooltip.color",label:"Tooltip color",placeholder:"Tooltip color",setFieldValue:u,handleBlur:l,value:i.tooltip.color,touched:s.tooltip&&s.tooltip.color,error:c.tooltip&&c.tooltip.color}),r.a.createElement(ke.a,{name:"tooltip.position",type:"text",label:"Tooltip position",placeholder:"Tooltip position",margin:"normal",fullWidth:!0,select:!0,onChange:o,onBlur:l,value:i.tooltip.position,helperText:s.tooltip&&s.tooltip.position?c.tooltip&&c.tooltip.position:"",error:s.tooltip&&s.tooltip.position&&Boolean(c.tooltip&&c.tooltip.position)},Se.map((function(e){return r.a.createElement(we.a,{key:e.value,value:e.value},e.label)})))),r.a.createElement(je.a,null,r.a.createElement(Ee.a,{type:"button",color:"secondary",onClick:a},"Cancel"),r.a.createElement(Ee.a,{type:"submit",color:"primary",disabled:!t},"Create")))})))},Me=a(202),ze=a.n(Me),_e=Object(oe.a)((function(e){return Object(le.a)({leftIcon:{marginRight:e.spacing(1)},grow:{flexGrow:1}})})),Ae=function(e){var t=e.initialValues,a=e.open,n=e.closeDialog,o=_e(),l=Object(s.b)();return r.a.createElement(xe.a,{open:a,onClose:n,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"form-dialog"},r.a.createElement(Ce.a,{"aria-labelledby":"form-dialog-title"},"Update Item"),r.a.createElement(Oe.a,{initialValues:t,validationSchema:Ie,onSubmit:function(e){l(b(e)),n()}},(function(e){var t=e.isValid,a=e.handleSubmit,i=e.handleChange,c=e.handleBlur,s=e.values,u=e.errors,p=e.touched,m=e.setFieldValue;return r.a.createElement("form",{onSubmit:a,autoComplete:"off"},r.a.createElement(ye.a,null,r.a.createElement(We,{name:"url",setFieldValue:m,url:s.url}),r.a.createElement(ke.a,{name:"title",type:"text",label:"Photo title",placeholder:"Photo title",margin:"normal",fullWidth:!0,value:s.title,onChange:i,onBlur:c,helperText:p.title?u.title:"",error:p.title&&Boolean(u.title)}),r.a.createElement(Le,{name:"tooltip.color",label:"Tooltip color",placeholder:"Tooltip color",setFieldValue:m,handleBlur:c,value:s.tooltip.color,touched:p.tooltip&&p.tooltip.color,error:u.tooltip&&u.tooltip.color}),r.a.createElement(ke.a,{name:"tooltip.position",type:"text",label:"Tooltip position",placeholder:"Tooltip position",margin:"normal",fullWidth:!0,select:!0,onChange:i,onBlur:c,value:s.tooltip.position,helperText:p.tooltip&&p.tooltip.position?u.tooltip&&u.tooltip.position:"",error:p.tooltip&&p.tooltip.position&&Boolean(u.tooltip&&u.tooltip.position)},Se.map((function(e){return r.a.createElement(we.a,{key:e.value,value:e.value},e.label)})))),r.a.createElement(je.a,null,r.a.createElement(Ee.a,{type:"button",onClick:function(){l(h(s)),n()}},r.a.createElement(ze.a,{className:o.leftIcon}),"Delete"),r.a.createElement("div",{className:o.grow}),r.a.createElement(Ee.a,{type:"button",color:"secondary",onClick:n},"Cancel"),r.a.createElement(Ee.a,{type:"submit",color:"primary",disabled:!t},"Update")))})))},Je=(a(434),Object(oe.a)((function(e){return Object(le.a)({toast:{padding:e.spacing(2),fontSize:e.spacing(2),fontFamily:"Muli, sans-serif",borderRadius:e.spacing(1),boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)"}})}))),qe=function(){var e=Je();return r.a.createElement(D.a,{toastClassName:e.toast,closeOnClick:!1,closeButton:!1,newestOnTop:!0})},Ye=a(5),Xe=Object(oe.a)((function(e){return Object(le.a)({root:{position:"relative"},tooltip:{position:"absolute",zIndex:1500},bottom:{top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:e.spacing(1)},top:{bottom:"100%",left:"50%",transform:"translateX(-50%)",marginBottom:e.spacing(1)},left:{right:"100%",top:"50%",transform:"translateY(-50%)",marginRight:e.spacing(1)},right:{left:"100%",top:"50%",transform:"translateY(-50%)",marginLeft:e.spacing(1)},container:{color:"white",background:function(e){return e.color},padding:e.spacing(1),borderRadius:e.spacing(1),boxShadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)"}})})),He=function(e){var t=e.children,a=e.position,o=void 0===a?"top":a,l=e.color,i=void 0===l?"#000000":l,c=e.title,s=void 0===c?"Tooltip":c,u=Xe({color:i}),p=Object(n.useState)(!1),m=Object(re.a)(p,2),d=m[0],f=m[1];return r.a.createElement("div",{className:u.root,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)}},t,d&&r.a.createElement("div",{className:Object(Ye.a)(u.tooltip,function(e){switch(e){case"top":return u.top;case"bottom":return u.bottom;case"right":return u.right;case"left":return u.left;default:return""}}(o))},r.a.createElement("div",{className:u.container},r.a.createElement(se.a,{variant:"caption"},s))))},$e=a(203),Ke=a.n($e),Qe=a(204),Ze=a.n(Qe),et=a(205),tt=a.n(et),at=Object(oe.a)((function(e){return Object(le.a)({pagination:{display:"flex",justifyContent:"center",alignItems:"center"},container:{display:"flex",alignItems:"center",listStyle:"none",fontSize:"20px",padding:0,marginTop:e.spacing(1),marginBottom:e.spacing(1)},pageElement:{margin:e.spacing(1),cursor:"pointer"},defaultCursor:{cursor:"default"},iconOpacity:{opacity:.26},pageLink:{display:"flex",padding:"0 ".concat(e.spacing(1),"px"),outline:"none",borderRadius:"2px"},pageWithBorder:{border:"solid 1px #c8c7cc"},activeLink:{backgroundColor:"#efeff4"}})})),nt=function(e){var t=e.page,a=e.pageCount,n=e.onPageChange,o=at();return r.a.createElement("div",{className:o.pagination},r.a.createElement(Ke.a,{pageCount:a,pageRangeDisplayed:2,marginPagesDisplayed:1,previousLabel:r.a.createElement(Ze.a,null),nextLabel:r.a.createElement(tt.a,null),breakLabel:"...",breakClassName:o.pageElement,breakLinkClassName:o.pageLink,onPageChange:n,initialPage:0,forcePage:t-1,disableInitialCallback:!0,containerClassName:o.container,pageClassName:o.pageElement,pageLinkClassName:Object(Ye.a)(o.pageLink,o.pageWithBorder),activeClassName:o.defaultCursor,activeLinkClassName:o.activeLink,previousClassName:o.pageElement,previousLinkClassName:o.pageLink,nextClassName:o.pageElement,nextLinkClassName:o.pageLink,disabledClassName:Object(Ye.a)(o.defaultCursor,o.iconOpacity)}))},rt=a(482),ot=a(483),lt=a(485),it=a(484),ct=Object(oe.a)((function(e){return Object(le.a)({media:{height:180}})})),st=function(e){var t=e.title,a=e.url,n=e.openDialog,o=ct();return r.a.createElement(rt.a,{onClick:n},r.a.createElement(ot.a,null,r.a.createElement(it.a,{className:o.media,image:a,title:t}),r.a.createElement(lt.a,null,r.a.createElement(se.a,{variant:"h6"},t))))},ut=Object(oe.a)((function(e){return Object(le.a)({container:{height:"100vh",display:"flex",flexDirection:"column"},toolbar:{borderBottom:"1px solid ".concat(e.palette.divider),padding:e.spacing(2)},grow:{flexGrow:1},gridRoot:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},progress:{margin:e.spacing(2)},fab:{position:"fixed",top:"auto",left:"auto",right:e.spacing(3),bottom:e.spacing(3),margin:0}})})),pt=function(){var e=ut(),t=Object(s.b)(),a=Object(n.useState)(!1),o=Object(re.a)(a,2),l=o[0],i=o[1],c=Object(n.useState)({open:!1,initialValues:ve()}),u=Object(re.a)(c,2),p=u[0],m=u[1],d=Object(s.c)((function(e){return e.page})),g=Object(s.c)((function(e){return e.totalPages})),b=Object(s.c)((function(e){return e.items})),h=Object(s.c)((function(e){return e.loading})),v=Object(s.c)((function(e){return e.error}));return Object(n.useEffect)((function(){t(f(1))}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null),r.a.createElement(fe.a,{maxWidth:"lg",className:e.container},r.a.createElement(de.a,{className:e.toolbar,disableGutters:!0},r.a.createElement(se.a,{variant:"h6",className:e.grow},"Photos Admin Panel")),r.a.createElement(ge.a,{container:!0,className:e.gridRoot,justify:h?"center":"flex-start",spacing:2},h&&r.a.createElement(ce.a,{className:e.progress}),!h&&0===b.length&&r.a.createElement(ge.a,{item:!0,xs:12},r.a.createElement(se.a,null,"There is no items...")),v&&r.a.createElement(ge.a,{item:!0,xs:12},r.a.createElement(se.a,{color:"error"},v)),!h&&b.length>0&&b.map((function(e){return r.a.createElement(ge.a,{key:e.id,item:!0,xs:12,sm:6,md:4},r.a.createElement(He,Object.assign({title:e.title},e.tooltip),r.a.createElement(st,{title:e.title,url:e.url,openDialog:function(){return m({initialValues:e,open:!0})}})))}))),r.a.createElement("div",{className:e.grow}),0!==g&&r.a.createElement(nt,{page:d,pageCount:g,onPageChange:function(e){return t(f(e.selected+1))}})),r.a.createElement(Ge,{open:l,closeDialog:function(){return i(!1)}}),r.a.createElement(Ae,{initialValues:p.initialValues,open:p.open,closeDialog:function(){return m({initialValues:ve(),open:!1})}}),r.a.createElement(ue.a,{className:e.fab,color:"secondary",onClick:function(){return i(!0)}},r.a.createElement(me.a,null)),r.a.createElement(qe,null))},mt=Object(c.a)({typography:{fontFamily:["Muli","sans-serif"].join(",")}}),dt=function(){return r.a.createElement(s.a,{store:ne},r.a.createElement(i.a,{theme:mt},r.a.createElement(pt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(dt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[223,1,2]]]);
//# sourceMappingURL=main.dd97977f.chunk.js.map