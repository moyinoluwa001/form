// let username = document.getElementById('username')
// let password = document.getElementById('password')
// const myForm = document.getElementById('form')
// let emailErr = document.querySelector('.emailError')
// let passwordErr = document.querySelector('.passwordError')
// console.log(emailErr)
// myForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     if(username.value.length <3){
//         emailErr.innerHTML= "Your username cannot be less than 3 characters"
//         return
//     } 
//     if(username.value.length <3 ){
//         passwordErr.innerHTML = "Password cannot be less than 8 characters"
//     }
//         alert("Login successful")
    
// }
// )

// function myFunction() {
//     const username = document.getElementById('username');
//     const password = document.getElementById('password').value;
//     const myForm = document.getElementById('form');
//     const userErr = document.querySelector('.emailError');
//     const passError = document.querySelector('.passwordError');

    myForm.addEventListener('submit', function(e) {
        e.preventDefault()
    })
    
// }

/*
function validatePassword(password) {


    
    if (!password) {
      throw new Error("Password cannot be empty");
    }
  
    if (password.length < 8 || password.length > 12) {
      throw new Error("Password must be between 8 and 12 characters long");
    }
  
    if (!/[a-z]/.test(password)) {
      throw new Error("Password must contain at least 1 lowercase letter");
    }
  
    if (!/[A-Z]/.test(password)) {
      throw new Error("Password must contain at least 1 uppercase letter");
    }
  
    // If all requirements are met, return true (no error thrown).
    return true;
  }
  
  // Example usage:
  try {
    const password = "Password123";
    validatePassword(password);
    console.log("Password is valid");
  } catch (error) {
    console.error(error.message);
  }
  