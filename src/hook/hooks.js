import axios from 'axios';

import { useEffect, useReducer } from 'react';

export function useRequest(url) {
  const initialState = {
    isLoading: true,
    data: [],
    error: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'SUCCESS':
        return { isLoading: false, data: action.payload, error: '' };
      case 'FAILED':
        return { isLoading: false, data: [], error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => dispatch({ type: 'SUCCESS', payload: res.data }))
      .catch((err) => dispatch({ type: 'FAILED', payload: err.message }));
  }, [url]);

  return state;
}
