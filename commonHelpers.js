import{S as a}from"./assets/vendor-10cb7c31.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function l(n){const s=`https://pixabay.com/api/?key=44758497-ea11318ae0823ef09cb8fbdb5&q=${encodeURIComponent(n)}&image_type=photo`;try{const t=await fetch(s);if(!t.ok)throw new Error("Не вдалося виконати запит.");const e=await t.json();return e.totalHits>0?(console.log(`Знайдено ${e.totalHits} результатів.`),e.hits):(console.log("Нічого не знайдено."),[])}catch(t){throw console.error("Помилка під час виконання запиту:",t),t}}function i(n){const r=document.querySelector("#gallery");if(!r){console.error("Елемент #gallery не знайдений в DOM.");return}if(n.length===0){r.innerHTML="<p>Нічого не знайдено.</p>";return}const s=n.map(t=>`
      <div class="image-card">
      <a href="${t.webformatURL}">
    <img src="${t.webformatURL}" alt="" title="" />
  </a>
  <a href="${t.largeImageURL}">
    <img src="${t.largeImageURL}" alt="" title="${t.tags}" />
  </a>
        <p>views: ${t.views}</p>
        <p>comments: ${t.comments}</p>
        <p>downloads: ${t.downloads}</p>
      </div>
    `).join("");r.innerHTML=s}new a(".gallery",{captionsData:"alt",captionDelay:250,navText:["&larr;","&rarr;"],closeText:"&times;"});document.addEventListener("DOMContentLoaded",()=>{console.log("DOM повністю завантажений і готовий.");const n=document.querySelector("#search-form");if(!n){console.error("Форма не знайдена.");return}n.addEventListener("submit",r=>{r.preventDefault(),console.log("Обробка події submit.");const t=new FormData(r.target).get("query");t&&t.trim()?(console.log("Форма відправлена з даними:"),console.log(`Пошуковий запит: ${t.trim()}`),l(t.trim()).then(e=>i(e)).catch(e=>console.log(e))):(console.log("Поле вводу пусте."),alert("Будь ласка, введіть пошуковий запит."))})});
//# sourceMappingURL=commonHelpers.js.map
