var a = 0;

//User Interface
$(document).ready(function() {
	AOS.init({
		duration: 3000,
	});
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $('#nav').addClass('shrink');
    } else {
      $('#nav').removeClass('shrink');
    }


    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-value').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },

          {
            duration: 7000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          });
      });
      a = 0;
    }

  });
});
