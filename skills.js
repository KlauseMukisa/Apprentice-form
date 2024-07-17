document.addEventListener("DOMContentLoaded", function() {
    // Event listener for training radio buttons
    document.querySelectorAll('input[name="training"]').forEach(function(radio) {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                document.getElementById('trainingDetailsContainer').style.display = 'block';
            } else {
                document.getElementById('trainingDetailsContainer').style.display = 'none';
                // Clear fields if hidden
                document.getElementById('skillsType').value = '';
                document.getElementById('trainingDuration').value = '';
            }
        });
    });

    // Form submission handling
    document.getElementById('skillsForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Show SweetAlert notification
        Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            showConfirmButton: false,
            timer: 1500 // Automatically close alert after 1.5 seconds
        }).then(() => {
            // Automatically show next section (page7) on the same page
            document.getElementById('page6').style.display = 'none';
            document.getElementById('page7').style.display = 'block';
        });
    });
});
