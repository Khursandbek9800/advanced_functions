let arr = [1, 2, 3];
let arrCopy = [...arr]; 


alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true


alert(arr === arrCopy); // false (not th same referene)


arr.push(4);
arr.unshift(0)

alert(arr); 
alert(arrCopy); //they not equal

let merged = [...arr, ...arrCopy];

alert(merged)