$(document).ready(function () {

  $('.menuToggle').click(function () {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
  });

  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 200) {
      $('.page-header__wrap').addClass('scrolled');
    } else {
      $('.page-header__wrap').removeClass('scrolled');
    }
  });




  // $('.cookies__btn').click(function() {
  //   $(this).closest('.cookies').fadeOut();
  // });


  // $('#data-confirm').closest('form').find('button:submit').prop('disabled', true);
  // $('#data-confirm').change(function () {
  //   if ($('#data-confirm').is(':checked')) {
  //     console.log('+');
  //     $(this).closest('form').find('button:submit').prop('disabled', false);
  //   } else {
  //     console.log('-');
  //     $(this).closest('form').find('button:submit').prop('disabled', true);
  //   }
  // });
});