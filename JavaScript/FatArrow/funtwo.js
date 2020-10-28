function greet(msg) {
  console.log(this)
  console.log(msg);
}
greet("Good Morning");

//  var greet = (msg)=>{
//     console.log(msg)
// }
// greet('Good Afternoon')
