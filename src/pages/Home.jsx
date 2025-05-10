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

  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const maxHeight = useRef();
  const hasExecuted = useRef(false);

  // fetch products
  async function fetchProducts() {
    setIsLoading(true);
    if (isLoading) return;

    try {
      const response = await paginateDataRequest(start, end);
      response.length && setProducts((prev) => [...prev, ...response]);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [start, end]);

  // checks if the user has scrolled to the bottom of the page
  function handler() {
    const position = maxHeight.current.getBoundingClientRect();
    if (window.innerHeight === position.bottom && !hasExecuted.current) {
      setStart((prev) => prev + 10);
      setEnd((prev) => prev + 10);
      hasExecuted.current = true;
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

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
      <div className={`${styles.container} mmd`}>
        <div className={styles.navbar}>
          <div className={styles.searchbar}>
            <Search />
          </div>
          <Category products={products} />
        </div>

        <ProductsList display={display} />
      </div>

      {isLoading && (
        <div className={styles.loader}>
          <BeatLoader size="0.6rem" />
        </div>
      )}

      {!isLoading && <div ref={maxHeight}></div>}
    </>
  );
}

export default Home;
