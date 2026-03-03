import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list";
import type { Character } from '../../interfaces/character-interface';
import { DragonBallCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.html',
  imports: [CharacterListComponent, DragonBallCharacterAdd],
})
export class DragonballSuperPage {
  public dragonballService = inject(DragonballService)

}
