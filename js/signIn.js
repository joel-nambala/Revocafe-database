// Select DOM elements
const signIn = document.querySelector('.sign-in');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const telephone = document.getElementById('tel');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorPassword = document.querySelector('.error-password');
const errorConfirm = document.querySelector('.error-confirm-password');
const signInForm = document.querySelector('.sign-in-form');

const user = [];

// Get the data from the user
export const getSignInData = function () {
  // Check the data submited
  if (!(password.value === confirmPassword.value)) {
    errorPassword.textContent = 'Password do not match';
    errorConfirm.textContent = 'Password do not match';
    password.value = confirmPassword.value = '';
    password.focus();
    return;
  }

  if (password.value.length < 6) {
    errorPassword.textContent = errorConfirm.textContent = '';
    errorPassword.textContent = 'Password should be atleast 6 characters long';
    password.value = confirmPassword.value = '';
    password.focus();
    return;
  }

  // Store the data into an object
  if (password.value === confirmPassword.value) {
    user.push({
      fullName: fullName.value,
      email: email.value,
      telephone: telephone.value,
      password: password.value,
    });
    console.log(user);

    // Clear the input fields
    fullName.value =
      email.value =
      telephone.value =
      password.value =
      confirmPassword.value =
      errorPassword.textContent =
      errorConfirm.textContent =
        '';
    fullName.focus();
  }

  // Save that data into the local storage
  localStorage.setItem('user', JSON.stringify(user));
};

export { signIn, signInForm, errorConfirm, errorPassword };
