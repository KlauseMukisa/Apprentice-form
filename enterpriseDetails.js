document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#enterpriseForm");
    const ownershipType = document.querySelector("#ownershipType");
    const womenOwnershipContainer = document.querySelector("#womenOwnershipContainer");
    const contactNumber1 = document.querySelector("#contactNumber1");
    const contactNumber2 = document.querySelector("#contactNumber2");
    const districtSelect = document.querySelector("#district");

    // Initialize intl-tel-input for phone number fields
    const iti1 = intlTelInput(contactNumber1, {
        initialCountry: "ug",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    const iti2 = intlTelInput(contactNumber2, {
        initialCountry: "ug",
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });

    // Populate districts
    const districts = ["Kampala", "Wakiso", "Mukono", "Gulu", "Lira", "Mbale", "Jinja", "Soroti", "Mbarara", "Kabale", "Kasese", "Bushenyi"];
    districts.forEach(district => {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });

    // Show women ownership field based on ownership type
    ownershipType.addEventListener("change", function() {
        if (ownershipType.value === "Joint Ownership") {
            womenOwnershipContainer.style.display = 'block';
            document.querySelector("#womenOwnership").required = true;
        } else {
            womenOwnershipContainer.style.display = 'none';
            document.querySelector("#womenOwnership").required = false;
        }
    });

    // Handle form submission with validation
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add("was-validated");
        } else {
            // Additional validation for intl-tel-input fields
            if (!iti1.isValidNumber() || !iti2.isValidNumber()) {
                Swal.fire({
                    title: "Error!",
                    text: "Please enter valid phone numbers.",
                    icon: "error",
                });
                return;
            }

            Swal.fire({
                title: "Success!",
                text: "Form submitted successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 2000 // Auto-dismiss after 2 seconds
            }).then(() => {
                setTimeout(() => {
                    document.getElementById('page4').style.display = 'none';
                    // Assuming the next page has the ID 'page5'
                    document.getElementById('page5').style.display = 'block'; 
                }, 2000);
            });
        }
    });
});