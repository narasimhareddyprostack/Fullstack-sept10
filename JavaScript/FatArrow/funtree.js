function greet1(msg) {
    console.log(this)
    console.log(msg);
  }
  greet1("Good Morning");

var greet = (msg) => {
  console.log(this);
  console.log(msg);
};

greet("Good Night");
