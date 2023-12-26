
let mainCard = document.querySelector('div.main-card');
let successCard = document.querySelector('div.success-card');
let userEmailInSuccessMessage = document.querySelector('span.user-email');
let subscribeForm = document.querySelector('form.email-form');
let emailInput = document.querySelector('input.default-state');
let errorLabel = document.querySelector('p.error-label');
let dismissSuccessMessageButton = document.querySelector('button.dismiss-button');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value == "") {
        errorLabel.style.display = 'block';
        emailInput.classList.remove('default-state');
        emailInput.classList.add('error-state');
    } else {
        errorLabel.style.display = '';
        emailInput.classList.remove('error-state');
        emailInput.classList.add('default-state');
        userEmailInSuccessMessage.innerText = emailInput.value
        mainCard.style.display = 'none';
        successCard.style.display = 'block';
    }
});

dismissSuccessMessageButton.addEventListener('click', () => {
    successCard.style.display = 'none';
    mainCard.style.display = 'flex';
    emailInput.value = '';
});