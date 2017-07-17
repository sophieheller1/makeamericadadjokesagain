// console.log('i work')
var tweets = document.querySelectorAll('twitterwidget');
for (var i = 0; i < tweets.length; i++) {
	var username = tweets[i].shadowRoot.querySelector('.TweetAuthor-screenName')
	var name = tweets[0].shadowRoot.querySelector('.TweetAuthor-name')

	if (username && username.textContent === '@realDonaldTrump') {
		username.textContent = '@realDadJokes'
		name.textContent 'Dad J. Joke'
		var trumpTweet = tweets[i].shadowRoot.querySelector('.Tweet-text')
		if (trumpTweet) {
			trumpTweet.innerText = 'Dad Joke here'
		}
	}
}