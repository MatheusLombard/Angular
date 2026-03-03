import { Component, computed, effect, signal } from '@angular/core';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Welcome to my first project';

  protected isDisabled = false;

  protected onCLick()  {
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  };

  protected count = signal(0);
  protected secondCount = signal(10)

  protected doubleCount = computed(() => {
    return (this.count() * 2) + this.secondCount()
  });

  protected readonly countLog = effect(() => {
    console.log('Count changed:', this.count())
  })
  protected increaseCounter(){
    this.count.update(value => value + 1);
  }
  protected decreaseCounter(){
    this.count.update(value => value - 1 );
  }
  protected resetCounter() {
    this.count.set(0);
  }
}
