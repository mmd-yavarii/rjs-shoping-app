const productListApi = (start, end) => `http://localhost:4000/products?_start${start}&_end=${end}`;

export { productListApi };
