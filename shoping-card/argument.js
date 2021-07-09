
function getFullName(fastname , lastname) {

    let fullName = '';
    for (let i = 0;  i < arguments.length;  i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' +  namePart;
    }  
    return fullName;

}

const FullName = getFullName('onam' , 'mali' , 'bin' , 'hanif', 'ferdous' , 'onam' , 'balo manus' );
console.log(FullName);