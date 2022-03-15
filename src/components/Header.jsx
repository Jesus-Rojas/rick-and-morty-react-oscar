import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const handleClick = () => { 
    setDark(!dark)
  }
  return (
    <div className='Header'>
      <h1 style={{ color: dark ? 'green' : 'purple' }}>React Hooks</h1>
      <button
        type='button'
        onClick={handleClick}
      >
        { dark ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export { Header } 