const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  togglePassword.classList.toggle('bi-eye');
});

const formValidation = () => {
  let phoneNum = document.getElementById("phoneNum");
  let password = document.getElementById("password")
if(phoneNum.value.length == 0 || password.value.length == 0) {
  alert("لطفا شماره موبایل و رمز عبور را وارد نمایید")
}
else{
  if(phoneNum.value.match(/^\d{11}$/)){
    phoneNum.classList.remove("wrongFormat")
   }
   else{
    alert("شماره تلفن را به درستی وارد کنید")
    phoneNum.classList.add("wrongFormat")
    return false;
   }
}

}