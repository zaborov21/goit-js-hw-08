import throttle from "lodash.throttle";

const formRef = document.querySelector(".js-feedback-form");
const userEmailRef = document.querySelector(".js-user-email");
const textareaRef = document.querySelector(".js-textarea");


window.addEventListener("load", () => {
    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData);

    if (savedData) {
        userEmailRef.value = parsedData.email;
        textareaRef.textContent = parsedData.message;
    }

   
});

formRef.addEventListener("input", throttle(onFormInput, 500));

function onFormInput(event) {
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;

    const formData = {
        email,
        message,
    }
    const jsonData = JSON.stringify(formData);
    localStorage.setItem("feedback-form-state", jsonData);
}
formRef.addEventListener("submit", (event) => {
    event.preventDefault();
    const savedData = localStorage.getItem("feedback-form-state");
    const parsedData = JSON.parse(savedData);
    if (savedData) {
        userEmailRef.value = savedData.email;
        textareaRef.textContent = savedData.message;
        localStorage.removeItem("feedback-form-state");
    }
    event.target.reset();
    console.log("email:", parsedData.email, "message:", parsedData.message);
});

