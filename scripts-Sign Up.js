function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    

    alert('Form submitted successfully.');
    window.location.href = 'Sign In.html'; 
    return false; 
}
