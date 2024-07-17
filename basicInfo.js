document.addEventListener('DOMContentLoaded', () => {
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        initialCountry: "ug", // Set the default country to Uganda (you can change this to any country)
        preferredCountries: ["ug", "ke", "tz", "rw", "us"], // You can add more preferred countries
        separateDialCode: true
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const personalInfoForm = document.getElementById('personalInfoForm');
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');

    personalInfoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Display alert notification
        alertMessage.textContent = 'Form submitted successfully!';
        alertContainer.style.display = 'block';

        // Hide the alert after 2 seconds and navigate to the next page
        setTimeout(function () {
            alertContainer.style.display = 'none';
            page1.style.display = 'none';
            page2.style.display = 'block';
        }, 2000);
    });
});

