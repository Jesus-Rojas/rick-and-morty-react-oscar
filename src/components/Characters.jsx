import { useState, useEffect, useReducer, useMemo } from 'react'

const initialState = {
  favorites: []
};

function favoriteReducer(state, { type, payload }) {
  switch (type) {
    case 'ADD_TO_FAVORITE':
      const filtro = state.favorites.filter( data => data.id == payload.id)
      if (filtro.length == 0) {
        return {
          ...state,
          favorites: [...state.favorites, payload]
        };
      }
      return state;
    default:
      return state;
  }
}

const Characters = () => {
  // states - reducers - context
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  const { favorites } = state;

  // methods
  const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    setCharacters(results);
  };
  const handleClick = (favorite) => { 
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }
  const handleSearch = ({target:{ value }}) => { 
    setSearch(value)
  }
  const filteredUsers = useMemo( () =>
    characters.filter( data => {
      return data.name.toLowerCase().includes(search.toLowerCase());
    }),
    [characters, search]
  )
  

  // cycle hook
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <div className='Search'>
        <input value={search} type="search" onChange={ handleSearch } />
      </div>
      <hr />
      <div className='Favorites'>
        {favorites.map( (character) => (
          <li key={`favorite-${character.id}`}>
            {character.name}
          </li>
        ))}
      </div>
      <hr />
      <div className='Characters'>
        {filteredUsers.map( (character) => (
          <div key={`characters-${character.id}`}>
            <h2>{character.name}</h2>
            <button type='button' onClick={ () => handleClick(character) }>
              Add Favorite
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export { Characters }