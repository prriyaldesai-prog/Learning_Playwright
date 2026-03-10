let b = 10;
console.log(b);

function test() {
    let b = 20;
    if (true) {
        console.log(b);
    }
    let b = 30;
    console.log(b);
}
test();

