// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const profileDropdown = document.querySelector('.profile-dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    profileDropdown.addEventListener('mouseover', function() {
        dropdownContent.style.display = 'block';
    });

    profileDropdown.addEventListener('mouseout', function() {
        dropdownContent.style.display = 'none';
    });

    // Optional: Close dropdown if clicked outside (for touch devices)
    window.addEventListener('click', function(event) {
        if (!profileDropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
