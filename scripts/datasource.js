$(document).ready(function() {

	$('#form').alpaca({
		'dataSource': 'http://www.alpacajs.org/demos/bootstrap/customer-profile/data.json',
		'optionsSource': 'http://www.alpacajs.org/demos/bootstrap/customer-profile/simple-options.json',
		'schemaSource': 'http://www.alpacajs.org/demos/bootstrap/customer-profile/schema.json',
	});

});