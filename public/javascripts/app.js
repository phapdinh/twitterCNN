var $ = require("../../bower_components/jquery/dist/jquery.min.js");
require("../stylesheets/style.css");

function loadData() {
	var input = $('#input-field').val();
	var url = location.origin + '?' + $.param({q: input});
	window.location.assign(url);
};

$('#submit').click(loadData);
$('#input-field').keypress(function(e) {
	if(e.which == 13) {
		loadData();
	}
});

function reloadPage() {
	window.location.reload(true);
}

$('#reload').click(reloadPage);
