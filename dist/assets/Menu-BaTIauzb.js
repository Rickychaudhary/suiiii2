import{r as n,aJ as Ye,F as G,ax as Qe,j as U,D as M,y as ge,z as ye,B as J,E as Pe,G as Q,H as ve,au as Ze}from"./index-1chCkVik.js";import{g as et,u as be,q as tt,t as ot,v as Fe,f as nt,w as rt,o as Z,M as st,P as it,h as _e,j as at,k as ee,i as lt,c as ct}from"./Modal-hu0AyHgC.js";let ke=0;function ut(e){const[t,o]=n.useState(e),m=e||t;return n.useEffect(()=>{t==null&&(ke+=1,o(`mui-${ke}`))},[t]),m}const je=Ye.useId;function At(e){if(je!==void 0){const t=je();return e??t}return ut(e)}function Kt({controlled:e,default:t,name:o,state:m="value"}){const{current:h}=n.useRef(e!==void 0),[y,d]=n.useState(t),f=h?e:y,c=n.useCallback(P=>{h||d(P)},[]);return[f,c]}var a={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),re=Symbol.for("react.provider"),se=Symbol.for("react.context"),ft=Symbol.for("react.server_context"),ie=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),pt=Symbol.for("react.offscreen"),Ae;Ae=Symbol.for("react.module.reference");function D(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xe:switch(e=e.type,e){case te:case ne:case oe:case ae:case le:return e;default:switch(e=e&&e.$$typeof,e){case ft:case se:case ie:case ue:case ce:case re:return e;default:return t}}case Ee:return t}}}a.ContextConsumer=se;a.ContextProvider=re;a.Element=xe;a.ForwardRef=ie;a.Fragment=te;a.Lazy=ue;a.Memo=ce;a.Portal=Ee;a.Profiler=ne;a.StrictMode=oe;a.Suspense=ae;a.SuspenseList=le;a.isAsyncMode=function(){return!1};a.isConcurrentMode=function(){return!1};a.isContextConsumer=function(e){return D(e)===se};a.isContextProvider=function(e){return D(e)===re};a.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xe};a.isForwardRef=function(e){return D(e)===ie};a.isFragment=function(e){return D(e)===te};a.isLazy=function(e){return D(e)===ue};a.isMemo=function(e){return D(e)===ce};a.isPortal=function(e){return D(e)===Ee};a.isProfiler=function(e){return D(e)===ne};a.isStrictMode=function(e){return D(e)===oe};a.isSuspense=function(e){return D(e)===ae};a.isSuspenseList=function(e){return D(e)===le};a.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===te||e===ne||e===oe||e===ae||e===le||e===pt||typeof e=="object"&&e!==null&&(e.$$typeof===ue||e.$$typeof===ce||e.$$typeof===re||e.$$typeof===se||e.$$typeof===ie||e.$$typeof===Ae||e.getModuleId!==void 0)};a.typeOf=D;const dt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function he(e){return`scale(${e}, ${e**2})`}const mt={entering:{opacity:1,transform:he(1)},entered:{opacity:1,transform:"none"}},pe=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Ke=n.forwardRef(function(t,o){const{addEndListener:m,appear:h=!0,children:y,easing:d,in:f,onEnter:c,onEntered:P,onEntering:T,onExit:E,onExited:F,onExiting:S,style:N,timeout:R="auto",TransitionComponent:v=tt}=t,l=G(t,dt),A=et(),r=n.useRef(),i=Qe(),p=n.useRef(null),b=be(p,y.ref,o),s=u=>L=>{if(u){const $=p.current;L===void 0?u($):u($,L)}},_=s(T),z=s((u,L)=>{ot(u);const{duration:$,delay:x,easing:w}=Fe({style:N,timeout:R,easing:d},{mode:"enter"});let W;R==="auto"?(W=i.transitions.getAutoHeightDuration(u.clientHeight),r.current=W):W=$,u.style.transition=[i.transitions.create("opacity",{duration:W,delay:x}),i.transitions.create("transform",{duration:pe?W:W*.666,delay:x,easing:w})].join(","),c&&c(u,L)}),O=s(P),X=s(S),k=s(u=>{const{duration:L,delay:$,easing:x}=Fe({style:N,timeout:R,easing:d},{mode:"exit"});let w;R==="auto"?(w=i.transitions.getAutoHeightDuration(u.clientHeight),r.current=w):w=L,u.style.transition=[i.transitions.create("opacity",{duration:w,delay:$}),i.transitions.create("transform",{duration:pe?w:w*.666,delay:pe?$:$||w*.333,easing:x})].join(","),u.style.opacity=0,u.style.transform=he(.75),E&&E(u)}),H=s(F),V=u=>{R==="auto"&&A.start(r.current||0,u),m&&m(p.current,u)};return U.jsx(v,M({appear:h,in:f,nodeRef:p,onEnter:z,onEntered:O,onEntering:_,onExit:k,onExited:H,onExiting:X,addEndListener:V,timeout:R==="auto"?null:R},l,{children:(u,L)=>n.cloneElement(y,M({style:M({opacity:0,transform:he(.75),visibility:u==="exited"&&!f?"hidden":void 0},mt[u],N,y.props.style),ref:b},L))}))});Ke.muiSupportAuto=!0;const ht=n.createContext({});function gt(e){return ge("MuiList",e)}ye("MuiList",["root","padding","dense","subheader"]);const yt=["children","className","component","dense","disablePadding","subheader"],Pt=e=>{const{classes:t,disablePadding:o,dense:m,subheader:h}=e;return ve({root:["root",!o&&"padding",m&&"dense",h&&"subheader"]},gt,t)},vt=J("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>M({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),bt=n.forwardRef(function(t,o){const m=Pe({props:t,name:"MuiList"}),{children:h,className:y,component:d="ul",dense:f=!1,disablePadding:c=!1,subheader:P}=m,T=G(m,yt),E=n.useMemo(()=>({dense:f}),[f]),F=M({},m,{component:d,dense:f,disablePadding:c}),S=Pt(F);return U.jsx(ht.Provider,{value:E,children:U.jsxs(vt,M({as:d,className:Q(S.root,y),ref:o,ownerState:F},T,{children:[P,h]}))})}),xt=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function de(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function ze(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function Ue(e,t){if(t===void 0)return!0;let o=e.innerText;return o===void 0&&(o=e.textContent),o=o.trim().toLowerCase(),o.length===0?!1:t.repeating?o[0]===t.keys[0]:o.indexOf(t.keys.join(""))===0}function Y(e,t,o,m,h,y){let d=!1,f=h(e,t,t?o:!1);for(;f;){if(f===e.firstChild){if(d)return!1;d=!0}const c=m?!1:f.disabled||f.getAttribute("aria-disabled")==="true";if(!f.hasAttribute("tabindex")||!Ue(f,y)||c)f=h(e,f,o);else return f.focus(),!0}return!1}const Et=n.forwardRef(function(t,o){const{actions:m,autoFocus:h=!1,autoFocusItem:y=!1,children:d,className:f,disabledItemsFocusable:c=!1,disableListWrap:P=!1,onKeyDown:T,variant:E="selectedMenu"}=t,F=G(t,xt),S=n.useRef(null),N=n.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});nt(()=>{h&&S.current.focus()},[h]),n.useImperativeHandle(m,()=>({adjustStyleForScrollbar:(r,{direction:i})=>{const p=!S.current.style.width;if(r.clientHeight<S.current.clientHeight&&p){const b=`${rt(Z(r))}px`;S.current.style[i==="rtl"?"paddingLeft":"paddingRight"]=b,S.current.style.width=`calc(100% + ${b})`}return S.current}}),[]);const R=r=>{const i=S.current,p=r.key,b=Z(i).activeElement;if(p==="ArrowDown")r.preventDefault(),Y(i,b,P,c,de);else if(p==="ArrowUp")r.preventDefault(),Y(i,b,P,c,ze);else if(p==="Home")r.preventDefault(),Y(i,null,P,c,de);else if(p==="End")r.preventDefault(),Y(i,null,P,c,ze);else if(p.length===1){const s=N.current,_=p.toLowerCase(),z=performance.now();s.keys.length>0&&(z-s.lastTime>500?(s.keys=[],s.repeating=!0,s.previousKeyMatched=!0):s.repeating&&_!==s.keys[0]&&(s.repeating=!1)),s.lastTime=z,s.keys.push(_);const O=b&&!s.repeating&&Ue(b,s);s.previousKeyMatched&&(O||Y(i,b,!1,c,de,s))?r.preventDefault():s.previousKeyMatched=!1}T&&T(r)},v=be(S,o);let l=-1;n.Children.forEach(d,(r,i)=>{if(!n.isValidElement(r)){l===i&&(l+=1,l>=d.length&&(l=-1));return}r.props.disabled||(E==="selectedMenu"&&r.props.selected||l===-1)&&(l=i),l===i&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(l+=1,l>=d.length&&(l=-1))});const A=n.Children.map(d,(r,i)=>{if(i===l){const p={};return y&&(p.autoFocus=!0),r.props.tabIndex===void 0&&E==="selectedMenu"&&(p.tabIndex=0),n.cloneElement(r,p)}return r});return U.jsx(bt,M({role:"menu",ref:v,className:f,onKeyDown:R,tabIndex:h?0:-1},F,{children:A}))});function St(e){return ge("MuiPopover",e)}ye("MuiPopover",["root","paper"]);const wt=["onEntering"],Mt=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Rt=["slotProps"];function Oe(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.height/2:t==="bottom"&&(o=e.height),o}function He(e,t){let o=0;return typeof t=="number"?o=t:t==="center"?o=e.width/2:t==="right"&&(o=e.width),o}function Ne(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function me(e){return typeof e=="function"?e():e}const Ct=e=>{const{classes:t}=e;return ve({root:["root"],paper:["paper"]},St,t)},Tt=J(st,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),We=J(it,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Lt=n.forwardRef(function(t,o){var m,h,y;const d=Pe({props:t,name:"MuiPopover"}),{action:f,anchorEl:c,anchorOrigin:P={vertical:"top",horizontal:"left"},anchorPosition:T,anchorReference:E="anchorEl",children:F,className:S,container:N,elevation:R=8,marginThreshold:v=16,open:l,PaperProps:A={},slots:r,slotProps:i,transformOrigin:p={vertical:"top",horizontal:"left"},TransitionComponent:b=Ke,transitionDuration:s="auto",TransitionProps:{onEntering:_}={},disableScrollLock:z=!1}=d,O=G(d.TransitionProps,wt),X=G(d,Mt),k=(m=i==null?void 0:i.paper)!=null?m:A,H=n.useRef(),V=be(H,k.ref),u=M({},d,{anchorOrigin:P,anchorReference:E,elevation:R,marginThreshold:v,externalPaperSlotProps:k,transformOrigin:p,TransitionComponent:b,transitionDuration:s,TransitionProps:O}),L=Ct(u),$=n.useCallback(()=>{if(E==="anchorPosition")return T;const g=me(c),I=(g&&g.nodeType===1?g:Z(H.current).body).getBoundingClientRect();return{top:I.top+Oe(I,P.vertical),left:I.left+He(I,P.horizontal)}},[c,P.horizontal,P.vertical,T,E]),x=n.useCallback(g=>({vertical:Oe(g,p.vertical),horizontal:He(g,p.horizontal)}),[p.horizontal,p.vertical]),w=n.useCallback(g=>{const C={width:g.offsetWidth,height:g.offsetHeight},I=x(C);if(E==="none")return{top:null,left:null,transformOrigin:Ne(I)};const Ce=$();let B=Ce.top-I.vertical,q=Ce.left-I.horizontal;const Te=B+C.height,Le=q+C.width,$e=_e(me(c)),Ie=$e.innerHeight-v,De=$e.innerWidth-v;if(v!==null&&B<v){const j=B-v;B-=j,I.vertical+=j}else if(v!==null&&Te>Ie){const j=Te-Ie;B-=j,I.vertical+=j}if(v!==null&&q<v){const j=q-v;q-=j,I.horizontal+=j}else if(Le>De){const j=Le-De;q-=j,I.horizontal+=j}return{top:`${Math.round(B)}px`,left:`${Math.round(q)}px`,transformOrigin:Ne(I)}},[c,E,$,x,v]),[W,Se]=n.useState(l),K=n.useCallback(()=>{const g=H.current;if(!g)return;const C=w(g);C.top!==null&&(g.style.top=C.top),C.left!==null&&(g.style.left=C.left),g.style.transformOrigin=C.transformOrigin,Se(!0)},[w]);n.useEffect(()=>(z&&window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)),[c,z,K]);const Ge=(g,C)=>{_&&_(g,C),K()},Ve=()=>{Se(!1)};n.useEffect(()=>{l&&K()}),n.useImperativeHandle(f,()=>l?{updatePosition:()=>{K()}}:null,[l,K]),n.useEffect(()=>{if(!l)return;const g=at(()=>{K()}),C=_e(c);return C.addEventListener("resize",g),()=>{g.clear(),C.removeEventListener("resize",g)}},[c,l,K]);let we=s;s==="auto"&&!b.muiSupportAuto&&(we=void 0);const Be=N||(c?Z(me(c)).body:void 0),fe=(h=r==null?void 0:r.root)!=null?h:Tt,Me=(y=r==null?void 0:r.paper)!=null?y:We,qe=ee({elementType:Me,externalSlotProps:M({},k,{style:W?k.style:M({},k.style,{opacity:0})}),additionalProps:{elevation:R,ref:V},ownerState:u,className:Q(L.paper,k==null?void 0:k.className)}),Re=ee({elementType:fe,externalSlotProps:(i==null?void 0:i.root)||{},externalForwardedProps:X,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:Be,open:l},ownerState:u,className:Q(L.root,S)}),{slotProps:Je}=Re,Xe=G(Re,Rt);return U.jsx(fe,M({},Xe,!lt(fe)&&{slotProps:Je,disableScrollLock:z},{children:U.jsx(b,M({appear:!0,in:l,onEntering:Ge,onExited:Ve,timeout:we},O,{children:U.jsx(Me,M({},qe,{children:F}))}))}))});function $t(e){return ge("MuiMenu",e)}ye("MuiMenu",["root","paper","list"]);const It=["onEntering"],Dt=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Ft={vertical:"top",horizontal:"right"},_t={vertical:"top",horizontal:"left"},kt=e=>{const{classes:t}=e;return ve({root:["root"],paper:["paper"],list:["list"]},$t,t)},jt=J(Lt,{shouldForwardProp:e=>Ze(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),zt=J(We,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Ot=J(Et,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),Ut=n.forwardRef(function(t,o){var m,h;const y=Pe({props:t,name:"MuiMenu"}),{autoFocus:d=!0,children:f,className:c,disableAutoFocusItem:P=!1,MenuListProps:T={},onClose:E,open:F,PaperProps:S={},PopoverClasses:N,transitionDuration:R="auto",TransitionProps:{onEntering:v}={},variant:l="selectedMenu",slots:A={},slotProps:r={}}=y,i=G(y.TransitionProps,It),p=G(y,Dt),b=ct(),s=M({},y,{autoFocus:d,disableAutoFocusItem:P,MenuListProps:T,onEntering:v,PaperProps:S,transitionDuration:R,TransitionProps:i,variant:l}),_=kt(s),z=d&&!P&&F,O=n.useRef(null),X=(x,w)=>{O.current&&O.current.adjustStyleForScrollbar(x,{direction:b?"rtl":"ltr"}),v&&v(x,w)},k=x=>{x.key==="Tab"&&(x.preventDefault(),E&&E(x,"tabKeyDown"))};let H=-1;n.Children.map(f,(x,w)=>{n.isValidElement(x)&&(x.props.disabled||(l==="selectedMenu"&&x.props.selected||H===-1)&&(H=w))});const V=(m=A.paper)!=null?m:zt,u=(h=r.paper)!=null?h:S,L=ee({elementType:A.root,externalSlotProps:r.root,ownerState:s,className:[_.root,c]}),$=ee({elementType:V,externalSlotProps:u,ownerState:s,className:_.paper});return U.jsx(jt,M({onClose:E,anchorOrigin:{vertical:"bottom",horizontal:b?"right":"left"},transformOrigin:b?Ft:_t,slots:{paper:V,root:A.root},slotProps:{root:L,paper:$},open:F,ref:o,transitionDuration:R,TransitionProps:M({onEntering:X},i),ownerState:s},p,{classes:N,children:U.jsx(Ot,M({onKeyDown:k,actions:O,autoFocus:d&&(H===-1||P),autoFocusItem:z,variant:l},T,{className:Q(_.list,T.className),children:f}))}))});export{Ke as G,ht as L,Ut as M,Et as a,Kt as b,bt as c,At as u};
