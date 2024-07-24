function submitForm() {
    var checkbox = document.getElementById('declarationCheckbox');
    if (checkbox.checked) {
        // Assuming form data is stored in localStorage and needs to be sent to the server
        var formData = {
            surname: localStorage.getItem('surname'),
            otherNames: localStorage.getItem('otherNames'),
            email: localStorage.getItem('email'),
            phoneNumber: localStorage.getItem('phoneNumber'),
            gender: localStorage.getItem('gender'),
            maritalStatus: localStorage.getItem('maritalStatus'),
            age: localStorage.getItem('age'),
            category: localStorage.getItem('category'),
            categorySpecific: localStorage.getItem('categorySpecific'),
            nationality: localStorage.getItem('nationality'),
            residenceCountry: localStorage.getItem('residenceCountry'),
            nin: localStorage.getItem('nin'),
            passport: localStorage.getItem('passport'),
            enterpriseName: localStorage.getItem('enterpriseName'),
            ownershipType: localStorage.getItem('ownershipType'),
            womenOwnership: localStorage.getItem('womenOwnership'),
            establishmentYear: localStorage.getItem('establishmentYear'),
            contactNumber1: localStorage.getItem('contactNumber1'),
            contactNumber2: localStorage.getItem('contactNumber2'),
            businessEmail: localStorage.getItem('businessEmail'),
            poBox: localStorage.getItem('poBox'),
            district: localStorage.getItem('district'),
            subCounty: localStorage.getItem('subCounty'),
            parish: localStorage.getItem('parish'),
            village: localStorage.getItem('village'),
            sector: localStorage.getItem('sector'),
            productsServices: localStorage.getItem('productsServices'),
            employees: localStorage.getItem('employees'),
            annualRevenue: localStorage.getItem('annualRevenue'),
            yearsInOperation: localStorage.getItem('yearsInOperation'),
            training: localStorage.getItem('training'),
            skillsType: localStorage.getItem('skillsType'),
            trainingDuration: localStorage.getItem('trainingDuration'),
            desiredSector: localStorage.getItem('desiredSector')
        };

        // Example of sending the form data to the server using Fetch API
        fetch('your-server-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Application Submitted',
                    text: 'Your application has been successfully submitted!',
                    timer: 3000,
                    showConfirmButton: false
                }).then(() => {
                    // Redirect or clear form data after successful submission
                    localStorage.clear();
                    window.location.href = 'success-page-url'; // Replace with your success page URL
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'There was an issue submitting your application. Please try again.',
                });
            }
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an issue submitting your application. Please try again.',
            });
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Declaration Required',
            text: 'You must agree to the declaration before submitting the application.'
        });
    }
}