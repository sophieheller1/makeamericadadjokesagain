var allTweets = document.querySelectorAll('twitterwidget')
for (i - 0; i < allTweets.length; i++) {
	var username = allTweets[i].shadowRoot.querySelector('.TweetAuthor-screenName')

	if (username && username.textContent === '@realDonaldTrump') {
		username = '@realDadJokes'
		var trumpTweet = tweets[i].shadowRoot.querySelector('.Tweet-text')
		if (trumpTweet) {
			trumpTweet = 'Dad Joke here'
		}
	}
}