const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const allInputs = document.querySelectorAll(".inputs");
const submitButton = document.getElementById("submit_button");

submitButton.addEventListener("click", (e) => {
    handleClick(e);
});

allInputs.forEach((input) => {
    input.addEventListener("input", () => {
        handleChange(input);
    });
});

let isValid = false;
function handleClick(e) {
    setErrors(firstNameInput, emailInput);
    setErrors(lastNameInput, emailInput);
    setErrors(passwordInput, emailInput);

    if (isValid) {
        e.currentTarget.submit();
    } else {
        e.preventDefault();
    }
}

function setErrors(input, emailInput) {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (input.value === "" || !emailInput.value.match(regEx)) {
        if (input.value === "") {
            input.nextElementSibling.classList.remove("hidden");
            input.nextElementSibling.nextElementSibling.classList.remove("hidden");
            input.classList.add("border-red", "border-2", "border-opacity-100");
            input.classList.add("placeholder:text-red", "placeholder:text-opacity-100");
        } else {
            input.nextElementSibling.classList.add("hidden");
            input.nextElementSibling.nextElementSibling.classList.add("hidden");
        }

        if (!emailInput.value.match(regEx)) {
            emailInput.value = "";
            emailInput.nextElementSibling.classList.remove("hidden");
            emailInput.nextElementSibling.nextElementSibling.classList.remove("hidden");
            emailInput.classList.add("border-red", "border-2", "border-opacity-100");
            emailInput.setAttribute("placeholder", "email@example/com");
            emailInput.classList.add("placeholder:text-red", "placeholder:text-opacity-100");
        } else {
            emailInput.nextElementSibling.classList.add("hidden");
            emailInput.nextElementSibling.nextElementSibling.classList.add("hidden");
        }
        isValid = false;
    } else {
        isValid = true;
    }
}

function handleChange(input) {
    input.nextElementSibling.classList.add("hidden");
    input.nextElementSibling.nextElementSibling.classList.add("hidden");
    input.classList.remove("border-red", "border-2", "border-opacity-100");
    input.classList.remove("placeholder:text-red", "placeholder:text-opacity-100");
}