import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifList } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',

})
export default class SearchPage {
  searchAPI = inject(GifService)

  onSearch(query:string){
    this.searchAPI.searchGifs(query)
  }
 }
