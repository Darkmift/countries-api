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

const _setCountryList = (countries: Country[], regionName: string): Country[] => {
  return regionName ? countries.filter((c: Country) => c.region.includes(regionName)) : countries;
};

const _setSearchTerm = (set: Function, term: string) => set({ searchCountryTerm: term });
const _setCountries = (set: Function, countries: Country[]) => {
  set((s: State) => {
    const regionName = s.selectedRegionName;
    const selectedCountryList = _setCountryList(countries, regionName);
    return {
      allCountries: countries,
      selectedCountriesByRegion: selectedCountryList,
    };
  });
};
const _setSelectedRegionName = (set: Function, regionName: string) => {
  set((s: State) => {
    const selectedCountryList = _setCountryList(s.allCountries, regionName);

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
