parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LWl7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.saveItem=exports.getSavedItem=exports.genRandomNum=exports.toggleDisplay=exports.delay=exports.animate=exports.$$=exports.$=void 0;const e=document.querySelector.bind(document);exports.$=e;const t=document.querySelectorAll.bind(document);exports.$$=t;const o=(e,t)=>new Promise(o=>{const s=()=>{e.classList.remove(t),e.removeEventListener("animationend",s),o(e)};e.classList.add(t),e.addEventListener("animationend",s)});exports.animate=o;const s=(e=0)=>new Promise(t=>{setTimeout(t,e)});exports.delay=s;const n=e=>{e.classList.toggle("hidden")};exports.toggleDisplay=n;const r=(e=0,t=1)=>Math.floor(e+Math.random()*(t-e));exports.genRandomNum=r;const a=e=>{try{return localStorage.getItem(e)}catch(t){if(t instanceof DOMException&&t.message.includes("localStorage"))return null;throw t}};exports.getSavedItem=a;const c=(e,t)=>{try{return localStorage.setItem(e,t),!0}catch(o){if(o instanceof DOMException&&o.message.includes("localStorage"))return!1;throw o}};exports.saveItem=c;
},{}],"jRUs":[function(require,module,exports) {
const{$:t,animate:e,toggleDisplay:n}=require("./_utils"),a=t(".overlay"),i=t(".rules"),o=t(".modal > button"),s=t=>{t.stopPropagation();const{target:i}=t;(i===a||o.contains(i))&&e(a,"fadeOut").then(n)},c=()=>{n(a),e(a,"fadeIn")};o.addEventListener("click",s,!0),a.addEventListener("click",s,!0),i.addEventListener("click",c);
},{"./_utils":"LWl7"}],"mpVp":[function(require,module,exports) {
"use strict";require("./_modal");var e=require("./_utils");function t(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function a(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const r=(0,e.$)(".playField"),i=(0,e.$)(".result"),o=(0,e.$)(".result > .col:nth-child(1) > .box"),s=(0,e.$)(".result > .col:nth-child(2) > .box"),l=(0,e.$)(".status"),c=(0,e.$)(".score > div:nth-child(2)"),d=(0,e.$)(".center"),p=(0,e.getSavedItem)("score");null===p&&console.warn("The score won't be saved between sessions as third party cookies are disabled in your browser.");let u=Number(p)||0,m=!1;c.textContent=u;const b=t=>{const a=document.createElement("div");a.classList.add("option",t);const n=(0,e.$)("button.option.".concat(t," > span")).cloneNode(!0);return a.append(n),a},g=[{name:"Scissors",beats:[1,3]},{name:"Paper",beats:[2,4]},{name:"Rock",beats:[3,0]},{name:"Lizard",beats:[4,1]},{name:"Spock",beats:[0,2]}].map(e=>a(a({},e),{},{$element:b(e.name.toLowerCase())})),h=async(t,a,n)=>{o.append(g[t].$element),await(0,e.animate)(r,"fadeOut"),(0,e.toggleDisplay)(r),await(0,e.delay)(300),(0,e.toggleDisplay)(i),await(0,e.animate)(i,"fadeIn"),await(0,e.delay)(800),s.append(g[a].$element),await(0,e.animate)(g[a].$element,"flip"),await(0,e.delay)(500),(n?o:s).classList.add("highlight"),await(0,e.delay)(1e3),l.textContent=n?"You win":"You lose",i.classList.add("expanded"),await(0,e.animate)(d,"expand"),(0,e.animate)(c,"flip-scale"),await(0,e.delay)(300),c.textContent=u},y=({currentTarget:t})=>{if(m)return;m=!0;const a=t.getAttribute("aria-label"),n=g.findIndex(({name:e})=>e===a),r=(0,e.genRandomNum)(0,g.length-1),i=g.map((e,t)=>t).filter((e,t)=>t!==n)[r],o=g[n].beats.includes(i);u+=o?1:-1,(0,e.saveItem)("score",u),h(n,i,o)},f=async()=>{m&&(m=!1,await(0,e.animate)(i,"fadeOut"),(0,e.toggleDisplay)(i),(0,e.toggleDisplay)(r),(0,e.animate)(r,"fadeIn"),(0,e.$)(".highlight").classList.remove("highlight"),i.classList.remove("expanded"),o.removeChild(o.lastElementChild),s.removeChild(s.lastElementChild),m=!1)};(0,e.$$)(".playField .option").forEach(e=>{e.addEventListener("click",y)}),(0,e.$)(".repeat").addEventListener("click",f);
},{"./_modal":"jRUs","./_utils":"LWl7"}]},{},["mpVp"], null)
//# sourceMappingURL=script.762dba41.js.map