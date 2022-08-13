const btnScroll = document.getElementById("btn-scroll");
const scrollWindow = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
btnScroll.addEventListener("click", scrollWindow);
