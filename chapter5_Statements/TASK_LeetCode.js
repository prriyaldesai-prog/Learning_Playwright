let length1 = 10;
let length2 = 20;
let length3 = 10;
if (length1 === length2 && length1 === length3) {
    console.log("Equilateral Triangle");
}
else if (length1 === length2 || length1 === length3 || length2 === length3) {
    console.log("Isosceles Triangle");
}
else {
    console.log("Scalane Triangle");
}