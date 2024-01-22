function validateForm(event) {
    // prevent the default form submission
    event.preventDefault();

    // Get user input
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;


    // Check if both email and password are provided
    if (email.trim() === "" || password.trim() === "") {
        alert("Please enter both email and password.");
        return false; // Prevent form submission
    }

    // Perform your authentication logic here (e.g., check against a database)
    // For simplicity, let's assume a hardcoded username and password
    var validEmail = "user@example.com";
    var validPassword = "password123";

    if (email  && password ) {
        alert("Login successful!");
        // return true;
        // Allow form submission

        // Redirect to try.html upon successful login
        window.location.href = "try.html";




    } else {
        alert("Invalid email or password. Please try again.");
        return false; // Prevent form submission
    }
}

// Attach the event listener to the form
document.getElementById("loginForm").addEventListener("submit", validateForm);
