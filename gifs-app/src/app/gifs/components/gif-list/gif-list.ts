import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifListItem } from "./gif-list-item/gif-list-item";
import type { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gif-list',
  imports: [GifListItem],
  templateUrl: './gif-list.html',
})
export class GifList {
  imagesUrl = input.required<Gif[]>()
}
