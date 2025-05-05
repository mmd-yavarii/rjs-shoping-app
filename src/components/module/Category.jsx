import { useSearchParams } from 'react-router-dom';
import styles from '../../styles/Category.module.scss';
import { categories } from '../../helper/varables';

function Category({ products }) {
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
          <div key={i.id}>
            <button className={categorySelected == i.value ? styles.selected : ''} onClick={setCategoryHandler}>
              {i.value}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
