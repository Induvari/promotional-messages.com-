// document.addEventListener("DOMContentLoaded", function () {
//     const personalBtn = document.getElementById("personalBtn");
//     const businessBtn = document.getElementById("businessBtn");
//     const personalForm = document.getElementById("personalForm");
//     const businessForm = document.getElementById("businessForm");

//     function showForm(formToShow, buttonToActivate) {
//         personalForm.style.display = "none";
//         businessForm.style.display = "none";

//         personalBtn.classList.remove("active");
//         businessBtn.classList.remove("active");

//         formToShow.style.display = "block";
//         buttonToActivate.classList.add("active");
//     }

//     personalBtn.addEventListener("click", function () {
//         showForm(personalForm, personalBtn);
//     });

//     businessBtn.addEventListener("click", function () {
//         showForm(businessForm, businessBtn);
//     });

//     // Show personal form by default
//     showForm(personalForm, personalBtn);
// });



function switchTab(tab) {
    document.getElementById("signup-form").style.display = (tab === 'signup') ? 'flex' : 'none';
    document.getElementById("login-form").style.display = (tab === 'login') ? 'flex' : 'none';

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add("active");
}



document.getElementById('toggle-login').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').classList.remove('active-form');
    document.getElementById('login-form').classList.add('active-form');
});

document.getElementById('toggle-signup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').classList.remove('active-form');
    document.getElementById('signup-form').classList.add('active-form');
});


document.addEventListener("DOMContentLoaded", function () {
    const signupCheckbox = document.getElementById("signup-agree");
    const loginCheckbox = document.getElementById("login-agree");
    const signupBtn = document.getElementById("signup-btn");
    const loginBtn = document.getElementById("login-btn");

    function toggleButton(checkbox, button) {
        button.disabled = !checkbox.checked;
    }

    signupCheckbox.addEventListener("change", function () {
        toggleButton(signupCheckbox, signupBtn);
    });

    loginCheckbox.addEventListener("change", function () {
        toggleButton(loginCheckbox, loginBtn);
    });
});

