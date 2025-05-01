import api from '../api/config.js';
import { checkExistanceEndpoint, loginEndpoint, signUpEndpoint } from '../api/servises.js';
import { emailRegex, passwordRegex } from './regexes.js';

// email validation
function emailValidation(email) {
  return emailRegex.test(email);
}

// password validation
function passwordValidation(password) {
  return passwordRegex.test(password);
}

// login data fetching
async function loginRequest(email, password) {
  try {
    const url = loginEndpoint(email, password);
    const response = await api.get(url);
    return response;
  } catch (err) {
    alert(err);
  }
}

// check existance user fetching
async function checkRequest(email) {
  try {
    const url = checkExistanceEndpoint(email);
    const response = await api.get(url);
    return response;
  } catch (err) {
    alert(err);
  }
}

// sign up fetching
async function signUpRequest(user) {
  try {
    const url = signUpEndpoint;
    const response = await api.post(url, user);
    return response;
  } catch (err) {
    alert(err);
  }
}

export { emailValidation, passwordValidation, loginRequest, signUpRequest, checkRequest };
