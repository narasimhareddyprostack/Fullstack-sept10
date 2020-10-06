console.log("JS Array Examples");

//How to create Array
var size = [38, 40, 42];

//How to access complete Array

console.log(size);

//How to update array value
size[2] = 44;

console.log(size);

delete size[2];
console.log(size);

//How to access array elements using for loop.s

var shirt_Size = ["S", "M", "L", "XL", "XXL"];
console.log(shirt_Size.length);
/*
for (i = 0; i < shirt_Size.length; i++) {
  console.log(shirt_Size[i], i);
}
*/
for (let x of shirt_Size) {
  console.log(x);
}

