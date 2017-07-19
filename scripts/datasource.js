$(document).ready(function() {

	console.log(getJson('./sources/data.json'));
	console.log(getJson('./sources/options.json'));
	console.log(getJson('./sources/schema.json'));

	$('#form').alpaca({
		'dataSource': getJson('./sources/data.json'),
		'optionsSource': getJson('./sources/options.json'),
		'schemaSource': getJson('./sources/schema.json'),
	});

	function getJson(file) {
		return $.getJSON(file);
	}
});