$(document).ready(function() {
    let maxLength = 139;
    let textBox = $('#tweet-text');
    let counter = $('.counter');

    // counter.text(maxLength+` Characters Left`);

    textBox.keydown(function() {
        let characters = $(this).val().length;
        let remaining = maxLength - characters
        if (remaining < 0) {
          alert('You have exceeded the count!')
        } else {
          counter.text(remaining);
          if (remaining < 0) {
            counter.addClass('red');
          } else {
            counter.removeClass('red');
          }
        }
    })
  });