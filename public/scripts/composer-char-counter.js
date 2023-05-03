$(document).ready(function() {
  let maxLength = 10;
  let textBox = $('#tweet-text');
  let counter = $('.counter');
  let newTweet = $('#newTweet');

  textBox.on('input', function() {
    let characters = $(this).val().length;
    let remaining = maxLength - characters;
    counter.text(remaining);
    if (remaining < 0) {
      counter.addClass('red');
    } else {
      counter.removeClass('red');
    }
  });

  // $('#new-tweet-form').submit(function(event) {
  //   event.preventDefault();

  //   let tweetContent = textBox.val().trim();
  //   if (!tweetContent) {
  //     newTweet.text('⚠️ Tweet cannot be empty.');
  //     newTweet.slideDown('slow');
  //   } else if (maxLength - tweetContent.length < 0) {
  //     newTweet.text('⚠️ Tweet cannot exceed 140 characters.');
  //     newTweet.slideDown('slow');
  //   } else {
  //     if (newTweet.is(':visible')) {
  //       newTweet.slideUp('slow');
  //     }
  //     else {
  //       this.submit();
  //     }
  //   }
  // });
});