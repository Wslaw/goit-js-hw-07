console.log("Script is running");

const container = document.querySelector("body");
const itemsStyle = document.querySelectorAll("a");
itemsStyle.forEach((itemStyle) => {
  itemStyle.style.listStyleType = "none";
  itemStyle.style.textDecoration = "none";
  itemStyle.style.backgroundColor = "#97a5ff";
  itemStyle.style.fontSize = "16px";
  itemStyle.style.fontWeight = "400";
  itemStyle.style.color = "blue";
  // itemStyle.style.display = "inline-block";
  itemStyle.style.width = "13%";
  itemStyle.style.marginTop = "10px";
  itemStyle.style.padding = "0px 10px";
  itemStyle.style.borderRadius = "120px 100px 15px";
  itemStyle.style.boxShadow = "0px 2px 4px 2px rgba(143, 209, 233, 0.9)";
  itemStyle.style.transition = "background-color 0.3s ease-in-out";
  container.style.background = "linear-gradient(to right,#3f87a6, #ebf8e1, #fff49f)";
  itemStyle.parentNode.style.display = "flex";
  itemStyle.parentNode.style.flexDirection = "column";

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
});








export const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
