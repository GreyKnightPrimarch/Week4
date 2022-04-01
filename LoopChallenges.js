function isMultiples(num1, num2){
    return (num1%num2==0);
}

// Print odds 1-20

console.log("print Odds 1-20");
for (let index = 1; index < 21; index++) {
    var bool = isMultiples(index, 2);
    if(!bool) console.log(index)
}


// Decreasing Multiples of 3
console.log("\nDecreasing Multiples of 3");
for(let i=100; i>=0; i--){
    var bool = isMultiples(i, 3);
    if(bool) console.log(i)
}

// Print the sequence
console.log("\nPrint the sequence");
var num =4
while (num >= -3.5) {
    console.log(num)
    num -=1.5;
}

// Sigma
console.log("\nSigma");
num = 0
for(let i=0; i<=100; i++){
    num += i;
}
console.log(num)

// Factorial
console.log("\nFactorial");
num = 1
for(let i=1; i<=12; i++){
    num *= i;
}
console.log(num)