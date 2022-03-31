function Of3(num) {
    if (num % 3 == 0) {
        return true
    }
    return false;
}

function Of5(num) {
    if (num % 5 == 0) {
        return true
    }
    return false;
}

function FizzBuzzPrint(num) {
    var B3 = Of3(num);
    var B5 = Of5(num);
    var string = '';

    if (B3) {
        string += "Fizz";
    }

    if (B5) {
        string += "Buzz";
    }

    if (!B3 && !B5) {
        string = num;
    }


    return string;
}

for (let index = 1; index <= 15; index++) {
    var s = FizzBuzzPrint(index);
    console.log(s);
}