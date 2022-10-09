import create from 'zustand';
import { Country } from '../type';
import deepclone from '../utils/deepClone';
type State = {
  allCountries: Country[];
  searchCountryTerm: string;
  selectedCountry: Country | null;
  selectedRegionName: string;
  selectedCountriesByRegion: Country[];
  setSelectedRegionName: (regionName: string) => void;
  setSearchTerm: (term: string) => void;
  setCountries: (countries: Country[]) => void;
  fetchCountryFromCCA3: (cca3Code: string) => string;
  setSelectedCountry: (country: Country) => void;
};

const _setCountryList = (countryList: Country[], regionName: string, term = ''): Country[] => {
  return regionName
    ? countryList.filter(
        (c: Country) =>
          c.name.common.toLowerCase().includes(term.toLowerCase()) && c.region.includes(regionName)
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
const _getNameFromCountries = (get: Function, cca3Code: string) => {
  const allCountries = get().allCountries;

  try {
    const targetCountry = allCountries.find(
      (country: Country) => country.cca3.toLowerCase() === cca3Code.toLowerCase()
    );
    if (targetCountry) {
      return targetCountry.name.common;
    }
    return cca3Code;
  } catch (error) {
    console.warn('🚀 ~ file: countries.ts ~ line 66 ~ error', error);
    return cca3Code;
  }
};

const _setCountryAsSelectedCountry = (set: Function, country: Country) => {
  if (!country) throw new Error('Country not provided');
  set((s: State) => {
    const allCountries = s.allCountries;
    country.mappedBorders = country.mappedBorders ? country.mappedBorders : [];
    country.borders?.forEach((cca3Code) => {
      const target = allCountries.find((c) => c.cca3 === cca3Code);
      if (!target) return;
      country.mappedBorders.push(deepclone(target));
    });
    return { selectedCountry: country };
  });
};

export default create<State>((set, get) => ({
  allCountries: [],
  searchCountryTerm: '',
  selectedCountry: null,
  selectedRegionName: '',
  selectedCountriesByRegion: [],
  setSearchTerm: (term: string) => _setSearchTerm(set, term),
  setCountries: (countries: Country[]) => _setCountries(set, countries),
  setSelectedRegionName: (regionName: string) => _setSelectedRegionName(set, regionName),
  fetchCountryFromCCA3: (cca3Code: string) => _getNameFromCountries(get, cca3Code),
  setSelectedCountry: (country: Country) => _setCountryAsSelectedCountry(set, country),
}));
