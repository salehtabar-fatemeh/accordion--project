const phoneNumberInps = document.querySelectorAll(".phone-number");
const showPhoneValids = document.querySelectorAll(".show-phonevalid");





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