import create from 'zustand';
import { Country } from '../type';

type State = {
  allCountries: Country[];
  searchCountryTerm: string;
  selectedCountry: Country | null;
  selectedRegionName: string;
  selectedCountriesByRegion: Country[];
  setSelectedRegionName: (regionName: string) => void;
  setSearchTerm: (term: string) => void;
  setCountries: (countries: Country[]) => void;
};

const _setCountryList = (countryList: Country[], regionName: string, term = ''): Country[] => {
  return regionName
    ? countryList.filter(
        (c: Country) =>
          c.name.common.toLowerCase().includes(term.toLowerCase()) &&
          c.region.includes(regionName)
      )
    : countryList;
};

const _setSearchTerm = (set: Function, term: string) => {
  set((s: State) => {
    const selectedCountryList = _setCountryList(s.allCountries, s.selectedRegionName, term);
    return {
      searchCountryTerm: term,
      selectedCountriesByRegion: selectedCountryList,
    };
  });
};
const _setCountries = (set: Function, countries: Country[]) => {
  set((s: State) => {
    const regionName = s.selectedRegionName;
    const selectedCountryList = _setCountryList(countries, regionName, s.searchCountryTerm);
    return {
      allCountries: countries,
      selectedCountriesByRegion: selectedCountryList,
    };
  });
};
const _setSelectedRegionName = (set: Function, regionName: string) => {
  set((s: State) => {
    const selectedCountryList = _setCountryList(s.allCountries, regionName, s.searchCountryTerm);

    return {
      selectedRegionName: regionName,
      selectedCountriesByRegion: selectedCountryList,
    };
  });
};

export default create<State>((set) => ({
  allCountries: [],
  searchCountryTerm: '',
  selectedCountry: null,
  selectedRegionName: '',
  selectedCountriesByRegion: [],
  setSearchTerm: (term: string) => _setSearchTerm(set, term),
  setCountries: (countries: Country[]) => _setCountries(set, countries),
  setSelectedRegionName: (regionName: string) => _setSelectedRegionName(set, regionName),
}));
