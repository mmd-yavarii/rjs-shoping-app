import { useEffect, useRef, useState } from 'react';
import { paginateDataRequest } from '../helper/functions';
import ProductsList from '../components/template/ProductsList';
import { useSearchParams } from 'react-router-dom';
import Category from '../components/module/Category';

import styles from '../styles/Home.module.scss';
import Search from '../components/module/Search';
import { BeatLoader } from 'react-spinners';

function Home() {
  const [products, setProducts] = useState([]);
  const [display, setDisplay] = useState([]);
  const [end, setEnd] = useState(8);
  const lastProduct = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  // fetch roducts
  useEffect(() => {
    setIsLoading(true);
    paginateDataRequest(0, end)
      .then((res) => setProducts(res))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [end]);

  // set filters
  useEffect(() => {
    let result = [...products];

    if (category) {
      result = result.filter((i) => i.category === category);
    }
    if (search) {
      result = result.filter((i) => i.name.toLowerCase().includes(search.toLowerCase()));
    }

    setDisplay(result);
  }, [category, search, products]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.searchbar}>
            <Search />
          </div>
          <Category products={products} />
        </div>

        <ProductsList display={display} lastProduct={lastProduct} />
      </div>

      {isLoading && (
        <div className={styles.loader}>
          <BeatLoader size="0.5rem" />
        </div>
      )}
    </>
  );
}

export default Home;
