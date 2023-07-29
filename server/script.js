// import axios from "axios";
document.addEventListener("DOMContentLoaded", displayFitnessTips);

async function displayFitnessTips() {
  const fitnes_section = document.getElementById("fitness-tips");
  const url = "http://localhost:5000/api/tips/get-tips";
  const {data} = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const tips=data.tips;
  const randomIndex = Math.floor(Math.random() * tips.length);
  const tipElement = document.createElement("p");
  tipElement.textContent = tips[randomIndex].description;
  fitnes_section.appendChild(tipElement);
}
