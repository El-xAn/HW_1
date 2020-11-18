function check1(a, b) {
if (a % 2 == 0) {
    console.log(a * b);
}
else{
    console.log(a + b);
}
}

check1(5, 3);


function check2(a, b, c) {
if (a < 0 ) {
    a = 0;
}
if (b < 0 ) {
    b = 0;
}
if (c < 0 ) {
    c = 0;
}

console.log(a + b + c);
}

check2(-1, 2, 3);


function check4(a, b, c) {
if ((a * b * c) > (a + b + c)) {
    console.log(a * b * c + 3);
} else if ((a * b * c) < (a + b + c)) {
    console.log(a + b + c + 3);
} else {
    console.log('virajenii ravni.');
}
}

check4(1, 1, 1 );


