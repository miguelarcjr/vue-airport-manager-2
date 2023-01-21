(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function $r(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function jr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?ih(s):jr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(be(t))return t;if(he(t))return t}}const th=/;(?![^(]*\))/g,nh=/:([^]+)/,sh=/\/\*.*?\*\//gs;function ih(t){const e={};return t.replace(sh,"").split(th).forEach(n=>{if(n){const s=n.split(nh);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Vr(t){let e="";if(be(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=Vr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oh=$r(rh);function xa(t){return!!t||t===""}const Yo=t=>be(t)?t:t==null?"":F(t)||he(t)&&(t.toString===ka||!U(t.toString))?JSON.stringify(t,Da,2):String(t),Da=(t,e)=>e&&e.__v_isRef?Da(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Pa(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!F(e)&&!Ma(e)?String(e):e,oe={},_n=[],Ze=()=>{},lh=()=>!1,ah=/^on[^a-z]/,ui=t=>ah.test(t),qr=t=>t.startsWith("onUpdate:"),Te=Object.assign,zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ch=Object.prototype.hasOwnProperty,G=(t,e)=>ch.call(t,e),F=Array.isArray,pn=t=>hi(t)==="[object Map]",Pa=t=>hi(t)==="[object Set]",U=t=>typeof t=="function",be=t=>typeof t=="string",Kr=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Oa=t=>he(t)&&U(t.then)&&U(t.catch),ka=Object.prototype.toString,hi=t=>ka.call(t),uh=t=>hi(t).slice(8,-1),Ma=t=>hi(t)==="[object Object]",Gr=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),di=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hh=/-(\w)/g,wn=di(t=>t.replace(hh,(e,n)=>n?n.toUpperCase():"")),dh=/\B([A-Z])/g,Dn=di(t=>t.replace(dh,"-$1").toLowerCase()),La=di(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fi=di(t=>t?`on${La(t)}`:""),Hs=(t,e)=>!Object.is(t,e),ks=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$s=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},js=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Qo;const fh=()=>Qo||(Qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let rt;class _h{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function ph(t,e=rt){e&&e.active&&e.effects.push(t)}const Yr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Fa=t=>(t.w&Pt)>0,Ba=t=>(t.n&Pt)>0,gh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},mh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Fa(i)&&!Ba(i)?i.delete(t):e[n++]=i,i.w&=~Pt,i.n&=~Pt}e.length=n}},rr=new WeakMap;let Vn=0,Pt=1;const or=30;let Ye;const Qt=Symbol(""),lr=Symbol("");class Qr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ph(this,s)}run(){if(!this.active)return this.fn();let e=Ye,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,St=!0,Pt=1<<++Vn,Vn<=or?gh(this):Jo(this),this.fn()}finally{Vn<=or&&mh(this),Pt=1<<--Vn,Ye=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(Jo(this),this.onStop&&this.onStop(),this.active=!1)}}function Jo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const Ua=[];function Pn(){Ua.push(St),St=!1}function On(){const t=Ua.pop();St=t===void 0?!0:t}function Ue(t,e,n){if(St&&Ye){let s=rr.get(t);s||rr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Yr()),Wa(i)}}function Wa(t,e){let n=!1;Vn<=or?Ba(t)||(t.n|=Pt,n=!Fa(t)):n=!t.has(Ye),n&&(t.add(Ye),Ye.deps.push(t))}function yt(t,e,n,s,i,r){const o=rr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&F(t)){const a=js(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":F(t)?Gr(n)&&l.push(o.get("length")):(l.push(o.get(Qt)),pn(t)&&l.push(o.get(lr)));break;case"delete":F(t)||(l.push(o.get(Qt)),pn(t)&&l.push(o.get(lr)));break;case"set":pn(t)&&l.push(o.get(Qt));break}if(l.length===1)l[0]&&ar(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);ar(Yr(a))}}function ar(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&Xo(s);for(const s of n)s.computed||Xo(s)}function Xo(t,e){(t!==Ye||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const yh=$r("__proto__,__v_isRef,__isVue"),Ha=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kr)),Ch=Jr(),Eh=Jr(!1,!0),bh=Jr(!0),Zo=vh();function vh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let r=0,o=this.length;r<o;r++)Ue(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pn();const s=J(this)[e].apply(this,n);return On(),s}}),t}function Jr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Bh:za:e?qa:Va).get(s))return s;const o=F(s);if(!t&&o&&G(Zo,i))return Reflect.get(Zo,i,r);const l=Reflect.get(s,i,r);return(Kr(i)?Ha.has(i):yh(i))||(t||Ue(s,"get",i),e)?l:Ae(l)?o&&Gr(i)?l:l.value:he(l)?t?Ka(l):eo(l):l}}const wh=$a(),Ih=$a(!0);function $a(t=!1){return function(n,s,i,r){let o=n[s];if(ts(o)&&Ae(o)&&!Ae(i))return!1;if(!t&&(!cr(i)&&!ts(i)&&(o=J(o),i=J(i)),!F(n)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const l=F(n)&&Gr(s)?Number(s)<n.length:G(n,s),a=Reflect.set(n,s,i,r);return n===J(r)&&(l?Hs(i,o)&&yt(n,"set",s,i):yt(n,"add",s,i)),a}}function Th(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&yt(t,"delete",e,void 0),s}function Sh(t,e){const n=Reflect.has(t,e);return(!Kr(e)||!Ha.has(e))&&Ue(t,"has",e),n}function Rh(t){return Ue(t,"iterate",F(t)?"length":Qt),Reflect.ownKeys(t)}const ja={get:Ch,set:wh,deleteProperty:Th,has:Sh,ownKeys:Rh},Nh={get:bh,set(t,e){return!0},deleteProperty(t,e){return!0}},Ah=Te({},ja,{get:Eh,set:Ih}),Xr=t=>t,fi=t=>Reflect.getPrototypeOf(t);function ws(t,e,n=!1,s=!1){t=t.__v_raw;const i=J(t),r=J(e);n||(e!==r&&Ue(i,"get",e),Ue(i,"get",r));const{has:o}=fi(i),l=s?Xr:n?so:no;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Is(t,e=!1){const n=this.__v_raw,s=J(n),i=J(t);return e||(t!==i&&Ue(s,"has",t),Ue(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ts(t,e=!1){return t=t.__v_raw,!e&&Ue(J(t),"iterate",Qt),Reflect.get(t,"size",t)}function el(t){t=J(t);const e=J(this);return fi(e).has.call(e,t)||(e.add(t),yt(e,"add",t,t)),this}function tl(t,e){e=J(e);const n=J(this),{has:s,get:i}=fi(n);let r=s.call(n,t);r||(t=J(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Hs(e,o)&&yt(n,"set",t,e):yt(n,"add",t,e),this}function nl(t){const e=J(this),{has:n,get:s}=fi(e);let i=n.call(e,t);i||(t=J(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&yt(e,"delete",t,void 0),r}function sl(){const t=J(this),e=t.size!==0,n=t.clear();return e&&yt(t,"clear",void 0,void 0),n}function Ss(t,e){return function(s,i){const r=this,o=r.__v_raw,l=J(o),a=e?Xr:t?so:no;return!t&&Ue(l,"iterate",Qt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Rs(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?Xr:e?so:no;return!e&&Ue(r,"iterate",a?lr:Qt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function It(t){return function(...e){return t==="delete"?!1:this}}function xh(){const t={get(r){return ws(this,r)},get size(){return Ts(this)},has:Is,add:el,set:tl,delete:nl,clear:sl,forEach:Ss(!1,!1)},e={get(r){return ws(this,r,!1,!0)},get size(){return Ts(this)},has:Is,add:el,set:tl,delete:nl,clear:sl,forEach:Ss(!1,!0)},n={get(r){return ws(this,r,!0)},get size(){return Ts(this,!0)},has(r){return Is.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Ss(!0,!1)},s={get(r){return ws(this,r,!0,!0)},get size(){return Ts(this,!0)},has(r){return Is.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Ss(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Rs(r,!1,!1),n[r]=Rs(r,!0,!1),e[r]=Rs(r,!1,!0),s[r]=Rs(r,!0,!0)}),[t,n,e,s]}const[Dh,Ph,Oh,kh]=xh();function Zr(t,e){const n=e?t?kh:Oh:t?Ph:Dh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const Mh={get:Zr(!1,!1)},Lh={get:Zr(!1,!0)},Fh={get:Zr(!0,!1)},Va=new WeakMap,qa=new WeakMap,za=new WeakMap,Bh=new WeakMap;function Uh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wh(t){return t.__v_skip||!Object.isExtensible(t)?0:Uh(uh(t))}function eo(t){return ts(t)?t:to(t,!1,ja,Mh,Va)}function Hh(t){return to(t,!1,Ah,Lh,qa)}function Ka(t){return to(t,!0,Nh,Fh,za)}function to(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Wh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function gn(t){return ts(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function ts(t){return!!(t&&t.__v_isReadonly)}function cr(t){return!!(t&&t.__v_isShallow)}function Ga(t){return gn(t)||ts(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Ya(t){return $s(t,"__v_skip",!0),t}const no=t=>he(t)?eo(t):t,so=t=>he(t)?Ka(t):t;function $h(t){St&&Ye&&(t=J(t),Wa(t.dep||(t.dep=Yr())))}function jh(t,e){t=J(t),t.dep&&ar(t.dep)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function Vh(t){return Ae(t)?t.value:t}const qh={get:(t,e,n)=>Vh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Qa(t){return gn(t)?t:new Proxy(t,qh)}var Ja;class zh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ja]=!1,this._dirty=!0,this.effect=new Qr(e,()=>{this._dirty||(this._dirty=!0,jh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=J(this);return $h(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Ja="__v_isReadonly";function Kh(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=Ze):(s=t.get,i=t.set),new zh(s,i,r||!i,n)}function Rt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){_i(r,e,n)}return i}function qe(t,e,n,s){if(U(t)){const r=Rt(t,e,n,s);return r&&Oa(r)&&r.catch(o=>{_i(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(qe(t[r],e,n,s));return i}function _i(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Rt(a,null,10,[t,o,l]);return}}Gh(t,n,i,s)}function Gh(t,e,n,s=!0){console.error(t)}let ns=!1,ur=!1;const Ie=[];let at=0;const mn=[];let dt=null,jt=0;const Xa=Promise.resolve();let io=null;function Yh(t){const e=io||Xa;return t?e.then(this?t.bind(this):t):e}function Qh(t){let e=at+1,n=Ie.length;for(;e<n;){const s=e+n>>>1;ss(Ie[s])<t?e=s+1:n=s}return e}function ro(t){(!Ie.length||!Ie.includes(t,ns&&t.allowRecurse?at+1:at))&&(t.id==null?Ie.push(t):Ie.splice(Qh(t.id),0,t),Za())}function Za(){!ns&&!ur&&(ur=!0,io=Xa.then(tc))}function Jh(t){const e=Ie.indexOf(t);e>at&&Ie.splice(e,1)}function Xh(t){F(t)?mn.push(...t):(!dt||!dt.includes(t,t.allowRecurse?jt+1:jt))&&mn.push(t),Za()}function il(t,e=ns?at+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function ec(t){if(mn.length){const e=[...new Set(mn)];if(mn.length=0,dt){dt.push(...e);return}for(dt=e,dt.sort((n,s)=>ss(n)-ss(s)),jt=0;jt<dt.length;jt++)dt[jt]();dt=null,jt=0}}const ss=t=>t.id==null?1/0:t.id,Zh=(t,e)=>{const n=ss(t)-ss(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tc(t){ur=!1,ns=!0,Ie.sort(Zh);const e=Ze;try{for(at=0;at<Ie.length;at++){const n=Ie[at];n&&n.active!==!1&&Rt(n,null,14)}}finally{at=0,Ie.length=0,ec(),ns=!1,io=null,(Ie.length||mn.length)&&tc()}}function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||oe;f&&(i=n.map(g=>be(g)?g.trim():g)),h&&(i=n.map(js))}let l,a=s[l=Fi(e)]||s[l=Fi(wn(e))];!a&&r&&(a=s[l=Fi(Dn(e))]),a&&qe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(c,t,6,i)}}function nc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=nc(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(he(t)&&s.set(t,null),null):(F(r)?r.forEach(a=>o[a]=null):Te(o,r),he(t)&&s.set(t,o),o)}function pi(t,e){return!t||!ui(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Dn(e))||G(t,e))}let je=null,gi=null;function Vs(t){const e=je;return je=t,gi=t&&t.type.__scopeId||null,e}function td(t){gi=t}function nd(){gi=null}function sd(t,e=je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_l(-1);const r=Vs(e);let o;try{o=t(...i)}finally{Vs(r),s._d&&_l(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Bi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:w}=t;let P,B;const ae=Vs(t);try{if(n.shapeFlag&4){const ee=i||s;P=lt(u.call(ee,ee,h,r,g,f,m)),B=a}else{const ee=e;P=lt(ee.length>1?ee(r,{attrs:a,slots:l,emit:c}):ee(r,null)),B=e.props?a:id(a)}}catch(ee){Yn.length=0,_i(ee,t,1),P=Nt(gt)}let O=P;if(B&&w!==!1){const ee=Object.keys(B),{shapeFlag:me}=O;ee.length&&me&7&&(o&&ee.some(qr)&&(B=rd(B,o)),O=Ot(O,B))}return n.dirs&&(O=Ot(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),P=O,Vs(ae),P}const id=t=>{let e;for(const n in t)(n==="class"||n==="style"||ui(n))&&((e||(e={}))[n]=t[n]);return e},rd=(t,e)=>{const n={};for(const s in t)(!qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function od(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?rl(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!pi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?rl(s,o,c):!0:!!o;return!1}function rl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!pi(n,r))return!0}return!1}function ld({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ad=t=>t.__isSuspense;function cd(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Xh(t)}function ud(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function Ms(t,e,n=!1){const s=we||je;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const Ns={};function Ui(t,e,n){return sc(t,e,n)}function sc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=oe){const l=we;let a,c=!1,u=!1;if(Ae(t)?(a=()=>t.value,c=cr(t)):gn(t)?(a=()=>t,s=!0):F(t)?(u=!0,c=t.some(O=>gn(O)||cr(O)),a=()=>t.map(O=>{if(Ae(O))return O.value;if(gn(O))return zt(O);if(U(O))return Rt(O,l,2)})):U(t)?e?a=()=>Rt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),qe(t,l,3,[f])}:a=Ze,e&&s){const O=a;a=()=>zt(O())}let h,f=O=>{h=B.onStop=()=>{Rt(O,l,4)}},g;if(rs)if(f=Ze,e?n&&qe(e,l,3,[a(),u?[]:void 0,f]):a(),i==="sync"){const O=cf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Ze;let m=u?new Array(t.length).fill(Ns):Ns;const w=()=>{if(B.active)if(e){const O=B.run();(s||c||(u?O.some((ee,me)=>Hs(ee,m[me])):Hs(O,m)))&&(h&&h(),qe(e,l,3,[O,m===Ns?void 0:u&&m[0]===Ns?[]:m,f]),m=O)}else B.run()};w.allowRecurse=!!e;let P;i==="sync"?P=w:i==="post"?P=()=>De(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),P=()=>ro(w));const B=new Qr(a,P);e?n?w():m=B.run():i==="post"?De(B.run.bind(B),l&&l.suspense):B.run();const ae=()=>{B.stop(),l&&l.scope&&zr(l.scope.effects,B)};return g&&g.push(ae),ae}function hd(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?ic(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=we;In(this);const l=sc(i,r.bind(s),n);return o?In(o):Jt(),l}function ic(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function zt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))zt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)zt(t[n],e);else if(Pa(t)||pn(t))t.forEach(n=>{zt(n,e)});else if(Ma(t))for(const n in t)zt(t[n],e);return t}function dd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ac(()=>{t.isMounted=!0}),cc(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],fd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=ef(),s=dd();let i;return()=>{const r=e.default&&oc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==gt){o=w;break}}const l=J(t),{mode:a}=l;if(s.isLeaving)return Wi(o);const c=ol(o);if(!c)return Wi(o);const u=hr(c,l,s,n);dr(c,u);const h=n.subTree,f=h&&ol(h);let g=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(f&&f.type!==gt&&(!Vt(c,f)||g)){const w=hr(f,l,s,n);if(dr(f,w),a==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Wi(o);a==="in-out"&&c.type!==gt&&(w.delayLeave=(P,B,ae)=>{const O=rc(s,f);O[String(f.key)]=f,P._leaveCb=()=>{B(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return o}}},_d=fd;function rc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function hr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:w,onAppear:P,onAfterAppear:B,onAppearCancelled:ae}=e,O=String(t.key),ee=rc(n,t),me=(W,de)=>{W&&qe(W,s,9,de)},ut=(W,de)=>{const b=de[1];me(W,de),F(W)?W.every(N=>N.length<=1)&&b():W.length<=1&&b()},ze={mode:r,persisted:o,beforeEnter(W){let de=l;if(!n.isMounted)if(i)de=w||l;else return;W._leaveCb&&W._leaveCb(!0);const b=ee[O];b&&Vt(t,b)&&b.el._leaveCb&&b.el._leaveCb(),me(de,[W])},enter(W){let de=a,b=c,N=u;if(!n.isMounted)if(i)de=P||a,b=B||c,N=ae||u;else return;let H=!1;const k=W._enterCb=le=>{H||(H=!0,le?me(N,[W]):me(b,[W]),ze.delayedLeave&&ze.delayedLeave(),W._enterCb=void 0)};de?ut(de,[W,k]):k()},leave(W,de){const b=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return de();me(h,[W]);let N=!1;const H=W._leaveCb=k=>{N||(N=!0,de(),k?me(m,[W]):me(g,[W]),W._leaveCb=void 0,ee[b]===t&&delete ee[b])};ee[b]=t,f?ut(f,[W,H]):H()},clone(W){return hr(W,e,n,s)}};return ze}function Wi(t){if(mi(t))return t=Ot(t),t.children=null,t}function ol(t){return mi(t)?t.children?t.children[0]:void 0:t}function dr(t,e){t.shapeFlag&6&&t.component?dr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function oc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ot?(o.patchFlag&128&&i++,s=s.concat(oc(o.children,e,l))):(e||o.type!==gt)&&s.push(l!=null?Ot(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function pd(t){return U(t)?{setup:t,name:t.name}:t}const Ls=t=>!!t.type.__asyncLoader,mi=t=>t.type.__isKeepAlive;function gd(t,e){lc(t,"a",e)}function md(t,e){lc(t,"da",e)}function lc(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(yi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)mi(i.parent.vnode)&&yd(s,e,n,i),i=i.parent}}function yd(t,e,n,s){const i=yi(e,t,s,!0);uc(()=>{zr(s[e],i)},n)}function yi(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pn(),In(n);const l=qe(e,n,t,o);return Jt(),On(),l});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=we)=>(!rs||t==="sp")&&yi(t,(...s)=>e(...s),n),Cd=bt("bm"),ac=bt("m"),Ed=bt("bu"),bd=bt("u"),cc=bt("bum"),uc=bt("um"),vd=bt("sp"),wd=bt("rtg"),Id=bt("rtc");function Td(t,e=we){yi("ec",t,e)}function ll(t,e){const n=je;if(n===null)return t;const s=bi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=oe]=e[r];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&zt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Lt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Pn(),qe(a,n,8,[t.el,l,t,e]),On())}}const Sd=Symbol(),fr=t=>t?vc(t)?bi(t)||t.proxy:fr(t.parent):null,Gn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fr(t.parent),$root:t=>fr(t.root),$emit:t=>t.emit,$options:t=>oo(t),$forceUpdate:t=>t.f||(t.f=()=>ro(t.update)),$nextTick:t=>t.n||(t.n=Yh.bind(t.proxy)),$watch:t=>hd.bind(t)}),Hi=(t,e)=>t!==oe&&!t.__isScriptSetup&&G(t,e),Rd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Hi(s,e))return o[e]=1,s[e];if(i!==oe&&G(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,r[e];if(n!==oe&&G(n,e))return o[e]=4,n[e];_r&&(o[e]=0)}}const u=Gn[e];let h,f;if(u)return e==="$attrs"&&Ue(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==oe&&G(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,G(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Hi(i,e)?(i[e]=n,!0):s!==oe&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==oe&&G(t,o)||Hi(e,o)||(l=r[0])&&G(l,o)||G(s,o)||G(Gn,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let _r=!0;function Nd(t){const e=oo(t),n=t.proxy,s=t.ctx;_r=!1,e.beforeCreate&&al(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:w,deactivated:P,beforeDestroy:B,beforeUnmount:ae,destroyed:O,unmounted:ee,render:me,renderTracked:ut,renderTriggered:ze,errorCaptured:W,serverPrefetch:de,expose:b,inheritAttrs:N,components:H,directives:k,filters:le}=e;if(c&&Ad(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const q in o){const Y=o[q];U(Y)&&(s[q]=Y.bind(n))}if(i){const q=i.call(n,n);he(q)&&(t.data=eo(q))}if(_r=!0,r)for(const q in r){const Y=r[q],We=U(Y)?Y.bind(n,n):U(Y.get)?Y.get.bind(n,n):Ze,ht=!U(Y)&&U(Y.set)?Y.set.bind(n):Ze,Me=lf({get:We,set:ht});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Me.value,set:ce=>Me.value=ce})}if(l)for(const q in l)hc(l[q],s,n,q);if(a){const q=U(a)?a.call(n):a;Reflect.ownKeys(q).forEach(Y=>{ud(Y,q[Y])})}u&&al(u,t,"c");function fe(q,Y){F(Y)?Y.forEach(We=>q(We.bind(n))):Y&&q(Y.bind(n))}if(fe(Cd,h),fe(ac,f),fe(Ed,g),fe(bd,m),fe(gd,w),fe(md,P),fe(Td,W),fe(Id,ut),fe(wd,ze),fe(cc,ae),fe(uc,ee),fe(vd,de),F(b))if(b.length){const q=t.exposed||(t.exposed={});b.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:We=>n[Y]=We})})}else t.exposed||(t.exposed={});me&&t.render===Ze&&(t.render=me),N!=null&&(t.inheritAttrs=N),H&&(t.components=H),k&&(t.directives=k)}function Ad(t,e,n=Ze,s=!1){F(t)&&(t=pr(t));for(const i in t){const r=t[i];let o;he(r)?"default"in r?o=Ms(r.from||i,r.default,!0):o=Ms(r.from||i):o=Ms(r),Ae(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function al(t,e,n){qe(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function hc(t,e,n,s){const i=s.includes(".")?ic(n,s):()=>n[s];if(be(t)){const r=e[t];U(r)&&Ui(i,r)}else if(U(t))Ui(i,t.bind(n));else if(he(t))if(F(t))t.forEach(r=>hc(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&Ui(i,r,t)}}function oo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>qs(a,c,o,!0)),qs(a,e,o)),he(e)&&r.set(e,a),a}function qs(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qs(t,r,n,!0),i&&i.forEach(o=>qs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=xd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const xd={data:cl,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Ut,directives:Ut,watch:Pd,provide:cl,inject:Dd};function cl(t,e){return e?t?function(){return Te(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Dd(t,e){return Ut(pr(t),pr(e))}function pr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?Te(Te(Object.create(null),t),e):e}function Pd(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function Od(t,e,n,s=!1){const i={},r={};$s(r,Ei,1),t.propsDefaults=Object.create(null),dc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Hh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function kd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(pi(t.emitsOptions,f))continue;const g=e[f];if(a)if(G(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const m=wn(f);i[m]=gr(a,l,m,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{dc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!G(e,h)&&((u=Dn(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=gr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!G(e,h))&&(delete r[h],c=!0)}c&&yt(t,"set","$attrs")}function dc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Os(a))continue;const c=e[a];let u;i&&G(i,u=wn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:pi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=J(n),c=l||oe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=gr(i,a,h,c[h],t,!G(c,h))}}return o}function gr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=G(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(In(i),s=c[n]=a.call(null,e),Jt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}function fc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,g]=fc(h,e,!0);Te(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return he(t)&&s.set(t,_n),_n;if(F(r))for(let u=0;u<r.length;u++){const h=wn(r[u]);ul(h)&&(o[h]=oe)}else if(r)for(const u in r){const h=wn(u);if(ul(h)){const f=r[u],g=o[h]=F(f)||U(f)?{type:f}:Object.assign({},f);if(g){const m=fl(Boolean,g.type),w=fl(String,g.type);g[0]=m>-1,g[1]=w<0||m<w,(m>-1||G(g,"default"))&&l.push(h)}}}const c=[o,l];return he(t)&&s.set(t,c),c}function ul(t){return t[0]!=="$"}function hl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function dl(t,e){return hl(t)===hl(e)}function fl(t,e){return F(e)?e.findIndex(n=>dl(n,t)):U(e)&&dl(e,t)?0:-1}const _c=t=>t[0]==="_"||t==="$stable",lo=t=>F(t)?t.map(lt):[lt(t)],Md=(t,e,n)=>{if(e._n)return e;const s=sd((...i)=>lo(e(...i)),n);return s._c=!1,s},pc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(_c(i))continue;const r=t[i];if(U(r))e[i]=Md(i,r,s);else if(r!=null){const o=lo(r);e[i]=()=>o}}},gc=(t,e)=>{const n=lo(e);t.slots.default=()=>n},Ld=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),$s(e,"_",n)):pc(e,t.slots={})}else t.slots={},e&&gc(t,e);$s(t.slots,Ei,1)},Fd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Te(i,e),!n&&l===1&&delete i._):(r=!e.$stable,pc(e,i)),o=e}else e&&(gc(t,e),o={default:1});if(r)for(const l in i)!_c(l)&&!(l in o)&&delete i[l]};function mc(){return{app:null,config:{isNativeTag:lh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bd=0;function Ud(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!he(i)&&(i=null);const r=mc(),o=new Set;let l=!1;const a=r.app={_uid:Bd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:uf,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=Nt(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,bi(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function mr(t,e,n,s,i=!1){if(F(t)){t.forEach((f,g)=>mr(f,e&&(F(e)?e[g]:e),n,s,i));return}if(Ls(s)&&!i)return;const r=s.shapeFlag&4?bi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===oe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(be(c)?(u[c]=null,G(h,c)&&(h[c]=null)):Ae(c)&&(c.value=null)),U(a))Rt(a,l,12,[o,u]);else{const f=be(a),g=Ae(a);if(f||g){const m=()=>{if(t.f){const w=f?G(h,a)?h[a]:u[a]:a.value;i?F(w)&&zr(w,r):F(w)?w.includes(r)||w.push(r):f?(u[a]=[r],G(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,G(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,De(m,n)):m()}}}const De=cd;function Wd(t){return Hd(t)}function Hd(t,e){const n=fh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ze,insertStaticContent:m}=t,w=(d,_,p,C=null,y=null,T=null,R=!1,I=null,S=!!_.dynamicChildren)=>{if(d===_)return;d&&!Vt(d,_)&&(C=Re(d),ce(d,y,T,!0),d=null),_.patchFlag===-2&&(S=!1,_.dynamicChildren=null);const{type:E,ref:x,shapeFlag:A}=_;switch(E){case Ci:P(d,_,p,C);break;case gt:B(d,_,p,C);break;case $i:d==null&&ae(_,p,C,R);break;case ot:H(d,_,p,C,y,T,R,I,S);break;default:A&1?me(d,_,p,C,y,T,R,I,S):A&6?k(d,_,p,C,y,T,R,I,S):(A&64||A&128)&&E.process(d,_,p,C,y,T,R,I,S,xe)}x!=null&&y&&mr(x,d&&d.ref,T,_||d,!_)},P=(d,_,p,C)=>{if(d==null)s(_.el=l(_.children),p,C);else{const y=_.el=d.el;_.children!==d.children&&c(y,_.children)}},B=(d,_,p,C)=>{d==null?s(_.el=a(_.children||""),p,C):_.el=d.el},ae=(d,_,p,C)=>{[d.el,d.anchor]=m(d.children,_,p,C,d.el,d.anchor)},O=({el:d,anchor:_},p,C)=>{let y;for(;d&&d!==_;)y=f(d),s(d,p,C),d=y;s(_,p,C)},ee=({el:d,anchor:_})=>{let p;for(;d&&d!==_;)p=f(d),i(d),d=p;i(_)},me=(d,_,p,C,y,T,R,I,S)=>{R=R||_.type==="svg",d==null?ut(_,p,C,y,T,R,I,S):de(d,_,y,T,R,I,S)},ut=(d,_,p,C,y,T,R,I)=>{let S,E;const{type:x,props:A,shapeFlag:D,transition:L,dirs:z}=d;if(S=d.el=o(d.type,T,A&&A.is,A),D&8?u(S,d.children):D&16&&W(d.children,S,null,C,y,T&&x!=="foreignObject",R,I),z&&Lt(d,null,C,"created"),A){for(const Z in A)Z!=="value"&&!Os(Z)&&r(S,Z,null,A[Z],T,d.children,C,y,Le);"value"in A&&r(S,"value",null,A.value),(E=A.onVnodeBeforeMount)&&it(E,C,d)}ze(S,d,d.scopeId,R,C),z&&Lt(d,null,C,"beforeMount");const ne=(!y||y&&!y.pendingBranch)&&L&&!L.persisted;ne&&L.beforeEnter(S),s(S,_,p),((E=A&&A.onVnodeMounted)||ne||z)&&De(()=>{E&&it(E,C,d),ne&&L.enter(S),z&&Lt(d,null,C,"mounted")},y)},ze=(d,_,p,C,y)=>{if(p&&g(d,p),C)for(let T=0;T<C.length;T++)g(d,C[T]);if(y){let T=y.subTree;if(_===T){const R=y.vnode;ze(d,R,R.scopeId,R.slotScopeIds,y.parent)}}},W=(d,_,p,C,y,T,R,I,S=0)=>{for(let E=S;E<d.length;E++){const x=d[E]=I?Tt(d[E]):lt(d[E]);w(null,x,_,p,C,y,T,R,I)}},de=(d,_,p,C,y,T,R)=>{const I=_.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:x}=_;S|=d.patchFlag&16;const A=d.props||oe,D=_.props||oe;let L;p&&Ft(p,!1),(L=D.onVnodeBeforeUpdate)&&it(L,p,_,d),x&&Lt(_,d,p,"beforeUpdate"),p&&Ft(p,!0);const z=y&&_.type!=="foreignObject";if(E?b(d.dynamicChildren,E,I,p,C,z,T):R||Y(d,_,I,null,p,C,z,T,!1),S>0){if(S&16)N(I,_,A,D,p,C,y);else if(S&2&&A.class!==D.class&&r(I,"class",null,D.class,y),S&4&&r(I,"style",A.style,D.style,y),S&8){const ne=_.dynamicProps;for(let Z=0;Z<ne.length;Z++){const pe=ne[Z],Ke=A[pe],un=D[pe];(un!==Ke||pe==="value")&&r(I,pe,Ke,un,y,d.children,p,C,Le)}}S&1&&d.children!==_.children&&u(I,_.children)}else!R&&E==null&&N(I,_,A,D,p,C,y);((L=D.onVnodeUpdated)||x)&&De(()=>{L&&it(L,p,_,d),x&&Lt(_,d,p,"updated")},C)},b=(d,_,p,C,y,T,R)=>{for(let I=0;I<_.length;I++){const S=d[I],E=_[I],x=S.el&&(S.type===ot||!Vt(S,E)||S.shapeFlag&70)?h(S.el):p;w(S,E,x,null,C,y,T,R,!0)}},N=(d,_,p,C,y,T,R)=>{if(p!==C){if(p!==oe)for(const I in p)!Os(I)&&!(I in C)&&r(d,I,p[I],null,R,_.children,y,T,Le);for(const I in C){if(Os(I))continue;const S=C[I],E=p[I];S!==E&&I!=="value"&&r(d,I,E,S,R,_.children,y,T,Le)}"value"in C&&r(d,"value",p.value,C.value)}},H=(d,_,p,C,y,T,R,I,S)=>{const E=_.el=d?d.el:l(""),x=_.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:L}=_;L&&(I=I?I.concat(L):L),d==null?(s(E,p,C),s(x,p,C),W(_.children,p,x,y,T,R,I,S)):A>0&&A&64&&D&&d.dynamicChildren?(b(d.dynamicChildren,D,p,y,T,R,I),(_.key!=null||y&&_===y.subTree)&&yc(d,_,!0)):Y(d,_,p,x,y,T,R,I,S)},k=(d,_,p,C,y,T,R,I,S)=>{_.slotScopeIds=I,d==null?_.shapeFlag&512?y.ctx.activate(_,p,C,R,S):le(_,p,C,y,T,R,S):ie(d,_,S)},le=(d,_,p,C,y,T,R)=>{const I=d.component=Zd(d,C,y);if(mi(d)&&(I.ctx.renderer=xe),tf(I),I.asyncDep){if(y&&y.registerDep(I,fe),!d.el){const S=I.subTree=Nt(gt);B(null,S,_,p)}return}fe(I,d,_,p,y,T,R)},ie=(d,_,p)=>{const C=_.component=d.component;if(od(d,_,p))if(C.asyncDep&&!C.asyncResolved){q(C,_,p);return}else C.next=_,Jh(C.update),C.update();else _.el=d.el,C.vnode=_},fe=(d,_,p,C,y,T,R)=>{const I=()=>{if(d.isMounted){let{next:x,bu:A,u:D,parent:L,vnode:z}=d,ne=x,Z;Ft(d,!1),x?(x.el=z.el,q(d,x,R)):x=z,A&&ks(A),(Z=x.props&&x.props.onVnodeBeforeUpdate)&&it(Z,L,x,z),Ft(d,!0);const pe=Bi(d),Ke=d.subTree;d.subTree=pe,w(Ke,pe,h(Ke.el),Re(Ke),d,y,T),x.el=pe.el,ne===null&&ld(d,pe.el),D&&De(D,y),(Z=x.props&&x.props.onVnodeUpdated)&&De(()=>it(Z,L,x,z),y)}else{let x;const{el:A,props:D}=_,{bm:L,m:z,parent:ne}=d,Z=Ls(_);if(Ft(d,!1),L&&ks(L),!Z&&(x=D&&D.onVnodeBeforeMount)&&it(x,ne,_),Ft(d,!0),A&&Bn){const pe=()=>{d.subTree=Bi(d),Bn(A,d.subTree,d,y,null)};Z?_.type.__asyncLoader().then(()=>!d.isUnmounted&&pe()):pe()}else{const pe=d.subTree=Bi(d);w(null,pe,p,C,d,y,T),_.el=pe.el}if(z&&De(z,y),!Z&&(x=D&&D.onVnodeMounted)){const pe=_;De(()=>it(x,ne,pe),y)}(_.shapeFlag&256||ne&&Ls(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&De(d.a,y),d.isMounted=!0,_=p=C=null}},S=d.effect=new Qr(I,()=>ro(E),d.scope),E=d.update=()=>S.run();E.id=d.uid,Ft(d,!0),E()},q=(d,_,p)=>{_.component=d;const C=d.vnode.props;d.vnode=_,d.next=null,kd(d,_.props,C,p),Fd(d,_.children,p),Pn(),il(),On()},Y=(d,_,p,C,y,T,R,I,S=!1)=>{const E=d&&d.children,x=d?d.shapeFlag:0,A=_.children,{patchFlag:D,shapeFlag:L}=_;if(D>0){if(D&128){ht(E,A,p,C,y,T,R,I,S);return}else if(D&256){We(E,A,p,C,y,T,R,I,S);return}}L&8?(x&16&&Le(E,y,T),A!==E&&u(p,A)):x&16?L&16?ht(E,A,p,C,y,T,R,I,S):Le(E,y,T,!0):(x&8&&u(p,""),L&16&&W(A,p,C,y,T,R,I,S))},We=(d,_,p,C,y,T,R,I,S)=>{d=d||_n,_=_||_n;const E=d.length,x=_.length,A=Math.min(E,x);let D;for(D=0;D<A;D++){const L=_[D]=S?Tt(_[D]):lt(_[D]);w(d[D],L,p,null,y,T,R,I,S)}E>x?Le(d,y,T,!0,!1,A):W(_,p,C,y,T,R,I,S,A)},ht=(d,_,p,C,y,T,R,I,S)=>{let E=0;const x=_.length;let A=d.length-1,D=x-1;for(;E<=A&&E<=D;){const L=d[E],z=_[E]=S?Tt(_[E]):lt(_[E]);if(Vt(L,z))w(L,z,p,null,y,T,R,I,S);else break;E++}for(;E<=A&&E<=D;){const L=d[A],z=_[D]=S?Tt(_[D]):lt(_[D]);if(Vt(L,z))w(L,z,p,null,y,T,R,I,S);else break;A--,D--}if(E>A){if(E<=D){const L=D+1,z=L<x?_[L].el:C;for(;E<=D;)w(null,_[E]=S?Tt(_[E]):lt(_[E]),p,z,y,T,R,I,S),E++}}else if(E>D)for(;E<=A;)ce(d[E],y,T,!0),E++;else{const L=E,z=E,ne=new Map;for(E=z;E<=D;E++){const Be=_[E]=S?Tt(_[E]):lt(_[E]);Be.key!=null&&ne.set(Be.key,E)}let Z,pe=0;const Ke=D-z+1;let un=!1,zo=0;const Un=new Array(Ke);for(E=0;E<Ke;E++)Un[E]=0;for(E=L;E<=A;E++){const Be=d[E];if(pe>=Ke){ce(Be,y,T,!0);continue}let st;if(Be.key!=null)st=ne.get(Be.key);else for(Z=z;Z<=D;Z++)if(Un[Z-z]===0&&Vt(Be,_[Z])){st=Z;break}st===void 0?ce(Be,y,T,!0):(Un[st-z]=E+1,st>=zo?zo=st:un=!0,w(Be,_[st],p,null,y,T,R,I,S),pe++)}const Ko=un?$d(Un):_n;for(Z=Ko.length-1,E=Ke-1;E>=0;E--){const Be=z+E,st=_[Be],Go=Be+1<x?_[Be+1].el:C;Un[E]===0?w(null,st,p,Go,y,T,R,I,S):un&&(Z<0||E!==Ko[Z]?Me(st,p,Go,2):Z--)}}},Me=(d,_,p,C,y=null)=>{const{el:T,type:R,transition:I,children:S,shapeFlag:E}=d;if(E&6){Me(d.component.subTree,_,p,C);return}if(E&128){d.suspense.move(_,p,C);return}if(E&64){R.move(d,_,p,xe);return}if(R===ot){s(T,_,p);for(let A=0;A<S.length;A++)Me(S[A],_,p,C);s(d.anchor,_,p);return}if(R===$i){O(d,_,p);return}if(C!==2&&E&1&&I)if(C===0)I.beforeEnter(T),s(T,_,p),De(()=>I.enter(T),y);else{const{leave:A,delayLeave:D,afterLeave:L}=I,z=()=>s(T,_,p),ne=()=>{A(T,()=>{z(),L&&L()})};D?D(T,z,ne):ne()}else s(T,_,p)},ce=(d,_,p,C=!1,y=!1)=>{const{type:T,props:R,ref:I,children:S,dynamicChildren:E,shapeFlag:x,patchFlag:A,dirs:D}=d;if(I!=null&&mr(I,null,p,d,!0),x&256){_.ctx.deactivate(d);return}const L=x&1&&D,z=!Ls(d);let ne;if(z&&(ne=R&&R.onVnodeBeforeUnmount)&&it(ne,_,d),x&6)Li(d.component,p,C);else{if(x&128){d.suspense.unmount(p,C);return}L&&Lt(d,null,_,"beforeUnmount"),x&64?d.type.remove(d,_,p,y,xe,C):E&&(T!==ot||A>0&&A&64)?Le(E,_,p,!1,!0):(T===ot&&A&384||!y&&x&16)&&Le(S,_,p),C&&wt(d)}(z&&(ne=R&&R.onVnodeUnmounted)||L)&&De(()=>{ne&&it(ne,_,d),L&&Lt(d,null,_,"unmounted")},p)},wt=d=>{const{type:_,el:p,anchor:C,transition:y}=d;if(_===ot){tt(p,C);return}if(_===$i){ee(d);return}const T=()=>{i(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:I}=y,S=()=>R(p,T);I?I(d.el,T,S):S()}else T()},tt=(d,_)=>{let p;for(;d!==_;)p=f(d),i(d),d=p;i(_)},Li=(d,_,p)=>{const{bum:C,scope:y,update:T,subTree:R,um:I}=d;C&&ks(C),y.stop(),T&&(T.active=!1,ce(R,d,_,p)),I&&De(I,_),De(()=>{d.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Le=(d,_,p,C=!1,y=!1,T=0)=>{for(let R=T;R<d.length;R++)ce(d[R],_,p,C,y)},Re=d=>d.shapeFlag&6?Re(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),nt=(d,_,p)=>{d==null?_._vnode&&ce(_._vnode,null,null,!0):w(_._vnode||null,d,_,null,null,null,p),il(),ec(),_._vnode=d},xe={p:w,um:ce,m:Me,r:wt,mt:le,mc:W,pc:Y,pbc:b,n:Re,o:t};let Fe,Bn;return e&&([Fe,Bn]=e(xe)),{render:nt,hydrate:Fe,createApp:Ud(nt,Fe)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function yc(t,e,n=!1){const s=t.children,i=e.children;if(F(s)&&F(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),n||yc(o,l)),l.type===Ci&&(l.el=o.el)}}function $d(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const jd=t=>t.__isTeleport,ot=Symbol(void 0),Ci=Symbol(void 0),gt=Symbol(void 0),$i=Symbol(void 0),Yn=[];let Je=null;function Cc(t=!1){Yn.push(Je=t?null:[])}function Vd(){Yn.pop(),Je=Yn[Yn.length-1]||null}let is=1;function _l(t){is+=t}function qd(t){return t.dynamicChildren=is>0?Je||_n:null,Vd(),is>0&&Je&&Je.push(t),t}function Ec(t,e,n,s,i,r){return qd(ft(t,e,n,s,i,r,!0))}function zd(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const Ei="__vInternal",bc=({key:t})=>t??null,Fs=({ref:t,ref_key:e,ref_for:n})=>t!=null?be(t)||Ae(t)||U(t)?{i:je,r:t,k:e,f:!!n}:t:null;function ft(t,e=null,n=null,s=0,i=null,r=t===ot?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bc(e),ref:e&&Fs(e),scopeId:gi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return l?(ao(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=be(n)?8:16),is>0&&!o&&Je&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Je.push(a),a}const Nt=Kd;function Kd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Sd)&&(t=gt),zd(t)){const l=Ot(t,e,!0);return n&&ao(l,n),is>0&&!r&&Je&&(l.shapeFlag&6?Je[Je.indexOf(t)]=l:Je.push(l)),l.patchFlag|=-2,l}if(of(t)&&(t=t.__vccOpts),e){e=Gd(e);let{class:l,style:a}=e;l&&!be(l)&&(e.class=Vr(l)),he(a)&&(Ga(a)&&!F(a)&&(a=Te({},a)),e.style=jr(a))}const o=be(t)?1:ad(t)?128:jd(t)?64:he(t)?4:U(t)?2:0;return ft(t,e,n,s,i,o,r,!0)}function Gd(t){return t?Ga(t)||Ei in t?Te({},t):t:null}function Ot(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Qd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&bc(l),ref:e&&e.ref?n&&i?F(i)?i.concat(Fs(e)):[i,Fs(e)]:Fs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Yd(t=" ",e=0){return Nt(Ci,null,t,e)}function lt(t){return t==null||typeof t=="boolean"?Nt(gt):F(t)?Nt(ot,null,t.slice()):typeof t=="object"?Tt(t):Nt(Ci,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ot(t)}function ao(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ao(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Ei in e)?e._ctx=je:i===3&&je&&(je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:je},n=32):(e=String(e),s&64?(n=16,e=[Yd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Vr([e.class,s.class]));else if(i==="style")e.style=jr([e.style,s.style]);else if(ui(i)){const r=e[i],o=s[i];o&&r!==o&&!(F(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function it(t,e,n,s=null){qe(t,e,7,[n,s])}const Jd=mc();let Xd=0;function Zd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Jd,r={uid:Xd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fc(s,i),emitsOptions:nc(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let we=null;const ef=()=>we||je,In=t=>{we=t,t.scope.on()},Jt=()=>{we&&we.scope.off(),we=null};function vc(t){return t.vnode.shapeFlag&4}let rs=!1;function tf(t,e=!1){rs=e;const{props:n,children:s}=t.vnode,i=vc(t);Od(t,n,i,e),Ld(t,s);const r=i?nf(t,e):void 0;return rs=!1,r}function nf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ya(new Proxy(t.ctx,Rd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?rf(t):null;In(t),Pn();const r=Rt(s,t,0,[t.props,i]);if(On(),Jt(),Oa(r)){if(r.then(Jt,Jt),e)return r.then(o=>{pl(t,o,e)}).catch(o=>{_i(o,t,0)});t.asyncDep=r}else pl(t,r,e)}else wc(t,e)}function pl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Qa(e)),wc(t,n)}let gl;function wc(t,e,n){const s=t.type;if(!t.render){if(!e&&gl&&!s.render){const i=s.template||oo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Te(Te({isCustomElement:r,delimiters:l},o),a);s.render=gl(i,c)}}t.render=s.render||Ze}In(t),Pn(),Nd(t),On(),Jt()}function sf(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function rf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=sf(t))},slots:t.slots,emit:t.emit,expose:e}}function bi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qa(Ya(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}}))}function of(t){return U(t)&&"__vccOpts"in t}const lf=(t,e)=>Kh(t,e,rs),af=Symbol(""),cf=()=>Ms(af),uf="3.2.45",hf="http://www.w3.org/2000/svg",qt=typeof document<"u"?document:null,ml=qt&&qt.createElement("template"),df={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?qt.createElementNS(hf,t):qt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>qt.createTextNode(t),createComment:t=>qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ml.innerHTML=s?`<svg>${t}</svg>`:t;const l=ml.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ff(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function _f(t,e,n){const s=t.style,i=be(n);if(n&&!i){for(const r in n)yr(s,r,n[r]);if(e&&!be(e))for(const r in e)n[r]==null&&yr(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const yl=/\s*!important$/;function yr(t,e,n){if(F(n))n.forEach(s=>yr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=pf(t,e);yl.test(n)?t.setProperty(Dn(s),n.replace(yl,""),"important"):t[s]=n}}const Cl=["Webkit","Moz","ms"],ji={};function pf(t,e){const n=ji[e];if(n)return n;let s=wn(e);if(s!=="filter"&&s in t)return ji[e]=s;s=La(s);for(let i=0;i<Cl.length;i++){const r=Cl[i]+s;if(r in t)return ji[e]=r}return e}const El="http://www.w3.org/1999/xlink";function gf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(El,e.slice(6,e.length)):t.setAttributeNS(El,e,n);else{const r=oh(e);n==null||r&&!xa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function mf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=xa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function yf(t,e,n,s){t.removeEventListener(e,n,s)}function Cf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=Ef(e);if(s){const c=r[e]=wf(s,i);dn(t,l,c,a)}else o&&(yf(t,l,o,a),r[e]=void 0)}}const bl=/(?:Once|Passive|Capture)$/;function Ef(t){let e;if(bl.test(t)){e={};let s;for(;s=t.match(bl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dn(t.slice(2)),e]}let Vi=0;const bf=Promise.resolve(),vf=()=>Vi||(bf.then(()=>Vi=0),Vi=Date.now());function wf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qe(If(s,n.value),e,5,[s])};return n.value=t,n.attached=vf(),n}function If(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const vl=/^on[a-z]/,Tf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?ff(t,s,i):e==="style"?_f(t,n,s):ui(e)?qr(e)||Cf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sf(t,e,s,i))?mf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),gf(t,e,s,i))};function Sf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vl.test(e)&&be(n)?!1:e in t}const Rf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};_d.props;const wl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>ks(e,n):e};function Nf(t){t.target.composing=!0}function Il(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=wl(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=js(l)),t._assign(l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Nf),dn(t,"compositionend",Il),dn(t,"change",Il))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=wl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&js(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Af=Te({patchProp:Tf},df);let Sl;function xf(){return Sl||(Sl=Wd(Af))}const Df=(...t)=>{const e=xf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Pf(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Pf(t){return be(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v=function(t,e){if(!t)throw kn(e)},kn=function(t){return new Error("Firebase Database ("+Ic.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Of=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},co={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Of(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Sc=function(t){const e=Tc(t);return co.encodeByteArray(e,!0)},zs=function(t){return Sc(t).replace(/\./g,"")},Cr=function(t){try{return co.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){return Rc(void 0,t)}function Rc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Mf(n)||(t[n]=Rc(t[n],e[n]));return t}function Mf(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=()=>Lf().__FIREBASE_DEFAULTS__,Bf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Uf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cr(t[1]);return e&&JSON.parse(e)},Nc=()=>{try{return Ff()||Bf()||Uf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wf=t=>{var e,n;return(n=(e=Nc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hf=t=>{const e=Wf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},$f=()=>{var t;return(t=Nc())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[zs(JSON.stringify(n)),zs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ac(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vf())}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xc(){return Ic.NODE_ADMIN===!0}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function Kf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="FirebaseError";class ms extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Gf,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dc.prototype.create)}}class Dc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Yf(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ms(i,l,s)}}function Yf(t,e){return t.replace(Qf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Qf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=os(Cr(r[0])||""),n=os(Cr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Jf=function(t){const e=Pc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Xf=function(t){const e=Pc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Er(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ks(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function br(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Rl(r)&&Rl(o)){if(!br(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Rl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Sn(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _t;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i_(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:s_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s_(t){return t===Wt?void 0:t}function i_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const o_={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},l_=se.INFO,a_={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},c_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=a_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oc{constructor(e){this.name=e,this._logLevel=l_,this._logHandler=c_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const u_=(t,e)=>e.some(n=>t instanceof n);let Nl,Al;function h_(){return Nl||(Nl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d_(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kc=new WeakMap,vr=new WeakMap,Mc=new WeakMap,qi=new WeakMap,uo=new WeakMap;function f_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kc.set(n,t)}).catch(()=>{}),uo.set(e,t),e}function __(t){if(vr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});vr.set(t,e)}let wr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p_(t){wr=t(wr)}function g_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zi(this),e,...n);return Mc.set(s,e.sort?e.sort():[e]),At(s)}:d_().includes(t)?function(...e){return t.apply(zi(this),e),At(kc.get(this))}:function(...e){return At(t.apply(zi(this),e))}}function m_(t){return typeof t=="function"?g_(t):(t instanceof IDBTransaction&&__(t),u_(t,h_())?new Proxy(t,wr):t)}function At(t){if(t instanceof IDBRequest)return f_(t);if(qi.has(t))return qi.get(t);const e=m_(t);return e!==t&&(qi.set(t,e),uo.set(e,t)),e}const zi=t=>uo.get(t);function y_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=At(o);return s&&o.addEventListener("upgradeneeded",a=>{s(At(o.result),a.oldVersion,a.newVersion,At(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const C_=["get","getKey","getAll","getAllKeys","count"],E_=["put","add","delete","clear"],Ki=new Map;function xl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ki.get(e))return Ki.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=E_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||C_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ki.set(e,r),r}p_(t=>({...t,get:(e,n,s)=>xl(e,n)||t.get(e,n,s),has:(e,n)=>!!xl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function v_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ir="@firebase/app",Dl="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new Oc("@firebase/app"),w_="@firebase/app-compat",I_="@firebase/analytics-compat",T_="@firebase/analytics",S_="@firebase/app-check-compat",R_="@firebase/app-check",N_="@firebase/auth",A_="@firebase/auth-compat",x_="@firebase/database",D_="@firebase/database-compat",P_="@firebase/functions",O_="@firebase/functions-compat",k_="@firebase/installations",M_="@firebase/installations-compat",L_="@firebase/messaging",F_="@firebase/messaging-compat",B_="@firebase/performance",U_="@firebase/performance-compat",W_="@firebase/remote-config",H_="@firebase/remote-config-compat",$_="@firebase/storage",j_="@firebase/storage-compat",V_="@firebase/firestore",q_="@firebase/firestore-compat",z_="firebase",K_="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="[DEFAULT]",G_={[Ir]:"fire-core",[w_]:"fire-core-compat",[T_]:"fire-analytics",[I_]:"fire-analytics-compat",[R_]:"fire-app-check",[S_]:"fire-app-check-compat",[N_]:"fire-auth",[A_]:"fire-auth-compat",[x_]:"fire-rtdb",[D_]:"fire-rtdb-compat",[P_]:"fire-fn",[O_]:"fire-fn-compat",[k_]:"fire-iid",[M_]:"fire-iid-compat",[L_]:"fire-fcm",[F_]:"fire-fcm-compat",[B_]:"fire-perf",[U_]:"fire-perf-compat",[W_]:"fire-rc",[H_]:"fire-rc-compat",[$_]:"fire-gcs",[j_]:"fire-gcs-compat",[V_]:"fire-fst",[q_]:"fire-fst-compat","fire-js":"fire-js",[z_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new Map,Sr=new Map;function Y_(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ys(t){const e=t.name;if(Sr.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,t);for(const n of Gs.values())Y_(n,t);return!0}function Q_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new Dc("app","Firebase",J_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=K_;function Lc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Tr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=$f()),!n)throw xt.create("no-options");const r=Gs.get(i);if(r){if(br(n,r.options)&&br(s,r.config))return r;throw xt.create("duplicate-app",{appName:i})}const o=new r_(i);for(const a of Sr.values())o.addComponent(a);const l=new X_(n,s,o);return Gs.set(i,l),l}function ep(t=Tr){const e=Gs.get(t);if(!e&&t===Tr)return Lc();if(!e)throw xt.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=G_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}Ys(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="firebase-heartbeat-database",np=1,as="firebase-heartbeat-store";let Gi=null;function Fc(){return Gi||(Gi=y_(tp,np,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(as)}}}).catch(t=>{throw xt.create("idb-open",{originalErrorMessage:t.message})})),Gi}async function sp(t){try{return(await Fc()).transaction(as).objectStore(as).get(Bc(t))}catch(e){if(e instanceof ms)Zt.warn(e.message);else{const n=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function Pl(t,e){try{const s=(await Fc()).transaction(as,"readwrite");return await s.objectStore(as).put(e,Bc(t)),s.done}catch(n){if(n instanceof ms)Zt.warn(n.message);else{const s=xt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function Bc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=1024,rp=30*24*60*60*1e3;class op{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ap(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ol();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ol(),{heartbeatsToSend:n,unsentEntries:s}=lp(this._heartbeatsCache.heartbeats),i=zs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ol(){return new Date().toISOString().substring(0,10)}function lp(t,e=ip){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),kl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?Kf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function kl(t){return zs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t){Ys(new ls("platform-logger",e=>new b_(e),"PRIVATE")),Ys(new ls("heartbeat",e=>new op(e),"PRIVATE")),yn(Ir,Dl,t),yn(Ir,Dl,"esm2017"),yn("fire-js","")}cp("");var up="firebase",hp="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(up,hp,"app");const Ml="@firebase/database",Ll="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc="";function dp(t){Uc=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:os(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fp(e)}}catch{}return new _p},Kt=Wc("localStorage"),Rr=Wc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Oc("@firebase/database"),pp=function(){let t=1;return function(){return t++}}(),Hc=function(t){const e=t_(t),n=new e_;n.update(e);const s=n.digest();return co.encodeByteArray(s)},ys=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ys.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Xt=null,Fl=!0;const gp=function(t,e){v(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cn.logLevel=se.VERBOSE,Xt=Cn.log.bind(Cn),e&&Rr.set("logging_enabled",!0)):typeof t=="function"?Xt=t:(Xt=null,Rr.remove("logging_enabled"))},ve=function(...t){if(Fl===!0&&(Fl=!1,Xt===null&&Rr.get("logging_enabled")===!0&&gp(!0)),Xt){const e=ys.apply(null,t);Xt(e)}},Cs=function(t){return function(...e){ve(t,...e)}},Nr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ys(...t);Cn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${ys(...t)}`;throw Cn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+ys(...t);Cn.warn(e)},mp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wi=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yp=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",en="[MAX_NAME]",an=function(t,e){if(t===e)return 0;if(t===Rn||e===en)return-1;if(e===Rn||t===en)return 1;{const n=Bl(t),s=Bl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Cp=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},ho=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=ho(t[e[s]]);return n+="}",n},$c=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jc=function(t){v(!wi(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Ep=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vp(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const wp=new RegExp("^-?(0*)\\d{1,10}$"),Ip=-2147483648,Tp=2147483647,Bl=function(t){if(wp.test(t)){const e=Number(t);if(e>=Ip&&e<=Tp)return e}return null},Mn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class En{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}En.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="5",Vc="v",qc="s",zc="r",Kc="f",Gc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Yc="ls",Qc="p",Ar="ac",Jc="websocket",Xc="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ap(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function eu(t,e,n){v(typeof e=="string","typeof type must == string"),v(typeof n=="object","typeof params must == object");let s;if(e===Jc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Xc)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ap(t)&&(n.ns=t.namespace);const i=[];return Se(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.counters_={}}incrementCounter(e,n=1){ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return kf(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={},Qi={};function _o(t){const e=t.toString();return Yi[e]||(Yi[e]=new xp),Yi[e]}function Dp(t,e){const n=t.toString();return Qi[n]||(Qi[n]=e()),Qi[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Mn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="start",Op="close",kp="pLPCommand",Mp="pRTLPCB",tu="id",nu="pw",su="ser",Lp="cb",Fp="seg",Bp="ts",Up="d",Wp="dframe",iu=1870,ru=30,Hp=iu-ru,$p=25e3,jp=3e4;class fn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Cs(e),this.stats_=_o(n),this.urlFn=a=>(this.appCheckToken&&(a[Ar]=this.appCheckToken),eu(n,Xc,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Pp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jp)),yp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new po((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ul)this.id=l,this.password=a;else if(o===Op)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ul]="t",s[su]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Lp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Vc]=fo,this.transportSessionId&&(s[qc]=this.transportSessionId),this.lastSessionId&&(s[Yc]=this.lastSessionId),this.applicationId&&(s[Qc]=this.applicationId),this.appCheckToken&&(s[Ar]=this.appCheckToken),typeof location<"u"&&location.hostname&&Gc.test(location.hostname)&&(s[zc]=Kc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ep()&&!bp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Sc(n),i=$c(s,Hp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Wp]="t",s[tu]=e,s[nu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class po{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pp(),window[kp+this.uniqueCallbackIdentifier]=e,window[Mp+this.uniqueCallbackIdentifier]=n,this.myIFrame=po.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tu]=this.myID,e[nu]=this.myPW,e[su]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ru+s.length<=iu;){const o=this.pendingSegs.shift();s=s+"&"+Fp+i+"="+o.seg+"&"+Bp+i+"="+o.ts+"&"+Up+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor($p)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=16384,qp=45e3;let Qs=null;typeof MozWebSocket<"u"?Qs=MozWebSocket:typeof WebSocket<"u"&&(Qs=WebSocket);class Qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Cs(this.connId),this.stats_=_o(n),this.connURL=Qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Vc]=fo,typeof location<"u"&&location.hostname&&Gc.test(location.hostname)&&(o[zc]=Kc),n&&(o[qc]=n),s&&(o[Yc]=s),i&&(o[Ar]=i),r&&(o[Qc]=r),eu(e,Jc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;xc(),this.mySock=new Qs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qs!==null&&!Qe.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=os(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$c(n,Vp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of cs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=6e4,Kp=5e3,Gp=10*1024,Yp=100*1024,Ji="t",Wl="d",Qp="s",Hl="r",Jp="e",$l="o",jl="a",Vl="n",ql="p",Xp="h";class Zp{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Cs("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Qn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ji in e){const n=e[Ji];n===jl?this.upgradeIfSecondaryHealthy_():n===Hl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$l&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ql,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(Ji,e);if(Wl in e){const s=e[Wl];if(n===Xp)this.onHandshake_(s);else if(n===Vl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Qp?this.onConnectionShutdown_(s):n===Hl?this.onReset_(s):n===Jp?Nr("Server Error: "+s):n===$l?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fo!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Qn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Kp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ql,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends lu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ac()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Js}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=32,Kl=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new X("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function go(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function us(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function au(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof X)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new X(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Pe(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tg(t,e){const n=us(t,0),s=us(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=an(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function mo(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ve(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ng{constructor(e,n){this.errorPrefix_=n,this.parts_=us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=vi(this.parts_[s]);cu(this)}}function sg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vi(e),cu(t)}function ig(t){const e=t.parts_.pop();t.byteLength_-=vi(e),t.parts_.length>0&&(t.byteLength_-=1)}function cu(t){if(t.byteLength_>Kl)throw new Error(t.errorPrefix_+"has a key path longer than "+Kl+" bytes ("+t.byteLength_+").");if(t.parts_.length>zl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zl+") or object contains a cycle "+Ht(t))}function Ht(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo extends lu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new yo}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=1e3,rg=60*5*1e3,Gl=30*1e3,og=1.3,lg=3e4,ag="server_kill",Yl=3;class mt extends ou{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=mt.nextPersistentConnectionId_++,this.log_=Cs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hn,this.maxReconnectDelay_=rg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!xc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Js.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new _t,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;mt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ct(e,"w")){const s=Tn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Xf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Jf(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Nr("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lg&&(this.reconnectDelay_=Hn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*og)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){v(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Zp(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ag)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Er(this.interruptReasons_)&&(this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ho(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new X(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yl&&(this.reconnectDelay_=Gl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Uc.replace(/\./g,"-")]=1,Ac()?e["framework.cordova"]=1:qf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Js.getInstance().currentlyOnline();return Er(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(Rn,e),i=new V(Rn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class uu extends Ii{static get __EMPTY_NODE(){return As}static set __EMPTY_NODE(e){As=e}compare(e,n){return an(e.name,n.name)}isDefinedOn(e){throw kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(en,As)}makePost(e,n){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,As)}toString(){return".key"}}const bn=new uu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class cg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new xs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new xs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new xs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new xs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t,e){return an(t.name,e.name)}function Co(t,e){return an(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr;function hg(t){xr=t}const hu=function(t){return typeof t=="number"?"number:"+jc(t):"string:"+t},du=function(t){if(t.isLeafNode()){const e=t.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ct(e,".sv"),"Priority must be a string or number.")}else v(t===xr||t.isEmpty(),"priority of unexpected type.");v(t===xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),du(this.priorityNode_)}static set __childrenNodeConstructor(e){Ql=e}static get __childrenNodeConstructor(){return Ql}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:$(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||kt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jc(this.value_):e+=this.value_,this.lazyHash_=Hc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+n),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu,_u;function dg(t){fu=t}function fg(t){_u=t}class _g extends Ii{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?an(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(en,new ye("[PRIORITY-POST]",_u))}makePost(e,n){const s=fu(e);return new V(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new _g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=Math.log(2);class gg{constructor(e){const n=r=>parseInt(Math.log(r)/pg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xs=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,null,null);{const g=parseInt(u/2,10)+a,m=i(a,g),w=i(g+1,c);return h=t[g],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,m,w)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,w){const P=h-m,B=h;h-=m;const ae=i(P+1,B),O=t[P],ee=n?n(O):O;g(new Ce(ee,O.node,w,null,ae))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const w=a.nextBitIsOne(),P=Math.pow(2,a.count-(m+1));w?f(P,Ce.BLACK):(f(P,Ce.BLACK),f(P,Ce.RED))}return u},o=new gg(t.length),l=r(o);return new Oe(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;const hn={};class pt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return v(hn&&ue,"ChildrenNode.ts has not been loaded"),Xi=Xi||new pt({".priority":hn},{".priority":ue}),Xi}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return ct(this.indexSet_,e.toString())}addIndex(e,n){v(e!==bn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Xs(s,e.getCompare()):l=hn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new pt(u,c)}addToIndexes(e,n){const s=Ks(this.indexes_,(i,r)=>{const o=Tn(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===hn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(V.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Xs(l,o.getCompare())}else return hn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new V(e.name,l))),a.insert(e,e.node)}});return new pt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ks(this.indexes_,i=>{if(i===hn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new pt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n;class M{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&du(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new M(new Oe(Co),null,pt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$n:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(v(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new M(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{v($(e)!==".priority"||kt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hu(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Es?-1:0}withIndex(e){if(e===bn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bn?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mg extends M{constructor(){super(new Oe(Co),M.EMPTY_NODE,pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const Es=new mg;Object.defineProperties(V,{MIN:{value:new V(Rn,M.EMPTY_NODE)},MAX:{value:new V(en,Es)}});uu.__EMPTY_NODE=M.EMPTY_NODE;ye.__childrenNodeConstructor=M;hg(Es);fg(Es);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=!0;function ge(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,ge(e))}if(!(t instanceof Array)&&yg){const n=[];let s=!1;if(Se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new V(o,a)))}}),n.length===0)return M.EMPTY_NODE;const r=Xs(n,ug,o=>o.name,Co);if(s){const o=Xs(n,ue.getCompare());return new M(r,ge(e),new pt({".priority":o},{".priority":ue}))}else return new M(r,ge(e),pt.Default)}else{let n=M.EMPTY_NODE;return Se(t,(s,i)=>{if(ct(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}dg(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg extends Ii{constructor(e){super(),this.indexPath_=e,v(!j(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?an(e.name,n.name):r}makePost(e,n){const s=ge(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,Es);return new V(en,e)}toString(){return us(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg extends Ii{compare(e,n){const s=e.node.compareTo(n.node);return s===0?an(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=ge(e);return new V(n,s)}toString(){return".value"}}const bg=new Eg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ds(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Nn(n,s)):o.trackChildChange(ds(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(hs(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ds(i,r,o))}else s.trackChildChange(Nn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.indexedFilter_=new Eo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fs.getStartPost_(e),this.endPost_=fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new V(o,l))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=M.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const l=e;v(l.numChildren()===this.limit_,"");const a=new V(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ds(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(hs(n,h));const w=l.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Nn(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(hs(c.name,c.node)),r.trackChildChange(Nn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new bo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ig(t){return t.loadsAllData()?new Eo(t.getIndex()):t.hasLimit()?new wg(t):new fs(t)}function Jl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===bg?n="$value":t.index_===bn?n="$key":(v(t.index_ instanceof Cg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xl(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs extends ou{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Cs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zs.getListenId_(e,s),l={};this.listens_[o]=l;const a=Jl(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Tn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Zs.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Jl(e._queryParams),s=e._path.toString(),i=new _t;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Zf(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=os(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(){return{value:null,children:new Map}}function Ln(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,ei());const i=t.children.get(s);e=te(e),Ln(i,e,n)}}function Dr(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ue,(s,i)=>{Ln(t,new X(s),i)}),Dr(t,e)}}else if(t.children.size>0){const n=$(e);return e=te(e),t.children.has(n)&&Dr(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Pr(t,e,n){t.value!==null?n(e,t.value):Sg(t,(s,i)=>{const r=new X(e.toString()+"/"+s);Pr(i,r,n)})}function Sg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=10*1e3,Ng=30*1e3,Ag=5*60*1e3;class xg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Rg(e);const s=Zl+(Ng-Zl)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Se(e,(i,r)=>{r>0&&ct(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Qn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ag))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function gu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function vo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=gu()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new ti(Q(),n,this.revert)}}else return v($(this.path)===e,"operationForChild called for unrelated child."),new ti(te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new _s(this.source,Q()):new _s(this.source,te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return j(this.path)?new tn(this.source,Q(),this.snap.getImmediateChild(e)):new tn(this.source,te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new tn(this.source,Q(),n.value):new ps(this.source,Q(),n)}else return v($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Pg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(vg(o.childName,o.snapshotNode))}),jn(t,i,"child_removed",e,s,n),jn(t,i,"child_added",e,s,n),jn(t,i,"child_moved",r,s,n),jn(t,i,"child_changed",e,s,n),jn(t,i,"value",e,s,n),i}function jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>kg(t,l,a)),o.forEach(l=>{const a=Og(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Og(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function kg(t,e,n){if(e.childName==null||n.childName==null)throw kn("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e){return{eventCache:t,serverCache:e}}function Jn(t,e,n,s){return Ti(new nn(e,n,s),t.serverCache)}function mu(t,e,n,s){return Ti(t.eventCache,new nn(e,n,s))}function Or(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;const Mg=()=>(Zi||(Zi=new Oe(Cp)),Zi);class re{constructor(e,n=Mg()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Se(e,(s,i)=>{n=n.set(new X(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(j(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:_e(new X(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(te(e)):new re(null)}}set(e,n){if(j(e))return new re(n,this.children);{const s=$(e),r=(this.children.get(s)||new re(null)).set(te(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(j(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(te(e)):null}}setTree(e,n){if(j(e))return n;{const s=$(e),r=(this.children.get(s)||new re(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(j(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(te(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(j(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),_e(n,i),s):new re(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new re(null))}}function Xn(t,e,n){if(j(e))return new et(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pe(i,e);return r=r.updateChild(o,n),new et(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new et(r)}}}function ea(t,e,n){let s=t;return Se(n,(i,r)=>{s=Xn(s,_e(e,i),r)}),s}function ta(t,e){if(j(e))return et.empty();{const n=t.writeTree_.setTree(e,new re(null));return new et(n)}}function kr(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function na(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Dt(t,e){if(j(e))return t;{const n=cn(t,e);return n!=null?new et(new re(n)):new et(t.writeTree_.subtree(e))}}function Mr(t){return t.writeTree_.isEmpty()}function An(t,e){return yu(Q(),t.writeTree_,e)}function yu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=yu(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e){return vu(e,t)}function Lg(t,e,n,s,i){v(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Xn(t.visibleWrites,e,n)),t.lastWriteId=s}function Fg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Bg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);v(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Ug(l,s.path)?i=!1:Ve(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return Wg(t),!0;if(s.snap)t.visibleWrites=ta(t.visibleWrites,s.path);else{const l=s.children;Se(l,a=>{t.visibleWrites=ta(t.visibleWrites,_e(s.path,a))})}return!0}else return!1}function Ug(t,e){if(t.snap)return Ve(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ve(_e(t.path,n),e))return!0;return!1}function Wg(t){t.visibleWrites=Cu(t.allWrites,Hg,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hg(t){return t.visible}function Cu(t,e,n){let s=et.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ve(n,o)?(l=Pe(n,o),s=Xn(s,l,r.snap)):Ve(o,n)&&(l=Pe(o,n),s=Xn(s,Q(),r.snap.getChild(l)));else if(r.children){if(Ve(n,o))l=Pe(n,o),s=ea(s,l,r.children);else if(Ve(o,n))if(l=Pe(o,n),j(l))s=ea(s,Q(),r.children);else{const a=Tn(r.children,$(l));if(a){const c=a.getChild(te(l));s=Xn(s,Q(),c)}}}else throw kn("WriteRecord should have .snap or .children")}}return s}function Eu(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=Dt(t.visibleWrites,e);if(Mr(o))return n;if(n==null&&!kr(o,Q()))return null;{const l=n||M.EMPTY_NODE;return An(o,l)}}}else{const r=Dt(t.visibleWrites,e);if(!i&&Mr(r))return n;if(!i&&n==null&&!kr(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ve(c.path,e)||Ve(e,c.path))},l=Cu(t.allWrites,o,e),a=n||M.EMPTY_NODE;return An(l,a)}}}function $g(t,e,n){let s=M.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Dt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const a=An(Dt(r,new X(o)),l);s=s.updateImmediateChild(o,a)}),na(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Dt(t.visibleWrites,e);return na(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function jg(t,e,n,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(kr(t.visibleWrites,r))return null;{const o=Dt(t.visibleWrites,r);return Mr(o)?i.getChild(n):An(o,i.getChild(n))}}function Vg(t,e,n,s){const i=_e(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Dt(t.visibleWrites,i);return An(o,s.getNode().getImmediateChild(n))}else return null}function qg(t,e){return cn(t.visibleWrites,e)}function zg(t,e,n,s,i,r,o){let l;const a=Dt(t.visibleWrites,e),c=cn(a,Q());if(c!=null)l=c;else if(n!=null)l=An(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function Kg(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function ni(t,e,n,s){return Eu(t.writeTree,t.treePath,e,n,s)}function To(t,e){return $g(t.writeTree,t.treePath,e)}function sa(t,e,n,s){return jg(t.writeTree,t.treePath,e,n,s)}function si(t,e){return qg(t.writeTree,_e(t.treePath,e))}function Gg(t,e,n,s,i,r){return zg(t.writeTree,t.treePath,e,n,s,i,r)}function So(t,e,n){return Vg(t.writeTree,t.treePath,e,n)}function bu(t,e){return vu(_e(t.treePath,e),t.writeTree)}function vu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;v(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ds(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Nn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ds(s,e.snapshotNode,i.oldSnap));else throw kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const wu=new Qg;class Ro{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return So(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=Gg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){return{filter:t}}function Xg(t,e){v(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Zg(t,e,n,s,i){const r=new Yg;let o,l;if(n.type===Xe.OVERWRITE){const c=n;c.source.fromUser?o=Lr(t,e,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=ii(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const c=n;c.source.fromUser?o=tm(t,e,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Fr(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const c=n;c.revert?o=im(t,e,c.path,s,i,r):o=nm(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=sm(t,e,n.path,s,r);else throw kn("Unknown operation type: "+n.type);const a=r.getChanges();return em(e,o,a),{viewCache:o,changes:a}}function em(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Or(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(pu(Or(e)))}}function Iu(t,e,n,s,i,r){const o=e.eventCache;if(si(s,n)!=null)return e;{let l,a;if(j(n))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof M?c:M.EMPTY_NODE,h=To(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ni(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){v(kt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=sa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=te(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=sa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=So(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Jn(e,l,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function ii(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=$(n);if(!a.isCompleteForPath(n)&&kt(n)>1)return e;const m=te(n),P=a.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(a.getNode(),P):c=u.updateChild(a.getNode(),g,P,m,wu,null)}const h=mu(e,c,a.isFullyInitialized()||j(n),u.filtersNodes()),f=new Ro(i,h,r);return Iu(t,h,n,i,f,l)}function Lr(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ro(i,e,r);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Jn(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Jn(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=te(n),g=l.getNode().getImmediateChild(h);let m;if(j(f))m=s;else{const w=u.getCompleteChild(h);w!=null?go(f)===".priority"&&w.getChild(au(f)).isEmpty()?m=w:m=w.updateChild(f,s):m=M.EMPTY_NODE}if(g.equals(m))a=e;else{const w=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=Jn(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ia(t,e){return t.eventCache.isCompleteForChild(e)}function tm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=_e(n,a);ia(e,$(u))&&(l=Lr(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=_e(n,a);ia(e,$(u))||(l=Lr(t,l,u,c,i,r,o))}),l}function ra(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Fr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;j(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=ra(t,g,f);a=ii(t,a,new X(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),w=ra(t,m,f);a=ii(t,a,new X(h),w,i,r,o,l)}}),a}function nm(t,e,n,s,i,r,o){if(si(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(j(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ii(t,e,n,a.getNode().getChild(n),i,r,l,o);if(j(n)){let c=new re(null);return a.getNode().forEachChild(bn,(u,h)=>{c=c.set(new X(u),h)}),Fr(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const f=_e(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Fr(t,e,n,c,i,r,l,o)}}function sm(t,e,n,s,i){const r=e.serverCache,o=mu(e,r.getNode(),r.isFullyInitialized()||j(n),r.isFiltered());return Iu(t,o,n,s,wu,i)}function im(t,e,n,s,i,r){let o;if(si(s,n)!=null)return e;{const l=new Ro(s,e,i),a=e.eventCache.getNode();let c;if(j(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ni(s,sn(e));else{const h=e.serverCache.getNode();v(h instanceof M,"serverChildren would be complete if leaf node"),u=To(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=$(n);let h=So(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,te(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,M.EMPTY_NODE,te(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ni(s,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||si(s,Q())!=null,Jn(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Eo(s.getIndex()),r=Ig(s);this.processor_=Jg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,l.getNode(),null),u=new nn(a,o.isFullyInitialized(),i.filtersNodes()),h=new nn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ti(h,u),this.eventGenerator_=new Dg(this.query_)}get query(){return this.query_}}function om(t){return t.viewCache_.serverCache.getNode()}function lm(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function oa(t){return t.eventRegistrations_.length===0}function am(t,e){t.eventRegistrations_.push(e)}function la(t,e,n){const s=[];if(n){v(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function aa(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(v(sn(t.viewCache_),"We should always have a full cache before handling merges"),v(Or(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Zg(t.processor_,i,e,n,s);return Xg(t.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Tu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function cm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(Nn(r,o))}),n.isFullyInitialized()&&s.push(pu(n.getNode())),Tu(t,s,n.getNode(),e)}function Tu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Pg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri;class um{constructor(){this.views=new Map}}function hm(t){v(!ri,"__referenceConstructor has already been defined"),ri=t}function dm(){return v(ri,"Reference.ts has not been loaded"),ri}function fm(t){return t.views.size===0}function No(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),aa(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(aa(o,e,n,s));return r}}function _m(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ni(n,i?s:null),a=!1;l?a=!0:s instanceof M?(l=To(n,s),a=!1):(l=M.EMPTY_NODE,a=!1);const c=Ti(new nn(l,a,!1),new nn(s,i,!1));return new rm(e,c)}return o}function pm(t,e,n,s,i,r){const o=_m(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),am(o,n),cm(o,n)}function gm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Mt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(la(c,n,s)),oa(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(la(a,n,s)),oa(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!Mt(t)&&r.push(new(dm())(e._repo,e._path)),{removed:r,events:o}}function Su(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const s of t.views.values())n=n||lm(s,e);return n}function Ru(t,e){if(e._queryParams.loadsAllData())return Si(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Nu(t,e){return Ru(t,e)!=null}function Mt(t){return Si(t)!=null}function Si(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;function mm(t){v(!oi,"__referenceConstructor has already been defined"),oi=t}function ym(){return v(oi,"Reference.ts has not been loaded"),oi}let Cm=1;class ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=Kg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Au(t,e,n,s,i){return Lg(t.pendingWriteTree_,e,n,s,i),i?bs(t,new tn(gu(),e,n)):[]}function Gt(t,e,n=!1){const s=Fg(t.pendingWriteTree_,e);if(Bg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Q(),!0):Se(s.children,o=>{r=r.set(new X(o),!0)}),bs(t,new ti(s.path,r,n))}else return[]}function Ri(t,e,n){return bs(t,new tn(vo(),e,n))}function Em(t,e,n){const s=re.fromObject(n);return bs(t,new ps(vo(),e,s))}function bm(t,e){return bs(t,new _s(vo(),e))}function vm(t,e,n){const s=xo(t,n);if(s){const i=Do(s),r=i.path,o=i.queryId,l=Pe(r,e),a=new _s(wo(o),l);return Po(t,r,a)}else return[]}function Br(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Nu(o,e))){const a=gm(o,e,n,s);fm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,g)=>Mt(g));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=Tm(f);for(let m=0;m<g.length;++m){const w=g[m],P=w.query,B=Pu(t,w);t.listenProvider_.startListening(Zn(P),li(t,P),B.hashFn,B.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Zn(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(Ni(f));t.listenProvider_.stopListening(Zn(f),g)}))}Sm(t,c)}return l}function wm(t,e,n,s){const i=xo(t,s);if(i!=null){const r=Do(i),o=r.path,l=r.queryId,a=Pe(o,e),c=new tn(wo(l),a,n);return Po(t,o,c)}else return[]}function Im(t,e,n,s){const i=xo(t,s);if(i){const r=Do(i),o=r.path,l=r.queryId,a=Pe(o,e),c=re.fromObject(n),u=new ps(wo(l),a,c);return Po(t,o,u)}else return[]}function ua(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const m=Pe(f,i);r=r||vn(g,m),o=o||Mt(g)});let l=t.syncPointTree_.get(i);l?(o=o||Mt(l),r=r||vn(l,Q())):(l=new um,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const w=vn(m,Q());w&&(r=r.updateImmediateChild(g,w))}));const c=Nu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ni(e);v(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Rm();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=Io(t.pendingWriteTree_,i);let h=pm(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Ru(l,e);h=h.concat(Nm(t,e,f))}return h}function Ao(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Pe(o,e),c=vn(l,a);if(c)return c});return Eu(i,e,r,n,!0)}function bs(t,e){return xu(e,t.syncPointTree_,null,Io(t.pendingWriteTree_,Q()))}function xu(t,e,n,s){if(j(t.path))return Du(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=vn(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=bu(s,o);r=r.concat(xu(l,a,c,u))}return i&&(r=r.concat(No(i,t,s,n))),r}}function Du(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=vn(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=bu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Du(u,l,a,c)))}),i&&(r=r.concat(No(i,t,s,n))),r}function Pu(t,e){const n=e.query,s=li(t,n);return{hashFn:()=>(om(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vm(t,n._path,s):bm(t,n._path);{const r=vp(i,n);return Br(t,n,null,r)}}}}function li(t,e){const n=Ni(e);return t.queryToTagMap.get(n)}function Ni(t){return t._path.toString()+"$"+t._queryIdentifier}function xo(t,e){return t.tagToQueryMap.get(e)}function Do(t){const e=t.indexOf("$");return v(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function Po(t,e,n){const s=t.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=Io(t.pendingWriteTree_,e);return No(s,n,i,null)}function Tm(t){return t.fold((e,n,s)=>{if(n&&Mt(n))return[Si(n)];{let i=[];return n&&(i=Su(n)),Se(s,(r,o)=>{i=i.concat(o)}),i}})}function Zn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(ym())(t._repo,t._path):t}function Sm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ni(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Rm(){return Cm++}function Nm(t,e,n){const s=e._path,i=li(t,e),r=Pu(t,n),o=t.listenProvider_.startListening(Zn(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)v(!Mt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!j(c)&&u&&Mt(u))return[Si(u).query];{let f=[];return u&&(f=f.concat(Su(u).map(g=>g.query))),Se(h,(g,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Zn(u),li(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oo(n)}node(){return this.node_}}class ko{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new ko(this.syncTree_,n)}node(){return Ao(this.syncTree_,this.path_)}}const Am=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ha=function(t,e,n){if(!t||typeof t!="object")return t;if(v(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return xm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Dm(t[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},xm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:v(!1,"Unexpected server value: "+t)}},Dm=function(t,e,n){t.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Pm=function(t,e,n,s){return Mo(e,new ko(n,t),s)},Ou=function(t,e,n){return Mo(t,new Oo(e),n)};function Mo(t,e,n){const s=t.getPriority().val(),i=ha(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=ha(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(ue,(l,a)=>{const c=Mo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Fo(t,e){let n=e instanceof X?e:new X(e),s=t,i=$(n);for(;i!==null;){const r=Tn(s.node.children,i)||{children:{},childCount:0};s=new Lo(i,s,r),n=te(n),i=$(n)}return s}function Fn(t){return t.node.value}function ku(t,e){t.node.value=e,Ur(t)}function Mu(t){return t.node.childCount>0}function Om(t){return Fn(t)===void 0&&!Mu(t)}function Ai(t,e){Se(t.node.children,(n,s)=>{e(new Lo(n,t,s))})}function Lu(t,e,n,s){n&&!s&&e(t),Ai(t,i=>{Lu(i,e,!0,s)}),n&&s&&e(t)}function km(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vs(t){return new X(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function Ur(t){t.parent!==null&&Mm(t.parent,t.name,t)}function Mm(t,e,n){const s=Om(n),i=ct(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ur(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ur(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=/[\[\].#$\/\u0000-\u001F\u007F]/,Fm=/[\[\].#$\u0000-\u001F\u007F]/,er=10*1024*1024,Bo=function(t){return typeof t=="string"&&t.length!==0&&!Lm.test(t)},Fu=function(t){return typeof t=="string"&&t.length!==0&&!Fm.test(t)},Bm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Fu(t)},Bu=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!wi(t)||t&&typeof t=="object"&&ct(t,".sv")},ai=function(t,e,n,s){s&&e===void 0||xi(Sn(t,"value"),e,n)},xi=function(t,e,n){const s=n instanceof X?new ng(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ht(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ht(s)+" with contents = "+e.toString());if(wi(e))throw new Error(t+"contains "+e.toString()+" "+Ht(s));if(typeof e=="string"&&e.length>er/3&&vi(e)>er)throw new Error(t+"contains a string greater than "+er+" utf8 bytes "+Ht(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Se(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Bo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ht(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sg(s,o),xi(t,l,s),ig(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ht(s)+" in addition to actual children.")}},Um=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=us(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Bo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tg);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ve(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Wm=function(t,e,n,s){if(s&&e===void 0)return;const i=Sn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Se(e,(o,l)=>{const a=new X(o);if(xi(i,l,_e(n,a)),go(a)===".priority"&&!Bu(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Um(i,r)},Hm=function(t,e,n){if(!(n&&e===void 0)){if(wi(e))throw new Error(Sn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Bu(e))throw new Error(Sn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Uu=function(t,e,n,s){if(!(s&&n===void 0)&&!Fu(n))throw new Error(Sn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$m=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uu(t,e,n,s)},Yt=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Bo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Bm(n))throw new Error(Sn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Uo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!mo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wu(t,e,n){Uo(t,n),Hu(t,s=>mo(s,e))}function Et(t,e,n){Uo(t,n),Hu(t,s=>Ve(s,e)||Ve(e,s))}function Hu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xt&&ve("event: "+n.toString()),Mn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="repo_interrupt",Km=25;class Gm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ei(),this.transactionQueueTree_=new Lo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ym(t,e,n){if(t.stats_=_o(t.repoInfo_),t.forceRestClient_||Sp())t.server_=new Zs(t.repoInfo_,(s,i,r,o)=>{da(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mt(t.repoInfo_,e,(s,i,r,o)=>{da(t,s,i,r,o)},s=>{fa(t,s)},s=>{Qm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Dp(t.repoInfo_,()=>new xg(t.stats_,t.server_)),t.infoData_=new Tg,t.infoSyncTree_=new ca({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ri(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ho(t,"connected",!1),t.serverSyncTree_=new ca({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Et(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function $u(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Wo(t){return Am({timestamp:$u(t)})}function da(t,e,n,s,i){t.dataUpdateCount++;const r=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ks(n,c=>ge(c));o=Im(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=wm(t.serverSyncTree_,r,a,i)}else if(s){const a=Ks(n,c=>ge(c));o=Em(t.serverSyncTree_,r,a)}else{const a=ge(n);o=Ri(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Di(t,r)),Et(t.eventQueue_,l,o)}function fa(t,e){Ho(t,"connected",e),e===!1&&Xm(t)}function Qm(t,e){Se(e,(n,s)=>{Ho(t,n,s)})}function Ho(t,e,n){const s=new X("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Ri(t.infoSyncTree_,s,i);Et(t.eventQueue_,s,r)}function ju(t){return t.nextWriteId_++}function Jm(t,e,n,s,i){$o(t,"set",{path:e.toString(),value:n,priority:s});const r=Wo(t),o=ge(n,s),l=Ao(t.serverSyncTree_,e),a=Ou(o,l,r),c=ju(t),u=Au(t.serverSyncTree_,e,a,c,!0);Uo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const m=f==="ok";m||ke("set at "+e+" failed: "+f);const w=Gt(t.serverSyncTree_,c,!m);Et(t.eventQueue_,e,w),xn(t,i,f,g)});const h=Gu(t,e);Di(t,h),Et(t.eventQueue_,h,[])}function Xm(t){$o(t,"onDisconnectEvents");const e=Wo(t),n=ei();Pr(t.onDisconnect_,Q(),(i,r)=>{const o=Pm(i,r,t.serverSyncTree_,e);Ln(n,i,o)});let s=[];Pr(n,Q(),(i,r)=>{s=s.concat(Ri(t.serverSyncTree_,i,r));const o=Gu(t,i);Di(t,o)}),t.onDisconnect_=ei(),Et(t.eventQueue_,Q(),s)}function Zm(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Dr(t.onDisconnect_,e),xn(t,n,s,i)})}function _a(t,e,n,s){const i=ge(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Ln(t.onDisconnect_,e,i),xn(t,s,r,o)})}function ey(t,e,n,s,i){const r=ge(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&Ln(t.onDisconnect_,e,r),xn(t,i,o,l)})}function ty(t,e,n,s){if(Er(n)){ve("onDisconnect().update() called with empty data.  Don't do anything."),xn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Se(n,(o,l)=>{const a=ge(l);Ln(t.onDisconnect_,_e(e,o),a)}),xn(t,s,i,r)})}function ny(t,e,n){let s;$(e._path)===".info"?s=ua(t.infoSyncTree_,e,n):s=ua(t.serverSyncTree_,e,n),Wu(t.eventQueue_,e._path,s)}function Wr(t,e,n){let s;$(e._path)===".info"?s=Br(t.infoSyncTree_,e,n):s=Br(t.serverSyncTree_,e,n),Wu(t.eventQueue_,e._path,s)}function sy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zm)}function $o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function xn(t,e,n,s){e&&Mn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Vu(t,e,n){return Ao(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function jo(t,e=t.transactionQueueTree_){if(e||Pi(t,e),Fn(e)){const n=zu(t,e);v(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iy(t,vs(e),n)}else Mu(e)&&Ai(e,n=>{jo(t,n)})}function iy(t,e,n){const s=n.map(c=>c.currentWriteId),i=Vu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];v(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{$o(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Gt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Pi(t,Fo(t.transactionQueueTree_,e)),jo(t,t.transactionQueueTree_),Et(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Mn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Di(t,e)}},o)}function Di(t,e){const n=qu(t,e),s=vs(n),i=zu(t,n);return ry(t,i,s),s}function ry(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Pe(n,a.path);let u=!1,h;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Km)u=!0,h="maxretry",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Vu(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){xi("transaction failed: Data returned ",g,a.path);let m=ge(g);typeof g=="object"&&g!=null&&ct(g,".priority")||(m=m.updatePriority(f.getPriority()));const P=a.currentWriteId,B=Wo(t),ae=Ou(m,f,B);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=ae,a.currentWriteId=ju(t),o.splice(o.indexOf(P),1),i=i.concat(Au(t.serverSyncTree_,a.path,ae,a.currentWriteId,a.applyLocally)),i=i.concat(Gt(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0))}Et(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Pi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mn(s[l]);jo(t,t.transactionQueueTree_)}function qu(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Fn(s)===void 0;)s=Fo(s,n),e=te(e),n=$(e);return s}function zu(t,e){const n=[];return Ku(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ku(t,e,n){const s=Fn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ai(e,i=>{Ku(t,i,n)})}function Pi(t,e){const n=Fn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,ku(e,n.length>0?n:void 0)}Ai(e,s=>{Pi(t,s)})}function Gu(t,e){const n=vs(qu(t,e)),s=Fo(t.transactionQueueTree_,e);return km(s,i=>{tr(t,i)}),tr(t,s),Lu(s,i=>{tr(t,i)}),n}function tr(t,e){const n=Fn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(v(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ku(e,void 0):n.length=r+1,Et(t.eventQueue_,vs(e),i);for(let o=0;o<s.length;o++)Mn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ly(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const pa=function(t,e){const n=ay(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Zc(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new X(n.pathString)}},ay=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=oy(t.substring(u,h)));const f=ly(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ga.charAt(n%64),n=Math.floor(n/64);v(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ga.charAt(e[i]);return v(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class Qu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new _t;return Zm(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Yt("OnDisconnect.remove",this._path);const e=new _t;return _a(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Yt("OnDisconnect.set",this._path),ai("OnDisconnect.set",e,this._path,!1);const n=new _t;return _a(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Yt("OnDisconnect.setWithPriority",this._path),ai("OnDisconnect.setWithPriority",e,this._path,!1),Hm("OnDisconnect.setWithPriority",n,!1);const s=new _t;return ey(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Yt("OnDisconnect.update",this._path),Wm("OnDisconnect.update",e,this._path,!1);const n=new _t;return ty(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return j(this._path)?null:go(this._path)}get ref(){return new vt(this._repo,this._path)}get _queryIdentifier(){const e=Xl(this._queryParams),n=ho(e);return n==="{}"?"default":n}get _queryObject(){return Xl(this._queryParams)}isEqual(e){if(e=ln(e),!(e instanceof Vo))return!1;const n=this._repo===e._repo,s=mo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eg(this._path)}}class vt extends Vo{constructor(e,n){super(e,n,new bo,!1)}get parent(){const e=au(this._path);return e===null?null:new vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),s=rn(this.ref,e);return new gs(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new gs(i,rn(this.ref,s),ue)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ma(t,e){return t=ln(t),t._checkNotDeleted("ref"),e!==void 0?rn(t._root,e):t._root}function rn(t,e){return t=ln(t),$(t._path)===null?$m("child","path",e,!1):Uu("child","path",e,!1),new vt(t._repo,_e(t._path,e))}function ya(t){return t=ln(t),new uy(t._repo,t._path)}function hy(t,e){t=ln(t),Yt("push",t._path),ai("push",e,t._path,!0);const n=$u(t._repo),s=cy(n),i=rn(t,s),r=rn(t,s);let o;return e!=null?o=ci(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ca(t){return Yt("remove",t._path),ci(t,null)}function ci(t,e){t=ln(t),Yt("set",t._path),ai("set",e,t._path,!1);const n=new _t;return Jm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Oi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Yu("value",this,new gs(e.snapshotNode,new vt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qu(this,e,n):null}matches(e){return e instanceof Oi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ki{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Qu(this,e,n):null}createEvent(e,n){v(e.childName!=null,"Child events should have a childName.");const s=rn(new vt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Yu(e.type,this,new gs(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ki?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Xu(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{Wr(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ju(n,r||void 0),l=e==="value"?new Oi(o):new ki(e,o);return ny(t._repo,t,l),()=>Wr(t._repo,t,l)}function dy(t,e,n,s){return Xu(t,"value",e,n,s)}function nr(t,e,n,s){return Xu(t,"child_added",e,n,s)}function Ea(t,e,n){let s=null;const i=n?new Ju(n):null;e==="value"?s=new Oi(i):e&&(s=new ki(e,i)),Wr(t._repo,t,s)}hm(vt);mm(vt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy="FIREBASE_DATABASE_EMULATOR_HOST",Hr={};let _y=!1;function py(t,e,n,s){t.repoInfo_=new Zc(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function gy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=pa(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[fy]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=pa(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new En(En.OWNER):new Np(t.name,t.options,e);jm("Invalid Firebase Database URL",o),j(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yy(l,t,u,new Rp(t.name,n));return new Cy(h,t)}function my(t,e){const n=Hr[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sy(t),delete n[t.key]}function yy(t,e,n,s){let i=Hr[e.name];i||(i={},Hr[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gm(t,_y,n,s),i[t.toURLString()]=r,r}class Cy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ym(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(my(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function ba(t=ep(),e){const n=Q_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Hf("database");s&&Ey(n,...s)}return n}function Ey(t,e,n,s={}){t=ln(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new En(En.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:jf(s.mockUserToken,t.app.options.projectId);r=new En(o)}py(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t){dp(Z_),Ys(new ls("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Ml,Ll,t),yn(Ml,Ll,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};by();/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const va=64*1024,vy=5*1e3,wy=5*1e3;function wa(t){const e=new Uint8Array(t);for(let n=0;n<t;n++)e[n]=Math.random()*256|0;return e}function Zu(){if(typeof globalThis>"u")return null;const t={RTCPeerConnection:globalThis.RTCPeerConnection||globalThis.mozRTCPeerConnection||globalThis.webkitRTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription||globalThis.mozRTCSessionDescription||globalThis.webkitRTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate||globalThis.mozRTCIceCandidate||globalThis.webkitRTCIceCandidate};return t.RTCPeerConnection?t:null}function K(t,e){return Object.defineProperty(t,"code",{value:e,enumerable:!0,configurable:!0}),t}function Ia(t){return t.replace(/a=ice-options:trickle\s\n/g,"")}function Iy(t){console.warn(t)}class on{constructor(e={}){if(this._map=new Map,this._id=wa(4).toString("hex").slice(0,7),this._doDebug=e.debug,this._debug("new peer %o",e),this.channelName=e.initiator?e.channelName||wa(20).toString("hex"):null,this.initiator=e.initiator||!1,this.channelConfig=e.channelConfig||on.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},on.config,e.config),this.offerOptions=e.offerOptions||{},this.answerOptions=e.answerOptions||{},this.sdpTransform=e.sdpTransform||(n=>n),this.streams=e.streams||(e.stream?[e.stream]:[]),this.trickle=e.trickle!==void 0?e.trickle:!0,this.allowHalfTrickle=e.allowHalfTrickle!==void 0?e.allowHalfTrickle:!1,this.iceCompleteTimeout=e.iceCompleteTimeout||vy,this.destroyed=!1,this.destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,this._wrtc=e.wrtc&&typeof e.wrtc=="object"?e.wrtc:Zu(),!this._wrtc)throw K(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._senderMap=new Map,this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new this._wrtc.RTCPeerConnection(this.config)}catch(n){this.destroy(K(n,"ERR_PC_CONSTRUCTOR"));return}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=n=>{this._onIceCandidate(n)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(n=>{this.destroy(K(n,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=n=>{this._setupData(n)},this.streams&&this.streams.forEach(n=>{this.addStream(n)}),this._pc.ontrack=n=>{this._onTrack(n)},this._debug("initial negotiation"),this._needsNegotiation()}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof e=="string")try{e=JSON.parse(e)}catch{e={}}this._debug("signal()"),e.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),e.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(e.transceiverRequest.kind,e.transceiverRequest.init)),e.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(e.candidate):this._pendingCandidates.push(e.candidate)),e.sdp&&this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(n=>{this._addIceCandidate(n)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(n=>{this.destroy(K(n,"ERR_SET_REMOTE_DESCRIPTION"))}),!e.sdp&&!e.candidate&&!e.renegotiate&&!e.transceiverRequest&&this.destroy(K(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(e){const n=new this._wrtc.RTCIceCandidate(e);this._pc.addIceCandidate(n).catch(s=>{!n.address||n.address.endsWith(".local")?Iy("Ignoring unsupported ICE candidate."):this.destroy(K(s,"ERR_ADD_ICE_CANDIDATE"))})}send(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(e)}}addTransceiver(e,n){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(e,n),this._needsNegotiation()}catch(s){this.destroy(K(s,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:e,init:n}})}}addStream(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),e.getTracks().forEach(n=>{this.addTrack(n,e)})}}addTrack(e,n){if(this.destroying)return;if(this.destroyed)throw K(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const s=this._senderMap.get(e)||new Map;let i=s.get(n);if(!i)i=this._pc.addTrack(e,n),s.set(n,i),this._senderMap.set(e,s),this._needsNegotiation();else throw i.removed?K(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):K(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(e,n,s){if(this.destroying)return;if(this.destroyed)throw K(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const i=this._senderMap.get(e),r=i?i.get(s):null;if(!r)throw K(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");n&&this._senderMap.set(n,i),r.replaceTrack!=null?r.replaceTrack(n):this.destroy(K(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK"))}removeTrack(e,n){if(this.destroying)return;if(this.destroyed)throw K(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const s=this._senderMap.get(e),i=s?s.get(n):null;if(!i)throw K(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{i.removed=!0,this._pc.removeTrack(i)}catch(r){r.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(i):this.destroy(K(r,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),e.getTracks().forEach(n=>{this.removeTrack(n,e)})}}_needsNegotiation(){this._debug("_needsNegotiation"),!this._batchedNegotiation&&(this._batchedNegotiation=!0,queueMicrotask(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),setTimeout(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}destroy(e){this.destroyed||this.destroying||(this.destroying=!0,this._debug("destroying (error: %s)",e&&(e.message||e)),queueMicrotask(()=>{if(this.destroyed=!0,this.destroying=!1,this._debug("destroy (error: %s)",e&&(e.message||e)),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,e&&this.emit("error",e),this.emit("close")}))}_setupData(e){if(!e.channel)return this.destroy(K(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=e.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=va),this.channelName=this._channel.label,this._channel.onmessage=s=>{this._onChannelMessage(s)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=s=>{this.destroy(K(s,"ERR_DATA_CHANNEL"))};let n=!1;this._closingInterval=setInterval(()=>{this._channel&&this._channel.readyState==="closing"?(n&&this._onChannelClose(),n=!0):n=!1},wy)}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=setTimeout(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(e=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(e.sdp=Ia(e.sdp)),e.sdp=this.sdpTransform(e.sdp);const n=()=>{if(this.destroyed)return;const r=this._pc.localDescription||e;this._debug("signal"),this.emit("signal",{type:r.type,sdp:r.sdp})},s=()=>{this._debug("createOffer success"),!this.destroyed&&(this.trickle||this._iceComplete?n():this.once("_iceComplete",n))},i=r=>{this.destroy(K(r,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(e).then(s).catch(i)}).catch(e=>{this.destroy(K(e,"ERR_CREATE_OFFER"))})}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(e=>{!e.mid&&e.sender.track&&!e.requested&&(e.requested=!0,this.addTransceiver(e.sender.track.kind))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(e=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(e.sdp=Ia(e.sdp)),e.sdp=this.sdpTransform(e.sdp);const n=()=>{if(this.destroyed)return;const r=this._pc.localDescription||e;this._debug("signal"),this.emit("signal",{type:r.type,sdp:r.sdp}),this.initiator||this._requestMissingTransceivers()},s=()=>{this.destroyed||(this.trickle||this._iceComplete?n():this.once("_iceComplete",n))},i=r=>{this.destroy(K(r,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(e).then(s).catch(i)}).catch(e=>{this.destroy(K(e,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._pc.connectionState==="failed"&&this.destroy(K(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const e=this._pc.iceConnectionState,n=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",e,n),this.emit("iceStateChange",e,n),(e==="connected"||e==="completed")&&(this._pcReady=!0,this._maybeReady()),e==="failed"&&this.destroy(K(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),e==="closed"&&this.destroy(K(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(e){const n=s=>(Object.prototype.toString.call(s.values)==="[object Array]"&&s.values.forEach(i=>{Object.assign(s,i)}),s);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(s=>{const i=[];s.forEach(r=>{i.push(n(r))}),e(null,i)},s=>e(s)):this._pc.getStats.length>0?this._pc.getStats(s=>{if(this.destroyed)return;const i=[];s.result().forEach(r=>{const o={};r.names().forEach(l=>{o[l]=r.stat(l)}),o.id=r.id,o.type=r.type,o.timestamp=r.timestamp,i.push(n(o))}),e(null,i)},s=>e(s)):e(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const e=()=>{this.destroyed||this.getStats((n,s)=>{if(this.destroyed)return;n&&(s=[]);const i={},r={},o={};let l=!1;s.forEach(c=>{(c.type==="remotecandidate"||c.type==="remote-candidate")&&(i[c.id]=c),(c.type==="localcandidate"||c.type==="local-candidate")&&(r[c.id]=c),(c.type==="candidatepair"||c.type==="candidate-pair")&&(o[c.id]=c)});const a=c=>{l=!0;let u=r[c.localCandidateId];u&&(u.ip||u.address)?(this.localAddress=u.ip||u.address,this.localPort=Number(u.port)):u&&u.ipAddress?(this.localAddress=u.ipAddress,this.localPort=Number(u.portNumber)):typeof c.googLocalAddress=="string"&&(u=c.googLocalAddress.split(":"),this.localAddress=u[0],this.localPort=Number(u[1])),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let h=i[c.remoteCandidateId];h&&(h.ip||h.address)?(this.remoteAddress=h.ip||h.address,this.remotePort=Number(h.port)):h&&h.ipAddress?(this.remoteAddress=h.ipAddress,this.remotePort=Number(h.portNumber)):typeof c.googRemoteAddress=="string"&&(h=c.googRemoteAddress.split(":"),this.remoteAddress=h[0],this.remotePort=Number(h[1])),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(s.forEach(c=>{c.type==="transport"&&c.selectedCandidatePairId&&a(o[c.selectedCandidatePairId]),(c.type==="googCandidatePair"&&c.googActiveConnection==="true"||(c.type==="candidatepair"||c.type==="candidate-pair")&&c.selected)&&a(c)}),!l&&(!Object.keys(o).length||Object.keys(r).length)){setTimeout(e,100);return}else this._connecting=!1,this._connected=!0;if(this._chunk){try{this.send(this._chunk)}catch(u){return this.destroy(K(u,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const c=this._cb;this._cb=null,c(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=setInterval(()=>this._onInterval(),150),this._interval.unref&&this._interval.unref()),this._debug("connect"),this.emit("connect")})};e()}_onInterval(){!this._cb||!this._channel||this._channel.bufferedAmount>va||this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(e=>{this._pc.removeTrack(e),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(e){this.destroyed||(e.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:e.candidate.candidate,sdpMLineIndex:e.candidate.sdpMLineIndex,sdpMid:e.candidate.sdpMid}}):!e.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),e.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(e){if(this.destroyed)return;let n=e.data;n instanceof ArrayBuffer&&(n=new Uint8Array(n)),this.emit("data",n)}_onChannelBufferedAmountLow(){if(this.destroyed||!this._cb)return;this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const e=this._cb;this._cb=null,e(null)}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.destroy())}_onTrack(e){this.destroyed||e.streams.forEach(n=>{this._debug("on track"),this.emit("track",e.track,n),this._remoteTracks.push({track:e.track,stream:n}),!this._remoteStreams.some(s=>s.id===n.id)&&(this._remoteStreams.push(n),queueMicrotask(()=>{this._debug("on stream"),this.emit("stream",n)}))})}_debug(...e){this._doDebug&&(e[0]="["+this._id+"] "+e[0],console.log(...e))}on(e,n){const s=this._map;s.has(e)||s.set(e,new Set),s.get(e).add(n)}off(e,n){const s=this._map,i=s.get(e);i&&(i.delete(n),i.size===0&&s.delete(e))}once(e,n){const s=(...i)=>{this.off(e,s),n(...i)};this.on(e,s)}emit(e,...n){const s=this._map;if(s.has(e))for(const i of s.get(e))try{i(...n)}catch(r){console.error(r)}}}on.WEBRTC_SUPPORT=!!Zu();on.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"};on.channelConfig={};const Ta="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Ty=(t,e,n)=>{const s=new on({initiator:t,trickle:e,config:n}),i=r=>s.__earlyDataBuffer.push(r);return s.on(Ge.data,i),s.__earlyDataBuffer=[],s.__drainEarlyData=r=>{s.off(Ge.data,i),s.__earlyDataBuffer.forEach(r),delete s.__earlyDataBuffer,delete s.__drainEarlyData},s},Sy=t=>new Array(t).fill().map(()=>Ta[Math.floor(Math.random()*Ta.length)]).join(""),Ry=(t,e)=>(n,s)=>{if(t[s])throw $e(`already joined room ${s}`);if(!n)throw $e("requires a config map as the first argument");if(!n.appId&&!n.firebaseApp)throw $e("config map is missing appId field");if(!s)throw $e("namespace argument required");return e(n,s)},Mi="Trystero",sr=Sy(20),{keys:Sa,values:Qy,entries:Ny,fromEntries:Ay}=Object,$t=()=>{},$e=t=>new Error(`${Mi}: ${t}`),es=t=>new TextEncoder().encode(t),qn=t=>new TextDecoder().decode(t),Ge=Ay(["close","connect","data","error","signal","stream","track"].map(t=>[t,t])),xy=t=>{const e=new Uint8Array(t.reduce((n,s)=>n+s.byteLength,0));return t.reduce((n,s)=>(e.set(s,n),n+s.byteLength),0),e},Dy=Object.getPrototypeOf(Uint8Array),Bs=12,eh=0,Us=eh+Bs,Ws=Us+1,zn=Ws+1,Kn=zn+1,Bt=16*2**10-Kn,Ds=255,Ra="bufferedamountlow",Py=(t,e)=>{const n={},s={},i={},r={},o={},l={},a=(b,N)=>(b?Array.isArray(b)?b:[b]:Sa(n)).flatMap(H=>{const k=n[H];return k?N(H,k):(console.warn(`${Mi}: no peer with id ${H} found`),[])}),c=b=>{n[b]&&(delete n[b],delete i[b],delete r[b],ze(b))},u=b=>{if(!b)throw $e("action type argument is required");const N=es(b);if(N.byteLength>Bs)throw $e(`action type string "${b}" (${N.byteLength}b) exceeds byte limit (${Bs}). Hint: choose a shorter name.`);const H=new Uint8Array(Bs);H.set(N);const k=qn(H);if(s[k])throw $e(`action '${b}' already registered`);let le=0;return s[k]={onComplete:$t,onProgress:$t},[async(ie,fe,q,Y)=>{if(q&&typeof q!="object")throw $e("action meta argument must be an object");if(ie===void 0)throw $e("action data cannot be undefined");const We=typeof ie!="string",ht=ie instanceof Blob,Me=ht||ie instanceof ArrayBuffer||ie instanceof Dy;if(q&&!Me)throw $e("action meta argument can only be used with binary data");const ce=Me?new Uint8Array(ht?await ie.arrayBuffer():ie):es(We?JSON.stringify(ie):ie),wt=q?es(JSON.stringify(q)):null,tt=Math.ceil(ce.byteLength/Bt)+(q?1:0),Li=new Array(tt).fill().map((Le,Re)=>{const nt=Re===tt-1,xe=q&&Re===0,Fe=new Uint8Array(Kn+(xe?wt.byteLength:nt?ce.byteLength-Bt*(tt-(q?2:1)):Bt));return Fe.set(H),Fe.set([le],Us),Fe.set([nt|xe<<1|Me<<2|We<<3],Ws),Fe.set([Math.round((Re+1)/tt*Ds)],zn),Fe.set(q?xe?wt:ce.subarray((Re-1)*Bt,Re*Bt):ce.subarray(Re*Bt,(Re+1)*Bt),Kn),Fe});return le=le+1&Ds,Promise.all(a(fe,async(Le,Re)=>{const nt=Re._channel;let xe=0;for(;xe<tt;){const Fe=Li[xe];if(nt.bufferedAmount>nt.bufferedAmountLowThreshold&&await new Promise(Bn=>{const d=()=>{nt.removeEventListener(Ra,d),Bn()};nt.addEventListener(Ra,d)}),!n[Le])break;Re.send(Fe),xe++,Y&&Y(Fe[zn]/Ds,Le,q)}}))},ie=>s[k]={...s[k],onComplete:ie},ie=>s[k]={...s[k],onProgress:ie}]},h=(b,N)=>{const H=new Uint8Array(N),k=qn(H.subarray(eh,Us)),[le]=H.subarray(Us,Ws),[ie]=H.subarray(Ws,zn),[fe]=H.subarray(zn,Kn),q=H.subarray(Kn),Y=!!(ie&1),We=!!(ie&1<<1),ht=!!(ie&1<<2),Me=!!(ie&1<<3);if(!s[k])throw $e(`received message with unregistered type (${k})`);i[b]||(i[b]={}),i[b][k]||(i[b][k]={});let ce=i[b][k][le];if(ce||(ce=i[b][k][le]={chunks:[]}),We?ce.meta=JSON.parse(qn(q)):ce.chunks.push(q),s[k].onProgress(fe/Ds,b,ce.meta),!Y)return;const wt=xy(ce.chunks);if(ht)s[k].onComplete(wt,b,ce.meta);else{const tt=qn(wt);s[k].onComplete(Me?JSON.parse(tt):tt,b)}delete i[b][k][le]},[f,g]=u("__91n6__"),[m,w]=u("__90n6__"),[P,B]=u("__516n4L__"),[ae,O]=u("__57r34m__"),[ee,me]=u("__7r4ck__");let ut=$t,ze=$t,W=$t,de=$t;return t((b,N)=>{if(n[N])return;const H=h.bind(null,N);n[N]=b,b.on(Ge.signal,k=>P(k,N)),b.on(Ge.close,()=>c(N)),b.on(Ge.data,H),b.on(Ge.stream,k=>{W(k,N,o[N]),delete o[N]}),b.on(Ge.track,(k,le)=>{de(k,le,N,l[N]),delete l[N]}),b.on(Ge.error,k=>{k.code!=="ERR_DATA_CHANNEL"&&console.error(k)}),ut(N),b.__drainEarlyData(H)}),g((b,N)=>m(null,N)),w((b,N)=>{r[N]&&(r[N](),delete r[N])}),B((b,N)=>{n[N]&&n[N].signal(b)}),O((b,N)=>o[N]=b),me((b,N)=>l[N]=b),{makeAction:u,ping:async b=>{if(!b)throw $e("ping() must be called with target peer ID");const N=Date.now();return f(null,b),await new Promise(H=>r[b]=H),Date.now()-N},leave:()=>{Ny(n).forEach(([b,N])=>{N.destroy(),delete n[b]}),e()},getPeers:()=>Sa(n),addStream:(b,N,H)=>a(N,async(k,le)=>{H&&await ae(H,k),le.addStream(b)}),removeStream:(b,N)=>a(N,(H,k)=>k.removeStream(b)),addTrack:(b,N,H,k)=>a(H,async(le,ie)=>{k&&await ee(k,le),ie.addTrack(b,N)}),removeTrack:(b,N,H)=>a(H,(k,le)=>le.removeTrack(b,N)),replaceTrack:(b,N,H,k,le)=>a(k,async(ie,fe)=>{le&&await ee(le,ie),fe.replaceTrack(b,N,H)}),onPeerJoin:b=>ut=b,onPeerLeave:b=>ze=b,onPeerStream:b=>W=b,onPeerTrack:b=>de=b}},qo="AES-CBC",Oy=t=>window.btoa(String.fromCharCode.apply(null,new Uint8Array(t))),ky=t=>{const e=window.atob(t);return new Uint8Array(e.length).map((n,s)=>e.charCodeAt(s)).buffer},My=async(t,e)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},es(`${t}:${e}`)),{name:qo},!1,["encrypt","decrypt"]),Ly=async(t,e)=>{const n=crypto.getRandomValues(new Uint8Array(16));return JSON.stringify({c:Oy(await crypto.subtle.encrypt({name:qo,iv:n},await t,es(e))),iv:[...n]})},Fy=async(t,e)=>{const{c:n,iv:s}=JSON.parse(e);return qn(await crypto.subtle.decrypt({name:qo,iv:new Uint8Array(s)},await t,ky(n)))},Na="_",By=`__${Mi.toLowerCase()}__`,ir={},Ps={},Aa=(...t)=>t.join("/"),Uy=t=>t.startsWith("https://")?t:`https://${t}.firebaseio.com`,Wy=t=>{if(t.firebaseApp){const n=t.firebaseApp.options.databaseURL;return Ps[n]||(Ps[n]=ba(t.firebaseApp))}const e=Uy(t.appId);return Ps[e]||(Ps[e]=ba(Lc({databaseURL:e})))},Hy=Ry(ir,(t,e)=>{const n=Wy(t),s={},i={},r={},o=t.rootPath||By,l=ma(n,Aa(o,e)),a=rn(l,sr),c=t.password&&My(t.password,e),u=[],h=(m,w)=>{if(s[m]&&!s[m].destroyed)return s[m];const P=Ty(w,!0,t.rtcConfig);return P.once(Ge.connect,()=>{g(P,m),r[m]=!0}),P.on(Ge.signal,async B=>{if(r[m])return;const ae=JSON.stringify(B),O=hy(ma(n,Aa(o,e,m,sr)));ya(O).remove(),ci(O,c?await Ly(c,ae):ae)}),P.once(Ge.close,()=>{delete s[m],delete i[m],delete r[m]}),s[m]=P,P};let f=!1,g=$t;return ir[e]=!0,ci(a,{[Na]:!0}),ya(a).remove(),nr(a,m=>{const w=m.key;w===Na||r[w]||u.push(nr(m.ref,async P=>{if(w in i||(i[w]={}),P.key in i[w])return;i[w][P.key]=!0;let B;try{B=JSON.parse(c?await Fy(c,P.val()):P.val())}catch{console.error(`${Mi}: received malformed SDP JSON`);return}h(w,!1).signal(B),Ca(P.ref)}))}),dy(l,()=>f=!0,{onlyOnce:!0}),nr(l,({key:m})=>{!f||m===sr||h(m,!0)}),Py(m=>g=m,()=>{Ea(a),Ca(a),Ea(l),u.forEach(m=>m()),delete ir[e]})}),$y={name:"GameAdivinhe",data(){return{numeroAdivinha:0,chuteNumero:0,chuteAcerto:0,friendID:"",pontos:0,pontosFriend:0,sendDrink:void 0,sendAcerto:void 0,sendPontos:void 0,sendPontosFriend:void 0}},methods:{makeDrink(){this.sendDrink({drink:"negroni",withIce:!0},this.friendID)},makeAcerto(){if(!(this.numeroAdivinha<10&&this.numeroAdivinha>0)){alert("APENAS NUMEROS DE 0 A 10!");return}this.sendAcerto({acerto:this.numeroAdivinha},this.friendID),alert("NUMERO ENVIADO!")},adivinhar(){console.log("TENTANDO ADIVINHAR NUMERO!"),this.chuteNumero==this.chuteAcerto?(this.pontos=this.pontos+1,this.sendPontosFriend({pontosFriend:this.pontos},this.friendID),this.chuteAcerto=0,alert("PARABÉNS VOCÊ ACERTOU!!")):(this.pontosFriend=this.pontosFriend+1,this.sendPontos({pontos:this.pontosFriend},this.friendID),alert("NÃO FOI DESSA VEZ."))}},created(){console.log("COMPONENTE MONTADO");const e=Hy({appId:"tristehero-default-rtdb"},"sala_01");e.onPeerJoin(u=>{console.log(`${u} joined`),this.friendID=u}),e.onPeerLeave(u=>console.log(`${u} left`));const[n,s]=e.makeAction("drink");this.sendDrink=n;const[i,r]=e.makeAction("acerto");this.sendAcerto=i;const[o,l]=e.makeAction("pontos");this.sendPontos=o;const[a,c]=e.makeAction("pontosFriend");this.sendPontosFriend=a,r((u,h)=>{console.log(`got a number ${u.acerto} from ${h}`),this.chuteAcerto=u.acerto}),l((u,h)=>{console.log(`got a number ${u.pontos} from ${h}`),this.pontos=u.pontos,console.log("gdsgfokdsok"),console.log(u)}),c((u,h)=>{console.log(`got a number ${u.pontosFriend} from ${h}`),this.pontosFriend=u.pontosFriend}),s((u,h)=>console.log(`got a ${u.drink} with${u.withIce?"":"out"} ice from ${h}`))}};const jy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Vy=t=>(td("data-v-490d615e"),t=t(),nd(),t),qy=Vy(()=>ft("h1",null,"GAME PSIQUS ADIVINHER",-1)),zy=["disabled"];function Ky(t,e,n,s,i,r){return Cc(),Ec("div",null,[qy,ll(ft("input",{type:"number",min:"0",max:"10",placeholder:"digite um numero","onUpdate:modelValue":e[0]||(e[0]=o=>i.numeroAdivinha=o)},null,512),[[Tl,i.numeroAdivinha]]),ft("button",{onClick:e[1]||(e[1]=(...o)=>r.makeAcerto&&r.makeAcerto(...o)),disabled:!!i.chuteAcerto},"ENVIAR NUMERO P/ ADIVINHAR",8,zy),ll(ft("input",{type:"number",min:"0",max:"10","onUpdate:modelValue":e[2]||(e[2]=o=>i.chuteNumero=o),placeholder:"Adivinhe o numero chutado:"},null,512),[[Tl,i.chuteNumero]]),ft("button",{onClick:e[3]||(e[3]=(...o)=>r.adivinhar&&r.adivinhar(...o))},"ADIVINHAR"),ft("p",null,"MEUS PONTOS: "+Yo(i.pontos),1),ft("p",null,"PONTOS DO INIMIGO: "+Yo(i.pontosFriend),1)])}const Gy=jy($y,[["render",Ky],["__scopeId","data-v-490d615e"]]),Yy=pd({__name:"App",setup(t){return(e,n)=>(Cc(),Ec("main",null,[Nt(Gy)]))}});Df(Yy).mount("#app");
