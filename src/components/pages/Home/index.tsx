import scssModule from './Home.module.scss';
import SearchBar from './SearchBar';

//svg
import RegionDropDown from './RegionDropDown';


const Home = () => {

  return (
    <div className={scssModule['home']}>
      <div className="controls">
        <SearchBar />
        <RegionDropDown />
      </div>
    </div>
  )
}

export default Home