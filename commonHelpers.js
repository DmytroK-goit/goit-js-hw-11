import{S as u,i}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const l=document.querySelector(".loader");function d(){l.style.display="block"}function c(){l.style.display="none"}function p(s){const n=`https://pixabay.com/api/?key=44758497-ea11318ae0823ef09cb8fbdb5&q=${encodeURIComponent(s)}&image_type=photo`;return fetch(n)}function f(s){const o=document.querySelector("#gallery");if(!o){console.error("Елемент #gallery не знайдений в DOM.");return}if(s.length===0){o.innerHTML="<p>Нічого не знайдено.</p>";return}const n=s.map(e=>`
      <div class="image-card">
            <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}" /></a>
            <div class="image-text">
        <p>likes: ${e.likes}</p>
        <p>views: ${e.views}</p>
        <p>comments: ${e.comments}</p>
        <p>downloads: ${e.downloads}</p>
        </div>
      </div>
    `).join("");o.innerHTML=n,m.refresh()}const m=new u(".image-card a",{captionsData:"alt",captionDelay:250,navText:["&larr;","&rarr;"],closeText:"&times;"}),h=document.querySelector("#search-form");h.addEventListener("submit",s=>{s.preventDefault();const n=new FormData(s.target).get("query");n&&n.trim()?(d(),p(n.trim()).then(e=>{if(!e.ok)throw new Error("Не вдалося виконати запит.");return e.json()}).then(e=>(c(),e.totalHits>0?(i.show({position:"topRight",backgroundColor:"green",message:`Found ${e.totalHits} results.`}),e.hits):(i.show({position:"topRight",backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),[]))).then(e=>{console.log(e),f(e)}).catch(e=>{throw c(),i.show({position:"topRight",backgroundColor:"red",message:"Error during the request. Please try again later."}),e})):i.show({position:"center",backgroundColor:"orange",message:"Будь ласка, введіть пошуковий запит."})});
//# sourceMappingURL=commonHelpers.js.map
