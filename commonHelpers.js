import{S as s,a as d,i as a}from"./assets/vendor-483db976.js";let n="",r=1;const m=e=>{const t=document.createElement("li");return t.innerHTML=`
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
  `,t},g=e=>{const t=document.querySelector(".images");e.forEach(c=>{const i=m(c);t.appendChild(i)});const o=document.querySelector(".load-more");e.length<15?(o.style.display="none",a.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):o.style.display="block",new s(".images a").refresh()},l=async()=>{try{const t=(await d.get("https://pixabay.com/api/",{params:{key:"42394453-5b1f47b766fae7b80cadc39a1",q:n,page:r,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits;g(t),t.length===0&&a.warning({title:"No Results",message:"No images found for the given search query."})}catch(e){console.error("Error fetching images:",e),a.error({title:"Error",message:"Error fetching images. Please try again."})}};document.querySelector(".form").addEventListener("submit",async e=>{e.preventDefault(),n=e.target.input.value,r=1;const t=document.querySelector(".images");t.innerHTML="",l()});document.querySelector(".load-more").addEventListener("click",()=>{r++,l()});document.addEventListener("DOMContentLoaded",()=>{new s(".images a")});
//# sourceMappingURL=commonHelpers.js.map
