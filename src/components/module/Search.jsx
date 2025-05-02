import { useEffect, useState } from 'react';
import { searchRequest } from '../../helper/functions';
import SearchBar from './SearchBar';
import { replace, useSearchParams } from 'react-router-dom';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [related, setRelated] = useState([]);
  const [showRecommend, setShowRecommend] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);
  const search = urlSearchParams.get('search') || '';

  useEffect(() => setSearchValue(search), []);

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

  useEffect(() => {
    if (!!searchValue.length) {
      setShowRecommend(true);
    } else {
      setShowRecommend(false);
    }
  }, [searchValue]);

  // search handler
  function searchHandler(value = searchValue) {
    if (value.length) {
      urlSearchParams.set('search', value);
      setSearchParams(urlSearchParams);
      setShowRecommend(false);
    }
  }
  // search recommend handler
  function recommendHandler(event) {
    setSearchValue(event.target.innerText);
    searchHandler(event.target.innerText);
  }

  return (
    <SearchBar
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      related={related}
      recommendHandler={recommendHandler}
      searchHandler={searchHandler}
      showRecommend={showRecommend}
      urlSearchParams={urlSearchParams}
      setSearchParams={setSearchParams}
      setShowRecommend={setShowRecommend}
    />
  );
}

export default Search;
