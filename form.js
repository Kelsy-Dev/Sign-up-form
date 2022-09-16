const form = document.getElementById('myform');
const username = document.getElementById('name');
const lastName = document.getElementById('lstname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInputs();
});

let message = document.getElementsByTagName('body').innerHTML;

const validateInputs = () => {
    const usernameValue = username.value.trim();

    if(username.value === '') {
        console.log("username is required");
        

    } else {
        console.log("username working");
    }
}
