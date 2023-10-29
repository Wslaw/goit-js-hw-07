import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 
// --------------Сonnecting styles---------------------------
const container = document.querySelector("body");
const itemStyle = document.querySelector("a");
itemStyle.style.listStyleType = "none";
itemStyle.style.textDecoration = "none";
itemStyle.style.backgroundColor = "#97a5ff";
itemStyle.style.width = "8%";
itemStyle.style.fontSize = "16px";
itemStyle.style.fontWeight = "400";
itemStyle.style.color = "blue";
itemStyle.style.display = "inline-block";
itemStyle.style.padding = "0px 10px";
itemStyle.style.borderRadius = "120px 100px 15px";
itemStyle.style.boxShadow = "0px 2px 4px 2px rgba(143, 209, 233, 0.9)";
itemStyle.style.transition = "background-color 0.3s ease-in-out";
container.style.background = "linear-gradient(to right,#3f87a6, #ebf8e1, #fff49f)";

itemStyle.addEventListener("mouseenter", () => {
  itemStyle.style.background = "linear-gradient(to bottom, #0147a6, #fff49f)";
  itemStyle.style.backgroundColor = "#82d8e5";
  itemStyle.style.boxShadow = "4px 4px 0px 1px rgba(56, 100, 105, 0.5)";
});

itemStyle.addEventListener("mouseleave", () => {
  itemStyle.style.background = "none";
  itemStyle.style.backgroundColor = "#97a5ff";
  itemStyle.style.boxShadow = "0px 2px 4px 2px rgba(143, 209, 233, 0.9)";
});

// ------------------------------------------------------------


const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
let lightbox;

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
}

function onImgClick(evt) {
  evt.preventDefault();
  document.addEventListener("keydown", onEscape);
  if (evt.target.nodeName !== "IMG") return;
  lightbox = basicLightbox.create(`<img width="1280" height="auto" src="${evt.target.dataset.source}">`);
  lightbox.show();
  onEscape(evt);
  // console.log(evt.target.dataset.source);
}

function onEscape(evt) {
  if (evt.key !== "Escape") return;
  lightbox.close();
  document.removeEventListener("keydown", onEscape);
}

const liElements = document.querySelectorAll("li");

liElements.forEach((element) => {
  element.style.backgroundColor = "red";
  element.style.color = "white";
  // Інші стилі, які вам потрібні
});
