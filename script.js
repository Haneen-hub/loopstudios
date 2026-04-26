function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
  clearError(input);
  const err = document.createElement('span');
  err.className = 'error-msg';
  err.textContent = message;
  input.classList.add('input-error');
  input.parentNode.insertBefore(err, input.nextSibling);
}

function clearError(input) {
  input.classList.remove('input-error');
  const next = input.nextSibling;
  if (next && next.className === 'error-msg') next.remove();
}

// --- Login Form ---
const loginForm = document.querySelector('.form1');
if (loginForm) {
  const loginEmail = document.getElementById('email');
  const loginPassword = document.getElementById('password');

  loginEmail.addEventListener('input', () => {
    if (isValidEmail(loginEmail.value.trim())) clearError(loginEmail);
  });

  loginPassword.addEventListener('input', () => {
    if (loginPassword.value.length >= 6) clearError(loginPassword);
  });

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    if (!isValidEmail(loginEmail.value.trim())) {
      showError(loginEmail, 'Please enter a valid email');
      valid = false;
    }

    if (loginPassword.value.length < 6) {
      showError(loginPassword, 'Password must be at least 6 characters');
      valid = false;
    }

    if (valid) window.location.href = 'index.html';
  });
}

// --- Register Form ---
const registerForm = document.querySelector('.form2');
if (registerForm) {
  const regName = document.getElementById('name');
  const regEmail = document.getElementById('email');
  const regPassword = document.getElementById('password');
  const regConfirm = document.getElementById('confirm-password');

  regName.addEventListener('input', () => {
    if (regName.value.trim().length >= 3) clearError(regName);
  });

  regEmail.addEventListener('input', () => {
    if (isValidEmail(regEmail.value.trim())) clearError(regEmail);
  });

  regPassword.addEventListener('input', () => {
    if (regPassword.value.length >= 6) clearError(regPassword);
  });

  regConfirm.addEventListener('input', () => {
    if (regConfirm.value === regPassword.value) clearError(regConfirm);
  });

  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    if (regName.value.trim().length < 3) {
      showError(regName, 'Please enter your full name');
      valid = false;
    }

    if (!isValidEmail(regEmail.value.trim())) {
      showError(regEmail, 'Please enter a valid email');
      valid = false;
    }

    if (regPassword.value.length < 6) {
      showError(regPassword, 'Password must be at least 6 characters');
      valid = false;
    }

    if (regConfirm.value !== regPassword.value) {
      showError(regConfirm, 'Passwords do not match');
      valid = false;
    }

    if (valid) window.location.href = 'index.html';
  });
}