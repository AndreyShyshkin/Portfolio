(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();var i=document.getElementById("myCanvas"),f=i.getContext("2d");i.width=window.innerWidth;i.height=window.innerHeight;var d=!1,u=0,a=0;i.addEventListener("mousedown",g);i.addEventListener("mousemove",p);i.addEventListener("mouseup",m);i.addEventListener("mouseout",m);function g(n){d=!0,u=n.clientX-i.offsetLeft,a=n.clientY-i.offsetTop}function p(n){if(d){var r=n.clientX-i.offsetLeft,s=n.clientY-i.offsetTop;f.beginPath(),f.moveTo(u,a),f.lineTo(r,s),f.strokeStyle="#ffa500",f.lineWidth=3,f.stroke(),u=r,a=s}}function m(){d=!1}$(function(){$(".draggable").draggable()});function v(n,r,s=!0,c=1/0){const e=n.innerHTML;let t=s?0:e.length;n.innerHTML="";function o(){t<e.length?(n.innerHTML+=e.charAt(t),t++,setTimeout(o,r)):setTimeout(l,r)}function l(){if(t>=0)n.innerHTML=e.substring(0,t),t--,setTimeout(l,r);else{if(c--,c===0)return;setTimeout(o,r)}}o()}const h=document.getElementById("name");v(h,100);
