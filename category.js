document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#apprenticeForm");
    
    // Handle disability radio buttons
    const disabilityYes = document.querySelector("#disabilityYes");
    const disabilityNo = document.querySelector("#disabilityNo");
    const disabilityTypeContainer = document.querySelector("#disabilityTypeContainer");

    disabilityYes.addEventListener("change", function() {
        disabilityTypeContainer.style.display = 'block';
    });

    disabilityNo.addEventListener("change", function() {
        disabilityTypeContainer.style.display = 'none';
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
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
                document.getElementById('page2').style.display = 'none';
                document.getElementById('page3').style.display = 'block'; // Make sure this ID matches your next page ID
            }, 2000); // Wait for the notification to be visible before transitioning
        });
    });
});
