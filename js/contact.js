const form = document.querySelector("#form");

const fullname = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");
const address = document.querySelector("#message");
const addressError = document.querySelector("#messageError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

form.onsubmit = function (event) {
    event.preventDefault();

    if (checkLength(fullname.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(subject.value, 0) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(message.value, 0) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

}

form.addEventListener("onsubmit", form);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}