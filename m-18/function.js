
function even(element) {
    
    if (element % 2 === 0) {
        console.log(element, 'is a even number');
    }else{
        console.log(element , 'is not a even number ');
    }
    
}

function even_all(num) {

    for (let i = 0; i < num.length; i++) {

        const findNum = num[i];
        even(findNum);
        
    }
    
}

num = [ 10 , 20 , 8 , 5 , 33 , 23 ];
even_all(num);

// 88888888888888888888888888888888888888888888

friendAge = [16 , 25 , 28 , 19 , 22 , 21];
even_all(friendAge);

