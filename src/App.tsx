import { useState } from 'react';
import './App.scss'
import Navbar from './components/layout/Navbar';
import useCountryStore from './store/countries';
import Types from './type';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const searchTerm = useCountryStore(s => s.searchCountryTerm);
  const setSearchTerm = useCountryStore(s => s.setSearchTerm);

  const searchTermHandler = (evt: Types.InputEvent) => {
    const term = evt.target.value.toLowerCase();
    setSearchTerm(term)
  }

  return (
    <div className={"app" + (isDarkMode ? ' dark-mode' : '')}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <input
        type="text"
        placeholder="enter term"
        value={searchTerm}
        onChange={searchTermHandler} />
      <p>{searchTerm.length > 3 ? searchTerm : 'Input a Country name'}</p>
    </div>
  )
}

export default App
