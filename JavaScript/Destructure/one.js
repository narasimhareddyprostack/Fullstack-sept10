var mobile = ['Iphone12', ' Nokia 6.2', 'S9', 'BB Passport', 'Honor -20']

var [a,b,...c] = mobile;
var [,,, ...x] = mobile;
console.log(a);

console.log(b);
console.log(c);
console.log('****************')
console.log(x)

