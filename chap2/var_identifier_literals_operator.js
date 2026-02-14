var a = 10;
console.log(a);

function test() {
    var a = 20;
    if (true) {
        console.log(a);
    }
    var a = 30;
    console.log(a)
}

test();
