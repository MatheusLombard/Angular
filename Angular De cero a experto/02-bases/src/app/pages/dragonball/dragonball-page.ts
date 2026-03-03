import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';
// import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  // imports: [NgClass],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal<string>('Gohan');
  power = signal<number>(0);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      throw new Error('Erro em agregar personagem');
    }
    // this.characters().push({id: this.characters().length + 1, name: this.name(), power: this.power()})
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update(list => [...list, newCharacter]);
    this.resetFields()
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Yamcha', power: 500 },
    // { id: 3, name: 'Vegeta', power: 8000 },
    // { id: 4, name: 'Piccolo', power: 3999 },
    // { id: 5, name: 'Yamcha', power: 500 },
  ]);

  // constructor(){
  //   console.log('Teste' + this.characters()[0].power)

  // }
  // powerClasses = computed(() =>{
  //   return{
  //     'text-danger': this.characters()[2].power > 9000,
  //   }
  // })
}
