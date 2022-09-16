// const form = document.getElementById('myform');
// const username = document.getElementById('name');
// const lastName = document.getElementById('lstname');
// const email = document.getElementById('email');
// const password = document.getElementById('password');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     validateInputs();
// });


// // Defining error messages 

// let errorMessage = (Element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('Success');
// };

// // Set a success message 

// const successMessage = (element) => {
//      const inputControl = element.parentElement;
//      const errorDisplay = inputControl.querySelector('.error');

//      errorDisplay.innerText = '';
//      inputControl.classList.add('error');
//      inputControl.classList.remove('Success');

// };

// // Validation form

// const validateInputs = () => {
//     const usernameValue = username.value.trim();

//     if(usernameValue === '') {
//         console.log("username is required");
//         errorMessage(username, 'username is required');

//     } else {
//         console.log("username working");
//     }
// }

































const form = document.getElementById('myform');
const username = document.getElementById('username');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const usernameValue = username.value.trim();

    if(usernameValue === '') {
        setError(username, 'First name cannot be empty');
    } else {
        setSuccess(username);
    }

};
