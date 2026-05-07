import { Component, input } from '@angular/core';
import { CountryInterface } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
})
export class CountryList {
  countries = input.required<CountryInterface[]>()
 }
