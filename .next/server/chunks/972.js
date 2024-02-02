exports.id=972,exports.ids=[972],exports.modules={5236:()=>{},660:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>e1});var r,l,i=n(3729);let o="carousel",a="controller",u="portal",c="toolbar",s="loading",d="error",f="complete",p=e=>`active-slide-${e}`;p(s),p("playing"),p(d),p(f);let h="flex_center",v="no_scroll_padding",m="prev",g="next",E="swipe",b="close",x="onPointerDown",y="onPointerMove",w="onPointerUp",M="onPointerLeave",N="onPointerCancel",P="onKeyDown",C="onWheel",L="icon",k="contain",I="cover";var S=n(1202);let R=(...e)=>[...e].filter(e=>!!e).join(" "),$="yarl__",_=e=>`${$}${e}`,O=e=>`--${$}${e}`,A=(e,t)=>`${e}${t?`_${t}`:""}`,T=e=>t=>A(e,t),W=(e,t)=>e&&e[t]?e[t]:t,D=(...e)=>()=>{e.forEach(e=>{e()})},U=(e,t,n)=>()=>{let r=i.useContext(n);if(!r)throw Error(`${e} must be used within a ${t}.Provider`);return r},F=()=>!1,X=e=>void 0===e.type||"image"===e.type,z=(e,t)=>e.imageFit===I||e.imageFit!==k&&t===I;function B(e){return"string"==typeof e?Number.parseInt(e,10):e}function H(e){if("number"==typeof e)return{pixel:e};if("string"==typeof e){let t=B(e);return e.endsWith("%")?{percent:t}:{pixel:t}}return{pixel:0}}let K=(e,t)=>t>0?(e%t+t)%t:0,V=e=>e.length>0,Y=(e,t)=>e[K(t,e.length)],j=(e,t)=>V(e)?Y(e,t):void 0,q={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[b]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:k,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Z(e,t){return{name:e,component:t}}function G(e,t){return{module:e,children:t}}function J(e,t,n){return e.flatMap(e=>{var r;return null!==(r=function e(t,n,r){return t.module.name===n?r(t):t.children?[G(t.module,t.children.flatMap(t=>{var l;return null!==(l=e(t,n,r))&&void 0!==l?l:[]}))]:[t]}(e,t,n))&&void 0!==r?r:[]})}let Q=i.createContext(null),ee=U("useEvents","EventsContext",Q);function et({children:e}){let[t]=i.useState({});i.useEffect(()=>()=>{Object.keys(t).forEach(e=>delete t[e])},[t]);let n=i.useMemo(()=>{let e=(e,n)=>{var r;null===(r=t[e])||void 0===r||r.splice(0,t[e].length,...t[e].filter(e=>e!==n))};return{publish:(...[e,n])=>{var r;null===(r=t[e])||void 0===r||r.forEach(e=>e(n))},subscribe:(n,r)=>(t[n]||(t[n]=[]),t[n].push(r),()=>e(n,r)),unsubscribe:e}},[t]);return i.createElement(Q.Provider,{value:n},e)}let en=i.createContext(null),er=U("useLightboxProps","LightboxPropsContext",en);function el({children:e,...t}){return i.createElement(en.Provider,{value:t},e)}let ei=i.createContext(null),eo=U("useLightboxState","LightboxStateContext",ei),ea=i.createContext(null),eu=U("useLightboxDispatch","LightboxDispatchContext",ea);function ec(e,t){switch(t.type){case"swipe":{let{slides:n}=e,r=(null==t?void 0:t.increment)||0,l=e.globalIndex+r,i=K(l,n.length),o=j(n,i);return{slides:n,currentIndex:i,globalIndex:l,currentSlide:o,animation:r||t.duration?{increment:r,duration:t.duration,easing:t.easing}:void 0}}case"update":if(t.slides!==e.slides||t.index!==e.currentIndex)return{slides:t.slides,currentIndex:t.index,globalIndex:t.index,currentSlide:j(t.slides,t.index)};return e;default:throw Error("Unknown action type")}}function es({slides:e,index:t,children:n}){let[r,l]=i.useReducer(ec,{slides:e,currentIndex:t,globalIndex:t,currentSlide:j(e,t)});i.useEffect(()=>{l({type:"update",slides:e,index:t})},[e,t]);let o=i.useMemo(()=>({...r,state:r,dispatch:l}),[r,l]);return i.createElement(ea.Provider,{value:l},i.createElement(ei.Provider,{value:o},n))}let ed=i.createContext(null),ef=U("useTimeouts","TimeoutsContext",ed);function ep({children:e}){let[t]=i.useState([]);i.useEffect(()=>()=>{t.forEach(e=>window.clearTimeout(e)),t.splice(0,t.length)},[t]);let n=i.useMemo(()=>{let e=e=>{t.splice(0,t.length,...t.filter(t=>t!==e))};return{setTimeout:(n,r)=>{let l=window.setTimeout(()=>{e(l),n()},r);return t.push(l),l},clearTimeout:t=>{void 0!==t&&(e(t),window.clearTimeout(t))}}},[t]);return i.createElement(ed.Provider,{value:n},e)}let eh=i.forwardRef(function({label:e,className:t,icon:n,renderIcon:r,onClick:l,style:o,...a},u){let{styles:c,labels:s}=er();return i.createElement("button",{ref:u,type:"button","aria-label":W(s,e),className:R(_("button"),t),onClick:l,style:{...o,...c.button},...a},r?r():i.createElement(n,{className:_(L),style:c.icon}))});function ev(e,t){return function(e,t){let n=e=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...e},t);return n.displayName=e,n}(e,i.createElement("g",{fill:"currentColor"},i.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t))}let em=ev("Close",i.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),eg=ev("Previous",i.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),eE=ev("Next",i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),eb=ev("Loading",i.createElement(i.Fragment,null,Array.from({length:8}).map((e,t,n)=>i.createElement("line",{key:t,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(t+1),transform:`rotate(${360/n.length*t}, 12, 12)`})))),ex=ev("Error",i.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),ey=F()?i.useLayoutEffect:i.useEffect;function ew(){let[e,t]=i.useState(!1);return i.useEffect(()=>{var e,n;let r=null===(e=window.matchMedia)||void 0===e?void 0:e.call(window,"(prefers-reduced-motion: reduce)");t(null==r?void 0:r.matches);let l=e=>t(e.matches);return null===(n=null==r?void 0:r.addEventListener)||void 0===n||n.call(r,"change",l),()=>{var e;return null===(e=null==r?void 0:r.removeEventListener)||void 0===e?void 0:e.call(r,"change",l)}},[]),e}function eM(e,t){let n=i.useRef(),r=i.useRef(),l=ew();return ey(()=>{var i,o,a;if(e.current&&void 0!==n.current&&!l){let{keyframes:l,duration:u,easing:c,onfinish:s}=t(n.current,e.current.getBoundingClientRect(),function(e){let t=0,n=0,r=0,l=window.getComputedStyle(e).transform.match(/matrix.*\((.+)\)/);if(l){let e=l[1].split(",").map(B);6===e.length?(t=e[4],n=e[5]):16===e.length&&(t=e[12],n=e[13],r=e[14])}return{x:t,y:n,z:r}}(e.current))||{};if(l&&u){null===(i=r.current)||void 0===i||i.cancel(),r.current=void 0;try{r.current=null===(a=(o=e.current).animate)||void 0===a?void 0:a.call(o,l,{duration:u,easing:c})}catch(e){console.error(e)}r.current&&(r.current.onfinish=()=>{r.current=void 0,null==s||s()})}}n.current=void 0}),{prepareAnimation:e=>{n.current=e},isAnimationPlaying:()=>{var e;return(null===(e=r.current)||void 0===e?void 0:e.playState)==="running"}}}function eN(){let e=i.useRef(null),t=i.useRef(),[n,r]=i.useState();return{setContainerRef:i.useCallback(n=>{e.current=n,t.current&&(t.current.disconnect(),t.current=void 0);let l=()=>{if(n){let e=window.getComputedStyle(n),t=e=>parseFloat(e)||0;r({width:Math.round(n.clientWidth-t(e.paddingLeft)-t(e.paddingRight)),height:Math.round(n.clientHeight-t(e.paddingTop)-t(e.paddingBottom))})}else r(void 0)};l(),n&&"undefined"!=typeof ResizeObserver&&(t.current=new ResizeObserver(l),t.current.observe(n))},[]),containerRef:e,containerRect:n}}function eP(){let e=i.useRef(),{setTimeout:t,clearTimeout:n}=ef();return i.useCallback((r,l)=>{n(e.current),e.current=t(r,l>0?l:0)},[t,n])}function eC(e){let t=i.useRef(e);return ey(()=>{t.current=e}),i.useCallback((...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}function eL(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function ek(e,t){return i.useMemo(()=>null==e&&null==t?null:n=>{eL(e,n),eL(t,n)},[e,t])}function eI(){let[e,t]=i.useState(!1);return ey(()=>{t("rtl"===window.getComputedStyle(window.document.documentElement).direction)},[]),e}function eS(e,t){let n=i.useRef(0),r=eP(),l=eC((...t)=>{n.current=Date.now(),e(t)});return i.useCallback((...e)=>{r(()=>{l(e)},t-(Date.now()-n.current))},[t,l,r])}let eR=T("slide"),e$=T("slide_image");function e_({slide:e,offset:t,render:n,rect:r,imageFit:l,imageProps:o,onClick:a,onLoad:u,style:c}){var h,v,m,g,E,b,x;let[y,w]=i.useState(s),{publish:M}=ee(),{setTimeout:N}=ef(),P=i.useRef(null);i.useEffect(()=>{0===t&&M(p(y))},[t,y,M]);let C=eC(e=>{("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{e.parentNode&&(w(f),N(()=>{null==u||u(e)},0))})}),k=i.useCallback(e=>{P.current=e,(null==e?void 0:e.complete)&&C(e)},[C]),I=i.useCallback(e=>{C(e.currentTarget)},[C]),S=i.useCallback(()=>{w(d)},[]),$=z(e,l),O=(e,t)=>Number.isFinite(e)?e:t,A=O(Math.max(...(null!==(v=null===(h=e.srcSet)||void 0===h?void 0:h.map(e=>e.width))&&void 0!==v?v:[]).concat(e.width?[e.width]:[]).filter(Boolean)),(null===(m=P.current)||void 0===m?void 0:m.naturalWidth)||0),T=O(Math.max(...(null!==(E=null===(g=e.srcSet)||void 0===g?void 0:g.map(e=>e.height))&&void 0!==E?E:[]).concat(e.height?[e.height]:[]).filter(Boolean)),(null===(b=P.current)||void 0===b?void 0:b.naturalHeight)||0),W=A&&T?{maxWidth:`min(${A}px, 100%)`,maxHeight:`min(${T}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},D=null===(x=e.srcSet)||void 0===x?void 0:x.sort((e,t)=>e.width-t.width).map(e=>`${e.src} ${e.width}w`).join(", "),U=D&&r&&F()?`${Math.round(Math.min(r&&!$&&e.width&&e.height?r.height/e.height*e.width:Number.MAX_VALUE,r.width))}px`:void 0,{style:X,className:B,...H}=o||{};return i.createElement(i.Fragment,null,i.createElement("img",{ref:k,onLoad:I,onError:S,onClick:a,draggable:!1,className:R(_(e$()),$&&_(e$("cover")),y!==f&&_(e$("loading")),B),style:{...W,...c,...X},...H,alt:e.alt,sizes:U,srcSet:D,src:e.src}),y!==f&&i.createElement("div",{className:_(eR("placeholder"))},y===s&&((null==n?void 0:n.iconLoading)?n.iconLoading():i.createElement(eb,{className:R(_(L),_(eR(s)))})),y===d&&((null==n?void 0:n.iconError)?n.iconError():i.createElement(ex,{className:R(_(L),_(eR(d)))}))))}(function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL",e[e.ANIMATION=3]="ANIMATION"})(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.SWIPE=1]="SWIPE",e[e.PULL=2]="PULL"}(l||(l={}));let eO="wheel";function eA(e){(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.ctrlKey)&&e.preventDefault()}let eT=T("container"),eW=i.createContext(null),eD=U("useController","ControllerContext",eW),eU=Z(a,function({children:e,...t}){var n;let{carousel:o,animation:a,controller:c,on:s,styles:d,render:f}=t,[p,v]=i.useState(),L=eo(),k=eu(),[I,S]=i.useState(r.NONE),$=i.useRef(0),A=i.useRef(0),T=i.useRef(1),{registerSensors:W,subscribeSensors:U}=function(){let[e]=i.useState({}),t=i.useCallback((t,n)=>{var r;null===(r=e[t])||void 0===r||r.forEach(e=>{n.isPropagationStopped()||e(n)})},[e]);return{registerSensors:i.useMemo(()=>({onPointerDown:e=>t(x,e),onPointerMove:e=>t(y,e),onPointerUp:e=>t(w,e),onPointerLeave:e=>t(M,e),onPointerCancel:e=>t(N,e),onKeyDown:e=>t(P,e),onKeyUp:e=>t("onKeyUp",e),onWheel:e=>t(C,e)}),[t]),subscribeSensors:i.useCallback((t,n)=>(e[t]||(e[t]=[]),e[t].unshift(n),()=>{let r=e[t];r&&r.splice(0,r.length,...r.filter(e=>e!==n))}),[e])}}(),{subscribe:F,publish:X}=ee(),z=eP(),B=eP(),K=eP(),{containerRef:V,setContainerRef:Y,containerRect:j}=eN(),q=ek(function(){let e=i.useRef(null);return i.useCallback(t=>{var n;t?t.addEventListener(eO,eA,{passive:!1}):null===(n=e.current)||void 0===n||n.removeEventListener(eO,eA),e.current=t},[])}(),Y),Z=i.useRef(null),G=ek(Z,void 0),J=eI(),Q=e=>(J?-1:1)*("number"==typeof e?e:1),et=eC(()=>{var e;return null===(e=V.current)||void 0===e?void 0:e.focus()}),en=eC(()=>t),er=eC(()=>L),el=i.useCallback(e=>X(m,e),[X]),ei=i.useCallback(e=>X(g,e),[X]),ea=i.useCallback(()=>X(b),[X]),ec=e=>!(o.finite&&(Q(e)>0&&0===L.currentIndex||0>Q(e)&&L.currentIndex===L.slides.length-1)),es=e=>{var t;$.current=e,null===(t=V.current)||void 0===t||t.style.setProperty(O("swipe_offset"),`${Math.round(e)}px`)},{closeOnPullUp:ed,closeOnPullDown:ep}=c,eh=e=>{var t,n;A.current=e,T.current=Math.min(Math.max(function(e,t=0){let n=10**t;return Math.round((e+Number.EPSILON)*n)/n}(1-(ep&&e>0?e:ed&&e<0?-e:0)/60*.5,2),.5),1),null===(t=V.current)||void 0===t||t.style.setProperty(O("pull_offset"),`${Math.round(e)}px`),null===(n=V.current)||void 0===n||n.style.setProperty(O("pull_opacity"),`${T.current}`)},{prepareAnimation:ev}=eM(Z,(e,t,n)=>{if(Z.current&&j)return{keyframes:[{transform:`translate(0, ${e.rect.y-t.y+n.y}px)`,opacity:e.opacity},{transform:"translate(0, 0)",opacity:1}],duration:e.duration,easing:a.easing.fade}}),em=(e,t)=>{if(ed||ep){eh(e);let n=0;Z.current&&(n=a.fade*(t?2:1),ev({rect:Z.current.getBoundingClientRect(),opacity:T.current,duration:n})),K(()=>{eh(0),S(r.NONE)},n),S(r.ANIMATION),t||ea()}},{prepareAnimation:eg,isAnimationPlaying:eE}=eM(Z,(e,t,n)=>{var r;if(Z.current&&j&&(null===(r=L.animation)||void 0===r?void 0:r.duration)){let r=H(o.spacing),l=(r.percent?r.percent*j.width/100:r.pixel)||0;return{keyframes:[{transform:`translate(${Q(L.globalIndex-e.index)*(j.width+l)+e.rect.x-t.x+n.x}px, 0)`},{transform:"translate(0, 0)"}],duration:L.animation.duration,easing:L.animation.easing}}}),eb=eC(e=>{var t,n;let l=e.offset||0,i=l?a.swipe:null!==(t=a.navigation)&&void 0!==t?t:a.swipe,o=l||eE()?a.easing.swipe:a.easing.navigation,{direction:u}=e,c=null!==(n=e.count)&&void 0!==n?n:1,s=r.ANIMATION,d=i*c;if(!u){let t=null==j?void 0:j.width,n=e.duration||0,r=t?i/t*Math.abs(l):i;0!==c?(n<r?d=d/r*Math.max(n,r/5):t&&(d=i/t*(t-Math.abs(l))),u=Q(l)>0?m:g):d=i/2}let f=0;u===m?ec(Q(1))?f=-c:(s=r.NONE,d=i):u===g&&(ec(Q(-1))?f=c:(s=r.NONE,d=i)),B(()=>{es(0),S(r.NONE)},d=Math.round(d)),Z.current&&eg({rect:Z.current.getBoundingClientRect(),index:L.globalIndex}),S(s),X(E,{type:"swipe",increment:f,duration:d,easing:o})});i.useEffect(()=>{var e,t;(null===(e=L.animation)||void 0===e?void 0:e.increment)&&(null===(t=L.animation)||void 0===t?void 0:t.duration)&&z(()=>k({type:"swipe",increment:0}),L.animation.duration)},[L.animation,k,z]);let ex=[U,ec,(null==j?void 0:j.width)||0,a.swipe,()=>S(r.SWIPE),e=>es(e),(e,t)=>eb({offset:e,duration:t,count:1}),e=>eb({offset:e,count:0})],ey=[()=>{ep&&S(r.PULL)},e=>eh(e),e=>em(e),e=>em(e,!0)];(function(e,t,n,r,o,a,u,c,s,d,f,p,h,v){var m;let g=i.useRef(0),E=i.useRef([]),b=i.useRef(),P=i.useRef(0),C=i.useRef(l.NONE),L=i.useCallback(e=>{b.current===e.pointerId&&(b.current=void 0,C.current=l.NONE);let t=E.current;t.splice(0,t.length,...t.filter(t=>t.pointerId!==e.pointerId))},[]),k=i.useCallback(e=>{L(e),e.persist(),E.current.push(e)},[L]),I=eC(e=>{k(e)}),S=(e,t)=>d&&e>t||s&&e<-t,R=eC(e=>{if(E.current.find(t=>t.pointerId===e.pointerId)&&b.current===e.pointerId){let e=Date.now()-P.current,t=g.current;C.current===l.SWIPE?Math.abs(t)>.3*n||Math.abs(t)>5&&e<r?u(t,e):c(t):C.current===l.PULL&&(S(t,60)?h(t,e):v(t)),g.current=0,C.current=l.NONE}L(e)}),$=eC(e=>{let n=E.current.find(t=>t.pointerId===e.pointerId);if(n){let r=b.current===e.pointerId;if(0===e.buttons){r&&0!==g.current?R(e):L(n);return}let i=e.clientX-n.clientX,u=e.clientY-n.clientY;if(void 0===b.current){let n=t=>{k(e),b.current=e.pointerId,P.current=Date.now(),C.current=t};Math.abs(i)>Math.abs(u)&&Math.abs(i)>30&&t(i)?(n(l.SWIPE),o()):Math.abs(u)>Math.abs(i)&&S(u,30)&&(n(l.PULL),f())}else r&&(C.current===l.SWIPE?(g.current=i,a(i)):C.current===l.PULL&&(g.current=u,p(u)))}});i.useEffect(()=>m?()=>{}:D(e(x,I),e(y,$),e(w,R),e(M,R),e(N,R)),[e,I,$,R,m])})(...ex,ed,ep,...ey),function(e,t,n,l,o,a,u,c,s){let d=i.useRef(0),f=i.useRef(0),p=i.useRef(),h=i.useRef(),v=i.useRef(0),m=i.useRef(0),{setTimeout:g,clearTimeout:E}=ef(),b=i.useCallback(()=>{p.current&&(E(p.current),p.current=void 0)},[E]),x=i.useCallback(()=>{h.current&&(E(h.current),h.current=void 0)},[E]),y=eC(()=>{e!==r.SWIPE&&(d.current=0,m.current=0,b(),x())});i.useEffect(y,[e,y]);let w=eC(e=>{h.current=void 0,d.current===e&&s(d.current)}),M=eC(t=>{if(!(t.ctrlKey||Math.abs(t.deltaY)>Math.abs(t.deltaX))){if(e===r.NONE){if(Math.abs(t.deltaX)<=1.2*Math.abs(v.current)){v.current=t.deltaX;return}if(n(-t.deltaX)){if(f.current+=t.deltaX,b(),Math.abs(f.current)>30)f.current=0,v.current=0,m.current=Date.now(),a();else{let e=f.current;p.current=g(()=>{p.current=void 0,e===f.current&&(f.current=0)},o)}}}else if(e===r.SWIPE){let e=d.current-t.deltaX;if(e=Math.min(Math.abs(e),l)*Math.sign(e),d.current=e,u(e),x(),Math.abs(e)>.2*l){v.current=t.deltaX,c(e,Date.now()-m.current);return}h.current=g(()=>w(e),2*o)}else v.current=t.deltaX}});i.useEffect(()=>t(C,M),[t,M])}(I,...ex);let ew=eC(()=>{c.focus&&document.querySelector(`.${_(u)} .${_(eT())}`)&&et()});i.useEffect(ew,[ew]);let eL=eC(()=>{var e;null===(e=s.view)||void 0===e||e.call(s,{index:L.currentIndex})});i.useEffect(eL,[L.globalIndex,eL]),i.useEffect(()=>D(F(m,e=>eb({direction:m,...e})),F(g,e=>eb({direction:g,...e})),F(E,e=>k(e))),[F,eb,k]);let eS=i.useMemo(()=>({prev:el,next:ei,close:ea,focus:et,slideRect:j?function(e,t){let n=H(t),r=void 0!==n.percent?e.width/100*n.percent:n.pixel;return{width:Math.max(e.width-2*r,0),height:Math.max(e.height-2*r,0)}}(j,o.padding):{width:0,height:0},containerRect:j||{width:0,height:0},subscribeSensors:U,containerRef:V,setCarouselRef:G,toolbarWidth:p,setToolbarWidth:v}),[el,ei,ea,et,U,j,V,G,p,v,o.padding]);return i.useImperativeHandle(c.ref,()=>({prev:el,next:ei,close:ea,focus:et,getLightboxProps:en,getLightboxState:er}),[el,ei,ea,et,en,er]),i.createElement("div",{ref:q,className:R(_(eT()),_(h)),style:{...I===r.SWIPE?{[O("swipe_offset")]:`${Math.round($.current)}px`}:null,...I===r.PULL?{[O("pull_offset")]:`${Math.round(A.current)}px`,[O("pull_opacity")]:`${T.current}`}:null,..."none"!==c.touchAction?{[O("controller_touch_action")]:c.touchAction}:null,...d.container},...c.aria?{role:"presentation","aria-live":"polite"}:null,tabIndex:-1,...W},j&&i.createElement(eW.Provider,{value:eS},e,null===(n=f.controls)||void 0===n?void 0:n.call(f)))});function eF(e){return A("slide",e)}function eX({slide:e,offset:t}){var n,r,l,o;let a;let u=i.useRef(null),{currentIndex:c}=eo(),{slideRect:s,close:d}=eD(),{render:f,carousel:{imageFit:p,imageProps:v},on:{click:m},controller:{closeOnBackdropClick:g},styles:{slide:E}}=er();return i.createElement("div",{ref:u,className:R(_(eF()),0===t&&_(eF("current")),_(h)),onClick:e=>{let t=u.current,n=e.target instanceof HTMLElement?e.target:void 0;g&&n&&t&&(n===t||Array.from(t.children).find(e=>e===n)&&n.classList.contains(_("slide_wrapper")))&&d()},style:E},(!(a=null===(n=f.slide)||void 0===n?void 0:n.call(f,{slide:e,offset:t,rect:s}))&&X(e)&&(a=i.createElement(e_,{slide:e,offset:t,render:f,rect:s,imageFit:p,imageProps:v,onClick:0===t?()=>null==m?void 0:m({index:c}):void 0})),a?i.createElement(i.Fragment,null,null===(r=f.slideHeader)||void 0===r?void 0:r.call(f,{slide:e}),(null!==(l=f.slideContainer)&&void 0!==l?l:({children:e})=>e)({slide:e,children:a}),null===(o=f.slideFooter)||void 0===o?void 0:o.call(f,{slide:e})):null))}function ez(){let e=er().styles.slide;return i.createElement("div",{className:_("slide"),style:e})}let eB=Z(o,function({carousel:e}){let{slides:t,currentIndex:n,globalIndex:r}=eo(),{setCarouselRef:l}=eD(),a=H(e.spacing),u=H(e.padding),c=[],s=function(e,t,n=0){return Math.min(e.preload,Math.max(e.finite?t.length-1:Math.floor(t.length/2),n))}(e,t,1);if(V(t)){for(let l=n-s;l<n;l+=1){let o=r+l-n;c.push(!e.finite||l>=0?i.createElement(eX,{key:o,slide:t[(l+s*t.length)%t.length],offset:l-n}):i.createElement(ez,{key:o}))}c.push(i.createElement(eX,{key:r,slide:t[n],offset:0}));for(let l=n+1;l<=n+s;l+=1){let o=r+l-n;c.push(!e.finite||l<=t.length-1?i.createElement(eX,{key:o,slide:t[l%t.length],offset:l-n}):i.createElement(ez,{key:o}))}}return i.createElement("div",{ref:l,className:R(_(A(o,void 0)),c.length>0&&_(A(o,"with_slides"))),style:{[`${O(A(o,"slides_count"))}`]:c.length,[`${O(A(o,"spacing_px"))}`]:a.pixel||0,[`${O(A(o,"spacing_percent"))}`]:a.percent||0,[`${O(A(o,"padding_px"))}`]:u.pixel||0,[`${O(A(o,"padding_percent"))}`]:u.percent||0}},c)});function eH(){let{carousel:e}=er(),{slides:t,currentIndex:n}=eo();return{prevDisabled:0===t.length||e.finite&&0===n,nextDisabled:0===t.length||e.finite&&n===t.length-1}}function eK({label:e,icon:t,renderIcon:n,action:r,onClick:l,disabled:o,style:a}){return i.createElement(eh,{label:e,icon:t,renderIcon:n,className:_(`navigation_${r}`),disabled:o,onClick:l,style:a,...function(e,t=!1){let n=i.useRef();return ey(()=>{t&&n.current&&(n.current=!1,e())},[t,e]),{onFocus:i.useCallback(()=>{n.current=!0},[]),onBlur:i.useCallback(()=>{n.current=!1},[])}}(eD().focus,o)})}let eV=Z("navigation",function({render:{buttonPrev:e,buttonNext:t,iconPrev:n,iconNext:r},styles:l}){let{prev:o,next:a,subscribeSensors:u}=eD(),{prevDisabled:c,nextDisabled:s}=eH();return function(e){var t;let n=eI(),{publish:r}=ee(),{animation:l}=er(),{prevDisabled:o,nextDisabled:a}=eH(),u=(null!==(t=l.navigation)&&void 0!==t?t:l.swipe)/2,c=eS(()=>r(m),u),s=eS(()=>r(g),u),d=eC(e=>{switch(e.key){case"Escape":r(b);break;case"ArrowLeft":(n?a:o)||(n?s:c)();break;case"ArrowRight":(n?o:a)||(n?c:s)()}});i.useEffect(()=>e(P,d),[e,d])}(u),i.createElement(i.Fragment,null,e?e():i.createElement(eK,{label:"Previous",action:m,icon:eg,renderIcon:n,style:l.navigationPrev,disabled:c,onClick:o}),t?t():i.createElement(eK,{label:"Next",action:g,icon:eE,renderIcon:r,style:l.navigationNext,disabled:s,onClick:a}))}),eY=_("no_scroll"),ej=_(v);function eq(e,t,n){let r=window.getComputedStyle(e),l=n?"padding-left":"padding-right",i=n?r.paddingLeft:r.paddingRight,o=e.style.getPropertyValue(l);return e.style.setProperty(l,`${(B(i)||0)+t}px`),()=>{o?e.style.setProperty(l,o):e.style.removeProperty(l)}}let eZ=Z("no-scroll",function({noScroll:{disabled:e},children:t}){let n=eI();return ey(()=>{if(e)return()=>{};let t=[],{body:r,documentElement:l}=document,i=Math.round(window.innerWidth-l.clientWidth);if(i>0){t.push(eq(r,i,n));let e=r.getElementsByTagName("*");for(let r=0;r<e.length;r+=1){let l=e[r];"style"in l&&"fixed"===window.getComputedStyle(l).getPropertyValue("position")&&!l.classList.contains(ej)&&t.push(eq(l,i,n))}}return r.classList.add(eY),()=>{r.classList.remove(eY),t.forEach(e=>e())}},[n,e]),i.createElement(i.Fragment,null,t)});function eG(e,t,n){let r=e.getAttribute(t);return e.setAttribute(t,n),()=>{r?e.setAttribute(t,r):e.removeAttribute(t)}}let eJ=Z(u,function({children:e,animation:t,styles:n,className:r,on:l,portal:o,close:a}){let[c,s]=i.useState(!1),[d,f]=i.useState(!1),p=i.useRef([]),h=i.useRef(null),{setTimeout:m}=ef(),{subscribe:g}=ee(),E=ew()?0:t.fade;i.useEffect(()=>(s(!0),()=>{s(!1),f(!1)}),[]);let x=eC(()=>{p.current.forEach(e=>e()),p.current=[]}),y=eC(()=>{var e;f(!1),x(),null===(e=l.exiting)||void 0===e||e.call(l),m(()=>{var e;null===(e=l.exited)||void 0===e||e.call(l),a()},E)});i.useEffect(()=>g(b,y),[g,y]);let w=eC(e=>{var t,n,r;e.scrollTop,f(!0),null===(t=l.entering)||void 0===t||t.call(l);let i=null!==(r=null===(n=e.parentNode)||void 0===n?void 0:n.children)&&void 0!==r?r:[];for(let t=0;t<i.length;t+=1){let n=i[t];-1===["TEMPLATE","SCRIPT","STYLE"].indexOf(n.tagName)&&n!==e&&(p.current.push(eG(n,"inert","true")),p.current.push(eG(n,"aria-hidden","true")))}p.current.push(()=>{var e,t;null===(t=null===(e=h.current)||void 0===e?void 0:e.focus)||void 0===t||t.call(e)}),m(()=>{var e;null===(e=l.entered)||void 0===e||e.call(l)},E)}),M=i.useCallback(e=>{e?w(e):x()},[w,x]);return c?(0,S.createPortal)(i.createElement("div",{ref:M,className:R(r,_("root"),_(A(u,void 0)),_(v),d&&_(A(u,"open"))),role:"presentation","aria-live":"polite",style:{...t.fade!==q.animation.fade?{[O("fade_animation_duration")]:`${E}ms`}:null,...t.easing.fade!==q.animation.easing.fade?{[O("fade_animation_timing_function")]:t.easing.fade}:null,...n.root},onFocus:e=>{h.current||(h.current=e.relatedTarget)}},e),o.root||document.body):null}),eQ=Z("root",function({children:e}){return i.createElement(i.Fragment,null,e)}),e0=Z(c,function({toolbar:{buttons:e},render:{buttonClose:t,iconClose:n},styles:r}){let{close:l,setToolbarWidth:o}=eD(),{setContainerRef:a,containerRect:u}=eN();ey(()=>{o(null==u?void 0:u.width)},[o,null==u?void 0:u.width]);let s=()=>t?t():i.createElement(eh,{key:b,label:"Close",icon:em,renderIcon:n,onClick:l});return i.createElement("div",{ref:a,style:r.toolbar,className:_(A(c,void 0))},null==e?void 0:e.map(e=>e===b?s():e))});function e1({carousel:e,animation:t,render:n,toolbar:r,controller:l,noScroll:o,on:u,plugins:c,slides:s,index:d,...f}){let{animation:p,carousel:h,render:v,toolbar:m,controller:g,noScroll:E,on:b,slides:x,index:y,plugins:w,...M}=q,{config:N,augmentation:P}=function(e,t=[],n=[]){let r=e,l=e=>{let t=[...r];for(;t.length>0;){let n=t.pop();if((null==n?void 0:n.module.name)===e)return!0;(null==n?void 0:n.children)&&t.push(...n.children)}return!1},i=(e,t)=>{if(""===e){r=[G(t,r)];return}r=J(r,e,e=>[G(t,[e])])},o=(e,t)=>{r=J(r,e,e=>[G(e.module,[G(t,e.children)])])},u=(e,t,n)=>{r=J(r,e,e=>{var r;return[G(e.module,[...n?[G(t)]:[],...null!==(r=e.children)&&void 0!==r?r:[],...n?[]:[G(t)]])]})},c=(e,t,n)=>{r=J(r,e,e=>[...n?[G(t)]:[],e,...n?[]:[G(t)]])},s=e=>{o(a,e)},d=(e,t)=>{r=J(r,e,e=>[G(t,e.children)])},f=e=>{r=J(r,e,e=>e.children)},p=e=>{n.push(e)};return t.forEach(e=>{e({contains:l,addParent:i,append:o,addChild:u,addSibling:c,addModule:s,replace:d,remove:f,augment:p})}),{config:r,augmentation:e=>n.reduce((e,t)=>t(e),e)}}([G(eJ,[G(eZ,[G(eU,[G(eB),G(e0),G(eV)])])])],c||w),C=P({animation:function(e,t={}){let{easing:n,...r}=e,{easing:l,...i}=t;return{easing:{...n,...l},...r,...i}}(p,t),carousel:{...h,...e},render:{...v,...n},toolbar:{...m,...r},controller:{...g,...l},noScroll:{...E,...o},on:{...b,...u},...M,...f});return C.open?i.createElement(el,{...C},i.createElement(es,{slides:s||x,index:B(d||y)},i.createElement(ep,null,i.createElement(et,null,function e(t,n){var r;return i.createElement(t.module.component,{key:t.module.name,...n},null===(r=t.children)||void 0===r?void 0:r.map(t=>e(t,n)))}(G(eQ,N),C))))):null}}};