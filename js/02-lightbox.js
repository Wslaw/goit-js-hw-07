import { galleryItems } from './gallery-items.js';
// Change code below this line
// 
// --------------Сonnecting styles---------------------------
const container = document.querySelector("body");
const itemStyle = document.querySelector("a");
itemStyle.classList.add("link");
const itemStyleLink = document.querySelector(".link")
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



let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "top",
  // captionDelay: 250,
  closeText: "",
  showCounter: false,
  animationSpeed: 300,
  enableKeyboard: true,
  doubleTapZoom: 1.5,
  fadeSpeed: 250,
});;
gallery.on("show.simplelightbox", function () {
itemStyleLink.style.display = "none";
});


gallery.on("closed.simplelightbox", function () {
  itemStyleLink.style.display = "inline-block";
 
});

