import { Routes, Route, Outlet } from 'react-router-dom';
import Country from './components/pages/Country';
import Home from './components/pages/Home';

const MainRouter = () => <Routes>
  <Route path="/" element={<Home />}>
  </Route>
  <Route
    path="/country"
    element={<Country />}
  />
</Routes>

export { MainRouter, Outlet }
