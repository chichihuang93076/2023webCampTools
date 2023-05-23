// let mybtn = document.querySelector("#filterbtn");

// mybtn.addEventListener("click", () => {
//   mybtn.classList.toggle("active");
// });

$("#filterbtn").on("click", function () {
  this.classList.toggle("active");
});

$("#filtersort").on("click", function () {
  this.classList.toggle("active");
});

$(".btn2").on("click", function () {
  console.log(this);
  this.classList.toggle("active");
});
