import { emailRegex, passwordRegex } from './regexes.js';

function emailValidation(email) {
  return emailRegex.test(email);
}

function passwordValidation(password) {
  return passwordRegex.test(password);
}

export { emailValidation, passwordValidation };
