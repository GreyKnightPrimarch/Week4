// Always Hungry
console.log("Always Hungry")

function alwaysHungry(arr) {
    var bool = false;
    for (let index = 0; index < arr.length; index++) {
        var ele = arr[index];
        if (ele == "food" || ele == "Food") {
            bool = true;
            console.log("yummy")
        }
    }
    if (!bool) {
        console.log("I'm hungry")
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


console.log("\nHigh Pass Filter")

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > cutoff) {
            filteredArr.push(arr[index])
        }
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


console.log("\nBetter than average")

function betterThanAverage(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    var avg = sum / arr.length;

    var count = 0
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > avg) {
            count++
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



console.log("\nArray Reverse");

function reverse(arr) {
    var rev =[]
    for (let index = arr.length-1; index >=0; index--) {
        rev.push(arr[index]);
        // your code here
    }
    return rev;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



console.log("\nFibonacci Array");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let index = 0; index < n; index++) {
        var temp = fibArr[index]+fibArr[index+1];
        fibArr.push(temp);
        // your code here
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
