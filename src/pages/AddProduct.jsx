import styles from '../styles/AddProduct.module.scss';

import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { newProductRequest } from '../helper/functions';

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

  // input handler
  function inpHandler(event) {
    const key = event.target.name;
    let value = event.target.value;

    if (event.target.type === 'number') {
      value = +value;
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.pageTitle}>Add new product</h4>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <label>
            Image URL <span>*</span>
            <input type="url" name="image" required value={form.image} onChange={inpHandler} />
          </label>

          <label>
            Name <span>*</span>
            <input type="text" name="name" required value={form.name} onChange={inpHandler} />
          </label>

          <label>
            category <span>*</span>
            <select name="category" id="category" required value={form.category} onChange={inpHandler}>
              <option value="fashion">fashion</option>
              <option value="electronics">electronics</option>
              <option value="furniture">furniture</option>
              <option value="books">books</option>
              <option value="appliances">appliances</option>
              <option value="toys">toys</option>
              <option value="sports">sports</option>
              <option value="vehicles">vehicles</option>
              <option value="art">art</option>
              <option value="computers">computers</option>
              <option value="cameras">cameras</option>
              <option value="collectibles">collectibles</option>
            </select>
          </label>

          <label>
            Price <span>*</span>
            <input type="number" name="price" required value={form.price} onChange={inpHandler} />
          </label>

          <label>
            Discount Percent
            <input type="number" name="discount" value={form.discount} onChange={inpHandler} />
          </label>
        </div>

        <label>
          Description <span>*</span>
          <textarea name="description" required value={form.description} onChange={inpHandler}></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProduct;
