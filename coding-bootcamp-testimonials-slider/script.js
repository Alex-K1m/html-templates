!function e(t,r,o){function n(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,(function(e){return n(t[s][1][e]||e)}),l,l.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){"use strict";const o=document.querySelector(".testimonials"),n=o.querySelector(".slide > img"),i=o.querySelector(".quote > p"),s=o.querySelector(".quote > footer"),a=o.querySelector(".quote > footer > cite"),c=o.querySelector(".quote > footer > cite:nth-child(2)"),u=[n,i,s],l={prev:-1,next:1},d={hide:{prev:"hide-reverse",next:"hide"},show:{prev:"show-reverse",next:"show"}};let h=0;const f=(e,t)=>new Promise(r=>{const o=()=>{e.forEach(e=>{e.classList.remove(t)}),e[0].removeEventListener("animationend",o),r()};e.forEach(e=>{e.classList.add(t)}),e[0].addEventListener("animationend",o)}),v=({testimonials:e})=>({target:t})=>{t.setAttribute("disabled",!0);const r=t.dataset.slide;h=Math.abs(h+l[r])%e.length,f(u,d.hide[r]).then(()=>(e=>{n.setAttribute("src",e[h].photoUrl),i.textContent=e[h].quote,a.textContent=e[h].author,c.textContent=e[h].position})(e)).then(()=>f(u,d.show[r])).then(()=>t.removeAttribute("disabled"))};(async()=>{const e=await(async e=>{try{const t=await fetch(e);return await t.json()}catch(e){return console.log("An error occur while getting data:\n",e),null}})("data.json");e&&(e.testimonials.forEach(({photoUrl:e})=>{return t=e,void((new Image).src=t);var t}),document.querySelectorAll("[data-slide]").forEach(t=>t.addEventListener("click",v(e))))})()},{}]},{},[1]);
//# sourceMappingURL=script.js.map
