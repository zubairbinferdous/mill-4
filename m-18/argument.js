

function addNumber( num1 , num2) {

    var sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }

    return sum;
}

var result = addNumber( 22 , 16 , 55 , 4 , 15);
console.log(result);