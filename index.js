import{S as h,i as g}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const y="46523265-c71f09449dcc8bc0189ac0d2d",L=(n,t)=>fetch(`https://pixabay.com/api/?key=${y}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${t}`),l=document.querySelector(".gallery"),b=()=>{l.innerHTML='<span class="loader"></span>'},E=({webformatURL:n,largeImageURL:t,tags:o,likes:r,views:e,comments:a,downloads:s})=>{const u=document.createElement("li"),c=document.createElement("a");c.href=t;const d=document.createElement("div");d.classList.add("image-container");const i=document.createElement("img");i.classList.add("image-preview"),i.src=n,i.alt=o,d.appendChild(i),c.appendChild(d);const m=document.createElement("div");return m.classList.add("card-description"),[{label:"Likes",value:r},{label:"Views",value:e},{label:"Comments",value:a},{label:"Downloads",value:s}].forEach(f=>{const p=document.createElement("span");p.classList.add("attribute"),p.innerHTML=`<span>${f.label}</span> ${f.value}`,m.appendChild(p)}),c.appendChild(m),u.appendChild(c),u},v=n=>{const t=document.createDocumentFragment();n.forEach(r=>{t.appendChild(E(r))});const o=document.createElement("ul");o.classList.add("gallery-list"),o.appendChild(t),l.innerHTML="",l.appendChild(o)},C=(n="An error occurred while loading images.")=>{l.innerHTML=`<span class="error">${n}</span>`},P=new h(".gallery a",{overlayOpacity:.8,captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"}),w=document.querySelector(".search-form");w.addEventListener("submit",n=>{n.preventDefault();const t=n.target,o=t.elements.search.value.trim();o&&(t.reset(),b(),L(o,1).then(r=>r.json()).then(r=>{if(r.total===0)return Promise.reject(new Error("Sorry, there are no images matching your search query. Please try again!"));v(r.hits)}).then(()=>{P.refresh()}).catch(r=>{g.error({title:"Error",message:r.message}),C()}))});
//# sourceMappingURL=index.js.map