// API responce validation

// You receive an array of API response codes. Write code to:
// Check if ALL responses are successful (200–299)
// Find the FIRST non-success code
// Return all unique error codes

let responses = [200, 201, 404, 500, 404, 200, 503];

if (responses.every(r => r >= 200 && r <= 299)) {
    console.log("All responses are successful");
}
else {
    console.log("Not all responses are successful");
}

console.log(responses.find(r => r > 201 && r <= 503));


let uniqueErrorCodes = [...new Set(responses)];
console.log(uniqueErrorCodes);


//find
//find the first error code from the array list.
let responses1 = [200, 201, 404, 500, 404, 200, 503];

let res = responses1.find(f => f > 201); //returns the first matching value
console.log(res);

console.log(responses1.findIndex(f => f > 201));
console.log(responses1.findLast(f=>f>201));
console.log(responses1.findLastIndex(f=>f>401));