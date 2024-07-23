document.addEventListener("DOMContentLoaded", function() {
    // Handle disability option visibility
    const disabilityYes = document.getElementById('disabilityYes');
    const disabilityNo = document.getElementById('disabilityNo');
    const disabilityTypeContainer = document.getElementById('disabilityTypeContainer');

    disabilityYes.addEventListener('change', function() {
        disabilityTypeContainer.style.display = 'block';
    });

    disabilityNo.addEventListener('change', function() {
        disabilityTypeContainer.style.display = 'none';
    });

    // Handle form submission
    const apprenticeForm = document.getElementById('apprenticeForm');
    apprenticeForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        if (apprenticeForm.checkValidity()) {
            // Show success notification
            Swal.fire({
                icon: 'success',
                title: 'Form Submitted',
                text: 'Your user category details have been submitted successfully.',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Hide page2 and show page3
                document.getElementById('page2').style.display = 'none';
                document.getElementById('page3').style.display = 'block';
            });
        } else {
            // Handle form validation errors
            apprenticeForm.classList.add('was-validated');
        }
    });
});