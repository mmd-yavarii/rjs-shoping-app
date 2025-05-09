import styles from '../styles/AddProduct.module.scss';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { newProductRequest } from '../helper/functions';
import { categories } from '../helper/varables';
import Form from '../components/template/Form';

function AddProduct() {
  const initialState = {
    id: '',
    image: '',
    rating: 0,
    name: '',
    category: '',
    price: '',
    discount: 0,
    description: '',
  };

  const [form, setForm] = useState(initialState);

  // submit handler
  async function submitHandler(event) {
    event.preventDefault();
    const result = { ...form, id: uuidv4() };

    const response = await newProductRequest(result);
    setForm({ id: '', image: '', rating: 0, name: '', category: '', price: '', discount: 0, description: '' });
    alert('Product added successfully');
  }

  return <Form onSubmit={submitHandler} form={form} setForm={setForm} />;
}

export default AddProduct;
