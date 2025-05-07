const loginEndpoint = (email, password) => `/users?email=${email}&password=${password}`;

const signUpEndpoint = `/users`;

const allProductsEndpoint = '/products';

const adminReviewEndpoint = '/pending-products';

const deleteReviewEndpoint = (id) => `/pending-products/${id}`;

const deleteProductEndpoint = (id) => `/products/${id}`;

const paginateProductsEndpoint = (start, end) => `/products?_start=${start}&_end=${end}`;

const checkExistanceEndpoint = (email) => `/users?email=${email}`;

const filterCategoryEndpoint = (category) => `/products?category=${category}`;

const getUserProductsEndpoint = (id) => `/products?addedBy=${id}`;

export {
  loginEndpoint,
  signUpEndpoint,
  checkExistanceEndpoint,
  filterCategoryEndpoint,
  paginateProductsEndpoint,
  allProductsEndpoint,
  adminReviewEndpoint,
  deleteReviewEndpoint,
  deleteProductEndpoint,
  getUserProductsEndpoint,
};
