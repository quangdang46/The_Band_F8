// Auto change text color with filter
var authorLink = $('.author-link')[0];

var angular = 0;
setInterval(() => {
  $(authorLink).css({
    filter: `hue-rotate(${angular}deg)`,
  });

  angular += 20;
  if (angular > 360) angular = 0;
}, 500);

// Toggle menu
function handleToggleMenu() {
  $('.nav-list').toggleClass('active');
  if (!$(this).hasClass('active')) {
    var subnavList = $('[data-toggle]')[0].dataset.toggle;
    $(`.${subnavList}`).removeClass('active');
  }
}
$('.menu-btn').on('click', handleToggleMenu);
$('[data-toggle]').on('click', function () {
  var subnavList = this.dataset.toggle;
  $(`.${subnavList}`).toggleClass('active');
});

// Scrolling Smooth
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    handleToggleMenu();
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

