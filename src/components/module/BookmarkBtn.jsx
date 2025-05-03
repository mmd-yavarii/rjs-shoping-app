import { FaRegHeart, FaHeart } from 'react-icons/fa6';

import { useBookmark } from '../../context/BookmarkProvider';

function BookmarkBtn({ info }) {
  const [bookmarks, dispatchBookmarks, exists] = useBookmark();
  const existence = exists(info);

  // save a card in bookmark list
  function bookmarkHandler(event) {
    event.stopPropagation();

    if (existence) {
      dispatchBookmarks({ type: 'REMOVE', payload: info });
    } else {
      dispatchBookmarks({ type: 'ADD', payload: info });
    }
  }

  return (
    <button onClick={bookmarkHandler} style={{ backgroundColor: 'transparent', width: 'fit-content', height: 'fit-content' }}>
      {existence ? <FaHeart fontSize="1.1rem" color="red" opacity="0.6 " /> : <FaRegHeart fontSize="1.1rem" opacity="0.7 " />}
    </button>
  );
}

export default BookmarkBtn;
