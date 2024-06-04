function generateCsrfToken() {
    return [...crypto.getRandomValues(new Uint8Array(32))]
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
}

function storeCsrfToken() {
    const csrfToken = generateCsrfToken();
    sessionStorage.setItem('csrf_token', csrfToken);
    return csrfToken;
}

function insertCsrfToken() {
    const csrfToken = storeCsrfToken();
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'csrf_token';
    hiddenInput.value = csrfToken;
    document.querySelector('form').appendChild(hiddenInput);
}

document.addEventListener('DOMContentLoaded', insertCsrfToken);