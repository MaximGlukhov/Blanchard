  $('.modal .modal__btn').on('click', function () {
    $(this).closest('.modal').removeClass('show');
    return false;
  })


$(".section-gallery__img").on("click", function() {
  $('.modal').addClass("show");
  let src = $(this).find($("img")).attr("src");
  console.log(src)
  $('.modal').find($(".modal__img")).attr("src", src);
})






