document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#operationForm");
    const trainingYesRadio = document.querySelector("#trainingYes");
    const trainingNoRadio = document.querySelector("#trainingNo");
    const trainingDetailsContainer = document.querySelector("#trainingDetailsContainer");

    trainingYesRadio.addEventListener("change", function() {
        trainingDetailsContainer.style.display = 'block';
    });

    trainingNoRadio.addEventListener("change", function() {
        trainingDetailsContainer.style.display = 'none';
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
        } else {
            Swal.fire({
                title: "Success!",
                text: "Form submitted successfully!",
                icon: "success", 
                showConfirmButton: false,
                timer: 2000 // Auto-dismiss after 2 seconds
            }).then(() => {
                document.getElementById('page6').style.display = 'none';
                document.getElementById('page7').style.display = 'block'; // Ensure this ID matches your next page ID
            });
        }
    });
});