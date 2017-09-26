(function () {

	$('#submitButton').click(getFormValues);

	function getFormValues (event) {

		var formValues = [];

		formValues.push($('#inputFirst').val());
		formValues.push($('#inputLast').val());
		formValues.push($('#inputEmail').val());
		formValues.push($('#inputZip').val());
		formValues.push($('#selectAge').val());


		displayFormValues(formValues);
	}

	function displayFormValues (formValues) {

		var display = $('#display');
		var data = '<ul>';

		for (var i=0;i<formValues.length;i++) {
			data += '<li>' + formValues[i] + '</li>';
		}

		data += '</ul>';

		display.empty().append(data);
		$('form').fadeOut('slow');
	}

	function submitButton(){

		alert("Thank you for reaching out, we will be in touch shortly. Cheers!");

	}

})();
