$(".qa-item").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(this).find(".add-icon").toggleClass("d-none");
  $(this).find(".remove-icon").toggleClass("d-block");
  $(this).find(".collapse-content p").toggleClass("show");
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

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 24,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
  },
  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
