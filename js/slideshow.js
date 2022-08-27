const images = {
  "Fibrous Plaster ceiling": "img/halfStar-ceiling.jpg",
  "Middle Stairs": "img/midStairs-center.jpg",
  "Swirl Stairs": "img/swirlStairs-center.jpg",
};

const imagesKeys = Object.keys(images);
const imagesCount = imagesKeys.length;
let imageToShowCount = 0;

// Display images in a slideshow
const changeImg = () => {
  for (let i = 0; i < imagesCount; i += 1) {
    images[imagesKeys[i]];
  }
  imageToShowCount++;
  if (imageToShowCount > imagesCount) {
    imageToShowCount = 1;
  }
  document.slideshow.src = images[imagesKeys[imageToShowCount - 1]];
  document.getElementById("text").innerHTML = imagesKeys[imageToShowCount - 1];
  timeoutID = setTimeout(changeImg, 3000);
};
window.addEventListener("load", changeImg);

//When clicking next the images display forwards
document.getElementById("next").addEventListener("click", function nextSlide() {
  for (let i = 0; i < imagesCount; i += 1) {
    images[imagesKeys[i]];
  }
  imageToShowCount += 1;
  if (imageToShowCount > imagesCount) {
    imageToShowCount = 1;
  }
  document.slideshow.src = images[imagesKeys[imageToShowCount - 1]];
  document.getElementById("text").innerHTML = imagesKeys[imageToShowCount - 1];
  clearTimeout(timeoutID);
  timeoutID = setTimeout(changeImg, 3000);
});

// When clicking previous images display backwards
document.getElementById("previous").addEventListener(
  "click",
  function preSlide() {
    for (let i = 0; i > imagesCount; i -= 1) {
      images[imagesKeys[i]];
    }
    imageToShowCount--;
    if (imageToShowCount > imagesCount) {
      imageToShowCount = 1;
    }
    if (imageToShowCount === 0) {
      imageToShowCount = imagesCount;
    }
    document.slideshow.src = images[imagesKeys[imageToShowCount - 1]];
    document.getElementById("text").innerHTML =
      imagesKeys[imageToShowCount - 1];
    clearTimeout(timeoutID);

    timeoutID = setTimeout(changeImg, 3000);
  },
  false
);
