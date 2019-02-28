// Interface for an object or class
interface Car {
  make: string;
  model: string;
}

class MyCar implements Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}
const myCar1: Car = new MyCar('Honda', 'Accord');

const myCar2: Car = {
  make: 'Honda',
  model: 'Accord'
};

// Interface for a function
interface InterestingFn {
  (someArgs: string): number;
}
const interesting: InterestingFn = (someArgs: string): number => {
  return Number(someArgs);
};

// adding an export to turn this into a "module"
export default {};
