/* ========== EMAIL VALIDATION ======== */
const form = document.getElementById('form'),
      email = document.getElementById('email'),
      pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
      
      email.addEventListener('input', () => {
        /* Evaluate If It matches the pattern values */
        if(email.ariaValueMax.match(pattern)) {
            form.classList.add('valid')
            form.classList.remove('invalid')
        } else {
            form.classList.add('invalid')
            form.classList.remove('valid')
        }
})

      

   