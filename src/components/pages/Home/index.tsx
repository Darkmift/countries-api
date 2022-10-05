import scssModule from './Home.module.scss';
import SearchBar from './SearchBar';
import RegionDropDown from './RegionDropDown';
import Flags from './Flags';
import { useQueryCountries } from '../../../hooks/useQueryCountries';
import useCountryStore from '../../../store/countries';
import { Country } from '../../../type';

const Home = () => {

  const allCountries = useCountryStore(s => s.allCountries)
  const selectedCountriesByRegion = useCountryStore(s => s.selectedCountriesByRegion)
  const setCountries = useCountryStore(s => s.setCountries)

  const onSuccess = (data: any) => {
    setCountries(data.data)
  }

  const onError = (error: any) => {
    console.log({ error })
    setCountries([])
  }

  const { isLoading, isError, error } = useQueryCountries(
    onSuccess,
    onError
  )

  return (
    <div className={scssModule['home']}>
      <div className="controls">
        <SearchBar />
        <RegionDropDown />
      </div>

      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error?.message || 'Error fetching...'}</h2>}
      {isLoading || isError || allCountries?.length < 1 ? '' : <Flags selectedCountries={selectedCountriesByRegion as Country[]} />}

    </div>
  )
}

export default Home