// Twitter button
function(d,s,id)
{
	var js,fjs=d.getElementsByTagName(s)[0];
	if(!d.getElementById(id))
	{
		js=d.createElement(s);
		js.id=id;
		js.src="https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js,fjs);
	}
}
(document,"script","twitter-wjs");
var $postTweet = $('<div id="tweet"/>'),
	newHref = document.createElement('a')

var $newdiv1 = $('<div id="object1"/>'),
    newdiv2 = document.createElement('div'),
    existingdiv1 = document.getElementById('foo');