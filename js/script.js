/*--------- jQuery ---------*/

$(document).ready(function () {

	/*--------- scroll ---------*/

	var menu = $('.menu'),
		menuLinks = menu.find('a');

	menuLinks.on('click', function (event) {
		event.preventDefault();

		var id = this.hash;

		$('html, body').animate({ scrollTop: $(id).offset().top }, 600, function () {
			window.location.hash = id;
		})
	});
});
