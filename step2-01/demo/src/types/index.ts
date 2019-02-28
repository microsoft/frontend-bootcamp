// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = 'blue';
let sky: string = `the sky is ${color}`;

// Function Types
type FibFn = (n: number) => number;

// Object Types
type Obj = {
  [key: string]: string;
};

// Object with Specified Keys
type Specific1 = {
  foo: string;
  bar: number;
  common: string;
};

type Specific2 = {
  alice: string;
  bob: number;
  common: number;
};

// composition
type TypeOfObj = {
  foo: string;
  bar: number;
  obj1: Specific1;
  obj2: Specific2;
};

// Get types by property
type Obj1Type = TypeOfObj['obj1'];

// union, intersection
type Union = Specific1 | Specific2;
type Intersection = Specific1 & Specific2;

// casting
let choose1 = <Specific1>{ common: '5' };

// string literal union
type CatStatus = 'alive' | 'dead' | 'both';

// Classes
class Animal { }

// Illustration purposes only
// In real apps, avoid inheritance if possible
// noted exception: React.Component with react@<16.8.0
class Cat extends Animal { }
class Dog extends Animal { }

// Any Type - avoid if possible
let mystery: any = "I don't like the person who will be maintaining this code";
mystery = 2;
mystery = () => 3;

// adding an export turns this into a "module"
export default {};
