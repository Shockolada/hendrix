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

  $('.grid').masonry({
    itemSelector: '.grid-item',
  });

  $('.direction__link').click(function (evt) {
    evt.preventDefault();
    var dataLinkId, tabContent;

    dataLinkId = $(this).data('id');
    tabContent = $('#' + dataLinkId);

    $('.direction__link').removeClass('active');
    $(this).addClass('active');

    $('.direction__content').css('display', 'none')

    tabContent.fadeIn(200);

    if($(window).width() < 768) {
      var top = $(tabContent).offset().top - 70;
      $('body,html').animate({
        scrollTop: top
      }, 300);
    }
  });


  $('.about-block__link').click(function (evt) {
    evt.preventDefault();
    var dataLinkId, tabContent;

    dataLinkId = $(this).data('id');
    tabContent = $('#' + dataLinkId);

    $('.about-block__link').removeClass('active');
    $(this).addClass('active');

    $('.about-block__info').css('display', 'none')

    tabContent.fadeIn(200);
  });

});