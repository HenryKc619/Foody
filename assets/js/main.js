var swiper = new Swiper('.reviews-slider', {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 3,
    },
    1028: {
      slidesPerView: 4,
    },
  },
});
var swiper = new Swiper('.product-slide', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1500: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});


// quantity change js
var proQty = $('.pro-qty');
proQty.prepend('<span class="dec qtybtn">-</span>');
proQty.append('<span class="inc qtybtn">+</span>');
proQty.on('click', '.qtybtn', function () {
  var $button = $(this);
  var oldValue = $button.parent().find('input').val();
  if ($button.hasClass('inc')) {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find('input').val(newVal);
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the buttons and grids
  const gridbtn1 = document.querySelector('.btn1');
  const gridbtn2 = document.querySelector('.btn2');
  const gridbtn3 = document.querySelector('.btn3');
  const gridbtn4 = document.querySelector('.btn4');
  const gridbtn5 = document.querySelector('.btn5');

  const gridbtnshow1 = document.querySelector('.btn1-show');
  const gridbtnshow2 = document.querySelector('.btn2-show');
  const gridbtnshow3 = document.querySelector('.btn3-show');
  const gridbtnshow4 = document.querySelector('.btn4-show');
  const gridbtnshow5 = document.querySelector('.btn5-show');

  // Hide the gridbtnshow2 initially
  gridbtnshow2.style.display = 'none';
  gridbtnshow3.style.display = 'none';
  gridbtnshow4.style.display = 'none';
  gridbtnshow5.style.display = 'none';

  // Add event listeners to the buttons
  gridbtn1.addEventListener('click', () => {
    gridbtnshow1.style.display = 'grid';
    gridbtnshow2.style.display = 'none';
    gridbtnshow3.style.display = 'none';
    gridbtnshow4.style.display = 'none';
    gridbtnshow5.style.display = 'none';
  });

  gridbtn2.addEventListener('click', () => {
    gridbtnshow1.style.display = 'none';
    gridbtnshow2.style.display = 'grid';
    gridbtnshow3.style.display = 'none';
    gridbtnshow4.style.display = 'none';
    gridbtnshow5.style.display = 'none';
  });
  gridbtn3.addEventListener('click', () => {
    gridbtnshow1.style.display = 'none';
    gridbtnshow2.style.display = 'none';
    gridbtnshow3.style.display = 'grid';
    gridbtnshow4.style.display = 'none';
    gridbtnshow5.style.display = 'none';
  });
  gridbtn4.addEventListener('click', () => {
    gridbtnshow1.style.display = 'none';
    gridbtnshow2.style.display = 'none';
    gridbtnshow3.style.display = 'none';
    gridbtnshow4.style.display = 'grid';
    gridbtnshow5.style.display = 'none';
  });
  gridbtn5.addEventListener('click', () => {
    gridbtnshow1.style.display = 'none';
    gridbtnshow2.style.display = 'none';
    gridbtnshow3.style.display = 'none';
    gridbtnshow4.style.display = 'none';
    gridbtnshow5.style.display = 'grid';
  });
});