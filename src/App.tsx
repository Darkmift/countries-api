import './App.scss'
import Navbar from './components/layout/Navbar';
import useThemeStore from './store/theme';

import {
  MainRouter
} from './router'

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {

  const isDarkMode = useThemeStore(s => s.isDarkMode);
  const setIsDarkMode = useThemeStore(s => s.setIsDarkMode);

  return (
    <QueryClientProvider client={queryClient}>
      <div className={"app" + (isDarkMode ? ' dark-mode' : '')}>
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <MainRouter />
      </div>
    </QueryClientProvider>
  )
}

export default App
