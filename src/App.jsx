import './App.css'
import { Header } from './components/Header'
import { Characters } from './components/Characters'
import { ThemeContext } from './context/ThemeContext';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);
  const globalState = { dark, setDark }
  return (
    <ThemeContext.Provider value={ globalState }>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export { App } ;
