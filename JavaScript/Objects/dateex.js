var newDate = new Date();
console.log(newDate.toLocaleString())
newDate.setDate(12);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
var x = newDate.getDay();
console.log(newDate.getHours());
function getDayName(x) {
  switch (x) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tue";
      break;
    case 3:
      return "Wed";
      break;
    default:
      return "All Days";
  }
}

var result = getDayName(x);
console.log("Day Name:", result);
