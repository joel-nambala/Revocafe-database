// Select DOM elements
const logIn = document.querySelector('.log-in');
const logInLink = document.querySelector('.log-in-link');
const email = document.getElementById('log-in-email');
const password = document.getElementById('log-in-password');
const logInForm = document.querySelector('.log-in-form');
const logInError = document.querySelector('.log-in-error');
const footer = document.querySelector('footer');

// Function to get user data
export const getLogInData = function () {
  // 1) Fetch data from the local storage
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return;

  // 2) Loop over the data
  user.forEach(function (data, index) {
    // Check if the data is valid
    if (!(data.email === email.value && data.password === password.value)) {
      logInError.textContent = 'Email and password not found';
      email.value = password.value = '';
      email.focus();
    }

    // Log in
    if (data.email === email.value && data.password === password.value) {
      email.value = password.value = '';
      logInError.textContent = '';
      alert('You have successifully logged in');
    }
  });
};

// Export the variables
export { logInLink, logIn, logInForm, logInError, footer };
