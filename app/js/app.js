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
		/*unit test
		alert(userInput);*/
		$('#list-items').append(
			'<div class="checkbox m-bot">'+
			'<label class="item-width">'+
			'<input type="checkbox" value="">'+
			userInput+
			'</label>'+
			closeButton+
			'</div>');
	}
});