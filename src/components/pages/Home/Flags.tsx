import { Country } from '../../../type'
import scssModule from './Flags.module.scss'
import MockCountryJson from '../../../assets/mockCountry.json'

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


type FlagsProps = {}
const Flags = (props: FlagsProps) => {
  const flagArr = [...Array(8).keys()]

  return (
    <div className={scssModule['flags']}>
      {flagArr.map((n, i) => <FlagCard key={i} country={MockCountryJson} />)}
    </div>
  )
}

export default Flags;