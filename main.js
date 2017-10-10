$(document).ready(function(){
    $('#vacaDateBegin').datepicker(); // runs .datepicker() function for #vacaDateBegin
    $('#vacaDateEnd').datepicker(); // runs .datepicker() for #vacaDateEnd
    $('#firstName').focus();
    $('#submitButton').click(function() { // when submit button is clicked do the following:
            var vacaForm = $('#vaca').serializeArray(); // this takes the form and serializes it as an array
            if ( vacaForm[0].value.length < 1 ) {  // vacaForm[0].value will give us the value of the first item in the array
                $('#first-name-alert').html('<p class="alert">Please enter your first name.</p>');
            };
            if ( vacaForm[1].value.length < 1 ) {
                $('#last-name-alert').html('<p class="alert">Please enter your last name.</p>');
            };
            if ( vacaForm[2].value.length < 1 ) {
                $('#vaca-date-begin').html('<p class="alert">Please enter your departure date.</p>');
            };
            if ( vacaForm[3].value.length < 1 ) {
                $('#vaca-date-end').html('<p class="alert">Please enter your departure date.</p>');
            };

            if ( vacaForm[3].value <= vacaForm[2].value ) {
                $('#vaca-date-begin').html('<p class="alert">Your departure date cannot be after your return date.</p>');
                $('#vaca-date-end').html('<p class="alert">Your return date cannot be before your departure date.</p>');
            };
            if ( vacaForm[0].value.length > 1 && vacaForm[1].value.length > 1 && vacaForm[2].value.length > 9 && vacaForm[3].value.length > 9 && vacaForm[3].value > vacaForm[2].value ) {
                alert('Thank you, ' + vacaForm[0].value + ' ' + vacaForm[1].value + ', your reservation for: ' + vacaForm[2].value + ' through ' + vacaForm[3].value + ' has been confirmed!' );
                $('#first-name-alert, #last-name-alert, #vaca-date-begin, #vaca-date-end').html('');
                $('input[type="text"]').val("");
                $('#firstName').focus();
                return false;
            } else {
                alert('There was a problem submitting your form. Please check the errors highlighted and try again.');
                return false;
            };
    }); // end click function for submit button
}); // end doc ready
