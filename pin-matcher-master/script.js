// creat the number of 4 code !!!
function getPin() {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    console.log("shorter pin", pin);
    return getPin();
  }
}

// display the number of pin
function generatePin() {
  const pinInput = document.getElementById("pin");
  pinInput.value = getPin();
}

//handle calculator button

const bottonControler = document.getElementById("numberControler");
bottonControler.addEventListener("click", function (event) {
  // work your self why this parameter

  const digit = event.target.innerText;
  if (isNaN(digit)) {
    if (digit === "C") {
      const typed = document.getElementById("showNum");
      typed.value = "";
    }
  } else {
    const typed = document.getElementById("showNum");
    typed.value = typed.value + digit;
  }
});

// match pin number

function matchPin() {
  const pin = document.getElementById("pin").value;
  const typedPin = document.getElementById("showNum").value;

  if (pin === typedPin) {
    displayResult("block", "none");
  } else {
    displayResult("none", "block");
  }
}

function displayResult(corretStatus, incorrectStatus) {
  const corret = document.getElementById("okDone");
  corret.style.display = corretStatus;
  const incorret = document.getElementById("notDone");
  incorret.style.display = incorrectStatus;
}
