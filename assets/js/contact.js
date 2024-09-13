/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID -  templateID - #form - publicKey
    emailjs.sendForm('service_ibcy67d','template_si2tw58','#contact-form','rcMyZ2u24WqMC9fh3')
       .then(() => {
        // Show sent message
        contactMessage.textContent = 'Email sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset();
       }, () => {
        // Show error message
        contactMessage.textContent = ' Message not sent (service error) ❌😞'
       })
}

contactForm.addEventListener('submit', sendEmail)