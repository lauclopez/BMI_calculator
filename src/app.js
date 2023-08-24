
function calculateBmi() {
  let weight = document.getElementById("weight").value;
  let heightCm = document.getElementById("height").value;
  let heightMeters = heightCm / 100;
  let bmi = weight / (heightMeters * heightMeters);
  bmi = Math.round(bmi);
  let result = document.getElementById("result");
  let info = `<div class="information"> To get more information about your results <a href="second.html">Click here</a> </div>`;

  if (bmi < 18.5) {
    result.innerHTML = `<BMI : ${bmi}  </br> Underweight ${info}`;
  } else if (bmi <= 24.9) {
    result.innerHTML = `BMI : ${bmi} </br> Normal weight ${info}`;
  } else if (bmi <= 29.9) {
    result.innerHTML = `BMI : ${bmi} </br> Overweight ${info}`;
  } else {
    result.innerHTML = `BMI : ${bmi}</br> Obesity ${info}`;
  }
}

let calculateButton = document.querySelector("#calculate");
calculateButton.addEventListener("click", calculateBmi);
