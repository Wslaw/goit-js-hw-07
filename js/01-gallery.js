import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// console.log(itemsMarkup);
// console.log(galleryItems);

galleryContainer.addEventListener("click", onImgClick);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

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



