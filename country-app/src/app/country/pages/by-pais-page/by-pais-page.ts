import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { SearchInput } from "../../components/search-input/search-input";

@Component({
  selector: 'app-by-pais-page',
  imports: [CountryList, SearchInput],
  templateUrl: './by-pais-page.html',
})
export class ByPaisPage {
  onSearch($event: string) {
    console.log('onSearch', $event)
  }
}
