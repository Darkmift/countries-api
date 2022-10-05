import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';
import { GetCountriesResponse } from '../type';

const fetchCountries = () => {
  return axios.get<GetCountriesResponse>('https://restcountries.com/v3.1/all');
};

export const useQueryCountries = (
  onSuccess: (data: GetCountriesResponse) => void,
  onError: (error: AxiosError) => void
) => {
  return useQuery('coutnries-all', fetchCountries, {
    onSuccess,
    onError,
  });
};
