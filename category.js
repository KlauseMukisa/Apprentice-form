
document.addEventListener('DOMContentLoaded', function () {
    const disabilityYes = document.getElementById('disabilityYes');
    const disabilityNo = document.getElementById('disabilityNo');
    const disabilityTypeContainer = document.getElementById('disabilityTypeContainer');
    const apprenticeForm = document.getElementById('apprenticeForm');
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');

    disabilityYes.addEventListener('change', function () {
        if (disabilityYes.checked) {
            disabilityTypeContainer.style.display = 'block';
        }
    });

    disabilityNo.addEventListener('change', function () {
        if (disabilityNo.checked) {
            disabilityTypeContainer.style.display = 'none';
        }
    });

    apprenticeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Display alert notification
        alertMessage.textContent = 'Form submitted successfully!';
        alertContainer.style.display = 'block';

        // Hide the alert after 2 seconds and navigate to the next page
        setTimeout(function () {
            alertContainer.style.display = 'none';

            // Navigate to the next page (you can replace this with your actual navigation logic)
            document.getElementById('page2').style.display = 'none';
            document.getElementById('page3').style.display = 'block'; // Ensure page3 exists and is the next page
        }, 2000);
    });
});

