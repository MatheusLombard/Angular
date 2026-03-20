import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/gyphy.interfaces';
import { Gif } from '../interfaces/gif.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';


// {
//   'goku': [gif1, gif2, gif3],
//   'saitama': [gif1, gif2, gif3],
// }

// Record<string, gif[]>

const loadLocalStorage = () => {
  const gifsHistory = localStorage.getItem('historyGifs')
  return gifsHistory ? JSON.parse(gifsHistory) : {}
}


@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(true)

  trendingGifsGroup = computed<Gif[][]>(() => {
    const groups = [];
    for(let i = 0; i < this.trendingGifs().length; i+=3){
      groups.push(this.trendingGifs().slice(i, i+3))
    }
    console.log(groups)
    return groups
  })

  searchHistory = signal<Record<string, Gif[]>>(loadLocalStorage())
  searchHistoryKeys = computed(() => {
    return Object.keys(this.searchHistory())
  })

  constructor(){
    this.loadTrendingGifs();
    this.searchHistory.set(loadLocalStorage());
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
      params: {
        api_key: `${environment.giphyApiKeys}`,
        limit: 20

      }
      }).subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log(gifs);
      } )
  }


  saveHistoryInLocalStorege = effect(() => {
    localStorage.setItem('historyGifs', JSON.stringify(this.searchHistory()))
  })


  searchGifs(query: string){
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params:{
        api_key: environment.giphyApiKeys,
        q: query
      }
    })
    .pipe(
      map(({data}) => data ),
      map((items) => GifMapper.mapGiphyItemsToGifArray(items) ),

      //TODO HISTORIOAL


      tap(items => {
        this.searchHistory.update((history) => ({
          ...history, [query.toLowerCase()]: items
        }))
      })
    )
    // .subscribe((resp) => {
    //   const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data)
    //   console.log(resp)
    // })
  }

  getHistoryGifs( query: string ): Gif[]{
    return this.searchHistory()[query] ?? []
  }
}
