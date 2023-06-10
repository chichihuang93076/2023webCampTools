$('.qa-item').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).find('.add-icon').toggleClass('d-none');
  $(this).find('.remove-icon').toggleClass('d-block');
  $(this).find('.collapse-content p').toggleClass('show');
});
/*
$('.qa-item').on("click", () => {
  //e.preventDefault();
  //console.log(e.target.classList);
  $(this).toggleClass('active');
  $(this).find('.add-icon').toggleClass('d-none');
  $(this).find('.remove-icon').toggleClass('d-block');
  $(this).find('.collapse-content p').toggleClass('show');
});
*/

$(".backtoTop").on("click", () => {
  gotoTop();
});

function gotoTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
