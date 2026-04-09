import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.html',
})
export class SearchInput {
  label = input.required<string>()
  inputValue = output<string>()
}
