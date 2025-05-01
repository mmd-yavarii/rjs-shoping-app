const loginEndpoint = (email, password) => `/users?email=${email}&password=${password}`;

const signUpEndpoint = `/users`;

const checkExistanceEndpoint = (email) => `/users?email=${email}`;

export { loginEndpoint, signUpEndpoint, checkExistanceEndpoint };
