

function displayTotal(phone , caseing ){

    const phonePrice = 500;
    const casingPrice = 50;
    const phoneCost = phone * phonePrice;
    const caseCost = caseing * casingPrice ;
    const total = phoneCost + caseCost;
    const totalElemant = document.getElementById('total-price');
    console.log(totalElemant);
    totalElemant.innerText = total;

}