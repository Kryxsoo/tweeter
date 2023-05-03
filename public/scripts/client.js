//------------------- Creates Article --------------------------//
const createTweetElement = function(tweet) {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
    const timeStamp = timeago.format(tweet.created_at)
    
  let $tweet = $(`
  <article>
  <div class="tweet">
    <img class ="avatar" src="${tweet.user.avatars}"/>
    <div class="tweeter">
      <div class="tweetMain">
        <div class="tweetHeader">
          <div class="author">
          ${tweet.user.name}
          </div>
          <div class="handle">
            ${tweet.user.handle}
          </div>
        </div>
        <div class="content">
        ${escape(tweet.content.text)}
        </div>
        <div class="tweetFooter">
          <div class="footerLeft">
            <div>${timeStamp}</div>
          </div>
          <div class="footerRight">
            <i class="fa-solid fa-flag tweetIcons" ></i>
            <i class="fa-solid fa-retweet tweetIcons"></i>
            <i class="fa-solid fa-heart tweetIcons"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
  `)
  return $tweet
}
const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

//-------------------- Renders Tweet Data by Prepending --------------------------//
$(document).ready(() => {

const renderTweets = function(tweets) {
  const $newTweetSection = $('#newTweet')
  const $input = $('#tweet-text');
  $newTweetSection.empty();

  tweets.forEach((tweet) => {
    const $tweet = createTweetElement(tweet)
    $tweet.prependTo($newTweetSection)

    $input.val('');
    $input.focus();
})
}
//------------------- AJAX GET Request --------------------------//
const loadTweets = () => {
    $.ajax({
        method: 'GET',
        url: '/tweets',
        dataType: 'JSON'
    }).then((tweets) => {
        renderTweets(tweets);
    });
};
loadTweets();

const $form = $('#new-tweet-form');
//-------------------- Submit Form --------------------------//
$form.on('submit', (event) => {
  let maxLength = 140;
  let $tweetErrors = $('#tweetErrors');
  $tweetErrors.hide();
  const $input = $('#tweet-text')
    event.preventDefault();
    console.log('submitted');

    const data = $form.serialize();

    if ($input.val() === '') {
      $tweetErrors.text('⚠️ Tweet cannot be empty.');
      $tweetErrors.slideDown('slow');
      return;
    }
    
    if ($input.val().length > maxLength) {
      $tweetErrors.text('⚠️ Tweet cannot exceed 10 characters.');
      $tweetErrors.slideDown('slow');
      return;
    }
//--------------------- AJAX POST Request --------------------------//
    $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
    }).then(() => {
        console.log('request resolved');
        loadTweets();
    })
    
})
});