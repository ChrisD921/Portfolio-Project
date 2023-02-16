// smooth scrolling for anchor links
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
  
  // play audio clips
  $('audio').on('play', function() {
    $('audio').not(this).each(function() {
      this.pause();
      this.currentTime = 0;
    });
  });
  
  // toggle active class on navbar links
  $(window).on('scroll', function() {
    $('section').each(function() {
      if ($(window).scrollTop() >= $(this).offset().top - 200) {
        var id = $(this).attr('id');
        $('nav a').removeClass('active');
        $('nav a[href="#' + id + '"]').addClass('active');
      }
    });
  });
  
  // submit contact form with emailJS
  $('#contact-form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var formData = form.serialize();
    var serviceID = 'default_service';
    var templateID = 'template_your_template_id_here';
  
    form.find('button').text('Sending...');
    emailjs.send(serviceID, templateID, formData)
      .then(function() {
        form.find('button').text('Sent!');
        form[0].reset();
      }, function(error) {
        form.find('button').text('Error!');
        console.log('FAILED...', error);
      });
  });