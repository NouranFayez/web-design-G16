var form = document.getElementById("my_form")

var passwordInput = document.getElementById("userPass")
var showPassword = document.getElementById("show")

showPassword.addEventListener("click" , function(){
    if(passwordInput.type == "password")
    passwordInput.type = "text"
    else passwordInput.type = "password"
})





form.addEventListener("input", function (e) {
    // console.log(e.target.id)
    switch (e.target.id) {
        case "userName":
            nameValidation(e.target)
            break
        case "userEmail":
            emailValidation(e.target)
            break
        case "userPass":
            passwordValidation(e.target)
            break

    }
})


var nameValidation = (inp) => {
    var inputValue = inp.value.trim()
    if (inputValue.length < 3) handleError(inp, "enter at least 3 character")
    else handleError(inp, "")
    console.log(inputValue.length)

}


// regular expression of email ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression
var emailValidation = (inp) => {
    // nouran_ahmed269@hotmail.com
    // regular expression
    var inputValue = inp.value
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (regExp.test(inputValue) == false) handleError(inp, "please enter a valid email")
    else handleError(inp, "")

}

// regular expression of password ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/

var passwordValidation = (inp) => {
    // var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var inputValue = inp.value
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (strongRegex.test(inputValue) == false)
        handleError(inp, "enter at least 1 uppercase character , 1 lowercase character , 1 number .......")
    else
        handleError(inp, "")
}


var handleError = (ele, msg) => {
    ele.nextElementSibling.innerText = msg
}


// var str = "                  kndfkk bjff                      "


