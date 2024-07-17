document.addEventListener("DOMContentLoaded", function() {
    // Event listener for loan radio buttons
    document.querySelectorAll('input[name="loan"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                document.getElementById('loanDetailsContainer').style.display = 'block';
            } else {
                document.getElementById('loanDetailsContainer').style.display = 'none';
            }
        });
    });

    // Event listener for registration radio buttons
    document.querySelectorAll('input[name="registered"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                document.getElementById('registrationDetailsContainer').style.display = 'block';
            } else {
                document.getElementById('registrationDetailsContainer').style.display = 'none';
                document.getElementById('notRegisteredReason').value = ''; // Clear reason textarea
            }
        });
    });

    // Form submission handling
    document.getElementById('operationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Show SweetAlert notification
        Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            showConfirmButton: false,
            timer: 1500 // Automatically close alert after 1.5 seconds
        });

        // Delay before navigating to the next page (adjust as needed)
        setTimeout(function() {
            // Hide current page
            document.getElementById('page5').style.display = 'none';

            // Show next section or navigate to the next form part (replace with actual navigation logic)
            // Example: Show next section (assuming you have multiple sections on the same page)
            document.getElementById('page6').style.display = 'block';
        }, 1500); // Delay matches SweetAlert timer
    });
});