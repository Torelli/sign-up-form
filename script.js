const firstName = document.querySelector('#first-name');
const lblFirstName = document.querySelector('#lbl-first-name');
const lastName = document.querySelector('#last-name');
const lblLastName = document.querySelector('#lbl-last-name');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const lblConfirmPassword = document.querySelector('#lbl-confirm-password')

function checkName (name) {
   return /\d/.test(name) ? "* Invalid characters" : "* This is a required field"
}

function checkPassword () {
    return password.value === confirmPassword.value;
}

firstName.addEventListener("keyup", (e) => {
    lblFirstName.setAttribute('data-help', checkName(e.target.value));
});

lastName.addEventListener("keyup", (e) => {
    lblLastName.setAttribute('data-help', checkName(e.target.value));
});

confirmPassword.addEventListener("keyup", (e) => {
    if(checkPassword()) {
        confirmPassword.setAttribute('aria-invalid',"false");
    } else {
        confirmPassword.setAttribute('aria-invalid',"true");
    }
});

confirmPassword.addEventListener("click", (e) => {
    if(checkPassword()) {
        confirmPassword.setAttribute('aria-invalid',"false");
    } else {
        confirmPassword.setAttribute('aria-invalid',"true");
    }
})