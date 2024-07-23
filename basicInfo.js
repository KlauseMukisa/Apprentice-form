document.addEventListener("DOMContentLoaded", function() {
    // Initialize the intl-tel-input plugin
    const input = document.querySelector("#phone");
    const iti = window.intlTelInput(input, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // For formatting/placeholders etc.
    });

    // Handle form submission
    const form = document.getElementById("personalInfoForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        if (form.checkValidity()) {
            // Show success notification
            Swal.fire({
                icon: 'success',
                title: 'Form Submitted',
                text: 'Your personal information has been submitted successfully.',
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Hide page1 and show page2
                document.getElementById("page1").style.display = "none";
                document.getElementById("page2").style.display = "block";
            });
        } else {
            // Handle form validation errors
            form.classList.add('was-validated');
        }
    });
});