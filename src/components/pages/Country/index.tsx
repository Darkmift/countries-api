import scssModule from './Country.module.scss';
import useThemeStore from '../../../store/theme';
import useCountryStore from '../../../store/countries';

import { useNavigate } from 'react-router-dom';
import { Country as CountryType } from '../../../type'

//svg
// left-arrow-dark.svg

import leftArrowLight from '../../../assets/left-arrow-light.svg';
import leftArrowDark from '../../../assets/left-arrow-dark.svg';
import { useEffect } from 'react';

type CountryPageProps = {}

const Country = (props: CountryPageProps) => {
  const navigate = useNavigate();
  const isDarkMode = useThemeStore(s => s.isDarkMode);
  const selectedCountry = useCountryStore(s => s.selectedCountry) as CountryType;

  useEffect(() => {

    if (!selectedCountry?.name) {
      navigate('/');
    }
  }, [selectedCountry])


  if (!selectedCountry) {

    return <>Failed to fetch Data</>
  }

  const officialName = Object.entries(selectedCountry.name.nativeName)[0][1].official;
  const currencyName = Object.entries(selectedCountry.currencies)[0][1].name;
  const language = Object.entries(selectedCountry.languages)[0][1];
  const topLevelDomain = selectedCountry.tld[0];
  const borderCountriesTags = selectedCountry.mappedBorders.length < 1 ? <span>No Borders</span> : selectedCountry.mappedBorders.map((country, i) => <span key={i}>{country.name.common}</span>)


  return (
    <div className={scssModule['country']}>

      <div className="go-back" onClick={() => navigate('/')}>
        <img src={isDarkMode ? leftArrowDark : leftArrowLight} alt="SVG logo image" />
        <span>Back</span>
      </div>

      <div className="main-wrapper">
        <img src={selectedCountry.flags.svg} alt={selectedCountry.name.common} />
        <div className="stats-wrapper">
          <div className="country-title">
            {selectedCountry.name.common}
          </div>
          <div className="country-details">
            <div className="column">
              <div>
                <span>Native Name:</span>
                <span>{officialName}</span>
              </div>
              <div>
                <span>Population:</span>
                <span>{selectedCountry.population.toLocaleString()}</span>
              </div>
              <div>
                <span>Region:</span>
                <span>{selectedCountry.region}</span>
              </div>
              <div>
                <span>Sub Region:</span>
                <span>{selectedCountry.subregion}</span>
              </div>
              <div>
                <span>Capital:</span>
                <span>{selectedCountry.capital}</span>
              </div>
            </div>
            <div className="column">
              <div>
                <span>Top Level Domain:</span>
                <span>{topLevelDomain}</span>
              </div>
              <div>
                <span>Currencies:</span>
                <span>{currencyName}</span>
              </div>
              <div>
                <span>Languages:</span>
                <span>{language}</span>
              </div>
            </div>
          </div>
          <div className="country-neighbours-tags">
            <span>Border Countries:</span>
            <div className="tags">{borderCountriesTags}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Country