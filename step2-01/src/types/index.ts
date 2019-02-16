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
type typeofObj = {
  foo: string;
  bar: number;
  obj: Specific1;
};

// union, intersection
type Union = Specific1 | Specific2;
type Intersection = Specific1 & Specific2;

// casting
let choose1 = <Specific1>{ common: '5' };

// string literal union
type CatStatus = 'alive' | 'dead' | 'both';

// Classes
class Animal {}

// Illustration purposes only
// In real apps, avoid inheritance if possible
// noted exception: React.Component with react@<16.8.0
class Cat extends Animal {}
class Dog extends Animal {}
