// Get the input elements
const initialPrice = document.getElementById("initialPrice");
const percentage = document.getElementById("percentage");
const skaiciuotiBtn=document.querySelector("#skaiciuoti");

// Add event listeners
initialPrice.addEventListener("input", validateInitialPrice);
percentage.addEventListener("input", validatePercentage);

function validateInitialPrice() {
  if (!initialPrice.value || initialPrice.value <= 0) {
    initialPrice.style.backgroundColor = "red";
  } else {
    initialPrice.style.backgroundColor = "green";
  }
}

function validatePercentage() {
  if (!percentage.value || percentage.value < 0 || percentage.value > 100) {
    percentage.style.backgroundColor = "red";
  } else {
    percentage.style.backgroundColor = "green";
  }
}

function calculatePrice() {
  const priceChange = document.getElementById("priceChange").value;

  // Validation
  if (!initialPrice.value || initialPrice.value <= 0 || !percentage.value || percentage.value < 0 || percentage.value > 100) {
    alert("Įveskite skaičius.");
    return;
  }

  var finalPrice;

  if (priceChange == "increase") {
    finalPrice = initialPrice.value * (1 + percentage.value / 100);
  } else {
    finalPrice = initialPrice.value * (1 - percentage.value / 100);
  }

  document.getElementById("result").innerHTML = "Galutinė kaina: " + finalPrice;
}
