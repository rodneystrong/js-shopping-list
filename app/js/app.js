$(document).ready(function() {
	/*global vars */
	/*allowing the enter key to trigger submit*/
	//unit test
	//alert('yo');
	function enterKey() {
		$('#the-input').on('keydown', function(e){
			if(e.which==13){
				displayValue();
			}
		});
	}
	enterKey();

	function displayValue() {
		var userInput = $('#the-input').val();
		alert(userInput);
	}
	displayValue();
});