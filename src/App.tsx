import { useState } from 'react';
import './App.scss'
import Navbar from './components/layout/Navbar';


import {
  MainRouter
} from './router'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={"app" + (isDarkMode ? ' dark-mode' : '')}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <MainRouter />
    </div>
  )
}

export default App
