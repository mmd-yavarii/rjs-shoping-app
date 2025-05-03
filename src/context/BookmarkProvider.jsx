import { createContext, useContext, useEffect, useReducer } from 'react';

const BookmarkContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    case 'REMOVE':
      return state.filter((i) => i.id != action.payload.id);

    default:
      throw new Error('Action is not defined ');
  }
}

function BookmarkProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('bookmarks')) || []);

  const exists = (info) => state.some((item) => item.id === info.id);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(state));
  }, [state]);

  return <BookmarkContext.Provider value={[state, dispatch, exists]}>{children}</BookmarkContext.Provider>;
}

function useBookmark() {
  return useContext(BookmarkContext);
}

export default BookmarkProvider;
export { useBookmark };
