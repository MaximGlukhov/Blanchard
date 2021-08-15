$(function () {
  $(".section-catalog__list-accordeon").accordion({
    collapsible: true,
    active: false,
    animate: 100,
    heightStyle: "content"
  });
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.section-catalog__item-accordeon__btn').addEventListener('click', function() {
    $( function() {
      $('.section-catalog__list-accordeon').accordion("refresh");
    });
  })
})



