function validateForm() {
const inquiryForm= document.querySelector("#form-field");
const submitForm= document.querySelector(".button");
}
inquiryForm.addEventListener('click', function(e) {
    if(!inquiryForm.validity.valid) {
        inquiryForm.classList.add('.error');
        e.preventDefault();
    }
})

submitForm.addEventListener('click', function(){
    if(!submitForm.validity.valid) {
        inquiryForm.classList.add('.error');
        e.preventDefault();
    }
})