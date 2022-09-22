import { React } from 'react';
import PropTypes from 'prop-types';

export function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      type='text'
      className='search-bar'
      placeholder='Cari berdasarkan nama'
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
