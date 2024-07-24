  // Populate the form with user data when the page loads
  function loadProfileData() {
    // Fetch user profile data from local storage or server
    // Example using local storage for simplicity
    const userProfile = JSON.parse(localStorage.getItem('userProfile')) || {};

    document.getElementById('firstName').value = userProfile.firstName || '';
    document.getElementById('lastName').value = userProfile.lastName || '';
    document.getElementById('email').value = userProfile.email || '';
    document.getElementById('phoneNumber').value = userProfile.phoneNumber || '';
    document.getElementById('password').value = userProfile.password || ''; // Consider hiding this field for security
}

function updateProfile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    if (firstName && lastName && email && phoneNumber && password) {
        const userProfile = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password
        };

        // Save updated profile data to local storage or send to server
        localStorage.setItem('userProfile', JSON.stringify(userProfile));

        Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            text: 'Your profile information has been updated successfully!',
            timer: 3000,
            showConfirmButton: false
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Information',
            text: 'Please fill out all fields before saving.'
        });
    }
}

// Load profile data when the page is displayed
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('page9').style.display === 'block') {
        loadProfileData();
    }
});