import { IoSearchSharp } from 'react-icons/io5';

import styles from '../../styles/Search.module.scss';

function Search() {
  return (
    <div className={styles.container}>
      <IoSearchSharp opacity="0.5" size="1.1rem" />
      <input type="text" placeholder="Search Product" />
    </div>
  );
}

export default Search;
