import React, { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      console.log(search); 
    } else {
      alert('Please enter a search term.'); 
    }
  };

  return (
    <div className='w-screen bg-black text-white'>
      <h1 className='text-center text-4xl py-8 font-semibold tracking-wider'>Search Exercises</h1>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto flex items-center justify-center'>
        <input
          type="text"
          className='bg-transparent border-[1px] border-gray-300 rounded-l-lg outline-none text-white w-full py-2 px-3'
          placeholder='Search here...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search exercises"
        />
        <button
          type="submit"
          className='bg-cOrange py-2 px-3 border-[1px] rounded-r-lg border-gray-300 ml-[0.009rem] transition-colors duration-200 hover:bg-[#ff8c00]'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
