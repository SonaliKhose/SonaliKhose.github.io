$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
      e.preventDefault();
      // Send form data using AJAX
      $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        success: function(response) {
          // Show success message
          $('#contact-form').html('<p class="success-message">Your message has been sent!</p>');
        }
      });
    });
  });
  $(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
      e.preventDefault();
      // Send form data using AJAX
      $.ajax({
        url: $(this).attr('action'),
        method: $(this).attr('method'),
        data: $(this).serialize(),
        success: function(response) {
          // Show success message
          $('#contact-form').html('<p class="success-message">Your message has been sent!</p>');
        }
      });
    });
  });
    