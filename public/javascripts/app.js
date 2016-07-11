function loadData() {
	var search_term = {
            q: 'water'
    };

	$.ajax({
          /* the 'param' function ensures that our search terms are properly encoded
             see: http://api.jquery.com/jQuery.param/ */
        url: 'https://api.twitter.com/1.1/search/tweets.json?' + $.param(search_term),
          
          /* the data type should be set to jsonp. for more info on that see:
             http://en.wikipedia.org/wiki/JSONP */
        dataType: 'jsonp',
		success: function(data) {
		// uncomment the below to see the data in the console
        console.log(data);
        /* loop through each item inside of data['results'] and
            extract the 'text' property.
            we then use that to create a list item tag (<li>) and append
            that to the HTML element with id 'tweets'
        */
        for (item in data['results']) {
			$('#tweets').append(
				'<li>' + data['results'][item]['text'] + '</li>');
            }
    }});
};

$('#submit').click(loadData);