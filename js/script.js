'use strict';

import * as sign from './signIn.js';
import * as login from './logIn.js';
import * as rev from './revocafe.js';

const init = function () {
  sign.errorPassword.textContent = sign.errorConfirm.textContent = '';
  login.logInError.textContent = '';

  // sign.signIn.style.display = 'block';
  // login.logIn.style.display = 'none';
  // rev.revocafe.style.display = 'none';

  sign.signIn.style.display = 'none';
  login.logIn.style.display = 'none';
  rev.revocafe.style.display = 'block';
  document.querySelector('h1').style.display = 'none';
};

init();

const showRevocafe = function () {
  sign.signIn.style.display = 'none';
  login.logIn.style.display = 'none';
  rev.revocafe.style.display = 'block';
  document.querySelector('h1').style.display = 'none';
};

// Add an event listener
sign.signInForm.addEventListener('submit', function (e) {
  e.preventDefault();
  sign.getSignInData();
  showRevocafe();
});

login.logInLink.addEventListener('click', function (e) {
  e.preventDefault();
  sign.signIn.style.display = 'none';
  login.logIn.style.display = 'block';
  rev.revocafe.style.display = 'none';
});

login.logInForm.addEventListener('submit', function (e) {
  e.preventDefault();
  login.getLogInData();
  showRevocafe();
});
