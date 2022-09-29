import scssModule from './Home.module.scss';
import useCountryStore from '../../store/countries';
import Types from '../../type';

const Home = () => {

  const searchTerm = useCountryStore(s => s.searchCountryTerm);
  const setSearchTerm = useCountryStore(s => s.setSearchTerm);

  const searchTermHandler = (evt: Types.InputEvent) => {
    const term = evt.target.value.toLowerCase();
    setSearchTerm(term)
  }

  return (
    <div className={scssModule['home']}>
      <input
        type="text"
        placeholder="enter term"
        value={searchTerm}
        onChange={searchTermHandler} />
      <p>{searchTerm.length > 3 ? searchTerm : 'Input a Country name'}</p>
    </div>
  )
}

export default Home