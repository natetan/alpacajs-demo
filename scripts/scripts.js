$(document).ready(function() {
	
	$('#form').alpaca({
		'schema': {
			'title':'SkyWest (OO) DSO Data',
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
				'atc': {
					'type':'string',
					'title': 'Air Traffic Control (ATC)'
				},
				'weather': {
					'type':'string',
					'title': 'Weather (WX)'
				},
				'diversions': {
					'type':'string',
					'title': 'Diversions'
				},
				'cancellations': {
					'type':'string',
					'title': 'Cancellations (XLS)'
				},
				'ots': {
					'type':'string',
					'title': 'Out of Service (OTS)'
				},
				'spares': {
					'type':'string',
					'title': 'Spares'
				},
			},
		},
		'options': {
			'form': {
				'buttons': {
					'submit': {
						'title': 'Test Button',
						'click': test,
					}
				},
			},
			'fields': {
				'comments': {
					'placeholder': 'Please enter some comments here.',
					'type': 'textarea',
					'rows': 3
				},
				'blf': {
					'type': 'textarea',
					'rows': 3
				},
				'atc': {
					'type': 'textarea',
					'rows': 3
				},
				'weather': {
					'type': 'textarea',
					'rows': 3
				},
				'diversions': {
					'type': 'textarea',
					'rows': 3
				},
				'cancellations': {
					'type': 'textarea',
					'rows': 3
				},
				'ots': {
					'type': 'textarea',
					'rows': 3
				},
				'spares': {
					'type': 'textarea',
					'rows': 3
				},
			}
		}
	});

	/*

	Temporary fix to adding css to the Alpaca generated button

	*/

	postRenderButton('.alpaca-form-buttons-container', '.alpaca-form-button');

	function postRenderButton(div, btn) {

		$(div).css({
			textAlign: 'left',
		})

		$(btn).removeClass('btn-default');

		$(btn).css({
			width: '200px',
			height: '44px',
			fontSize: '14px',
			fontWeight: 'bold',
			letterSpacing: '0.2px',
			textAlign: 'center',
			color: '#ffffff',
			backgroundColor: '#48850b',
			boxShadow: '0 0 3px 0 rgba(0, 0, 0, 0.3)',
		});
	}

	/*
	Temporary fix end
	*/

	// $('#verify-button').on('click', verify);

	// function verify() {
	// 	console.log('Button was clicked');
	// 	var val = $('#form').getValue();
	// 	alert(JSON.stringify(val, null, " "));
	// }

	function test() {
		console.log('button was clicked');
		var val = this.getValue();
		if (this.isValid(true)) {
			alert("Valid value: " + JSON.stringify(val, null, "  "));
		} else {
			alert("Invalid value: " + JSON.stringify(val, null, "  "));
		}
	}

});













