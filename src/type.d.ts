import react from 'react';
export type InputEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export type GetCountriesResponse = {
  data: Country[];
};

export type Country = {
  name: {
    common: String;
    nativeName: {
      [key: string]: {
        common: String;
      };
    };
  };
  region: String;
  subregion: String;
  capital: String[]; //fetch first
  flags: {
    png: String;
    svg: String;
  };
  population: Number;
  currencies: {
    [key: string]: {
      name: String;
    };
  };
  languages: {
    [key: string]: String;
  };
  borders: String[]; // list of nations by cca3 code
  cca3: String; //the contry code -- will be used to refrence from borders
  mappedBorders?: Country[]; // will be hydrated
};

export type RefType = React.RefObject<HTMLElement> | React.MutableRefObject<undefined>;
