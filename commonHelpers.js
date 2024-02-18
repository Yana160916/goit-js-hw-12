import{a as d}from"./assets/vendor-f3b9b581.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let i="",a=1;const u=r=>{const t=document.createElement("li");return t.innerHTML=`
    <div class="card">
      <img src="${r.webformatURL}" alt="${r.tags}" />
      <div class="details">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </div>
  `,t},p=r=>{const t=document.querySelector(".images");r.forEach(c=>{const e=u(c);t.appendChild(e)});const s=document.querySelector(".load-more");r.length<15?(s.style.display="none",alert("We're sorry, but you've reached the end of search results.")):s.style.display="block"},l=async()=>{try{const t=(await d.get("https://pixabay.com/api/",{params:{key:"42394453-5b1f47b766fae7b80cadc39a1",q:i,page:a,per_page:15}})).data.hits;p(t);const s=document.querySelector(".images li").offsetHeight;window.scrollBy(0,s*2)}catch(r){console.error("Error fetching images:",r),alert("Error fetching images. Please try again.")}};document.querySelector(".form").addEventListener("submit",async r=>{r.preventDefault(),i=r.target.input.value,a=1;const t=document.querySelector(".images");t.innerHTML="",l()});document.querySelector(".load-more").addEventListener("click",()=>{a++,l()});
//# sourceMappingURL=commonHelpers.js.map
