import { useSearchParams } from 'react-router-dom';
import styles from '../../styles/Category.module.scss';

function Category({ products }) {
  const categories = [...new Set(products.map((i) => i.category))];

  const [serachParams, setSearchParams] = useSearchParams();
  const urlSearchParams = new URLSearchParams(serachParams);
  const categorySelected = serachParams.get('category');

  function setCategoryHandler(event) {
    const category = event.target.innerText;

    if (category === 'All') {
      urlSearchParams.delete('category');
    } else {
      urlSearchParams.set('category', category);
    }

    setSearchParams(urlSearchParams, { replace: true });
  }

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.title}>Categories </h3>

        <button className={!categorySelected ? styles.selected : ''} onClick={setCategoryHandler}>
          All
        </button>
        {categories.map((i) => (
          <>
            <button className={categorySelected == i ? styles.selected : ''} key={i} onClick={setCategoryHandler}>
              {i}
            </button>
          </>
        ))}
      </div>
    </>
  );
}

export default Category;
