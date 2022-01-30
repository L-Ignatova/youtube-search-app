import React, { useState } from 'react';

const SearchBar = ({ defaultQuery, onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState(defaultQuery);

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  return (
    <div className='ui segment'>
      <h4>Video search</h4>
      <form onSubmit={onSubmit} className="ui fluid icon input">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(ev) => setSearchTerm(ev.target.value)} 
        />
        <i aria-hidden="true" className="search circular link icon"></i>
      </form>
    </div>
  );
};

export default SearchBar;