import { galleryItems }  from "./app.js";

const jsGallery = document.querySelector(".js-gallery");

const galleryList = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__img" src="${preview}" data-source="${original}" alt="${description}" width="100%" >
  </a>
  </li>`
});

jsGallery.insertAdjacentHTML('afterbegin', galleryList.join(''));

const refs = {
jsLightbox: document.querySelector(".js-lightbox"),
lightboxOverlay: document.querySelector(".lightbox__overlay"),
lightboxContent: document.querySelector(".lightbox__content"),
lightboxImg: document.querySelector(".lightbox__image"),
lightboxButton: document.querySelector(".lightbox__button"),
};


const overlayOpen = (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  refs.jsLightbox.classList.add("is-open");
  refs.lightboxImg.src = evt.target.dataset.source;
};

jsGallery.addEventListener('click', overlayOpen);


const overlayClose = (evt) => {
    if (evt.target.nodeName === "IMG") {
    return;
  };
  if (evt.keyCode === 39 || evt.keyCode === 37) {
    return;
  }
  refs.jsLightbox.classList.remove('is-open');
   refs.lightboxImg.src = '';
};

refs.jsLightbox.addEventListener('click', overlayClose);
document.addEventListener('keydown', overlayClose); // any keyboard button