import { Component, signal } from '@angular/core'

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button{
      margin: 0 10px 0 10px;
      padding: 10px;
      border-radius: 10px;
      border: .5px solid #3e3e3e;

    }
  `,
})
export class CounterPageComponent{
  counter = 10
  counterSignals = signal(10);


  // constructor(){
  //   setInterval(() =>{
  //     this.counter += 1
  //     this.counterSignals.update(v => v + 1)
  //     console.log(this.counter)
  //   }, 1000)
  // }

  increaseBy(value : number){
    this.counter += value
    this.counterSignals.update(current => current + value)
  }

  resetCounter() {
    this.counter = 0
    this.counterSignals.set(0)
  }

}
