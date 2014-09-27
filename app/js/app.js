$(document).ready(function() {
	/*global vars */
	//unit test
	//alert('yo');
	var closeButton = '<span class="close-button"><i class="fa fa-close"></i></span>'; 

	/*allowing the enter key to trigger submit*/
	function enterKey() {
		$('#the-input').on('keydown', function(e){
			if(e.which==13){
				displayValue();
			}
		});
	}
	enterKey();

	/*grabs the user input and sets it to a var*/
	function displayValue() {
		var userInput = $('#the-input').val();
		var theOutput = '<div class="checkbox m-bot">'+
						'<label class="item-width">'+
						'<input type="checkbox" value="">'+
						userInput+
						'</label>'+
						closeButton+
						'</div>';
		/*unit test
		alert(userInput);*/
		//puts theOutput to the top of the list with 'prepend' as opposed to 'append' which puts it at the bottom
		$('#list-items').prepend(theOutput).slideDown();
		//setting the input field to be empty again
		$('#the-input').val('');
	}
	//the delete button function
	/*grab the element for deleting*/
	$('.close-button').on('click', function() {
		$('.checkbox').closest().remove();
	})
});