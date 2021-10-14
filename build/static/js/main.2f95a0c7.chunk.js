(this.webpackJsonprewards=this.webpackJsonprewards||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),s=n(11),i=n(6),l=n(21),o=n(97),u=n(14),d=n(7),j=Object(l.b)({name:"users",initialState:{profile:null,data:[],loading:!1,error:null},reducers:{getUsers:function(e){e.loading=!0},setUsers:function(e,t){e.data=t.payload;var n=Object(d.a)(t.payload,1);e.profile=n[0],e.loading=!1,e.error=null},getUsersFailed:function(e,t){e.loading=!1,e.error=t.payload}}}),b=j.actions,m=b.getUsers,f=b.setUsers,O=b.getUsersFailed,h=j.reducer,p=Object(l.b)({name:"rewards",initialState:{all:[],my:[],myTotal:0,giveTotal:0,loading:!0,error:null},reducers:{getRewards:function(e){e.loading=!0},setRewards:function(e,t){e.all=t.payload.all,e.my=t.payload.my,e.loading=!1},getRewardsFailed:function(e,t){e.loading=!1,e.error=t.payload},createRewards:function(e,t){e.loading=!0},updateRewards:function(e,t){e.all=[].concat(Object(i.a)(e.all),[t.payload]),e.loading=!1},updateMyRewards:function(e,t){e.my=[].concat(Object(i.a)(e.my),[t.payload]),e.loading=!1}}}),v=p.actions,x=v.getRewards,g=v.setRewards,_=v.getRewardsFailed,w=v.createRewards,y=v.updateRewards,N=v.updateMyRewards,C=p.reducer,k=Object(u.b)({users:h,rewards:C}),R=n(12),S=n.n(R),F=n(8),M=n(90),L=n(91),U=n.n(L),B=function(){var e=Object(M.a)(S.a.mark((function e(t){var n,a,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=t.data,e.next=3,U()({url:n,method:a,data:r});case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=B,E=n(22),P=Object(E.a)({},{baseApiUrl:"https://jsonplaceholder.typicode.com/users"}),q=S.a.mark(z);function z(){var e;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(F.a)((function(){return T({url:P.baseApiUrl})}));case 3:return e=t.sent,t.next=6,Object(F.b)(f(e.data));case 6:return t.next=8,Object(F.b)(x());case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(F.b)(O(t.t0));case 14:case"end":return t.stop()}}),q,null,[[0,10]])}var $=n(10),A=function(e){return e.users},D=Object($.a)(A,(function(e){return e.profile})),G=Object($.a)(A,(function(e){return e.data})),J=(Object($.a)(A,(function(e){return e.loading})),Object($.a)(A,(function(e){return e.error})),[{id:1,user:{id:1,name:"Leanne Graham"},userBy:{id:2,name:"Ervin Howell"},reward:100,time:"4 hrs ago",message:"Big thanks for your help in helping on the outage today!!!"},{id:2,user:{id:3,name:"Clementine Bauch"},userBy:{id:4,name:"Patricia Lebsack"},reward:150,time:"Feb 1, 2021",message:"Thanks for your help in creating the product overview deck. Your help to show cases those scenarios really helped in closing the loop on the story."}]),V=S.a.mark(H),Y=S.a.mark(I);function H(){var e,t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(F.c)(D);case 3:return e=n.sent,t=J.filter((function(t){return t.user.id===e.id})),n.next=7,Object(F.b)(g({all:J,my:t}));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(F.b)(_(n.t0));case 13:case"end":return n.stop()}}),V,null,[[0,9]])}function I(e){var t,n,a,r,c;return S.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,t=e.payload,s.next=4,Object(F.c)(D);case 4:return n=s.sent,a=Date.now(),r=(new Date).toLocaleString(),c=Object(E.a)(Object(E.a)({},t),{},{reward:+t.reward,id:a,time:r,userBy:n}),s.next=10,Object(F.b)(y(c));case 10:if(t.user.id!==n.id){s.next=13;break}return s.next=13,Object(F.b)(N(c));case 13:s.next=19;break;case 15:return s.prev=15,s.t0=s.catch(0),s.next=19,Object(F.b)(_(s.t0));case 19:case"end":return s.stop()}}),Y,null,[[0,15]])}var W=S.a.mark(K);function K(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(F.d)(m.type,z);case 2:return e.next=4,Object(F.d)(x.type,H);case 4:return e.next=6,Object(F.d)(w.type,I);case 6:case"end":return e.stop()}}),W)}var Q=Object(o.a)(),X=Object(l.a)({reducer:k,middleware:[].concat(Object(i.a)(Object(l.c)({thunk:!1})),[Q])});Q.run(K);var Z,ee=X,te=function(){var e=a.useState(!1),t=Object(d.a)(e,2),n=t[0],r=t[1];return{open:n,handleOpenModal:function(){return r(!0)},handleCloseModal:function(){return r(!1)}}},ne=(n(66),n(27)),ae=n(2),re=function(e){var t=e.tabsList,n=e.changeTab,a=e.activeTab;return Object(ae.jsx)(ae.Fragment,{children:t.map((function(e){return Object(ae.jsx)("button",{type:"button",className:Object(ne.a)("tab_button",{tab_button__active:e===a}),onClick:function(){return n(e)},children:e},e)}))})},ce=function(e){var t,n,a=e.children,c=r.a.useState(null===(t=a[0])||void 0===t?void 0:t.props.label),s=Object(d.a)(c,2),i=s[0],l=s[1],o=[];return Object(ae.jsxs)("div",{children:[r.a.Children.map(a,(function(e){o.push(e.props.label),e.props.label===i&&(n=e.props.children)})),Object(ae.jsx)(re,{activeTab:i,tabsList:o,changeTab:function(e){l(e)}}),Object(ae.jsx)("div",{className:"tab_content",children:n})]})},se=function(e){e.label;var t=e.children;return Object(ae.jsx)(ae.Fragment,{children:t})},ie=function(e){return e.rewards},le=function(e){return e.reduce((function(e,t){return e+ +t.reward}),0)},oe=Object($.a)(ie,(function(e){return e.all})),ue=Object($.a)(ie,(function(e){return e.my})),de=Object($.a)(ie,(function(e){return e.loading})),je=Object($.a)(ie,(function(e){return le(e.my)})),be=Object($.a)(ie,D,(function(e,t){var n=e.all.filter((function(e){return e.userBy.id===t.id}));return le(n)})),me=(n(126),n.p+"static/media/user.137d9643.svg");!function(e){e.s="s",e.sm="sm"}(Z||(Z={}));var fe={size:Z.sm},Oe=function(e){var t=e.size;return Object(ae.jsx)("div",{className:Object(ne.a)("avatar","avatar__".concat(t)),children:Object(ae.jsx)("img",{src:me,alt:"avatar"})})};Oe.defaultProps=fe;var he=Oe,pe=(n(127),function(e){var t=e.title,n=e.children;return Object(ae.jsxs)("div",{className:"panel",children:[Object(ae.jsx)("h5",{className:"panel__title",children:t}),Object(ae.jsx)("p",{className:"panel__desc",children:n})]})});pe.defaultProps={title:"No data found",children:""};var ve=pe,xe=(n(128),function(e){var t=e.data,n=e.onClick;return Object(ae.jsxs)("div",{className:"list",children:[Object(ae.jsx)("button",{type:"button",className:"list_add",onClick:n,children:"+"}),t.length?Object(ae.jsx)("div",{className:"list__scrollable",children:t.map((function(e){var t,n;return Object(ae.jsxs)("div",{className:"list_elem",children:[Object(ae.jsx)(he,{size:Z.s}),Object(ae.jsxs)("div",{className:"list_elem__details",children:[Object(ae.jsxs)("div",{className:"list_elem__info",children:[Object(ae.jsxs)("span",{className:"list_elem__name",children:[null===(t=e.user)||void 0===t?void 0:t.name," rewarded by ",null===(n=e.userBy)||void 0===n?void 0:n.name]}),Object(ae.jsx)("span",{className:"list_elem__time",children:e.time})]}),Object(ae.jsx)("p",{className:"list_elem__description",children:e.message})]})]},e.id)}))}):Object(ae.jsx)(ve,{children:"You can add new reward."})]})}),ge=function(e){var t=e.handleOpenModal,n=Object(s.c)(oe),a=Object(s.c)(ue);return Object(ae.jsxs)(ce,{children:[Object(ae.jsx)(se,{label:"Feed",children:Object(ae.jsx)(xe,{data:n,onClick:t})}),Object(ae.jsx)(se,{label:"My Rewards",children:Object(ae.jsx)(xe,{data:a,onClick:t})})]})},_e=(n(129),function(){var e=Object(s.c)(D),t=Object(s.c)(je),n=Object(s.c)(be);return Object(ae.jsxs)("div",{className:"header",children:[Object(ae.jsxs)("div",{className:"header_profile",children:[Object(ae.jsx)(he,{}),Object(ae.jsx)("span",{children:null===e||void 0===e?void 0:e.name})]}),Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsxs)("div",{className:"header_element",children:["My Rewards",Object(ae.jsxs)("div",{className:"header_element__value",children:[t,"$"]})]}),Object(ae.jsxs)("div",{className:"header_element",children:["Give",Object(ae.jsxs)("div",{className:"header_element__value",children:[n,"$"]})]})]})]})}),we=n(46),ye=function(e,t){Object(a.useEffect)((function(){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])},Ne=(n(130),function(e){var t=e.children,n=e.isOpen,a=e.onClose;if(!n)return null;var s=r.a.useRef(null);return ye(s,(function(){return a()})),Object(c.createPortal)(Object(ae.jsxs)("div",{className:"modal",ref:s,children:[Object(ae.jsx)("button",{type:"button",onClick:a,className:"modal__close_btn",children:"+"}),t]}),document.body)}),Ce=(n(131),function(e){var t=a.useState(""),n=Object(d.a)(t,2),r=n[0],c=n[1];return Object(ae.jsx)("input",Object(E.a)(Object(E.a)({autoComplete:"off",value:r,className:"input"},e),{},{onChange:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){e.onChange?e.onChange(t):function(e){var t=e.target.value;c(t)}(t)}))}))});Ce.defaultProps={type:"text",name:"",value:"",placeholder:"",onChange:function(){},onFocus:function(){}};var ke=Ce;n(132);var Re=function(e){var t=a.useRef(null),n=e.data,r=e.value,c=e.name,s=e.onChange,i=a.useState(null===r||void 0===r?void 0:r.name),l=Object(d.a)(i,2),o=l[0],u=l[1],j=a.useState(n),b=Object(d.a)(j,2),m=b[0],f=b[1],O=a.useState(!1),h=Object(d.a)(O,2),p=h[0],v=h[1];return ye(t,(function(){return v(!1)})),Object(ae.jsxs)("div",{className:"suggestions",children:[Object(ae.jsx)(ke,{name:c,placeholder:"Name Surname",value:o,onChange:function(e){var t=e.target.value;u(t);var a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));f(a),v(!0)},onFocus:function(){v(!0)}}),p&&Object(ae.jsx)("ul",{className:"suggestions_list",ref:t,children:m.map((function(e,t){return Object(ae.jsx)("li",{className:Object(ne.a)("suggestions_list__elem"),onClick:function(){return function(e){s(m[e]),u(m[e].name),v(!1)}(t)},children:e.name},e.id)}))})]})},Se=n(33),Fe="Should be less that ".concat(10," symbols"),Me=Se.a().shape({user:Se.a().shape({name:Se.b()}).required("User is required").nullable(),reward:Se.b().max(10,Fe).required("Reward is required")}),Le=(n(231),{user:null,reward:"",message:""}),Ue=function(e){var t=e.open,n=e.handleCloseModal,a=Object(s.b)(),r=Object(s.c)(G);return Object(ae.jsx)(Ne,{isOpen:t,onClose:n,children:Object(ae.jsx)(we.b,{initialValues:Le,validationSchema:Me,onSubmit:function(e){return function(e){a(w(e)),n()}(e)},children:function(e){var t=e.values,n=e.setFieldValue,a=e.handleChange,c=e.handleSubmit;return Object(ae.jsxs)("form",{onSubmit:c,className:"modal_form",children:[Object(ae.jsxs)("div",{className:"modal_field",children:[Object(ae.jsx)("span",{className:"modal_field__label",children:"To"}),Object(ae.jsx)(Re,{name:"user",data:r,value:t.user,onChange:function(e){return n("user",e)}}),Object(ae.jsx)(we.a,{name:"user",component:"span",className:"modal_field__error"})]}),Object(ae.jsxs)("div",{className:"modal_field",children:[Object(ae.jsx)("span",{className:"modal_field__label",children:"Reward"}),Object(ae.jsx)(ke,{name:"reward",type:"number",value:t.reward,placeholder:"$",onChange:a}),Object(ae.jsx)(we.a,{name:"reward",component:"span",className:"modal_field__error"})]}),Object(ae.jsxs)("div",{className:"modal_field",children:[Object(ae.jsx)("span",{className:"modal_field__label",children:"Why?"}),Object(ae.jsx)("textarea",{name:"message",rows:4,value:t.message,className:"input",onChange:a})]}),Object(ae.jsx)("button",{type:"submit",className:"modal__btn",children:"Reward"})]})}})})},Be=(n(232),function(){return Object(ae.jsxs)("div",{className:"loading",children:[Object(ae.jsx)("div",{}),Object(ae.jsx)("div",{})]})}),Te=(n(233),function(){var e=Object(s.b)();a.useEffect((function(){e(m())}),[e]);var t=te(),n=t.open,r=t.handleOpenModal,c=t.handleCloseModal,i=Object(s.c)(de);return Object(ae.jsx)(ae.Fragment,{children:i?Object(ae.jsx)(Be,{}):Object(ae.jsxs)("div",{className:"main",children:[Object(ae.jsx)(_e,{}),Object(ae.jsx)(ge,{handleOpenModal:r}),Object(ae.jsx)(Ue,{open:n,handleCloseModal:c})]})})});Object(c.render)(Object(ae.jsx)(s.a,{store:ee,children:Object(ae.jsx)(Te,{})}),document.getElementById("root"))},66:function(e,t,n){}},[[234,1,2]]]);
//# sourceMappingURL=main.2f95a0c7.chunk.js.map