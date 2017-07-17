// console.log('i work')
var tweets = document.querySelectorAll('twitterwidget');
for (var i = 0; i < tweets.length; i++) {
	var username = tweets[i].shadowRoot.querySelector('.TweetAuthor-screenName')
	var authorName = tweets[i].shadowRoot.querySelector('.TweetAuthor-name')
	var avatar = tweets[i].shadowRoot.querySelector('.Avatar')

	if (username && username.textContent === '@realDonaldTrump') {
		username.textContent = '@realDadJokes'
		authorName.textContent = 'Dad J. Joke'
		avatar.src = 'icon.png'
		var trumpTweet = tweets[i].shadowRoot.querySelector('.Tweet-text')
		if (trumpTweet) {
			trumpTweet.innerText = 'Dad Joke here'
		}
	}
}