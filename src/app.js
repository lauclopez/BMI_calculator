
function calculateBmi() {
  let weight = document.getElementById("weight").value;
  let heightCm = document.getElementById("height").value;
  let heightMeters = heightCm / 100;
  let bmi = weight / (heightMeters * heightMeters);
  let result = document.getElementById("result");

  if (bmi < 18.5) {
    result.innerHTML = "Underweight";
  } else if (bmi <= 24.9) {
    result.innerHTML = "Normal weight";
  } else if (bmi <= 29.9) {
    result.innerHTML = "Overweight";
  } else {
    result.innerHTML = "Obesity";
  }
}

let calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", calculateBmi);
