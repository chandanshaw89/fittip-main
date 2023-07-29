// import axios from 'axios';

// // const usersUrl = 'http://localhost:3003/users';
// const usersUrl = '';

// export const getUsers = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }

// export const addUser = async (user) => {
//     return await axios.post(`${usersUrl}/add`, user);
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editUser = async (id, user) => {
//     return await axios.put(`${usersUrl}/${id}`, user)
// }

// import axios from "axios";
//document.addEventListener("DOMContentLoaded", );

let fitnessTips = [];
fitnessTips.push("Take a 30-minute walk every day.");
fitnessTips.push("Drink at least 8 glasses of water daily.");
fitnessTips.push("Include strength training exercises in your workout routine.");
// function getRandomTip() {
//     const randomIndex = Math.floor(Math.random() * fitnessTips.length);
//     return fitnessTips[randomIndex];
// }
export const displayFitnessTips = async () => {
  const fitnes_section = document.getElementById("fitness-tips");
  console.log("working...");
//   const url = "";
//   const {data} = await axios.get(url
//     // headers: {
//     //   "Content-Type": "application/json",
//     // },
//   );
//   const tips=data.tips;
  const randomIndex = Math.floor(Math.random() * fitnessTips.length);
  const tipElement = document.createElement("p");
  tipElement.textContent = fitnessTips[randomIndex];
  fitnes_section.innerHTML='';
  fitnes_section.appendChild(tipElement);
}
