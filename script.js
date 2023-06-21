function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Perform form validation
    var errorMessage = '';

    if (name === '') {
        errorMessage += 'Name is required.<br>';
    }

    if (email === '') {
        errorMessage += 'Email is required.<br>';
    } else if (!isValidEmail(email)) {
        errorMessage += 'Invalid email address.<br>';
    }

    if (errorMessage !== '') {
        document.getElementById('errorMessage').innerHTML = errorMessage;
    } else {
        document.getElementById('errorMessage').innerHTML = '';

        // Perform form submission or further processing
        // Here, you can make AJAX requests to store the data or perform any other desired actions
        console.log('Registration successful!');
    }
}

function isValidEmail(email) {
    // Email validation logic
    // You can use regular expressions or other validation techniques
    // Here's a simple email validation pattern:
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
