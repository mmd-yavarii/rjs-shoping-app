import styles from '../../styles/AddProduct.module.scss';

import { useState } from 'react';
import { categories } from '../../helper/varables';

function Form({ form, setForm, onSubmit, buttonText = 'Submit' }) {
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
      <form className={styles.form} onSubmit={onSubmit}>
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
              {categories.map((i) => (
                <option key={i.id} value={i.value}>
                  {i.value}
                </option>
              ))}
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

        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default Form;
