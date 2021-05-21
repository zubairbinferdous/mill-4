
//login area 

const loginBtn =  document.getElementById("login");
loginBtn.addEventListener('click' , function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('amount');
    transactionArea.style.display = 'block';

})

// amount area 

const depositBtn =  document.getElementById('addAmount');
depositBtn.addEventListener('click' , function(){

    const despositAmount = document.getElementById('depositValue').value;
    const depositNumber = parseFloat(despositAmount);


    const currentDeposit = document.getElementById('cureentvalue').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('cureentvalue').innerText = totalDeposit;



    update('cureentBalance' , depositNumber)
    // const currentBalance = document.getElementById('cureentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('cureentBalance').innerText = totalBalance


    document.getElementById('depositValue').value = ''; 

})


// withdrow-amount

const withdrow = document.getElementById('addawithdrow');
withdrow.addEventListener('click' , function () {

    const withdrowNumber = getNumber('withdrow');
    update('cureentWithdraw' , withdrowNumber)
    update('cureentBalance' , -1 * withdrowNumber)

    document.getElementById('withdrow').value = '';
    

})


function getNumber(id) {

    const withdrowAmount = document.getElementById(id).value
    const withdrowNumber = parseFloat(withdrowAmount);
    return withdrowNumber;
    
}


function update( id , depositNumber) {
    const currentBalance = document.getElementById( id ).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById( id ).innerText = totalBalance;
}