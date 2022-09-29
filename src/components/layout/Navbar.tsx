import crescent_light from '../../assets/crescent_border.svg';
import crescent_dark from '../../assets/crescent_blank.svg';
import { Dispatch, SetStateAction } from 'react';
import scssModule from './Navbar.module.scss'

type Props = {
  isDarkMode: boolean,
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ isDarkMode, setIsDarkMode }: Props) => {

  return (
    <nav className={scssModule['nav-bar']}>
      <h1>Where in the world?</h1>

      <div className="dark-mode-toggle-wrapper" onClick={() => setIsDarkMode(!isDarkMode)}>
        <img src={isDarkMode ? crescent_dark : crescent_light} alt="SVG logo image" />
        {/*8px*/}
        <p>{isDarkMode ? 'Light' : 'Dark'} Mode</p>
      </div>
    </nav>
  )
}

export default Navbar