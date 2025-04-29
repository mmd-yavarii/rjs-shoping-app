const productListApi = (start, end) => `http://localhost:4000/products?_start${start}&_end=${end}`;

const getUserApi = (username, password) => `http://localhost:4000/users?username=${username}&password=${password}`;

const signUpApi = 'http://localhost:4000/users';

export { productListApi, getUserApi, signUpApi };
