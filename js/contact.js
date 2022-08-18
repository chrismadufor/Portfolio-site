(function() {
    emailjs.init('akQ6C7HPjPY2u6mX1');
})()

const fullName = document.querySelector('.name')
const email = document.querySelector('.email')
const message = document.querySelector('.message')
const errorText = document.querySelector('.error-text')


console.log(fullName)
window.onload = function() {
    document.getElementById('form-contact').addEventListener('submit', function(event) {
    event.preventDefault();
    if (fullName.value === '' || email.value === '' || message.value === '') {
        errorText.style.display = 'block'
    } else {
        errorText.style.display = 'none'
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_ib2a9er', 'template_2xz0pmb', this)
            .then(function() {
                alert('Thanks for sending a message. I will get back to you shortly');
                fullName.value = ''
                email.value = ''
                message.value = ''
            }, function(error) {
                console.log('FAILED...', error);
                alert('An error occured')
            });
        }
    });
}