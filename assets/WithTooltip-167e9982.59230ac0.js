import{a as R,_ as Vt,a0 as Pe,bg as ue,bh as pe,Z as It,a2 as $e,bi as L,a5 as Yt,bj as Y,r as Xt,j as _e,bk as zt,bl as ht,bm as Te,bn as gt,bo as j,bp as D,bq as W,br as U,bs as je,bt as ce,bu as et,bv as We,bw as qt,bx as mt,by as Gt}from"./iframe.2af18646.js";import"./es.regexp.flags.77bad2b3.js";var tt,rt;function Zt(t,e){return _t(t)||Qt(t,e)||Kt(t,e)||Jt()}function Jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(t,e){if(!!t){if(typeof t=="string")return ot(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ot(t,e)}}function ot(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function Qt(t,e){var o=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var r=[],n=!0,i=!1,s,a;try{for(o=o.call(t);!(n=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));n=!0);}catch(l){i=!0,a=l}finally{try{!n&&o.return!=null&&o.return()}finally{if(i)throw a}}return r}}function _t(t){if(Array.isArray(t))return t}function yt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Re(t){return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Re(t)}function I(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function oe(t){var e=F(t).Element;return t instanceof e||t instanceof Element}function $(t){var e=F(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function bt(t){if(typeof ShadowRoot>"u")return!1;var e=F(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function er(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!$(i)||!I(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function tr(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!$(n)||!I(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var rr={name:"applyStyles",enabled:!0,phase:"write",fn:er,effect:tr,requires:["computeStyles"]};function V(t){return t.split("-")[0]}var ee=Math.max,Ce=Math.min,ne=Math.round;function ie(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if($(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ne(o.width)/s||1),i>0&&(n=ne(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Ue(t){var e=ie(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function wt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&bt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function X(t){return F(t).getComputedStyle(t)}function or(t){return["table","td","th"].indexOf(I(t))>=0}function J(t){return((oe(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ee(t){return I(t)==="html"?t:t.assignedSlot||t.parentNode||(bt(t)?t.host:null)||J(t)}function nt(t){return!$(t)||X(t).position==="fixed"?null:t.offsetParent}function nr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&$(t)){var r=X(t);if(r.position==="fixed")return null}for(var n=Ee(t);$(n)&&["html","body"].indexOf(I(n))<0;){var i=X(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function he(t){for(var e=F(t),o=nt(t);o&&or(o)&&X(o).position==="static";)o=nt(o);return o&&(I(o)==="html"||I(o)==="body"&&X(o).position==="static")?e:o||nr(t)||e}function Fe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function fe(t,e,o){return ee(t,Ce(e,o))}function ir(t,e,o){var r=fe(t,e,o);return r>o?o:r}function Ot(){return{top:0,right:0,bottom:0,left:0}}function xt(t){return Object.assign({},Ot(),t)}function Tt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var ar=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,xt(typeof e!="number"?e:Tt(e,We))};function sr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=V(o.placement),l=Fe(a),u=[D,U].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!s)){var d=ar(n.padding,o),m=Ue(i),p=l==="y"?j:D,v=l==="y"?W:U,h=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],g=s[l]-o.rects.reference[l],O=he(i),T=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=h/2-g/2,f=d[p],b=T-m[c]-d[v],w=T/2-m[c]/2+y,x=fe(f,w,b),C=l;o.modifiersData[r]=(e={},e[C]=x,e.centerOffset=x-w,e)}}function lr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!wt(e.elements.popper,n)||(e.elements.arrow=n))}var cr={name:"arrow",enabled:!0,phase:"main",fn:sr,effect:lr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(t){return t.split("-")[1]}var ur={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pr(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ne(e*n)/n||0,y:ne(o*n)/n||0}}function it(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof c=="function"?c({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),T=s.hasOwnProperty("y"),y=D,f=j,b=window;if(u){var w=he(o),x="clientHeight",C="clientWidth";if(w===F(o)&&(w=J(o),X(w).position!=="static"&&a==="absolute"&&(x="scrollHeight",C="scrollWidth")),w=w,n===j||(n===D||n===U)&&i===je){f=W;var S=d&&b.visualViewport?b.visualViewport.height:w[x];h-=S-r.height,h*=l?1:-1}if(n===D||(n===j||n===W)&&i===je){y=U;var E=d&&b.visualViewport?b.visualViewport.width:w[C];p-=E-r.width,p*=l?1:-1}}var P=Object.assign({position:a},u&&ur),B=c===!0?pr({x:p,y:h}):{x:p,y:h};if(p=B.x,h=B.y,l){var A;return Object.assign({},P,(A={},A[f]=T?"0":"",A[y]=O?"0":"",A.transform=(b.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A))}return Object.assign({},P,(e={},e[f]=T?h+"px":"",e[y]=O?p+"px":"",e.transform="",e))}function fr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,u={placement:V(e.placement),variation:ae(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,it(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,it(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var dr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:fr,data:{}},we={passive:!0};function vr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=F(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",o.update,we)}),a&&l.addEventListener("resize",o.update,we),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",o.update,we)}),a&&l.removeEventListener("resize",o.update,we)}}var hr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vr,data:{}},gr={left:"right",right:"left",bottom:"top",top:"bottom"};function Oe(t){return t.replace(/left|right|bottom|top/g,function(e){return gr[e]})}var mr={start:"end",end:"start"};function at(t){return t.replace(/start|end/g,function(e){return mr[e]})}function Ne(t){var e=F(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ve(t){return ie(J(t)).left+Ne(t).scrollLeft}function yr(t){var e=F(t),o=J(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ve(t),y:a}}function br(t){var e,o=J(t),r=Ne(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=ee(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=ee(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ve(t),l=-r.scrollTop;return X(n||o).direction==="rtl"&&(a+=ee(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Ie(t){var e=X(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Rt(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:$(t)&&Ie(t)?t:Rt(Ee(t))}function de(t,e){var o;e===void 0&&(e=[]);var r=Rt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=F(r),s=n?[i].concat(i.visualViewport||[],Ie(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(de(Ee(s)))}function De(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function wr(t){var e=ie(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function st(t,e){return e===mt?De(yr(t)):oe(e)?wr(e):De(br(J(t)))}function Or(t){var e=de(Ee(t)),o=["absolute","fixed"].indexOf(X(t).position)>=0,r=o&&$(t)?he(t):t;return oe(r)?e.filter(function(n){return oe(n)&&wt(n,r)&&I(n)!=="body"}):[]}function xr(t,e,o){var r=e==="clippingParents"?Or(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var u=st(t,l);return a.top=ee(u.top,a.top),a.right=Ce(u.right,a.right),a.bottom=Ce(u.bottom,a.bottom),a.left=ee(u.left,a.left),a},st(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ct(t){var e=t.reference,o=t.element,r=t.placement,n=r?V(r):null,i=r?ae(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case j:l={x:s,y:e.y-o.height};break;case W:l={x:s,y:e.y+e.height};break;case U:l={x:e.x+e.width,y:a};break;case D:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var u=n?Fe(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case Te:l[u]=l[u]-(e[c]/2-o[c]/2);break;case je:l[u]=l[u]+(e[c]/2-o[c]/2);break}}return l}function ve(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?Gt:i,a=o.rootBoundary,l=a===void 0?mt:a,u=o.elementContext,c=u===void 0?ce:u,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=xt(typeof v!="number"?v:Tt(v,We)),g=c===ce?qt:ce,O=t.rects.popper,T=t.elements[m?g:c],y=xr(oe(T)?T:T.contextElement||J(t.elements.popper),s,l),f=ie(t.elements.reference),b=Ct({reference:f,element:O,strategy:"absolute",placement:n}),w=De(Object.assign({},O,b)),x=c===ce?w:f,C={top:y.top-x.top+h.top,bottom:x.bottom-y.bottom+h.bottom,left:y.left-x.left+h.left,right:x.right-y.right+h.right},S=t.modifiersData.offset;if(c===ce&&S){var E=S[n];Object.keys(C).forEach(function(P){var B=[U,W].indexOf(P)>=0?1:-1,A=[j,W].indexOf(P)>=0?"y":"x";C[P]+=E[A]*B})}return C}function Tr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,u=l===void 0?gt:l,c=ae(r),d=c?a?et:et.filter(function(v){return ae(v)===c}):We,m=d.filter(function(v){return u.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=ve(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[V(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function Rr(t){if(V(t)===ht)return[];var e=Oe(t);return[at(t),e,at(e)]}function Cr(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,u=o.padding,c=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=V(g),T=O===g,y=l||(T||!v?[Oe(g)]:Rr(g)),f=[g].concat(y).reduce(function(re,G){return re.concat(V(G)===ht?Tr(e,{placement:G,boundary:c,rootBoundary:d,padding:u,flipVariations:v,allowedAutoPlacements:h}):G)},[]),b=e.rects.reference,w=e.rects.popper,x=new Map,C=!0,S=f[0],E=0;E<f.length;E++){var P=f[E],B=V(P),A=ae(P)===Te,z=[j,W].indexOf(B)>=0,q=z?"width":"height",k=ve(e,{placement:P,boundary:c,rootBoundary:d,altBoundary:m,padding:u}),M=z?A?U:D:A?W:j;b[q]>w[q]&&(M=Oe(M));var te=Oe(M),K=[];if(i&&K.push(k[B]<=0),a&&K.push(k[M]<=0,k[te]<=0),K.every(function(re){return re})){S=P,C=!1;break}x.set(P,K)}if(C)for(var ge=v?3:1,Se=function(G){var le=f.find(function(ye){var Q=x.get(ye);if(Q)return Q.slice(0,G).every(function(Ae){return Ae})});if(le)return S=le,"break"},se=ge;se>0;se--){var me=Se(se);if(me==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}var Pr={name:"flip",enabled:!0,phase:"main",fn:Cr,requiresIfExists:["offset"],data:{_skip:!1}};function lt(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function ct(t){return[j,U,W,D].some(function(e){return t[e]>=0})}function Er(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=ve(e,{elementContext:"reference"}),a=ve(e,{altBoundary:!0}),l=lt(s,r),u=lt(a,n,i),c=ct(l),d=ct(u);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var Sr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Er};function Ar(t,e,o){var r=V(t),n=[D,j].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[D,U].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function kr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=gt.reduce(function(c,d){return c[d]=Ar(d,e.rects,i),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}var Br={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:kr};function Mr(t){var e=t.state,o=t.name;e.modifiersData[o]=Ct({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var jr={name:"popperOffsets",enabled:!0,phase:"read",fn:Mr,data:{}};function Dr(t){return t==="x"?"y":"x"}function Hr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,u=o.rootBoundary,c=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=ve(e,{boundary:l,rootBoundary:u,padding:d,altBoundary:c}),O=V(e.placement),T=ae(e.placement),y=!T,f=Fe(O),b=Dr(f),w=e.modifiersData.popperOffsets,x=e.rects.reference,C=e.rects.popper,S=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,E=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,B={x:0,y:0};if(!!w){if(i){var A,z=f==="y"?j:D,q=f==="y"?W:U,k=f==="y"?"height":"width",M=w[f],te=M+g[z],K=M-g[q],ge=p?-C[k]/2:0,Se=T===Te?x[k]:C[k],se=T===Te?-C[k]:-x[k],me=e.elements.arrow,re=p&&me?Ue(me):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ot(),le=G[z],ye=G[q],Q=fe(0,x[k],re[k]),Ae=y?x[k]/2-ge-Q-le-E.mainAxis:Se-Q-le-E.mainAxis,Lt=y?-x[k]/2+ge+Q+ye+E.mainAxis:se+Q+ye+E.mainAxis,ke=e.elements.arrow&&he(e.elements.arrow),$t=ke?f==="y"?ke.clientTop||0:ke.clientLeft||0:0,Ye=(A=P==null?void 0:P[f])!=null?A:0,Wt=M+Ae-Ye-$t,Ut=M+Lt-Ye,Xe=fe(p?Ce(te,Wt):te,M,p?ee(K,Ut):K);w[f]=Xe,B[f]=Xe-M}if(a){var ze,Ft=f==="x"?j:D,Nt=f==="x"?W:U,_=w[b],be=b==="y"?"height":"width",qe=_+g[Ft],Ge=_-g[Nt],Be=[j,D].indexOf(O)!==-1,Ze=(ze=P==null?void 0:P[b])!=null?ze:0,Je=Be?qe:_-x[be]-C[be]-Ze+E.altAxis,Ke=Be?_+x[be]+C[be]-Ze-E.altAxis:Ge,Qe=p&&Be?ir(Je,_,Ke):fe(p?Je:qe,_,p?Ke:Ge);w[b]=Qe,B[b]=Qe-_}e.modifiersData[r]=B}}var Lr={name:"preventOverflow",enabled:!0,phase:"main",fn:Hr,requiresIfExists:["offset"]};function $r(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Wr(t){return t===F(t)||!$(t)?Ne(t):$r(t)}function Ur(t){var e=t.getBoundingClientRect(),o=ne(e.width)/t.offsetWidth||1,r=ne(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Fr(t,e,o){o===void 0&&(o=!1);var r=$(e),n=$(e)&&Ur(e),i=J(e),s=ie(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((I(e)!=="body"||Ie(i))&&(a=Wr(e)),$(e)?(l=ie(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Ve(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Nr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Vr(t){var e=Nr(t);return zt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function Ir(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Yr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var ut={placement:"bottom",modifiers:[],strategy:"absolute"};function pt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Xr(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?ut:n;return function(a,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},ut,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:c,setOptions:function(O){var T=typeof O=="function"?O(c.options):O;h(),c.options=Object.assign({},i,c.options,T),c.scrollParents={reference:oe(a)?de(a):a.contextElement?de(a.contextElement):[],popper:de(l)};var y=Vr(Yr([].concat(r,c.options.modifiers)));return c.orderedModifiers=y.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=c.elements,T=O.reference,y=O.popper;if(!!pt(T,y)){c.rects={reference:Fr(T,he(y),c.options.strategy==="fixed"),popper:Ue(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(E){return c.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<c.orderedModifiers.length;f++){if(c.reset===!0){c.reset=!1,f=-1;continue}var b=c.orderedModifiers[f],w=b.fn,x=b.options,C=x===void 0?{}:x,S=b.name;typeof w=="function"&&(c=w({state:c,options:C,name:S,instance:p})||c)}}}},update:Ir(function(){return new Promise(function(g){p.forceUpdate(),g(c)})}),destroy:function(){h(),m=!0}};if(!pt(a,l))return p;p.setOptions(u).then(function(g){!m&&u.onFirstUpdate&&u.onFirstUpdate(g)});function v(){c.orderedModifiers.forEach(function(g){var O=g.name,T=g.options,y=T===void 0?{}:T,f=g.effect;if(typeof f=="function"){var b=f({state:c,name:O,instance:p,options:y}),w=function(){};d.push(b||w)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var zr=[hr,jr,dr,rr,Br,Pr,Lr,cr,Sr],qr=Xr({defaultModifiers:zr});function He(t,e){return He=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},He(t,e)}function Pt(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,He(t,e)}var Et=R.exports.createContext(),St=R.exports.createContext();function Gr(t){var e=t.children,o=R.exports.useState(null),r=o[0],n=o[1],i=R.exports.useRef(!1);R.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=R.exports.useCallback(function(a){i.current||n(a)},[]);return _e(Et.Provider,{value:r,children:_e(St.Provider,{value:s,children:e})})}var At=function(e){return Array.isArray(e)?e[0]:e},kt=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Le=function(e,o){if(typeof e=="function")return kt(e,o);e!=null&&(e.current=o)},ft=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},dt=typeof window<"u"&&window.document&&window.document.createElement?R.exports.useLayoutEffect:R.exports.useEffect,Zr=typeof Element<"u",Jr=typeof Map=="function",Kr=typeof Set=="function",Qr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function xe(t,e){if(t===e)return!0;if(t&&e&&Re(t)=="object"&&Re(e)=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!xe(t[r],e[r]))return!1;return!0}var i;if(Jr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!xe(r.value[1],e.get(r.value[0])))return!1;return!0}if(Kr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Qr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(Zr&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!xe(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var _r=function(e,o){try{return xe(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},eo=[],to=function(e,o,r){r===void 0&&(r={});var n=R.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||eo},s=R.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],u=R.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);l({styles:ft(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:ft(h.map(function(g){return[g,v.attributes[g]]}))})},requires:["computeStyles"]}},[]),c=R.exports.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return _r(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),d=R.exports.useRef();return dt(function(){d.current&&d.current.setOptions(c)},[c]),dt(function(){if(!(e==null||o==null)){var m=r.createPopper||qr,p=m(e,o,c);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},ro=function(){},oo=function(){return Promise.resolve(null)},no=[];function io(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?no:i,a=t.referenceElement,l=t.onFirstUpdate,u=t.innerRef,c=t.children,d=R.exports.useContext(Et),m=R.exports.useState(null),p=m[0],v=m[1],h=R.exports.useState(null),g=h[0],O=h[1];R.exports.useEffect(function(){Le(u,p)},[u,p]);var T=R.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),y=to(a||d,p,T),f=y.state,b=y.styles,w=y.forceUpdate,x=y.update,C=R.exports.useMemo(function(){return{ref:v,style:b.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:b.arrow,ref:O},forceUpdate:w||ro,update:x||oo}},[v,O,o,f,b,x,w]);return At(c)(C)}function ao(t){var e=t.children,o=t.innerRef,r=R.exports.useContext(St),n=R.exports.useCallback(function(i){Le(o,i),kt(r,i)},[o,r]);return R.exports.useEffect(function(){return function(){return Le(o,null)}}),R.exports.useEffect(function(){},[r]),At(e)({ref:n})}var Bt=L.createContext({}),N=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},so=function(){},vt=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},lo=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Mt=function(t){Pt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,u=r.props,c=u.hideTooltip,d=u.clearScheduled;d(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,lo(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),Y({},a,{style:Y({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),Y({},a,r.isTriggeredBy("hover")&&{onMouseEnter:N(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:N(r.props.hideTooltip,a.onMouseLeave)},{style:Y({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return L.createElement(Bt.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(R.exports.Component);Mt.contextType=Bt;var co={childList:!0,subtree:!0},jt=function(t){Pt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,u=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=Y({},c,{pageX:l,pageY:u})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,u=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:u})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.getTriggerProps=function(a){return a===void 0&&(a={}),Y({},a,r.isTriggeredBy("click")&&{onClick:N(r.clickToggle,a.onClick),onTouchEnd:N(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:N(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&Y({onMouseEnter:N(r.showTooltip,a.onMouseEnter),onMouseLeave:N(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:N(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:N(r.showTooltip,a.onFocus),onBlur:N(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,u=i.trigger,c=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,T=Yt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=L.createElement(io,Y({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(b){n.popperOffset=b.state.rects.popper}}].concat(d)},T),function(f){var b=f.ref,w=f.style,x=f.placement,C=f.arrowProps,S=f.isReferenceHidden,E=f.update;if(h&&n.popperOffset){var P=n.state,B=P.pageX,A=P.pageY,z=n.popperOffset,q=z.width,k=z.height,M=B+q>window.pageXOffset+document.body.offsetWidth?B-q:B,te=A+k>window.pageYOffset+document.body.offsetHeight?A-k:A;w.transform="translate3d("+M+"px, "+te+"px, 0"}return L.createElement(Mt,Y({arrowProps:C,closeOnReferenceHidden:m,isReferenceHidden:S,placement:x,update:E,style:w,tooltip:a,trigger:u,mutationObserverOptions:O},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:b}))});return L.createElement(Gr,null,L.createElement(ao,{innerRef:c},function(f){var b=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:b})}),this.getState()&&(p?Xt.exports.createPortal(y,v):y))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(R.exports.Component);jt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:so,placement:"right",portalContainer:vt()?document.body:null,trigger:"hover",usePortal:vt(),mutationObserverOptions:co,modifiers:[]};var uo=jt,H=Vt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),Z=8,po=Pe.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(H("top",r,Z*-1,"auto"),"px"),top:"".concat(H("bottom",r,Z*-1,"auto"),"px"),right:"".concat(H("left",r,Z*-1,"auto"),"px"),left:"".concat(H("right",r,Z*-1,"auto"),"px"),borderBottomWidth:"".concat(H("top",r,"0",Z),"px"),borderTopWidth:"".concat(H("bottom",r,"0",Z),"px"),borderRightWidth:"".concat(H("left",r,"0",Z),"px"),borderLeftWidth:"".concat(H("right",r,"0",Z),"px"),borderTopColor:H("top",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent"),borderBottomColor:H("bottom",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent"),borderLeftColor:H("left",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent"),borderRightColor:H("right",r,e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),"transparent")}}),fo=Pe.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?ue(e.background.app):pe(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Dt=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,u=$e(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return L.createElement(fo,Object.assign({hasChrome:r,placement:o,ref:s},u,{color:l}),r&&L.createElement(po,Object.assign({placement:o,ref:a},i,{color:l})),n)};Dt.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var Me=It.document,vo=Pe.div(tt||(tt=yt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),ho=Pe.g(rt||(rt=yt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Ht=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,u=e.tooltipShown,c=e.onVisibilityChange,d=$e(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?ho:vo;return L.createElement(uo,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,T=v.arrowRef,y=v.placement;return L.createElement(Dt,Object.assign({hasChrome:s,placement:y,tooltipRef:O,arrowRef:T,arrowProps:g()},h()),typeof a=="function"?a({onHide:function(){return c(!1)}}):a)}},function(p){var v=p.getTriggerProps,h=p.triggerRef;return L.createElement(m,Object.assign({ref:h},v(),d),l)})};Ht.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var yo=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=$e(e,["startOpen","onVisibilityChange"]),i=R.exports.useState(o||!1),s=Zt(i,2),a=s[0],l=s[1],u=R.exports.useCallback(function(c){r&&r(c)===!1||l(c)},[r]);return R.exports.useEffect(function(){var c=function(){return u(!1)};Me.addEventListener("keydown",c,!1);var d=Array.from(Me.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",c),m.push(function(){try{p.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){Me.removeEventListener("keydown",c),m.forEach(function(p){p()})}}),L.createElement(Ht,Object.assign({},n,{tooltipShown:a,onVisibilityChange:u}))};export{yo as WithToolTipState,yo as WithTooltip,Ht as WithTooltipPure};
//# sourceMappingURL=WithTooltip-167e9982.59230ac0.js.map
