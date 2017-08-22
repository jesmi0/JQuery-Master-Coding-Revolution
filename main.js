$(document).ready(function () {
  var itemLength = $('.cardsContainer .item').length;
  var current = 1;

  //see total length
  $('.totalSlides').text(itemLength);

  $('.cardSlider .btn_prev').on('click', function () {
    if (current > 1) {
      current--;
      showSlide(current);
    } else {
      current = itemLength;
      showSlide(current);
    }
  });

  $('.cardSlider .btn_next').on('click', function () {
      if (current !== itemLength) {
        current++;
        showSlide(current);
      } else {
        current = 1;
        showSlide(current);
      }
    });

  function showSlide(current) {
    $('.cardsContainer .item').removeClass('active');
    $('div[data-id="' + current + '"]').addClass('active');

    $('.currentSlide').text(current);
  }
});
