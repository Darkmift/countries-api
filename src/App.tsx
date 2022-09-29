import { useState } from 'react';
import './App.scss'
import Navbar from './components/layout/Navbar';
import useThemeStore from './store/theme';

import {
  MainRouter
} from './router'

function App() {

  const isDarkMode = useThemeStore(s => s.isDarkMode);
  const setIsDarkMode = useThemeStore(s => s.setIsDarkMode);

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
