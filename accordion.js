const loginDivs = document.querySelectorAll(".login");
const loginForms = document.querySelectorAll(".login-form");
const phoneNumberInps = document.querySelectorAll(".phone-number");
const showPhoneValids = document.querySelectorAll(".show-phonevalid");
const passwordInps = document.querySelectorAll(".password");
const showPassValids = document.querySelectorAll(".show-passvalid");
const inps = document.querySelectorAll("input");
const btns = document.querySelectorAll(".login-btn");

loginDivs.forEach((loginDiv, index) => {
  loginDiv.addEventListener("click", () => {
    loginForms[index].classList.toggle("active");
  });
});

for (let i = 0; i < phoneNumberInps.length; i++) {
  phoneNumberInps[i].addEventListener("keyup", () => {
    const phone = phoneNumberInps[i].value;
    const isValid = !!phone.match(/^09\d{9}$/i);
    showPhoneValids[i].innerHTML = isValid
      ? " "
      : "شماره موبایل وارد شده صحیح نیست";
    if (showPhoneValids[i].innerHTML == "شماره موبایل وارد شده صحیح نیست") {
      showPhoneValids[i].style.color = "red";
      phoneNumberInps[i].style.caretColor = "red";
    } else {
      phoneNumberInps[i].style.caretColor = "blue";
    }
  });
}

for (let i = 0; i < btns.length; i++) { ///این بخش کد خوب کار نمی کند
  btns[i].addEventListener("click", () => {
    if (inps[i].value.trim() == "") {
      inps[i].nextElementSibling.innerHTML = "وارد کردن این بخش الزامی است";
      inps[i].nextElementSibling.style.color = "red";
      inps[i].style.caretColor = "red";
      inps[i].nextElementSibling.style.fontSize = "12.5px";
    } else {
      inps[i].style.caretColor = "blue";
    }
  });
}


passwordInps.forEach((passwordInp, i) => {
  passwordInp.addEventListener("keyup", () => {
    const password = passwordInp.value;

    if (password.length < 8) {
      showPassValids[i].innerHTML = "رمز عبور باید حداقل 8 کاراکتر باشد";
      showPassValids[i].style.color = "red";
      passwordInp.style.caretColor = "red";
    } else {
      const hasLowerCase = /[a-z]/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[@!#\.\-_%\$\+\*\^]/.test(password);
      if (hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar) {
        showPassValids[i].innerHTML = "رمز عبور معتبر است";
        showPassValids[i].style.color = "green";
        passwordInp.style.caretColor = "blue";
      } else {
        showPassValids[i].innerHTML = "رمز عبور باید شامل حرف کوچک، حرف بزرگ، عدد و یک کاراکتر خاص باشد";
        showPassValids[i].style.color = "red";
        passwordInp.style.caretColor = "red";
      }
    }
  });
});

