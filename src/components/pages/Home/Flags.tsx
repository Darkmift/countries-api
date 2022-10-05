import { Country } from '../../../type'
import scssModule from './Flags.module.scss'

type FlagCardProps = {
  country?: Country
}

const FlagCard = ({ country }: FlagCardProps) => {
  return (
    <div className={scssModule['flag-card']}>
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