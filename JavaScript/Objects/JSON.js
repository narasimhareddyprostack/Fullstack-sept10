//Creating JSON/JS Object
var car_Details = {
  car_Name: "Xcent",
  car_Color: "red",
};
//Accessing
console.log(car_Details);

//Update the Object property Value
car_Details.car_Name = "Polo";
console.log(car_Details);

//remove the object property
delete car_Details.car_Color;

console.log(car_Details);
//Object to String
var new_Car = JSON.stringify(car_Details);
console.log(new_Car);
//String to Object
var today_Car = JSON.parse(new_Car);
console.log(today_Car);
