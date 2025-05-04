const loginEndpoint = (email, password) => `/users?email=${email}&password=${password}`;

const signUpEndpoint = `/users`;

const allProductsEndpoint = '/products';
const setNewProductEndpoint = '/pending-products';

const paginateProductsEndpoint = (start, end) => `/products?_start=${start}&_end=${end}`;

const checkExistanceEndpoint = (email) => `/users?email=${email}`;

const filterCategoryEndpoint = (category) => `/products?category=${category}`;

export {
  loginEndpoint,
  signUpEndpoint,
  checkExistanceEndpoint,
  filterCategoryEndpoint,
  paginateProductsEndpoint,
  allProductsEndpoint,
  setNewProductEndpoint,
};
