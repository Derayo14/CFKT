// WARNING ELEMENTS
let warning = document.getElementById("WarningPopUp")
let phoneWarning = document.getElementById("WarningPhonePopUp")
let passwordWarning = document.getElementById("WarningPwdPopUp")

// LOGIN BUTTON
let LogInBtn = document.getElementById("LogInBtn")

// LOGIN INPUTS
let PhoneNumberInput = document.getElementById("inputContainerphonee")
let PasswordInput = document.getElementById("Pwd")
let phoneInput = document.getElementById("phoneInput")

// setTimeout Function
function errorTimeout() {
    setTimeout(() => {
        phoneWarning.style.display = "none"
       phoneInput.classList.remove("borderRed")
     passwordInputdiv.classList.remove("borderRed")
        
    }, 4000)
}
    LogInBtn.addEventListener("click", function (e) {
        e.preventDefault()
        //LOGIN BUTTON
        console.log(PasswordInput.value);
        if (PhoneNumberInput.value == "" && PasswordInput.value == "") {
           phoneWarning.textContent ="E-mail or Phone-number is incorrect."  
          phoneWarning.style.display ="block"
          phoneInput.classList.add("borderRed")
          passwordInputdiv.classList.add("borderRed")
            errorTimeout()
        //    console.log("Input is empty");

        } else {
console.log("Input isn't empty");   
     }
    

    })