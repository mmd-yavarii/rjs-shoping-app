import { replace, useLocation, useNavigate } from 'react-router-dom';

import Form from '../components/template/Form';
import { useState } from 'react';
import { editProductsRequest } from '../helper/functions';

function EditProduct() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const initialState = {
    id: state.id,
    image: state.image,
    rating: state.rating,
    name: state.name,
    category: state.category,
    price: state.price,
    discount: state.discount,
    description: state.description,
  };

  const [form, setForm] = useState(initialState);

  async function setChangesHanddler(event) {
    event.preventDefault();
    editProductsRequest(form).then((res) => alert('Changed succesfully'));
    navigate('/profile', { replace: true });
  }

  return <Form form={form} setForm={setForm} onSubmit={setChangesHanddler} buttonText={'Edit'} />;
}

export default EditProduct;
