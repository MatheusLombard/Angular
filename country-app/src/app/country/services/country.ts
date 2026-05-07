import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.intarface';
import { map, Observable, catchError, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { CountryInterface } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1'

@Injectable({
  providedIn: 'root'
})
export class Country {
  private http = inject(HttpClient);

  searchByCapital( query: string): Observable<CountryInterface[]>{
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map( (resp) => CountryMapper.mapRESTCapitalArrayToCapitalArray(resp) ),
      catchError(error => {
        console.log('Error fetching', error)

        return throwError(() => new Error(`No se pude obtener paises con esta capital: ${query}`))
      })
    )
  }

}
