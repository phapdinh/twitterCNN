function loadData() {
	var input = $('#input-field').val();
	var url = 'http://localhost:3000/?' + $.param({q: input});
	console.log(url);
	window.location.assign(url);
};

$('#submit').click(loadData);