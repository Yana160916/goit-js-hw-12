import{S as l,a as f,i}from"./assets/vendor-483db976.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();let d="",c=1;const m=e=>{const r=document.createElement("li");return r.innerHTML=`
    <div class="card">
      <a href="${e.largeImageURL}" data-lightbox="gallery">
        <img src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="details">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </div>
  `,r},p=e=>{const r=document.querySelector(".images");e.forEach(t=>{const o=m(t);r.appendChild(o)});const s=document.querySelector(".load-more");e.length<15?(s.style.display="none",i.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):s.style.display="block",new l(".images a").refresh()},u=async()=>{try{const r=(await f.get("https://pixabay.com/api/",{params:{key:"42394453-5b1f47b766fae7b80cadc39a1",q:d,page:c,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits;p(r),r.length===0&&i.warning({title:"No Results",message:"No images found for the given search query."})}catch(e){console.error("Error fetching images:",e),i.error({title:"Error",message:"Error fetching images. Please try again."})}};document.querySelector(".form").addEventListener("submit",async e=>{e.preventDefault(),d=e.target.input.value,c=1;const r=document.querySelector(".images");r.innerHTML="",u()});document.querySelector(".load-more").addEventListener("click",()=>{c++,u()});document.addEventListener("DOMContentLoaded",()=>{new l(".images a")});
//# sourceMappingURL=commonHelpers.js.map
