import { useLocation } from 'react-router-dom';

type Props = {}

const Country = (props: Props) => {
  const location = useLocation();

  return (
    <div>{location.state.country.name.common}</div>
  )
}

export default Country