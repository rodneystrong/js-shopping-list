$(document).ready(function() {
	/*global vars */
	//unit test
	//alert('yo');

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
		alert(userInput);
	}
	displayValue();
});