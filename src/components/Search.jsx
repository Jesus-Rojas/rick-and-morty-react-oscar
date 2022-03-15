import React from 'react'

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className='Search'>
			<input ref={searchInput} value={search} type="search" onChange={ handleSearch } />
		</div>
  )
}

export { Search }