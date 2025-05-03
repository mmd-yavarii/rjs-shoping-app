import Card from '../components/module/Card';
import Empty from '../components/template/Empty';

import { useBookmark } from '../context/BookmarkProvider';

import styles from '../styles/Home.module.scss';

function Bookmark() {
  const [bookmarks] = useBookmark();

  return (
    <div className={styles.container}>
      {bookmarks.length ? (
        <>
          <h4 className={styles.title}>Bookmarks</h4>
          <div className={styles.productsList}>
            {bookmarks.map((i) => (
              <Card info={i} key={i.id} />
            ))}
          </div>
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default Bookmark;
