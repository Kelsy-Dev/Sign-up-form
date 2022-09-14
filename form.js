const input1 = document.getElementById('forms');
const buttonn = document.querySelector('button');

// function required(input1) {
//     if (input1.value.length === 0) {
//         console.log("Field is empty")
//         return false;
//     } return true;
// }


input1.addEventListener("submit", function(e){
    let message = []
    if (name.value === '' || name.value === null) {
        message.push("Field empty")
    } if (message.length > 0) {
        e.preventDefault()
        console.log(message);
    }
});



//Add an Id on form
//select the form by id
//try the addeventlistener
//DONE

//Change the value on line 14 
///search why name has a strike through
//Add another const for name and password maybe 
//try on w3bschool

