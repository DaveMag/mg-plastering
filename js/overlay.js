const createOverLay = () => {
  const modal = document.getElementById("myModal");
  const arch = document.getElementById("arch");
  const frame = document.getElementById("frame");
  const fibrous = document.getElementById("fibrous");
  const modalImg = document.getElementById("img");
  const caption = document.getElementById("caption-overlay");
  const span = document.getElementsByClassName("close")[0];

  frame.onclick = function (e) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    caption.innerHTML = e.target.alt;
  };
  fibrous.onclick = function (e) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    caption.innerHTML = e.target.alt;
  };
  arch.onclick = function (e) {
    modal.style.display = "block";
    modalImg.src = e.target.src;
    caption.innerHTML = e.target.alt;
  };

  span.onclick = function () {
    modal.style.display = "none";
  };
};

createOverLay();
