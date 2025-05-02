import Search from '../components/module/Search';

import styles from '../styles/Home.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.searchbar}>
        <Search />
      </div>
    </div>
  );
}

export default Home;
