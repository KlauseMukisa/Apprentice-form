document.addEventListener("DOMContentLoaded", function () {
    const trainingYes = document.getElementById("trainingYes");
    const trainingNo = document.getElementById("trainingNo");
    const trainingDetailsContainer = document.getElementById("trainingDetailsContainer");
    const trainingDurationContainer = document.getElementById("trainingDurationContainer");
    const skillsForm = document.getElementById("skillsForm");

    trainingYes.addEventListener("change", function () {
        if (this.checked) {
            trainingDetailsContainer.style.display = "block";
            trainingDurationContainer.style.display = "block";
            document.getElementById("skillsType").required = true;
            document.getElementById("trainingDuration").required = true;
        }
    });

    trainingNo.addEventListener("change", function () {
        if (this.checked) {
            trainingDetailsContainer.style.display = "none";
            trainingDurationContainer.style.display = "none";
            document.getElementById("skillsType").required = false;
            document.getElementById("trainingDuration").required = false;
        }
    });

    skillsForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!skillsForm.checkValidity()) {
            e.stopPropagation();
            skillsForm.classList.add("was-validated");
        } else {
            Swal.fire({
                title: "Success!",
                text: "Your skills training details have been submitted successfully.",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            }).then(() => {
                // Hide page2 and show page3
                document.getElementById('page6').style.display = 'none';
                document.getElementById('page7').style.display = 'block';
            });
        }
    });
});