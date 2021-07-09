function displayTotal(phone, caseing) {
  const phonePrice = 500;
  const casingPrice = 50;
  const phoneCost = phone * phonePrice;
  const caseCost = caseing * casingPrice;
  const total = phoneCost + caseCost;
  const totalElemant = document.getElementById("total-price");
  console.log(totalElemant);
  totalElemant.innerText = total;
}



function welcomeGest(name , greet){
  greet(name);
}

// function greetMorning(name){
//   console.log('good morning' , name)
// }

// function greetEvening(name){
//   console.log('good night' , name)
// }

// const actorName = 'Tom Hanks';

// welcomeGest(actorName , greetMorning );

welcomeGest('zubair bin ferdous', function(name) { 
  console.log('spacial thanks' , name) })

