document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    if (!validateEmail(email)) {
        displayErrorMessage('Invalid email address');
        return;
    }

    if (password.length < 6) {
        displayErrorMessage('Password must be at least 6 characters long');
        return;
    }

    
    alert('Sign In Successful');
    
    window.location.href = 'index.html'; 
});



function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
}

