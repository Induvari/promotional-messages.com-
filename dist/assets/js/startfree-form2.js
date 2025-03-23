document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now

    let name = document.querySelector("input[placeholder='Name']").value;
    let email = document.querySelector("input[placeholder='Email Address']").value;
    let password = document.querySelector("input[placeholder='Password (8 characters or more)']").value;

    if (name === '' || email === '' || password.length < 8) {
        alert("Please fill in all fields and ensure the password is at least 8 characters.");
    } else {
        alert("Signup successful!");
    }
});
