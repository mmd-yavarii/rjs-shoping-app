import api from '../api/config.js';
import {
  allProductsEndpoint,
  checkExistanceEndpoint,
  filterCategoryEndpoint,
  loginEndpoint,
  paginateProductsEndpoint,
  setNewProductEndpoint,
  signUpEndpoint,
} from '../api/servises.js';
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

// search products handler
async function searchRequest(name) {
  const response = await api.get(allProductsEndpoint);
  const filtered = response.filter((i) => i.name.toLowerCase().includes(name.toLowerCase()));
  return filtered;
}

// get paginate data
async function paginateDataRequest(start, end) {
  try {
    const response = await api.get(paginateProductsEndpoint(start, end));
    return response;
  } catch (error) {
    alert(error);
  }
}

// sorter text
function shorterText(text) {
  const splited = text.split(' ').slice(0, 10);
  return splited.join(' ') + ' ...';
}

// get products by categort
async function categoryRequest(category) {
  try {
    const response = await api(filterCategoryEndpoint(category));
    return response;
  } catch (error) {
    alert(error);
  }
}

// set new products request
async function newProductRequest(info) {
  try {
    const response = await api.post(setNewProductEndpoint, info);
    return response;
  } catch (error) {
    alert(error);
  }
}

export {
  emailValidation,
  passwordValidation,
  loginRequest,
  signUpRequest,
  checkRequest,
  searchRequest,
  paginateDataRequest,
  shorterText,
  categoryRequest,
  newProductRequest,
};
