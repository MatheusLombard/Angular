export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Matheus",
};

const passenger2: Passenger = {
  name: "Jessica",
  children: ["Leia", "Luke"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
//   const howManyChildren = passenger.children!.length;

  const { name } = passenger;

  console.log(name, howManyChildren);
  return howManyChildren;
};

printChildren(passenger1);
printChildren(passenger2);
