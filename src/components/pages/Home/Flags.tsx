import { Country } from '../../../type'
import scssModule from './Flags.module.scss'

import { useNavigate } from "react-router-dom";

type FlagCardProps = {
  country?: Country
}

const FlagCard = ({ country }: FlagCardProps) => {

  const navigate = useNavigate();
  //on nav to details page
  const clickHandler = (country: Country) => {
    navigate('/country', { state: { country } });
  }

  // fail safe(also for ts undefined issues)
  if (!country) { return <>Country Data reading error</> }

  return (
    <div className={scssModule['flag-card']} onClick={() => clickHandler(country)}>
      <img src={country?.flags.svg} alt={country?.name.common} />
      <div className="details-wrapper">
        <p className="card-title">
          {country?.name.common}
        </p>
        <div className="stats">
          <p>Population:&nbsp;{country?.population.toLocaleString()}</p>
          <p>Region:&nbsp;{country?.region}</p>
          <p>Capital:&nbsp;{country?.capital}</p>
        </div>
      </div>
    </div>
  )
}

type FlagsProps = {
  selectedCountries: Country[]
}

const Flags = ({ selectedCountries }: FlagsProps) => {
  return (
    <div className={scssModule['flags']}>
      {selectedCountries.map((country, i) => <FlagCard key={i} country={country} />)}
    </div>
  )
}

export default Flags;