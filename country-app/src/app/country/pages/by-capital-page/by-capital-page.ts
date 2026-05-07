import { Component, inject, Query, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { CountryList } from '../../components/country-list/country-list';
import { Country } from '../../services/country';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage {
  countryService = inject(Country);
  query = signal()

  countryResouce = resource({
    request: () => ({
      query: this.query()
    }),
    loader: async({abortSignal}) =>{
      if(!this.query) return [];
      return this.countryService.searchByCapital()
    }
  })
//   isLoading = signal(false);
//   isError = signal<string | null>(null);
//   countries = signal<CountryInterface[]>([]);

//   onSearch(query: string) {
//     if (this.isLoading()) return;
//     this.isLoading.set(true);
//     this.isError.set(null);

//     this.countryService.searchByCapital(query).subscribe({
//       next: (countries)=> {
//         this.isLoading.set(false);
//         this.countries.set(countries);
//       },
//       error:(err) => {
//         this.isLoading.set(false)
//         this.countries.set([])
//         this.isError.set(`No se encontró un país con esta capital: ${query}`)
//       },
//     });
//   }
// }

// (countries) => {

//       this.isLoading.set(true);
//       this.countries.set(countries)
