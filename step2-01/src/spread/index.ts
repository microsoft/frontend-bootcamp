// Destructuring
var [x, y, ...rest] = [1, 2, 3, 4];
console.log(x, y, rest); // 1,2,[3,4]

// Array assignment
var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // [1,2,3,4]

// Object assignment
const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };
