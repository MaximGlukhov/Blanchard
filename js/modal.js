$(document).on('click', '[data-toggle="modal"]', function () {
    var target = $(this).attr('data-target');
    console.log(target);
    $(target).addClass('show');
    return false;
  });

  $('.modal .modal__btn').on('click', function () {
    $(this).closest('.modal').removeClass('show');
    return false;
  })




