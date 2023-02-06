$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});

// submit
const scriptURL = 'https://script.google.com/macros/s/AKfycbymiFKiN56p5N7rBk7m0J3R0Ikk4zTbyokVJrZJwGkKeRZExeY2hxG7ymz0cMox0wZ3/exec'
const form = document.forms['contactMessage']
const success = document.getElementById('success');
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      success.innerHTML = "     Submit Successfully";
      setTimeout(function () {
        success.innerHTML = "";
      }, 500)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})