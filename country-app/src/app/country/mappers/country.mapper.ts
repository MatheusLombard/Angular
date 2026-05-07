import { CountryInterface } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.intarface';

export class CountryMapper {
  static mapRESTCapitalToCapital(country: RESTCountry): CountryInterface {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.translations['spa'].common ?? 'No name in Spanish',
      capital: country.capital.join(','),
      population: country.population,
    };
  }

  static mapRESTCapitalArrayToCapitalArray(countries: RESTCountry[]): CountryInterface[]{
    return countries.map(this.mapRESTCapitalToCapital)
  }

}
