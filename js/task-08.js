const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    if (email.value = '' || password.value === '') {
        alert("❗All fields must be filled❗");
    } else {
        const data = {
        email: email.value,
        password: password.value,  
        }
       console.log(data);
    } 
    evt.currentTarget.reset();
}
    