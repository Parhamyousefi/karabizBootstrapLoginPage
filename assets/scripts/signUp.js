const formValidation = () => {
  let phoneNum = document.getElementById("phoneNum");
if(phoneNum.value.length == 0) {
  alert("لطفا شماره موبایل را وارد نمایید")
}
else{
  let checkbox = document.getElementById("Rules")
  if (checkbox.checked== false) {
    alert("لطفا قوانین و مقررات را بپذیرید ")
  }
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