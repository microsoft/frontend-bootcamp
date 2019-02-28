// Destructuring
var [a, b, ...rest] = [1, 2, 3, 4];
console.log(a, b, rest); // 1 2 [3,4]

// Array assignment
var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]

// Object assignment
const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };

// Concat two objects
const obj1 = { x: 1 };
const obj2 = { y: 2 };

const obj3 = { ...obj1, ...obj2 };

// Destructuring object
const { x } = obj3;

// adding an export turns this into a "module"
export default {};
