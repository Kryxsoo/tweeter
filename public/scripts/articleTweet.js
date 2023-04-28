$(document).ready(() => {
    const $node = $('<article>')  ;
    const $mainList = $('#newTweet');
  
    $mainList.append($node);
  
    const $button = $('#tweetButton');
  
    $button.on('click', (event) => {
      event.preventDefault();
      console.log('i got clicked!!');
      const $input = $('#tweet-text');
      const value = $input.val();
  
      const $li = $('<article>').text(value);
  
      $li.prependTo($mainList);

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