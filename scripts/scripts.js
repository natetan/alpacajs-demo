$(document).ready(function() {
	
	$('#form').alpaca({
		'schema': {
			'title':'Alaska Air (AS) DSO Data',
			'description': 'DSO Inputs for airlines',
			'type':'object',
			'properties': {
				'comments': {
					'type':'string',
					'title':'Comments'
				},
				'blf': {
					'type':'string',
					'title': 'Booked Load Factor'
				},
			},
		}
	});

});