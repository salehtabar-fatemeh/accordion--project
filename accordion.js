const phoneNumberInps = document.querySelectorAll(".phone-number");
const showPhoneValids = document.querySelectorAll(".show-phonevalid");
const passwordInps = document.querySelectorAll(".password");
const showPassValid = document.querySelectorAll(".show-passvalid");






for(let i= 0; i<phoneNumberInps.length; i++){

    phoneNumberInps[i].addEventListener("keyup", ()=>{
        const phone = phoneNumberInps[i].value;
        const isValid = !!phone.match(/^09\d{9}$/i);
        showPhoneValids[i].innerHTML = isValid ? " " : "شماره موبایل وارد شده صحیح نیست";
        if(showPhoneValids[i].innerHTML == "شماره موبایل وارد شده صحیح نیست" ){
            showPhoneValids[i].style.color = "red";
            phoneNumberInps[i].style.caretColor = "red";

        }else{
            phoneNumberInps[i].style.caretColor = "blue";

        }
    })

}
for(let i= 0; i<passwordInps.length; i++){
    passwordInps[i].addEventListener("keyup", ()=>{
        const password = passwordInps[i].value; 
         const passValid = !!password.match(/^[a-z][A-Z0-9@!#\.\-_%\$\+\*\^=]{8,12}$/i);
         showPassValid [i].innerHTML = passValid ? " " : "رمز عبور نامعتبر است";
          if( showPassValid [i].innerHTML == "رمز عبور نامعتبر است"){
            showPassValid[i].style.color = "red";
            passwordInps[i].style.caretColor = "red";

          }else{
            passwordInps[i].style.caretColor = "blue";

          }     
    }) 
}