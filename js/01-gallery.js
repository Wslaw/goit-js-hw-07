import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
galleryContainer.addEventListener("click", onImgClick);
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// console.log(itemsMarkup);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
console.log(galleryItems);
function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class = "gallery__item">
        <a class = "gallery__link" href ="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}" />
        </a>
        </li>`;
    })
    .join("");
}

document.querySelector("img").onclick = () => {
  basicLightbox.create(
      `
		<img width="1280" height="auto" src="">
	`
    )
    .show();
};

function onImgClick(evt) {
    evt.preventDefault();
    
}

addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    console.log("ENTER ESCAPE");
  }
});


