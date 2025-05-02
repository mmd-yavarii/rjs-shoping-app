import { useEffect, useState } from 'react';
import { searchRequest } from '../../helper/functions';
import SearchBar from '../template/SearchBar';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [related, setRelated] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

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

  // search handler
  function searchHandler(value = searchValue) {
    if (value.length) {
      const result = { search: value };
      searchParams.forEach((v, k) => (result[k] = v));
      setSearchParams(result);
      setSearchValue('');
    }
  }
  // search recommend handler
  function recommendHandler(event) {
    searchHandler(event.target.innerText);
  }

  return (
    <SearchBar
      setSearchValue={setSearchValue}
      searchValue={searchValue}
      related={related}
      recommendHandler={recommendHandler}
      searchHandler={searchHandler}
    />
  );
}

export default Search;
