function loadData() {
	var input = $('#input-field').val();
	var url = location.origin + '?' + $.param({q: input});
	window.location.assign(url);
};

$('#submit').click(loadData);

function reloadPage() {
	window.location.reload(true);
}

$('#reload').click(reloadPage);