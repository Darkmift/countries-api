import scssModule from './SearchBar.module.scss';
import useCountryStore from '../../../store/countries';
import useThemeStore from '../../../store/theme';
import Types from '../../../type';

//svg
import magnifyLight from '../../../assets/magnify-gray.svg';
import magnifyDark from '../../../assets/magnify-white.svg';

const SearchBar = () => {
  const searchTerm = useCountryStore(s => s.searchCountryTerm);
  const setSearchTerm = useCountryStore(s => s.setSearchTerm);
  const isDarkMode = useThemeStore(s => s.isDarkMode);

  const searchTermHandler = (evt: Types.InputEvent) => {
    const term = evt.target.value.toLowerCase();
    setSearchTerm(term)
  }

  return (
    <div className={scssModule['search-bar']}>
      <img src={isDarkMode ? magnifyDark : magnifyLight} alt="SVG logo image" />

      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={searchTermHandler} />
    </div>
  )
}


export default SearchBar;