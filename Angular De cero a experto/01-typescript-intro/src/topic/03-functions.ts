function addNumbers(a: number, b: number) {
  return a + b;
}

// const result:number = addNumbers(1, 2)

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

// const result2: string = addNumbersArrow(1, 1)

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2,
) {
  return firstNumber * base;
}

// const multiplyResult:number = multiply(2, 5)

// console.log({result: result})
// console.log({result2: result2})
// console.log({multiply: multiplyResult})

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
};

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Pontos de vida: ${this.hp}`);
  },
};

healCharacter( strider, 20);
healCharacter( strider, 50);

strider.showHp();

export {};
