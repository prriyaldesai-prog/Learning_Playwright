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

let a = 10;
console.log(a);

function test() {
    let a = 20;
    if (true) {
        console.log(a);
    }
    let a = 30;
    console.log(a)
}

test();
