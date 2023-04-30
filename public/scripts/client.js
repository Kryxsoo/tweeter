
// Test Data
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const renderTweets = function(tweets) {
  const newTweetSection = $(`#newTweet`)
  tweets.forEach((tweet) => {
    const $tweet = createTweetElement(tweet)
    $tweet.prependTo(newTweetSection)
})
}
  // calls createTweetElement for each tweet
//   const $mainList = $('#newTweet');
//   const $oneTweetTwo = createTweetElement(tweetData)
//   // takes return value and appends it to the tweets container
//   $oneTweetTwo.prependTo($mainList);

const createTweetElement = function(tweet) {
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
          ${tweet.content.text}
        </div>
        <div class="tweetFooter">
          <div class="footerLeft">
            <div>${tweet.created_at}</div>
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

$(document).ready(() => {
renderTweets(data);
});