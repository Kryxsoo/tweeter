
$(document).ready(() => {

const renderTweets = function(tweets) {
  const $newTweetSection = $('#newTweet')
  $newTweetSection.empty();

  tweets.forEach((tweet) => {
    const $tweet = createTweetElement(tweet)
    $tweet.prependTo($newTweetSection)
})
}

const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

const createTweetElement = function(tweet) {
    const timeStamp = timeago.format(tweet.created_at)
    
  let $tweet = $(`
  <article>
  <div class="tweet">
    <img src="${tweet.user.avatars}"/>
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

const loadTweets = () => {
    $.ajax({
        method: 'GET',
        url: '/tweets',
    }).then((tweets) => {
        renderTweets(tweets);
    });
};
loadTweets();

const $form = $('#new-tweet-form');

$form.on('submit', (event) => {
    event.preventDefault();
    console.log('submitted');

    const data = $form.serialize();
    console.log(data);

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