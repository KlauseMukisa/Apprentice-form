$(document).ready(function() {
    // Show/Hide fields based on the type of business ownership
    $('#ownershipType').on('change', function() {
        if ($(this).val() === 'Joint Ownership') {
            $('#womenOwnershipContainer').show();
        } else {
            $('#womenOwnershipContainer').hide();
        }
    });

    // Form submission handler
    $('#enterpriseForm').on('submit', function(event) {
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
                text: 'Your enterprise basic details have been submitted successfully.',
                icon: 'success',
                showConfirmButton: false,
                timer: 2000
            }).then(function() {
                $('#page4').hide();
                $('#page5').show();
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