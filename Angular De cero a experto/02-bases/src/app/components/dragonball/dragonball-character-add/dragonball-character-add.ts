import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character-interface';

@Component({
  selector: 'component-dragonball-character-add',
  templateUrl: './dragonball-character-add.html',
})
export class DragonBallCharacterAdd {
  name = signal<string>('Gohan');
  power = signal<number>(0);

  novoPersonagem = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      throw new Error('Erro em agregar personagem');
    }
    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    // this.characters.update((list) => [...list, newCharacter]);
    this.novoPersonagem.emit(newCharacter);
    console.log(newCharacter)
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
