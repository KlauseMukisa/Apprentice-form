document.addEventListener('DOMContentLoaded', function () {
    const enterpriseForm = document.getElementById('enterpriseForm');
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');
    const page4 = document.getElementById('page4');
    const page5 = document.getElementById('page5');
    const ownershipTypeSelect = document.getElementById('ownershipType');
    const womenOwnershipContainer = document.getElementById('womenOwnershipContainer');

    // Event listener for ownership type change
    ownershipTypeSelect.addEventListener('change', function () {
        if (this.value === 'jointly') {
            womenOwnershipContainer.style.display = 'block';
        } else {
            womenOwnershipContainer.style.display = 'none';
            document.getElementById('womenOwnership').value = ''; // Clear the field if hidden
        }
    });

    // Event listener for form submission
    enterpriseForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Example validation, adjust as needed
        if (!validateEnterpriseForm()) {
            return; // Validation failed, do not proceed
        }

        // Example: Get form data
        const enterpriseData = {
            enterpriseName: document.getElementById('enterpriseName').value,
            ownershipType: document.getElementById('ownershipType').value,
            womenOwnership: document.getElementById('womenOwnership').value,
            establishmentYear: document.getElementById('establishmentYear').value,
            // Add other form fields as needed
        };

        // Example: Log or process the data
        console.log('Enterprise Data:', enterpriseData);

        // Display success message and navigate to next page after delay
        alertMessage.textContent = 'Form submitted successfully!';
        alertContainer.style.display = 'block';
        setTimeout(() => {
            alertContainer.style.display = 'none';
            page4.style.display = 'none';
            page5.style.display = 'block';
            // Change this to the actual next page URL or show/hide logic
        }, 2000);
    });

    // Example: Validate form fields
    function validateEnterpriseForm() {
        // Example: Validate required fields
        const enterpriseName = document.getElementById('enterpriseName').value;
        const ownershipType = document.getElementById('ownershipType').value;
        const establishmentYear = document.getElementById('establishmentYear').value;
        // Validate other fields as needed

        if (!enterpriseName || !ownershipType || !establishmentYear) {
            alert('Please fill in all required fields.');
            return false; // Validation failed
        }

        return true; // Return true if validation passes
    }
});
