import scssModule from './Home.module.scss';
import SearchBar from './SearchBar';
import RegionDropDown from './RegionDropDown';
import Flags from './Flags';

const Home = () => {

  return (
    <div className={scssModule['home']}>
      <div className="controls">
        <SearchBar />
        <RegionDropDown />
      </div>
      <Flags />
    </div>
  )
}

export default Home