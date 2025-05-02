import { IoSearchSharp } from 'react-icons/io5';

import styles from '../../styles/Search.module.scss';
import { useEffect, useRef } from 'react';

function SearchBar(props) {
  const { setSearchValue, searchValue, related, recommendHandler, searchHandler, showRecommend, setShowRecommend, urlSearchParams, setSearchParams } =
    props;

  const container = useRef();

  const recommend = [...new Set(related.map((i) => i.name))];

  // close dropdown haandler
  useEffect(() => {
    const handleClick = (event) => {
      if (container.current && !container.current.contains(event.target)) {
        setShowRecommend(false);
      }
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // input handler
  function inpHandler(event) {
    setSearchValue(event.target.value);

    if (!event.target.value.length) {
      urlSearchParams.delete('search');
      setSearchParams(urlSearchParams, { replace: true });
    }
  }

  return (
    <div className={styles.container} ref={container}>
      <input type="text" placeholder="Search Product" value={searchValue} onChange={inpHandler} />

      <button className={styles.searchBtn} onClick={() => searchHandler()}>
        <IoSearchSharp opacity="0.5" size="1.1rem" />
      </button>

      {showRecommend && (
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
