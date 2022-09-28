import './App.scss'
import useCountryStore from './store/countries';
import Types from './type';

function App() {

  const searchTerm = useCountryStore(s => s.searchCountryTerm);
  const setSearchTerm = useCountryStore(s => s.setSearchTerm);

  const searchTermHandler = (evt: Types.InputEvent) => {
    console.log("🚀 ~ file: App.tsx ~ line 11 ~ searchTermHandler ~ evt", evt)
    const term = evt.target.value.toLowerCase();
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter term"
        value={searchTerm}
        onChange={searchTermHandler} />
      <p>{searchTerm.length > 3 ? searchTerm : 'Input a Country name'}</p>
    </div>
  )
}

export default App
