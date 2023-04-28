$(document).ready(() => {
    const $mainList = $('#newTweet');
    const $button = $('#tweetButton');
  
    $button.on('click', (event) => {
      event.preventDefault();
      // console.log('i got clicked!!');
      const $input = $('#tweet-text');
      const value = $input.val();

      let tmpl = $('#tweetTemplate').html();
      // Mustache.parse(tmpl);
      
      const tweetData = {tweetPost: value}
      const oneTweet = Mustache.render(tmpl, tweetData)
      // console.log(typeof oneTweet);
      $(oneTweet).prependTo($mainList);

      $input.val('');
      $input.focus();
    });
  });


  // caused bubbling
  // $( "a" ).on( "click", function( event ) {
  //   event.preventDefault();
  //   $( "<div>" )
  //     .append( "default " + event.type + " prevented" )
  //     .appendTo( "#log" );
  // }); 