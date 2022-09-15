let mail = document.getElementById('email');

mail.addEventListener("input", (event) => {
   if (mail.validity.typeMismatch || mail.value === null) {
    mail.setCustomValidity("Your email need to have @ and .com included");
    mail.reportValidity();
   } mail.setCustomValidity("");
});







//Add an Id on form
//select the form by id
//try the addeventlistener
//DONE

//Change the value on line 14 
///search why name has a strike through
//Add another const for name and password maybe 
//try on w3bschool

