document.addEventListener('DOMContentLoaded', function () {
    const enterpriseForm = document.getElementById('enterpriseForm');
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');
    const page4 = document.getElementById('page4');
    const page5 = document.getElementById('page5');

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
            contactNumber: document.getElementById('contactNumber').value,
            email: document.getElementById('email').value,
            poBox: document.getElementById('poBox').value,
            district: document.getElementById('district').value,
            subCounty: document.getElementById('subCounty').value,
            county: document.getElementById('county').value,
            parish: document.getElementById('parish').value,
            village: document.getElementById('village').value
        };

        // Example: Log or process the data
        console.log('Enterprise Data:', enterpriseData);

        // Example: Submit form or navigate to the next step
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Success!',
        //     text: 'Form submitted successfully!',
        //     timer: 2000,
        //     showConfirmButton: false
        // });
            alertMessage.textContent = 'Form submitted successfully!';
            alertContainer.style.display = 'block';
            setTimeout(() => {
                // Navigate to the next page or perform any other desired action
                alertContainer.style.display = 'none';
                page4.style.display = 'none';
                page5.style.display = 'block';
               // Change this to the actual next page URL
            }, 2000);
        });
    });

    // Example: Validate form fields
    function validateEnterpriseForm() {
        // Example: Validate required fields
        const enterpriseName = document.getElementById('enterpriseName').value;
        const ownershipType = document.getElementById('ownershipType').value;
        const establishmentYear = document.getElementById('establishmentYear').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const email = document.getElementById('email').value;
        const district = document.getElementById('district').value;
        const subCounty = document.getElementById('subCounty').value;
        const county = document.getElementById('county').value;
        const parish = document.getElementById('parish').value;
        const village = document.getElementById('village').value;

       
        return true; // Return true if validation passes
    }

    // Example: Function to navigate to the next page


// nationalityForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     alertMessage.textContent = 'Form submitted successfully!';
//     alertContainer.style.display = 'block';
//     setTimeout(() => {
//         // Navigate to the next page or perform any other desired action
//         alertContainer.style.display = 'none';
//         page3.style.display = 'none';
//         page4.style.display = 'block';
//        // Change this to the actual next page URL
//     }, 2000);
// });
// });