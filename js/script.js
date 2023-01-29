let arr = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]];
let one = arr[0][0].a.price;
let two = arr[1][0].a.price;
let tre = arr[2][0].a.price;
let total = one + two + tre;
console.log(total);