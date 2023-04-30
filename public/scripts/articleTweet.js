// $(document).ready(() => {
//     const $mainList = $('#newTweet');
//     const $button = $('#tweetButton');
  
//     $button.on('click', (event) => {
//       event.preventDefault();
//       // console.log('i got clicked!!');
//       const $input = $('#tweet-text');
//       const value = $input.val();
      
//       const tweetData = {tweetPost: value}
//       const oneTweetTwo = createTweet(tweetData)
//       // console.log(typeof oneTweet);
//       $(oneTweetTwo).prependTo($mainList);

//       $input.val('');
//       $input.focus();
//     });
//   });

//     const createTweet = (tweetData) => {
//       return `
//       <article>
//       <div class="tweet">
//         <i class="fa-regular fa-face-smile"></i>
//         <div class="tweeter">
//           <div class="tweetMain">
//             <div class="tweetHeader">
//               <div class="author">
//                 Matt
//               </div>
//               <div class="handle">
//                 @mattC
//               </div>
//             </div>
//             <div class="content">
//               ${tweetData.tweetPost}
//             </div>
//             <div class="tweetFooter">
//               <div class="footerLeft">
//                 <div>10 days</div>
//               </div>
//               <div class="footerRight">
//                 <i class="fa-solid fa-flag tweetIcons" ></i>
//                 <i class="fa-solid fa-retweet tweetIcons"></i>
//                 <i class="fa-solid fa-heart tweetIcons"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//       `
//     }