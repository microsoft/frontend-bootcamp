interface Car {
  make: string;
  model: string;
}

class MyCar implements Car {
  make: 'Honda';
  model: 'Accord';
}

const myCar: Car = {
  make: 'Honda',
  model: 'Accord'
};

// Interface as Functions
interface InterestingFn {
  (someArgs: string): number;
}

// adding an export to turn this into a "module"
export default {};
