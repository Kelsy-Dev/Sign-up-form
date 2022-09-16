
const form = document.getElementById('myform');
const username = document.getElementById('username');
const lastName = document.getElementById('lstname');
const mail = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputSection = element.parentElement;
    const errorDisplay = inputSection.querySelector('.error');

    errorDisplay.innerText = message;
    inputSection.classList.add('errror');
    inputSection.classList.remove('success')
}

const setSuccess = element => {
    const inputSection = element.parentElement;
    const errorDisplay = inputSection.querySelector('.error');

    errorDisplay.innerText = '';
    inputSection.classList.add('success');
    inputSection.classList.remove('errror');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const lastNameValue = lastName.value.trim();
    const mailValue = mail.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'First name cannot be empty');
    } else {
        setSuccess(username);
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last name cannot be empty');
    } else {
        setSuccess(lastName);
    }

    if(mailValue === '') {
        setError(mail, 'Looks like this is not an email');
    } else {
        setSuccess(mail);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else {
        setSuccess(password);
    }
};


