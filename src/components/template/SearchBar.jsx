import { IoSearchSharp } from 'react-icons/io5';

import styles from '../../styles/Search.module.scss';
import { useEffect, useRef } from 'react';

function SearchBar({ setSearchValue, searchValue, related, recommendHandler, searchHandler }) {
  const container = useRef();

  const recommend = [...new Set(related.map((i) => i.name))];

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

      <button className={styles.searchBtn} onClick={() => searchHandler()}>
        <IoSearchSharp opacity="0.5" size="1.1rem" />
      </button>

      {!!searchValue.length && (
        <div className={styles.dropdown}>
          {related.length ? (
            recommend.map((item) => (
              <button onClick={recommendHandler} key={item}>
                {item}
              </button>
            ))
          ) : (
            <p>No products found !</p>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
