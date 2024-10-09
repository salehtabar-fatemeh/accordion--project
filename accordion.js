const loginDivs = document.querySelectorAll(".login");
const loginForms = document.querySelectorAll(".login-form");
const phoneNumberInps = document.querySelectorAll(".phone-number");
const showPhoneValids = document.querySelectorAll(".show-phonevalid");
const passwordInps = document.querySelectorAll(".password");
const showPassValid = document.querySelectorAll(".show-passvalid");
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

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (inps[i].value.trim() === " ") {
      inps[i].nextElementSibling.innerHTML = "وارد کردن این بخش الزامی است";
      inps[i].nextElementSibling.style.color = "red";
      inps[i].nextElementSibling.style.caretColor = "red";
    } else {
      inps[i].nextElementSibling.innerHTML = " ";
      inps[i].nextElementSibling.style.caretColor = "blue";
    }
  });
}

