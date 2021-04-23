
function explain_callback(name , age , task) {

    console.log('hello' , name ,);
    console.log('your-age' , age ,);
    task();

}


function washHand() {
    console.log('wash your hand');
}

function takeShowed() {
    console.log('take a shower');
}

function takeSleep() {
    console.log('take sleep');
}

explain_callback('zubair' , 23 , washHand );
explain_callback('labiba' , 18 , takeShowed);
explain_callback('halima' , 19 , takeSleep);
