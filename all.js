$(".backtoTop").on("click", () => {
  gotoTop();
});

function gotoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
