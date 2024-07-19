document.addEventListener("DOMContentLoaded", function() {
    const phoneInputField = document.querySelector("#phone");
    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: "auto",
        geoIpLookup: function(success, failure) {
            fetch("https://ipinfo.io/json")
                .then(response => response.json())
                .then(data => success(data.country))
                .catch(() => success("US"));
        },
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    const form = document.querySelector("#personalInfoForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
            return;
        }

        if (!iti.isValidNumber()) {
            swal({
                title: "Invalid phone number!",
                text: "Please enter a valid phone number.",
                icon: "error",
                buttons: false,
                timer: 2000 // Auto-dismiss after 2 seconds
            });
            return;
        }

        swal({
            title: "Success!",
            text: "Form submitted successfully!",
            icon: "success",
            buttons: false,
            timer: 2000 // Auto-dismiss after 2 seconds
        }).then(() => {
            setTimeout(() => {
                document.getElementById('page1').style.display = 'none';
                document.getElementById('page2').style.display = 'block';
            }, 2000); // Wait for the notification to be visible before transitioning
        });
    });
});
