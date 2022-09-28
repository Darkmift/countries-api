import create from 'zustand';

type Country = {};

type State = {
  allCountries: Country[];
  searchCountryTerm: string;
  selectedCountry: Country | null;
  selectedRegionName: string;
  selectedCountriesByRegion: Country[];
  setSearchTerm: (term: string) => void;
};

//  setLastName: (lastName) => set({ lastName }),

const _setSearchTerm = (set: Function, term: string) => set({ searchCountryTerm: term });

export default create<State>((set) => ({
  allCountries: [],
  searchCountryTerm: '',
  selectedCountry: null,
  selectedRegionName: '',
  selectedCountriesByRegion: [],
  setSearchTerm: (term: string) => _setSearchTerm(set, term),
}));
