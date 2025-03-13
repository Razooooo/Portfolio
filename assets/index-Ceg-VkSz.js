const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProjectsView-C1o7Ja3Y.js","assets/ProjectsView-B2TzRv6-.css","assets/VeilleView-RbYlqDM3.js","assets/VeilleView-BhroJwxZ.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Hl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},Ms=[],Ln=()=>{},Xd=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Vl=n=>n.startsWith("onUpdate:"),bt=Object.assign,kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},qd=Object.prototype.hasOwnProperty,rt=(n,e)=>qd.call(n,e),ze=Array.isArray,Ss=n=>Mo(n)==="[object Map]",Pf=n=>Mo(n)==="[object Set]",ke=n=>typeof n=="function",vt=n=>typeof n=="string",Si=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Df=n=>(dt(n)||ke(n))&&ke(n.then)&&ke(n.catch),Lf=Object.prototype.toString,Mo=n=>Lf.call(n),Yd=n=>Mo(n).slice(8,-1),If=n=>Mo(n)==="[object Object]",Gl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zs=Hl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},$d=/-(\w)/g,hn=So(n=>n.replace($d,(e,t)=>t?t.toUpperCase():"")),jd=/\B([A-Z])/g,Ji=So(n=>n.replace(jd,"-$1").toLowerCase()),Eo=So(n=>n.charAt(0).toUpperCase()+n.slice(1)),ko=So(n=>n?`on${Eo(n)}`:""),mi=(n,e)=>!Object.is(n,e),Go=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Uf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Kd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Zd=n=>{const e=vt(n)?Number(n):NaN;return isNaN(e)?n:e};let wc;const yo=()=>wc||(wc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function To(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=vt(i)?tp(i):To(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(vt(n)||dt(n))return n}const Jd=/;(?![^(]*\))/g,Qd=/:([^]+)/,ep=/\/\*[^]*?\*\//g;function tp(n){const e={};return n.replace(ep,"").split(Jd).forEach(t=>{if(t){const i=t.split(Qd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function cn(n){let e="";if(vt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=cn(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const np="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ip=Hl(np);function Nf(n){return!!n||n===""}const Ff=n=>!!(n&&n.__v_isRef===!0),kt=n=>vt(n)?n:n==null?"":ze(n)||dt(n)&&(n.toString===Lf||!ke(n.toString))?Ff(n)?kt(n.value):JSON.stringify(n,Of,2):String(n),Of=(n,e)=>Ff(e)?Of(n,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Wo(i,r)+" =>"]=s,t),{})}:Pf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Wo(t))}:Si(e)?Wo(e):dt(e)&&!ze(e)&&!If(e)?String(e):e,Wo=(n,e="")=>{var t;return Si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Bf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sp(n){return new Bf(n)}function rp(){return Kt}let ut;const Xo=new WeakSet;class zf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xo.has(this)&&(Xo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rc(this),kf(this);const e=ut,t=Sn;ut=this,Sn=!0;try{return this.fn()}finally{Gf(this),ut=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ql(e);this.deps=this.depsTail=void 0,Rc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oa(this)&&this.run()}get dirty(){return Oa(this)}}let Hf=0,Js,Qs;function Vf(n,e=!1){if(n.flags|=8,e){n.next=Qs,Qs=n;return}n.next=Js,Js=n}function Wl(){Hf++}function Xl(){if(--Hf>0)return;if(Qs){let e=Qs;for(Qs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Js;){let e=Js;for(Js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function kf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ql(i),op(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Oa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Wf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===or))return;n.globalVersion=or;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Oa(n)){n.flags&=-3;return}const t=ut,i=Sn;ut=n,Sn=!0;try{kf(n);const s=n.fn(n._value);(e.version===0||mi(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ut=t,Sn=i,Gf(n),n.flags&=-3}}function ql(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ql(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function op(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const Xf=[];function Ei(){Xf.push(Sn),Sn=!1}function yi(){const n=Xf.pop();Sn=n===void 0?!0:n}function Rc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let or=0;class ap{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ut||!Sn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new ap(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,qf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,or++,this.notify(e)}notify(e){Wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Xl()}}}function qf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)qf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ba=new WeakMap,Xi=Symbol(""),za=Symbol(""),ar=Symbol("");function Dt(n,e,t){if(Sn&&ut){let i=Ba.get(n);i||Ba.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Yl),s.map=i,s.key=t),s.track()}}function Yn(n,e,t,i,s,r){const o=Ba.get(n);if(!o){or++;return}const a=l=>{l&&l.trigger()};if(Wl(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&Gl(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ar||!Si(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ar)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Xi)),Ss(n)&&a(o.get(za)));break;case"delete":l||(a(o.get(Xi)),Ss(n)&&a(o.get(za)));break;case"set":Ss(n)&&a(o.get(Xi));break}}Xl()}function ts(n){const e=et(n);return e===n?e:(Dt(e,"iterate",ar),fn(n)?e:e.map(Lt))}function bo(n){return Dt(n=et(n),"iterate",ar),n}const lp={__proto__:null,[Symbol.iterator](){return qo(this,Symbol.iterator,Lt)},concat(...n){return ts(this).concat(...n.map(e=>ze(e)?ts(e):e))},entries(){return qo(this,"entries",n=>(n[1]=Lt(n[1]),n))},every(n,e){return Fn(this,"every",n,e,void 0,arguments)},filter(n,e){return Fn(this,"filter",n,e,t=>t.map(Lt),arguments)},find(n,e){return Fn(this,"find",n,e,Lt,arguments)},findIndex(n,e){return Fn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fn(this,"findLast",n,e,Lt,arguments)},findLastIndex(n,e){return Fn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Yo(this,"includes",n)},indexOf(...n){return Yo(this,"indexOf",n)},join(n){return ts(this).join(n)},lastIndexOf(...n){return Yo(this,"lastIndexOf",n)},map(n,e){return Fn(this,"map",n,e,void 0,arguments)},pop(){return Hs(this,"pop")},push(...n){return Hs(this,"push",n)},reduce(n,...e){return Cc(this,"reduce",n,e)},reduceRight(n,...e){return Cc(this,"reduceRight",n,e)},shift(){return Hs(this,"shift")},some(n,e){return Fn(this,"some",n,e,void 0,arguments)},splice(...n){return Hs(this,"splice",n)},toReversed(){return ts(this).toReversed()},toSorted(n){return ts(this).toSorted(n)},toSpliced(...n){return ts(this).toSpliced(...n)},unshift(...n){return Hs(this,"unshift",n)},values(){return qo(this,"values",Lt)}};function qo(n,e,t){const i=bo(n),s=i[e]();return i!==n&&!fn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const cp=Array.prototype;function Fn(n,e,t,i,s,r){const o=bo(n),a=o!==n&&!fn(n),l=o[e];if(l!==cp[e]){const f=l.apply(n,r);return a?Lt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Lt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Cc(n,e,t,i){const s=bo(n);let r=t;return s!==n&&(fn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Lt(a),l,n)}),s[e](r,...i)}function Yo(n,e,t){const i=et(n);Dt(i,"iterate",ar);const s=i[e](...t);return(s===-1||s===!1)&&Kl(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function Hs(n,e,t=[]){Ei(),Wl();const i=et(n)[e].apply(n,t);return Xl(),yi(),i}const up=Hl("__proto__,__v_isRef,__isVue"),Yf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Si));function fp(n){Si(n)||(n=String(n));const e=et(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class $f{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Sp:Jf:r?Zf:Kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){let l;if(o&&(l=lp[t]))return l;if(t==="hasOwnProperty")return fp}const a=Reflect.get(e,t,It(e)?e:i);return(Si(t)?Yf.has(t):up(t))||(s||Dt(e,"get",t),r)?a:It(a)?o&&Gl(t)?a:a.value:dt(a)?s?eh(a):Ao(a):a}}class jf extends $f{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Yi(r);if(!fn(i)&&!Yi(i)&&(r=et(r),i=et(i)),!ze(e)&&It(r)&&!It(i))return l?!1:(r.value=i,!0)}const o=ze(e)&&Gl(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,It(e)?e:s);return e===et(s)&&(o?mi(i,r)&&Yn(e,"set",t,i):Yn(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Yn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Si(t)||!Yf.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",ze(e)?"length":Xi),Reflect.ownKeys(e)}}class hp extends $f{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const dp=new jf,pp=new hp,mp=new jf(!0);const Ha=n=>n,Ar=n=>Reflect.getPrototypeOf(n);function gp(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=Ss(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ha:e?Va:Lt;return!e&&Dt(r,"iterate",l?za:Xi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function wr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function _p(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(mi(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:l}=Ar(o),c=e?Ha:n?Va:Lt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Dt(et(s),"iterate",Xi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(mi(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?Ha:n?Va:Lt;return!n&&Dt(l,"iterate",Xi),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return bt(t,n?{add:wr("add"),set:wr("set"),delete:wr("delete"),clear:wr("clear")}:{add(s){!e&&!fn(s)&&!Yi(s)&&(s=et(s));const r=et(this);return Ar(r).has.call(r,s)||(r.add(s),Yn(r,"add",s,s)),this},set(s,r){!e&&!fn(r)&&!Yi(r)&&(r=et(r));const o=et(this),{has:a,get:l}=Ar(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?mi(r,u)&&Yn(o,"set",s,r):Yn(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=Ar(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Yn(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&Yn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=gp(s,n,e)}),t}function $l(n,e){const t=_p(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(rt(t,s)&&s in i?t:i,s,r)}const vp={get:$l(!1,!1)},xp={get:$l(!1,!0)},Mp={get:$l(!0,!1)};const Kf=new WeakMap,Zf=new WeakMap,Jf=new WeakMap,Sp=new WeakMap;function Ep(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yp(n){return n.__v_skip||!Object.isExtensible(n)?0:Ep(Yd(n))}function Ao(n){return Yi(n)?n:jl(n,!1,dp,vp,Kf)}function Qf(n){return jl(n,!1,mp,xp,Zf)}function eh(n){return jl(n,!0,pp,Mp,Jf)}function jl(n,e,t,i,s){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=yp(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Es(n){return Yi(n)?Es(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function th(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&Uf(n,"__v_skip",!0),n}const Lt=n=>dt(n)?Ao(n):n,Va=n=>dt(n)?eh(n):n;function It(n){return n?n.__v_isRef===!0:!1}function Bt(n){return nh(n,!1)}function Tp(n){return nh(n,!0)}function nh(n,e){return It(n)?n:new bp(n,e)}class bp{constructor(e,t){this.dep=new Yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||fn(e)||Yi(e);e=i?e:et(e),mi(e,t)&&(this._rawValue=e,this._value=i?e:Lt(e),this.dep.trigger())}}function Qt(n){return It(n)?n.value:n}const Ap={get:(n,e,t)=>e==="__v_raw"?n:Qt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return It(s)&&!It(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function ih(n){return Es(n)?n:new Proxy(n,Ap)}class wp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=or-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return Vf(this,!0),!0}get value(){const e=this.dep.track();return Wf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rp(n,e,t=!1){let i,s;return ke(n)?i=n:(i=n.get,s=n.set),new wp(i,s,t)}const Rr={},ao=new WeakMap;let Fi;function Cp(n,e=!1,t=Fi){if(t){let i=ao.get(t);i||ao.set(t,i=[]),i.push(n)}}function Pp(n,e,t=ft){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=g=>s?g:fn(g)||s===!1||s===0?di(g,1):di(g);let u,f,h,p,_=!1,v=!1;if(It(n)?(f=()=>n.value,_=fn(n)):Es(n)?(f=()=>c(n),_=!0):ze(n)?(v=!0,_=n.some(g=>Es(g)||fn(g)),f=()=>n.map(g=>{if(It(g))return g.value;if(Es(g))return c(g);if(ke(g))return l?l(g,2):g()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ei();try{h()}finally{yi()}}const g=Fi;Fi=u;try{return l?l(n,3,[p]):n(p)}finally{Fi=g}}:f=Ln,e&&s){const g=f,L=s===!0?1/0:s;f=()=>di(g(),L)}const m=rp(),d=()=>{u.stop(),m&&m.active&&kl(m.effects,u)};if(r&&e){const g=e;e=(...L)=>{g(...L),d()}}let b=v?new Array(n.length).fill(Rr):Rr;const S=g=>{if(!(!(u.flags&1)||!u.dirty&&!g))if(e){const L=u.run();if(s||_||(v?L.some((w,R)=>mi(w,b[R])):mi(L,b))){h&&h();const w=Fi;Fi=u;try{const R=[L,b===Rr?void 0:v&&b[0]===Rr?[]:b,p];l?l(e,3,R):e(...R),b=L}finally{Fi=w}}}else u.run()};return a&&a(S),u=new zf(f),u.scheduler=o?()=>o(S,!1):S,p=g=>Cp(g,!1,u),h=u.onStop=()=>{const g=ao.get(u);if(g){if(l)l(g,4);else for(const L of g)L();ao.delete(u)}},e?i?S(!0):b=u.run():o?o(S.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function di(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,It(n))di(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)di(n[i],e,t);else if(Pf(n)||Ss(n))n.forEach(i=>{di(i,e,t)});else if(If(n)){for(const i in n)di(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&di(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _r(n,e,t,i){try{return i?n(...i):n()}catch(s){wo(s,e,t)}}function Tn(n,e,t,i){if(ke(n)){const s=_r(n,e,t,i);return s&&Df(s)&&s.catch(r=>{wo(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Tn(n[r],e,t,i));return s}}function wo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Ei(),_r(r,null,10,[n,l,c]),yi();return}}Dp(n,t,s,i,o)}function Dp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const zt=[];let wn=-1;const ys=[];let ci=null,gs=0;const sh=Promise.resolve();let lo=null;function Zl(n){const e=lo||sh;return n?e.then(this?n.bind(this):n):e}function Lp(n){let e=wn+1,t=zt.length;for(;e<t;){const i=e+t>>>1,s=zt[i],r=lr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Jl(n){if(!(n.flags&1)){const e=lr(n),t=zt[zt.length-1];!t||!(n.flags&2)&&e>=lr(t)?zt.push(n):zt.splice(Lp(e),0,n),n.flags|=1,rh()}}function rh(){lo||(lo=sh.then(ah))}function Ip(n){ze(n)?ys.push(...n):ci&&n.id===-1?ci.splice(gs+1,0,n):n.flags&1||(ys.push(n),n.flags|=1),rh()}function Pc(n,e,t=wn+1){for(;t<zt.length;t++){const i=zt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oh(n){if(ys.length){const e=[...new Set(ys)].sort((t,i)=>lr(t)-lr(i));if(ys.length=0,ci){ci.push(...e);return}for(ci=e,gs=0;gs<ci.length;gs++){const t=ci[gs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ci=null,gs=0}}const lr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ah(n){try{for(wn=0;wn<zt.length;wn++){const e=zt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),_r(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<zt.length;wn++){const e=zt[wn];e&&(e.flags&=-2)}wn=-1,zt.length=0,oh(),lo=null,(zt.length||ys.length)&&ah()}}let un=null,lh=null;function co(n){const e=un;return un=n,lh=n&&n.type.__scopeId||null,e}function Pn(n,e=un,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Vc(-1);const r=co(e);let o;try{o=n(...s)}finally{co(r),i._d&&Vc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ai(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ei(),Tn(l,t,8,[n.el,a,n,e]),yi())}}const Up=Symbol("_vte"),ch=n=>n.__isTeleport,ui=Symbol("_leaveCb"),Cr=Symbol("_enterCb");function Np(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $i(()=>{n.isMounted=!0}),Po(()=>{n.isUnmounting=!0}),n}const on=[Function,Array],uh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},fh=n=>{const e=n.subTree;return e.component?fh(e.component):e},Fp={name:"BaseTransition",props:uh,setup(n,{slots:e}){const t=Lm(),i=Np();return()=>{const s=e.default&&ph(e.default(),!0);if(!s||!s.length)return;const r=hh(s),o=et(n),{mode:a}=o;if(i.isLeaving)return $o(r);const l=Dc(r);if(!l)return $o(r);let c=ka(l,o,i,t,f=>c=f);l.type!==Gt&&cr(l,c);let u=t.subTree&&Dc(t.subTree);if(u&&u.type!==Gt&&!Hi(l,u)&&fh(t).type!==Gt){let f=ka(u,o,i,t);if(cr(u,f),a==="out-in"&&l.type!==Gt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},$o(r);a==="in-out"&&l.type!==Gt?f.delayLeave=(h,p,_)=>{const v=dh(i,u);v[String(u.key)]=u,h[ui]=()=>{p(),h[ui]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function hh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Gt){e=t;break}}return e}const Op=Fp;function dh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ka(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:m,onAppear:d,onAfterAppear:b,onAppearCancelled:S}=e,g=String(n.key),L=dh(t,n),w=(y,M)=>{y&&Tn(y,i,9,M)},R=(y,M)=>{const D=M[1];w(y,M),ze(y)?y.every(N=>N.length<=1)&&D():y.length<=1&&D()},U={mode:o,persisted:a,beforeEnter(y){let M=l;if(!t.isMounted)if(r)M=m||l;else return;y[ui]&&y[ui](!0);const D=L[g];D&&Hi(n,D)&&D.el[ui]&&D.el[ui](),w(M,[y])},enter(y){let M=c,D=u,N=f;if(!t.isMounted)if(r)M=d||c,D=b||u,N=S||f;else return;let B=!1;const $=y[Cr]=re=>{B||(B=!0,re?w(N,[y]):w(D,[y]),U.delayedLeave&&U.delayedLeave(),y[Cr]=void 0)};M?R(M,[y,$]):$()},leave(y,M){const D=String(n.key);if(y[Cr]&&y[Cr](!0),t.isUnmounting)return M();w(h,[y]);let N=!1;const B=y[ui]=$=>{N||(N=!0,M(),$?w(v,[y]):w(_,[y]),y[ui]=void 0,L[D]===n&&delete L[D])};L[D]=n,p?R(p,[y,B]):B()},clone(y){const M=ka(y,e,t,i,s);return s&&s(M),M}};return U}function $o(n){if(Ro(n))return n=vi(n),n.children=null,n}function Dc(n){if(!Ro(n))return ch(n.type)&&n.children?hh(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ke(t.default))return t.default()}}function cr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ph(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===St?(o.patchFlag&128&&s++,i=i.concat(ph(o.children,e,a))):(e||o.type!==Gt)&&i.push(a!=null?vi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Qi(n,e){return ke(n)?bt({name:n.name},e,{setup:n}):n}function mh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function uo(n,e,t,i,s=!1){if(ze(n)){n.forEach((_,v)=>uo(_,e&&(ze(e)?e[v]:e),t,i,s));return}if(er(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&uo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?tc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,f=a.setupState,h=et(f),p=f===ft?()=>!1:_=>rt(h,_);if(c!=null&&c!==l&&(vt(c)?(u[c]=null,p(c)&&(f[c]=null)):It(c)&&(c.value=null)),ke(l))_r(l,a,12,[o,u]);else{const _=vt(l),v=It(l);if(_||v){const m=()=>{if(n.f){const d=_?p(l)?f[l]:u[l]:l.value;s?ze(d)&&kl(d,r):ze(d)?d.includes(r)||d.push(r):_?(u[l]=[r],p(l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else _?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,jt(m,t)):m()}}}yo().requestIdleCallback;yo().cancelIdleCallback;const er=n=>!!n.type.__asyncLoader,Ro=n=>n.type.__isKeepAlive;function Bp(n,e){gh(n,"a",e)}function zp(n,e){gh(n,"da",e)}function gh(n,e,t=wt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Co(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ro(s.parent.vnode)&&Hp(i,e,t,s),s=s.parent}}function Hp(n,e,t,i){const s=Co(e,n,i,!0);Do(()=>{kl(i[e],s)},t)}function Co(n,e,t=wt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ei();const a=vr(t),l=Tn(e,t,n,o);return a(),yi(),l});return i?s.unshift(r):s.push(r),r}}const Qn=n=>(e,t=wt)=>{(!hr||n==="sp")&&Co(n,(...i)=>e(...i),t)},Vp=Qn("bm"),$i=Qn("m"),kp=Qn("bu"),Gp=Qn("u"),Po=Qn("bum"),Do=Qn("um"),Wp=Qn("sp"),Xp=Qn("rtg"),qp=Qn("rtc");function Yp(n,e=wt){Co("ec",n,e)}const $p="components",_h=Symbol.for("v-ndc");function jp(n){return vt(n)?Kp($p,n,!1)||n:n||_h}function Kp(n,e,t=!0,i=!1){const s=un||wt;if(s){const r=s.type;{const a=Om(r,!1);if(a&&(a===e||a===hn(e)||a===Eo(hn(e))))return r}const o=Lc(s[n]||r[n],e)||Lc(s.appContext[n],e);return!o&&i?r:o}}function Lc(n,e){return n&&(n[e]||n[hn(e)]||n[Eo(hn(e))])}function Xn(n,e,t,i){let s;const r=t,o=ze(n);if(o||vt(n)){const a=o&&Es(n);let l=!1;a&&(l=!fn(n),n=bo(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?Lt(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(dt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Ga=n=>n?zh(n)?tc(n):Ga(n.parent):null,tr=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ga(n.parent),$root:n=>Ga(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xh(n),$forceUpdate:n=>n.f||(n.f=()=>{Jl(n.update)}),$nextTick:n=>n.n||(n.n=Zl.bind(n.proxy)),$watch:n=>_m.bind(n)}),jo=(n,e)=>n!==ft&&!n.__isScriptSetup&&rt(n,e),Zp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(jo(i,e))return o[e]=1,i[e];if(s!==ft&&rt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,r[e];if(t!==ft&&rt(t,e))return o[e]=4,t[e];Wa&&(o[e]=0)}}const u=tr[e];let f,h;if(u)return e==="$attrs"&&Dt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ft&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return jo(s,e)?(s[e]=t,!0):i!==ft&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&rt(n,o)||jo(e,o)||(a=r[0])&&rt(a,o)||rt(i,o)||rt(tr,o)||rt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ic(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wa=!0;function Jp(n){const e=xh(n),t=n.proxy,i=n.ctx;Wa=!1,e.beforeCreate&&Uc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:b,destroyed:S,unmounted:g,render:L,renderTracked:w,renderTriggered:R,errorCaptured:U,serverPrefetch:y,expose:M,inheritAttrs:D,components:N,directives:B,filters:$}=e;if(c&&Qp(c,i,null),o)for(const ie in o){const k=o[ie];ke(k)&&(i[ie]=k.bind(t))}if(s){const ie=s.call(t,t);dt(ie)&&(n.data=Ao(ie))}if(Wa=!0,r)for(const ie in r){const k=r[ie],he=ke(k)?k.bind(t,t):ke(k.get)?k.get.bind(t,t):Ln,_e=!ke(k)&&ke(k.set)?k.set.bind(t):Ln,Te=Jt({get:he,set:_e});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Pe=>Te.value=Pe})}if(a)for(const ie in a)vh(a[ie],i,t,ie);if(l){const ie=ke(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(k=>{Zr(k,ie[k])})}u&&Uc(u,n,"c");function W(ie,k){ze(k)?k.forEach(he=>ie(he.bind(t))):k&&ie(k.bind(t))}if(W(Vp,f),W($i,h),W(kp,p),W(Gp,_),W(Bp,v),W(zp,m),W(Yp,U),W(qp,w),W(Xp,R),W(Po,b),W(Do,g),W(Wp,y),ze(M))if(M.length){const ie=n.exposed||(n.exposed={});M.forEach(k=>{Object.defineProperty(ie,k,{get:()=>t[k],set:he=>t[k]=he})})}else n.exposed||(n.exposed={});L&&n.render===Ln&&(n.render=L),D!=null&&(n.inheritAttrs=D),N&&(n.components=N),B&&(n.directives=B),y&&mh(n)}function Qp(n,e,t=Ln){ze(n)&&(n=Xa(n));for(const i in n){const s=n[i];let r;dt(s)?"default"in s?r=En(s.from||i,s.default,!0):r=En(s.from||i):r=En(s),It(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Uc(n,e,t){Tn(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vh(n,e,t,i){let s=i.includes(".")?Ih(t,i):()=>t[i];if(vt(n)){const r=e[n];ke(r)&&nr(s,r)}else if(ke(n))nr(s,n.bind(t));else if(dt(n))if(ze(n))n.forEach(r=>vh(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&nr(s,r,n)}}function xh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>fo(l,c,o,!0)),fo(l,e,o)),dt(e)&&r.set(e,l),l}function fo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&fo(n,r,t,!0),s&&s.forEach(o=>fo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=em[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const em={data:Nc,props:Fc,emits:Fc,methods:js,computed:js,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:js,directives:js,watch:nm,provide:Nc,inject:tm};function Nc(n,e){return e?n?function(){return bt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function tm(n,e){return js(Xa(n),Xa(e))}function Xa(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function js(n,e){return n?bt(Object.create(null),n,e):e}function Fc(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:bt(Object.create(null),Ic(n),Ic(e??{})):e}function nm(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const i in e)t[i]=Ft(n[i],e[i]);return t}function Mh(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let im=0;function sm(n,e){return function(i,s=null){ke(i)||(i=bt({},i)),s!=null&&!dt(s)&&(s=null);const r=Mh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:im++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:zm,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...f)):ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||ht(i,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,tc(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Tn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ts;Ts=c;try{return u()}finally{Ts=f}}};return c}}let Ts=null;function Zr(n,e){if(wt){let t=wt.provides;const i=wt.parent&&wt.parent.provides;i===t&&(t=wt.provides=Object.create(i)),t[n]=e}}function En(n,e,t=!1){const i=wt||un;if(i||Ts){const s=Ts?Ts._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Sh={},Eh=()=>Object.create(Sh),yh=n=>Object.getPrototypeOf(n)===Sh;function rm(n,e,t,i=!1){const s={},r=Eh();n.propsDefaults=Object.create(null),Th(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Qf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function om(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Lo(n.emitsOptions,h))continue;const p=e[h];if(l)if(rt(r,h))p!==r[h]&&(r[h]=p,c=!0);else{const _=hn(h);s[_]=qa(l,a,_,p,n,!1)}else p!==r[h]&&(r[h]=p,c=!0)}}}else{Th(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=Ji(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=qa(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!rt(e,f))&&(delete r[f],c=!0)}c&&Yn(n.attrs,"set","")}function Th(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zs(l))continue;const c=e[l];let u;s&&rt(s,u=hn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Lo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||ft;for(let u=0;u<r.length;u++){const f=r[u];t[f]=qa(s,l,f,c[f],n,!rt(c,f))}}return o}function qa(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=vr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ji(t))&&(i=!0))}return i}const am=new WeakMap;function bh(n,e,t=!1){const i=t?am:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[h,p]=bh(f,e,!0);bt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return dt(n)&&i.set(n,Ms),Ms;if(ze(r))for(let u=0;u<r.length;u++){const f=hn(r[u]);Oc(f)&&(o[f]=ft)}else if(r)for(const u in r){const f=hn(u);if(Oc(f)){const h=r[u],p=o[f]=ze(h)||ke(h)?{type:h}:bt({},h),_=p.type;let v=!1,m=!0;if(ze(_))for(let d=0;d<_.length;++d){const b=_[d],S=ke(b)&&b.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(m=!1)}else v=ke(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||rt(p,"default"))&&a.push(f)}}const c=[o,a];return dt(n)&&i.set(n,c),c}function Oc(n){return n[0]!=="$"&&!Zs(n)}const Ah=n=>n[0]==="_"||n==="$stable",Ql=n=>ze(n)?n.map(Rn):[Rn(n)],lm=(n,e,t)=>{if(e._n)return e;const i=Pn((...s)=>Ql(e(...s)),t);return i._c=!1,i},wh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Ah(s))continue;const r=n[s];if(ke(r))e[s]=lm(s,r,i);else if(r!=null){const o=Ql(r);e[s]=()=>o}}},Rh=(n,e)=>{const t=Ql(e);n.slots.default=()=>t},Ch=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},cm=(n,e,t)=>{const i=n.slots=Eh();if(n.vnode.shapeFlag&32){const s=e._;s?(Ch(i,e,t),t&&Uf(i,"_",s,!0)):wh(e,i)}else e&&Rh(n,e)},um=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Ch(s,e,t):(r=!e.$stable,wh(e,s)),o=e}else e&&(Rh(n,e),o={default:1});if(r)for(const a in s)!Ah(a)&&o[a]==null&&delete s[a]},jt=Tm;function fm(n){return hm(n)}function hm(n,e){const t=yo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Ln,insertStaticContent:_}=n,v=(C,P,E,te=null,K=null,q=null,ee=void 0,le=null,J=!!P.dynamicChildren)=>{if(C===P)return;C&&!Hi(C,P)&&(te=F(C),Pe(C,K,q,!0),C=null),P.patchFlag===-2&&(J=!1,P.dynamicChildren=null);const{type:T,ref:x,shapeFlag:I}=P;switch(T){case Io:m(C,P,E,te);break;case Gt:d(C,P,E,te);break;case Jr:C==null&&b(P,E,te,ee);break;case St:N(C,P,E,te,K,q,ee,le,J);break;default:I&1?L(C,P,E,te,K,q,ee,le,J):I&6?B(C,P,E,te,K,q,ee,le,J):(I&64||I&128)&&T.process(C,P,E,te,K,q,ee,le,J,ae)}x!=null&&K&&uo(x,C&&C.ref,q,P||C,!P)},m=(C,P,E,te)=>{if(C==null)i(P.el=a(P.children),E,te);else{const K=P.el=C.el;P.children!==C.children&&c(K,P.children)}},d=(C,P,E,te)=>{C==null?i(P.el=l(P.children||""),E,te):P.el=C.el},b=(C,P,E,te)=>{[C.el,C.anchor]=_(C.children,P,E,te,C.el,C.anchor)},S=({el:C,anchor:P},E,te)=>{let K;for(;C&&C!==P;)K=h(C),i(C,E,te),C=K;i(P,E,te)},g=({el:C,anchor:P})=>{let E;for(;C&&C!==P;)E=h(C),s(C),C=E;s(P)},L=(C,P,E,te,K,q,ee,le,J)=>{P.type==="svg"?ee="svg":P.type==="math"&&(ee="mathml"),C==null?w(P,E,te,K,q,ee,le,J):y(C,P,K,q,ee,le,J)},w=(C,P,E,te,K,q,ee,le)=>{let J,T;const{props:x,shapeFlag:I,transition:G,dirs:Y}=C;if(J=C.el=o(C.type,q,x&&x.is,x),I&8?u(J,C.children):I&16&&U(C.children,J,null,te,K,Ko(C,q),ee,le),Y&&Ai(C,null,te,"created"),R(J,C,C.scopeId,ee,te),x){for(const me in x)me!=="value"&&!Zs(me)&&r(J,me,null,x[me],q,te);"value"in x&&r(J,"value",null,x.value,q),(T=x.onVnodeBeforeMount)&&An(T,te,C)}Y&&Ai(C,null,te,"beforeMount");const X=dm(K,G);X&&G.beforeEnter(J),i(J,P,E),((T=x&&x.onVnodeMounted)||X||Y)&&jt(()=>{T&&An(T,te,C),X&&G.enter(J),Y&&Ai(C,null,te,"mounted")},K)},R=(C,P,E,te,K)=>{if(E&&p(C,E),te)for(let q=0;q<te.length;q++)p(C,te[q]);if(K){let q=K.subTree;if(P===q||Nh(q.type)&&(q.ssContent===P||q.ssFallback===P)){const ee=K.vnode;R(C,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},U=(C,P,E,te,K,q,ee,le,J=0)=>{for(let T=J;T<C.length;T++){const x=C[T]=le?fi(C[T]):Rn(C[T]);v(null,x,P,E,te,K,q,ee,le)}},y=(C,P,E,te,K,q,ee)=>{const le=P.el=C.el;let{patchFlag:J,dynamicChildren:T,dirs:x}=P;J|=C.patchFlag&16;const I=C.props||ft,G=P.props||ft;let Y;if(E&&wi(E,!1),(Y=G.onVnodeBeforeUpdate)&&An(Y,E,P,C),x&&Ai(P,C,E,"beforeUpdate"),E&&wi(E,!0),(I.innerHTML&&G.innerHTML==null||I.textContent&&G.textContent==null)&&u(le,""),T?M(C.dynamicChildren,T,le,E,te,Ko(P,K),q):ee||k(C,P,le,null,E,te,Ko(P,K),q,!1),J>0){if(J&16)D(le,I,G,E,K);else if(J&2&&I.class!==G.class&&r(le,"class",null,G.class,K),J&4&&r(le,"style",I.style,G.style,K),J&8){const X=P.dynamicProps;for(let me=0;me<X.length;me++){const ce=X[me],ge=I[ce],Le=G[ce];(Le!==ge||ce==="value")&&r(le,ce,ge,Le,K,E)}}J&1&&C.children!==P.children&&u(le,P.children)}else!ee&&T==null&&D(le,I,G,E,K);((Y=G.onVnodeUpdated)||x)&&jt(()=>{Y&&An(Y,E,P,C),x&&Ai(P,C,E,"updated")},te)},M=(C,P,E,te,K,q,ee)=>{for(let le=0;le<P.length;le++){const J=C[le],T=P[le],x=J.el&&(J.type===St||!Hi(J,T)||J.shapeFlag&70)?f(J.el):E;v(J,T,x,null,te,K,q,ee,!0)}},D=(C,P,E,te,K)=>{if(P!==E){if(P!==ft)for(const q in P)!Zs(q)&&!(q in E)&&r(C,q,P[q],null,K,te);for(const q in E){if(Zs(q))continue;const ee=E[q],le=P[q];ee!==le&&q!=="value"&&r(C,q,le,ee,K,te)}"value"in E&&r(C,"value",P.value,E.value,K)}},N=(C,P,E,te,K,q,ee,le,J)=>{const T=P.el=C?C.el:a(""),x=P.anchor=C?C.anchor:a("");let{patchFlag:I,dynamicChildren:G,slotScopeIds:Y}=P;Y&&(le=le?le.concat(Y):Y),C==null?(i(T,E,te),i(x,E,te),U(P.children||[],E,x,K,q,ee,le,J)):I>0&&I&64&&G&&C.dynamicChildren?(M(C.dynamicChildren,G,E,K,q,ee,le),(P.key!=null||K&&P===K.subTree)&&Ph(C,P,!0)):k(C,P,E,x,K,q,ee,le,J)},B=(C,P,E,te,K,q,ee,le,J)=>{P.slotScopeIds=le,C==null?P.shapeFlag&512?K.ctx.activate(P,E,te,ee,J):$(P,E,te,K,q,ee,J):re(C,P,J)},$=(C,P,E,te,K,q,ee)=>{const le=C.component=Dm(C,te,K);if(Ro(C)&&(le.ctx.renderer=ae),Im(le,!1,ee),le.asyncDep){if(K&&K.registerDep(le,W,ee),!C.el){const J=le.subTree=ht(Gt);d(null,J,P,E)}}else W(le,C,P,E,K,q,ee)},re=(C,P,E)=>{const te=P.component=C.component;if(Em(C,P,E))if(te.asyncDep&&!te.asyncResolved){ie(te,P,E);return}else te.next=P,te.update();else P.el=C.el,te.vnode=P},W=(C,P,E,te,K,q,ee)=>{const le=()=>{if(C.isMounted){let{next:I,bu:G,u:Y,parent:X,vnode:me}=C;{const Ee=Dh(C);if(Ee){I&&(I.el=me.el,ie(C,I,ee)),Ee.asyncDep.then(()=>{C.isUnmounted||le()});return}}let ce=I,ge;wi(C,!1),I?(I.el=me.el,ie(C,I,ee)):I=me,G&&Go(G),(ge=I.props&&I.props.onVnodeBeforeUpdate)&&An(ge,X,I,me),wi(C,!0);const Le=zc(C),fe=C.subTree;C.subTree=Le,v(fe,Le,f(fe.el),F(fe),C,K,q),I.el=Le.el,ce===null&&ym(C,Le.el),Y&&jt(Y,K),(ge=I.props&&I.props.onVnodeUpdated)&&jt(()=>An(ge,X,I,me),K)}else{let I;const{el:G,props:Y}=P,{bm:X,m:me,parent:ce,root:ge,type:Le}=C,fe=er(P);wi(C,!1),X&&Go(X),!fe&&(I=Y&&Y.onVnodeBeforeMount)&&An(I,ce,P),wi(C,!0);{ge.ce&&ge.ce._injectChildStyle(Le);const Ee=C.subTree=zc(C);v(null,Ee,E,te,C,K,q),P.el=Ee.el}if(me&&jt(me,K),!fe&&(I=Y&&Y.onVnodeMounted)){const Ee=P;jt(()=>An(I,ce,Ee),K)}(P.shapeFlag&256||ce&&er(ce.vnode)&&ce.vnode.shapeFlag&256)&&C.a&&jt(C.a,K),C.isMounted=!0,P=E=te=null}};C.scope.on();const J=C.effect=new zf(le);C.scope.off();const T=C.update=J.run.bind(J),x=C.job=J.runIfDirty.bind(J);x.i=C,x.id=C.uid,J.scheduler=()=>Jl(x),wi(C,!0),T()},ie=(C,P,E)=>{P.component=C;const te=C.vnode.props;C.vnode=P,C.next=null,om(C,P.props,te,E),um(C,P.children,E),Ei(),Pc(C),yi()},k=(C,P,E,te,K,q,ee,le,J=!1)=>{const T=C&&C.children,x=C?C.shapeFlag:0,I=P.children,{patchFlag:G,shapeFlag:Y}=P;if(G>0){if(G&128){_e(T,I,E,te,K,q,ee,le,J);return}else if(G&256){he(T,I,E,te,K,q,ee,le,J);return}}Y&8?(x&16&&Se(T,K,q),I!==T&&u(E,I)):x&16?Y&16?_e(T,I,E,te,K,q,ee,le,J):Se(T,K,q,!0):(x&8&&u(E,""),Y&16&&U(I,E,te,K,q,ee,le,J))},he=(C,P,E,te,K,q,ee,le,J)=>{C=C||Ms,P=P||Ms;const T=C.length,x=P.length,I=Math.min(T,x);let G;for(G=0;G<I;G++){const Y=P[G]=J?fi(P[G]):Rn(P[G]);v(C[G],Y,E,null,K,q,ee,le,J)}T>x?Se(C,K,q,!0,!1,I):U(P,E,te,K,q,ee,le,J,I)},_e=(C,P,E,te,K,q,ee,le,J)=>{let T=0;const x=P.length;let I=C.length-1,G=x-1;for(;T<=I&&T<=G;){const Y=C[T],X=P[T]=J?fi(P[T]):Rn(P[T]);if(Hi(Y,X))v(Y,X,E,null,K,q,ee,le,J);else break;T++}for(;T<=I&&T<=G;){const Y=C[I],X=P[G]=J?fi(P[G]):Rn(P[G]);if(Hi(Y,X))v(Y,X,E,null,K,q,ee,le,J);else break;I--,G--}if(T>I){if(T<=G){const Y=G+1,X=Y<x?P[Y].el:te;for(;T<=G;)v(null,P[T]=J?fi(P[T]):Rn(P[T]),E,X,K,q,ee,le,J),T++}}else if(T>G)for(;T<=I;)Pe(C[T],K,q,!0),T++;else{const Y=T,X=T,me=new Map;for(T=X;T<=G;T++){const xe=P[T]=J?fi(P[T]):Rn(P[T]);xe.key!=null&&me.set(xe.key,T)}let ce,ge=0;const Le=G-X+1;let fe=!1,Ee=0;const De=new Array(Le);for(T=0;T<Le;T++)De[T]=0;for(T=Y;T<=I;T++){const xe=C[T];if(ge>=Le){Pe(xe,K,q,!0);continue}let Be;if(xe.key!=null)Be=me.get(xe.key);else for(ce=X;ce<=G;ce++)if(De[ce-X]===0&&Hi(xe,P[ce])){Be=ce;break}Be===void 0?Pe(xe,K,q,!0):(De[Be-X]=T+1,Be>=Ee?Ee=Be:fe=!0,v(xe,P[Be],E,null,K,q,ee,le,J),ge++)}const Fe=fe?pm(De):Ms;for(ce=Fe.length-1,T=Le-1;T>=0;T--){const xe=X+T,Be=P[xe],Oe=xe+1<x?P[xe+1].el:te;De[T]===0?v(null,Be,E,Oe,K,q,ee,le,J):fe&&(ce<0||T!==Fe[ce]?Te(Be,E,Oe,2):ce--)}}},Te=(C,P,E,te,K=null)=>{const{el:q,type:ee,transition:le,children:J,shapeFlag:T}=C;if(T&6){Te(C.component.subTree,P,E,te);return}if(T&128){C.suspense.move(P,E,te);return}if(T&64){ee.move(C,P,E,ae);return}if(ee===St){i(q,P,E);for(let I=0;I<J.length;I++)Te(J[I],P,E,te);i(C.anchor,P,E);return}if(ee===Jr){S(C,P,E);return}if(te!==2&&T&1&&le)if(te===0)le.beforeEnter(q),i(q,P,E),jt(()=>le.enter(q),K);else{const{leave:I,delayLeave:G,afterLeave:Y}=le,X=()=>i(q,P,E),me=()=>{I(q,()=>{X(),Y&&Y()})};G?G(q,X,me):me()}else i(q,P,E)},Pe=(C,P,E,te=!1,K=!1)=>{const{type:q,props:ee,ref:le,children:J,dynamicChildren:T,shapeFlag:x,patchFlag:I,dirs:G,cacheIndex:Y}=C;if(I===-2&&(K=!1),le!=null&&uo(le,null,E,C,!0),Y!=null&&(P.renderCache[Y]=void 0),x&256){P.ctx.deactivate(C);return}const X=x&1&&G,me=!er(C);let ce;if(me&&(ce=ee&&ee.onVnodeBeforeUnmount)&&An(ce,P,C),x&6)pe(C.component,E,te);else{if(x&128){C.suspense.unmount(E,te);return}X&&Ai(C,null,P,"beforeUnmount"),x&64?C.type.remove(C,P,E,ae,te):T&&!T.hasOnce&&(q!==St||I>0&&I&64)?Se(T,P,E,!1,!0):(q===St&&I&384||!K&&x&16)&&Se(J,P,E),te&&qe(C)}(me&&(ce=ee&&ee.onVnodeUnmounted)||X)&&jt(()=>{ce&&An(ce,P,C),X&&Ai(C,null,P,"unmounted")},E)},qe=C=>{const{type:P,el:E,anchor:te,transition:K}=C;if(P===St){se(E,te);return}if(P===Jr){g(C);return}const q=()=>{s(E),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(C.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:le}=K,J=()=>ee(E,q);le?le(C.el,q,J):J()}else q()},se=(C,P)=>{let E;for(;C!==P;)E=h(C),s(C),C=E;s(P)},pe=(C,P,E)=>{const{bum:te,scope:K,job:q,subTree:ee,um:le,m:J,a:T}=C;Bc(J),Bc(T),te&&Go(te),K.stop(),q&&(q.flags|=8,Pe(ee,C,P,E)),le&&jt(le,P),jt(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Se=(C,P,E,te=!1,K=!1,q=0)=>{for(let ee=q;ee<C.length;ee++)Pe(C[ee],P,E,te,K)},F=C=>{if(C.shapeFlag&6)return F(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=h(C.anchor||C.el),E=P&&P[Up];return E?h(E):P};let ne=!1;const oe=(C,P,E)=>{C==null?P._vnode&&Pe(P._vnode,null,null,!0):v(P._vnode||null,C,P,null,null,null,E),P._vnode=C,ne||(ne=!0,Pc(),oh(),ne=!1)},ae={p:v,um:Pe,m:Te,r:qe,mt:$,mc:U,pc:k,pbc:M,n:F,o:n};return{render:oe,hydrate:void 0,createApp:sm(oe)}}function Ko({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function dm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ph(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Ph(o,a)),a.type===Io&&(a.el=o.el)}}function pm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Dh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dh(e)}function Bc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const mm=Symbol.for("v-scx"),gm=()=>En(mm);function nr(n,e,t){return Lh(n,e,t)}function Lh(n,e,t=ft){const{immediate:i,deep:s,flush:r,once:o}=t,a=bt({},t),l=e&&i||!e&&r!=="post";let c;if(hr){if(r==="sync"){const p=gm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Ln,p.resume=Ln,p.pause=Ln,p}}const u=wt;a.call=(p,_,v)=>Tn(p,u,_,v);let f=!1;r==="post"?a.scheduler=p=>{jt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,_)=>{_?p():Jl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Pp(n,e,a);return hr&&(c?c.push(h):l&&h()),h}function _m(n,e,t){const i=this.proxy,s=vt(n)?n.includes(".")?Ih(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const o=vr(this),a=Lh(s,r.bind(i),t);return o(),a}function Ih(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const vm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${hn(e)}Modifiers`]||n[`${Ji(e)}Modifiers`];function xm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&vm(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>vt(u)?u.trim():u)),o.number&&(s=t.map(Kd)));let a,l=i[a=ko(e)]||i[a=ko(hn(e))];!l&&r&&(l=i[a=ko(Ji(e))]),l&&Tn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Tn(c,n,6,s)}}function Uh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=Uh(c,e,!0);u&&(a=!0,bt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(dt(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):bt(o,r),dt(n)&&i.set(n,o),o)}function Lo(n,e){return!n||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,Ji(e))||rt(n,e))}function zc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=n,m=co(n);let d,b;try{if(t.shapeFlag&4){const g=s||i,L=g;d=Rn(c.call(L,g,u,f,p,h,_)),b=a}else{const g=e;d=Rn(g.length>1?g(f,{attrs:a,slots:o,emit:l}):g(f,null)),b=e.props?a:Mm(a)}}catch(g){ir.length=0,wo(g,n,1),d=ht(Gt)}let S=d;if(b&&v!==!1){const g=Object.keys(b),{shapeFlag:L}=S;g.length&&L&7&&(r&&g.some(Vl)&&(b=Sm(b,r)),S=vi(S,b,!1,!0))}return t.dirs&&(S=vi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&cr(S,t.transition),d=S,co(m),d}const Mm=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},Sm=(n,e)=>{const t={};for(const i in n)(!Vl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Em(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Hc(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Lo(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hc(i,o,c):!0:!!o;return!1}function Hc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Lo(t,r))return!0}return!1}function ym({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Nh=n=>n.__isSuspense;function Tm(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Ip(n)}const St=Symbol.for("v-fgt"),Io=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),Jr=Symbol.for("v-stc"),ir=[];let en=null;function it(n=!1){ir.push(en=n?null:[])}function bm(){ir.pop(),en=ir[ir.length-1]||null}let ur=1;function Vc(n,e=!1){ur+=n,n<0&&en&&e&&(en.hasOnce=!0)}function Fh(n){return n.dynamicChildren=ur>0?en||Ms:null,bm(),ur>0&&en&&en.push(n),n}function lt(n,e,t,i,s,r){return Fh(ve(n,e,t,i,s,r,!0))}function Oh(n,e,t,i,s){return Fh(ht(n,e,t,i,s,!0))}function ho(n){return n?n.__v_isVNode===!0:!1}function Hi(n,e){return n.type===e.type&&n.key===e.key}const Bh=({key:n})=>n??null,Qr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||It(n)||ke(n)?{i:un,r:n,k:e,f:!!t}:n:null);function ve(n,e=null,t=null,i=0,s=null,r=n===St?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Bh(e),ref:e&&Qr(e),scopeId:lh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:un};return a?(ec(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),ur>0&&!o&&en&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&en.push(l),l}const ht=Am;function Am(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===_h)&&(n=Gt),ho(n)){const a=vi(n,e,!0);return t&&ec(a,t),ur>0&&!r&&en&&(a.shapeFlag&6?en[en.indexOf(n)]=a:en.push(a)),a.patchFlag=-2,a}if(Bm(n)&&(n=n.__vccOpts),e){e=wm(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=cn(a)),dt(l)&&(Kl(l)&&!ze(l)&&(l=bt({},l)),e.style=To(l))}const o=vt(n)?1:Nh(n)?128:ch(n)?64:dt(n)?4:ke(n)?2:0;return ve(n,e,t,i,s,o,r,!0)}function wm(n){return n?Kl(n)||yh(n)?bt({},n):n:null}function vi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Rm(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Bh(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(Qr(e)):[r,Qr(e)]:Qr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==St?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cr(u,l.clone(u)),u}function xn(n=" ",e=0){return ht(Io,null,n,e)}function kc(n,e){const t=ht(Jr,null,n);return t.staticCount=e,t}function fr(n="",e=!1){return e?(it(),Oh(Gt,null,n)):ht(Gt,null,n)}function Rn(n){return n==null||typeof n=="boolean"?ht(Gt):ze(n)?ht(St,null,n.slice()):ho(n)?fi(n):ht(Io,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function ec(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ec(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!yh(e)?e._ctx=un:s===3&&un&&(un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:un},t=32):(e=String(e),i&64?(t=16,e=[xn(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=cn([e.class,i.class]));else if(s==="style")e.style=To([e.style,i.style]);else if(xo(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function An(n,e,t,i=null){Tn(n,e,7,[t,i])}const Cm=Mh();let Pm=0;function Dm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Cm,r={uid:Pm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bh(i,s),emitsOptions:Uh(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=xm.bind(null,r),n.ce&&n.ce(r),r}let wt=null;const Lm=()=>wt||un;let po,Ya;{const n=yo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};po=e("__VUE_INSTANCE_SETTERS__",t=>wt=t),Ya=e("__VUE_SSR_SETTERS__",t=>hr=t)}const vr=n=>{const e=wt;return po(n),n.scope.on(),()=>{n.scope.off(),po(e)}},Gc=()=>{wt&&wt.scope.off(),po(null)};function zh(n){return n.vnode.shapeFlag&4}let hr=!1;function Im(n,e=!1,t=!1){e&&Ya(e);const{props:i,children:s}=n.vnode,r=zh(n);rm(n,i,r,e),cm(n,s,t);const o=r?Um(n,e):void 0;return e&&Ya(!1),o}function Um(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Zp);const{setup:i}=t;if(i){Ei();const s=n.setupContext=i.length>1?Fm(n):null,r=vr(n),o=_r(i,n,0,[n.props,s]),a=Df(o);if(yi(),r(),(a||n.sp)&&!er(n)&&mh(n),a){if(o.then(Gc,Gc),e)return o.then(l=>{Wc(n,l)}).catch(l=>{wo(l,n,0)});n.asyncDep=o}else Wc(n,o)}else Hh(n)}function Wc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=ih(e)),Hh(n)}function Hh(n,e,t){const i=n.type;n.render||(n.render=i.render||Ln);{const s=vr(n);Ei();try{Jp(n)}finally{yi(),s()}}}const Nm={get(n,e){return Dt(n,"get",""),n[e]}};function Fm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Nm),slots:n.slots,emit:n.emit,expose:e}}function tc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ih(th(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in tr)return tr[t](n)},has(e,t){return t in e||t in tr}})):n.proxy}function Om(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function Bm(n){return ke(n)&&"__vccOpts"in n}const Jt=(n,e)=>Rp(n,e,hr);function nc(n,e,t){const i=arguments.length;return i===2?dt(e)&&!ze(e)?ho(e)?ht(n,null,[e]):ht(n,e):ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ho(t)&&(t=[t]),ht(n,e,t))}const zm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $a;const Xc=typeof window<"u"&&window.trustedTypes;if(Xc)try{$a=Xc.createPolicy("vue",{createHTML:n=>n})}catch{}const Vh=$a?n=>$a.createHTML(n):n=>n,Hm="http://www.w3.org/2000/svg",Vm="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,qc=qn&&qn.createElement("template"),km={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?qn.createElementNS(Hm,n):e==="mathml"?qn.createElementNS(Vm,n):t?qn.createElement(n,{is:t}):qn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>qn.createTextNode(n),createComment:n=>qn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>qn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{qc.innerHTML=Vh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ti="transition",Vs="animation",dr=Symbol("_vtc"),kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gm=bt({},uh,kh),Wm=n=>(n.displayName="Transition",n.props=Gm,n),Gh=Wm((n,{slots:e})=>nc(Op,Xm(n),e)),Ri=(n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Yc=n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Xm(n){const e={};for(const N in n)N in kh||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=qm(s),v=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:b,onEnterCancelled:S,onLeave:g,onLeaveCancelled:L,onBeforeAppear:w=d,onAppear:R=b,onAppearCancelled:U=S}=e,y=(N,B,$,re)=>{N._enterCancelled=re,Ci(N,B?u:a),Ci(N,B?c:o),$&&$()},M=(N,B)=>{N._isLeaving=!1,Ci(N,f),Ci(N,p),Ci(N,h),B&&B()},D=N=>(B,$)=>{const re=N?R:b,W=()=>y(B,N,$);Ri(re,[B,W]),$c(()=>{Ci(B,N?l:r),On(B,N?u:a),Yc(re)||jc(B,i,v,W)})};return bt(e,{onBeforeEnter(N){Ri(d,[N]),On(N,r),On(N,o)},onBeforeAppear(N){Ri(w,[N]),On(N,l),On(N,c)},onEnter:D(!1),onAppear:D(!0),onLeave(N,B){N._isLeaving=!0;const $=()=>M(N,B);On(N,f),N._enterCancelled?(On(N,h),Jc()):(Jc(),On(N,h)),$c(()=>{N._isLeaving&&(Ci(N,f),On(N,p),Yc(g)||jc(N,i,m,$))}),Ri(g,[N,$])},onEnterCancelled(N){y(N,!1,void 0,!0),Ri(S,[N])},onAppearCancelled(N){y(N,!0,void 0,!0),Ri(U,[N])},onLeaveCancelled(N){M(N),Ri(L,[N])}})}function qm(n){if(n==null)return null;if(dt(n))return[Zo(n.enter),Zo(n.leave)];{const e=Zo(n);return[e,e]}}function Zo(n){return Zd(n)}function On(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[dr]||(n[dr]=new Set)).add(e)}function Ci(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[dr];t&&(t.delete(e),t.size||(n[dr]=void 0))}function $c(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ym=0;function jc(n,e,t,i){const s=n._endId=++Ym,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=$m(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function $m(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),s=i(`${ti}Delay`),r=i(`${ti}Duration`),o=Kc(s,r),a=i(`${Vs}Delay`),l=i(`${Vs}Duration`),c=Kc(a,l);let u=null,f=0,h=0;e===ti?o>0&&(u=ti,f=o,h=r.length):e===Vs?c>0&&(u=Vs,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ti:Vs:null,h=u?u===ti?r.length:l.length:0);const p=u===ti&&/\b(transform|all)(,|$)/.test(i(`${ti}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Kc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Zc(t)+Zc(n[i])))}function Zc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Jc(){return document.body.offsetHeight}function jm(n,e,t){const i=n[dr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Qc=Symbol("_vod"),Km=Symbol("_vsh"),Zm=Symbol(""),Jm=/(^|;)\s*display\s*:/;function Qm(n,e,t){const i=n.style,s=vt(t);let r=!1;if(t&&!s){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&eo(i,a,"")}else for(const o in e)t[o]==null&&eo(i,o,"");for(const o in t)o==="display"&&(r=!0),eo(i,o,t[o])}else if(s){if(e!==t){const o=i[Zm];o&&(t+=";"+o),i.cssText=t,r=Jm.test(t)}}else e&&n.removeAttribute("style");Qc in n&&(n[Qc]=r?i.display:"",n[Km]&&(i.display="none"))}const eu=/\s*!important$/;function eo(n,e,t){if(ze(t))t.forEach(i=>eo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=eg(n,e);eu.test(t)?n.setProperty(Ji(i),t.replace(eu,""),"important"):n[i]=t}}const tu=["Webkit","Moz","ms"],Jo={};function eg(n,e){const t=Jo[e];if(t)return t;let i=hn(e);if(i!=="filter"&&i in n)return Jo[e]=i;i=Eo(i);for(let s=0;s<tu.length;s++){const r=tu[s]+i;if(r in n)return Jo[e]=r}return e}const nu="http://www.w3.org/1999/xlink";function iu(n,e,t,i,s,r=ip(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(nu,e.slice(6,e.length)):n.setAttributeNS(nu,e,t):t==null||r&&!Nf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Si(t)?String(t):t)}function su(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Vh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Nf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function tg(n,e,t,i){n.addEventListener(e,t,i)}function ng(n,e,t,i){n.removeEventListener(e,t,i)}const ru=Symbol("_vei");function ig(n,e,t,i,s=null){const r=n[ru]||(n[ru]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=sg(e);if(i){const c=r[e]=ag(i,s);tg(n,a,c,l)}else o&&(ng(n,a,o,l),r[e]=void 0)}}const ou=/(?:Once|Passive|Capture)$/;function sg(n){let e;if(ou.test(n)){e={};let i;for(;i=n.match(ou);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ji(n.slice(2)),e]}let Qo=0;const rg=Promise.resolve(),og=()=>Qo||(rg.then(()=>Qo=0),Qo=Date.now());function ag(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(lg(i,t.value),e,5,[i])};return t.value=n,t.attached=og(),t}function lg(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const au=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?jm(n,i,o):e==="style"?Qm(n,t,i):xo(e)?Vl(e)||ig(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ug(n,e,i,o))?(su(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&iu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!vt(i))?su(n,hn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),iu(n,e,i,o))};function ug(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&au(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return au(e)&&vt(t)?!1:e in n}const fg=["ctrl","shift","alt","meta"],hg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>fg.some(t=>n[`${t}Key`]&&!e.includes(t))},ja=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=hg[e[o]];if(a&&a(s,e))return}return n(s,...r)})},dg=bt({patchProp:cg},km);let lu;function pg(){return lu||(lu=fm(dg))}const mg=(...n)=>{const e=pg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=_g(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,gg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function gg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function _g(n){return vt(n)?document.querySelector(n):n}/*!
 * pinia v3.0.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const vg=Symbol();var cu;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(cu||(cu={}));function xg(){const n=sp(!0),e=n.run(()=>Bt({}));let t=[],i=[];const s=th({install(r){s._a=r,r.provide(vg,s),r.config.globalProperties.$pinia=s,i.forEach(o=>t.push(o)),i=[]},use(r){return this._a?t.push(r):i.push(r),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof document<"u";function Wh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Mg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Wh(n.default)}const st=Object.assign;function ea(n,e){const t={};for(const i in e){const s=e[i];t[i]=bn(s)?s.map(n):n(s)}return t}const sr=()=>{},bn=Array.isArray,Xh=/#/g,Sg=/&/g,Eg=/\//g,yg=/=/g,Tg=/\?/g,qh=/\+/g,bg=/%5B/g,Ag=/%5D/g,Yh=/%5E/g,wg=/%60/g,$h=/%7B/g,Rg=/%7C/g,jh=/%7D/g,Cg=/%20/g;function ic(n){return encodeURI(""+n).replace(Rg,"|").replace(bg,"[").replace(Ag,"]")}function Pg(n){return ic(n).replace($h,"{").replace(jh,"}").replace(Yh,"^")}function Ka(n){return ic(n).replace(qh,"%2B").replace(Cg,"+").replace(Xh,"%23").replace(Sg,"%26").replace(wg,"`").replace($h,"{").replace(jh,"}").replace(Yh,"^")}function Dg(n){return Ka(n).replace(yg,"%3D")}function Lg(n){return ic(n).replace(Xh,"%23").replace(Tg,"%3F")}function Ig(n){return n==null?"":Lg(n).replace(Eg,"%2F")}function pr(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const Ug=/\/$/,Ng=n=>n.replace(Ug,"");function ta(n,e,t="/"){let i,s={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=n(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=zg(i??e,t),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:pr(o)}}function Fg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function uu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Og(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Rs(e.matched[i],t.matched[s])&&Kh(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Rs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Kh(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!Bg(n[t],e[t]))return!1;return!0}function Bg(n,e){return bn(n)?fu(n,e):bn(e)?fu(e,n):n===e}function fu(n,e){return bn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function zg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const ni={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var mr;(function(n){n.pop="pop",n.push="push"})(mr||(mr={}));var rr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(rr||(rr={}));function Hg(n){if(!n)if(_s){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ng(n)}const Vg=/^[^#]+#/;function kg(n,e){return n.replace(Vg,"#")+e}function Gg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Uo=()=>({left:window.scrollX,top:window.scrollY});function Wg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=Gg(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function hu(n,e){return(history.state?history.state.position-e:-1)+n}const Za=new Map;function Xg(n,e){Za.set(n,e)}function qg(n){const e=Za.get(n);return Za.delete(n),e}let Yg=()=>location.protocol+"//"+location.host;function Zh(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let a=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),uu(l,"")}return uu(t,n)+i+s}function $g(n,e,t,i){let s=[],r=[],o=null;const a=({state:h})=>{const p=Zh(n,location),_=t.value,v=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(p);s.forEach(d=>{d(t.value,_,{delta:m,type:mr.pop,direction:m?m>0?rr.forward:rr.back:rr.unknown})})};function l(){o=t.value}function c(h){s.push(h);const p=()=>{const _=s.indexOf(h);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(st({},h.state,{scroll:Uo()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function du(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Uo():null}}function jg(n){const{history:e,location:t}=window,i={value:Zh(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:Yg()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=st({},e.state,du(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function a(l,c){const u=st({},s.value,e.state,{forward:l,scroll:Uo()});r(u.current,u,!0);const f=st({},du(i.value,l,null),{position:u.position+1},c);r(l,f,!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function Kg(n){n=Hg(n);const e=jg(n),t=$g(n,e.state,e.location,e.replace);function i(r,o=!0){o||t.pauseListeners(),history.go(r)}const s=st({location:"",base:n,go:i,createHref:kg.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Zg(n){return typeof n=="string"||n&&typeof n=="object"}function Jh(n){return typeof n=="string"||typeof n=="symbol"}const Qh=Symbol("");var pu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(pu||(pu={}));function Cs(n,e){return st(new Error,{type:n,[Qh]:!0},e)}function Bn(n,e){return n instanceof Error&&Qh in n&&(e==null||!!(n.type&e))}const mu="[^/]+?",Jg={sensitive:!1,strict:!1,start:!0,end:!0},Qg=/[.+*?^${}()[\]/\\]/g;function e_(n,e){const t=st({},Jg,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(Qg,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:d}=h;r.push({name:_,repeatable:v,optional:m});const b=d||mu;if(b!==mu){p+=10;try{new RegExp(`(${b})`)}catch(g){throw new Error(`Invalid custom RegExp for param "${_}" (${b}): `+g.message)}}let S=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),s+=S,p+=20,m&&(p+=-8),v&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=r[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,d=_ in c?c[_]:"";if(bn(d)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const b=bn(d)?d.join("/"):d;if(!b)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=b}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function t_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ed(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=t_(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(gu(i))return 1;if(gu(s))return-1}return s.length-i.length}function gu(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const n_={type:0,value:""},i_=/[a-zA-Z0-9_]/;function s_(n){if(!n)return[[]];if(n==="/")return[[n_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:i_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function r_(n,e,t){const i=e_(s_(n.path),t),s=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function o_(n,e){const t=[],i=new Map;e=Mu({strict:!1,end:!0,sensitive:!1},e);function s(f){return i.get(f)}function r(f,h,p){const _=!p,v=vu(f);v.aliasOf=p&&p.record;const m=Mu(e,f),d=[v];if("alias"in f){const g=typeof f.alias=="string"?[f.alias]:f.alias;for(const L of g)d.push(vu(st({},v,{components:p?p.record.components:v.components,path:L,aliasOf:p?p.record:v})))}let b,S;for(const g of d){const{path:L}=g;if(h&&L[0]!=="/"){const w=h.record.path,R=w[w.length-1]==="/"?"":"/";g.path=h.record.path+(L&&R+L)}if(b=r_(g,h,m),p?p.alias.push(b):(S=S||b,S!==b&&S.alias.push(b),_&&f.name&&!xu(b)&&o(f.name)),td(b)&&l(b),v.children){const w=v.children;for(let R=0;R<w.length;R++)r(w[R],b,p&&p.children[R])}p=p||b}return S?()=>{o(S)}:sr}function o(f){if(Jh(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=c_(f,t);t.splice(h,0,f),f.record.name&&!xu(f)&&i.set(f.record.name,f)}function c(f,h){let p,_={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Cs(1,{location:f});m=p.record.name,_=st(_u(h.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&_u(f.params,p.keys.map(S=>S.name))),v=p.stringify(_)}else if(f.path!=null)v=f.path,p=t.find(S=>S.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(S=>S.re.test(h.path)),!p)throw Cs(1,{location:f,currentLocation:h});m=p.record.name,_=st({},h.params,f.params),v=p.stringify(_)}const d=[];let b=p;for(;b;)d.unshift(b.record),b=b.parent;return{name:m,path:v,params:_,matched:d,meta:l_(d)}}n.forEach(f=>r(f));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function _u(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function vu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:a_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function a_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function xu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function l_(n){return n.reduce((e,t)=>st(e,t.meta),{})}function Mu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function c_(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;ed(n,e[r])<0?i=r:t=r+1}const s=u_(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function u_(n){let e=n;for(;e=e.parent;)if(td(e)&&ed(n,e)===0)return e}function td({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function f_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(qh," "),o=r.indexOf("="),a=pr(o<0?r:r.slice(0,o)),l=o<0?null:pr(r.slice(o+1));if(a in e){let c=e[a];bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Su(n){let e="";for(let t in n){const i=n[t];if(t=Dg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(bn(i)?i.map(r=>r&&Ka(r)):[i&&Ka(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function h_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=bn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const d_=Symbol(""),Eu=Symbol(""),No=Symbol(""),sc=Symbol(""),Ja=Symbol("");function ks(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function hi(n,e,t,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Cs(4,{from:t,to:e})):h instanceof Error?l(h):Zg(h)?l(Cs(2,{from:e,to:h})):(o&&i.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function na(n,e,t,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Wh(l)){const u=(l.__vccOpts||l)[e];u&&r.push(hi(u,t,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Mg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&hi(p,t,i,o,a,s)()}))}}return r}function yu(n){const e=En(No),t=En(sc),i=Jt(()=>{const l=Qt(n.to);return e.resolve(l)}),s=Jt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Rs.bind(null,u));if(h>-1)return h;const p=Tu(l[c-2]);return c>1&&Tu(u)===p&&f[f.length-1].path!==p?f.findIndex(Rs.bind(null,l[c-2])):h}),r=Jt(()=>s.value>-1&&__(t.params,i.value.params)),o=Jt(()=>s.value>-1&&s.value===t.matched.length-1&&Kh(t.params,i.value.params));function a(l={}){if(g_(l)){const c=e[Qt(n.replace)?"replace":"push"](Qt(n.to)).catch(sr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Jt(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function p_(n){return n.length===1?n[0]:n}const m_=Qi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yu,setup(n,{slots:e}){const t=Ao(yu(n)),{options:i}=En(No),s=Jt(()=>({[bu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[bu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&p_(e.default(t));return n.custom?r:nc("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),qi=m_;function g_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function __(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!bn(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Tu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const bu=(n,e,t)=>n??e??t,v_=Qi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=En(Ja),s=Jt(()=>n.route||i.value),r=En(Eu,0),o=Jt(()=>{let c=Qt(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Jt(()=>s.value.matched[o.value]);Zr(Eu,Jt(()=>o.value+1)),Zr(d_,a),Zr(Ja,s);const l=Bt();return nr(()=>[l.value,a.value,n.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Rs(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Au(t.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=nc(h,st({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Au(t.default,{Component:m,route:c})||m}}});function Au(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const nd=v_;function x_(n){const e=o_(n.routes,n),t=n.parseQuery||f_,i=n.stringifyQuery||Su,s=n.history,r=ks(),o=ks(),a=ks(),l=Tp(ni);let c=ni;_s&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ea.bind(null,F=>""+F),f=ea.bind(null,Ig),h=ea.bind(null,pr);function p(F,ne){let oe,ae;return Jh(F)?(oe=e.getRecordMatcher(F),ae=ne):ae=F,e.addRoute(ae,oe)}function _(F){const ne=e.getRecordMatcher(F);ne&&e.removeRoute(ne)}function v(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,ne){if(ne=st({},ne||l.value),typeof F=="string"){const E=ta(t,F,ne.path),te=e.resolve({path:E.path},ne),K=s.createHref(E.fullPath);return st(E,te,{params:h(te.params),hash:pr(E.hash),redirectedFrom:void 0,href:K})}let oe;if(F.path!=null)oe=st({},F,{path:ta(t,F.path,ne.path).path});else{const E=st({},F.params);for(const te in E)E[te]==null&&delete E[te];oe=st({},F,{params:f(E)}),ne.params=f(ne.params)}const ae=e.resolve(oe,ne),Ie=F.hash||"";ae.params=u(h(ae.params));const C=Fg(i,st({},F,{hash:Pg(Ie),path:ae.path})),P=s.createHref(C);return st({fullPath:C,hash:Ie,query:i===Su?h_(F.query):F.query||{}},ae,{redirectedFrom:void 0,href:P})}function b(F){return typeof F=="string"?ta(t,F,l.value.path):st({},F)}function S(F,ne){if(c!==F)return Cs(8,{from:ne,to:F})}function g(F){return R(F)}function L(F){return g(st(b(F),{replace:!0}))}function w(F){const ne=F.matched[F.matched.length-1];if(ne&&ne.redirect){const{redirect:oe}=ne;let ae=typeof oe=="function"?oe(F):oe;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=b(ae):{path:ae},ae.params={}),st({query:F.query,hash:F.hash,params:ae.path!=null?{}:F.params},ae)}}function R(F,ne){const oe=c=d(F),ae=l.value,Ie=F.state,C=F.force,P=F.replace===!0,E=w(oe);if(E)return R(st(b(E),{state:typeof E=="object"?st({},Ie,E.state):Ie,force:C,replace:P}),ne||oe);const te=oe;te.redirectedFrom=ne;let K;return!C&&Og(i,ae,oe)&&(K=Cs(16,{to:te,from:ae}),Te(ae,ae,!0,!1)),(K?Promise.resolve(K):M(te,ae)).catch(q=>Bn(q)?Bn(q,2)?q:_e(q):k(q,te,ae)).then(q=>{if(q){if(Bn(q,2))return R(st({replace:P},b(q.to),{state:typeof q.to=="object"?st({},Ie,q.to.state):Ie,force:C}),ne||te)}else q=N(te,ae,!0,P,Ie);return D(te,ae,q),q})}function U(F,ne){const oe=S(F,ne);return oe?Promise.reject(oe):Promise.resolve()}function y(F){const ne=se.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function M(F,ne){let oe;const[ae,Ie,C]=M_(F,ne);oe=na(ae.reverse(),"beforeRouteLeave",F,ne);for(const E of ae)E.leaveGuards.forEach(te=>{oe.push(hi(te,F,ne))});const P=U.bind(null,F,ne);return oe.push(P),Se(oe).then(()=>{oe=[];for(const E of r.list())oe.push(hi(E,F,ne));return oe.push(P),Se(oe)}).then(()=>{oe=na(Ie,"beforeRouteUpdate",F,ne);for(const E of Ie)E.updateGuards.forEach(te=>{oe.push(hi(te,F,ne))});return oe.push(P),Se(oe)}).then(()=>{oe=[];for(const E of C)if(E.beforeEnter)if(bn(E.beforeEnter))for(const te of E.beforeEnter)oe.push(hi(te,F,ne));else oe.push(hi(E.beforeEnter,F,ne));return oe.push(P),Se(oe)}).then(()=>(F.matched.forEach(E=>E.enterCallbacks={}),oe=na(C,"beforeRouteEnter",F,ne,y),oe.push(P),Se(oe))).then(()=>{oe=[];for(const E of o.list())oe.push(hi(E,F,ne));return oe.push(P),Se(oe)}).catch(E=>Bn(E,8)?E:Promise.reject(E))}function D(F,ne,oe){a.list().forEach(ae=>y(()=>ae(F,ne,oe)))}function N(F,ne,oe,ae,Ie){const C=S(F,ne);if(C)return C;const P=ne===ni,E=_s?history.state:{};oe&&(ae||P?s.replace(F.fullPath,st({scroll:P&&E&&E.scroll},Ie)):s.push(F.fullPath,Ie)),l.value=F,Te(F,ne,oe,P),_e()}let B;function $(){B||(B=s.listen((F,ne,oe)=>{if(!pe.listening)return;const ae=d(F),Ie=w(ae);if(Ie){R(st(Ie,{replace:!0,force:!0}),ae).catch(sr);return}c=ae;const C=l.value;_s&&Xg(hu(C.fullPath,oe.delta),Uo()),M(ae,C).catch(P=>Bn(P,12)?P:Bn(P,2)?(R(st(b(P.to),{force:!0}),ae).then(E=>{Bn(E,20)&&!oe.delta&&oe.type===mr.pop&&s.go(-1,!1)}).catch(sr),Promise.reject()):(oe.delta&&s.go(-oe.delta,!1),k(P,ae,C))).then(P=>{P=P||N(ae,C,!1),P&&(oe.delta&&!Bn(P,8)?s.go(-oe.delta,!1):oe.type===mr.pop&&Bn(P,20)&&s.go(-1,!1)),D(ae,C,P)}).catch(sr)}))}let re=ks(),W=ks(),ie;function k(F,ne,oe){_e(F);const ae=W.list();return ae.length?ae.forEach(Ie=>Ie(F,ne,oe)):console.error(F),Promise.reject(F)}function he(){return ie&&l.value!==ni?Promise.resolve():new Promise((F,ne)=>{re.add([F,ne])})}function _e(F){return ie||(ie=!F,$(),re.list().forEach(([ne,oe])=>F?oe(F):ne()),re.reset()),F}function Te(F,ne,oe,ae){const{scrollBehavior:Ie}=n;if(!_s||!Ie)return Promise.resolve();const C=!oe&&qg(hu(F.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Zl().then(()=>Ie(F,ne,C)).then(P=>P&&Wg(P)).catch(P=>k(P,F,ne))}const Pe=F=>s.go(F);let qe;const se=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:d,options:n,push:g,replace:L,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:he,install(F){const ne=this;F.component("RouterLink",qi),F.component("RouterView",nd),F.config.globalProperties.$router=ne,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),_s&&!qe&&l.value===ni&&(qe=!0,g(s.location).catch(Ie=>{}));const oe={};for(const Ie in ni)Object.defineProperty(oe,Ie,{get:()=>l.value[Ie],enumerable:!0});F.provide(No,ne),F.provide(sc,Qf(oe)),F.provide(Ja,l);const ae=F.unmount;se.add(F),F.unmount=function(){se.delete(F),se.size<1&&(c=ni,B&&B(),B=null,l.value=ni,qe=!1,ie=!1),ae()}}};function Se(F){return F.reduce((ne,oe)=>ne.then(()=>y(oe)),Promise.resolve())}return pe}function M_(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(n.matched.find(c=>Rs(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Rs(c,l))||s.push(l))}return[t,i,s]}function S_(){return En(No)}function E_(n){return En(sc)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="174",y_=0,wu=1,T_=2,id=1,b_=2,Wn=3,xi=0,Wt=1,$n=2,gi=0,bs=1,Ru=2,Cu=3,Pu=4,A_=5,Vi=100,w_=101,R_=102,C_=103,P_=104,D_=200,L_=201,I_=202,U_=203,Qa=204,el=205,N_=206,F_=207,O_=208,B_=209,z_=210,H_=211,V_=212,k_=213,G_=214,tl=0,nl=1,il=2,Ps=3,sl=4,rl=5,ol=6,al=7,sd=0,W_=1,X_=2,_i=0,q_=1,Y_=2,$_=3,j_=4,K_=5,Z_=6,J_=7,rd=300,Ds=301,Ls=302,ll=303,cl=304,Fo=306,ul=1e3,Gi=1001,fl=1002,yn=1003,Q_=1004,Pr=1005,Dn=1006,ia=1007,Wi=1008,Jn=1009,od=1010,ad=1011,gr=1012,oc=1013,ji=1014,jn=1015,xr=1016,ac=1017,lc=1018,Is=1020,ld=35902,cd=1021,ud=1022,Mn=1023,fd=1024,hd=1025,As=1026,Us=1027,dd=1028,cc=1029,pd=1030,uc=1031,fc=1033,to=33776,no=33777,io=33778,so=33779,hl=35840,dl=35841,pl=35842,ml=35843,gl=36196,_l=37492,vl=37496,xl=37808,Ml=37809,Sl=37810,El=37811,yl=37812,Tl=37813,bl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Pl=37819,Dl=37820,Ll=37821,ro=36492,Il=36494,Ul=36495,md=36283,Nl=36284,Fl=36285,Ol=36286,e0=3200,t0=3201,gd=0,n0=1,pi="",ln="srgb",Ns="srgb-linear",mo="linear",at="srgb",ns=7680,Du=519,i0=512,s0=513,r0=514,_d=515,o0=516,a0=517,l0=518,c0=519,Lu=35044,Iu="300 es",Kn=2e3,go=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,Bl=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function u0(n,e){return(n%e+e)%e}function ra(n,e,t){return(1-t)*n+t*e}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=s[0],m=s[3],d=s[6],b=s[1],S=s[4],g=s[7],L=s[2],w=s[5],R=s[8];return r[0]=o*v+a*b+l*L,r[3]=o*m+a*S+l*w,r[6]=o*d+a*g+l*R,r[1]=c*v+u*b+f*L,r[4]=c*m+u*S+f*w,r[7]=c*d+u*g+f*R,r[2]=h*v+p*b+_*L,r[5]=h*m+p*S+_*w,r[8]=h*d+p*g+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,p=c*r-o*l,_=t*f+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new We;function vd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function _o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function f0(){const n=_o("canvas");return n.style.display="block",n}const Uu={};function Oi(n){n in Uu||(Uu[n]=!0,console.warn(n))}function h0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function d0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function p0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){const n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?mo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:mo,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const Qe=m0();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class g0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{is===void 0&&(is=_o("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=is}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?g0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let v0=0;class Xt extends Os{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,i=Gi,s=Gi,r=Dn,o=Wi,a=Mn,l=Jn,c=Xt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Mr(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ul:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ul:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=rd;Xt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,s=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,g=(p+1)/2,L=(d+1)/2,w=(u+h)/4,R=(f+v)/4,U=(_+m)/4;return S>g&&S>L?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=w/i,r=R/i):g>L?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=w/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=U/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-v)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class x0 extends Os{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Xt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends x0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xd extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M0 extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,b=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const L=Math.sqrt(S),w=Math.atan2(L,d*b);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}const g=a*b;if(l=l*m+h*g,c=c*m+p*g,u=u*m+_*g,f=f*m+v*g,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new V,Ou=new Sr;class Er{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Lr.subVectors(this.max,Ws),ss.subVectors(e.a,Ws),rs.subVectors(e.b,Ws),os.subVectors(e.c,Ws),ii.subVectors(rs,ss),si.subVectors(os,rs),Pi.subVectors(ss,os);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Pi.z,Pi.y,ii.z,0,-ii.x,si.z,0,-si.x,Pi.z,0,-Pi.x,-ii.y,ii.x,0,-si.y,si.x,0,-Pi.y,Pi.x,0];return!ca(t,ss,rs,os,Lr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,ss,rs,os,Lr))?!1:(Ir.crossVectors(ii,si),t=[Ir.x,Ir.y,Ir.z],ca(t,ss,rs,os,Lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new V,new V,new V,new V,new V,new V,new V,new V],mn=new V,Dr=new Er,ss=new V,rs=new V,os=new V,ii=new V,si=new V,Pi=new V,Ws=new V,Lr=new V,Ir=new V,Di=new V;function ca(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const S0=new Er,Xs=new V,ua=new V;class dc{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):S0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(ua)),this.expandByPoint(Xs.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new V,fa=new V,Ur=new V,ri=new V,ha=new V,Nr=new V,da=new V;class E0{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){fa.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(fa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=ri.dot(this.direction),l=-ri.dot(Ur),c=ri.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=r*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fa).addScaledVector(Ur,h),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,s,r){ha.subVectors(t,e),Nr.subVectors(i,e),da.crossVectors(ha,Nr);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Nr.crossVectors(ri,Nr));if(l<0)return null;const c=a*this.direction.dot(ha.cross(ri));if(c<0||l+c>o)return null;const u=-a*ri.dot(da);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,p,_,v,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,p,_,v,m)}set(e,t,i,s,r,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y0,e,T0)}lookAt(e,t,i){const s=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),oi.crossVectors(i,Yt),oi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),oi.crossVectors(i,Yt)),oi.normalize(),Fr.crossVectors(Yt,oi),s[0]=oi.x,s[4]=Fr.x,s[8]=Yt.x,s[1]=oi.y,s[5]=Fr.y,s[9]=Yt.y,s[2]=oi.z,s[6]=Fr.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],b=i[3],S=i[7],g=i[11],L=i[15],w=s[0],R=s[4],U=s[8],y=s[12],M=s[1],D=s[5],N=s[9],B=s[13],$=s[2],re=s[6],W=s[10],ie=s[14],k=s[3],he=s[7],_e=s[11],Te=s[15];return r[0]=o*w+a*M+l*$+c*k,r[4]=o*R+a*D+l*re+c*he,r[8]=o*U+a*N+l*W+c*_e,r[12]=o*y+a*B+l*ie+c*Te,r[1]=u*w+f*M+h*$+p*k,r[5]=u*R+f*D+h*re+p*he,r[9]=u*U+f*N+h*W+p*_e,r[13]=u*y+f*B+h*ie+p*Te,r[2]=_*w+v*M+m*$+d*k,r[6]=_*R+v*D+m*re+d*he,r[10]=_*U+v*N+m*W+d*_e,r[14]=_*y+v*B+m*ie+d*Te,r[3]=b*w+S*M+g*$+L*k,r[7]=b*R+S*D+g*re+L*he,r[11]=b*U+S*N+g*W+L*_e,r[15]=b*y+S*B+g*ie+L*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*p-i*l*p)+v*(+t*l*p-t*c*h+r*o*h-s*o*p+s*c*u-r*l*u)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*u-i*c*u)+d*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],b=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,S=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,g=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,L=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,w=t*b+i*S+s*g+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=b*R,e[1]=(v*h*r-f*m*r-v*s*p+i*m*p+f*s*d-i*h*d)*R,e[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*d+i*l*d)*R,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*p-i*l*p)*R,e[4]=S*R,e[5]=(u*m*r-_*h*r+_*s*p-t*m*p-u*s*d+t*h*d)*R,e[6]=(_*l*r-o*m*r-_*s*c+t*m*c+o*s*d-t*l*d)*R,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*p+t*l*p)*R,e[8]=g*R,e[9]=(_*f*r-u*v*r-_*i*p+t*v*p+u*i*d-t*f*d)*R,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*d+t*a*d)*R,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*p-t*a*p)*R,e[12]=L*R,e[13]=(u*v*s-_*f*s+_*i*h-t*v*h-u*i*m+t*f*m)*R,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*m-t*a*m)*R,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,p=r*u,_=r*f,v=o*u,m=o*f,d=a*f,b=l*c,S=l*u,g=l*f,L=i.x,w=i.y,R=i.z;return s[0]=(1-(v+d))*L,s[1]=(p+g)*L,s[2]=(_-S)*L,s[3]=0,s[4]=(p-g)*w,s[5]=(1-(h+d))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(_+S)*R,s[9]=(m-b)*R,s[10]=(1-(h+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=as.set(s[0],s[1],s[2]).length();const o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const c=1/r,u=1/o,f=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Kn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let p,_;if(a===Kn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===go)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Kn){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,p=(i+s)*u;let _,v;if(a===Kn)_=(o+r)*f,v=-2*f;else if(a===go)_=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const as=new V,gn=new mt,y0=new V(0,0,0),T0=new V(1,1,1),oi=new V,Fr=new V,Yt=new V,Bu=new mt,zu=new Sr;class Un{constructor(e=0,t=0,i=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zu.setFromEuler(this),this.setFromQuaternion(zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b0=0;const Hu=new V,ls=new Sr,Vn=new mt,Or=new V,qs=new V,A0=new V,w0=new Sr,Vu=new V(1,0,0),ku=new V(0,1,0),Gu=new V(0,0,1),Wu={type:"added"},R0={type:"removed"},cs={type:"childadded",child:null},pa={type:"childremoved",child:null};class Ut extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new V,t=new Un,i=new Sr,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new We}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(qs,Or,this.up):Vn.lookAt(Or,qs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Vn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),pa.child=e,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,w0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new V(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new V,kn=new V,ma=new V,Gn=new V,us=new V,fs=new V,Xu=new V,ga=new V,_a=new V,va=new V,xa=new ct,Ma=new ct,Sa=new ct;class vn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),kn.subVectors(i,t),ma.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(kn),l=_n.dot(ma),c=kn.dot(kn),u=kn.dot(ma),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return xa.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),xa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,i),Sa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(xa,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),kn.subVectors(e,t),_n.cross(kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),_n.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;us.subVectors(s,i),fs.subVectors(r,i),ga.subVectors(e,i);const l=us.dot(ga),c=fs.dot(ga);if(l<=0&&c<=0)return t.copy(i);_a.subVectors(e,s);const u=us.dot(_a),f=fs.dot(_a);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(us,o);va.subVectors(e,r);const p=us.dot(va),_=fs.dot(va);if(_>=0&&p<=_)return t.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(fs,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Xu.subVectors(r,s),a=(f-u)/(f-u+(p-_)),t.copy(s).addScaledVector(Xu,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(us,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Br={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=u0(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ea(o,r,e+1/3),this.g=Ea(o,r,e),this.b=Ea(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=ln){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=Sd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Qe.fromWorkingColorSpace(Pt.copy(this),e),Math.round(Ye(Pt.r*255,0,255))*65536+Math.round(Ye(Pt.g*255,0,255))*256+Math.round(Ye(Pt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Pt.copy(this),t);const i=Pt.r,s=Pt.g,r=Pt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=ln){Qe.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,i=Pt.g,s=Pt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Br);const i=ra(ai.h,Br.h,t),s=ra(ai.s,Br.s,t),r=ra(ai.l,Br.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new je;je.NAMES=Sd;let C0=0;class Zi extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=bs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=el,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==el&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ed extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new V,zr=new $e;let P0=0;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class yd extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Td extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nn extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let D0=0;const an=new mt,ya=new Ut,hs=new V,$t=new Er,Ys=new Er,Tt=new V;class ei extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vd(e)?Td:yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return ya.lookAt(e),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors($t.min,Ys.min),$t.expandByPoint(Tt),Tt.addVectors($t.max,Ys.max),$t.expandByPoint(Tt)):($t.expandByPoint(Ys.min),$t.expandByPoint(Ys.max))}$t.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Tt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Tt.add(hs)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new V,l[U]=new V;const c=new V,u=new V,f=new V,h=new $e,p=new $e,_=new $e,v=new V,m=new V;function d(U,y,M){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),h.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),_.fromBufferAttribute(r,M),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(D),a[U].add(v),a[y].add(v),a[M].add(v),l[U].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,y=b.length;U<y;++U){const M=b[U],D=M.start,N=M.count;for(let B=D,$=D+N;B<$;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new V,g=new V,L=new V,w=new V;function R(U){L.fromBufferAttribute(s,U),w.copy(L);const y=a[U];S.copy(y),S.sub(L.multiplyScalar(L.dot(y))).normalize(),g.crossVectors(w,y);const D=g.dot(l[U])<0?-1:1;o.setXYZW(U,S.x,S.y,S.z,D)}for(let U=0,y=b.length;U<y;++U){const M=b[U],D=M.start,N=M.count;for(let B=D,$=D+N;B<$;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new In(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new mt,Li=new E0,Hr=new dc,Yu=new V,Vr=new V,kr=new V,Gr=new V,Ta=new V,Wr=new V,$u=new V,Xr=new V;class tn extends Ut{constructor(e=new ei,t=new Ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(Ta.fromBufferAttribute(f,e),o?Wr.addScaledVector(Ta,u):Wr.addScaledVector(Ta.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Hr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Hr,Yu)===null||Li.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(r).invert(),Li.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=b,L=S;g<L;g+=3){const w=a.getX(g),R=a.getX(g+1),U=a.getX(g+2);s=qr(this,d,e,i,c,u,f,w,R,U),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const b=a.getX(m),S=a.getX(m+1),g=a.getX(m+2);s=qr(this,o,e,i,c,u,f,b,S,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=b,L=S;g<L;g+=3){const w=g,R=g+1,U=g+2;s=qr(this,d,e,i,c,u,f,w,R,U),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const b=m,S=m+1,g=m+2;s=qr(this,o,e,i,c,u,f,b,S,g),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function L0(n,e,t,i,s,r,o,a){let l;if(e.side===Wt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vr),n.getVertexPosition(l,kr),n.getVertexPosition(c,Gr);const u=L0(n,e,t,i,Vr,kr,Gr,$u);if(u){const f=new V;vn.getBarycoord($u,Vr,kr,Gr,f),s&&(u.uv=vn.getInterpolatedAttribute(s,a,l,c,f,new $e)),r&&(u.uv1=vn.getInterpolatedAttribute(r,a,l,c,f,new $e)),o&&(u.normal=vn.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};vn.getNormal(Vr,kr,Gr,h.normal),u.face=h,u.barycoord=f}return u}class yr extends ei{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(f,2));function _(v,m,d,b,S,g,L,w,R,U,y){const M=g/R,D=L/U,N=g/2,B=L/2,$=w/2,re=R+1,W=U+1;let ie=0,k=0;const he=new V;for(let _e=0;_e<W;_e++){const Te=_e*D-B;for(let Pe=0;Pe<re;Pe++){const qe=Pe*M-N;he[v]=qe*b,he[m]=Te*S,he[d]=$,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[d]=w>0?1:-1,u.push(he.x,he.y,he.z),f.push(Pe/R),f.push(1-_e/U),ie+=1}}for(let _e=0;_e<U;_e++)for(let Te=0;Te<R;Te++){const Pe=h+Te+re*_e,qe=h+Te+re*(_e+1),se=h+(Te+1)+re*(_e+1),pe=h+(Te+1)+re*_e;l.push(Pe,qe,pe),l.push(qe,se,pe),k+=6}a.addGroup(p,k,y),p+=k,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ot(n){const e={};for(let t=0;t<n.length;t++){const i=Fs(n[t]);for(const s in i)e[s]=i[s]}return e}function I0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const U0={clone:Fs,merge:Ot};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=I0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ad extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new V,ju=new $e,Ku=new $e;class Zt extends Ad{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,ju,Ku),t.subVectors(Ku,ju)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ds=-90,ps=1;class wd extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(ds,ps,e,t);s.layers=this.layers,this.add(s);const r=new Zt(ds,ps,e,t);r.layers=this.layers,this.add(r);const o=new Zt(ds,ps,e,t);o.layers=this.layers,this.add(o);const a=new Zt(ds,ps,e,t);a.layers=this.layers,this.add(a);const l=new Zt(ds,ps,e,t);l.layers=this.layers,this.add(l);const c=new Zt(ds,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rd extends Xt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cd extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Rd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yr(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:gi});r.uniforms.tEquirect.value=t;const o=new tn(s,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Dn),new wd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class vs extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class B0 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Aa=new V,z0=new V,H0=new We;class Bi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Aa.subVectors(i,t).cross(z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Aa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||H0.getNormalMatrix(e),s=this.coplanarPoint(Aa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new dc,Yr=new V;class pc{constructor(e=new Bi,t=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],p=s[8],_=s[9],v=s[10],m=s[11],d=s[12],b=s[13],S=s[14],g=s[15];if(i[0].setComponents(l-r,h-c,m-p,g-d).normalize(),i[1].setComponents(l+r,h+c,m+p,g+d).normalize(),i[2].setComponents(l+o,h+u,m+_,g+b).normalize(),i[3].setComponents(l-o,h-u,m-_,g-b).normalize(),i[4].setComponents(l-a,h-f,m-v,g-S).normalize(),t===Kn)i[5].setComponents(l+a,h+f,m+v,g+S).normalize();else if(t===go)i[5].setComponents(a,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pd extends Xt{constructor(e,t,i,s,r,o,a,l,c,u=As){if(u!==As&&u!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===As&&(i=ji),i===void 0&&u===Us&&(i=Is),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mc extends ei{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new nn(r,3)),this.setAttribute("normal",new nn(r.slice(),3)),this.setAttribute("uv",new nn(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new V,g=new V,L=new V;for(let w=0;w<t.length;w+=3)p(t[w+0],S),p(t[w+1],g),p(t[w+2],L),l(S,g,L,b)}function l(b,S,g,L){const w=L+1,R=[];for(let U=0;U<=w;U++){R[U]=[];const y=b.clone().lerp(g,U/w),M=S.clone().lerp(g,U/w),D=w-U;for(let N=0;N<=D;N++)N===0&&U===w?R[U][N]=y:R[U][N]=y.clone().lerp(M,N/D)}for(let U=0;U<w;U++)for(let y=0;y<2*(w-U)-1;y++){const M=Math.floor(y/2);y%2===0?(h(R[U][M+1]),h(R[U+1][M]),h(R[U][M])):(h(R[U][M+1]),h(R[U+1][M+1]),h(R[U+1][M]))}}function c(b){const S=new V;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(b),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function u(){const b=new V;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];const g=m(b)/2/Math.PI+.5,L=d(b)/Math.PI+.5;o.push(g,1-L)}_(),f()}function f(){for(let b=0;b<o.length;b+=6){const S=o[b+0],g=o[b+2],L=o[b+4],w=Math.max(S,g,L),R=Math.min(S,g,L);w>.9&&R<.1&&(S<.2&&(o[b+0]+=1),g<.2&&(o[b+2]+=1),L<.2&&(o[b+4]+=1))}}function h(b){r.push(b.x,b.y,b.z)}function p(b,S){const g=b*3;S.x=e[g+0],S.y=e[g+1],S.z=e[g+2]}function _(){const b=new V,S=new V,g=new V,L=new V,w=new $e,R=new $e,U=new $e;for(let y=0,M=0;y<r.length;y+=9,M+=6){b.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),g.set(r[y+6],r[y+7],r[y+8]),w.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),U.set(o[M+4],o[M+5]),L.copy(b).add(S).add(g).divideScalar(3);const D=m(L);v(w,M+0,b,D),v(R,M+2,S,D),v(U,M+4,g,D)}}function v(b,S,g,L){L<0&&b.x===1&&(o[S]=b.x-1),g.x===0&&g.z===0&&(o[S]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.vertices,e.indices,e.radius,e.details)}}class gc extends mc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gc(e.radius,e.detail)}}class Oo extends ei{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const b=d*h-o;for(let S=0;S<c;S++){const g=S*f-r;_.push(g,-b,0),v.push(0,0,1),m.push(S/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const S=b+c*d,g=b+c*(d+1),L=b+1+c*(d+1),w=b+1+c*d;p.push(S,g,w),p.push(g,L,w)}this.setIndex(p),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class vo extends ei{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new V,h=new V,p=[],_=[],v=[],m=[];for(let d=0;d<=i;d++){const b=[],S=d/i;let g=0;d===0&&o===0?g=.5/t:d===i&&l===Math.PI&&(g=-.5/t);for(let L=0;L<=t;L++){const w=L/t;f.x=-e*Math.cos(s+w*r)*Math.sin(o+S*a),f.y=e*Math.cos(o+S*a),f.z=e*Math.sin(s+w*r)*Math.sin(o+S*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(w+g,1-S),b.push(c++)}u.push(b)}for(let d=0;d<i;d++)for(let b=0;b<t;b++){const S=u[d][b+1],g=u[d][b],L=u[d+1][b],w=u[d+1][b+1];(d!==0||o>0)&&p.push(S,g,w),(d!==i-1||l<Math.PI)&&p.push(g,L,w)}this.setIndex(p),this.setAttribute("position",new nn(_,3)),this.setAttribute("normal",new nn(v,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class V0 extends Zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gd,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wa extends V0{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class k0 extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G0 extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _c extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ra=new mt,Zu=new V,Ju=new V;class Dd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zu),Ju.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ju),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qu=new mt,$s=new V,Ca=new V;class W0 extends Dd{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),$s.setFromMatrixPosition(e.matrixWorld),i.position.copy($s),Ca.copy(i.position),Ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ca),i.updateMatrixWorld(),s.makeTranslation(-$s.x,-$s.y,-$s.z),Qu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu)}}class Pa extends _c{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new W0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ld extends Ad{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class X0 extends Dd{constructor(){super(new Ld(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ef extends _c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new X0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class q0 extends _c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Y0 extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class $0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tf(){return performance.now()}function nf(n,e,t,i){const s=j0(i);switch(t){case cd:return n*e;case fd:return n*e;case hd:return n*e*2;case dd:return n*e/s.components*s.byteLength;case cc:return n*e/s.components*s.byteLength;case pd:return n*e*2/s.components*s.byteLength;case uc:return n*e*2/s.components*s.byteLength;case ud:return n*e*3/s.components*s.byteLength;case Mn:return n*e*4/s.components*s.byteLength;case fc:return n*e*4/s.components*s.byteLength;case to:case no:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case io:case so:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dl:case ml:return Math.max(n,16)*Math.max(e,8)/4;case hl:case pl:return Math.max(n,8)*Math.max(e,8)/2;case gl:case _l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ro:case Il:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16;case md:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Fl:case Ol:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j0(n){switch(n){case Jn:case od:return{byteLength:1,components:1};case gr:case ad:case xr:return{byteLength:2,components:1};case ac:case lc:return{byteLength:2,components:4};case ji:case oc:case jn:return{byteLength:4,components:1};case ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Id(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function K0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Z0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ev=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ov=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,av=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_v=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ev=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Kv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ox=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ux=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Z0,alphahash_pars_fragment:J0,alphamap_fragment:Q0,alphamap_pars_fragment:ev,alphatest_fragment:tv,alphatest_pars_fragment:nv,aomap_fragment:iv,aomap_pars_fragment:sv,batching_pars_vertex:rv,batching_vertex:ov,begin_vertex:av,beginnormal_vertex:lv,bsdfs:cv,iridescence_fragment:uv,bumpmap_pars_fragment:fv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:pv,clipping_planes_vertex:mv,color_fragment:gv,color_pars_fragment:_v,color_pars_vertex:vv,color_vertex:xv,common:Mv,cube_uv_reflection_fragment:Sv,defaultnormal_vertex:Ev,displacementmap_pars_vertex:yv,displacementmap_vertex:Tv,emissivemap_fragment:bv,emissivemap_pars_fragment:Av,colorspace_fragment:wv,colorspace_pars_fragment:Rv,envmap_fragment:Cv,envmap_common_pars_fragment:Pv,envmap_pars_fragment:Dv,envmap_pars_vertex:Lv,envmap_physical_pars_fragment:Gv,envmap_vertex:Iv,fog_vertex:Uv,fog_pars_vertex:Nv,fog_fragment:Fv,fog_pars_fragment:Ov,gradientmap_pars_fragment:Bv,lightmap_pars_fragment:zv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:kv,lights_toon_fragment:Wv,lights_toon_pars_fragment:Xv,lights_phong_fragment:qv,lights_phong_pars_fragment:Yv,lights_physical_fragment:$v,lights_physical_pars_fragment:jv,lights_fragment_begin:Kv,lights_fragment_maps:Zv,lights_fragment_end:Jv,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:sx,map_particle_fragment:rx,map_particle_pars_fragment:ox,metalnessmap_fragment:ax,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:ux,morphnormal_vertex:fx,morphtarget_pars_vertex:hx,morphtarget_vertex:dx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:_x,normal_vertex:vx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:Mx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:yx,opaque_fragment:Tx,packing:bx,premultiplied_alpha_fragment:Ax,project_vertex:wx,dithering_fragment:Rx,dithering_pars_fragment:Cx,roughnessmap_fragment:Px,roughnessmap_pars_fragment:Dx,shadowmap_pars_fragment:Lx,shadowmap_pars_vertex:Ix,shadowmap_vertex:Ux,shadowmask_pars_fragment:Nx,skinbase_vertex:Fx,skinning_pars_vertex:Ox,skinning_vertex:Bx,skinnormal_vertex:zx,specularmap_fragment:Hx,specularmap_pars_fragment:Vx,tonemapping_fragment:kx,tonemapping_pars_fragment:Gx,transmission_fragment:Wx,transmission_pars_fragment:Xx,uv_pars_fragment:qx,uv_pars_vertex:Yx,uv_vertex:$x,worldpos_vertex:jx,background_vert:Kx,background_frag:Zx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distanceRGBA_vert:sM,distanceRGBA_frag:rM,equirect_vert:oM,equirect_frag:aM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:fM,meshlambert_vert:hM,meshlambert_frag:dM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:_M,meshphong_vert:vM,meshphong_frag:xM,meshphysical_vert:MM,meshphysical_frag:SM,meshtoon_vert:EM,meshtoon_frag:yM,points_vert:TM,points_frag:bM,shadow_vert:AM,shadow_frag:wM,sprite_vert:RM,sprite_frag:CM},ye={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Cn={basic:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ot([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ot([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new je(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ot([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ot([ye.points,ye.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ot([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ot([ye.common,ye.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ot([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ot([ye.sprite,ye.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ot([ye.common,ye.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ot([ye.lights,ye.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Cn.physical={uniforms:Ot([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const $r={r:0,b:0,g:0},Ui=new Un,PM=new mt;function DM(n,e,t,i,s,r,o){const a=new je(0);let l=r===!0?0:1,c,u,f=null,h=0,p=null;function _(S){let g=S.isScene===!0?S.background:null;return g&&g.isTexture&&(g=(S.backgroundBlurriness>0?t:e).get(g)),g}function v(S){let g=!1;const L=_(S);L===null?d(a,l):L&&L.isColor&&(d(L,1),g=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,g){const L=_(g);L&&(L.isCubeTexture||L.mapping===Fo)?(u===void 0&&(u=new tn(new yr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Fs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ui.copy(g.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(Ui)),u.material.toneMapped=Qe.getTransfer(L.colorSpace)!==at,(f!==L||h!==L.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new tn(new Oo(2,2),new Mi({name:"BackgroundMaterial",uniforms:Fs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(L.colorSpace)!==at,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||h!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=L,h=L.version,p=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function d(S,g){S.getRGB($r,bd(n)),i.buffers.color.setClear($r.r,$r.g,$r.b,g,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,g=1){a.set(S),l=g,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:v,addToRenderList:m,dispose:b}}function LM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(M,D,N,B,$){let re=!1;const W=f(B,N,D);r!==W&&(r=W,c(r.object)),re=p(M,B,N,$),re&&_(M,B,N,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,g(M,D,N,B),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,N){const B=N.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let re=$[D.id];re===void 0&&(re={},$[D.id]=re);let W=re[B];return W===void 0&&(W=h(l()),re[B]=W),W}function h(M){const D=[],N=[],B=[];for(let $=0;$<t;$++)D[$]=0,N[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,D,N,B){const $=r.attributes,re=D.attributes;let W=0;const ie=N.getAttributes();for(const k in ie)if(ie[k].location>=0){const _e=$[k];let Te=re[k];if(Te===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),_e===void 0||_e.attribute!==Te||Te&&_e.data!==Te.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function _(M,D,N,B){const $={},re=D.attributes;let W=0;const ie=N.getAttributes();for(const k in ie)if(ie[k].location>=0){let _e=re[k];_e===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const Te={};Te.attribute=_e,_e&&_e.data&&(Te.data=_e.data),$[k]=Te,W++}r.attributes=$,r.attributesNum=W,r.index=B}function v(){const M=r.newAttributes;for(let D=0,N=M.length;D<N;D++)M[D]=0}function m(M){d(M,0)}function d(M,D){const N=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;N[M]=1,B[M]===0&&(n.enableVertexAttribArray(M),B[M]=1),$[M]!==D&&(n.vertexAttribDivisor(M,D),$[M]=D)}function b(){const M=r.newAttributes,D=r.enabledAttributes;for(let N=0,B=D.length;N<B;N++)D[N]!==M[N]&&(n.disableVertexAttribArray(N),D[N]=0)}function S(M,D,N,B,$,re,W){W===!0?n.vertexAttribIPointer(M,D,N,$,re):n.vertexAttribPointer(M,D,N,B,$,re)}function g(M,D,N,B){v();const $=B.attributes,re=N.getAttributes(),W=D.defaultAttributeValues;for(const ie in re){const k=re[ie];if(k.location>=0){let he=$[ie];if(he===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const _e=he.normalized,Te=he.itemSize,Pe=e.get(he);if(Pe===void 0)continue;const qe=Pe.buffer,se=Pe.type,pe=Pe.bytesPerElement,Se=se===n.INT||se===n.UNSIGNED_INT||he.gpuType===oc;if(he.isInterleavedBufferAttribute){const F=he.data,ne=F.stride,oe=he.offset;if(F.isInstancedInterleavedBuffer){for(let ae=0;ae<k.locationSize;ae++)d(k.location+ae,F.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ae=0;ae<k.locationSize;ae++)m(k.location+ae);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let ae=0;ae<k.locationSize;ae++)S(k.location+ae,Te/k.locationSize,se,_e,ne*pe,(oe+Te/k.locationSize*ae)*pe,Se)}else{if(he.isInstancedBufferAttribute){for(let F=0;F<k.locationSize;F++)d(k.location+F,he.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let F=0;F<k.locationSize;F++)m(k.location+F);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let F=0;F<k.locationSize;F++)S(k.location+F,Te/k.locationSize,se,_e,Te*pe,Te/k.locationSize*F*pe,Se)}}else if(W!==void 0){const _e=W[ie];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(k.location,_e);break;case 3:n.vertexAttrib3fv(k.location,_e);break;case 4:n.vertexAttrib4fv(k.location,_e);break;default:n.vertexAttrib1fv(k.location,_e)}}}}b()}function L(){U();for(const M in i){const D=i[M];for(const N in D){const B=D[N];for(const $ in B)u(B[$].object),delete B[$];delete D[N]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const N in D){const B=D[N];for(const $ in B)u(B[$].object),delete B[$];delete D[N]}delete i[M.id]}function R(M){for(const D in i){const N=i[D];if(N[M.id]===void 0)continue;const B=N[M.id];for(const $ in B)u(B[$].object),delete B[$];delete N[M.id]}}function U(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function IM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function UM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Jn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==jn&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:g,vertexTextures:L,maxSamples:w}}function NM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Bi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||s;return s=h,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,S=b*4;let g=d.clippingState||null;l.value=g,g=u(_,h,S,p);for(let L=0;L!==S;++L)g[L]=t[L];d.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let S=0,g=p;S!==v;++S,g+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function FM(n){let e=new WeakMap;function t(o,a){return a===ll?o.mapping=Ds:a===cl&&(o.mapping=Ls),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ll||a===cl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const xs=4,sf=[.125,.215,.35,.446,.526,.582],ki=20,Da=new Ld,rf=new je;let La=null,Ia=0,Ua=0,Na=!1;const zi=(1+Math.sqrt(5))/2,ms=1/zi,of=[new V(-zi,ms,0),new V(zi,ms,0),new V(-ms,0,zi),new V(ms,0,zi),new V(0,zi,-ms),new V(0,zi,ms),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],OM=new V;class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=OM}=r;La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(La,Ia,Ua),this._renderer.xr.enabled=Na,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),La=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:xr,format:Mn,colorSpace:Ns,depthBuffer:!1},s=lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(r)),this._blurMaterial=zM(r,e,t)}return s}_compileMaterial(e){const t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,i,s,r){const l=new Zt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(rf),f.toneMapping=_i,f.autoClear=!1;const _=new Ed({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),v=new tn(new yr,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(rf),m=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const g=this._cubeSize;jr(s,S*g,b>2?g:0,g,g),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ds||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;jr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Da)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=of[(s-r-1)%of.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new tn(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):ki;m>ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const d=[];let b=0;for(let R=0;R<ki;++R){const U=R/v,y=Math.exp(-U*U/2);d.push(y),R===0?b+=y:R<m&&(b+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-i;const g=this._sizeLods[s],L=3*g*(s>S-xs?s-S+xs:0),w=4*(this._cubeSize-g);jr(t,L,w,3*g,2*g),l.setRenderTarget(t),l.render(f,Da)}}function BM(n){const e=[],t=[],i=[];let s=n;const r=n-xs+1+sf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-xs?l=sf[o-n+xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,b=new Float32Array(v*_*p),S=new Float32Array(m*_*p),g=new Float32Array(d*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,U=w>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];b.set(y,v*_*w),S.set(h,m*_*w);const M=[w,w,w,w,w,w];g.set(M,d*_*w)}const L=new ei;L.setAttribute("position",new In(b,v)),L.setAttribute("uv",new In(S,m)),L.setAttribute("faceIndex",new In(g,d)),e.push(L),s>xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lf(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=Fo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zM(n,e,t){const i=new Float32Array(ki),s=new V(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function cf(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function uf(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ll||l===cl,u=l===Ds||l===Ls;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new af(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new af(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function VM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Oi("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kM(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const b=p.array;v=p.version;for(let S=0,g=b.length;S<g;S+=3){const L=b[S+0],w=b[S+1],R=b[S+2];h.push(L,w,w,R,R,L)}}else if(_!==void 0){const b=_.array;v=_.version;for(let S=0,g=b.length/3-1;S<g;S+=3){const L=S+0,w=S+1,R=S+2;h.push(L,w,w,R,R,L)}}else return;const m=new(vd(h)?Td:yd)(h,1);m.version=v;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function GM(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,r,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,v,0,_);let d=0;for(let b=0;b<_;b++)d+=p[b]*v[b];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function WM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function XM(n,e,t){const i=new WeakMap,s=new ct;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),_===!0&&(S=2),v===!0&&(S=3);let g=a.attributes.position.count*S,L=1;g>e.maxTextureSize&&(L=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const w=new Float32Array(g*L*4*f),R=new xd(w,g,L,f);R.type=jn,R.needsUpdate=!0;const U=S*4;for(let M=0;M<f;M++){const D=m[M],N=d[M],B=b[M],$=g*L*4*M;for(let re=0;re<D.count;re++){const W=re*U;p===!0&&(s.fromBufferAttribute(D,re),w[$+W+0]=s.x,w[$+W+1]=s.y,w[$+W+2]=s.z,w[$+W+3]=0),_===!0&&(s.fromBufferAttribute(N,re),w[$+W+4]=s.x,w[$+W+5]=s.y,w[$+W+6]=s.z,w[$+W+7]=0),v===!0&&(s.fromBufferAttribute(B,re),w[$+W+8]=s.x,w[$+W+9]=s.y,w[$+W+10]=s.z,w[$+W+11]=B.itemSize===4?s.w:1)}}h={count:f,texture:R,size:new $e(g,L)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function qM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ud=new Xt,ff=new Pd(1,1),Nd=new xd,Fd=new M0,Od=new Rd,hf=[],df=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Bs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=hf[s];if(r===void 0&&(r=new Float32Array(s),hf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bo(n,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function YM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),yt(t,e)}}function jM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),yt(t,e)}}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),yt(t,e)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),yt(t,i)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),yt(t,i)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Et(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),yt(t,i)}}function eS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),yt(t,e)}}function nS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),yt(t,e)}}function iS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),yt(t,e)}}function sS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),yt(t,e)}}function oS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),yt(t,e)}}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),yt(t,e)}}function lS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ff.compareFunction=_d,r=ff):r=Ud,t.setTexture2D(e||r,s)}function cS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fd,s)}function uS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Od,s)}function fS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Nd,s)}function hS(n){switch(n){case 5126:return YM;case 35664:return $M;case 35665:return jM;case 35666:return KM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return fS}}function dS(n,e){n.uniform1fv(this.addr,e)}function pS(n,e){const t=Bs(e,this.size,2);n.uniform2fv(this.addr,t)}function mS(n,e){const t=Bs(e,this.size,3);n.uniform3fv(this.addr,t)}function gS(n,e){const t=Bs(e,this.size,4);n.uniform4fv(this.addr,t)}function _S(n,e){const t=Bs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vS(n,e){const t=Bs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xS(n,e){const t=Bs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function MS(n,e){n.uniform1iv(this.addr,e)}function SS(n,e){n.uniform2iv(this.addr,e)}function ES(n,e){n.uniform3iv(this.addr,e)}function yS(n,e){n.uniform4iv(this.addr,e)}function TS(n,e){n.uniform1uiv(this.addr,e)}function bS(n,e){n.uniform2uiv(this.addr,e)}function AS(n,e){n.uniform3uiv(this.addr,e)}function wS(n,e){n.uniform4uiv(this.addr,e)}function RS(n,e,t){const i=this.cache,s=e.length,r=Bo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function CS(n,e,t){const i=this.cache,s=e.length,r=Bo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fd,r[o])}function PS(n,e,t){const i=this.cache,s=e.length,r=Bo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Od,r[o])}function DS(n,e,t){const i=this.cache,s=e.length,r=Bo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),yt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nd,r[o])}function LS(n){switch(n){case 5126:return dS;case 35664:return pS;case 35665:return mS;case 35666:return gS;case 35674:return _S;case 35675:return vS;case 35676:return xS;case 5124:case 35670:return MS;case 35667:case 35671:return SS;case 35668:case 35672:return ES;case 35669:case 35673:return yS;case 5125:return TS;case 36294:return bS;case 36295:return AS;case 36296:return wS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return DS}}class IS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hS(t.type)}}class US{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LS(t.type)}}class NS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function FS(n,e,t){const i=n.name,s=i.length;for(Fa.lastIndex=0;;){const r=Fa.exec(i),o=Fa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_f(t,c===void 0?new IS(a,n,e):new US(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new NS(a),_f(t,f)),t=f}}}class oo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);FS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OS=37297;let BS=0;function zS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const xf=new We;function HS(n){Qe._getMatrix(xf,Qe.workingColorSpace,n);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case mo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zS(n.getShaderSource(e),o)}else return s}function VS(n,e){const t=HS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kS(n,e){let t;switch(e){case q_:t="Linear";break;case Y_:t="Reinhard";break;case $_:t="Cineon";break;case j_:t="ACESFilmic";break;case Z_:t="AgX";break;case J_:t="Neutral";break;case K_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kr=new V;function GS(){Qe.getLuminanceCoefficients(Kr);const n=Kr.x.toFixed(4),e=Kr.y.toFixed(4),t=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ks).join(`
`)}function XS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ks(n){return n!==""}function Sf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YS=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(YS,jS)}const $S=new Map;function jS(n,e){let t=Xe[e];if(t===void 0){const i=$S.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zl(t)}const KS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(KS,ZS)}function ZS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function QS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ds:case Ls:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function tE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case sd:e="ENVMAP_BLENDING_MULTIPLY";break;case W_:e="ENVMAP_BLENDING_MIX";break;case X_:e="ENVMAP_BLENDING_ADD";break}return e}function nE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=JS(t),c=QS(t),u=eE(t),f=tE(t),h=nE(t),p=WS(t),_=XS(r),v=s.createProgram();let m,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ks).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ks).join(`
`),d.length>0&&(d+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),d=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Xe.tonemapping_pars_fragment:"",t.toneMapping!==_i?kS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),GS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=zl(o),o=Sf(o,t),o=Ef(o,t),a=zl(a),a=Sf(a,t),a=Ef(a,t),o=yf(o),a=yf(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=b+m+o,g=b+d+a,L=vf(s,s.VERTEX_SHADER,S),w=vf(s,s.FRAGMENT_SHADER,g);s.attachShader(v,L),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(L).trim(),$=s.getShaderInfoLog(w).trim();let re=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,L,w);else{const ie=Mf(s,L,"vertex"),k=Mf(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+ie+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||$==="")&&(W=!1);W&&(D.diagnostics={runnable:re,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:d}})}s.deleteShader(L),s.deleteShader(w),U=new oo(s,v),y=qS(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,OS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=w,this}let sE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oE(e),t.set(e,i)),i}}class oE{constructor(e){this.id=sE++,this.code=e,this.usedTimes=0}}function aE(n,e,t,i,s,r,o){const a=new Md,l=new rE,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,D,N,B){const $=N.fog,re=B.geometry,W=y.isMeshStandardMaterial?N.environment:null,ie=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),k=ie&&ie.mapping===Fo?ie.image.height:null,he=_[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const _e=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Te=_e!==void 0?_e.length:0;let Pe=0;re.morphAttributes.position!==void 0&&(Pe=1),re.morphAttributes.normal!==void 0&&(Pe=2),re.morphAttributes.color!==void 0&&(Pe=3);let qe,se,pe,Se;if(he){const ot=Cn[he];qe=ot.vertexShader,se=ot.fragmentShader}else qe=y.vertexShader,se=y.fragmentShader,l.update(y),pe=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const F=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),oe=B.isInstancedMesh===!0,ae=B.isBatchedMesh===!0,Ie=!!y.map,C=!!y.matcap,P=!!ie,E=!!y.aoMap,te=!!y.lightMap,K=!!y.bumpMap,q=!!y.normalMap,ee=!!y.displacementMap,le=!!y.emissiveMap,J=!!y.metalnessMap,T=!!y.roughnessMap,x=y.anisotropy>0,I=y.clearcoat>0,G=y.dispersion>0,Y=y.iridescence>0,X=y.sheen>0,me=y.transmission>0,ce=x&&!!y.anisotropyMap,ge=I&&!!y.clearcoatMap,Le=I&&!!y.clearcoatNormalMap,fe=I&&!!y.clearcoatRoughnessMap,Ee=Y&&!!y.iridescenceMap,De=Y&&!!y.iridescenceThicknessMap,Fe=X&&!!y.sheenColorMap,xe=X&&!!y.sheenRoughnessMap,Be=!!y.specularMap,Oe=!!y.specularColorMap,Ze=!!y.specularIntensityMap,O=me&&!!y.transmissionMap,Me=me&&!!y.thicknessMap,Q=!!y.gradientMap,ue=!!y.alphaMap,we=y.alphaTest>0,Ae=!!y.alphaHash,Ge=!!y.extensions;let gt=_i;y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(gt=n.toneMapping);const Rt={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:qe,fragmentShader:se,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ae,batchingColor:ae&&B._colorsTexture!==null,instancing:oe,instancingColor:oe&&B.instanceColor!==null,instancingMorph:oe&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ns,alphaToCoverage:!!y.alphaToCoverage,map:Ie,matcap:C,envMap:P,envMapMode:P&&ie.mapping,envMapCubeUVHeight:k,aoMap:E,lightMap:te,bumpMap:K,normalMap:q,displacementMap:h&&ee,emissiveMap:le,normalMapObjectSpace:q&&y.normalMapType===n0,normalMapTangentSpace:q&&y.normalMapType===gd,metalnessMap:J,roughnessMap:T,anisotropy:x,anisotropyMap:ce,clearcoat:I,clearcoatMap:ge,clearcoatNormalMap:Le,clearcoatRoughnessMap:fe,dispersion:G,iridescence:Y,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:X,sheenColorMap:Fe,sheenRoughnessMap:xe,specularMap:Be,specularColorMap:Oe,specularIntensityMap:Ze,transmission:me,transmissionMap:O,thicknessMap:Me,gradientMap:Q,opaque:y.transparent===!1&&y.blending===bs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:we,alphaHash:Ae,combine:y.combine,mapUv:Ie&&v(y.map.channel),aoMapUv:E&&v(y.aoMap.channel),lightMapUv:te&&v(y.lightMap.channel),bumpMapUv:K&&v(y.bumpMap.channel),normalMapUv:q&&v(y.normalMap.channel),displacementMapUv:ee&&v(y.displacementMap.channel),emissiveMapUv:le&&v(y.emissiveMap.channel),metalnessMapUv:J&&v(y.metalnessMap.channel),roughnessMapUv:T&&v(y.roughnessMap.channel),anisotropyMapUv:ce&&v(y.anisotropyMap.channel),clearcoatMapUv:ge&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(y.sheenRoughnessMap.channel),specularMapUv:Be&&v(y.specularMap.channel),specularColorMapUv:Oe&&v(y.specularColorMap.channel),specularIntensityMapUv:Ze&&v(y.specularIntensityMap.channel),transmissionMapUv:O&&v(y.transmissionMap.channel),thicknessMapUv:Me&&v(y.thicknessMap.channel),alphaMapUv:ue&&v(y.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(q||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!re.attributes.uv&&(Ie||ue),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:ne,skinning:B.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Pe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Ie&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$n,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ge&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&y.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Rt.vertexUv1s=c.has(1),Rt.vertexUv2s=c.has(2),Rt.vertexUv3s=c.has(3),c.clear(),Rt}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(b(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function g(y){const M=_[y.type];let D;if(M){const N=Cn[M];D=U0.clone(N.uniforms)}else D=y.uniforms;return D}function L(y,M){let D;for(let N=0,B=u.length;N<B;N++){const $=u[N];if($.cacheKey===M){D=$,++D.usedTimes;break}}return D===void 0&&(D=new iE(n,M,y,r),u.push(D)),D}function w(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:g,acquireProgram:L,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:U}}function lE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function cE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function bf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,p,_,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||cE),i.length>1&&i.sort(h||bf),s.length>1&&s.sort(h||bf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function uE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Af,n.set(i,[o])):s>=r.length?(o=new Af,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new je};break;case"SpotLight":t={position:new V,direction:new V,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function hE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dE=0;function pE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mE(n){const e=new fE,t=hE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new mt,o=new mt;function a(c){let u=0,f=0,h=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,b=0,S=0,g=0,L=0,w=0,R=0;c.sort(pE);for(let y=0,M=c.length;y<M;y++){const D=c[y],N=D.color,B=D.intensity,$=D.distance,re=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*B,f+=N.g*B,h+=N.b*B;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],B);R++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,k=t.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=D.shadow.matrix,b++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(N).multiplyScalar(B),W.distance=$,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[v]=W;const ie=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,ie.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[v]=ie.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=re,g++}v++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(N).multiplyScalar(B),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ie=D.shadow,k=t.get(D);k.shadowIntensity=ie.intensity,k.shadowBias=ie.bias,k.shadowNormalBias=ie.normalBias,k.shadowRadius=ie.radius,k.shadowMapSize=ie.mapSize,k.shadowCameraNear=ie.camera.near,k.shadowCameraFar=ie.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=D.shadow.matrix,S++}i.point[_]=W,_++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(B),W.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const U=i.hash;(U.directionalLength!==p||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==S||U.numSpotShadows!==g||U.numSpotMaps!==L||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=g+L-w,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,U.directionalLength=p,U.pointLength=_,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=S,U.numSpotShadows=g,U.numSpotMaps=L,U.numLightProbes=R,i.version=dE++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const S=c[d];if(S.isDirectionalLight){const g=i.directional[f];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),f++}else if(S.isSpotLight){const g=i.spot[p];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const g=i.rectArea[_];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const g=i.point[h];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const g=i.hemi[v];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function wf(n){const e=new mE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function gE(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new wf(n),e.set(s,[a])):r>=o.length?(a=new wf(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xE(n,e,t){let i=new pc;const s=new $e,r=new $e,o=new ct,a=new k0({depthPacking:t0}),l=new G0,c={},u=t.maxTextureSize,f={[xi]:Wt,[Wt]:xi,[$n]:$n},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:_E,fragmentShader:vE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new tn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let d=this.type;this.render=function(w,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),N=n.state;N.setBlending(gi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=d!==Wn&&this.type===Wn,$=d===Wn&&this.type!==Wn;for(let re=0,W=w.length;re<W;re++){const ie=w[re],k=ie.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const he=k.getFrameExtents();if(s.multiply(he),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,k.mapSize.y=r.y)),k.map===null||B===!0||$===!0){const Te=this.type!==Wn?{minFilter:yn,magFilter:yn}:{};k.map!==null&&k.map.dispose(),k.map=new Ki(s.x,s.y,Te),k.map.texture.name=ie.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const _e=k.getViewportCount();for(let Te=0;Te<_e;Te++){const Pe=k.getViewport(Te);o.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),N.viewport(o),k.updateMatrices(ie,Te),i=k.getFrustum(),g(R,U,k.camera,ie,this.type)}k.isPointLightShadow!==!0&&this.type===Wn&&b(k,U),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(y,M,D)};function b(w,R){const U=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,U,h,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,U,p,v,null)}function S(w,R,U,y){let M=null;const D=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const N=M.uuid,B=R.uuid;let $=c[N];$===void 0&&($={},c[N]=$);let re=$[B];re===void 0&&(re=M.clone(),$[B]=re,R.addEventListener("dispose",L)),M=re}if(M.visible=R.visible,M.wireframe=R.wireframe,y===Wn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=n.properties.get(M);N.light=U}return M}function g(w,R,U,y,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Wn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const B=e.update(w),$=w.material;if(Array.isArray($)){const re=B.groups;for(let W=0,ie=re.length;W<ie;W++){const k=re[W],he=$[k.materialIndex];if(he&&he.visible){const _e=S(w,he,y,M);w.onBeforeShadow(n,w,R,U,B,_e,k),n.renderBufferDirect(U,null,B,_e,w,k),w.onAfterShadow(n,w,R,U,B,_e,k)}}}else if($.visible){const re=S(w,$,y,M);w.onBeforeShadow(n,w,R,U,B,re,null),n.renderBufferDirect(U,null,B,re,w,null),w.onAfterShadow(n,w,R,U,B,re,null)}}const N=w.children;for(let B=0,$=N.length;B<$;B++)g(N[B],R,U,y,M)}function L(w){w.target.removeEventListener("dispose",L);for(const U in c){const y=c[U],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const ME={[tl]:nl,[il]:ol,[sl]:al,[Ps]:rl,[nl]:tl,[ol]:il,[al]:sl,[rl]:Ps};function SE(n,e){function t(){let O=!1;const Me=new ct;let Q=null;const ue=new ct(0,0,0,0);return{setMask:function(we){Q!==we&&!O&&(n.colorMask(we,we,we,we),Q=we)},setLocked:function(we){O=we},setClear:function(we,Ae,Ge,gt,Rt){Rt===!0&&(we*=gt,Ae*=gt,Ge*=gt),Me.set(we,Ae,Ge,gt),ue.equals(Me)===!1&&(n.clearColor(we,Ae,Ge,gt),ue.copy(Me))},reset:function(){O=!1,Q=null,ue.set(-1,0,0,0)}}}function i(){let O=!1,Me=!1,Q=null,ue=null,we=null;return{setReversed:function(Ae){if(Me!==Ae){const Ge=e.get("EXT_clip_control");Me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const gt=we;we=null,this.setClear(gt)}Me=Ae},getReversed:function(){return Me},setTest:function(Ae){Ae?F(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(Ae){Q!==Ae&&!O&&(n.depthMask(Ae),Q=Ae)},setFunc:function(Ae){if(Me&&(Ae=ME[Ae]),ue!==Ae){switch(Ae){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case sl:n.depthFunc(n.EQUAL);break;case rl:n.depthFunc(n.GEQUAL);break;case ol:n.depthFunc(n.GREATER);break;case al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=Ae}},setLocked:function(Ae){O=Ae},setClear:function(Ae){we!==Ae&&(Me&&(Ae=1-Ae),n.clearDepth(Ae),we=Ae)},reset:function(){O=!1,Q=null,ue=null,we=null,Me=!1}}}function s(){let O=!1,Me=null,Q=null,ue=null,we=null,Ae=null,Ge=null,gt=null,Rt=null;return{setTest:function(ot){O||(ot?F(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(ot){Me!==ot&&!O&&(n.stencilMask(ot),Me=ot)},setFunc:function(ot,dn,Nn){(Q!==ot||ue!==dn||we!==Nn)&&(n.stencilFunc(ot,dn,Nn),Q=ot,ue=dn,we=Nn)},setOp:function(ot,dn,Nn){(Ae!==ot||Ge!==dn||gt!==Nn)&&(n.stencilOp(ot,dn,Nn),Ae=ot,Ge=dn,gt=Nn)},setLocked:function(ot){O=ot},setClear:function(ot){Rt!==ot&&(n.clearStencil(ot),Rt=ot)},reset:function(){O=!1,Me=null,Q=null,ue=null,we=null,Ae=null,Ge=null,gt=null,Rt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,b=null,S=null,g=null,L=null,w=null,R=new je(0,0,0),U=0,y=!1,M=null,D=null,N=null,B=null,$=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(k)[1]),W=ie>=1):k.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),W=ie>=2);let he=null,_e={};const Te=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),qe=new ct().fromArray(Te),se=new ct().fromArray(Pe);function pe(O,Me,Q,ue){const we=new Uint8Array(4),Ae=n.createTexture();n.bindTexture(O,Ae),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Q;Ge++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(Me+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Ae}const Se={};Se[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(Ps),K(!1),q(wu),F(n.CULL_FACE),E(gi);function F(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function ne(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function oe(O,Me){return f[O]!==Me?(n.bindFramebuffer(O,Me),f[O]=Me,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ae(O,Me){let Q=p,ue=!1;if(O){Q=h.get(Me),Q===void 0&&(Q=[],h.set(Me,Q));const we=O.textures;if(Q.length!==we.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ae=0,Ge=we.length;Ae<Ge;Ae++)Q[Ae]=n.COLOR_ATTACHMENT0+Ae;Q.length=we.length,ue=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Q)}function Ie(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const C={[Vi]:n.FUNC_ADD,[w_]:n.FUNC_SUBTRACT,[R_]:n.FUNC_REVERSE_SUBTRACT};C[C_]=n.MIN,C[P_]=n.MAX;const P={[D_]:n.ZERO,[L_]:n.ONE,[I_]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[z_]:n.SRC_ALPHA_SATURATE,[O_]:n.DST_COLOR,[N_]:n.DST_ALPHA,[U_]:n.ONE_MINUS_SRC_COLOR,[el]:n.ONE_MINUS_SRC_ALPHA,[B_]:n.ONE_MINUS_DST_COLOR,[F_]:n.ONE_MINUS_DST_ALPHA,[H_]:n.CONSTANT_COLOR,[V_]:n.ONE_MINUS_CONSTANT_COLOR,[k_]:n.CONSTANT_ALPHA,[G_]:n.ONE_MINUS_CONSTANT_ALPHA};function E(O,Me,Q,ue,we,Ae,Ge,gt,Rt,ot){if(O===gi){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(F(n.BLEND),v=!0),O!==A_){if(O!==m||ot!==y){if((d!==Vi||g!==Vi)&&(n.blendEquation(n.FUNC_ADD),d=Vi,g=Vi),ot)switch(O){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFunc(n.ONE,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ru:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,S=null,L=null,w=null,R.set(0,0,0),U=0,m=O,y=ot}return}we=we||Me,Ae=Ae||Q,Ge=Ge||ue,(Me!==d||we!==g)&&(n.blendEquationSeparate(C[Me],C[we]),d=Me,g=we),(Q!==b||ue!==S||Ae!==L||Ge!==w)&&(n.blendFuncSeparate(P[Q],P[ue],P[Ae],P[Ge]),b=Q,S=ue,L=Ae,w=Ge),(gt.equals(R)===!1||Rt!==U)&&(n.blendColor(gt.r,gt.g,gt.b,Rt),R.copy(gt),U=Rt),m=O,y=!1}function te(O,Me){O.side===$n?ne(n.CULL_FACE):F(n.CULL_FACE);let Q=O.side===Wt;Me&&(Q=!Q),K(Q),O.blending===bs&&O.transparent===!1?E(gi):E(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const ue=O.stencilWrite;a.setTest(ue),ue&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){M!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),M=O)}function q(O){O!==y_?(F(n.CULL_FACE),O!==D&&(O===wu?n.cullFace(n.BACK):O===T_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),D=O}function ee(O){O!==N&&(W&&n.lineWidth(O),N=O)}function le(O,Me,Q){O?(F(n.POLYGON_OFFSET_FILL),(B!==Me||$!==Q)&&(n.polygonOffset(Me,Q),B=Me,$=Q)):ne(n.POLYGON_OFFSET_FILL)}function J(O){O?F(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function T(O){O===void 0&&(O=n.TEXTURE0+re-1),he!==O&&(n.activeTexture(O),he=O)}function x(O,Me,Q){Q===void 0&&(he===null?Q=n.TEXTURE0+re-1:Q=he);let ue=_e[Q];ue===void 0&&(ue={type:void 0,texture:void 0},_e[Q]=ue),(ue.type!==O||ue.texture!==Me)&&(he!==Q&&(n.activeTexture(Q),he=Q),n.bindTexture(O,Me||Se[O]),ue.type=O,ue.texture=Me)}function I(){const O=_e[he];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function G(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(O){qe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function xe(O){se.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),se.copy(O))}function Be(O,Me){let Q=c.get(Me);Q===void 0&&(Q=new WeakMap,c.set(Me,Q));let ue=Q.get(O);ue===void 0&&(ue=n.getUniformBlockIndex(Me,O.name),Q.set(O,ue))}function Oe(O,Me){const ue=c.get(Me).get(O);l.get(Me)!==ue&&(n.uniformBlockBinding(Me,ue,O.__bindingPointIndex),l.set(Me,ue))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,_e={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,b=null,S=null,g=null,L=null,w=null,R=new je(0,0,0),U=0,y=!1,M=null,D=null,N=null,B=null,$=null,qe.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:ne,bindFramebuffer:oe,drawBuffers:ae,useProgram:Ie,setBlending:E,setMaterial:te,setFlipSided:K,setCullFace:q,setLineWidth:ee,setPolygonOffset:le,setScissorTest:J,activeTexture:T,bindTexture:x,unbindTexture:I,compressedTexImage2D:G,compressedTexImage3D:Y,texImage2D:Ee,texImage3D:De,updateUBOMapping:Be,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:fe,texSubImage2D:X,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Fe,viewport:xe,reset:Ze}}function EE(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return p?new OffscreenCanvas(T,x):_o("canvas")}function v(T,x,I){let G=1;const Y=J(T);if((Y.width>I||Y.height>I)&&(G=I/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(G*Y.width),me=Math.floor(G*Y.height);f===void 0&&(f=_(X,me));const ce=x?_(X,me):f;return ce.width=X,ce.height=me,ce.getContext("2d").drawImage(T,0,0,X,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+X+"x"+me+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,x,I,G,Y=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),x===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),x===n.RGBA){const me=Y?mo:Qe.getTransfer(G);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=me===at?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function g(T,x){let I;return T?x===null||x===ji||x===Is?I=n.DEPTH24_STENCIL8:x===jn?I=n.DEPTH32F_STENCIL8:x===gr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ji||x===Is?I=n.DEPTH_COMPONENT24:x===jn?I=n.DEPTH_COMPONENT32F:x===gr&&(I=n.DEPTH_COMPONENT16),I}function L(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==yn&&T.minFilter!==Dn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){const x=T.target;x.removeEventListener("dispose",w),U(x),x.isVideoTexture&&u.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),M(x)}function U(T){const x=i.get(T);if(x.__webglInit===void 0)return;const I=T.source,G=h.get(I);if(G){const Y=G[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&y(T),Object.keys(G).length===0&&h.delete(I)}i.remove(T)}function y(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const I=T.source,G=h.get(I);delete G[x.__cacheKey],o.memory.textures--}function M(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let Y=0;Y<x.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=T.textures;for(let G=0,Y=I.length;G<Y;G++){const X=i.get(I[G]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(I[G])}i.remove(T)}let D=0;function N(){D=0}function B(){const T=D;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),D+=1,T}function $(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function re(T,x){const I=i.get(T);if(T.isVideoTexture&&ee(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const G=T.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(I,T,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function W(T,x){const I=i.get(T);if(T.version>0&&I.__version!==T.version){se(I,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function ie(T,x){const I=i.get(T);if(T.version>0&&I.__version!==T.version){se(I,T,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function k(T,x){const I=i.get(T);if(T.version>0&&I.__version!==T.version){pe(I,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const he={[ul]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},_e={[yn]:n.NEAREST,[Q_]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[ia]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},Te={[i0]:n.NEVER,[c0]:n.ALWAYS,[s0]:n.LESS,[_d]:n.LEQUAL,[r0]:n.EQUAL,[l0]:n.GEQUAL,[o0]:n.GREATER,[a0]:n.NOTEQUAL};function Pe(T,x){if(x.type===jn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Dn||x.magFilter===ia||x.magFilter===Pr||x.magFilter===Wi||x.minFilter===Dn||x.minFilter===ia||x.minFilter===Pr||x.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,he[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===yn||x.minFilter!==Pr&&x.minFilter!==Wi||x.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function qe(T,x){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",w));const G=x.source;let Y=h.get(G);Y===void 0&&(Y={},h.set(G,Y));const X=$(x);if(X!==T.__cacheKey){Y[X]===void 0&&(Y[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Y[X].usedTimes++;const me=Y[T.__cacheKey];me!==void 0&&(Y[T.__cacheKey].usedTimes--,me.usedTimes===0&&y(x)),T.__cacheKey=X,T.__webglTexture=Y[X].texture}return I}function se(T,x,I){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const Y=qe(T,x),X=x.source;t.bindTexture(G,T.__webglTexture,n.TEXTURE0+I);const me=i.get(X);if(X.version!==me.__version||Y===!0){t.activeTexture(n.TEXTURE0+I);const ce=Qe.getPrimaries(Qe.workingColorSpace),ge=x.colorSpace===pi?null:Qe.getPrimaries(x.colorSpace),Le=x.colorSpace===pi||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let fe=v(x.image,!1,s.maxTextureSize);fe=le(x,fe);const Ee=r.convert(x.format,x.colorSpace),De=r.convert(x.type);let Fe=S(x.internalFormat,Ee,De,x.colorSpace,x.isVideoTexture);Pe(G,x);let xe;const Be=x.mipmaps,Oe=x.isVideoTexture!==!0,Ze=me.__version===void 0||Y===!0,O=X.dataReady,Me=L(x,fe);if(x.isDepthTexture)Fe=g(x.format===Us,x.type),Ze&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Fe,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Fe,fe.width,fe.height,0,Ee,De,null));else if(x.isDataTexture)if(Be.length>0){Oe&&Ze&&t.texStorage2D(n.TEXTURE_2D,Me,Fe,Be[0].width,Be[0].height);for(let Q=0,ue=Be.length;Q<ue;Q++)xe=Be[Q],Oe?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,Ee,De,xe.data):t.texImage2D(n.TEXTURE_2D,Q,Fe,xe.width,xe.height,0,Ee,De,xe.data);x.generateMipmaps=!1}else Oe?(Ze&&t.texStorage2D(n.TEXTURE_2D,Me,Fe,fe.width,fe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Ee,De,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,fe.width,fe.height,0,Ee,De,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Fe,Be[0].width,Be[0].height,fe.depth);for(let Q=0,ue=Be.length;Q<ue;Q++)if(xe=Be[Q],x.format!==Mn)if(Ee!==null)if(Oe){if(O)if(x.layerUpdates.size>0){const we=nf(xe.width,xe.height,x.format,x.type);for(const Ae of x.layerUpdates){const Ge=xe.data.subarray(Ae*we/xe.data.BYTES_PER_ELEMENT,(Ae+1)*we/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ae,xe.width,xe.height,1,Ee,Ge)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,xe.width,xe.height,fe.depth,Ee,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Fe,xe.width,xe.height,fe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,xe.width,xe.height,fe.depth,Ee,De,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Fe,xe.width,xe.height,fe.depth,0,Ee,De,xe.data)}else{Oe&&Ze&&t.texStorage2D(n.TEXTURE_2D,Me,Fe,Be[0].width,Be[0].height);for(let Q=0,ue=Be.length;Q<ue;Q++)xe=Be[Q],x.format!==Mn?Ee!==null?Oe?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,Ee,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,xe.width,xe.height,Ee,De,xe.data):t.texImage2D(n.TEXTURE_2D,Q,Fe,xe.width,xe.height,0,Ee,De,xe.data)}else if(x.isDataArrayTexture)if(Oe){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Fe,fe.width,fe.height,fe.depth),O)if(x.layerUpdates.size>0){const Q=nf(fe.width,fe.height,x.format,x.type);for(const ue of x.layerUpdates){const we=fe.data.subarray(ue*Q/fe.data.BYTES_PER_ELEMENT,(ue+1)*Q/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Ee,De,we)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ee,De,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,fe.width,fe.height,fe.depth,0,Ee,De,fe.data);else if(x.isData3DTexture)Oe?(Ze&&t.texStorage3D(n.TEXTURE_3D,Me,Fe,fe.width,fe.height,fe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ee,De,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,fe.width,fe.height,fe.depth,0,Ee,De,fe.data);else if(x.isFramebufferTexture){if(Ze)if(Oe)t.texStorage2D(n.TEXTURE_2D,Me,Fe,fe.width,fe.height);else{let Q=fe.width,ue=fe.height;for(let we=0;we<Me;we++)t.texImage2D(n.TEXTURE_2D,we,Fe,Q,ue,0,Ee,De,null),Q>>=1,ue>>=1}}else if(Be.length>0){if(Oe&&Ze){const Q=J(Be[0]);t.texStorage2D(n.TEXTURE_2D,Me,Fe,Q.width,Q.height)}for(let Q=0,ue=Be.length;Q<ue;Q++)xe=Be[Q],Oe?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Ee,De,xe):t.texImage2D(n.TEXTURE_2D,Q,Fe,Ee,De,xe);x.generateMipmaps=!1}else if(Oe){if(Ze){const Q=J(fe);t.texStorage2D(n.TEXTURE_2D,Me,Fe,Q.width,Q.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,De,fe)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Ee,De,fe);m(x)&&d(G),me.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function pe(T,x,I){if(x.image.length!==6)return;const G=qe(T,x),Y=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+I);const X=i.get(Y);if(Y.version!==X.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const me=Qe.getPrimaries(Qe.workingColorSpace),ce=x.colorSpace===pi?null:Qe.getPrimaries(x.colorSpace),ge=x.colorSpace===pi||me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!Le&&!fe?Ee[ue]=v(x.image[ue],!0,s.maxCubemapSize):Ee[ue]=fe?x.image[ue].image:x.image[ue],Ee[ue]=le(x,Ee[ue]);const De=Ee[0],Fe=r.convert(x.format,x.colorSpace),xe=r.convert(x.type),Be=S(x.internalFormat,Fe,xe,x.colorSpace),Oe=x.isVideoTexture!==!0,Ze=X.__version===void 0||G===!0,O=Y.dataReady;let Me=L(x,De);Pe(n.TEXTURE_CUBE_MAP,x);let Q;if(Le){Oe&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Be,De.width,De.height);for(let ue=0;ue<6;ue++){Q=Ee[ue].mipmaps;for(let we=0;we<Q.length;we++){const Ae=Q[we];x.format!==Mn?Fe!==null?Oe?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Ae.width,Ae.height,Fe,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,0,0,Ae.width,Ae.height,Fe,xe,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we,Be,Ae.width,Ae.height,0,Fe,xe,Ae.data)}}}else{if(Q=x.mipmaps,Oe&&Ze){Q.length>0&&Me++;const ue=J(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Be,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){Oe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Fe,xe,Ee[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Ee[ue].width,Ee[ue].height,0,Fe,xe,Ee[ue].data);for(let we=0;we<Q.length;we++){const Ge=Q[we].image[ue].image;Oe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Ge.width,Ge.height,Fe,xe,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Be,Ge.width,Ge.height,0,Fe,xe,Ge.data)}}else{Oe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Fe,xe,Ee[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Be,Fe,xe,Ee[ue]);for(let we=0;we<Q.length;we++){const Ae=Q[we];Oe?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,0,0,Fe,xe,Ae.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,we+1,Be,Fe,xe,Ae.image[ue])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),X.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Se(T,x,I,G,Y,X){const me=r.convert(I.format,I.colorSpace),ce=r.convert(I.type),ge=S(I.internalFormat,me,ce,I.colorSpace),Le=i.get(x),fe=i.get(I);if(fe.__renderTarget=x,!Le.__hasExternalTextures){const Ee=Math.max(1,x.width>>X),De=Math.max(1,x.height>>X);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,X,ge,Ee,De,x.depth,0,me,ce,null):t.texImage2D(Y,X,ge,Ee,De,0,me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,Y,fe.__webglTexture,0,K(x)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,Y,fe.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(T,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const G=x.depthTexture,Y=G&&G.isDepthTexture?G.type:null,X=g(x.stencilBuffer,Y),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=K(x);q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,X,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,T)}else{const G=x.textures;for(let Y=0;Y<G.length;Y++){const X=G[Y],me=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),ge=S(X.internalFormat,me,ce,X.colorSpace),Le=K(x);I&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,ge,x.width,x.height):q(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,ge,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ge,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ne(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(x.depthTexture);G.__renderTarget=x,(!G.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const Y=G.__webglTexture,X=K(x);if(x.depthTexture.format===As)q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(x.depthTexture.format===Us)q(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function oe(T){const x=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const G=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=G}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ne(x.__webglFramebuffer,T)}else if(I){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=n.createRenderbuffer(),F(x.__webglDepthbuffer[G],T,!1);else{const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[G];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),F(x.__webglDepthbuffer,T,!1);else{const G=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Y)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(T,x,I){const G=i.get(T);x!==void 0&&Se(G.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&oe(T)}function Ie(T){const x=T.texture,I=i.get(T),G=i.get(x);T.addEventListener("dispose",R);const Y=T.textures,X=T.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[ce]=[];for(let ge=0;ge<x.mipmaps.length;ge++)I.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else I.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let ce=0;ce<x.mipmaps.length;ce++)I.__webglFramebuffer[ce]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(me)for(let ce=0,ge=Y.length;ce<ge;ce++){const Le=i.get(Y[ce]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&q(T)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ce=0;ce<Y.length;ce++){const ge=Y[ce];I.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[ce]);const Le=r.convert(ge.format,ge.colorSpace),fe=r.convert(ge.type),Ee=S(ge.internalFormat,Le,fe,ge.colorSpace,T.isXRRenderTarget===!0),De=K(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,I.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),F(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Pe(n.TEXTURE_CUBE_MAP,x);for(let ce=0;ce<6;ce++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Se(I.__webglFramebuffer[ce][ge],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Se(I.__webglFramebuffer[ce],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ce=0,ge=Y.length;ce<ge;ce++){const Le=Y[ce],fe=i.get(Le);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Pe(n.TEXTURE_2D,Le),Se(I.__webglFramebuffer,T,Le,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(Le)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,G.__webglTexture),Pe(ce,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Se(I.__webglFramebuffer[ge],T,x,n.COLOR_ATTACHMENT0,ce,ge);else Se(I.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ce,0);m(x)&&d(ce),t.unbindTexture()}T.depthBuffer&&oe(T)}function C(T){const x=T.textures;for(let I=0,G=x.length;I<G;I++){const Y=x[I];if(m(Y)){const X=b(T),me=i.get(Y).__webglTexture;t.bindTexture(X,me),d(X),t.unbindTexture()}}}const P=[],E=[];function te(T){if(T.samples>0){if(q(T)===!1){const x=T.textures,I=T.width,G=T.height;let Y=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(T),ce=x.length>1;if(ce)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Le=i.get(x[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Le,0)}n.blitFramebuffer(0,0,I,G,0,0,I,G,Y,n.NEAREST),l===!0&&(P.length=0,E.length=0,P.push(n.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(P.push(X),E.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,me.__webglColorRenderbuffer[ge]);const Le=i.get(x[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function K(T){return Math.min(s.maxSamples,T.samples)}function q(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function le(T,x){const I=T.colorSpace,G=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Ns&&I!==pi&&(Qe.getTransfer(I)===at?(G!==Mn||Y!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function J(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=re,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=k,this.rebindTextures=ae,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=q}function yE(n,e){function t(i,s=pi){let r;const o=Qe.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===ac)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return n.BYTE;if(i===ad)return n.SHORT;if(i===gr)return n.UNSIGNED_SHORT;if(i===oc)return n.INT;if(i===ji)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===xr)return n.HALF_FLOAT;if(i===cd)return n.ALPHA;if(i===ud)return n.RGB;if(i===Mn)return n.RGBA;if(i===fd)return n.LUMINANCE;if(i===hd)return n.LUMINANCE_ALPHA;if(i===As)return n.DEPTH_COMPONENT;if(i===Us)return n.DEPTH_STENCIL;if(i===dd)return n.RED;if(i===cc)return n.RED_INTEGER;if(i===pd)return n.RG;if(i===uc)return n.RG_INTEGER;if(i===fc)return n.RGBA_INTEGER;if(i===to||i===no||i===io||i===so)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hl||i===dl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===_l||i===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===_l)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===Ml||i===Sl||i===El||i===yl||i===Tl||i===bl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Dl||i===Ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ll)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===Il||i===Ul)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===md||i===Nl||i===Fl||i===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ro)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mi({vertexShader:TE,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tn(new Oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wE extends Os{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=new AE,m=t.getContextAttributes();let d=null,b=null;const S=[],g=[],L=new $e;let w=null;const R=new Zt;R.viewport=new ct;const U=new Zt;U.viewport=new ct;const y=[R,U],M=new Y0;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=S[se];return pe===void 0&&(pe=new ba,S[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=S[se];return pe===void 0&&(pe=new ba,S[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=S[se];return pe===void 0&&(pe=new ba,S[se]=pe),pe.getHandSpace()};function B(se){const pe=g.indexOf(se.inputSource);if(pe===-1)return;const Se=S[pe];Se!==void 0&&(Se.update(se.inputSource,se.frame,c||o),Se.dispatchEvent({type:se.type,data:se.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let se=0;se<S.length;se++){const pe=g[se];pe!==null&&(g[se]=null,S[se].disconnect(pe))}D=null,N=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,s=null,b=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(se){if(s=se,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,F=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?Us:As,F=m.stencil?Is:ji);const oe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(oe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Ki(h.textureWidth,h.textureHeight,{format:Mn,type:Jn,depthTexture:new Pd(h.textureWidth,h.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ki(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function re(se){for(let pe=0;pe<se.removed.length;pe++){const Se=se.removed[pe],F=g.indexOf(Se);F>=0&&(g[F]=null,S[F].disconnect(Se))}for(let pe=0;pe<se.added.length;pe++){const Se=se.added[pe];let F=g.indexOf(Se);if(F===-1){for(let oe=0;oe<S.length;oe++)if(oe>=g.length){g.push(Se),F=oe;break}else if(g[oe]===null){g[oe]=Se,F=oe;break}if(F===-1)break}const ne=S[F];ne&&ne.connect(Se)}}const W=new V,ie=new V;function k(se,pe,Se){W.setFromMatrixPosition(pe.matrixWorld),ie.setFromMatrixPosition(Se.matrixWorld);const F=W.distanceTo(ie),ne=pe.projectionMatrix.elements,oe=Se.projectionMatrix.elements,ae=ne[14]/(ne[10]-1),Ie=ne[14]/(ne[10]+1),C=(ne[9]+1)/ne[5],P=(ne[9]-1)/ne[5],E=(ne[8]-1)/ne[0],te=(oe[8]+1)/oe[0],K=ae*E,q=ae*te,ee=F/(-E+te),le=ee*-E;if(pe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(le),se.translateZ(ee),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ne[10]===-1)se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const J=ae+ee,T=Ie+ee,x=K-le,I=q+(F-le),G=C*Ie/T*J,Y=P*Ie/T*J;se.projectionMatrix.makePerspective(x,I,G,Y,J,T),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function he(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(s===null)return;let pe=se.near,Se=se.far;v.texture!==null&&(v.depthNear>0&&(pe=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),M.near=U.near=R.near=pe,M.far=U.far=R.far=Se,(D!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,N=M.far),R.layers.mask=se.layers.mask|2,U.layers.mask=se.layers.mask|4,M.layers.mask=R.layers.mask|U.layers.mask;const F=se.parent,ne=M.cameras;he(M,F);for(let oe=0;oe<ne.length;oe++)he(ne[oe],F);ne.length===2?k(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),_e(se,M,F)};function _e(se,pe,Se){Se===null?se.matrix.copy(pe.matrixWorld):(se.matrix.copy(Se.matrixWorld),se.matrix.invert(),se.matrix.multiply(pe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(pe.projectionMatrix),se.projectionMatrixInverse.copy(pe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Bl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Te=null;function Pe(se,pe){if(u=pe.getViewerPose(c||o),_=pe,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let F=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,F=!0);for(let ae=0;ae<Se.length;ae++){const Ie=Se[ae];let C=null;if(p!==null)C=p.getViewport(Ie);else{const E=f.getViewSubImage(h,Ie);C=E.viewport,ae===0&&(e.setRenderTargetTextures(b,E.colorTexture,h.ignoreDepthValues?void 0:E.depthStencilTexture),e.setRenderTarget(b))}let P=y[ae];P===void 0&&(P=new Zt,P.layers.enable(ae),P.viewport=new ct,y[ae]=P),P.matrix.fromArray(Ie.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ie.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(C.x,C.y,C.width,C.height),ae===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),F===!0&&M.cameras.push(P)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const ae=f.getDepthInformation(Se[0]);ae&&ae.isValid&&ae.texture&&v.init(e,ae,s.renderState)}}for(let Se=0;Se<S.length;Se++){const F=g[Se],ne=S[Se];F!==null&&ne!==void 0&&ne.update(F,pe,c||o)}Te&&Te(se,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),_=null}const qe=new Id;qe.setAnimationLoop(Pe),this.setAnimationLoop=function(se){Te=se},this.dispose=function(){}}}const Ni=new Un,RE=new mt;function CE(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,bd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,S,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,g)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,S):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Wt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Wt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=e.get(d),S=b.envMap,g=b.envMapRotation;S&&(m.envMap.value=S,Ni.copy(g),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(Ni)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,S){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=S*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const b=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const g=S.program;i.uniformBlockBinding(b,g)}function c(b,S){let g=s[b.id];g===void 0&&(_(b),g=u(b),s[b.id]=g,b.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(b,L);const w=e.render.frame;r[b.id]!==w&&(h(b),r[b.id]=w)}function u(b){const S=f();b.__bindingPointIndex=S;const g=n.createBuffer(),L=b.__size,w=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,L,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,g),g}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=s[b.id],g=b.uniforms,L=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let w=0,R=g.length;w<R;w++){const U=Array.isArray(g[w])?g[w]:[g[w]];for(let y=0,M=U.length;y<M;y++){const D=U[y];if(p(D,w,y,L)===!0){const N=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let $=0;for(let re=0;re<B.length;re++){const W=B[re],ie=v(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,N+$,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,$),$+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(b,S,g,L){const w=b.value,R=S+"_"+g;if(L[R]===void 0)return typeof w=="number"||typeof w=="boolean"?L[R]=w:L[R]=w.clone(),!0;{const U=L[R];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return L[R]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function _(b){const S=b.uniforms;let g=0;const L=16;for(let R=0,U=S.length;R<U;R++){const y=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,D=y.length;M<D;M++){const N=y[M],B=Array.isArray(N.value)?N.value:[N.value];for(let $=0,re=B.length;$<re;$++){const W=B[$],ie=v(W),k=g%L,he=k%ie.boundary,_e=k+he;g+=he,_e!==0&&L-_e<ie.storage&&(g+=L-_e),N.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=g,g+=ie.storage}}}const w=g%L;return w>0&&(g+=L-w),b.__size=g,b.__cache={},this}function v(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const g=o.indexOf(S.__bindingPointIndex);o.splice(g,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class DE{constructor(e={}){const{canvas:t=f0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=_i,this.toneMappingExposure=1;const g=this;let L=!1,w=0,R=0,U=null,y=-1,M=null;const D=new ct,N=new ct;let B=null;const $=new je(0);let re=0,W=t.width,ie=t.height,k=1,he=null,_e=null;const Te=new ct(0,0,W,ie),Pe=new ct(0,0,W,ie);let qe=!1;const se=new pc;let pe=!1,Se=!1;this.transmissionResolutionScale=1;const F=new mt,ne=new mt,oe=new V,ae=new ct,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function P(){return U===null?k:1}let E=i;function te(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),E===null){const z="webgl2";if(E=te(z,A),E===null)throw te(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,q,ee,le,J,T,x,I,G,Y,X,me,ce,ge,Le,fe,Ee,De,Fe,xe,Be,Oe,Ze,O;function Me(){K=new VM(E),K.init(),Oe=new yE(E,K),q=new UM(E,K,e,Oe),ee=new SE(E,K),q.reverseDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),le=new WM(E),J=new lE,T=new EE(E,K,ee,J,q,Oe,le),x=new FM(g),I=new HM(g),G=new K0(E),Ze=new LM(E,G),Y=new kM(E,G,le,Ze),X=new qM(E,Y,G,le),Fe=new XM(E,q,T),fe=new NM(J),me=new aE(g,x,I,K,q,Ze,fe),ce=new CE(g,J),ge=new uE,Le=new gE(K),De=new DM(g,x,I,ee,X,p,l),Ee=new xE(g,X,q),O=new PE(E,le,q,ee),xe=new IM(E,K,le),Be=new GM(E,K,le),le.programs=me.programs,g.capabilities=q,g.extensions=K,g.properties=J,g.renderLists=ge,g.shadowMap=Ee,g.state=ee,g.info=le}Me();const Q=new wE(g,E);this.xr=Q,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(W,ie,!1))},this.getSize=function(A){return A.set(W,ie)},this.setSize=function(A,z,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ie=z,t.width=Math.floor(A*k),t.height=Math.floor(z*k),j===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*k,ie*k).floor()},this.setDrawingBufferSize=function(A,z,j){W=A,ie=z,k=j,t.width=Math.floor(A*j),t.height=Math.floor(z*j),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Te)},this.setViewport=function(A,z,j,Z){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,z,j,Z),ee.viewport(D.copy(Te).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,z,j,Z){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,z,j,Z),ee.scissor(N.copy(Pe).multiplyScalar(k).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){ee.setScissorTest(qe=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,j=!0){let Z=0;if(A){let H=!1;if(U!==null){const de=U.texture.format;H=de===fc||de===uc||de===cc}if(H){const de=U.texture.type,be=de===Jn||de===ji||de===gr||de===Is||de===ac||de===lc,Re=De.getClearColor(),Ce=De.getClearAlpha(),He=Re.r,Ve=Re.g,Ue=Re.b;be?(_[0]=He,_[1]=Ve,_[2]=Ue,_[3]=Ce,E.clearBufferuiv(E.COLOR,0,_)):(v[0]=He,v[1]=Ve,v[2]=Ue,v[3]=Ce,E.clearBufferiv(E.COLOR,0,v))}else Z|=E.COLOR_BUFFER_BIT}z&&(Z|=E.DEPTH_BUFFER_BIT),j&&(Z|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),De.dispose(),ge.dispose(),Le.dispose(),J.dispose(),x.dispose(),I.dispose(),X.dispose(),Ze.dispose(),O.dispose(),me.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Mc),Q.removeEventListener("sessionend",Sc),Ti.stop()};function ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const A=le.autoReset,z=Ee.enabled,j=Ee.autoUpdate,Z=Ee.needsUpdate,H=Ee.type;Me(),le.autoReset=A,Ee.enabled=z,Ee.autoUpdate=j,Ee.needsUpdate=Z,Ee.type=H}function Ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ge(A){const z=A.target;z.removeEventListener("dispose",Ge),gt(z)}function gt(A){Rt(A),J.remove(A)}function Rt(A){const z=J.get(A).programs;z!==void 0&&(z.forEach(function(j){me.releaseProgram(j)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,j,Z,H,de){z===null&&(z=Ie);const be=H.isMesh&&H.matrixWorld.determinant()<0,Re=zd(A,z,j,Z,H);ee.setMaterial(Z,be);let Ce=j.index,He=1;if(Z.wireframe===!0){if(Ce=Y.getWireframeAttribute(j),Ce===void 0)return;He=2}const Ve=j.drawRange,Ue=j.attributes.position;let Ke=Ve.start*He,tt=(Ve.start+Ve.count)*He;de!==null&&(Ke=Math.max(Ke,de.start*He),tt=Math.min(tt,(de.start+de.count)*He)),Ce!==null?(Ke=Math.max(Ke,0),tt=Math.min(tt,Ce.count)):Ue!=null&&(Ke=Math.max(Ke,0),tt=Math.min(tt,Ue.count));const xt=tt-Ke;if(xt<0||xt===1/0)return;Ze.setup(H,Z,Re,j,Ce);let _t,Je=xe;if(Ce!==null&&(_t=G.get(Ce),Je=Be,Je.setIndex(_t)),H.isMesh)Z.wireframe===!0?(ee.setLineWidth(Z.wireframeLinewidth*P()),Je.setMode(E.LINES)):Je.setMode(E.TRIANGLES);else if(H.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),ee.setLineWidth(Ne*P()),H.isLineSegments?Je.setMode(E.LINES):H.isLineLoop?Je.setMode(E.LINE_LOOP):Je.setMode(E.LINE_STRIP)}else H.isPoints?Je.setMode(E.POINTS):H.isSprite&&Je.setMode(E.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Oi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Je.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ne=H._multiDrawStarts,At=H._multiDrawCounts,nt=H._multiDrawCount,pn=Ce?G.get(Ce).bytesPerElement:1,es=J.get(Z).currentProgram.getUniforms();for(let qt=0;qt<nt;qt++)es.setValue(E,"_gl_DrawID",qt),Je.render(Ne[qt]/pn,At[qt])}else if(H.isInstancedMesh)Je.renderInstances(Ke,xt,H.count);else if(j.isInstancedBufferGeometry){const Ne=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,At=Math.min(j.instanceCount,Ne);Je.renderInstances(Ke,xt,At)}else Je.render(Ke,xt)};function ot(A,z,j){A.transparent===!0&&A.side===$n&&A.forceSinglePass===!1?(A.side=Wt,A.needsUpdate=!0,br(A,z,j),A.side=xi,A.needsUpdate=!0,br(A,z,j),A.side=$n):br(A,z,j)}this.compile=function(A,z,j=null){j===null&&(j=A),d=Le.get(j),d.init(z),S.push(d),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),A!==j&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const Z=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const de=H.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Re=de[be];ot(Re,j,H),Z.add(Re)}else ot(de,j,H),Z.add(de)}),d=S.pop(),Z},this.compileAsync=function(A,z,j=null){const Z=this.compile(A,z,j);return new Promise(H=>{function de(){if(Z.forEach(function(be){J.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){H(A);return}setTimeout(de,10)}K.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let dn=null;function Nn(A){dn&&dn(A)}function Mc(){Ti.stop()}function Sc(){Ti.start()}const Ti=new Id;Ti.setAnimationLoop(Nn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){dn=A,Q.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},Q.addEventListener("sessionstart",Mc),Q.addEventListener("sessionend",Sc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,z,U),d=Le.get(A,S.length),d.init(z),S.push(d),ne.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),se.setFromProjectionMatrix(ne),Se=this.localClippingEnabled,pe=fe.init(this.clippingPlanes,Se),m=ge.get(A,b.length),m.init(),b.push(m),Q.enabled===!0&&Q.isPresenting===!0){const de=g.xr.getDepthSensingMesh();de!==null&&Ho(de,z,-1/0,g.sortObjects)}Ho(A,z,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(he,_e),C=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,C&&De.addToRenderList(m,A),this.info.render.frame++,pe===!0&&fe.beginShadows();const j=d.state.shadowsArray;Ee.render(j,A,z),pe===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(d.setupLights(),z.isArrayCamera){const de=z.cameras;if(H.length>0)for(let be=0,Re=de.length;be<Re;be++){const Ce=de[be];yc(Z,H,A,Ce)}C&&De.render(A);for(let be=0,Re=de.length;be<Re;be++){const Ce=de[be];Ec(m,A,Ce,Ce.viewport)}}else H.length>0&&yc(Z,H,A,z),C&&De.render(A),Ec(m,A,z);U!==null&&R===0&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(g,A,z),Ze.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(d=S[S.length-1],pe===!0&&fe.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ho(A,z,j,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){Z&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ne);const be=X.update(A),Re=A.material;Re.visible&&m.push(A,be,Re,j,ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){const be=X.update(A),Re=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ae.copy(be.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(ne)),Array.isArray(Re)){const Ce=be.groups;for(let He=0,Ve=Ce.length;He<Ve;He++){const Ue=Ce[He],Ke=Re[Ue.materialIndex];Ke&&Ke.visible&&m.push(A,be,Ke,j,ae.z,Ue)}}else Re.visible&&m.push(A,be,Re,j,ae.z,null)}}const de=A.children;for(let be=0,Re=de.length;be<Re;be++)Ho(de[be],z,j,Z)}function Ec(A,z,j,Z){const H=A.opaque,de=A.transmissive,be=A.transparent;d.setupLightsView(j),pe===!0&&fe.setGlobalState(g.clippingPlanes,j),Z&&ee.viewport(D.copy(Z)),H.length>0&&Tr(H,z,j),de.length>0&&Tr(de,z,j),be.length>0&&Tr(be,z,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function yc(A,z,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new Ki(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?xr:Jn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const de=d.state.transmissionRenderTarget[Z.id],be=Z.viewport||D;de.setSize(be.z*g.transmissionResolutionScale,be.w*g.transmissionResolutionScale);const Re=g.getRenderTarget();g.setRenderTarget(de),g.getClearColor($),re=g.getClearAlpha(),re<1&&g.setClearColor(16777215,.5),g.clear(),C&&De.render(j);const Ce=g.toneMapping;g.toneMapping=_i;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),pe===!0&&fe.setGlobalState(g.clippingPlanes,Z),Tr(A,j,Z),T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de),K.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ue=0,Ke=z.length;Ue<Ke;Ue++){const tt=z[Ue],xt=tt.object,_t=tt.geometry,Je=tt.material,Ne=tt.group;if(Je.side===$n&&xt.layers.test(Z.layers)){const At=Je.side;Je.side=Wt,Je.needsUpdate=!0,Tc(xt,j,Z,_t,Je,Ne),Je.side=At,Je.needsUpdate=!0,Ve=!0}}Ve===!0&&(T.updateMultisampleRenderTarget(de),T.updateRenderTargetMipmap(de))}g.setRenderTarget(Re),g.setClearColor($,re),He!==void 0&&(Z.viewport=He),g.toneMapping=Ce}function Tr(A,z,j){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,de=A.length;H<de;H++){const be=A[H],Re=be.object,Ce=be.geometry,He=Z===null?be.material:Z,Ve=be.group;Re.layers.test(j.layers)&&Tc(Re,z,j,Ce,He,Ve)}}function Tc(A,z,j,Z,H,de){A.onBeforeRender(g,z,j,Z,H,de),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(g,z,j,Z,A,de),H.transparent===!0&&H.side===$n&&H.forceSinglePass===!1?(H.side=Wt,H.needsUpdate=!0,g.renderBufferDirect(j,z,Z,H,A,de),H.side=xi,H.needsUpdate=!0,g.renderBufferDirect(j,z,Z,H,A,de),H.side=$n):g.renderBufferDirect(j,z,Z,H,A,de),A.onAfterRender(g,z,j,Z,H,de)}function br(A,z,j){z.isScene!==!0&&(z=Ie);const Z=J.get(A),H=d.state.lights,de=d.state.shadowsArray,be=H.state.version,Re=me.getParameters(A,H.state,de,z,j),Ce=me.getProgramCacheKey(Re);let He=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?I:x).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",Ge),He=new Map,Z.programs=He);let Ve=He.get(Ce);if(Ve!==void 0){if(Z.currentProgram===Ve&&Z.lightsStateVersion===be)return Ac(A,Re),Ve}else Re.uniforms=me.getUniforms(A),A.onBeforeCompile(Re,g),Ve=me.acquireProgram(Re,Ce),He.set(Ce,Ve),Z.uniforms=Re.uniforms;const Ue=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Ac(A,Re),Z.needsLights=Vd(A),Z.lightsStateVersion=be,Z.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMap.value=H.state.directionalShadowMap,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotShadowMap.value=H.state.spotShadowMap,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMap.value=H.state.pointShadowMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Ve,Z.uniformsList=null,Ve}function bc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ac(A,z){const j=J.get(A);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function zd(A,z,j,Z,H){z.isScene!==!0&&(z=Ie),T.resetTextureUnits();const de=z.fog,be=Z.isMeshStandardMaterial?z.environment:null,Re=U===null?g.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ns,Ce=(Z.isMeshStandardMaterial?I:x).get(Z.envMap||be),He=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,tt=!!j.morphAttributes.color;let xt=_i;Z.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=g.toneMapping);const _t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Je=_t!==void 0?_t.length:0,Ne=J.get(Z),At=d.state.lights;if(pe===!0&&(Se===!0||A!==M)){const Nt=A===M&&Z.id===y;fe.setState(Z,A,Nt)}let nt=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==At.state.version||Ne.outputColorSpace!==Re||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==Ce||Z.fog===!0&&Ne.fog!==de||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==fe.numPlanes||Ne.numIntersection!==fe.numIntersection)||Ne.vertexAlphas!==He||Ne.vertexTangents!==Ve||Ne.morphTargets!==Ue||Ne.morphNormals!==Ke||Ne.morphColors!==tt||Ne.toneMapping!==xt||Ne.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Ne.__version=Z.version);let pn=Ne.currentProgram;nt===!0&&(pn=br(Z,z,H));let es=!1,qt=!1,zs=!1;const pt=pn.getUniforms(),sn=Ne.uniforms;if(ee.useProgram(pn.program)&&(es=!0,qt=!0,zs=!0),Z.id!==y&&(y=Z.id,qt=!0),es||M!==A){ee.buffers.depth.getReversed()?(F.copy(A.projectionMatrix),d0(F),p0(F),pt.setValue(E,"projectionMatrix",F)):pt.setValue(E,"projectionMatrix",A.projectionMatrix),pt.setValue(E,"viewMatrix",A.matrixWorldInverse);const Ht=pt.map.cameraPosition;Ht!==void 0&&Ht.setValue(E,oe.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&pt.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&pt.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,qt=!0,zs=!0)}if(H.isSkinnedMesh){pt.setOptional(E,H,"bindMatrix"),pt.setOptional(E,H,"bindMatrixInverse");const Nt=H.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),pt.setValue(E,"boneTexture",Nt.boneTexture,T))}H.isBatchedMesh&&(pt.setOptional(E,H,"batchingTexture"),pt.setValue(E,"batchingTexture",H._matricesTexture,T),pt.setOptional(E,H,"batchingIdTexture"),pt.setValue(E,"batchingIdTexture",H._indirectTexture,T),pt.setOptional(E,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(E,"batchingColorTexture",H._colorsTexture,T));const rn=j.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&Fe.update(H,j,pn),(qt||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,pt.setValue(E,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(sn.envMap.value=Ce,sn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(sn.envMapIntensity.value=z.environmentIntensity),qt&&(pt.setValue(E,"toneMappingExposure",g.toneMappingExposure),Ne.needsLights&&Hd(sn,zs),de&&Z.fog===!0&&ce.refreshFogUniforms(sn,de),ce.refreshMaterialUniforms(sn,Z,k,ie,d.state.transmissionRenderTarget[A.id]),oo.upload(E,bc(Ne),sn,T)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(oo.upload(E,bc(Ne),sn,T),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&pt.setValue(E,"center",H.center),pt.setValue(E,"modelViewMatrix",H.modelViewMatrix),pt.setValue(E,"normalMatrix",H.normalMatrix),pt.setValue(E,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Nt=Z.uniformsGroups;for(let Ht=0,Vo=Nt.length;Ht<Vo;Ht++){const bi=Nt[Ht];O.update(bi,pn),O.bind(bi,pn)}}return pn}function Hd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Vd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,z,j){J.get(A.texture).__webglTexture=z,J.get(A.depthTexture).__webglTexture=j;const Z=J.get(A);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=j===void 0,Z.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const j=J.get(A);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const kd=E.createFramebuffer();this.setRenderTarget=function(A,z=0,j=0){U=A,w=z,R=j;let Z=!0,H=null,de=!1,be=!1;if(A){const Ce=J.get(A);if(Ce.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(E.FRAMEBUFFER,null),Z=!1;else if(Ce.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Ce.__hasExternalTextures)T.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ue=A.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&J.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(be=!0);const Ve=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?H=Ve[z][j]:H=Ve[z],de=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?H=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[j]:H=Ve,D.copy(A.viewport),N.copy(A.scissor),B=A.scissorTest}else D.copy(Te).multiplyScalar(k).floor(),N.copy(Pe).multiplyScalar(k).floor(),B=qe;if(j!==0&&(H=kd),ee.bindFramebuffer(E.FRAMEBUFFER,H)&&Z&&ee.drawBuffers(A,H),ee.viewport(D),ee.scissor(N),ee.setScissorTest(B),de){const Ce=J.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,j)}else if(be){const Ce=J.get(A.texture),He=z;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ce.__webglTexture,j,He)}else if(A!==null&&j!==0){const Ce=J.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ce.__webglTexture,j)}y=-1},this.readRenderTargetPixels=function(A,z,j,Z,H,de,be){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){ee.bindFramebuffer(E.FRAMEBUFFER,Re);try{const Ce=A.texture,He=Ce.format,Ve=Ce.type;if(!q.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&j>=0&&j<=A.height-H&&E.readPixels(z,j,Z,H,Oe.convert(He),Oe.convert(Ve),de)}finally{const Ce=U!==null?J.get(U).__webglFramebuffer:null;ee.bindFramebuffer(E.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,z,j,Z,H,de,be){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){const Ce=A.texture,He=Ce.format,Ve=Ce.type;if(!q.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-Z&&j>=0&&j<=A.height-H){ee.bindFramebuffer(E.FRAMEBUFFER,Re);const Ue=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Ue),E.bufferData(E.PIXEL_PACK_BUFFER,de.byteLength,E.STREAM_READ),E.readPixels(z,j,Z,H,Oe.convert(He),Oe.convert(Ve),0);const Ke=U!==null?J.get(U).__webglFramebuffer:null;ee.bindFramebuffer(E.FRAMEBUFFER,Ke);const tt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await h0(E,tt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Ue),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,de),E.deleteBuffer(Ue),E.deleteSync(tt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,j=0){A.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const Z=Math.pow(2,-j),H=Math.floor(A.image.width*Z),de=Math.floor(A.image.height*Z),be=z!==null?z.x:0,Re=z!==null?z.y:0;T.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,j,0,0,be,Re,H,de),ee.unbindTexture()};const Gd=E.createFramebuffer(),Wd=E.createFramebuffer();this.copyTextureToTexture=function(A,z,j=null,Z=null,H=0,de=null){A.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1],z=arguments[2],de=arguments[3]||0,j=null),de===null&&(H!==0?(Oi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=H,H=0):de=0);let be,Re,Ce,He,Ve,Ue,Ke,tt,xt;const _t=A.isCompressedTexture?A.mipmaps[de]:A.image;if(j!==null)be=j.max.x-j.min.x,Re=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,He=j.min.x,Ve=j.min.y,Ue=j.isBox3?j.min.z:0;else{const rn=Math.pow(2,-H);be=Math.floor(_t.width*rn),Re=Math.floor(_t.height*rn),A.isDataArrayTexture?Ce=_t.depth:A.isData3DTexture?Ce=Math.floor(_t.depth*rn):Ce=1,He=0,Ve=0,Ue=0}Z!==null?(Ke=Z.x,tt=Z.y,xt=Z.z):(Ke=0,tt=0,xt=0);const Je=Oe.convert(z.format),Ne=Oe.convert(z.type);let At;z.isData3DTexture?(T.setTexture3D(z,0),At=E.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),At=E.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),At=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,z.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,z.unpackAlignment);const nt=E.getParameter(E.UNPACK_ROW_LENGTH),pn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),es=E.getParameter(E.UNPACK_SKIP_PIXELS),qt=E.getParameter(E.UNPACK_SKIP_ROWS),zs=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,_t.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,_t.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,He),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ue);const pt=A.isDataArrayTexture||A.isData3DTexture,sn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const rn=J.get(A),Nt=J.get(z),Ht=J.get(rn.__renderTarget),Vo=J.get(Nt.__renderTarget);ee.bindFramebuffer(E.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,Vo.__webglFramebuffer);for(let bi=0;bi<Ce;bi++)pt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,J.get(A).__webglTexture,H,Ue+bi),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,J.get(z).__webglTexture,de,xt+bi)),E.blitFramebuffer(He,Ve,be,Re,Ke,tt,be,Re,E.DEPTH_BUFFER_BIT,E.NEAREST);ee.bindFramebuffer(E.READ_FRAMEBUFFER,null),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||J.has(A)){const rn=J.get(A),Nt=J.get(z);ee.bindFramebuffer(E.READ_FRAMEBUFFER,Gd),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,Wd);for(let Ht=0;Ht<Ce;Ht++)pt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,rn.__webglTexture,H,Ue+Ht):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,rn.__webglTexture,H),sn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Nt.__webglTexture,de,xt+Ht):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Nt.__webglTexture,de),H!==0?E.blitFramebuffer(He,Ve,be,Re,Ke,tt,be,Re,E.COLOR_BUFFER_BIT,E.NEAREST):sn?E.copyTexSubImage3D(At,de,Ke,tt,xt+Ht,He,Ve,be,Re):E.copyTexSubImage2D(At,de,Ke,tt,He,Ve,be,Re);ee.bindFramebuffer(E.READ_FRAMEBUFFER,null),ee.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else sn?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(At,de,Ke,tt,xt,be,Re,Ce,Je,Ne,_t.data):z.isCompressedArrayTexture?E.compressedTexSubImage3D(At,de,Ke,tt,xt,be,Re,Ce,Je,_t.data):E.texSubImage3D(At,de,Ke,tt,xt,be,Re,Ce,Je,Ne,_t):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,de,Ke,tt,be,Re,Je,Ne,_t.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,de,Ke,tt,_t.width,_t.height,Je,_t.data):E.texSubImage2D(E.TEXTURE_2D,de,Ke,tt,be,Re,Je,Ne,_t);E.pixelStorei(E.UNPACK_ROW_LENGTH,nt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,pn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,es),E.pixelStorei(E.UNPACK_SKIP_ROWS,qt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,zs),de===0&&z.generateMipmaps&&E.generateMipmap(At),ee.unbindTexture()},this.copyTextureToTexture3D=function(A,z,j=null,Z=null,H=0){return A.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Z=arguments[1]||null,A=arguments[2],z=arguments[3],H=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,j,Z,H)},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){w=0,R=0,U=null,ee.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}class LE{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,i){return e[0]*t+e[1]*i}dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}noise(e,t){let i,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,f=(l+c)*u,h=l-f,p=c-f,_=e-h,v=t-p;let m,d;_>v?(m=1,d=0):(m=0,d=1);const b=_-m+u,S=v-d+u,g=_-1+2*u,L=v-1+2*u,w=l&255,R=c&255,U=this.perm[w+this.perm[R]]%12,y=this.perm[w+m+this.perm[R+d]]%12,M=this.perm[w+1+this.perm[R+1]]%12;let D=.5-_*_-v*v;D<0?i=0:(D*=D,i=D*D*this.dot(this.grad3[U],_,v));let N=.5-b*b-S*S;N<0?s=0:(N*=N,s=N*N*this.dot(this.grad3[y],b,S));let B=.5-g*g-L*L;return B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[M],g,L)),70*(i+s+r)}noise3d(e,t,i){let s,r,o,a;const c=(e+t+i)*.3333333333333333,u=Math.floor(e+c),f=Math.floor(t+c),h=Math.floor(i+c),p=1/6,_=(u+f+h)*p,v=u-_,m=f-_,d=h-_,b=e-v,S=t-m,g=i-d;let L,w,R,U,y,M;b>=S?S>=g?(L=1,w=0,R=0,U=1,y=1,M=0):b>=g?(L=1,w=0,R=0,U=1,y=0,M=1):(L=0,w=0,R=1,U=1,y=0,M=1):S<g?(L=0,w=0,R=1,U=0,y=1,M=1):b<g?(L=0,w=1,R=0,U=0,y=1,M=1):(L=0,w=1,R=0,U=1,y=1,M=0);const D=b-L+p,N=S-w+p,B=g-R+p,$=b-U+2*p,re=S-y+2*p,W=g-M+2*p,ie=b-1+3*p,k=S-1+3*p,he=g-1+3*p,_e=u&255,Te=f&255,Pe=h&255,qe=this.perm[_e+this.perm[Te+this.perm[Pe]]]%12,se=this.perm[_e+L+this.perm[Te+w+this.perm[Pe+R]]]%12,pe=this.perm[_e+U+this.perm[Te+y+this.perm[Pe+M]]]%12,Se=this.perm[_e+1+this.perm[Te+1+this.perm[Pe+1]]]%12;let F=.6-b*b-S*S-g*g;F<0?s=0:(F*=F,s=F*F*this.dot3(this.grad3[qe],b,S,g));let ne=.6-D*D-N*N-B*B;ne<0?r=0:(ne*=ne,r=ne*ne*this.dot3(this.grad3[se],D,N,B));let oe=.6-$*$-re*re-W*W;oe<0?o=0:(oe*=oe,o=oe*oe*this.dot3(this.grad3[pe],$,re,W));let ae=.6-ie*ie-k*k-he*he;return ae<0?a=0:(ae*=ae,a=ae*ae*this.dot3(this.grad3[Se],ie,k,he)),32*(s+r+o+a)}noise4d(e,t,i,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,f,h,p,_;const v=(e+t+i+s)*l,m=Math.floor(e+v),d=Math.floor(t+v),b=Math.floor(i+v),S=Math.floor(s+v),g=(m+d+b+S)*c,L=m-g,w=d-g,R=b-g,U=S-g,y=e-L,M=t-w,D=i-R,N=s-U,B=y>M?32:0,$=y>D?16:0,re=M>D?8:0,W=y>N?4:0,ie=M>N?2:0,k=D>N?1:0,he=B+$+re+W+ie+k,_e=o[he][0]>=3?1:0,Te=o[he][1]>=3?1:0,Pe=o[he][2]>=3?1:0,qe=o[he][3]>=3?1:0,se=o[he][0]>=2?1:0,pe=o[he][1]>=2?1:0,Se=o[he][2]>=2?1:0,F=o[he][3]>=2?1:0,ne=o[he][0]>=1?1:0,oe=o[he][1]>=1?1:0,ae=o[he][2]>=1?1:0,Ie=o[he][3]>=1?1:0,C=y-_e+c,P=M-Te+c,E=D-Pe+c,te=N-qe+c,K=y-se+2*c,q=M-pe+2*c,ee=D-Se+2*c,le=N-F+2*c,J=y-ne+3*c,T=M-oe+3*c,x=D-ae+3*c,I=N-Ie+3*c,G=y-1+4*c,Y=M-1+4*c,X=D-1+4*c,me=N-1+4*c,ce=m&255,ge=d&255,Le=b&255,fe=S&255,Ee=a[ce+a[ge+a[Le+a[fe]]]]%32,De=a[ce+_e+a[ge+Te+a[Le+Pe+a[fe+qe]]]]%32,Fe=a[ce+se+a[ge+pe+a[Le+Se+a[fe+F]]]]%32,xe=a[ce+ne+a[ge+oe+a[Le+ae+a[fe+Ie]]]]%32,Be=a[ce+1+a[ge+1+a[Le+1+a[fe+1]]]]%32;let Oe=.6-y*y-M*M-D*D-N*N;Oe<0?u=0:(Oe*=Oe,u=Oe*Oe*this.dot4(r[Ee],y,M,D,N));let Ze=.6-C*C-P*P-E*E-te*te;Ze<0?f=0:(Ze*=Ze,f=Ze*Ze*this.dot4(r[De],C,P,E,te));let O=.6-K*K-q*q-ee*ee-le*le;O<0?h=0:(O*=O,h=O*O*this.dot4(r[Fe],K,q,ee,le));let Me=.6-J*J-T*T-x*x-I*I;Me<0?p=0:(Me*=Me,p=Me*Me*this.dot4(r[xe],J,T,x,I));let Q=.6-G*G-Y*Y-X*X-me*me;return Q<0?_=0:(Q*=Q,_=Q*Q*this.dot4(r[Be],G,Y,X,me)),27*(u+f+h+p+_)}}const IE=Qi({__name:"WaterBackground",setup(n){const e=Bt(null);let t,i,s,r,o,a,l;const c=[],u=[],f=Jt(()=>window.innerWidth<768),h=()=>({sphereRadius:1.5,detail:f.value?20:64,noiseStrength:.1,noiseSpeed:f.value?.3:.5,waveHeight:.2,color:4957140,opacity:.75,droplets:{count:f.value?1:3,size:[.08,.06,.07],distance:[2.8,3.3,3],speed:[.3,.4,.25],offset:[0,Math.PI*.66,Math.PI*1.33],inclination:[.3,.7,.5],tailLength:f.value?8:15,tailFade:.9}}),p=()=>{if(!e.value)return;const S=h();t=new B0;const g=window.innerWidth/window.innerHeight;if(i=new Zt(60,g,.1,1e3),i.position.z=5,s=new DE({antialias:!f.value,alpha:!0,powerPreference:"high-performance"}),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(f.value?1:window.devicePixelRatio),e.value){const L=e.value.querySelector(".color-background");for(;e.value.firstChild&&e.value.firstChild!==L;)e.value.removeChild(e.value.firstChild);e.value.appendChild(s.domElement),L&&e.value.insertBefore(L,e.value.firstChild)}o=new LE,_(S),(!f.value||f.value&&window.innerWidth>480)&&v(S),a=new $0,window.addEventListener("resize",d)},_=S=>{const g=new gc(S.sphereRadius,S.detail);let L=null,w=null;f.value||(L=new Cd(f.value?128:256),w=new wd(.1,1e3,L),t.add(w));const R=new wa({color:S.color,transparent:!0,opacity:S.opacity,roughness:f.value?.2:.1,metalness:.05,clearcoat:f.value?.5:1,clearcoatRoughness:f.value?.1:.05,envMap:L?L.texture:null,envMapIntensity:f.value?1.2:1.8,reflectivity:f.value?.8:1,emissive:1064010,emissiveIntensity:.2});r=new tn(g,R),g.userData.originalPositions=g.attributes.position.clone(),w&&(r.userData.cubeCamera=w);const U=new q0(16777215,.7);t.add(U);const y=new ef(16777215,1);if(y.position.set(1,1,1),y.castShadow=!1,t.add(y),!f.value){const M=new ef(7326954,.6);M.position.set(-1,-1,-1),M.castShadow=!1,t.add(M);const D=new Pa(11393254,1.2,8);D.position.set(2,2,2),D.castShadow=!1,t.add(D);const N=new Pa(16777215,.8,6);N.position.set(-1.5,1,3),N.castShadow=!1,t.add(N);const B=new Pa(13955577,.7,10);B.position.set(0,-3,0),B.castShadow=!1,t.add(B)}t.add(r)},v=S=>{for(let g=0;g<S.droplets.count;g++){const L=new vs,w=new vo(S.droplets.size[g],f.value?8:12,f.value?8:12);w.scale(1,.9,1);const R=new wa({color:S.color,transparent:!0,opacity:.9,roughness:f.value?.1:.05,metalness:.02,clearcoat:f.value?.5:1,clearcoatRoughness:f.value?.05:.02,emissive:1064010,emissiveIntensity:.3}),U=new tn(w,R);L.add(U);const y=new vs,M=[];for(let D=0;D<S.droplets.tailLength;D++)M.push(new V(0,0,0));for(let D=0;D<S.droplets.tailLength;D++){const N=S.droplets.size[g]*Math.pow(S.droplets.tailFade,D),B=new vo(N,f.value?6:8,f.value?6:8),$=new wa({color:S.color,transparent:!0,opacity:.7*(1-D/S.droplets.tailLength),roughness:.05,metalness:.02,clearcoat:f.value?.4:.8,clearcoatRoughness:.02,emissive:1064010,emissiveIntensity:.2*(1-D/S.droplets.tailLength)}),re=new tn(B,$);y.add(re)}L.add(y),t.add(L),c.push(L),u.push(y),L.userData={distance:S.droplets.distance[g],speed:S.droplets.speed[g],offset:S.droplets.offset[g],inclination:S.droplets.inclination[g],tailPositions:M,head:U}}},m=()=>{const S=a.getElapsedTime(),g=h();if(r&&r.geometry){const L=r.geometry.attributes.position,w=r.geometry.userData.originalPositions,R=f.value?2:1;if(Math.floor(S*60)%R===0){for(let U=0;U<L.count;U++){const y=w.getX(U),M=w.getY(U),D=w.getZ(U),N=new V(y,M,D).normalize(),B=o.noise3d(N.x+S*g.noiseSpeed,N.y+S*g.noiseSpeed*.8,N.z+S*g.noiseSpeed*.6),$=N.multiplyScalar(g.noiseStrength*B+g.waveHeight*Math.sin(S*2+N.y*5));L.setXYZ(U,y+$.x,M+$.y,D+$.z)}L.needsUpdate=!0}r.rotation.x=S*.1,r.rotation.y=S*.15,!f.value&&r.userData.cubeCamera&&(r.visible=!1,r.userData.cubeCamera.position.copy(r.position),r.userData.cubeCamera.update(s,t),r.visible=!0)}c.forEach((L,w)=>{if(L&&L.userData){const R=L.userData,U=R.head,y=S*R.speed+R.offset,M=Math.cos(y)*R.distance,D=Math.sin(y)*R.distance*Math.sin(R.inclination),N=Math.sin(y)*R.distance*Math.cos(R.inclination);if(L.position.set(M,D,N),R.tailPositions.length>1){const re=R.tailPositions[0];re&&new V().subVectors(new V(M,D,N),re).length()>.001&&U.lookAt(re)}const B=f.value?2:1;if(Math.floor(S*60)%B===0){for(let W=R.tailPositions.length-1;W>0;W--)R.tailPositions[W].copy(R.tailPositions[W-1]);R.tailPositions[0]=new V(M,D,N),u[w].children.forEach((W,ie)=>{if(ie<R.tailPositions.length&&ie>0){const k=R.tailPositions[ie];W.position.copy(k),W.position.sub(L.position);const he=1-ie/R.tailPositions.length*.7;W.scale.set(he,he,he)}})}const $=1+.05*Math.sin(S*5+R.offset);U.scale.set($,$*.9,$)}}),s.render(t,i),l=requestAnimationFrame(m)},d=()=>{const S=f.value,g=window.innerWidth<768;i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(g?1:window.devicePixelRatio),S!==g&&(b(),p())},b=()=>{l&&cancelAnimationFrame(l),r&&(r.geometry.dispose(),r.material instanceof Zi?r.material.dispose():Array.isArray(r.material)&&r.material.forEach(S=>S.dispose())),c.forEach(S=>{S&&S.traverse(g=>{g instanceof tn&&(g.geometry.dispose(),g.material instanceof Zi?g.material.dispose():Array.isArray(g.material)&&g.material.forEach(L=>L.dispose()))})}),c.length=0,u.length=0,s&&s.dispose(),t&&t.clear()};return $i(()=>{p(),m()}),Po(()=>{window.removeEventListener("resize",d),b()}),(S,g)=>(it(),lt("div",{id:"water-background",ref_key:"container",ref:e},g[0]||(g[0]=[ve("div",{class:"color-background"},null,-1)]),512))}}),zo=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},UE=zo(IE,[["__scopeId","data-v-879c407a"]]),NE={class:"mobile-menu"},FE={class:"menu-links"},OE=Qi({__name:"MobileMenu",setup(n){const e=Bt(!1),t=()=>{e.value=!e.value,e.value?document.body.style.overflow="hidden":document.body.style.overflow=""},i=()=>{e.value=!1,document.body.style.overflow=""};return(s,r)=>(it(),lt("div",NE,[ve("button",{class:cn(["hamburger-button",{"is-active":e.value}]),onClick:t,"aria-label":"Menu"},r[1]||(r[1]=[ve("span",null,null,-1),ve("span",null,null,-1),ve("span",null,null,-1)]),2),ht(Gh,{name:"menu"},{default:Pn(()=>[e.value?(it(),lt("div",{key:0,class:"menu-overlay",onClick:i},[ve("div",{class:"menu-content",onClick:r[0]||(r[0]=ja(()=>{},["stop"]))},[ve("div",{class:"menu-header"},[r[2]||(r[2]=ve("div",{class:"logo"},"Portfolio",-1)),ve("button",{class:"close-button",onClick:i,"aria-label":"Fermer"}," ✕ ")]),ve("div",FE,[ht(Qt(qi),{to:"/",class:"menu-link",onClick:i},{default:Pn(()=>r[3]||(r[3]=[ve("span",{class:"menu-icon"},"🏠",-1),xn(" Accueil ")])),_:1}),ht(Qt(qi),{to:"/projets",class:"menu-link",onClick:i},{default:Pn(()=>r[4]||(r[4]=[ve("span",{class:"menu-icon"},"📂",-1),xn(" Projets ")])),_:1}),ht(Qt(qi),{to:"/veille",class:"menu-link",onClick:i},{default:Pn(()=>r[5]||(r[5]=[ve("span",{class:"menu-icon"},"🔍",-1),xn(" Veille ")])),_:1})])])])):fr("",!0)]),_:1})]))}}),BE=zo(OE,[["__scopeId","data-v-d3af277c"]]),zE={class:"app"},HE={key:0,class:"update-toast"},VE={class:"navbar"},kE={class:"container"},GE={class:"nav-links desktop-only"},WE={class:"main-content"},XE=Qi({__name:"App",setup(n){const e=E_(),t=S_(),i=Bt(!1);nr(()=>e.path,()=>{i.value=!0,Zl(()=>{window.scrollTo({top:0,behavior:"smooth"})}),setTimeout(()=>{i.value=!1},500)}),$i(()=>{t.afterEach((l,c)=>{l.path!==c.path&&window.scrollTo({top:0,behavior:"smooth"})})});const s=Bt(!0),r=Bt(100);let o=null;function a(){s.value=!1}return $i(()=>{o=window.setInterval(()=>{r.value-=100*50/3e3,r.value<=0&&(a(),o&&clearInterval(o))},50)}),Do(()=>{o&&clearInterval(o)}),(l,c)=>(it(),lt("div",zE,[ht(UE),s.value?(it(),lt("div",HE,[ve("div",{class:"toast-content"},[c[0]||(c[0]=ve("span",{class:"update-icon"},"🔄",-1)),c[1]||(c[1]=ve("p",null,"Ce portfolio est en constante évolution et peut être mis à jour quotidiennement.",-1)),ve("button",{class:"close-btn",onClick:a},"×")]),ve("div",{class:"progress-bar",style:To({width:r.value+"%"})},null,4)])):fr("",!0),ve("nav",VE,[ve("div",kE,[c[5]||(c[5]=ve("div",{class:"logo"},"Portfolio",-1)),ve("div",GE,[ht(Qt(qi),{to:"/",class:"nav-link"},{default:Pn(()=>c[2]||(c[2]=[xn("Accueil")])),_:1}),ht(Qt(qi),{to:"/projets",class:"nav-link"},{default:Pn(()=>c[3]||(c[3]=[xn("Projets")])),_:1}),ht(Qt(qi),{to:"/veille",class:"nav-link"},{default:Pn(()=>c[4]||(c[4]=[xn("Ma veille")])),_:1})]),ht(BE,{class:"mobile-only"})])]),ve("main",WE,[ht(Qt(nd),null,{default:Pn(({Component:u})=>[ht(Gh,{name:"page",mode:"out-in"},{default:Pn(()=>[(it(),Oh(jp(u)))]),_:2},1024)]),_:1})])]))}}),qE="modulepreload",YE=function(n){return"/Portfolio/"+n},Rf={},Cf=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=YE(l),l in Rf)return;Rf[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":qE,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((h,p)=>{f.addEventListener("load",h),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},$E="/Portfolio/images/profile.jpg.webp";function Bd(){let n=null;const e=()=>{const t={root:null,rootMargin:"0px",threshold:.1};n=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(s.target.classList.add("revealed"),n&&n.unobserve(s.target))})},t),document.querySelectorAll(".reveal-on-scroll").forEach(i=>{n&&n.observe(i)})};return $i(()=>{setTimeout(e,100)}),Po(()=>{n&&n.disconnect()}),{}}const jE={class:"education"},KE={class:"timeline-container reveal-on-scroll reveal-bottom"},ZE=["onMouseenter"],JE={class:"timeline-title"},QE={class:"timeline-institution"},ey={class:"timeline-description"},ty={key:0,class:"timeline-skills"},ny=Qi({__name:"TimeLine",setup(n){Bd();const e=Bt(null),t=Bt([{period:"2022",title:"Baccalauréat Général",institution:"Lycée Français de Tananarive",description:"Spécialités Mathématiques et Numérique Sciences Informatiques (NSI). Mention Assez-Bien.",skills:["Mathématiques","Python","Algorithmique"]},{period:"2022-2023",title:"BUT GEII - Génie Electrique et Informatique Industrielle",institution:"IUT Paul Sabatier",description:"Formation approfondie en génie électrique, informatique industrielle et automatisme, axée sur la conception, la mise en œuvre et la maintenance de systèmes électroniques et informatiques pour les applications industrielles.",skills:["HTML/CSS","JavaScript","Responsive Design"]},{period:"2023 - 2024",title:"BTS SIO - Services Informatiques aux Organisations",institution:"ESICAD",description:"Formation approfondie en systèmes informatiques et technologies de l'information, avec une approche orientée vers le développement, la gestion et l'optimisation des infrastructures réseaux et des systèmes informatiques.",skills:["Développement Web","Typescript","PHP","Bases de données","Cybersécurité"]},{period:"Juillet 2024 - Aout 2024",title:"Stage Technicien de proximité",institution:"SmartOne",description:"Participation à l'assistance et au support technique auprès des utilisateurs, gestion de l'installation et de la maintenance des équipements informatiques, résolution de problèmes matériels et logiciels, ainsi que la configuration et l'optimisation des postes de travail dans un environnement professionnel.",skills:["Assistance technique","Gestion des tickets de support","Administration réseau"],isStage:!0},{period:"Décembre 2024 - Fevrier 2024",title:"Stage Assistant au développement de solutions Soft",institution:"Quadient",description:"Participation à la création et à l'intégration d'un bot Teams, en utilisant les outils Microsoft et les fonctionnalités préexistantes. Le stage a impliqué la configuration et la personnalisation du bot, ainsi que l'ajout de quelques fonctionnalités simples via des scripts et l'utilisation des rubriques de développement adaptées.",skills:["Développement de bots","Gestion des outils de développement Microsoft","Test et validation de fonctionnalités"],isStage:!0},{period:"2024 - 2025",title:"BTS SIO - Services Informatiques aux Organisations - Option SLAM ",institution:"ESICAD",description:"Formation approfondie en développement d'applications web et mobile avec une forte orientation vers la programmation et l' intégration d'applications adaptées aux besoins des entreprises. Et à la gestion de projets informatiques ",skills:["Développement Web","Typescript","PHP","Bases de données","Cybersécurité"]}]);return(i,s)=>(it(),lt("section",jE,[s[2]||(s[2]=ve("h2",{class:"section-title reveal-on-scroll reveal-bottom"},"Mon Parcours",-1)),ve("div",KE,[s[1]||(s[1]=ve("div",{class:"timeline-line"},null,-1)),(it(!0),lt(St,null,Xn(t.value,(r,o)=>(it(),lt("div",{key:o,class:cn(["timeline-item reveal-on-scroll",{right:o%2===0,left:o%2!==0,"reveal-left":o%2!==0,"reveal-right":o%2===0,[`reveal-delay-${o%3+1}`]:!0,"stage-item":r.isStage}]),onMouseenter:a=>e.value=o,onMouseleave:s[0]||(s[0]=a=>e.value=null)},[ve("div",{class:cn(["timeline-content",{active:e.value===o,"stage-content":r.isStage}])},[ve("div",{class:cn(["timeline-date",{"stage-date":r.isStage}])},kt(r.period),3),ve("h3",JE,kt(r.title),1),ve("div",QE,kt(r.institution),1),ve("p",ey,kt(r.description),1),r.skills&&r.skills.length>0?(it(),lt("div",ty,[(it(!0),lt(St,null,Xn(r.skills,(a,l)=>(it(),lt("span",{key:l,class:"skill-tag"},kt(a),1))),128))])):fr("",!0)],2),ve("div",{class:cn(["timeline-point",{active:e.value===o,"stage-point":r.isStage}])},null,2)],42,ZE))),128))])]))}}),iy=zo(ny,[["__scopeId","data-v-51306ee8"]]),sy={class:"home"},ry={class:"skills"},oy={class:"skill-categories"},ay={class:"skills-items-grid"},ly=["src","alt"],cy={class:"skill-name"},uy={class:"projects"},fy={class:"projects-grid",style:{display:"grid !important","grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr)) !important",gap:"1.5rem !important",width:"100% !important"}},hy={class:"project-image"},dy=["src","alt"],py={class:"project-content"},my={class:"project-title"},gy={class:"project-description"},_y={class:"tech-stack"},vy={class:"project-links",style:{display:"flex !important","flex-direction":"row !important"}},xy=["href"],My=["href"],Sy={class:"e5-section"},Ey={class:"e5-container"},yy={class:"e5-carousel reveal-on-scroll reveal-right"},Ty={class:"carousel-container"},by={class:"carousel-track"},Ay={class:"carousel-header"},wy={class:"image-container"},Ry=["src","alt"],Cy={class:"carousel-desc"},Py={class:"carousel-tech"},Dy={class:"carousel-footer"},Ly=["href"],Iy=["href"],Uy={class:"nav-buttons"},Ny={class:"carousel-indicators"},Fy=["onClick"],Oy=Qi({__name:"HomeView",setup(n){Bd();const e=Bt([{title:"Frontend",skills:[{name:"HTML5",icon:"./images/html5.png"},{name:"CSS3",icon:"./images/css3.png"},{name:"TypeScript",icon:"./images/ts.png"},{name:"JavaScript",icon:"./images/js.png"},{name:"Kotlin",icon:"./images/kotlin.png"},{name:"Vue.js",icon:"./images/vue.png"}]},{title:"Backend",skills:[{name:"Express.js",icon:"./images/nodejs.png"},{name:"PHP",icon:"./images/php.png"},{name:"MySQL",icon:"./images/mysql-logo.svg"}]},{title:"Outils & Méthodes",skills:[{name:"GitHub",icon:"./images/github.png"},{name:"VS Code",icon:"./images/vscode.png"},{name:"Linux",icon:"./images/linux.png"},{name:"IntelliJ Idea",icon:"./images/IntelliJ_IDEA_logo_01.png"},{name:"Postman",icon:"./images/postman.png"},{name:"Docker",icon:"./images/docker"}]}]),t=Bt([{id:1,title:"NurseCare",description:"Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées.",image:"./images/nursecare.png",technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable NurseCare.pdf",demoUrl:"./docs/DocTechniqueNurseCare.docx.pdf"},{id:2,title:"DeliverEasy",description:"Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.",image:"./images/delivereasy.png",technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable projet Deliver.pdf",demoUrl:"./docs/DocTechniqueDeliver.pdf"},{id:3,title:"Organi'zeur",description:"Application de gestion d'événements et de planification permettant aux utilisateurs d'organiser leur temps efficacement",image:"./images/logoOrganizeur.avif",technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable Organizeur.pdf",demoUrl:"./docs/DocTechniqueOrganizeur.pdf"},{id:4,title:"GLPI",description:"Application de gestion des services informatiques permettant aux utilisateurs de suivre et gerer les incidents",image:"./images/glpi.png",technologies:["GLPI"],documentationUrl:"",demoUrl:""}]),i=Bt([{id:101,title:"Projet E5 - NurseCare",description:"Application de gestion pour cabinet d'infirmiers permettant le suivi des patients et la planification des tournées",image:"./images/nursecare.png",technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Livrable NurseCare.pdf",demoUrl:"./docs/DocTechniqueNurseCare.docx.pdf"},{id:102,title:"Projet E5 - DeliverEasy",description:"Application de livraison optimisant les trajets des livreurs et la gestion de ceux-ci.",image:"./images/delivereasy.png",technologies:["Vue.js","TypeScript","Express.js","MySQL"],documentationUrl:"./docs/Documentation_DeliverEasy.pdf",demoUrl:"./docs/DocTechniqueDeliver.pdf"}]),s=Bt(0),r=Jt(()=>i.value.length),o=Bt(0),a=Bt(0);function l(){s.value=(s.value+1)%r.value,u()}function c(){s.value=(s.value-1+r.value)%r.value,u()}function u(){var v;const _=document.querySelector(".carousel-track");if(_){const m=((v=_.firstElementChild)==null?void 0:v.clientWidth)||0,d=_;d.style.transform=`translateX(-${s.value*m}px)`}}function f(_){o.value=_.touches[0].clientX}function h(_){a.value=_.touches[0].clientX}function p(){const _=o.value-a.value;Math.abs(_)>50&&(_>0?l():c()),o.value=0,a.value=0}return $i(()=>{u();const _=setInterval(()=>{l()},6e3),v=document.querySelector(".carousel-container");v&&(v.addEventListener("touchstart",f,{passive:!0}),v.addEventListener("touchmove",h,{passive:!0}),v.addEventListener("touchend",p)),window.addEventListener("resize",u),Do(()=>{clearInterval(_),window.removeEventListener("resize",u),v&&(v.removeEventListener("touchstart",f),v.removeEventListener("touchmove",h),v.removeEventListener("touchend",p))})}),(_,v)=>(it(),lt("div",sy,[v[10]||(v[10]=kc('<section class="presentation" data-v-95918420><h2 class="section-title reveal-on-scroll reveal-bottom" data-v-95918420>À Propos de Moi</h2><div class="profile-container reveal-on-scroll reveal-bottom" style="display:flex !important;flex-direction:row !important;text-align:left !important;" data-v-95918420><div class="profile-image reveal-on-scroll reveal-left reveal-delay-1" data-v-95918420><img src="'+$E+'" alt="Photo de profil" data-v-95918420></div><div class="profile-text" data-v-95918420><h1 class="reveal-on-scroll reveal-right reveal-delay-1" data-v-95918420>Nathan Razafindrakoto</h1><h2 class="reveal-on-scroll reveal-right reveal-delay-2" data-v-95918420>Étudiant en BTS SIO</h2><p class="bio reveal-on-scroll reveal-right reveal-delay-3" data-v-95918420> Passionné par le développement web et mobile, ainsi que par la cybersécurité et l&#39;intelligence artificielle, je mets mes compétences au service de la création d&#39;applications innovantes, sécurisées et performantes. </p><p class="bio reveal-on-scroll reveal-right reveal-delay-3" data-v-95918420> Toujours en quête de perfectionnement, j&#39;explore les dernières technologies pour concevoir des solutions modernes adaptées aux besoins des utilisateurs. Après deux années de formation en BTS Services Informatiques aux Organisations, j&#39;aspire à approfondir mes connaissances et à relever de nouveaux défis dans ces domaines en constante évolution. </p><p class="bio reveal-on-scroll reveal-right reveal-delay-3" data-v-95918420> À travers cette page, je partage mes réalisations issues de mes études et de mes expériences professionnelles. </p><div class="social-links reveal-on-scroll reveal-bottom reveal-delay-4" style="justify-content:flex-start !important;" data-v-95918420><a href="https://github.com/Razooooo" target="_blank" class="social-link" data-v-95918420><span class="icon" data-v-95918420>📦</span> GitHub </a><a href="https://linkedin.com/in/nathan-razafindrakoto" target="_blank" class="social-link" data-v-95918420><span class="icon" data-v-95918420>💼</span> LinkedIn </a></div></div></div></section>',1)),ht(iy),ve("section",ry,[v[0]||(v[0]=ve("h2",{class:"section-title reveal-on-scroll reveal-bottom"},"Mes Compétences",-1)),ve("div",oy,[(it(!0),lt(St,null,Xn(e.value,(m,d)=>(it(),lt("div",{key:m.title,class:cn(["skill-category-container reveal-on-scroll reveal-bottom",`reveal-delay-${d%5+1}`])},[ve("h3",null,kt(m.title),1),ve("div",ay,[(it(!0),lt(St,null,Xn(m.skills,(b,S)=>(it(),lt("div",{key:b.name,class:cn(["skill-box reveal-on-scroll reveal-scale",`reveal-delay-${S%5+1}`])},[ve("img",{src:b.icon,alt:b.name,class:"skill-icon"},null,8,ly),ve("span",cy,kt(b.name),1)],2))),128))])],2))),128))])]),ve("section",uy,[v[3]||(v[3]=ve("h2",{class:"section-title reveal-on-scroll reveal-bottom"},"Mes Projets",-1)),ve("div",fy,[(it(!0),lt(St,null,Xn(t.value,(m,d)=>(it(),lt("article",{key:m.id,class:cn(["project-card reveal-on-scroll reveal-bottom",`reveal-delay-${d%5+1}`]),style:{width:"100% !important",maxWidth:"none !important"}},[ve("div",hy,[ve("img",{src:m.image,alt:m.title},null,8,dy)]),ve("div",py,[ve("h3",my,kt(m.title),1),ve("p",gy,kt(m.description),1),ve("div",_y,[(it(!0),lt(St,null,Xn(m.technologies,b=>(it(),lt("span",{key:b,class:"tech-tag"},kt(b),1))),128))]),ve("div",vy,[ve("a",{href:m.documentationUrl,target:"_blank",class:"doc-link"},v[1]||(v[1]=[ve("span",{class:"icon"},"📄",-1),xn(" Doc ")]),8,xy),m.demoUrl?(it(),lt("a",{key:0,href:m.demoUrl,target:"_blank",class:"demo-link"},v[2]||(v[2]=[ve("span",{class:"icon"},"🔗",-1),xn(" Démo ")]),8,My)):fr("",!0)])])],2))),128))])]),ve("section",Sy,[v[9]||(v[9]=ve("h2",{class:"section-title reveal-on-scroll reveal-bottom"},"Épreuve E5",-1)),ve("div",Ey,[v[8]||(v[8]=ve("div",{class:"e5-text reveal-on-scroll reveal-left"},[ve("h3",null,"Présentation de l'Épreuve E5"),ve("p",null," L'épreuve E5 du BTS SIO est une épreuve professionnelle qui évalue les compétences acquises en situation réelle. Elle consiste à présenter des projets développés durant la formation qui démontrent mes capacités à concevoir et réaliser des applications web et mobile. "),ve("p",null," Ces projets illustrent ma maîtrise des technologies, des méthodes de développement et ma capacité à répondre aux besoins des utilisateurs. Et pour cela j'ai choisi NurseCare et DeliverEasy. ")],-1)),ve("div",yy,[ve("div",Ty,[ve("div",by,[(it(!0),lt(St,null,Xn(i.value,m=>(it(),lt("div",{key:m.id,class:"carousel-card"},[ve("div",Ay,[ve("div",wy,[ve("img",{src:m.image,alt:m.title,class:"carousel-logo"},null,8,Ry)]),ve("h4",null,kt(m.title),1)]),ve("div",Cy,[ve("p",null,kt(m.description),1)]),ve("div",Py,[(it(!0),lt(St,null,Xn(m.technologies,d=>(it(),lt("span",{key:d,class:"tech-tag"},kt(d),1))),128))]),ve("div",Dy,[ve("a",{href:m.documentationUrl,target:"_blank",class:"e5-doc-link"},v[4]||(v[4]=[ve("span",{class:"icon"},"📄",-1),xn(" Documentation ")]),8,Ly),m.demoUrl?(it(),lt("a",{key:0,href:m.demoUrl,target:"_blank",class:"e5-doc-link"},v[5]||(v[5]=[ve("span",{class:"icon"},"🔗",-1),xn(" Demo ")]),8,Iy)):fr("",!0)])]))),128))]),ve("div",Uy,[ve("button",{onClick:ja(c,["stop"]),class:"nav-btn prev-btn","aria-label":"Projet précédent"},v[6]||(v[6]=[ve("span",{class:"arrow"},"❮",-1)])),ve("button",{onClick:ja(l,["stop"]),class:"nav-btn next-btn","aria-label":"Projet suivant"},v[7]||(v[7]=[ve("span",{class:"arrow"},"❯",-1)]))]),ve("div",Ny,[(it(!0),lt(St,null,Xn(i.value,(m,d)=>(it(),lt("button",{key:d,onClick:b=>{s.value=d,u()},class:cn([{active:s.value===d},"indicator-dot"]),"aria-label":"Aller au projet"},null,10,Fy))),128))])])])])]),v[11]||(v[11]=kc('<section class="e4-section" data-v-95918420><h2 class="section-title reveal-on-scroll reveal-bottom" data-v-95918420>Épreuve E4</h2><div class="e4-container" data-v-95918420><div class="e4-content reveal-on-scroll reveal-bottom" data-v-95918420><h3 data-v-95918420>Présentation de l&#39;Épreuve E4</h3><p data-v-95918420> Cette épreuve met en avant mon parcours de professionnalisation et la mise en pratique des connaissances acquises durant ma formation. </p><div class="e4-buttons" data-v-95918420><a href="./docs/E4- Tableau de synthèse Nathan.pdf" target="_blank" class="e4-button excel-button" data-v-95918420><span class="button-icon" data-v-95918420>📊</span><span class="button-text" data-v-95918420>Tableau de Synthèse E4</span></a></div></div></div></section>',1))]))}}),By=zo(Oy,[["__scopeId","data-v-95918420"]]),zy=x_({history:Kg("/Portfolio/"),routes:[{path:"/",name:"home",component:By},{path:"/projets",name:"projects",component:()=>Cf(()=>import("./ProjectsView-C1o7Ja3Y.js"),__vite__mapDeps([0,1]))},{path:"/veille",name:"veille",component:()=>Cf(()=>import("./VeilleView-RbYlqDM3.js"),__vite__mapDeps([2,3]))}]}),xc=mg(XE);xc.use(xg());xc.use(zy);xc.mount("#app");export{St as F,zo as _,ve as a,Xn as b,lt as c,Qi as d,fr as e,xn as f,cn as n,it as o,Bt as r,kt as t,Bd as u};
