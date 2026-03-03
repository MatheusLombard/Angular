import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character-interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  title = input.required<string>();
  characters = input.required<Character[]>();
}
