function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.pages').forEach(page => {
        page.style.display = 'none';
    });

    // Display the selected page
    document.querySelector(`#${page}`).style.display = 'block';
}

// Attach click event listeners to sidebar links
document.querySelectorAll("#sidebar .nav  li").forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        showPage(this.dataset.page); // Show the corresponding page
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');
}
$(document).ready(function() {
    // Toggle sidebar function
    $('.navbar-toggler').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
