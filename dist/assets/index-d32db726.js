(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function jr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function qr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ve(s)?oh(s):qr(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ve(t))return t;if(he(t))return t}}const sh=/;(?![^(]*\))/g,ih=/:([^]+)/,rh=/\/\*.*?\*\//gs;function oh(t){const e={};return t.replace(rh,"").split(sh).forEach(n=>{if(n){const s=n.split(ih);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function zr(t){let e="";if(ve(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=zr(t[n]);s&&(e+=s+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ah=jr(lh);function Oa(t){return!!t||t===""}const Jo=t=>ve(t)?t:t==null?"":F(t)||he(t)&&(t.toString===Fa||!U(t.toString))?JSON.stringify(t,ka,2):String(t),ka=(t,e)=>e&&e.__v_isRef?ka(t,e.value):pn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Ma(e)?{[`Set(${e.size})`]:[...e.values()]}:he(e)&&!F(e)&&!Ba(e)?String(e):e,oe={},_n=[],Ze=()=>{},ch=()=>!1,uh=/^on[^a-z]/,di=t=>uh.test(t),Kr=t=>t.startsWith("onUpdate:"),Te=Object.assign,Gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hh=Object.prototype.hasOwnProperty,G=(t,e)=>hh.call(t,e),F=Array.isArray,pn=t=>fi(t)==="[object Map]",Ma=t=>fi(t)==="[object Set]",U=t=>typeof t=="function",ve=t=>typeof t=="string",Yr=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",La=t=>he(t)&&U(t.then)&&U(t.catch),Fa=Object.prototype.toString,fi=t=>Fa.call(t),dh=t=>fi(t).slice(8,-1),Ba=t=>fi(t)==="[object Object]",Qr=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ks=jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_i=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fh=/-(\w)/g,wn=_i(t=>t.replace(fh,(e,n)=>n?n.toUpperCase():"")),_h=/\B([A-Z])/g,Dn=_i(t=>t.replace(_h,"-$1").toLowerCase()),Ua=_i(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ui=_i(t=>t?`on${Ua(t)}`:""),Vs=(t,e)=>!Object.is(t,e),Ms=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},js=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Xo;const ph=()=>Xo||(Xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ot;class gh{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ot,!e&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function mh(t,e=ot){e&&e.active&&e.effects.push(t)}const Jr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wa=t=>(t.w&Dt)>0,Ha=t=>(t.n&Dt)>0,yh=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Dt},Ch=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Wa(i)&&!Ha(i)?i.delete(t):e[n++]=i,i.w&=~Dt,i.n&=~Dt}e.length=n}},lr=new WeakMap;let jn=0,Dt=1;const ar=30;let Ye;const Qt=Symbol(""),cr=Symbol("");class Xr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,mh(this,s)}run(){if(!this.active)return this.fn();let e=Ye,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ye,Ye=this,St=!0,Dt=1<<++jn,jn<=ar?yh(this):Zo(this),this.fn()}finally{jn<=ar&&Ch(this),Dt=1<<--jn,Ye=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(Zo(this),this.onStop&&this.onStop(),this.active=!1)}}function Zo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const $a=[];function Pn(){$a.push(St),St=!1}function On(){const t=$a.pop();St=t===void 0?!0:t}function Ue(t,e,n){if(St&&Ye){let s=lr.get(t);s||lr.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Jr()),Va(i)}}function Va(t,e){let n=!1;jn<=ar?Ha(t)||(t.n|=Dt,n=!Wa(t)):n=!t.has(Ye),n&&(t.add(Ye),Ye.deps.push(t))}function yt(t,e,n,s,i,r){const o=lr.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&F(t)){const a=qs(s);o.forEach((c,u)=>{(u==="length"||u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":F(t)?Qr(n)&&l.push(o.get("length")):(l.push(o.get(Qt)),pn(t)&&l.push(o.get(cr)));break;case"delete":F(t)||(l.push(o.get(Qt)),pn(t)&&l.push(o.get(cr)));break;case"set":pn(t)&&l.push(o.get(Qt));break}if(l.length===1)l[0]&&ur(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);ur(Jr(a))}}function ur(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&el(s);for(const s of n)s.computed||el(s)}function el(t,e){(t!==Ye||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Eh=jr("__proto__,__v_isRef,__isVue"),ja=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yr)),vh=Zr(),bh=Zr(!1,!0),wh=Zr(!0),tl=Ih();function Ih(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let r=0,o=this.length;r<o;r++)Ue(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Pn();const s=J(this)[e].apply(this,n);return On(),s}}),t}function Zr(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Wh:Ya:e?Ga:Ka).get(s))return s;const o=F(s);if(!t&&o&&G(tl,i))return Reflect.get(tl,i,r);const l=Reflect.get(s,i,r);return(Yr(i)?ja.has(i):Eh(i))||(t||Ue(s,"get",i),e)?l:Ae(l)?o&&Qr(i)?l:l.value:he(l)?t?Qa(l):no(l):l}}const Th=qa(),Sh=qa(!0);function qa(t=!1){return function(n,s,i,r){let o=n[s];if(ns(o)&&Ae(o)&&!Ae(i))return!1;if(!t&&(!hr(i)&&!ns(i)&&(o=J(o),i=J(i)),!F(n)&&Ae(o)&&!Ae(i)))return o.value=i,!0;const l=F(n)&&Qr(s)?Number(s)<n.length:G(n,s),a=Reflect.set(n,s,i,r);return n===J(r)&&(l?Vs(i,o)&&yt(n,"set",s,i):yt(n,"add",s,i)),a}}function Rh(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&yt(t,"delete",e,void 0),s}function Nh(t,e){const n=Reflect.has(t,e);return(!Yr(e)||!ja.has(e))&&Ue(t,"has",e),n}function Ah(t){return Ue(t,"iterate",F(t)?"length":Qt),Reflect.ownKeys(t)}const za={get:vh,set:Th,deleteProperty:Rh,has:Nh,ownKeys:Ah},xh={get:wh,set(t,e){return!0},deleteProperty(t,e){return!0}},Dh=Te({},za,{get:bh,set:Sh}),eo=t=>t,pi=t=>Reflect.getPrototypeOf(t);function Is(t,e,n=!1,s=!1){t=t.__v_raw;const i=J(t),r=J(e);n||(e!==r&&Ue(i,"get",e),Ue(i,"get",r));const{has:o}=pi(i),l=s?eo:n?ro:io;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Ts(t,e=!1){const n=this.__v_raw,s=J(n),i=J(t);return e||(t!==i&&Ue(s,"has",t),Ue(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ss(t,e=!1){return t=t.__v_raw,!e&&Ue(J(t),"iterate",Qt),Reflect.get(t,"size",t)}function nl(t){t=J(t);const e=J(this);return pi(e).has.call(e,t)||(e.add(t),yt(e,"add",t,t)),this}function sl(t,e){e=J(e);const n=J(this),{has:s,get:i}=pi(n);let r=s.call(n,t);r||(t=J(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Vs(e,o)&&yt(n,"set",t,e):yt(n,"add",t,e),this}function il(t){const e=J(this),{has:n,get:s}=pi(e);let i=n.call(e,t);i||(t=J(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&yt(e,"delete",t,void 0),r}function rl(){const t=J(this),e=t.size!==0,n=t.clear();return e&&yt(t,"clear",void 0,void 0),n}function Rs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=J(o),a=e?eo:t?ro:io;return!t&&Ue(l,"iterate",Qt),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function Ns(t,e,n){return function(...s){const i=this.__v_raw,r=J(i),o=pn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?eo:e?ro:io;return!e&&Ue(r,"iterate",a?cr:Qt),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function It(t){return function(...e){return t==="delete"?!1:this}}function Ph(){const t={get(r){return Is(this,r)},get size(){return Ss(this)},has:Ts,add:nl,set:sl,delete:il,clear:rl,forEach:Rs(!1,!1)},e={get(r){return Is(this,r,!1,!0)},get size(){return Ss(this)},has:Ts,add:nl,set:sl,delete:il,clear:rl,forEach:Rs(!1,!0)},n={get(r){return Is(this,r,!0)},get size(){return Ss(this,!0)},has(r){return Ts.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Rs(!0,!1)},s={get(r){return Is(this,r,!0,!0)},get size(){return Ss(this,!0)},has(r){return Ts.call(this,r,!0)},add:It("add"),set:It("set"),delete:It("delete"),clear:It("clear"),forEach:Rs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ns(r,!1,!1),n[r]=Ns(r,!0,!1),e[r]=Ns(r,!1,!0),s[r]=Ns(r,!0,!0)}),[t,n,e,s]}const[Oh,kh,Mh,Lh]=Ph();function to(t,e){const n=e?t?Lh:Mh:t?kh:Oh;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(G(n,i)&&i in s?n:s,i,r)}const Fh={get:to(!1,!1)},Bh={get:to(!1,!0)},Uh={get:to(!0,!1)},Ka=new WeakMap,Ga=new WeakMap,Ya=new WeakMap,Wh=new WeakMap;function Hh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $h(t){return t.__v_skip||!Object.isExtensible(t)?0:Hh(dh(t))}function no(t){return ns(t)?t:so(t,!1,za,Fh,Ka)}function Vh(t){return so(t,!1,Dh,Bh,Ga)}function Qa(t){return so(t,!0,xh,Uh,Ya)}function so(t,e,n,s,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=$h(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function gn(t){return ns(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function ns(t){return!!(t&&t.__v_isReadonly)}function hr(t){return!!(t&&t.__v_isShallow)}function Ja(t){return gn(t)||ns(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Xa(t){return js(t,"__v_skip",!0),t}const io=t=>he(t)?no(t):t,ro=t=>he(t)?Qa(t):t;function jh(t){St&&Ye&&(t=J(t),Va(t.dep||(t.dep=Jr())))}function qh(t,e){t=J(t),t.dep&&ur(t.dep)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function zh(t){return Ae(t)?t.value:t}const Kh={get:(t,e,n)=>zh(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ae(i)&&!Ae(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Za(t){return gn(t)?t:new Proxy(t,Kh)}var ec;class Gh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[ec]=!1,this._dirty=!0,this.effect=new Xr(e,()=>{this._dirty||(this._dirty=!0,qh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=J(this);return jh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ec="__v_isReadonly";function Yh(t,e,n=!1){let s,i;const r=U(t);return r?(s=t,i=Ze):(s=t.get,i=t.set),new Gh(s,i,r||!i,n)}function Rt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){gi(r,e,n)}return i}function qe(t,e,n,s){if(U(t)){const r=Rt(t,e,n,s);return r&&La(r)&&r.catch(o=>{gi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(qe(t[r],e,n,s));return i}function gi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Rt(a,null,10,[t,o,l]);return}}Qh(t,n,i,s)}function Qh(t,e,n,s=!0){console.error(t)}let ss=!1,dr=!1;const Ie=[];let ct=0;const mn=[];let _t=null,$t=0;const tc=Promise.resolve();let oo=null;function Jh(t){const e=oo||tc;return t?e.then(this?t.bind(this):t):e}function Xh(t){let e=ct+1,n=Ie.length;for(;e<n;){const s=e+n>>>1;is(Ie[s])<t?e=s+1:n=s}return e}function lo(t){(!Ie.length||!Ie.includes(t,ss&&t.allowRecurse?ct+1:ct))&&(t.id==null?Ie.push(t):Ie.splice(Xh(t.id),0,t),nc())}function nc(){!ss&&!dr&&(dr=!0,oo=tc.then(ic))}function Zh(t){const e=Ie.indexOf(t);e>ct&&Ie.splice(e,1)}function ed(t){F(t)?mn.push(...t):(!_t||!_t.includes(t,t.allowRecurse?$t+1:$t))&&mn.push(t),nc()}function ol(t,e=ss?ct+1:0){for(;e<Ie.length;e++){const n=Ie[e];n&&n.pre&&(Ie.splice(e,1),e--,n())}}function sc(t){if(mn.length){const e=[...new Set(mn)];if(mn.length=0,_t){_t.push(...e);return}for(_t=e,_t.sort((n,s)=>is(n)-is(s)),$t=0;$t<_t.length;$t++)_t[$t]();_t=null,$t=0}}const is=t=>t.id==null?1/0:t.id,td=(t,e)=>{const n=is(t)-is(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ic(t){dr=!1,ss=!0,Ie.sort(td);const e=Ze;try{for(ct=0;ct<Ie.length;ct++){const n=Ie[ct];n&&n.active!==!1&&Rt(n,null,14)}}finally{ct=0,Ie.length=0,sc(),ss=!1,oo=null,(Ie.length||mn.length)&&ic()}}function nd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||oe;f&&(i=n.map(g=>ve(g)?g.trim():g)),h&&(i=n.map(qs))}let l,a=s[l=Ui(e)]||s[l=Ui(wn(e))];!a&&r&&(a=s[l=Ui(Dn(e))]),a&&qe(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(c,t,6,i)}}function rc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!U(t)){const a=c=>{const u=rc(c,e,!0);u&&(l=!0,Te(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(he(t)&&s.set(t,null),null):(F(r)?r.forEach(a=>o[a]=null):Te(o,r),he(t)&&s.set(t,o),o)}function mi(t,e){return!t||!di(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Dn(e))||G(t,e))}let Ve=null,yi=null;function zs(t){const e=Ve;return Ve=t,yi=t&&t.type.__scopeId||null,e}function sd(t){yi=t}function id(){yi=null}function rd(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&gl(-1);const r=zs(e);let o;try{o=t(...i)}finally{zs(r),s._d&&gl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Wi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:w}=t;let P,B;const ae=zs(t);try{if(n.shapeFlag&4){const ee=i||s;P=at(u.call(ee,ee,h,r,g,f,m)),B=a}else{const ee=e;P=at(ee.length>1?ee(r,{attrs:a,slots:l,emit:c}):ee(r,null)),B=e.props?a:od(a)}}catch(ee){Yn.length=0,gi(ee,t,1),P=ut(et)}let O=P;if(B&&w!==!1){const ee=Object.keys(B),{shapeFlag:me}=O;ee.length&&me&7&&(o&&ee.some(Kr)&&(B=ld(B,o)),O=Pt(O,B))}return n.dirs&&(O=Pt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),P=O,zs(ae),P}const od=t=>{let e;for(const n in t)(n==="class"||n==="style"||di(n))&&((e||(e={}))[n]=t[n]);return e},ld=(t,e)=>{const n={};for(const s in t)(!Kr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ad(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?ll(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!mi(c,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?ll(s,o,c):!0:!!o;return!1}function ll(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!mi(n,r))return!0}return!1}function cd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ud=t=>t.__isSuspense;function hd(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):ed(t)}function dd(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function Ls(t,e,n=!1){const s=we||Ve;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&U(e)?e.call(s.proxy):e}}const As={};function Hi(t,e,n){return oc(t,e,n)}function oc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=oe){const l=we;let a,c=!1,u=!1;if(Ae(t)?(a=()=>t.value,c=hr(t)):gn(t)?(a=()=>t,s=!0):F(t)?(u=!0,c=t.some(O=>gn(O)||hr(O)),a=()=>t.map(O=>{if(Ae(O))return O.value;if(gn(O))return qt(O);if(U(O))return Rt(O,l,2)})):U(t)?e?a=()=>Rt(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return h&&h(),qe(t,l,3,[f])}:a=Ze,e&&s){const O=a;a=()=>qt(O())}let h,f=O=>{h=B.onStop=()=>{Rt(O,l,4)}},g;if(os)if(f=Ze,e?n&&qe(e,l,3,[a(),u?[]:void 0,f]):a(),i==="sync"){const O=hf();g=O.__watcherHandles||(O.__watcherHandles=[])}else return Ze;let m=u?new Array(t.length).fill(As):As;const w=()=>{if(B.active)if(e){const O=B.run();(s||c||(u?O.some((ee,me)=>Vs(ee,m[me])):Vs(O,m)))&&(h&&h(),qe(e,l,3,[O,m===As?void 0:u&&m[0]===As?[]:m,f]),m=O)}else B.run()};w.allowRecurse=!!e;let P;i==="sync"?P=w:i==="post"?P=()=>De(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),P=()=>lo(w));const B=new Xr(a,P);e?n?w():m=B.run():i==="post"?De(B.run.bind(B),l&&l.suspense):B.run();const ae=()=>{B.stop(),l&&l.scope&&Gr(l.scope.effects,B)};return g&&g.push(ae),ae}function fd(t,e,n){const s=this.proxy,i=ve(t)?t.includes(".")?lc(s,t):()=>s[t]:t.bind(s,s);let r;U(e)?r=e:(r=e.handler,n=e);const o=we;In(this);const l=oc(i,r.bind(s),n);return o?In(o):Jt(),l}function lc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function qt(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))qt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)qt(t[n],e);else if(Ma(t)||pn(t))t.forEach(n=>{qt(n,e)});else if(Ba(t))for(const n in t)qt(t[n],e);return t}function _d(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hc(()=>{t.isMounted=!0}),dc(()=>{t.isUnmounting=!0}),t}const He=[Function,Array],pd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},setup(t,{slots:e}){const n=nf(),s=_d();let i;return()=>{const r=e.default&&cc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==et){o=w;break}}const l=J(t),{mode:a}=l;if(s.isLeaving)return $i(o);const c=al(o);if(!c)return $i(o);const u=fr(c,l,s,n);_r(c,u);const h=n.subTree,f=h&&al(h);let g=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(f&&f.type!==et&&(!Vt(c,f)||g)){const w=fr(f,l,s,n);if(_r(f,w),a==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},$i(o);a==="in-out"&&c.type!==et&&(w.delayLeave=(P,B,ae)=>{const O=ac(s,f);O[String(f.key)]=f,P._leaveCb=()=>{B(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=ae})}return o}}},gd=pd;function ac(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function fr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:w,onAppear:P,onAfterAppear:B,onAppearCancelled:ae}=e,O=String(t.key),ee=ac(n,t),me=(W,de)=>{W&&qe(W,s,9,de)},dt=(W,de)=>{const v=de[1];me(W,de),F(W)?W.every(N=>N.length<=1)&&v():W.length<=1&&v()},ze={mode:r,persisted:o,beforeEnter(W){let de=l;if(!n.isMounted)if(i)de=w||l;else return;W._leaveCb&&W._leaveCb(!0);const v=ee[O];v&&Vt(t,v)&&v.el._leaveCb&&v.el._leaveCb(),me(de,[W])},enter(W){let de=a,v=c,N=u;if(!n.isMounted)if(i)de=P||a,v=B||c,N=ae||u;else return;let H=!1;const k=W._enterCb=le=>{H||(H=!0,le?me(N,[W]):me(v,[W]),ze.delayedLeave&&ze.delayedLeave(),W._enterCb=void 0)};de?dt(de,[W,k]):k()},leave(W,de){const v=String(t.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return de();me(h,[W]);let N=!1;const H=W._leaveCb=k=>{N||(N=!0,de(),k?me(m,[W]):me(g,[W]),W._leaveCb=void 0,ee[v]===t&&delete ee[v])};ee[v]=t,f?dt(f,[W,H]):H()},clone(W){return fr(W,e,n,s)}};return ze}function $i(t){if(Ci(t))return t=Pt(t),t.children=null,t}function al(t){return Ci(t)?t.children?t.children[0]:void 0:t}function _r(t,e){t.shapeFlag&6&&t.component?_r(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function cc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===lt?(o.patchFlag&128&&i++,s=s.concat(cc(o.children,e,l))):(e||o.type!==et)&&s.push(l!=null?Pt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function md(t){return U(t)?{setup:t,name:t.name}:t}const Fs=t=>!!t.type.__asyncLoader,Ci=t=>t.type.__isKeepAlive;function yd(t,e){uc(t,"a",e)}function Cd(t,e){uc(t,"da",e)}function uc(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ei(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ci(i.parent.vnode)&&Ed(s,e,n,i),i=i.parent}}function Ed(t,e,n,s){const i=Ei(e,t,s,!0);fc(()=>{Gr(s[e],i)},n)}function Ei(t,e,n=we,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Pn(),In(n);const l=qe(e,n,t,o);return Jt(),On(),l});return s?i.unshift(r):i.push(r),r}}const vt=t=>(e,n=we)=>(!os||t==="sp")&&Ei(t,(...s)=>e(...s),n),vd=vt("bm"),hc=vt("m"),bd=vt("bu"),wd=vt("u"),dc=vt("bum"),fc=vt("um"),Id=vt("sp"),Td=vt("rtg"),Sd=vt("rtc");function Rd(t,e=we){Ei("ec",t,e)}function cl(t,e){const n=Ve;if(n===null)return t;const s=wi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,a,c=oe]=e[r];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&qt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:c}))}return t}function Mt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Pn(),qe(a,n,8,[t.el,l,t,e]),On())}}const Nd=Symbol(),pr=t=>t?Ic(t)?wi(t)||t.proxy:pr(t.parent):null,Gn=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pr(t.parent),$root:t=>pr(t.root),$emit:t=>t.emit,$options:t=>ao(t),$forceUpdate:t=>t.f||(t.f=()=>lo(t.update)),$nextTick:t=>t.n||(t.n=Jh.bind(t.proxy)),$watch:t=>fd.bind(t)}),Vi=(t,e)=>t!==oe&&!t.__isScriptSetup&&G(t,e),Ad={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Vi(s,e))return o[e]=1,s[e];if(i!==oe&&G(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&G(c,e))return o[e]=3,r[e];if(n!==oe&&G(n,e))return o[e]=4,n[e];gr&&(o[e]=0)}}const u=Gn[e];let h,f;if(u)return e==="$attrs"&&Ue(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==oe&&G(n,e))return o[e]=4,n[e];if(f=a.config.globalProperties,G(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Vi(i,e)?(i[e]=n,!0):s!==oe&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==oe&&G(t,o)||Vi(e,o)||(l=r[0])&&G(l,o)||G(s,o)||G(Gn,o)||G(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let gr=!0;function xd(t){const e=ao(t),n=t.proxy,s=t.ctx;gr=!1,e.beforeCreate&&ul(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:w,deactivated:P,beforeDestroy:B,beforeUnmount:ae,destroyed:O,unmounted:ee,render:me,renderTracked:dt,renderTriggered:ze,errorCaptured:W,serverPrefetch:de,expose:v,inheritAttrs:N,components:H,directives:k,filters:le}=e;if(c&&Dd(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const q in o){const Y=o[q];U(Y)&&(s[q]=Y.bind(n))}if(i){const q=i.call(n,n);he(q)&&(t.data=no(q))}if(gr=!0,r)for(const q in r){const Y=r[q],We=U(Y)?Y.bind(n,n):U(Y.get)?Y.get.bind(n,n):Ze,ft=!U(Y)&&U(Y.set)?Y.set.bind(n):Ze,Me=cf({get:We,set:ft});Object.defineProperty(s,q,{enumerable:!0,configurable:!0,get:()=>Me.value,set:ce=>Me.value=ce})}if(l)for(const q in l)_c(l[q],s,n,q);if(a){const q=U(a)?a.call(n):a;Reflect.ownKeys(q).forEach(Y=>{dd(Y,q[Y])})}u&&ul(u,t,"c");function fe(q,Y){F(Y)?Y.forEach(We=>q(We.bind(n))):Y&&q(Y.bind(n))}if(fe(vd,h),fe(hc,f),fe(bd,g),fe(wd,m),fe(yd,w),fe(Cd,P),fe(Rd,W),fe(Sd,dt),fe(Td,ze),fe(dc,ae),fe(fc,ee),fe(Id,de),F(v))if(v.length){const q=t.exposed||(t.exposed={});v.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:We=>n[Y]=We})})}else t.exposed||(t.exposed={});me&&t.render===Ze&&(t.render=me),N!=null&&(t.inheritAttrs=N),H&&(t.components=H),k&&(t.directives=k)}function Dd(t,e,n=Ze,s=!1){F(t)&&(t=mr(t));for(const i in t){const r=t[i];let o;he(r)?"default"in r?o=Ls(r.from||i,r.default,!0):o=Ls(r.from||i):o=Ls(r),Ae(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function ul(t,e,n){qe(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function _c(t,e,n,s){const i=s.includes(".")?lc(n,s):()=>n[s];if(ve(t)){const r=e[t];U(r)&&Hi(i,r)}else if(U(t))Hi(i,t.bind(n));else if(he(t))if(F(t))t.forEach(r=>_c(r,e,n,s));else{const r=U(t.handler)?t.handler.bind(n):e[t.handler];U(r)&&Hi(i,r,t)}}function ao(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>Ks(a,c,o,!0)),Ks(a,e,o)),he(e)&&r.set(e,a),a}function Ks(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ks(t,r,n,!0),i&&i.forEach(o=>Ks(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Pd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Pd={data:hl,props:Bt,emits:Bt,methods:Bt,computed:Bt,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:Bt,directives:Bt,watch:kd,provide:hl,inject:Od};function hl(t,e){return e?t?function(){return Te(U(t)?t.call(this,this):t,U(e)?e.call(this,this):e)}:e:t}function Od(t,e){return Bt(mr(t),mr(e))}function mr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ne(t,e){return t?[...new Set([].concat(t,e))]:e}function Bt(t,e){return t?Te(Te(Object.create(null),t),e):e}function kd(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ne(t[s],e[s]);return n}function Md(t,e,n,s=!1){const i={},r={};js(r,bi,1),t.propsDefaults=Object.create(null),pc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ld(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=J(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(mi(t.emitsOptions,f))continue;const g=e[f];if(a)if(G(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const m=wn(f);i[m]=yr(a,l,m,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{pc(t,e,i,r)&&(c=!0);let u;for(const h in l)(!e||!G(e,h)&&((u=Dn(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=yr(a,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!G(e,h))&&(delete r[h],c=!0)}c&&yt(t,"set","$attrs")}function pc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(ks(a))continue;const c=e[a];let u;i&&G(i,u=wn(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:mi(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=J(n),c=l||oe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=yr(i,a,h,c[h],t,!G(c,h))}}return o}function yr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=G(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&U(a)){const{propsDefaults:c}=i;n in c?s=c[n]:(In(i),s=c[n]=a.call(null,e),Jt())}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Dn(n))&&(s=!0))}return s}function gc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!U(t)){const u=h=>{a=!0;const[f,g]=gc(h,e,!0);Te(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return he(t)&&s.set(t,_n),_n;if(F(r))for(let u=0;u<r.length;u++){const h=wn(r[u]);dl(h)&&(o[h]=oe)}else if(r)for(const u in r){const h=wn(u);if(dl(h)){const f=r[u],g=o[h]=F(f)||U(f)?{type:f}:Object.assign({},f);if(g){const m=pl(Boolean,g.type),w=pl(String,g.type);g[0]=m>-1,g[1]=w<0||m<w,(m>-1||G(g,"default"))&&l.push(h)}}}const c=[o,l];return he(t)&&s.set(t,c),c}function dl(t){return t[0]!=="$"}function fl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function _l(t,e){return fl(t)===fl(e)}function pl(t,e){return F(e)?e.findIndex(n=>_l(n,t)):U(e)&&_l(e,t)?0:-1}const mc=t=>t[0]==="_"||t==="$stable",co=t=>F(t)?t.map(at):[at(t)],Fd=(t,e,n)=>{if(e._n)return e;const s=rd((...i)=>co(e(...i)),n);return s._c=!1,s},yc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(mc(i))continue;const r=t[i];if(U(r))e[i]=Fd(i,r,s);else if(r!=null){const o=co(r);e[i]=()=>o}}},Cc=(t,e)=>{const n=co(e);t.slots.default=()=>n},Bd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),js(e,"_",n)):yc(e,t.slots={})}else t.slots={},e&&Cc(t,e);js(t.slots,bi,1)},Ud=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(Te(i,e),!n&&l===1&&delete i._):(r=!e.$stable,yc(e,i)),o=e}else e&&(Cc(t,e),o={default:1});if(r)for(const l in i)!mc(l)&&!(l in o)&&delete i[l]};function Ec(){return{app:null,config:{isNativeTag:ch,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wd=0;function Hd(t,e){return function(s,i=null){U(s)||(s=Object.assign({},s)),i!=null&&!he(i)&&(i=null);const r=Ec(),o=new Set;let l=!1;const a=r.app={_uid:Wd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:df,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(a,...u)):U(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,h){if(!l){const f=ut(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),l=!0,a._container=c,c.__vue_app__=a,wi(f.component)||f.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}function Cr(t,e,n,s,i=!1){if(F(t)){t.forEach((f,g)=>Cr(f,e&&(F(e)?e[g]:e),n,s,i));return}if(Fs(s)&&!i)return;const r=s.shapeFlag&4?wi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===oe?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ve(c)?(u[c]=null,G(h,c)&&(h[c]=null)):Ae(c)&&(c.value=null)),U(a))Rt(a,l,12,[o,u]);else{const f=ve(a),g=Ae(a);if(f||g){const m=()=>{if(t.f){const w=f?G(h,a)?h[a]:u[a]:a.value;i?F(w)&&Gr(w,r):F(w)?w.includes(r)||w.push(r):f?(u[a]=[r],G(h,a)&&(h[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else f?(u[a]=o,G(h,a)&&(h[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,De(m,n)):m()}}}const De=hd;function $d(t){return Vd(t)}function Vd(t,e){const n=ph();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Ze,insertStaticContent:m}=t,w=(d,_,p,C=null,y=null,T=null,R=!1,I=null,S=!!_.dynamicChildren)=>{if(d===_)return;d&&!Vt(d,_)&&(C=Re(d),ce(d,y,T,!0),d=null),_.patchFlag===-2&&(S=!1,_.dynamicChildren=null);const{type:E,ref:x,shapeFlag:A}=_;switch(E){case vi:P(d,_,p,C);break;case et:B(d,_,p,C);break;case ji:d==null&&ae(_,p,C,R);break;case lt:H(d,_,p,C,y,T,R,I,S);break;default:A&1?me(d,_,p,C,y,T,R,I,S):A&6?k(d,_,p,C,y,T,R,I,S):(A&64||A&128)&&E.process(d,_,p,C,y,T,R,I,S,xe)}x!=null&&y&&Cr(x,d&&d.ref,T,_||d,!_)},P=(d,_,p,C)=>{if(d==null)s(_.el=l(_.children),p,C);else{const y=_.el=d.el;_.children!==d.children&&c(y,_.children)}},B=(d,_,p,C)=>{d==null?s(_.el=a(_.children||""),p,C):_.el=d.el},ae=(d,_,p,C)=>{[d.el,d.anchor]=m(d.children,_,p,C,d.el,d.anchor)},O=({el:d,anchor:_},p,C)=>{let y;for(;d&&d!==_;)y=f(d),s(d,p,C),d=y;s(_,p,C)},ee=({el:d,anchor:_})=>{let p;for(;d&&d!==_;)p=f(d),i(d),d=p;i(_)},me=(d,_,p,C,y,T,R,I,S)=>{R=R||_.type==="svg",d==null?dt(_,p,C,y,T,R,I,S):de(d,_,y,T,R,I,S)},dt=(d,_,p,C,y,T,R,I)=>{let S,E;const{type:x,props:A,shapeFlag:D,transition:L,dirs:z}=d;if(S=d.el=o(d.type,T,A&&A.is,A),D&8?u(S,d.children):D&16&&W(d.children,S,null,C,y,T&&x!=="foreignObject",R,I),z&&Mt(d,null,C,"created"),A){for(const Z in A)Z!=="value"&&!ks(Z)&&r(S,Z,null,A[Z],T,d.children,C,y,Le);"value"in A&&r(S,"value",null,A.value),(E=A.onVnodeBeforeMount)&&rt(E,C,d)}ze(S,d,d.scopeId,R,C),z&&Mt(d,null,C,"beforeMount");const ne=(!y||y&&!y.pendingBranch)&&L&&!L.persisted;ne&&L.beforeEnter(S),s(S,_,p),((E=A&&A.onVnodeMounted)||ne||z)&&De(()=>{E&&rt(E,C,d),ne&&L.enter(S),z&&Mt(d,null,C,"mounted")},y)},ze=(d,_,p,C,y)=>{if(p&&g(d,p),C)for(let T=0;T<C.length;T++)g(d,C[T]);if(y){let T=y.subTree;if(_===T){const R=y.vnode;ze(d,R,R.scopeId,R.slotScopeIds,y.parent)}}},W=(d,_,p,C,y,T,R,I,S=0)=>{for(let E=S;E<d.length;E++){const x=d[E]=I?Tt(d[E]):at(d[E]);w(null,x,_,p,C,y,T,R,I)}},de=(d,_,p,C,y,T,R)=>{const I=_.el=d.el;let{patchFlag:S,dynamicChildren:E,dirs:x}=_;S|=d.patchFlag&16;const A=d.props||oe,D=_.props||oe;let L;p&&Lt(p,!1),(L=D.onVnodeBeforeUpdate)&&rt(L,p,_,d),x&&Mt(_,d,p,"beforeUpdate"),p&&Lt(p,!0);const z=y&&_.type!=="foreignObject";if(E?v(d.dynamicChildren,E,I,p,C,z,T):R||Y(d,_,I,null,p,C,z,T,!1),S>0){if(S&16)N(I,_,A,D,p,C,y);else if(S&2&&A.class!==D.class&&r(I,"class",null,D.class,y),S&4&&r(I,"style",A.style,D.style,y),S&8){const ne=_.dynamicProps;for(let Z=0;Z<ne.length;Z++){const pe=ne[Z],Ke=A[pe],un=D[pe];(un!==Ke||pe==="value")&&r(I,pe,Ke,un,y,d.children,p,C,Le)}}S&1&&d.children!==_.children&&u(I,_.children)}else!R&&E==null&&N(I,_,A,D,p,C,y);((L=D.onVnodeUpdated)||x)&&De(()=>{L&&rt(L,p,_,d),x&&Mt(_,d,p,"updated")},C)},v=(d,_,p,C,y,T,R)=>{for(let I=0;I<_.length;I++){const S=d[I],E=_[I],x=S.el&&(S.type===lt||!Vt(S,E)||S.shapeFlag&70)?h(S.el):p;w(S,E,x,null,C,y,T,R,!0)}},N=(d,_,p,C,y,T,R)=>{if(p!==C){if(p!==oe)for(const I in p)!ks(I)&&!(I in C)&&r(d,I,p[I],null,R,_.children,y,T,Le);for(const I in C){if(ks(I))continue;const S=C[I],E=p[I];S!==E&&I!=="value"&&r(d,I,E,S,R,_.children,y,T,Le)}"value"in C&&r(d,"value",p.value,C.value)}},H=(d,_,p,C,y,T,R,I,S)=>{const E=_.el=d?d.el:l(""),x=_.anchor=d?d.anchor:l("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:L}=_;L&&(I=I?I.concat(L):L),d==null?(s(E,p,C),s(x,p,C),W(_.children,p,x,y,T,R,I,S)):A>0&&A&64&&D&&d.dynamicChildren?(v(d.dynamicChildren,D,p,y,T,R,I),(_.key!=null||y&&_===y.subTree)&&vc(d,_,!0)):Y(d,_,p,x,y,T,R,I,S)},k=(d,_,p,C,y,T,R,I,S)=>{_.slotScopeIds=I,d==null?_.shapeFlag&512?y.ctx.activate(_,p,C,R,S):le(_,p,C,y,T,R,S):ie(d,_,S)},le=(d,_,p,C,y,T,R)=>{const I=d.component=tf(d,C,y);if(Ci(d)&&(I.ctx.renderer=xe),sf(I),I.asyncDep){if(y&&y.registerDep(I,fe),!d.el){const S=I.subTree=ut(et);B(null,S,_,p)}return}fe(I,d,_,p,y,T,R)},ie=(d,_,p)=>{const C=_.component=d.component;if(ad(d,_,p))if(C.asyncDep&&!C.asyncResolved){q(C,_,p);return}else C.next=_,Zh(C.update),C.update();else _.el=d.el,C.vnode=_},fe=(d,_,p,C,y,T,R)=>{const I=()=>{if(d.isMounted){let{next:x,bu:A,u:D,parent:L,vnode:z}=d,ne=x,Z;Lt(d,!1),x?(x.el=z.el,q(d,x,R)):x=z,A&&Ms(A),(Z=x.props&&x.props.onVnodeBeforeUpdate)&&rt(Z,L,x,z),Lt(d,!0);const pe=Wi(d),Ke=d.subTree;d.subTree=pe,w(Ke,pe,h(Ke.el),Re(Ke),d,y,T),x.el=pe.el,ne===null&&cd(d,pe.el),D&&De(D,y),(Z=x.props&&x.props.onVnodeUpdated)&&De(()=>rt(Z,L,x,z),y)}else{let x;const{el:A,props:D}=_,{bm:L,m:z,parent:ne}=d,Z=Fs(_);if(Lt(d,!1),L&&Ms(L),!Z&&(x=D&&D.onVnodeBeforeMount)&&rt(x,ne,_),Lt(d,!0),A&&Bn){const pe=()=>{d.subTree=Wi(d),Bn(A,d.subTree,d,y,null)};Z?_.type.__asyncLoader().then(()=>!d.isUnmounted&&pe()):pe()}else{const pe=d.subTree=Wi(d);w(null,pe,p,C,d,y,T),_.el=pe.el}if(z&&De(z,y),!Z&&(x=D&&D.onVnodeMounted)){const pe=_;De(()=>rt(x,ne,pe),y)}(_.shapeFlag&256||ne&&Fs(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&De(d.a,y),d.isMounted=!0,_=p=C=null}},S=d.effect=new Xr(I,()=>lo(E),d.scope),E=d.update=()=>S.run();E.id=d.uid,Lt(d,!0),E()},q=(d,_,p)=>{_.component=d;const C=d.vnode.props;d.vnode=_,d.next=null,Ld(d,_.props,C,p),Ud(d,_.children,p),Pn(),ol(),On()},Y=(d,_,p,C,y,T,R,I,S=!1)=>{const E=d&&d.children,x=d?d.shapeFlag:0,A=_.children,{patchFlag:D,shapeFlag:L}=_;if(D>0){if(D&128){ft(E,A,p,C,y,T,R,I,S);return}else if(D&256){We(E,A,p,C,y,T,R,I,S);return}}L&8?(x&16&&Le(E,y,T),A!==E&&u(p,A)):x&16?L&16?ft(E,A,p,C,y,T,R,I,S):Le(E,y,T,!0):(x&8&&u(p,""),L&16&&W(A,p,C,y,T,R,I,S))},We=(d,_,p,C,y,T,R,I,S)=>{d=d||_n,_=_||_n;const E=d.length,x=_.length,A=Math.min(E,x);let D;for(D=0;D<A;D++){const L=_[D]=S?Tt(_[D]):at(_[D]);w(d[D],L,p,null,y,T,R,I,S)}E>x?Le(d,y,T,!0,!1,A):W(_,p,C,y,T,R,I,S,A)},ft=(d,_,p,C,y,T,R,I,S)=>{let E=0;const x=_.length;let A=d.length-1,D=x-1;for(;E<=A&&E<=D;){const L=d[E],z=_[E]=S?Tt(_[E]):at(_[E]);if(Vt(L,z))w(L,z,p,null,y,T,R,I,S);else break;E++}for(;E<=A&&E<=D;){const L=d[A],z=_[D]=S?Tt(_[D]):at(_[D]);if(Vt(L,z))w(L,z,p,null,y,T,R,I,S);else break;A--,D--}if(E>A){if(E<=D){const L=D+1,z=L<x?_[L].el:C;for(;E<=D;)w(null,_[E]=S?Tt(_[E]):at(_[E]),p,z,y,T,R,I,S),E++}}else if(E>D)for(;E<=A;)ce(d[E],y,T,!0),E++;else{const L=E,z=E,ne=new Map;for(E=z;E<=D;E++){const Be=_[E]=S?Tt(_[E]):at(_[E]);Be.key!=null&&ne.set(Be.key,E)}let Z,pe=0;const Ke=D-z+1;let un=!1,Go=0;const Un=new Array(Ke);for(E=0;E<Ke;E++)Un[E]=0;for(E=L;E<=A;E++){const Be=d[E];if(pe>=Ke){ce(Be,y,T,!0);continue}let it;if(Be.key!=null)it=ne.get(Be.key);else for(Z=z;Z<=D;Z++)if(Un[Z-z]===0&&Vt(Be,_[Z])){it=Z;break}it===void 0?ce(Be,y,T,!0):(Un[it-z]=E+1,it>=Go?Go=it:un=!0,w(Be,_[it],p,null,y,T,R,I,S),pe++)}const Yo=un?jd(Un):_n;for(Z=Yo.length-1,E=Ke-1;E>=0;E--){const Be=z+E,it=_[Be],Qo=Be+1<x?_[Be+1].el:C;Un[E]===0?w(null,it,p,Qo,y,T,R,I,S):un&&(Z<0||E!==Yo[Z]?Me(it,p,Qo,2):Z--)}}},Me=(d,_,p,C,y=null)=>{const{el:T,type:R,transition:I,children:S,shapeFlag:E}=d;if(E&6){Me(d.component.subTree,_,p,C);return}if(E&128){d.suspense.move(_,p,C);return}if(E&64){R.move(d,_,p,xe);return}if(R===lt){s(T,_,p);for(let A=0;A<S.length;A++)Me(S[A],_,p,C);s(d.anchor,_,p);return}if(R===ji){O(d,_,p);return}if(C!==2&&E&1&&I)if(C===0)I.beforeEnter(T),s(T,_,p),De(()=>I.enter(T),y);else{const{leave:A,delayLeave:D,afterLeave:L}=I,z=()=>s(T,_,p),ne=()=>{A(T,()=>{z(),L&&L()})};D?D(T,z,ne):ne()}else s(T,_,p)},ce=(d,_,p,C=!1,y=!1)=>{const{type:T,props:R,ref:I,children:S,dynamicChildren:E,shapeFlag:x,patchFlag:A,dirs:D}=d;if(I!=null&&Cr(I,null,p,d,!0),x&256){_.ctx.deactivate(d);return}const L=x&1&&D,z=!Fs(d);let ne;if(z&&(ne=R&&R.onVnodeBeforeUnmount)&&rt(ne,_,d),x&6)Bi(d.component,p,C);else{if(x&128){d.suspense.unmount(p,C);return}L&&Mt(d,null,_,"beforeUnmount"),x&64?d.type.remove(d,_,p,y,xe,C):E&&(T!==lt||A>0&&A&64)?Le(E,_,p,!1,!0):(T===lt&&A&384||!y&&x&16)&&Le(S,_,p),C&&wt(d)}(z&&(ne=R&&R.onVnodeUnmounted)||L)&&De(()=>{ne&&rt(ne,_,d),L&&Mt(d,null,_,"unmounted")},p)},wt=d=>{const{type:_,el:p,anchor:C,transition:y}=d;if(_===lt){nt(p,C);return}if(_===ji){ee(d);return}const T=()=>{i(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:I}=y,S=()=>R(p,T);I?I(d.el,T,S):S()}else T()},nt=(d,_)=>{let p;for(;d!==_;)p=f(d),i(d),d=p;i(_)},Bi=(d,_,p)=>{const{bum:C,scope:y,update:T,subTree:R,um:I}=d;C&&Ms(C),y.stop(),T&&(T.active=!1,ce(R,d,_,p)),I&&De(I,_),De(()=>{d.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Le=(d,_,p,C=!1,y=!1,T=0)=>{for(let R=T;R<d.length;R++)ce(d[R],_,p,C,y)},Re=d=>d.shapeFlag&6?Re(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),st=(d,_,p)=>{d==null?_._vnode&&ce(_._vnode,null,null,!0):w(_._vnode||null,d,_,null,null,null,p),ol(),sc(),_._vnode=d},xe={p:w,um:ce,m:Me,r:wt,mt:le,mc:W,pc:Y,pbc:v,n:Re,o:t};let Fe,Bn;return e&&([Fe,Bn]=e(xe)),{render:st,hydrate:Fe,createApp:Hd(st,Fe)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vc(t,e,n=!1){const s=t.children,i=e.children;if(F(s)&&F(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=Tt(i[r]),l.el=o.el),n||vc(o,l)),l.type===vi&&(l.el=o.el)}}function jd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const qd=t=>t.__isTeleport,lt=Symbol(void 0),vi=Symbol(void 0),et=Symbol(void 0),ji=Symbol(void 0),Yn=[];let Je=null;function Qn(t=!1){Yn.push(Je=t?null:[])}function zd(){Yn.pop(),Je=Yn[Yn.length-1]||null}let rs=1;function gl(t){rs+=t}function bc(t){return t.dynamicChildren=rs>0?Je||_n:null,zd(),rs>0&&Je&&Je.push(t),t}function Bs(t,e,n,s,i,r){return bc(zt(t,e,n,s,i,r,!0))}function Kd(t,e,n,s,i){return bc(ut(t,e,n,s,i,!0))}function Gd(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const bi="__vInternal",wc=({key:t})=>t??null,Us=({ref:t,ref_key:e,ref_for:n})=>t!=null?ve(t)||Ae(t)||U(t)?{i:Ve,r:t,k:e,f:!!n}:t:null;function zt(t,e=null,n=null,s=0,i=null,r=t===lt?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wc(e),ref:e&&Us(e),scopeId:yi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return l?(uo(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=ve(n)?8:16),rs>0&&!o&&Je&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Je.push(a),a}const ut=Yd;function Yd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Nd)&&(t=et),Gd(t)){const l=Pt(t,e,!0);return n&&uo(l,n),rs>0&&!r&&Je&&(l.shapeFlag&6?Je[Je.indexOf(t)]=l:Je.push(l)),l.patchFlag|=-2,l}if(af(t)&&(t=t.__vccOpts),e){e=Qd(e);let{class:l,style:a}=e;l&&!ve(l)&&(e.class=zr(l)),he(a)&&(Ja(a)&&!F(a)&&(a=Te({},a)),e.style=qr(a))}const o=ve(t)?1:ud(t)?128:qd(t)?64:he(t)?4:U(t)?2:0;return zt(t,e,n,s,i,o,r,!0)}function Qd(t){return t?Ja(t)||bi in t?Te({},t):t:null}function Pt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Xd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&wc(l),ref:e&&e.ref?n&&i?F(i)?i.concat(Us(e)):[i,Us(e)]:Us(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==lt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Jd(t=" ",e=0){return ut(vi,null,t,e)}function ml(t="",e=!1){return e?(Qn(),Kd(et,null,t)):ut(et,null,t)}function at(t){return t==null||typeof t=="boolean"?ut(et):F(t)?ut(lt,null,t.slice()):typeof t=="object"?Tt(t):ut(vi,null,String(t))}function Tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pt(t)}function uo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),uo(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(bi in e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else U(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[Jd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=zr([e.class,s.class]));else if(i==="style")e.style=qr([e.style,s.style]);else if(di(i)){const r=e[i],o=s[i];o&&r!==o&&!(F(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function rt(t,e,n,s=null){qe(t,e,7,[n,s])}const Zd=Ec();let ef=0;function tf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Zd,r={uid:ef++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new gh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gc(s,i),emitsOptions:rc(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=nd.bind(null,r),t.ce&&t.ce(r),r}let we=null;const nf=()=>we||Ve,In=t=>{we=t,t.scope.on()},Jt=()=>{we&&we.scope.off(),we=null};function Ic(t){return t.vnode.shapeFlag&4}let os=!1;function sf(t,e=!1){os=e;const{props:n,children:s}=t.vnode,i=Ic(t);Md(t,n,i,e),Bd(t,s);const r=i?rf(t,e):void 0;return os=!1,r}function rf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xa(new Proxy(t.ctx,Ad));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?lf(t):null;In(t),Pn();const r=Rt(s,t,0,[t.props,i]);if(On(),Jt(),La(r)){if(r.then(Jt,Jt),e)return r.then(o=>{yl(t,o,e)}).catch(o=>{gi(o,t,0)});t.asyncDep=r}else yl(t,r,e)}else Tc(t,e)}function yl(t,e,n){U(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Za(e)),Tc(t,n)}let Cl;function Tc(t,e,n){const s=t.type;if(!t.render){if(!e&&Cl&&!s.render){const i=s.template||ao(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=Te(Te({isCustomElement:r,delimiters:l},o),a);s.render=Cl(i,c)}}t.render=s.render||Ze}In(t),Pn(),xd(t),On(),Jt()}function of(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function lf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=of(t))},slots:t.slots,emit:t.emit,expose:e}}function wi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Za(Xa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gn)return Gn[n](t)},has(e,n){return n in e||n in Gn}}))}function af(t){return U(t)&&"__vccOpts"in t}const cf=(t,e)=>Yh(t,e,os),uf=Symbol(""),hf=()=>Ls(uf),df="3.2.45",ff="http://www.w3.org/2000/svg",jt=typeof document<"u"?document:null,El=jt&&jt.createElement("template"),_f={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?jt.createElementNS(ff,t):jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{El.innerHTML=s?`<svg>${t}</svg>`:t;const l=El.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function pf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function gf(t,e,n){const s=t.style,i=ve(n);if(n&&!i){for(const r in n)Er(s,r,n[r]);if(e&&!ve(e))for(const r in e)n[r]==null&&Er(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const vl=/\s*!important$/;function Er(t,e,n){if(F(n))n.forEach(s=>Er(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=mf(t,e);vl.test(n)?t.setProperty(Dn(s),n.replace(vl,""),"important"):t[s]=n}}const bl=["Webkit","Moz","ms"],qi={};function mf(t,e){const n=qi[e];if(n)return n;let s=wn(e);if(s!=="filter"&&s in t)return qi[e]=s;s=Ua(s);for(let i=0;i<bl.length;i++){const r=bl[i]+s;if(r in t)return qi[e]=r}return e}const wl="http://www.w3.org/1999/xlink";function yf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wl,e.slice(6,e.length)):t.setAttributeNS(wl,e,n);else{const r=ah(e);n==null||r&&!Oa(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Cf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const a=n??"";(t.value!==a||t.tagName==="OPTION")&&(t.value=a),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Oa(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function dn(t,e,n,s){t.addEventListener(e,n,s)}function Ef(t,e,n,s){t.removeEventListener(e,n,s)}function vf(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=bf(e);if(s){const c=r[e]=Tf(s,i);dn(t,l,c,a)}else o&&(Ef(t,l,o,a),r[e]=void 0)}}const Il=/(?:Once|Passive|Capture)$/;function bf(t){let e;if(Il.test(t)){e={};let s;for(;s=t.match(Il);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dn(t.slice(2)),e]}let zi=0;const wf=Promise.resolve(),If=()=>zi||(wf.then(()=>zi=0),zi=Date.now());function Tf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;qe(Sf(s,n.value),e,5,[s])};return n.value=t,n.attached=If(),n}function Sf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Tl=/^on[a-z]/,Rf=(t,e,n,s,i=!1,r,o,l,a)=>{e==="class"?pf(t,s,i):e==="style"?gf(t,n,s):di(e)?Kr(e)||vf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nf(t,e,s,i))?Cf(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yf(t,e,s,i))};function Nf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Tl.test(e)&&U(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Tl.test(e)&&ve(n)?!1:e in t}const Af={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};gd.props;const Sl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Ms(e,n):e};function xf(t){t.target.composing=!0}function Rl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nl={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Sl(i);const r=s||i.props&&i.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=qs(l)),t._assign(l)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",xf),dn(t,"compositionend",Rl),dn(t,"change",Rl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Sl(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&qs(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Df=Te({patchProp:Rf},_f);let Al;function Pf(){return Al||(Al=$d(Df))}const Of=(...t)=>{const e=Pf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=kf(s);if(!i)return;const r=e._component;!U(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function kf(t){return ve(t)?document.querySelector(t):t}/**
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
 */const Sc={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw kn(e)},kn=function(t){return new Error("Firebase Database ("+Sc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Rc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Mf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ho={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Rc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Mf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),c!==64){const g=l<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Nc=function(t){const e=Rc(t);return ho.encodeByteArray(e,!0)},Gs=function(t){return Nc(t).replace(/\./g,"")},vr=function(t){try{return ho.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lf(t){return Ac(void 0,t)}function Ac(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Ff(n)||(t[n]=Ac(t[n],e[n]));return t}function Ff(t){return t!=="__proto__"}/**
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
 */function Bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uf=()=>Bf().__FIREBASE_DEFAULTS__,Wf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vr(t[1]);return e&&JSON.parse(e)},xc=()=>{try{return Uf()||Wf()||Hf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$f=t=>{var e,n;return(n=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vf=t=>{const e=$f(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},jf=()=>{var t;return(t=xc())===null||t===void 0?void 0:t.config};/**
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
 */class pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function qf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Gs(JSON.stringify(n)),Gs(JSON.stringify(o)),l].join(".")}/**
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
 */function zf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zf())}function Kf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pc(){return Sc.NODE_ADMIN===!0}function Gf(){try{return typeof indexedDB=="object"}catch{return!1}}function Yf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qf="FirebaseError";class ys extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Qf,Object.setPrototypeOf(this,ys.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oc.prototype.create)}}class Oc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jf(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ys(i,l,s)}}function Jf(t,e){return t.replace(Xf,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Xf=/\{\$([^}]+)}/g;/**
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
 */function ls(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
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
 */const kc=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ls(vr(r[0])||""),n=ls(vr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Zf=function(t){const e=kc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},e_=function(t){const e=kc(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function br(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ys(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(xl(r)&&xl(o)){if(!wr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function xl(t){return t!==null&&typeof t=="object"}/**
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
 */function t_(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class n_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):h<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+c+a+u+s[h]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Sn(t,e){return`${t} failed: ${e} argument `}/**
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
 */const s_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ii=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ln(t){return t&&t._delegate?t._delegate:t}class as{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ut="[DEFAULT]";/**
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
 */class i_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new pt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o_(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:r_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r_(t){return t===Ut?void 0:t}function o_(t){return t.instantiationMode==="EAGER"}/**
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
 */class l_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const a_={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},c_=se.INFO,u_={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},h_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=u_[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=c_,this._logHandler=h_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const d_=(t,e)=>e.some(n=>t instanceof n);let Dl,Pl;function f_(){return Dl||(Dl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function __(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lc=new WeakMap,Ir=new WeakMap,Fc=new WeakMap,Ki=new WeakMap,fo=new WeakMap;function p_(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lc.set(n,t)}).catch(()=>{}),fo.set(e,t),e}function g_(t){if(Ir.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Ir.set(t,e)}let Tr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ir.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m_(t){Tr=t(Tr)}function y_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Gi(this),e,...n);return Fc.set(s,e.sort?e.sort():[e]),Nt(s)}:__().includes(t)?function(...e){return t.apply(Gi(this),e),Nt(Lc.get(this))}:function(...e){return Nt(t.apply(Gi(this),e))}}function C_(t){return typeof t=="function"?y_(t):(t instanceof IDBTransaction&&g_(t),d_(t,f_())?new Proxy(t,Tr):t)}function Nt(t){if(t instanceof IDBRequest)return p_(t);if(Ki.has(t))return Ki.get(t);const e=C_(t);return e!==t&&(Ki.set(t,e),fo.set(e,t)),e}const Gi=t=>fo.get(t);function E_(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Nt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Nt(o.result),a.oldVersion,a.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const v_=["get","getKey","getAll","getAllKeys","count"],b_=["put","add","delete","clear"],Yi=new Map;function Ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yi.get(e))return Yi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=b_.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||v_.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Yi.set(e,r),r}m_(t=>({...t,get:(e,n,s)=>Ol(e,n)||t.get(e,n,s),has:(e,n)=>!!Ol(e,n)||t.has(e,n)}));/**
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
 */class w_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I_(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function I_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sr="@firebase/app",kl="0.9.1";/**
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
 */const Zt=new Mc("@firebase/app"),T_="@firebase/app-compat",S_="@firebase/analytics-compat",R_="@firebase/analytics",N_="@firebase/app-check-compat",A_="@firebase/app-check",x_="@firebase/auth",D_="@firebase/auth-compat",P_="@firebase/database",O_="@firebase/database-compat",k_="@firebase/functions",M_="@firebase/functions-compat",L_="@firebase/installations",F_="@firebase/installations-compat",B_="@firebase/messaging",U_="@firebase/messaging-compat",W_="@firebase/performance",H_="@firebase/performance-compat",$_="@firebase/remote-config",V_="@firebase/remote-config-compat",j_="@firebase/storage",q_="@firebase/storage-compat",z_="@firebase/firestore",K_="@firebase/firestore-compat",G_="firebase",Y_="9.16.0";/**
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
 */const Rr="[DEFAULT]",Q_={[Sr]:"fire-core",[T_]:"fire-core-compat",[R_]:"fire-analytics",[S_]:"fire-analytics-compat",[A_]:"fire-app-check",[N_]:"fire-app-check-compat",[x_]:"fire-auth",[D_]:"fire-auth-compat",[P_]:"fire-rtdb",[O_]:"fire-rtdb-compat",[k_]:"fire-fn",[M_]:"fire-fn-compat",[L_]:"fire-iid",[F_]:"fire-iid-compat",[B_]:"fire-fcm",[U_]:"fire-fcm-compat",[W_]:"fire-perf",[H_]:"fire-perf-compat",[$_]:"fire-rc",[V_]:"fire-rc-compat",[j_]:"fire-gcs",[q_]:"fire-gcs-compat",[z_]:"fire-fst",[K_]:"fire-fst-compat","fire-js":"fire-js",[G_]:"fire-js-all"};/**
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
 */const Qs=new Map,Nr=new Map;function J_(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Js(t){const e=t.name;if(Nr.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Nr.set(e,t);for(const n of Qs.values())J_(n,t);return!0}function X_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Z_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new Oc("app","Firebase",Z_);/**
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
 */class ep{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new as("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const tp=Y_;function Bc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=jf()),!n)throw At.create("no-options");const r=Qs.get(i);if(r){if(wr(n,r.options)&&wr(s,r.config))return r;throw At.create("duplicate-app",{appName:i})}const o=new l_(i);for(const a of Nr.values())o.addComponent(a);const l=new ep(n,s,o);return Qs.set(i,l),l}function np(t=Rr){const e=Qs.get(t);if(!e&&t===Rr)return Bc();if(!e)throw At.create("no-app",{appName:t});return e}function yn(t,e,n){var s;let i=(s=Q_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(l.join(" "));return}Js(new as(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sp="firebase-heartbeat-database",ip=1,cs="firebase-heartbeat-store";let Qi=null;function Uc(){return Qi||(Qi=E_(sp,ip,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cs)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Qi}async function rp(t){try{return(await Uc()).transaction(cs).objectStore(cs).get(Wc(t))}catch(e){if(e instanceof ys)Zt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function Ml(t,e){try{const s=(await Uc()).transaction(cs,"readwrite");return await s.objectStore(cs).put(e,Wc(t)),s.done}catch(n){if(n instanceof ys)Zt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function Wc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const op=1024,lp=30*24*60*60*1e3;class ap{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new up(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ll();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=lp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ll(),{heartbeatsToSend:n,unsentEntries:s}=cp(this._heartbeatsCache.heartbeats),i=Gs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ll(){return new Date().toISOString().substring(0,10)}function cp(t,e=op){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gf()?Yf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await rp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ml(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fl(t){return Gs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hp(t){Js(new as("platform-logger",e=>new w_(e),"PRIVATE")),Js(new as("heartbeat",e=>new ap(e),"PRIVATE")),yn(Sr,kl,t),yn(Sr,kl,"esm2017"),yn("fire-js","")}hp("");var dp="firebase",fp="9.16.0";/**
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
 */yn(dp,fp,"app");const Bl="@firebase/database",Ul="0.14.1";/**
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
 */let Hc="";function _p(t){Hc=t}/**
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
 */class pp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const $c=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pp(e)}}catch{}return new gp},Kt=$c("localStorage"),Ar=$c("sessionStorage");/**
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
 */const Cn=new Mc("@firebase/database"),mp=function(){let t=1;return function(){return t++}}(),Vc=function(t){const e=s_(t),n=new n_;n.update(e);const s=n.digest();return ho.encodeByteArray(s)},Cs=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Cs.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Xt=null,Wl=!0;const yp=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Cn.logLevel=se.VERBOSE,Xt=Cn.log.bind(Cn),e&&Ar.set("logging_enabled",!0)):typeof t=="function"?Xt=t:(Xt=null,Ar.remove("logging_enabled"))},be=function(...t){if(Wl===!0&&(Wl=!1,Xt===null&&Ar.get("logging_enabled")===!0&&yp(!0)),Xt){const e=Cs.apply(null,t);Xt(e)}},Es=function(t){return function(...e){be(t,...e)}},xr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Cs(...t);Cn.error(e)},Ct=function(...t){const e=`FIREBASE FATAL ERROR: ${Cs(...t)}`;throw Cn.error(e),new Error(e)},ke=function(...t){const e="FIREBASE WARNING: "+Cs(...t);Cn.warn(e)},Cp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ti=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ep=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Rn="[MIN_NAME]",en="[MAX_NAME]",an=function(t,e){if(t===e)return 0;if(t===Rn||e===en)return-1;if(e===Rn||t===en)return 1;{const n=Hl(t),s=Hl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},vp=function(t,e){return t===e?0:t<e?-1:1},Wn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},_o=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=_o(t[e[s]]);return n+="}",n},jc=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Se(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const qc=function(t){b(!Ti(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(a=0;a<64;a+=8){let f=parseInt(u.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ip(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Tp=new RegExp("^-?(0*)\\d{1,10}$"),Sp=-2147483648,Rp=2147483647,Hl=function(t){if(Tp.test(t)){const e=Number(t);if(e>=Sp&&e<=Rp)return e}return null},Mn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},Np=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ap{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xp{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ke(e)}}class En{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}En.OWNER="owner";/**
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
 */const po="5",zc="v",Kc="s",Gc="r",Yc="f",Qc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jc="ls",Xc="p",Dr="ac",Zc="websocket",eu="long_polling";/**
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
 */class tu{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dp(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nu(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===Zc)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===eu)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dp(t)&&(n.ns=t.namespace);const i=[];return Se(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Pp{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Lf(this.counters_)}}/**
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
 */const Ji={},Xi={};function go(t){const e=t.toString();return Ji[e]||(Ji[e]=new Pp),Ji[e]}function Op(t,e){const n=t.toString();return Xi[n]||(Xi[n]=e()),Xi[n]}/**
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
 */class kp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Mn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const $l="start",Mp="close",Lp="pLPCommand",Fp="pRTLPCB",su="id",iu="pw",ru="ser",Bp="cb",Up="seg",Wp="ts",Hp="d",$p="dframe",ou=1870,lu=30,Vp=ou-lu,jp=25e3,qp=3e4;class fn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Es(e),this.stats_=go(n),this.urlFn=a=>(this.appCheckToken&&(a[Dr]=this.appCheckToken),nu(n,eu,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new kp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qp)),Ep(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mo((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===$l)this.id=l,this.password=a;else if(o===Mp)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[$l]="t",s[ru]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Bp]=this.scriptTagHolder.uniqueCallbackIdentifier),s[zc]=po,this.transportSessionId&&(s[Kc]=this.transportSessionId),this.lastSessionId&&(s[Jc]=this.lastSessionId),this.applicationId&&(s[Xc]=this.applicationId),this.appCheckToken&&(s[Dr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qc.test(location.hostname)&&(s[Gc]=Yc);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){fn.forceAllow_=!0}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){return fn.forceAllow_?!0:!fn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bp()&&!wp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Nc(n),i=jc(s,Vp);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[$p]="t",s[su]=e,s[iu]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mp(),window[Lp+this.uniqueCallbackIdentifier]=e,window[Fp+this.uniqueCallbackIdentifier]=n,this.myIFrame=mo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){be("frame writing exception"),l.stack&&be(l.stack),be(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[su]=this.myID,e[iu]=this.myPW,e[ru]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lu+s.length<=ou;){const o=this.pendingSegs.shift();s=s+"&"+Up+i+"="+o.seg+"&"+Wp+i+"="+o.ts+"&"+Hp+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jp)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const zp=16384,Kp=45e3;let Xs=null;typeof MozWebSocket<"u"?Xs=MozWebSocket:typeof WebSocket<"u"&&(Xs=WebSocket);class Qe{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Es(this.connId),this.stats_=go(n),this.connURL=Qe.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[zc]=po,typeof location<"u"&&location.hostname&&Qc.test(location.hostname)&&(o[Gc]=Yc),n&&(o[Kc]=n),s&&(o[Jc]=s),i&&(o[Dr]=i),r&&(o[Xc]=r),nu(e,Zc,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kt.set("previous_websocket_failure",!0);try{let s;Pc(),this.mySock=new Xs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xs!==null&&!Qe.forceDisallow_}static previouslyFailed(){return Kt.isInMemoryStorage||Kt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ls(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jc(n,zp);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Kp))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
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
 */class us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[fn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qe&&Qe.isAvailable();let s=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Qe];else{const i=this.transports_=[];for(const r of us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
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
 */const Gp=6e4,Yp=5e3,Qp=10*1024,Jp=100*1024,Zi="t",Vl="d",Xp="s",jl="r",Zp="e",ql="o",zl="a",Kl="n",Gl="p",eg="h";class tg{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Es("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Jn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zi in e){const n=e[Zi];n===zl?this.upgradeIfSecondaryHealthy_():n===jl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ql&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Wn("t",e),s=Wn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Wn(Zi,e);if(Vl in e){const s=e[Vl];if(n===eg)this.onHandshake_(s);else if(n===Kl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xp?this.onConnectionShutdown_(s):n===jl?this.onReset_(s):n===Zp?xr("Server Error: "+s):n===ql?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),po!==s&&ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Jn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Gp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class au{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class cu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Zs extends cu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Yl=32,Ql=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new X("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ot(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function yo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ng(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uu(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function _e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof X)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new X(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=$(t),s=$(e);if(n===null)return e;if(n===s)return Pe(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sg(t,e){const n=hs(t,0),s=hs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=an(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Co(t,e){if(Ot(t)!==Ot(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function je(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ot(t)>Ot(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ig{constructor(e,n){this.errorPrefix_=n,this.parts_=hs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ii(this.parts_[s]);hu(this)}}function rg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ii(e),hu(t)}function og(t){const e=t.parts_.pop();t.byteLength_-=Ii(e),t.parts_.length>0&&(t.byteLength_-=1)}function hu(t){if(t.byteLength_>Ql)throw new Error(t.errorPrefix_+"has a key path longer than "+Ql+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yl)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yl+") or object contains a cycle "+Wt(t))}function Wt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Eo extends cu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Eo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Hn=1e3,lg=60*5*1e3,Jl=30*1e3,ag=1.3,cg=3e4,ug="server_kill",Xl=3;class mt extends au{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=mt.nextPersistentConnectionId_++,this.log_=Es("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hn,this.maxReconnectDelay_=lg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Pc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Eo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new pt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;mt.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const s=Tn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||e_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jl)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Zf(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xr("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cg&&(this.reconnectDelay_=Hn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ag)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+mt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new tg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ug)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ke(h),a())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],br(this.interruptReasons_)&&(this.reconnectDelay_=Hn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>_o(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new X(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xl&&(this.reconnectDelay_=Jl,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Hc.replace(/\./g,"-")]=1,Dc()?e["framework.cordova"]=1:Kf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zs.getInstance().currentlyOnline();return br(this.interruptReasons_)&&e}}mt.nextPersistentConnectionId_=0;mt.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class Si{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new j(Rn,e),i=new j(Rn,n);return this.compare(s,i)!==0}minPost(){return j.MIN}}/**
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
 */let xs;class du extends Si{static get __EMPTY_NODE(){return xs}static set __EMPTY_NODE(e){xs=e}compare(e,n){return an(e.name,n.name)}isDefinedOn(e){throw kn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(en,xs)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,xs)}toString(){return".key"}}const vn=new du;/**
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
 */class Ds{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Oe.EMPTY_NODE,this.right=r??Oe.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class hg{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ds(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ds(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ds(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new hg;/**
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
 */function dg(t,e){return an(t.name,e.name)}function vo(t,e){return an(t,e)}/**
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
 */let Pr;function fg(t){Pr=t}const fu=function(t){return typeof t=="number"?"number:"+qc(t):"string:"+t},_u=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else b(t===Pr||t.isEmpty(),"priority of unexpected type.");b(t===Pr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Zl;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_u(this.priorityNode_)}static set __childrenNodeConstructor(e){Zl=e}static get __childrenNodeConstructor(){return Zl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:$(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=$(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||Ot(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qc(this.value_):e+=this.value_,this.lazyHash_=Vc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let pu,gu;function _g(t){pu=t}function pg(t){gu=t}class gg extends Si{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?an(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(en,new ye("[PRIORITY-POST]",gu))}makePost(e,n){const s=pu(e);return new j(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new gg;/**
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
 */const mg=Math.log(2);class yg{constructor(e){const n=r=>parseInt(Math.log(r)/mg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ei=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let h,f;if(u===0)return null;if(u===1)return h=t[a],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,null,null);{const g=parseInt(u/2,10)+a,m=i(a,g),w=i(g+1,c);return h=t[g],f=n?n(h):h,new Ce(f,h.node,Ce.BLACK,m,w)}},r=function(a){let c=null,u=null,h=t.length;const f=function(m,w){const P=h-m,B=h;h-=m;const ae=i(P+1,B),O=t[P],ee=n?n(O):O;g(new Ce(ee,O.node,w,null,ae))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const w=a.nextBitIsOne(),P=Math.pow(2,a.count-(m+1));w?f(P,Ce.BLACK):(f(P,Ce.BLACK),f(P,Ce.RED))}return u},o=new yg(t.length),l=r(o);return new Oe(s||e,l)};/**
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
 */let er;const hn={};class gt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(hn&&ue,"ChildrenNode.ts has not been loaded"),er=er||new gt({".priority":hn},{".priority":ue}),er}get(e){const n=Tn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){b(e!==vn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(j.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=ei(s,e.getCompare()):l=hn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new gt(u,c)}addToIndexes(e,n){const s=Ys(this.indexes_,(i,r)=>{const o=Tn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===hn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ei(l,o.getCompare())}else return hn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new gt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ys(this.indexes_,i=>{if(i===hn)return i;{const r=n.get(e.name);return r?i.remove(new j(e.name,r)):i}});return new gt(s,this.indexSet_)}}/**
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
 */let $n;class M{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&_u(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $n||($n=new M(new Oe(vo),null,gt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$n}updatePriority(e){return this.children_.isEmpty()?this:new M(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$n:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new j(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$n:this.priorityNode_;return new M(i,o,r)}}updateChild(e,n){const s=$(e);if(s===null)return n;{b($(e)!==".priority"||Ot(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&M.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fu(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vc(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new j(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vs?-1:0}withIndex(e){if(e===vn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vn?null:this.indexMap_.get(e.toString())}}M.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cg extends M{constructor(){super(new Oe(vo),M.EMPTY_NODE,gt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M.EMPTY_NODE}isEmpty(){return!1}}const vs=new Cg;Object.defineProperties(j,{MIN:{value:new j(Rn,M.EMPTY_NODE)},MAX:{value:new j(en,vs)}});du.__EMPTY_NODE=M.EMPTY_NODE;ye.__childrenNodeConstructor=M;fg(vs);pg(vs);/**
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
 */const Eg=!0;function ge(t,e=null){if(t===null)return M.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,ge(e))}if(!(t instanceof Array)&&Eg){const n=[];let s=!1;if(Se(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return M.EMPTY_NODE;const r=ei(n,dg,o=>o.name,vo);if(s){const o=ei(n,ue.getCompare());return new M(r,ge(e),new gt({".priority":o},{".priority":ue}))}else return new M(r,ge(e),gt.Default)}else{let n=M.EMPTY_NODE;return Se(t,(s,i)=>{if(ht(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}_g(ge);/**
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
 */class vg extends Si{constructor(e){super(),this.indexPath_=e,b(!V(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?an(e.name,n.name):r}makePost(e,n){const s=ge(e),i=M.EMPTY_NODE.updateChild(this.indexPath_,s);return new j(n,i)}maxPost(){const e=M.EMPTY_NODE.updateChild(this.indexPath_,vs);return new j(en,e)}toString(){return hs(this.indexPath_,0).join("/")}}/**
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
 */class bg extends Si{compare(e,n){const s=e.node.compareTo(n.node);return s===0?an(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const s=ge(e);return new j(n,s)}toString(){return".value"}}const wg=new bg;/**
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
 */function mu(t){return{type:"value",snapshotNode:t}}function Nn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ig(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class bo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ds(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Nn(n,s)):o.trackChildChange(fs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(ds(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(fs(i,r,o))}else s.trackChildChange(Nn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?M.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class _s{constructor(e){this.indexedFilter_=new bo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new j(n,s))||(s=M.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=M.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(M.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new j(o,l))||(i=i.updateImmediateChild(o,M.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new j(n,s))||(s=M.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=M.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=M.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(M.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,M.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const a=new j(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(fs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ds(n,h));const w=l.updateImmediateChild(n,M.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Nn(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ds(c.name,c.node)),r.trackChildChange(Nn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,M.EMPTY_NODE)):e}}/**
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
 */class wo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Rn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:en}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new wo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sg(t){return t.loadsAllData()?new bo(t.getIndex()):t.hasLimit()?new Tg(t):new _s(t)}function ea(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===wg?n="$value":t.index_===vn?n="$key":(b(t.index_ instanceof vg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ta(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class ti extends au{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Es("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ti.getListenId_(e,s),l={};this.listens_[o]=l;const a=ea(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Tn(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=ti.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ea(e._queryParams),s=e._path.toString(),i=new pt;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+t_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ls(l.responseText)}catch{ke("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ke("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Rg{constructor(){this.rootNode_=M.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ni(){return{value:null,children:new Map}}function Ln(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=$(e);t.children.has(s)||t.children.set(s,ni());const i=t.children.get(s);e=te(e),Ln(i,e,n)}}function Or(t,e){if(V(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ue,(s,i)=>{Ln(t,new X(s),i)}),Or(t,e)}}else if(t.children.size>0){const n=$(e);return e=te(e),t.children.has(n)&&Or(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function kr(t,e,n){t.value!==null?n(e,t.value):Ng(t,(s,i)=>{const r=new X(e.toString()+"/"+s);kr(i,r,n)})}function Ng(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Ag{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Se(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const na=10*1e3,xg=30*1e3,Dg=5*60*1e3;class Pg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ag(e);const s=na+(xg-na)*Math.random();Jn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Se(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Jn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dg))}}/**
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
 */var Xe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xe||(Xe={}));function yu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Io(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function To(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class si{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Xe.ACK_USER_WRITE,this.source=yu()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new si(Q(),n,this.revert)}}else return b($(this.path)===e,"operationForChild called for unrelated child."),new si(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=Xe.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new ps(this.source,Q()):new ps(this.source,te(this.path))}}/**
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
 */class tn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Xe.OVERWRITE}operationForChild(e){return V(this.path)?new tn(this.source,Q(),this.snap.getImmediateChild(e)):new tn(this.source,te(this.path),this.snap)}}/**
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
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Xe.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new tn(this.source,Q(),n.value):new gs(this.source,Q(),n)}else return b($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class nn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Og{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ig(o.childName,o.snapshotNode))}),Vn(t,i,"child_removed",e,s,n),Vn(t,i,"child_added",e,s,n),Vn(t,i,"child_moved",r,s,n),Vn(t,i,"child_changed",e,s,n),Vn(t,i,"value",e,s,n),i}function Vn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>Lg(t,l,a)),o.forEach(l=>{const a=Mg(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Mg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lg(t,e,n){if(e.childName==null||n.childName==null)throw kn("Should only compare child_ events.");const s=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Ri(t,e){return{eventCache:t,serverCache:e}}function Xn(t,e,n,s){return Ri(new nn(e,n,s),t.serverCache)}function Cu(t,e,n,s){return Ri(t.eventCache,new nn(e,n,s))}function Mr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function sn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let tr;const Fg=()=>(tr||(tr=new Oe(vp)),tr);class re{constructor(e,n=Fg()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Se(e,(s,i)=>{n=n.set(new X(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(V(e))return null;{const s=$(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:_e(new X(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=$(e),s=this.children.get(n);return s!==null?s.subtree(te(e)):new re(null)}}set(e,n){if(V(e))return new re(n,this.children);{const s=$(e),r=(this.children.get(s)||new re(null)).set(te(e),n),o=this.children.insert(s,r);return new re(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=$(e),s=this.children.get(n);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new re(null):new re(this.value,r)}else return this}}get(e){if(V(e))return this.value;{const n=$(e),s=this.children.get(n);return s?s.get(te(e)):null}}setTree(e,n){if(V(e))return n;{const s=$(e),r=(this.children.get(s)||new re(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new re(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(_e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(V(e))return null;{const r=$(e),o=this.children.get(r);return o?o.findOnPath_(te(e),_e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(V(e))return this;{this.value&&s(n,this.value);const i=$(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),_e(n,i),s):new re(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(_e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class tt{constructor(e){this.writeTree_=e}static empty(){return new tt(new re(null))}}function Zn(t,e,n){if(V(e))return new tt(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Pe(i,e);return r=r.updateChild(o,n),new tt(t.writeTree_.set(i,r))}else{const i=new re(n),r=t.writeTree_.setTree(e,i);return new tt(r)}}}function sa(t,e,n){let s=t;return Se(n,(i,r)=>{s=Zn(s,_e(e,i),r)}),s}function ia(t,e){if(V(e))return tt.empty();{const n=t.writeTree_.setTree(e,new re(null));return new tt(n)}}function Lr(t,e){return cn(t,e)!=null}function cn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function ra(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new j(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new j(s,i.value))}),e}function xt(t,e){if(V(e))return t;{const n=cn(t,e);return n!=null?new tt(new re(n)):new tt(t.writeTree_.subtree(e))}}function Fr(t){return t.writeTree_.isEmpty()}function An(t,e){return Eu(Q(),t.writeTree_,e)}function Eu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Eu(_e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(_e(t,".priority"),s)),n}}/**
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
 */function So(t,e){return Iu(e,t)}function Bg(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Zn(t.visibleWrites,e,n)),t.lastWriteId=s}function Ug(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Wg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Hg(l,s.path)?i=!1:je(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return $g(t),!0;if(s.snap)t.visibleWrites=ia(t.visibleWrites,s.path);else{const l=s.children;Se(l,a=>{t.visibleWrites=ia(t.visibleWrites,_e(s.path,a))})}return!0}else return!1}function Hg(t,e){if(t.snap)return je(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&je(_e(t.path,n),e))return!0;return!1}function $g(t){t.visibleWrites=vu(t.allWrites,Vg,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Vg(t){return t.visible}function vu(t,e,n){let s=tt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)je(n,o)?(l=Pe(n,o),s=Zn(s,l,r.snap)):je(o,n)&&(l=Pe(o,n),s=Zn(s,Q(),r.snap.getChild(l)));else if(r.children){if(je(n,o))l=Pe(n,o),s=sa(s,l,r.children);else if(je(o,n))if(l=Pe(o,n),V(l))s=sa(s,Q(),r.children);else{const a=Tn(r.children,$(l));if(a){const c=a.getChild(te(l));s=Zn(s,Q(),c)}}}else throw kn("WriteRecord should have .snap or .children")}}return s}function bu(t,e,n,s,i){if(!s&&!i){const r=cn(t.visibleWrites,e);if(r!=null)return r;{const o=xt(t.visibleWrites,e);if(Fr(o))return n;if(n==null&&!Lr(o,Q()))return null;{const l=n||M.EMPTY_NODE;return An(o,l)}}}else{const r=xt(t.visibleWrites,e);if(!i&&Fr(r))return n;if(!i&&n==null&&!Lr(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(je(c.path,e)||je(e,c.path))},l=vu(t.allWrites,o,e),a=n||M.EMPTY_NODE;return An(l,a)}}}function jg(t,e,n){let s=M.EMPTY_NODE;const i=cn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=xt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const a=An(xt(r,new X(o)),l);s=s.updateImmediateChild(o,a)}),ra(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=xt(t.visibleWrites,e);return ra(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qg(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=_e(e,n);if(Lr(t.visibleWrites,r))return null;{const o=xt(t.visibleWrites,r);return Fr(o)?i.getChild(n):An(o,i.getChild(n))}}function zg(t,e,n,s){const i=_e(e,n),r=cn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=xt(t.visibleWrites,i);return An(o,s.getNode().getImmediateChild(n))}else return null}function Kg(t,e){return cn(t.visibleWrites,e)}function Gg(t,e,n,s,i,r,o){let l;const a=xt(t.visibleWrites,e),c=cn(a,Q());if(c!=null)l=c;else if(n!=null)l=An(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function Yg(){return{visibleWrites:tt.empty(),allWrites:[],lastWriteId:-1}}function ii(t,e,n,s){return bu(t.writeTree,t.treePath,e,n,s)}function Ro(t,e){return jg(t.writeTree,t.treePath,e)}function oa(t,e,n,s){return qg(t.writeTree,t.treePath,e,n,s)}function ri(t,e){return Kg(t.writeTree,_e(t.treePath,e))}function Qg(t,e,n,s,i,r){return Gg(t.writeTree,t.treePath,e,n,s,i,r)}function No(t,e,n){return zg(t.writeTree,t.treePath,e,n)}function wu(t,e){return Iu(_e(t.treePath,e),t.writeTree)}function Iu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Jg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,fs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ds(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Nn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,fs(s,e.snapshotNode,i.oldSnap));else throw kn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Xg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Tu=new Xg;class Ao{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new nn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return No(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:sn(this.viewCache_),r=Qg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Zg(t){return{filter:t}}function em(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tm(t,e,n,s,i){const r=new Jg;let o,l;if(n.type===Xe.OVERWRITE){const c=n;c.source.fromUser?o=Br(t,e,c.path,c.snap,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=oi(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Xe.MERGE){const c=n;c.source.fromUser?o=sm(t,e,c.path,c.children,s,i,r):(b(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Ur(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Xe.ACK_USER_WRITE){const c=n;c.revert?o=om(t,e,c.path,s,i,r):o=im(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Xe.LISTEN_COMPLETE)o=rm(t,e,n.path,s,r);else throw kn("Unknown operation type: "+n.type);const a=r.getChanges();return nm(e,o,a),{viewCache:o,changes:a}}function nm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(mu(Mr(e)))}}function Su(t,e,n,s,i,r){const o=e.eventCache;if(ri(s,n)!=null)return e;{let l,a;if(V(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=sn(e),u=c instanceof M?c:M.EMPTY_NODE,h=Ro(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ii(s,sn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=$(n);if(c===".priority"){b(Ot(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const h=oa(s,n,u,a);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=te(n);let h;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=oa(s,n,o.getNode(),a);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=No(s,c,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),c,h,u,i,r):l=o.getNode()}}return Xn(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function oi(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=$(n);if(!a.isCompleteForPath(n)&&Ot(n)>1)return e;const m=te(n),P=a.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(a.getNode(),P):c=u.updateChild(a.getNode(),g,P,m,Tu,null)}const h=Cu(e,c,a.isFullyInitialized()||V(n),u.filtersNodes()),f=new Ao(i,h,r);return Su(t,h,n,i,f,l)}function Br(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new Ao(i,e,r);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Xn(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Xn(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=te(n),g=l.getNode().getImmediateChild(h);let m;if(V(f))m=s;else{const w=u.getCompleteChild(h);w!=null?yo(f)===".priority"&&w.getChild(uu(f)).isEmpty()?m=w:m=w.updateChild(f,s):m=M.EMPTY_NODE}if(g.equals(m))a=e;else{const w=t.filter.updateChild(l.getNode(),h,m,f,u,o);a=Xn(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function la(t,e){return t.eventCache.isCompleteForChild(e)}function sm(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=_e(n,a);la(e,$(u))&&(l=Br(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=_e(n,a);la(e,$(u))||(l=Br(t,l,u,c,i,r,o))}),l}function aa(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;V(n)?c=s:c=new re(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=aa(t,g,f);a=oi(t,a,new X(h),m,i,r,o,l)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),w=aa(t,m,f);a=oi(t,a,new X(h),w,i,r,o,l)}}),a}function im(t,e,n,s,i,r,o){if(ri(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return oi(t,e,n,a.getNode().getChild(n),i,r,l,o);if(V(n)){let c=new re(null);return a.getNode().forEachChild(vn,(u,h)=>{c=c.set(new X(u),h)}),Ur(t,e,n,c,i,r,l,o)}else return e}else{let c=new re(null);return s.foreach((u,h)=>{const f=_e(n,u);a.isCompleteForPath(f)&&(c=c.set(u,a.getNode().getChild(f)))}),Ur(t,e,n,c,i,r,l,o)}}function rm(t,e,n,s,i){const r=e.serverCache,o=Cu(e,r.getNode(),r.isFullyInitialized()||V(n),r.isFiltered());return Su(t,o,n,s,Tu,i)}function om(t,e,n,s,i,r){let o;if(ri(s,n)!=null)return e;{const l=new Ao(s,e,i),a=e.eventCache.getNode();let c;if(V(n)||$(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ii(s,sn(e));else{const h=e.serverCache.getNode();b(h instanceof M,"serverChildren would be complete if leaf node"),u=Ro(s,h)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=$(n);let h=No(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=a.getImmediateChild(u)),h!=null?c=t.filter.updateChild(a,u,h,te(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,M.EMPTY_NODE,te(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ii(s,sn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ri(s,Q())!=null,Xn(e,c,o,t.filter.filtersNodes())}}/**
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
 */class lm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bo(s.getIndex()),r=Sg(s);this.processor_=Zg(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(M.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(M.EMPTY_NODE,l.getNode(),null),u=new nn(a,o.isFullyInitialized(),i.filtersNodes()),h=new nn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ri(h,u),this.eventGenerator_=new Og(this.query_)}get query(){return this.query_}}function am(t){return t.viewCache_.serverCache.getNode()}function cm(t,e){const n=sn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function ca(t){return t.eventRegistrations_.length===0}function um(t,e){t.eventRegistrations_.push(e)}function ua(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ha(t,e,n,s){e.type===Xe.MERGE&&e.source.queryId!==null&&(b(sn(t.viewCache_),"We should always have a full cache before handling merges"),b(Mr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=tm(t.processor_,i,e,n,s);return em(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ru(t,r.changes,r.viewCache.eventCache.getNode(),null)}function hm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(Nn(r,o))}),n.isFullyInitialized()&&s.push(mu(n.getNode())),Ru(t,s,n.getNode(),e)}function Ru(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return kg(t.eventGenerator_,e,n,i)}/**
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
 */let li;class dm{constructor(){this.views=new Map}}function fm(t){b(!li,"__referenceConstructor has already been defined"),li=t}function _m(){return b(li,"Reference.ts has not been loaded"),li}function pm(t){return t.views.size===0}function xo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),ha(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ha(o,e,n,s));return r}}function gm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=ii(n,i?s:null),a=!1;l?a=!0:s instanceof M?(l=Ro(n,s),a=!1):(l=M.EMPTY_NODE,a=!1);const c=Ri(new nn(l,a,!1),new nn(s,i,!1));return new lm(e,c)}return o}function mm(t,e,n,s,i,r){const o=gm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),um(o,n),hm(o,n)}function ym(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=kt(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(ua(c,n,s)),ca(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(ua(a,n,s)),ca(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!kt(t)&&r.push(new(_m())(e._repo,e._path)),{removed:r,events:o}}function Nu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function bn(t,e){let n=null;for(const s of t.views.values())n=n||cm(s,e);return n}function Au(t,e){if(e._queryParams.loadsAllData())return Ni(t);{const s=e._queryIdentifier;return t.views.get(s)}}function xu(t,e){return Au(t,e)!=null}function kt(t){return Ni(t)!=null}function Ni(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ai;function Cm(t){b(!ai,"__referenceConstructor has already been defined"),ai=t}function Em(){return b(ai,"Reference.ts has not been loaded"),ai}let vm=1;class da{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=Yg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Du(t,e,n,s,i){return Bg(t.pendingWriteTree_,e,n,s,i),i?bs(t,new tn(yu(),e,n)):[]}function Gt(t,e,n=!1){const s=Ug(t.pendingWriteTree_,e);if(Wg(t.pendingWriteTree_,e)){let r=new re(null);return s.snap!=null?r=r.set(Q(),!0):Se(s.children,o=>{r=r.set(new X(o),!0)}),bs(t,new si(s.path,r,n))}else return[]}function Ai(t,e,n){return bs(t,new tn(Io(),e,n))}function bm(t,e,n){const s=re.fromObject(n);return bs(t,new gs(Io(),e,s))}function wm(t,e){return bs(t,new ps(Io(),e))}function Im(t,e,n){const s=Po(t,n);if(s){const i=Oo(s),r=i.path,o=i.queryId,l=Pe(r,e),a=new ps(To(o),l);return ko(t,r,a)}else return[]}function Wr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||xu(o,e))){const a=ym(o,e,n,s);pm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,g)=>kt(g));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=Rm(f);for(let m=0;m<g.length;++m){const w=g[m],P=w.query,B=ku(t,w);t.listenProvider_.startListening(es(P),ci(t,P),B.hashFn,B.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(es(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(xi(f));t.listenProvider_.stopListening(es(f),g)}))}Nm(t,c)}return l}function Tm(t,e,n,s){const i=Po(t,s);if(i!=null){const r=Oo(i),o=r.path,l=r.queryId,a=Pe(o,e),c=new tn(To(l),a,n);return ko(t,o,c)}else return[]}function Sm(t,e,n,s){const i=Po(t,s);if(i){const r=Oo(i),o=r.path,l=r.queryId,a=Pe(o,e),c=re.fromObject(n),u=new gs(To(l),a,c);return ko(t,o,u)}else return[]}function fa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const m=Pe(f,i);r=r||bn(g,m),o=o||kt(g)});let l=t.syncPointTree_.get(i);l?(o=o||kt(l),r=r||bn(l,Q())):(l=new dm,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=M.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,m)=>{const w=bn(m,Q());w&&(r=r.updateImmediateChild(g,w))}));const c=xu(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=xi(e);b(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Am();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=So(t.pendingWriteTree_,i);let h=mm(l,e,n,u,r,a);if(!c&&!o&&!s){const f=Au(l,e);h=h.concat(xm(t,e,f))}return h}function Do(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Pe(o,e),c=bn(l,a);if(c)return c});return bu(i,e,r,n,!0)}function bs(t,e){return Pu(e,t.syncPointTree_,null,So(t.pendingWriteTree_,Q()))}function Pu(t,e,n,s){if(V(t.path))return Ou(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=bn(i,Q()));let r=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=wu(s,o);r=r.concat(Pu(l,a,c,u))}return i&&(r=r.concat(xo(i,t,s,n))),r}}function Ou(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=bn(i,Q()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=wu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ou(u,l,a,c)))}),i&&(r=r.concat(xo(i,t,s,n))),r}function ku(t,e){const n=e.query,s=ci(t,n);return{hashFn:()=>(am(e)||M.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Im(t,n._path,s):wm(t,n._path);{const r=Ip(i,n);return Wr(t,n,null,r)}}}}function ci(t,e){const n=xi(e);return t.queryToTagMap.get(n)}function xi(t){return t._path.toString()+"$"+t._queryIdentifier}function Po(t,e){return t.tagToQueryMap.get(e)}function Oo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function ko(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=So(t.pendingWriteTree_,e);return xo(s,n,i,null)}function Rm(t){return t.fold((e,n,s)=>{if(n&&kt(n))return[Ni(n)];{let i=[];return n&&(i=Nu(n)),Se(s,(r,o)=>{i=i.concat(o)}),i}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Em())(t._repo,t._path):t}function Nm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=xi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Am(){return vm++}function xm(t,e,n){const s=e._path,i=ci(t,e),r=ku(t,n),o=t.listenProvider_.startListening(es(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!kt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,h)=>{if(!V(c)&&u&&kt(u))return[Ni(u).query];{let f=[];return u&&(f=f.concat(Nu(u).map(g=>g.query))),Se(h,(g,m)=>{f=f.concat(m)}),f}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(es(u),ci(t,u))}}return o}/**
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
 */class Mo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mo(n)}node(){return this.node_}}class Lo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_e(this.path_,e);return new Lo(this.syncTree_,n)}node(){return Do(this.syncTree_,this.path_)}}const Dm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_a=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Pm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Om(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Pm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Om=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},km=function(t,e,n,s){return Fo(e,new Lo(n,t),s)},Mu=function(t,e,n){return Fo(t,new Mo(e),n)};function Fo(t,e,n){const s=t.getPriority().val(),i=_a(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=_a(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ye(l,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(ue,(l,a)=>{const c=Fo(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class Bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Uo(t,e){let n=e instanceof X?e:new X(e),s=t,i=$(n);for(;i!==null;){const r=Tn(s.node.children,i)||{children:{},childCount:0};s=new Bo(i,s,r),n=te(n),i=$(n)}return s}function Fn(t){return t.node.value}function Lu(t,e){t.node.value=e,Hr(t)}function Fu(t){return t.node.childCount>0}function Mm(t){return Fn(t)===void 0&&!Fu(t)}function Di(t,e){Se(t.node.children,(n,s)=>{e(new Bo(n,t,s))})}function Bu(t,e,n,s){n&&!s&&e(t),Di(t,i=>{Bu(i,e,!0,s)}),n&&s&&e(t)}function Lm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ws(t){return new X(t.parent===null?t.name:ws(t.parent)+"/"+t.name)}function Hr(t){t.parent!==null&&Fm(t.parent,t.name,t)}function Fm(t,e,n){const s=Mm(n),i=ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Hr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hr(t))}/**
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
 */const Bm=/[\[\].#$\/\u0000-\u001F\u007F]/,Um=/[\[\].#$\u0000-\u001F\u007F]/,nr=10*1024*1024,Wo=function(t){return typeof t=="string"&&t.length!==0&&!Bm.test(t)},Uu=function(t){return typeof t=="string"&&t.length!==0&&!Um.test(t)},Wm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Uu(t)},Wu=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ti(t)||t&&typeof t=="object"&&ht(t,".sv")},ui=function(t,e,n,s){s&&e===void 0||Pi(Sn(t,"value"),e,n)},Pi=function(t,e,n){const s=n instanceof X?new ig(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Wt(s)+" with contents = "+e.toString());if(Ti(e))throw new Error(t+"contains "+e.toString()+" "+Wt(s));if(typeof e=="string"&&e.length>nr/3&&Ii(e)>nr)throw new Error(t+"contains a string greater than "+nr+" utf8 bytes "+Wt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Se(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wo(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rg(s,o),Pi(t,l,s),og(s)}),i&&r)throw new Error(t+' contains ".value" child '+Wt(s)+" in addition to actual children.")}},Hm=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=hs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Wo(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sg);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&je(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},$m=function(t,e,n,s){if(s&&e===void 0)return;const i=Sn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Se(e,(o,l)=>{const a=new X(o);if(Pi(i,l,_e(n,a)),yo(a)===".priority"&&!Wu(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Hm(i,r)},Vm=function(t,e,n){if(!(n&&e===void 0)){if(Ti(e))throw new Error(Sn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Wu(e))throw new Error(Sn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},Hu=function(t,e,n,s){if(!(s&&n===void 0)&&!Uu(n))throw new Error(Sn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hu(t,e,n,s)},Yt=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wm(n))throw new Error(Sn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ho(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Co(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function $u(t,e,n){Ho(t,n),Vu(t,s=>Co(s,e))}function Et(t,e,n){Ho(t,n),Vu(t,s=>je(s,e)||je(e,s))}function Vu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Km(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Km(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xt&&be("event: "+n.toString()),Mn(s)}}}/**
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
 */const Gm="repo_interrupt",Ym=25;class Qm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ni(),this.transactionQueueTree_=new Bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jm(t,e,n){if(t.stats_=go(t.repoInfo_),t.forceRestClient_||Np())t.server_=new ti(t.repoInfo_,(s,i,r,o)=>{pa(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ga(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new mt(t.repoInfo_,e,(s,i,r,o)=>{pa(t,s,i,r,o)},s=>{ga(t,s)},s=>{Xm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Op(t.repoInfo_,()=>new Pg(t.stats_,t.server_)),t.infoData_=new Rg,t.infoSyncTree_=new da({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ai(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Vo(t,"connected",!1),t.serverSyncTree_=new da({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);Et(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ju(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $o(t){return Dm({timestamp:ju(t)})}function pa(t,e,n,s,i){t.dataUpdateCount++;const r=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=Ys(n,c=>ge(c));o=Sm(t.serverSyncTree_,r,a,i)}else{const a=ge(n);o=Tm(t.serverSyncTree_,r,a,i)}else if(s){const a=Ys(n,c=>ge(c));o=bm(t.serverSyncTree_,r,a)}else{const a=ge(n);o=Ai(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=Oi(t,r)),Et(t.eventQueue_,l,o)}function ga(t,e){Vo(t,"connected",e),e===!1&&ey(t)}function Xm(t,e){Se(e,(n,s)=>{Vo(t,n,s)})}function Vo(t,e,n){const s=new X("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Ai(t.infoSyncTree_,s,i);Et(t.eventQueue_,s,r)}function qu(t){return t.nextWriteId_++}function Zm(t,e,n,s,i){jo(t,"set",{path:e.toString(),value:n,priority:s});const r=$o(t),o=ge(n,s),l=Do(t.serverSyncTree_,e),a=Mu(o,l,r),c=qu(t),u=Du(t.serverSyncTree_,e,a,c,!0);Ho(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const m=f==="ok";m||ke("set at "+e+" failed: "+f);const w=Gt(t.serverSyncTree_,c,!m);Et(t.eventQueue_,e,w),xn(t,i,f,g)});const h=Qu(t,e);Oi(t,h),Et(t.eventQueue_,h,[])}function ey(t){jo(t,"onDisconnectEvents");const e=$o(t),n=ni();kr(t.onDisconnect_,Q(),(i,r)=>{const o=km(i,r,t.serverSyncTree_,e);Ln(n,i,o)});let s=[];kr(n,Q(),(i,r)=>{s=s.concat(Ai(t.serverSyncTree_,i,r));const o=Qu(t,i);Oi(t,o)}),t.onDisconnect_=ni(),Et(t.eventQueue_,Q(),s)}function ty(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Or(t.onDisconnect_,e),xn(t,n,s,i)})}function ma(t,e,n,s){const i=ge(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Ln(t.onDisconnect_,e,i),xn(t,s,r,o)})}function ny(t,e,n,s,i){const r=ge(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,l)=>{o==="ok"&&Ln(t.onDisconnect_,e,r),xn(t,i,o,l)})}function sy(t,e,n,s){if(br(n)){be("onDisconnect().update() called with empty data.  Don't do anything."),xn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Se(n,(o,l)=>{const a=ge(l);Ln(t.onDisconnect_,_e(e,o),a)}),xn(t,s,i,r)})}function iy(t,e,n){let s;$(e._path)===".info"?s=fa(t.infoSyncTree_,e,n):s=fa(t.serverSyncTree_,e,n),$u(t.eventQueue_,e._path,s)}function $r(t,e,n){let s;$(e._path)===".info"?s=Wr(t.infoSyncTree_,e,n):s=Wr(t.serverSyncTree_,e,n),$u(t.eventQueue_,e._path,s)}function ry(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gm)}function jo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function xn(t,e,n,s){e&&Mn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function zu(t,e,n){return Do(t.serverSyncTree_,e,n)||M.EMPTY_NODE}function qo(t,e=t.transactionQueueTree_){if(e||ki(t,e),Fn(e)){const n=Gu(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&oy(t,ws(e),n)}else Fu(e)&&Di(e,n=>{qo(t,n)})}function oy(t,e,n){const s=n.map(c=>c.currentWriteId),i=zu(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Pe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{jo(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Gt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ki(t,Uo(t.transactionQueueTree_,e)),qo(t,t.transactionQueueTree_),Et(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)Mn(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ke("transaction at "+a.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Oi(t,e)}},o)}function Oi(t,e){const n=Ku(t,e),s=ws(n),i=Gu(t,n);return ly(t,i,s),s}function ly(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Pe(n,a.path);let u=!1,h;if(b(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,h=a.abortReason,i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ym)u=!0,h="maxretry",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0));else{const f=zu(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Pi("transaction failed: Data returned ",g,a.path);let m=ge(g);typeof g=="object"&&g!=null&&ht(g,".priority")||(m=m.updatePriority(f.getPriority()));const P=a.currentWriteId,B=$o(t),ae=Mu(m,f,B);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=ae,a.currentWriteId=qu(t),o.splice(o.indexOf(P),1),i=i.concat(Du(t.serverSyncTree_,a.path,ae,a.currentWriteId,a.applyLocally)),i=i.concat(Gt(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(Gt(t.serverSyncTree_,a.currentWriteId,!0))}Et(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}ki(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Mn(s[l]);qo(t,t.transactionQueueTree_)}function Ku(t,e){let n,s=t.transactionQueueTree_;for(n=$(e);n!==null&&Fn(s)===void 0;)s=Uo(s,n),e=te(e),n=$(e);return s}function Gu(t,e){const n=[];return Yu(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Yu(t,e,n){const s=Fn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Di(e,i=>{Yu(t,i,n)})}function ki(t,e){const n=Fn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Lu(e,n.length>0?n:void 0)}Di(e,s=>{ki(t,s)})}function Qu(t,e){const n=ws(Ku(t,e)),s=Uo(t.transactionQueueTree_,e);return Lm(s,i=>{sr(t,i)}),sr(t,s),Bu(s,i=>{sr(t,i)}),n}function sr(t,e){const n=Fn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Gt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Lu(e,void 0):n.length=r+1,Et(t.eventQueue_,ws(e),i);for(let o=0;o<s.length;o++)Mn(s[o])}}/**
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
 */function ay(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const ya=function(t,e){const n=uy(t),s=n.namespace;n.domain==="firebase.com"&&Ct(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Cp();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tu(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new X(n.pathString)}},uy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=ay(t.substring(u,h)));const f=cy(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Ca="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hy=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Ca.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ca.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Ju{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class Xu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Zu{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dy{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new pt;return ty(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Yt("OnDisconnect.remove",this._path);const e=new pt;return ma(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Yt("OnDisconnect.set",this._path),ui("OnDisconnect.set",e,this._path,!1);const n=new pt;return ma(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Yt("OnDisconnect.setWithPriority",this._path),ui("OnDisconnect.setWithPriority",e,this._path,!1),Vm("OnDisconnect.setWithPriority",n,!1);const s=new pt;return ny(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Yt("OnDisconnect.update",this._path),$m("OnDisconnect.update",e,this._path,!1);const n=new pt;return sy(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class zo{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return V(this._path)?null:yo(this._path)}get ref(){return new bt(this._repo,this._path)}get _queryIdentifier(){const e=ta(this._queryParams),n=_o(e);return n==="{}"?"default":n}get _queryObject(){return ta(this._queryParams)}isEqual(e){if(e=ln(e),!(e instanceof zo))return!1;const n=this._repo===e._repo,s=Co(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ng(this._path)}}class bt extends zo{constructor(e,n){super(e,n,new wo,!1)}get parent(){const e=uu(this._path);return e===null?null:new bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),s=rn(this.ref,e);return new ms(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,rn(this.ref,s),ue)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ea(t,e){return t=ln(t),t._checkNotDeleted("ref"),e!==void 0?rn(t._root,e):t._root}function rn(t,e){return t=ln(t),$(t._path)===null?jm("child","path",e,!1):Hu("child","path",e,!1),new bt(t._repo,_e(t._path,e))}function va(t){return t=ln(t),new dy(t._repo,t._path)}function fy(t,e){t=ln(t),Yt("push",t._path),ui("push",e,t._path,!0);const n=ju(t._repo),s=hy(n),i=rn(t,s),r=rn(t,s);let o;return e!=null?o=hi(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ba(t){return Yt("remove",t._path),hi(t,null)}function hi(t,e){t=ln(t),Yt("set",t._path),ui("set",e,t._path,!1);const n=new pt;return Zm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Mi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ju("value",this,new ms(e.snapshotNode,new bt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xu(this,e,n):null}matches(e){return e instanceof Mi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Li{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Xu(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=rn(new bt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ju(e.type,this,new ms(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Li?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function eh(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,h)=>{$r(t._repo,t,l),a(u,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Zu(n,r||void 0),l=e==="value"?new Mi(o):new Li(e,o);return iy(t._repo,t,l),()=>$r(t._repo,t,l)}function _y(t,e,n,s){return eh(t,"value",e,n,s)}function ir(t,e,n,s){return eh(t,"child_added",e,n,s)}function wa(t,e,n){let s=null;const i=n?new Zu(n):null;e==="value"?s=new Mi(i):e&&(s=new Li(e,i)),$r(t._repo,t,s)}fm(bt);Cm(bt);/**
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
 */const py="FIREBASE_DATABASE_EMULATOR_HOST",Vr={};let gy=!1;function my(t,e,n,s){t.repoInfo_=new tu(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function yy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ya(r,i),l=o.repoInfo,a,c;typeof process<"u"&&process.env&&(c=process.env[py]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ya(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new En(En.OWNER):new xp(t.name,t.options,e);qm("Invalid Firebase Database URL",o),V(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ey(l,t,u,new Ap(t.name,n));return new vy(h,t)}function Cy(t,e){const n=Vr[e];(!n||n[t.key]!==t)&&Ct(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ry(t),delete n[t.key]}function Ey(t,e,n,s){let i=Vr[e.name];i||(i={},Vr[e.name]=i);let r=i[t.toURLString()];return r&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qm(t,gy,n,s),i[t.toURLString()]=r,r}class vy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Cy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function Ia(t=np(),e){const n=X_(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Vf("database");s&&by(n,...s)}return n}function by(t,e,n,s={}){t=ln(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Ct("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new En(En.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:qf(s.mockUserToken,t.app.options.projectId);r=new En(o)}my(i,e,n,r)}/**
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
 */function wy(t){_p(tp),Js(new as("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),yn(Bl,Ul,t),yn(Bl,Ul,"esm2017")}mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wy();/*! simple-peer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const Ta=64*1024,Iy=5*1e3,Ty=5*1e3;function Sa(t){const e=new Uint8Array(t);for(let n=0;n<t;n++)e[n]=Math.random()*256|0;return e}function th(){if(typeof globalThis>"u")return null;const t={RTCPeerConnection:globalThis.RTCPeerConnection||globalThis.mozRTCPeerConnection||globalThis.webkitRTCPeerConnection,RTCSessionDescription:globalThis.RTCSessionDescription||globalThis.mozRTCSessionDescription||globalThis.webkitRTCSessionDescription,RTCIceCandidate:globalThis.RTCIceCandidate||globalThis.mozRTCIceCandidate||globalThis.webkitRTCIceCandidate};return t.RTCPeerConnection?t:null}function K(t,e){return Object.defineProperty(t,"code",{value:e,enumerable:!0,configurable:!0}),t}function Ra(t){return t.replace(/a=ice-options:trickle\s\n/g,"")}function Sy(t){console.warn(t)}class on{constructor(e={}){if(this._map=new Map,this._id=Sa(4).toString("hex").slice(0,7),this._doDebug=e.debug,this._debug("new peer %o",e),this.channelName=e.initiator?e.channelName||Sa(20).toString("hex"):null,this.initiator=e.initiator||!1,this.channelConfig=e.channelConfig||on.channelConfig,this.channelNegotiated=this.channelConfig.negotiated,this.config=Object.assign({},on.config,e.config),this.offerOptions=e.offerOptions||{},this.answerOptions=e.answerOptions||{},this.sdpTransform=e.sdpTransform||(n=>n),this.streams=e.streams||(e.stream?[e.stream]:[]),this.trickle=e.trickle!==void 0?e.trickle:!0,this.allowHalfTrickle=e.allowHalfTrickle!==void 0?e.allowHalfTrickle:!1,this.iceCompleteTimeout=e.iceCompleteTimeout||Iy,this.destroyed=!1,this.destroying=!1,this._connected=!1,this.remoteAddress=void 0,this.remoteFamily=void 0,this.remotePort=void 0,this.localAddress=void 0,this.localFamily=void 0,this.localPort=void 0,this._wrtc=e.wrtc&&typeof e.wrtc=="object"?e.wrtc:th(),!this._wrtc)throw K(typeof window>"u"?new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"):new Error("No WebRTC support: Not a supported browser"),"ERR_WEBRTC_SUPPORT");this._pcReady=!1,this._channelReady=!1,this._iceComplete=!1,this._iceCompleteTimer=null,this._channel=null,this._pendingCandidates=[],this._isNegotiating=!1,this._firstNegotiation=!0,this._batchedNegotiation=!1,this._queuedNegotiation=!1,this._sendersAwaitingStable=[],this._senderMap=new Map,this._closingInterval=null,this._remoteTracks=[],this._remoteStreams=[],this._chunk=null,this._cb=null,this._interval=null;try{this._pc=new this._wrtc.RTCPeerConnection(this.config)}catch(n){this.destroy(K(n,"ERR_PC_CONSTRUCTOR"));return}this._isReactNativeWebrtc=typeof this._pc._peerConnectionId=="number",this._pc.oniceconnectionstatechange=()=>{this._onIceStateChange()},this._pc.onicegatheringstatechange=()=>{this._onIceStateChange()},this._pc.onconnectionstatechange=()=>{this._onConnectionStateChange()},this._pc.onsignalingstatechange=()=>{this._onSignalingStateChange()},this._pc.onicecandidate=n=>{this._onIceCandidate(n)},typeof this._pc.peerIdentity=="object"&&this._pc.peerIdentity.catch(n=>{this.destroy(K(n,"ERR_PC_PEER_IDENTITY"))}),this.initiator||this.channelNegotiated?this._setupData({channel:this._pc.createDataChannel(this.channelName,this.channelConfig)}):this._pc.ondatachannel=n=>{this._setupData(n)},this.streams&&this.streams.forEach(n=>{this.addStream(n)}),this._pc.ontrack=n=>{this._onTrack(n)},this._debug("initial negotiation"),this._needsNegotiation()}get bufferSize(){return this._channel&&this._channel.bufferedAmount||0}get connected(){return this._connected&&this._channel.readyState==="open"}address(){return{port:this.localPort,family:this.localFamily,address:this.localAddress}}signal(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot signal after peer is destroyed"),"ERR_DESTROYED");if(typeof e=="string")try{e=JSON.parse(e)}catch{e={}}this._debug("signal()"),e.renegotiate&&this.initiator&&(this._debug("got request to renegotiate"),this._needsNegotiation()),e.transceiverRequest&&this.initiator&&(this._debug("got request for transceiver"),this.addTransceiver(e.transceiverRequest.kind,e.transceiverRequest.init)),e.candidate&&(this._pc.remoteDescription&&this._pc.remoteDescription.type?this._addIceCandidate(e.candidate):this._pendingCandidates.push(e.candidate)),e.sdp&&this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e)).then(()=>{this.destroyed||(this._pendingCandidates.forEach(n=>{this._addIceCandidate(n)}),this._pendingCandidates=[],this._pc.remoteDescription.type==="offer"&&this._createAnswer())}).catch(n=>{this.destroy(K(n,"ERR_SET_REMOTE_DESCRIPTION"))}),!e.sdp&&!e.candidate&&!e.renegotiate&&!e.transceiverRequest&&this.destroy(K(new Error("signal() called with invalid signal data"),"ERR_SIGNALING"))}}_addIceCandidate(e){const n=new this._wrtc.RTCIceCandidate(e);this._pc.addIceCandidate(n).catch(s=>{!n.address||n.address.endsWith(".local")?Sy("Ignoring unsupported ICE candidate."):this.destroy(K(s,"ERR_ADD_ICE_CANDIDATE"))})}send(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot send after peer is destroyed"),"ERR_DESTROYED");this._channel.send(e)}}addTransceiver(e,n){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot addTransceiver after peer is destroyed"),"ERR_DESTROYED");if(this._debug("addTransceiver()"),this.initiator)try{this._pc.addTransceiver(e,n),this._needsNegotiation()}catch(s){this.destroy(K(s,"ERR_ADD_TRANSCEIVER"))}else this.emit("signal",{type:"transceiverRequest",transceiverRequest:{kind:e,init:n}})}}addStream(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot addStream after peer is destroyed"),"ERR_DESTROYED");this._debug("addStream()"),e.getTracks().forEach(n=>{this.addTrack(n,e)})}}addTrack(e,n){if(this.destroying)return;if(this.destroyed)throw K(new Error("cannot addTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("addTrack()");const s=this._senderMap.get(e)||new Map;let i=s.get(n);if(!i)i=this._pc.addTrack(e,n),s.set(n,i),this._senderMap.set(e,s),this._needsNegotiation();else throw i.removed?K(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."),"ERR_SENDER_REMOVED"):K(new Error("Track has already been added to that stream."),"ERR_SENDER_ALREADY_ADDED")}replaceTrack(e,n,s){if(this.destroying)return;if(this.destroyed)throw K(new Error("cannot replaceTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("replaceTrack()");const i=this._senderMap.get(e),r=i?i.get(s):null;if(!r)throw K(new Error("Cannot replace track that was never added."),"ERR_TRACK_NOT_ADDED");n&&this._senderMap.set(n,i),r.replaceTrack!=null?r.replaceTrack(n):this.destroy(K(new Error("replaceTrack is not supported in this browser"),"ERR_UNSUPPORTED_REPLACETRACK"))}removeTrack(e,n){if(this.destroying)return;if(this.destroyed)throw K(new Error("cannot removeTrack after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSender()");const s=this._senderMap.get(e),i=s?s.get(n):null;if(!i)throw K(new Error("Cannot remove track that was never added."),"ERR_TRACK_NOT_ADDED");try{i.removed=!0,this._pc.removeTrack(i)}catch(r){r.name==="NS_ERROR_UNEXPECTED"?this._sendersAwaitingStable.push(i):this.destroy(K(r,"ERR_REMOVE_TRACK"))}this._needsNegotiation()}removeStream(e){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot removeStream after peer is destroyed"),"ERR_DESTROYED");this._debug("removeSenders()"),e.getTracks().forEach(n=>{this.removeTrack(n,e)})}}_needsNegotiation(){this._debug("_needsNegotiation"),!this._batchedNegotiation&&(this._batchedNegotiation=!0,queueMicrotask(()=>{this._batchedNegotiation=!1,this.initiator||!this._firstNegotiation?(this._debug("starting batched negotiation"),this.negotiate()):this._debug("non-initiator initial negotiation request discarded"),this._firstNegotiation=!1}))}negotiate(){if(!this.destroying){if(this.destroyed)throw K(new Error("cannot negotiate after peer is destroyed"),"ERR_DESTROYED");this.initiator?this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("start negotiation"),setTimeout(()=>{this._createOffer()},0)):this._isNegotiating?(this._queuedNegotiation=!0,this._debug("already negotiating, queueing")):(this._debug("requesting negotiation from initiator"),this.emit("signal",{type:"renegotiate",renegotiate:!0})),this._isNegotiating=!0}}destroy(e){this.destroyed||this.destroying||(this.destroying=!0,this._debug("destroying (error: %s)",e&&(e.message||e)),queueMicrotask(()=>{if(this.destroyed=!0,this.destroying=!1,this._debug("destroy (error: %s)",e&&(e.message||e)),this._connected=!1,this._pcReady=!1,this._channelReady=!1,this._remoteTracks=null,this._remoteStreams=null,this._senderMap=null,clearInterval(this._closingInterval),this._closingInterval=null,clearInterval(this._interval),this._interval=null,this._chunk=null,this._cb=null,this._channel){try{this._channel.close()}catch{}this._channel.onmessage=null,this._channel.onopen=null,this._channel.onclose=null,this._channel.onerror=null}if(this._pc){try{this._pc.close()}catch{}this._pc.oniceconnectionstatechange=null,this._pc.onicegatheringstatechange=null,this._pc.onsignalingstatechange=null,this._pc.onicecandidate=null,this._pc.ontrack=null,this._pc.ondatachannel=null}this._pc=null,this._channel=null,e&&this.emit("error",e),this.emit("close")}))}_setupData(e){if(!e.channel)return this.destroy(K(new Error("Data channel event is missing `channel` property"),"ERR_DATA_CHANNEL"));this._channel=e.channel,this._channel.binaryType="arraybuffer",typeof this._channel.bufferedAmountLowThreshold=="number"&&(this._channel.bufferedAmountLowThreshold=Ta),this.channelName=this._channel.label,this._channel.onmessage=s=>{this._onChannelMessage(s)},this._channel.onbufferedamountlow=()=>{this._onChannelBufferedAmountLow()},this._channel.onopen=()=>{this._onChannelOpen()},this._channel.onclose=()=>{this._onChannelClose()},this._channel.onerror=s=>{this.destroy(K(s,"ERR_DATA_CHANNEL"))};let n=!1;this._closingInterval=setInterval(()=>{this._channel&&this._channel.readyState==="closing"?(n&&this._onChannelClose(),n=!0):n=!1},Ty)}_startIceCompleteTimeout(){this.destroyed||this._iceCompleteTimer||(this._debug("started iceComplete timeout"),this._iceCompleteTimer=setTimeout(()=>{this._iceComplete||(this._iceComplete=!0,this._debug("iceComplete timeout completed"),this.emit("iceTimeout"),this.emit("_iceComplete"))},this.iceCompleteTimeout))}_createOffer(){this.destroyed||this._pc.createOffer(this.offerOptions).then(e=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(e.sdp=Ra(e.sdp)),e.sdp=this.sdpTransform(e.sdp);const n=()=>{if(this.destroyed)return;const r=this._pc.localDescription||e;this._debug("signal"),this.emit("signal",{type:r.type,sdp:r.sdp})},s=()=>{this._debug("createOffer success"),!this.destroyed&&(this.trickle||this._iceComplete?n():this.once("_iceComplete",n))},i=r=>{this.destroy(K(r,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(e).then(s).catch(i)}).catch(e=>{this.destroy(K(e,"ERR_CREATE_OFFER"))})}_requestMissingTransceivers(){this._pc.getTransceivers&&this._pc.getTransceivers().forEach(e=>{!e.mid&&e.sender.track&&!e.requested&&(e.requested=!0,this.addTransceiver(e.sender.track.kind))})}_createAnswer(){this.destroyed||this._pc.createAnswer(this.answerOptions).then(e=>{if(this.destroyed)return;!this.trickle&&!this.allowHalfTrickle&&(e.sdp=Ra(e.sdp)),e.sdp=this.sdpTransform(e.sdp);const n=()=>{if(this.destroyed)return;const r=this._pc.localDescription||e;this._debug("signal"),this.emit("signal",{type:r.type,sdp:r.sdp}),this.initiator||this._requestMissingTransceivers()},s=()=>{this.destroyed||(this.trickle||this._iceComplete?n():this.once("_iceComplete",n))},i=r=>{this.destroy(K(r,"ERR_SET_LOCAL_DESCRIPTION"))};this._pc.setLocalDescription(e).then(s).catch(i)}).catch(e=>{this.destroy(K(e,"ERR_CREATE_ANSWER"))})}_onConnectionStateChange(){this.destroyed||this._pc.connectionState==="failed"&&this.destroy(K(new Error("Connection failed."),"ERR_CONNECTION_FAILURE"))}_onIceStateChange(){if(this.destroyed)return;const e=this._pc.iceConnectionState,n=this._pc.iceGatheringState;this._debug("iceStateChange (connection: %s) (gathering: %s)",e,n),this.emit("iceStateChange",e,n),(e==="connected"||e==="completed")&&(this._pcReady=!0,this._maybeReady()),e==="failed"&&this.destroy(K(new Error("Ice connection failed."),"ERR_ICE_CONNECTION_FAILURE")),e==="closed"&&this.destroy(K(new Error("Ice connection closed."),"ERR_ICE_CONNECTION_CLOSED"))}getStats(e){const n=s=>(Object.prototype.toString.call(s.values)==="[object Array]"&&s.values.forEach(i=>{Object.assign(s,i)}),s);this._pc.getStats.length===0||this._isReactNativeWebrtc?this._pc.getStats().then(s=>{const i=[];s.forEach(r=>{i.push(n(r))}),e(null,i)},s=>e(s)):this._pc.getStats.length>0?this._pc.getStats(s=>{if(this.destroyed)return;const i=[];s.result().forEach(r=>{const o={};r.names().forEach(l=>{o[l]=r.stat(l)}),o.id=r.id,o.type=r.type,o.timestamp=r.timestamp,i.push(n(o))}),e(null,i)},s=>e(s)):e(null,[])}_maybeReady(){if(this._debug("maybeReady pc %s channel %s",this._pcReady,this._channelReady),this._connected||this._connecting||!this._pcReady||!this._channelReady)return;this._connecting=!0;const e=()=>{this.destroyed||this.getStats((n,s)=>{if(this.destroyed)return;n&&(s=[]);const i={},r={},o={};let l=!1;s.forEach(c=>{(c.type==="remotecandidate"||c.type==="remote-candidate")&&(i[c.id]=c),(c.type==="localcandidate"||c.type==="local-candidate")&&(r[c.id]=c),(c.type==="candidatepair"||c.type==="candidate-pair")&&(o[c.id]=c)});const a=c=>{l=!0;let u=r[c.localCandidateId];u&&(u.ip||u.address)?(this.localAddress=u.ip||u.address,this.localPort=Number(u.port)):u&&u.ipAddress?(this.localAddress=u.ipAddress,this.localPort=Number(u.portNumber)):typeof c.googLocalAddress=="string"&&(u=c.googLocalAddress.split(":"),this.localAddress=u[0],this.localPort=Number(u[1])),this.localAddress&&(this.localFamily=this.localAddress.includes(":")?"IPv6":"IPv4");let h=i[c.remoteCandidateId];h&&(h.ip||h.address)?(this.remoteAddress=h.ip||h.address,this.remotePort=Number(h.port)):h&&h.ipAddress?(this.remoteAddress=h.ipAddress,this.remotePort=Number(h.portNumber)):typeof c.googRemoteAddress=="string"&&(h=c.googRemoteAddress.split(":"),this.remoteAddress=h[0],this.remotePort=Number(h[1])),this.remoteAddress&&(this.remoteFamily=this.remoteAddress.includes(":")?"IPv6":"IPv4"),this._debug("connect local: %s:%s remote: %s:%s",this.localAddress,this.localPort,this.remoteAddress,this.remotePort)};if(s.forEach(c=>{c.type==="transport"&&c.selectedCandidatePairId&&a(o[c.selectedCandidatePairId]),(c.type==="googCandidatePair"&&c.googActiveConnection==="true"||(c.type==="candidatepair"||c.type==="candidate-pair")&&c.selected)&&a(c)}),!l&&(!Object.keys(o).length||Object.keys(r).length)){setTimeout(e,100);return}else this._connecting=!1,this._connected=!0;if(this._chunk){try{this.send(this._chunk)}catch(u){return this.destroy(K(u,"ERR_DATA_CHANNEL"))}this._chunk=null,this._debug('sent chunk from "write before connect"');const c=this._cb;this._cb=null,c(null)}typeof this._channel.bufferedAmountLowThreshold!="number"&&(this._interval=setInterval(()=>this._onInterval(),150),this._interval.unref&&this._interval.unref()),this._debug("connect"),this.emit("connect")})};e()}_onInterval(){!this._cb||!this._channel||this._channel.bufferedAmount>Ta||this._onChannelBufferedAmountLow()}_onSignalingStateChange(){this.destroyed||(this._pc.signalingState==="stable"&&(this._isNegotiating=!1,this._debug("flushing sender queue",this._sendersAwaitingStable),this._sendersAwaitingStable.forEach(e=>{this._pc.removeTrack(e),this._queuedNegotiation=!0}),this._sendersAwaitingStable=[],this._queuedNegotiation?(this._debug("flushing negotiation queue"),this._queuedNegotiation=!1,this._needsNegotiation()):(this._debug("negotiated"),this.emit("negotiated"))),this._debug("signalingStateChange %s",this._pc.signalingState),this.emit("signalingStateChange",this._pc.signalingState))}_onIceCandidate(e){this.destroyed||(e.candidate&&this.trickle?this.emit("signal",{type:"candidate",candidate:{candidate:e.candidate.candidate,sdpMLineIndex:e.candidate.sdpMLineIndex,sdpMid:e.candidate.sdpMid}}):!e.candidate&&!this._iceComplete&&(this._iceComplete=!0,this.emit("_iceComplete")),e.candidate&&this._startIceCompleteTimeout())}_onChannelMessage(e){if(this.destroyed)return;let n=e.data;n instanceof ArrayBuffer&&(n=new Uint8Array(n)),this.emit("data",n)}_onChannelBufferedAmountLow(){if(this.destroyed||!this._cb)return;this._debug("ending backpressure: bufferedAmount %d",this._channel.bufferedAmount);const e=this._cb;this._cb=null,e(null)}_onChannelOpen(){this._connected||this.destroyed||(this._debug("on channel open"),this._channelReady=!0,this._maybeReady())}_onChannelClose(){this.destroyed||(this._debug("on channel close"),this.destroy())}_onTrack(e){this.destroyed||e.streams.forEach(n=>{this._debug("on track"),this.emit("track",e.track,n),this._remoteTracks.push({track:e.track,stream:n}),!this._remoteStreams.some(s=>s.id===n.id)&&(this._remoteStreams.push(n),queueMicrotask(()=>{this._debug("on stream"),this.emit("stream",n)}))})}_debug(...e){this._doDebug&&(e[0]="["+this._id+"] "+e[0],console.log(...e))}on(e,n){const s=this._map;s.has(e)||s.set(e,new Set),s.get(e).add(n)}off(e,n){const s=this._map,i=s.get(e);i&&(i.delete(n),i.size===0&&s.delete(e))}once(e,n){const s=(...i)=>{this.off(e,s),n(...i)};this.on(e,s)}emit(e,...n){const s=this._map;if(s.has(e))for(const i of s.get(e))try{i(...n)}catch(r){console.error(r)}}}on.WEBRTC_SUPPORT=!!th();on.config={iceServers:[{urls:["stun:stun.l.google.com:19302","stun:global.stun.twilio.com:3478"]}],sdpSemantics:"unified-plan"};on.channelConfig={};const Na="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Ry=(t,e,n)=>{const s=new on({initiator:t,trickle:e,config:n}),i=r=>s.__earlyDataBuffer.push(r);return s.on(Ge.data,i),s.__earlyDataBuffer=[],s.__drainEarlyData=r=>{s.off(Ge.data,i),s.__earlyDataBuffer.forEach(r),delete s.__earlyDataBuffer,delete s.__drainEarlyData},s},Ny=t=>new Array(t).fill().map(()=>Na[Math.floor(Math.random()*Na.length)]).join(""),Ay=(t,e)=>(n,s)=>{if(t[s])throw $e(`already joined room ${s}`);if(!n)throw $e("requires a config map as the first argument");if(!n.appId&&!n.firebaseApp)throw $e("config map is missing appId field");if(!s)throw $e("namespace argument required");return e(n,s)},Fi="Trystero",rr=Ny(20),{keys:Aa,values:Jy,entries:xy,fromEntries:Dy}=Object,Ht=()=>{},$e=t=>new Error(`${Fi}: ${t}`),ts=t=>new TextEncoder().encode(t),qn=t=>new TextDecoder().decode(t),Ge=Dy(["close","connect","data","error","signal","stream","track"].map(t=>[t,t])),Py=t=>{const e=new Uint8Array(t.reduce((n,s)=>n+s.byteLength,0));return t.reduce((n,s)=>(e.set(s,n),n+s.byteLength),0),e},Oy=Object.getPrototypeOf(Uint8Array),Ws=12,nh=0,Hs=nh+Ws,$s=Hs+1,zn=$s+1,Kn=zn+1,Ft=16*2**10-Kn,Ps=255,xa="bufferedamountlow",ky=(t,e)=>{const n={},s={},i={},r={},o={},l={},a=(v,N)=>(v?Array.isArray(v)?v:[v]:Aa(n)).flatMap(H=>{const k=n[H];return k?N(H,k):(console.warn(`${Fi}: no peer with id ${H} found`),[])}),c=v=>{n[v]&&(delete n[v],delete i[v],delete r[v],ze(v))},u=v=>{if(!v)throw $e("action type argument is required");const N=ts(v);if(N.byteLength>Ws)throw $e(`action type string "${v}" (${N.byteLength}b) exceeds byte limit (${Ws}). Hint: choose a shorter name.`);const H=new Uint8Array(Ws);H.set(N);const k=qn(H);if(s[k])throw $e(`action '${v}' already registered`);let le=0;return s[k]={onComplete:Ht,onProgress:Ht},[async(ie,fe,q,Y)=>{if(q&&typeof q!="object")throw $e("action meta argument must be an object");if(ie===void 0)throw $e("action data cannot be undefined");const We=typeof ie!="string",ft=ie instanceof Blob,Me=ft||ie instanceof ArrayBuffer||ie instanceof Oy;if(q&&!Me)throw $e("action meta argument can only be used with binary data");const ce=Me?new Uint8Array(ft?await ie.arrayBuffer():ie):ts(We?JSON.stringify(ie):ie),wt=q?ts(JSON.stringify(q)):null,nt=Math.ceil(ce.byteLength/Ft)+(q?1:0),Bi=new Array(nt).fill().map((Le,Re)=>{const st=Re===nt-1,xe=q&&Re===0,Fe=new Uint8Array(Kn+(xe?wt.byteLength:st?ce.byteLength-Ft*(nt-(q?2:1)):Ft));return Fe.set(H),Fe.set([le],Hs),Fe.set([st|xe<<1|Me<<2|We<<3],$s),Fe.set([Math.round((Re+1)/nt*Ps)],zn),Fe.set(q?xe?wt:ce.subarray((Re-1)*Ft,Re*Ft):ce.subarray(Re*Ft,(Re+1)*Ft),Kn),Fe});return le=le+1&Ps,Promise.all(a(fe,async(Le,Re)=>{const st=Re._channel;let xe=0;for(;xe<nt;){const Fe=Bi[xe];if(st.bufferedAmount>st.bufferedAmountLowThreshold&&await new Promise(Bn=>{const d=()=>{st.removeEventListener(xa,d),Bn()};st.addEventListener(xa,d)}),!n[Le])break;Re.send(Fe),xe++,Y&&Y(Fe[zn]/Ps,Le,q)}}))},ie=>s[k]={...s[k],onComplete:ie},ie=>s[k]={...s[k],onProgress:ie}]},h=(v,N)=>{const H=new Uint8Array(N),k=qn(H.subarray(nh,Hs)),[le]=H.subarray(Hs,$s),[ie]=H.subarray($s,zn),[fe]=H.subarray(zn,Kn),q=H.subarray(Kn),Y=!!(ie&1),We=!!(ie&1<<1),ft=!!(ie&1<<2),Me=!!(ie&1<<3);if(!s[k])throw $e(`received message with unregistered type (${k})`);i[v]||(i[v]={}),i[v][k]||(i[v][k]={});let ce=i[v][k][le];if(ce||(ce=i[v][k][le]={chunks:[]}),We?ce.meta=JSON.parse(qn(q)):ce.chunks.push(q),s[k].onProgress(fe/Ps,v,ce.meta),!Y)return;const wt=Py(ce.chunks);if(ft)s[k].onComplete(wt,v,ce.meta);else{const nt=qn(wt);s[k].onComplete(Me?JSON.parse(nt):nt,v)}delete i[v][k][le]},[f,g]=u("__91n6__"),[m,w]=u("__90n6__"),[P,B]=u("__516n4L__"),[ae,O]=u("__57r34m__"),[ee,me]=u("__7r4ck__");let dt=Ht,ze=Ht,W=Ht,de=Ht;return t((v,N)=>{if(n[N])return;const H=h.bind(null,N);n[N]=v,v.on(Ge.signal,k=>P(k,N)),v.on(Ge.close,()=>c(N)),v.on(Ge.data,H),v.on(Ge.stream,k=>{W(k,N,o[N]),delete o[N]}),v.on(Ge.track,(k,le)=>{de(k,le,N,l[N]),delete l[N]}),v.on(Ge.error,k=>{k.code!=="ERR_DATA_CHANNEL"&&console.error(k)}),dt(N),v.__drainEarlyData(H)}),g((v,N)=>m(null,N)),w((v,N)=>{r[N]&&(r[N](),delete r[N])}),B((v,N)=>{n[N]&&n[N].signal(v)}),O((v,N)=>o[N]=v),me((v,N)=>l[N]=v),{makeAction:u,ping:async v=>{if(!v)throw $e("ping() must be called with target peer ID");const N=Date.now();return f(null,v),await new Promise(H=>r[v]=H),Date.now()-N},leave:()=>{xy(n).forEach(([v,N])=>{N.destroy(),delete n[v]}),e()},getPeers:()=>Aa(n),addStream:(v,N,H)=>a(N,async(k,le)=>{H&&await ae(H,k),le.addStream(v)}),removeStream:(v,N)=>a(N,(H,k)=>k.removeStream(v)),addTrack:(v,N,H,k)=>a(H,async(le,ie)=>{k&&await ee(k,le),ie.addTrack(v,N)}),removeTrack:(v,N,H)=>a(H,(k,le)=>le.removeTrack(v,N)),replaceTrack:(v,N,H,k,le)=>a(k,async(ie,fe)=>{le&&await ee(le,ie),fe.replaceTrack(v,N,H)}),onPeerJoin:v=>dt=v,onPeerLeave:v=>ze=v,onPeerStream:v=>W=v,onPeerTrack:v=>de=v}},Ko="AES-CBC",My=t=>window.btoa(String.fromCharCode.apply(null,new Uint8Array(t))),Ly=t=>{const e=window.atob(t);return new Uint8Array(e.length).map((n,s)=>e.charCodeAt(s)).buffer},Fy=async(t,e)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},ts(`${t}:${e}`)),{name:Ko},!1,["encrypt","decrypt"]),By=async(t,e)=>{const n=crypto.getRandomValues(new Uint8Array(16));return JSON.stringify({c:My(await crypto.subtle.encrypt({name:Ko,iv:n},await t,ts(e))),iv:[...n]})},Uy=async(t,e)=>{const{c:n,iv:s}=JSON.parse(e);return qn(await crypto.subtle.decrypt({name:Ko,iv:new Uint8Array(s)},await t,Ly(n)))},Da="_",Wy=`__${Fi.toLowerCase()}__`,or={},Os={},Pa=(...t)=>t.join("/"),Hy=t=>t.startsWith("https://")?t:`https://${t}.firebaseio.com`,$y=t=>{if(t.firebaseApp){const n=t.firebaseApp.options.databaseURL;return Os[n]||(Os[n]=Ia(t.firebaseApp))}const e=Hy(t.appId);return Os[e]||(Os[e]=Ia(Bc({databaseURL:e})))},Vy=Ay(or,(t,e)=>{const n=$y(t),s={},i={},r={},o=t.rootPath||Wy,l=Ea(n,Pa(o,e)),a=rn(l,rr),c=t.password&&Fy(t.password,e),u=[],h=(m,w)=>{if(s[m]&&!s[m].destroyed)return s[m];const P=Ry(w,!0,t.rtcConfig);return P.once(Ge.connect,()=>{g(P,m),r[m]=!0}),P.on(Ge.signal,async B=>{if(r[m])return;const ae=JSON.stringify(B),O=fy(Ea(n,Pa(o,e,m,rr)));va(O).remove(),hi(O,c?await By(c,ae):ae)}),P.once(Ge.close,()=>{delete s[m],delete i[m],delete r[m]}),s[m]=P,P};let f=!1,g=Ht;return or[e]=!0,hi(a,{[Da]:!0}),va(a).remove(),ir(a,m=>{const w=m.key;w===Da||r[w]||u.push(ir(m.ref,async P=>{if(w in i||(i[w]={}),P.key in i[w])return;i[w][P.key]=!0;let B;try{B=JSON.parse(c?await Uy(c,P.val()):P.val())}catch{console.error(`${Fi}: received malformed SDP JSON`);return}h(w,!1).signal(B),ba(P.ref)}))}),_y(l,()=>f=!0,{onlyOnce:!0}),ir(l,({key:m})=>{!f||m===rr||h(m,!0)}),ky(m=>g=m,()=>{wa(a),ba(a),wa(l),u.forEach(m=>m()),delete or[e]})}),jy={name:"GameAdivinhe",data(){return{numeroAdivinha:0,chuteNumero:0,chuteAcerto:0,friendID:"",pontos:0,pontosFriend:0,sendDrink:void 0,sendAcerto:void 0,sendPontos:void 0,sendPontosFriend:void 0}},methods:{makeDrink(){this.sendDrink({drink:"negroni",withIce:!0},this.friendID)},makeAcerto(){if(!(this.numeroAdivinha<=200&&this.numeroAdivinha>=0)){alert("APENAS NUMEROS DE 0 A 200!");return}this.sendAcerto({acerto:this.numeroAdivinha},this.friendID),alert("NUMERO ENVIADO!")},adivinhar(){if(console.log("TENTANDO ADIVINHAR NUMERO!"),this.chuteNumero==this.chuteAcerto)this.pontos=this.pontos+1,this.sendPontosFriend({pontosFriend:this.pontos},this.friendID),this.chuteAcerto=0,alert("PARABÉNS VOCÊ ACERTOU!!");else{this.pontosFriend=this.pontosFriend+1,this.sendPontos({pontos:this.pontosFriend},this.friendID);const t=this.chuteAcerto>this.chuteNumero?"O NUMERO É MAIOR":"O NUMERO É MENOR";alert("NÃO FOI DESSA VEZ. "+t)}}},created(){console.log("COMPONENTE MONTADO");const e=Vy({appId:"tristehero-default-rtdb"},"sala_01");e.onPeerJoin(u=>{console.log(`${u} joined`),this.friendID=u}),e.onPeerLeave(u=>console.log(`${u} left`));const[n,s]=e.makeAction("drink");this.sendDrink=n;const[i,r]=e.makeAction("acerto");this.sendAcerto=i;const[o,l]=e.makeAction("pontos");this.sendPontos=o;const[a,c]=e.makeAction("pontosFriend");this.sendPontosFriend=a,r((u,h)=>{console.log(`got a number ${u.acerto} from ${h}`),this.chuteAcerto=u.acerto}),l((u,h)=>{console.log(`got a number ${u.pontos} from ${h}`),this.pontos=u.pontos,console.log("gdsgfokdsok"),console.log(u)}),c((u,h)=>{console.log(`got a number ${u.pontosFriend} from ${h}`),this.pontosFriend=u.pontosFriend}),s((u,h)=>console.log(`got a ${u.drink} with${u.withIce?"":"out"} ice from ${h}`))}};const qy=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},zy=t=>(sd("data-v-0f24dd36"),t=t(),id(),t),Ky=zy(()=>zt("h1",null,"GAME PSIQUS ADIVINHER",-1));function Gy(t,e,n,s,i,r){return Qn(),Bs("div",null,[Ky,i.chuteAcerto?ml("",!0):cl((Qn(),Bs("input",{key:0,type:"number",min:"0",max:"100",placeholder:"digite um numero","onUpdate:modelValue":e[0]||(e[0]=o=>i.numeroAdivinha=o)},null,512)),[[Nl,i.numeroAdivinha]]),i.chuteAcerto?ml("",!0):(Qn(),Bs("button",{key:1,onClick:e[1]||(e[1]=(...o)=>r.makeAcerto&&r.makeAcerto(...o))},"ENVIAR NUMERO P/ ADIVINHAR")),cl(zt("input",{type:"number",min:"0",max:"100","onUpdate:modelValue":e[2]||(e[2]=o=>i.chuteNumero=o),placeholder:"Adivinhe o numero chutado:"},null,512),[[Nl,i.chuteNumero]]),zt("button",{onClick:e[3]||(e[3]=(...o)=>r.adivinhar&&r.adivinhar(...o))},"ADIVINHAR"),zt("p",null,"MEUS PONTOS: "+Jo(i.pontos),1),zt("p",null,"PONTOS DO INIMIGO: "+Jo(i.pontosFriend),1)])}const Yy=qy(jy,[["render",Gy],["__scopeId","data-v-0f24dd36"]]),Qy=md({__name:"App",setup(t){return(e,n)=>(Qn(),Bs("main",null,[ut(Yy)]))}});Of(Qy).mount("#app");
