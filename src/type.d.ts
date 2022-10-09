import react from 'react';
export type InputEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export type GetCountriesResponse = {
  data: Country[];
};

export type Country = {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      };
    };
  };
  tld: string[];
  region: string;
  subregion: string;
  capital: string[]; //fetch first
  flags: {
    png: string;
    svg: string;
  };
  population: Number;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders?: string[]; // list of nations by cca3 code
  cca3: string; //the contry code -- will be used to refrence from borders
  mappedBorders: Country[]; // will be hydrated
};

export type RefType = React.RefObject<HTMLElement> | React.MutableRefObject<undefined>;
