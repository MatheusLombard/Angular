import { Component, computed, signal, WritableSignal } from "@angular/core";
import {UpperCasePipe} from '@angular/common'

@Component({
  templateUrl: './hero.page.component.html',
  imports: [UpperCasePipe]
})
export class HeroPageComponent{

  public name = signal('IronMan')
  public age = signal(45)
  public heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`
  })

  capitalizedName = computed(() => this.name().toUpperCase())

  getHeroDescription(): string{
    return `${this.name()
    } - ${this.age()}`
  }

  changeHero(){
    this.name.set('Spiderman')
    this.age.set(22)
  }

  resetForm(){
    this.name.set('IronMan')
    this.age.set(45)
  }

  changeAge(){
    this.age.set(60)
  }

}
