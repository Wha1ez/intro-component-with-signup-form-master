const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector("button");
const successNotification = document.querySelector(".success");
const inputEl = document.querySelectorAll('input');


const emailValidator = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordValidator = /^[A-Za-z]\w{7,14}$/;



const validator = () => {
    if (firstName.value.length === 0) {
        const notification = firstName.nextElementSibling.nextElementSibling;
        notification.textContent = 'First Name cannot be empty';
        firstName.parentElement.classList.add('visible');
        setTimeout(() => {
           firstName.parentElement.classList.remove('visible')
        }, 2000);
    }
    if (lastName.value.length === 0) {
        const notification = lastName.nextElementSibling.nextElementSibling;
        notification.textContent = 'Last Name cannot be empty';
        lastName.parentElement.classList.add('visible');
        setTimeout(() => {
           lastName.parentElement.classList.remove('visible');
        }, 2000);
    }
    if (email.value.length === 0) {
        const notification = email.nextElementSibling.nextElementSibling;
        notification.textContent = 'email cannot be empty';
        email.parentElement.classList.add('visible');
        setTimeout(() => {
           email.parentElement.classList.remove('visible');
        }, 2000);
    }
    if (email.value.length !== 0 && !email.value.match(emailValidator)) {
        const notification = email.nextElementSibling.nextElementSibling;
        notification.textContent = 'looks like this is not an email';
        email.parentElement.classList.add('visible');
        setTimeout(() => {
           email.parentElement.classList.remove('visible');
        }, 2000);
    }
   
    if (password.value.length === 0) {
        const notification = password.nextElementSibling.nextElementSibling;
        notification.textContent = 'password cannot be empty';
        password.parentElement.classList.add('visible');
        setInterval(() => {
           password.parentElement.classList.remove('visible');
        }, 2000);
    }
    if (password.value.length !== 0 && !password.value.match(passwordValidator)) {
        const notification = password.nextElementSibling.nextElementSibling;
        notification.textContent = 'password must contain between 7-14 Characters';
        password.parentElement.classList.add('visible');
        setInterval(() => {
           password.parentElement.classList.remove('visible');
        }, 2000);
    }
    else if(
        firstName.value.length !== 0 &&
        lastName.value.length !== 0 &&
        email.value.length !== 0 &&
        email.value.match(emailValidator) &&
        password.value.length !== 0 &&
        password.value.match(passwordValidator)
    ){
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        successNotification.style.visibility = "visible";
        setTimeout(() => {
            successNotification.style.visibility = 'hidden'
        }, 2000);
    }
}

button.addEventListener("click", (e) => {
    e.preventDefault;
    validator();
})

inputEl.forEach(input => {
    input.addEventListener('keypress', e => {
        if (e.key === 'enter') {
            e.preventDefault;
            validator();
        }
    })
});
