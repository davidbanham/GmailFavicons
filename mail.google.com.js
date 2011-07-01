$(function () {

		var names = new Array();
		var favicons = new Array();

		// Add as many accounts as you like here.
		// The names array must contain everything in the browser's title bar before the -
		// For example, if my browser's title was:
		//  Crnr Mail - Inbox - david@crnr.com.au
		// I would write:
		//  names.push("Crnr Mail");
		// Remember this is case sensitive.

		names.push("Gmail");
		favicons.push("https://github.com/favicon.png");
		names.push("Your Work Mail");
		favicons.push("http://yourwebsite/favicon.png");

		// You're all done! Go play outside.

		var splitTitle = document.title.split(" - ");

		var link = document.createElement('link');
		link.setAttribute('rel', 'shortcut icon');

		for ( i in names ) {

			if ( splitTitle == names[i] ) {
				link.setAttribute('href', favicons[i]);
				$('head').append(link);
			};
		};

});
