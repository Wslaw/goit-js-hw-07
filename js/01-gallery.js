// --------------Сonnecting styles---------------------------
const item = document.querySelector("a");
  item.style.listStyleType = "none";
  item.style.textDecoration = "none";
  item.style.backgroundColor = "#97a5ff";
  item.style.fontSize = "16px";
  item.style.fontWeight = "400";
  item.style.color = "blue";
  item.style.display = "inline-block";
  item.style.padding = "0px 10px";  
  item.style.borderRadius = "120px 100px 15px";
  item.style.boxShadow = "0px 2px 4px 2px rgba(143, 209, 233, 0.9)";
  // });
const container = document.querySelector("body");
// container.style.backgroundColor = "#70a8c2";
container.style.background = "linear-gradient(to right,#3f87a6, #ebf8e1, #fff49f)";


item.style.transition = "background-color 0.3s ease-in-out";

item.addEventListener("mouseenter", () => {
  item.style.background = "linear-gradient(to bottom, #0147a6, #fff49f)";
  item.style.backgroundColor = "#82d8e5";
  item.style.boxShadow = "4px 4px 0px 1px rgba(56, 100, 105, 0.5)"; 
});

item.addEventListener("mouseleave", () => {
  item.style.background = "none";
  item.style.backgroundColor = "#97a5ff";
  item.style.boxShadow = "0px 2px 4px 2px rgba(143, 209, 233, 0.9)";
});



// ------------------------------------------------------------


import { galleryItems } from "./gallery-items.js";
// Change code below this line



const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
let lightbox;

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