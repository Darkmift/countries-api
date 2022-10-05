import React, { useState } from 'react';
import scssModule from './RegionDropDown.module.scss';
import useThemeStore from '../../../store/theme';

//svg
import dropDownCloseDark from '../../../assets/dropdown-close-dark.svg';
import dropDownOpenDark from '../../../assets/dropdown-open-dark.svg';
import dropDownCloseLight from '../../../assets/dropdown-close-light.svg';
import dropDownOpenLight from '../../../assets/dropdown-open-light.svg';
import { useOnClickOutside } from '../../../hooks/useonClickOutside';
import useCountryStore from '../../../store/countries';

type RegionOptionsProps = {
  isOptionsOpen: boolean,
  optionsSelectHandler: (selectedRegion: string) => void,
}

const RegionOptions = ({
  isOptionsOpen,
  optionsSelectHandler: setOptionsOpen,
}: RegionOptionsProps) => {

  // logic controlling display of options of region names
  const regionNames = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const regionClickHandler = (name: string) => {
    setOptionsOpen(name)
  }

  return <>{
    isOptionsOpen && <div className="region-select">
      {regionNames.map((name, i) => {
        return <div
          key={i}
          onClick={() => regionClickHandler(name)}
          className="region-option">{name}
        </div>
      })}
    </div>
  }</>
}

type RegionDropDownProps = {}
const RegionDropDown = (props: RegionDropDownProps) => {

  const setSelectedRegionName = useCountryStore(s => s.setSelectedRegionName)
  const selectedRegionName = useCountryStore(s => s.selectedRegionName)
  const ref = React.createRef<HTMLDivElement>();
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  useOnClickOutside(ref, () => setOptionsOpen(false));

  const regionClickHandler = (name: string) => {
    setOptionsOpen(v => {
      return false;
    })
    setSelectedRegionName(name)
  }

  //logic for svg display
  const isDarkMode = useThemeStore(s => s.isDarkMode);
  const toggleOpenSvgLight = isOptionsOpen ? dropDownCloseLight : dropDownOpenLight;
  const toggleOpenSvgDark = isOptionsOpen ? dropDownCloseDark : dropDownOpenDark;

  return (
    <div className={scssModule["region-drop-down"]} ref={ref}>
      <button
        className="button-wrapper"
        onClick={() => setOptionsOpen(v => !v)}
      >
        <div>{selectedRegionName?.length ? selectedRegionName : 'Filter By Region'}</div>
        <img src={isDarkMode ? toggleOpenSvgDark : toggleOpenSvgLight} alt="SVG logo image" />
      </button>
      <RegionOptions
        isOptionsOpen={isOptionsOpen}
        optionsSelectHandler={regionClickHandler}
      />
    </div>
  )
}

export default RegionDropDown;