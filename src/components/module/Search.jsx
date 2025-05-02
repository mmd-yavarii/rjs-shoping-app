import { IoSearchSharp } from 'react-icons/io5';

import styles from '../../styles/Search.module.scss';

import { useEffect, useRef, useState } from 'react';
import { searchRequest } from '../../helper/functions';
import { Link } from 'react-router-dom';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [related, setRelated] = useState([]);
  const container = useRef();

  // find related products width search
  useEffect(() => {
    async function fetchData() {
      const response = await searchRequest(searchValue);
      setRelated(response);
    }
    if (searchValue.trim() !== '') {
      fetchData();
    }
  }, [searchValue]);

  // close dropdown haandler
  useEffect(() => {
    const handleClick = (event) => {
      if (container.current && !container.current.contains(event.target)) {
        setSearchValue('');
      }
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={styles.container} ref={container}>
      <input type="text" placeholder="Search Product" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />

      <button className={styles.searchBtn} onClick={() => {}}>
        <IoSearchSharp opacity="0.5" size="1.1rem" />
      </button>

      {!!searchValue.length && (
        <div className={styles.dropdown}>
          {related.length ? (
            related.slice(0, 4).map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>
                  {item.name} - {item.price}$
                </p>
              </Link>
            ))
          ) : (
            <p>No products found !</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
