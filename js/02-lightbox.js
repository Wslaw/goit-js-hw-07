import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);


galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onImgClick);

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
      };
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt", captionDelay: 250
});

//  const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
// });