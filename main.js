const inquiryForm= document.querySelector(inquiry-form);
const submitForm= document.querySelector(button);

inquiryForm.addEventListener('submit', function(e) {
    if(!inquiryForm.validity.valid) {
        inquiryForm.classList.add('.error');
        e.preventDefault();
    }
})

inquiryForm
submitForm.addEventListener('click', function(){

})