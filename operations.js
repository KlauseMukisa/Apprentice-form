$(document).ready(function() {
    // Show/Hide loan details based on loan field
    $('input[name="loan"]').on('change', function() {
        if ($('#loanYes').is(':checked')) {
            $('#loanDetailsContainer').show();
        } else {
            $('#loanDetailsContainer').hide();
        }
    });

    // Show/Hide registration details based on registration field
    $('input[name="registered"]').on('change', function() {
        if ($('#registeredYes').is(':checked')) {
            $('#registrationDetailsContainer').show();
            $('#notRegisteredReasonContainer').hide();
        } else if ($('#registeredNo').is(':checked')) {
            $('#registrationDetailsContainer').hide();
            $('#notRegisteredReasonContainer').show();
        }
    });

    // Form submission handler
    $('#operationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;
        $(this).find('[required]').each(function() {
            if ($(this).val() === '' || $(this).val() === null) {
                $(this).addClass('is-invalid');
                isValid = false;
            } else {
                $(this).removeClass('is-invalid');
            }
        });

        if (isValid) {
            Swal.fire({
                title: 'Success!',
                text: 'Your enterprise operation details have been submitted successfully.',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                $('#page5').hide();
                $('#page6').show();
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in all required fields.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    });
});