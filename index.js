
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const openRegisterModal = document.getElementById('openRegisterModal');
    const backToLogin = document.getElementById('backToLogin');
    const applyButton = document.querySelector('.apply-button');
    const registerForm = registerModal.querySelector('form');
    const loginForm = loginModal.querySelector('form');
    const forgotPasswordLink = loginModal.querySelector('.forgot-password');

    // Open Register Modal
    openRegisterModal.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('hidden');
        registerModal.classList.remove('hidden');
    });

    // Back to Login Modal
    backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.classList.add('hidden');
        loginModal.classList.remove('hidden');
    });

    // How to Apply Button - Redirect to instructions page
    applyButton.addEventListener('click', () => {
        window.location.href = 'how_to_apply.html';
    });

    // Validate Register Form
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateRegisterForm()) {
            // Submit the form or send data to server
            console.log('Register form submitted');
            alert('Registration successful!');
            registerModal.classList.add('hidden');
            loginModal.classList.remove('hidden');
        }
    });

    // Validate Login Form
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateLoginForm()) {
            // Submit the form or send data to server
            console.log('Login form submitted');
            alert('Login successful!');
            // Redirect to user dashboard or other page
            window.location.href = 'basicInfo.html';
        }
    });

    // Forgot Password
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Password recovery link will be sent to your email.');
    });

    // Form Validation Functions
    function validateRegisterForm() {
        const firstName = registerForm.querySelector('#firstName').value.trim();
        const lastName = registerForm.querySelector('#lastName').value.trim();
        const email = registerForm.querySelector('#email').value.trim();
        const phone = registerForm.querySelector('#phone').value.trim();
        const password = registerForm.querySelector('#password').value.trim();

        if (!firstName || !lastName || !email || !phone || !password) {
            alert('All fields are required!');
            return false;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        if (password.length < 6) {
            alert('Password must be at least 6 characters long.');
            return false;
        }

        return true;
    }

    function validateLoginForm() {
        const emailOrPhone = loginForm.querySelector('#loginEmail').value.trim();
        const password = loginForm.querySelector('#loginPassword').value.trim();

        if (!emailOrPhone || !password) {
            alert('Both email/phone and password are required!');
            return false;
        }

        if (!validateEmail(emailOrPhone) && !validatePhone(emailOrPhone)) {
            alert('Please enter a valid email or phone number.');
            return false;
        }

        return true;
    }

    // Email Validation
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Phone Validation
    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10,15}$/;
        return phonePattern.test(phone);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    function togglePassword(inputId) {
        const passwordInput = document.getElementById(inputId);
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            passwordInput.nextElementSibling.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            passwordInput.nextElementSibling.textContent = "Show";
        }
    }

    // Assign the togglePassword function to the global scope so it can be called from inline HTML
    window.togglePassword = togglePassword;
});
