let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a / a);
}
let bookCount = 10;
for (let i = 0; i < 10; i++) {   
    console.log(i);
}
for (let i = 0; i <= 10; i++) {
    console.log(i); 
}
for (let i = 0; i <= 20; i++) {
    if(i % 2 == 0){
      console.log(i);
    }
    
}
for (let i = 1; i <= 20; i++) {
    console.log(i);
    
}
for (let i = 1; i <= 15; i++) {
    console.log(i);
    
}

let greeter = name => {
  console.log('Hello ' + name);
}
greeter = 'Szandi';
console.log('Hello ' + greeter);

let printValues = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
printValues([0, 1, 3, 6, 7, 9]);

let myNumbers = [0, 1, 3, 6, 7, 9];
myNumbers.forEach((i) => {
  console.log(i);
})