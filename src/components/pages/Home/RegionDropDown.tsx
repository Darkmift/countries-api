import { useState } from 'react';
import scssModule from './RegionDropDown.module.scss';
import useThemeStore from '../../../store/theme';

//svg
import dropDownCloseDark from '../../../assets/dropdown-close-dark.svg';
import dropDownOpenDark from '../../../assets/dropdown-open-dark.svg';
import dropDownCloseLight from '../../../assets/dropdown-close-light.svg';
import dropDownOpenLight from '../../../assets/dropdown-open-light.svg';

type Props = {}

const RegionDropDown = (props: Props) => {

  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  const isDarkMode = useThemeStore(s => s.isDarkMode);

  const toggleOpenSvgLight = dropDownIsOpen ? dropDownCloseLight : dropDownOpenLight;
  const toggleOpenSvgDark = dropDownIsOpen ? dropDownCloseDark : dropDownOpenDark;

  return (
    <div className={scssModule["region-drop-down"]}>
      <button className="button-wrapper" onClick={() => setDropDownIsOpen(v => !v)}>
        <div>Filter By Region</div>
        <img src={isDarkMode ? toggleOpenSvgDark : toggleOpenSvgLight} alt="SVG logo image" />
      </button>
    </div>
  )
}

export default RegionDropDown;