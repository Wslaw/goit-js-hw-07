import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// console.log(itemsMarkup);
// console.log(galleryItems);

galleryContainer.addEventListener("click", onImgClick);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
let light;


function createGalleryItemsMarkup(items) {
  return items
  .map(
    (item) =>
        `<li class = "gallery__item">
        <a class = "gallery__link" href ="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" />
        </a>
        </li>`
        )
        .join("");  
      }
      
      
      
      
      function onImgClick(evt) {
        evt.preventDefault();
        document.addEventListener("keydown", onEscape);
        if (evt.target.nodeName !== "IMG") return;
        light = basicLightbox.create(`<img width="1280" height="auto" src="${evt.target.dataset.source}">`);
        light.show();
        onEscape(evt);
        // console.log(evt.target.dataset.source);
      }
      
      
      function onEscape(evt) {
        if (evt.key !== "Escape") return;
        light.close();
        document.removeEventListener("keydown", onEscape);
}