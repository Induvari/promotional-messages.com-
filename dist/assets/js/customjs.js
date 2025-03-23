// Show popup after 30 seconds
setTimeout(function () {
    document.getElementById("popup").style.display = "flex";
}, 10000); // 10 seconds

// Close popup function
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Sample function for register button
// function registerNow() {
//     alert("Redirecting to the registration page...");
//     window.location.href = "register.html"; // Change to your actual registration page
// }
