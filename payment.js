document.getElementById('purchase-button').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!name || !email || !cardNumber || !expiryDate || !cvv) {
        showError('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        showError('Invalid email address');
        return;
    }

    if (!isValidCardNumber(cardNumber)) {
        showError('Invalid card number');
        return;
    }

    if (!isValidCVV(cvv)) {
        showError('Invalid CVV');
        return;
    }

    alert(`Thank you, ${name}! Your tickets have been purchased.`);

    clearForm();
});

document.getElementById('clear-button').addEventListener('click', function() {
    clearForm();
});

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('card-number').value = '';
    document.getElementById('expiry-date').value = '';
    document.getElementById('cvv').value = '';

    clearError();
}

function showError(message) {
    clearError();
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    document.getElementById('ticket-form').appendChild(errorElement);
}

function clearError() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCardNumber(cardNumber) {
    return /^\d{16}$/.test(cardNumber);
}


function isValidCVV(cvv) {
    return /^\d{3}$/.test(cvv);
}
