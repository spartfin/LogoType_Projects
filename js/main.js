/* eslint-disable no-shadow */
'use strict';

(function () {
  // Preview slides button
  var activeItem = 0;
  var prevItem = 0;

  var previewSlide = document.getElementsByClassName('preview__slide');
  for (var i = 0; i < previewSlide.length; i++) {
    (function (i) {
      previewSlide[i].addEventListener('click', function () {
        prevItem = activeItem;
        activeItem = i;
        changeActiveItem();
      });
    })(i);
  }

  var changeActiveItem = function () {
    previewSlide[prevItem].classList.remove('preview__slide_Active');
    previewSlide[activeItem].classList.add('preview__slide_Active');
  };
})();
