//Sorting find bug

// let responseTimes = [320, 85, 1200, 450, 99];
// let sorted = responseTimes.sort();
// console.log("Fastest:", sorted[0]);


let responseTimes = [320, 85, 1200, 450, 99];

//Updated & corrected code below:
let sorted = responseTimes.sort((a, b) => (a - b));
console.log("Fastest:", sorted[0]);