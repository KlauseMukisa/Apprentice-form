// logout.js
document.addEventListener('DOMContentLoaded', function() {
    // Select the logout button
    var logoutButton = document.querySelector('.nav-item .btn.btn-danger');

    // Add click event listener to the logout button
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default action
        window.location.href = 'index.html'; // Redirect to index.html
    });
});
