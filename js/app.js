export const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
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

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе img, и указываться в href ссылки(это необходимо для доступности).
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

// const jsGallery = document.querySelector(".js-gallery");
// const galleryList = galleryItems.map(el => {
//   const makeListOfImg = `<li class="gallery__item"><a class="gallery__link" href="${el.original}"><img class="gallery__img" src="${el.preview}" data-source="${el.original}" alt="${el.description}" width="100%" ></a></li>`;
//   return makeListOfImg;
// });


// const jsLightbox = document.querySelector(".js-lightbox");
// const lightboxOverlay = document.querySelector(".lightbox__overlay");
// const lightboxContent = document.querySelector(".lightbox__content");
// const lightboxImg = document.querySelector(".lightbox__image");
// const lightboxButton = document.querySelector(".lightbox__button");

// jsGallery.insertAdjacentHTML('afterbegin', galleryList.join(''));


// const overlayOpen = (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   jsLightbox.classList.add("is-open");
//   lightboxImg.src = evt.target.dataset.source;
// };

// jsGallery.addEventListener('click', overlayOpen);

// const overlayClose = () => {
//   jsLightbox.classList.remove('is-open');
//    lightboxImg.src = '';
// };

// lightboxButton.addEventListener('click', overlayClose);


// const jsGallery = document.querySelector(".js-gallery");
// const galleryList = galleryItems.map(({ preview, original, description }) => {
//   return `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//   <img class="gallery__img" src="${preview}" data-source="${original}" alt="${description}" width="100%" >
//   </a>
//   </li>`
// });
// jsGallery.insertAdjacentHTML('afterbegin', galleryList.join(''));

// const jsLightbox = document.querySelector(".js-lightbox");
// const lightboxOverlay = document.querySelector(".lightbox__overlay");
// const lightboxContent = document.querySelector(".lightbox__content");
// const lightboxImg = document.querySelector(".lightbox__image");
// const lightboxButton = document.querySelector(".lightbox__button");




// const overlayOpen = (evt) => {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   jsLightbox.classList.add("is-open");
//   lightboxImg.src = evt.target.dataset.source;
// };

// jsGallery.addEventListener('click', overlayOpen);

// const overlayClose = () => {
//   jsLightbox.classList.remove('is-open');
//    lightboxImg.src = '';
// };

// lightboxButton.addEventListener('click', overlayClose);







