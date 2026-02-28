//  Response Time SLA Analyzer
// As a performance tester,
//  you collect API response times in milliseconds.
//   Write a JavaScript program using a while loop that analyzes an array
//   of response times and prints a performance report with min, max, average,
//    and how many responses breached the SLA threshold (> 500ms).
//    Use comparison operators for min/max tracking.

let responseTimes = [120, 350, 510, 200, 650, 80, 430, 900, 310, 560];

let i = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let slaBreaches = 0;

while (i < responseTimes.length) {
    let current = responseTimes[i];

    sum = sum + current;

    if (current < min) {
        min = current;
    }

    if (current > max) {
        max = current;
    }

    if (current > 500) {
        slaBreaches++;
    }

    i++;
}

let average = sum / responseTimes.length;

console.log("===== Performance Report =====");
console.log(`Total Requests     : ${responseTimes.length}`);
console.log(`Min Response Time  : ${min} ms`);
console.log(`Max Response Time  : ${max} ms`);
console.log(`Avg Response Time  : ${average} ms`);
console.log(`SLA Breaches (>500ms): ${slaBreaches}`);
console.log("==============================");
