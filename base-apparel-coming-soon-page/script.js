!function e(r,t,s){function u(i,n){if(!t[i]){if(!r[i]){var o="function"==typeof require&&require;if(!n&&o)return o(i,!0);if(c)return c(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var b=t[i]={exports:{}};r[i][0].call(b.exports,(function(e){return u(r[i][1][e]||e)}),b,b.exports,e,r,t,s)}return t[i].exports}for(var c="function"==typeof require&&require,i=0;i<s.length;i++)u(s[i]);return u}({1:[function(e,r,t){"use strict";const s=document.querySelector(".subscribe"),u=document.querySelector(".subscribe_email"),c=document.querySelector(".subscribe_feedback"),i=()=>{u.value.trim().match(/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/)?(c.textContent="You have been subscribed",s.classList.add("subscribe-success")):(c.textContent="Please provide a valid email",s.classList.add("subscribe-error"))};s.addEventListener("submit",e=>{e.preventDefault(),s.className.match(/subscribe-(success)|(error)/)?(s.classList.remove("subscribe-success","subscribe-error"),setTimeout(i,300)):i()})},{}]},{},[1]);
//# sourceMappingURL=script.js.map