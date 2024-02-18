import{a as d,S as u}from"./assets/vendor-58e78301.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();let i="",a=1;const p=e=>{const r=document.createElement("li");return r.innerHTML=`
    <div class="card">
      <img src="${e.webformatURL}" alt="${e.tags}" />
      <div class="details">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>
  `,r},f=e=>{const r=document.querySelector(".images");e.forEach(s=>{const c=p(s);r.appendChild(c)}),e.length>0&&new u(".images a").refresh()},l=async()=>{try{const r=(await d.get("https://pixabay.com/api/",{params:{key:"42394453-5b1f47b766fae7b80cadc39a1",q:i,page:a,per_page:15}})).data.hits;f(r);const s=document.querySelector(".load-more");r.length<15?(s.style.display="none",alert("We're sorry, but you've reached the end of search results.")):s.style.display="block";const c=document.querySelector(".images li").offsetHeight;window.scrollBy(0,c*2)}catch(e){console.error("Error fetching images:",e)}};document.querySelector(".form").addEventListener("submit",async e=>{e.preventDefault(),i=e.target.input.value,a=1;const r=document.querySelector(".images");r.innerHTML="",l()});document.querySelector(".load-more").addEventListener("click",()=>{a++,l()});
//# sourceMappingURL=commonHelpers.js.map
