
const items = document.querySelectorAll("a");
items.forEach(item => {
  item.style.listStyleType = "none";
  item.style.textDecoration = "none";
  item.style.backgroundColor = "#97a5ff";
  item.style.fontSize = "25px";
  item.style.fontWeight = "500";
  item.style.color = "blue";
  item.style.display = "inline-block";
  item.style.border = "2px solid #53f5ff";  
  item.style.padding = "5px 30px";  
item.style.borderRadius = "120px 100px 10px";
});
const container = document.querySelector("body");
container.style.backgroundColor = "#70a8c2";




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
