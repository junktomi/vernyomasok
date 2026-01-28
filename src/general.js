const fs = require("fs");
const path = require("path");

const vezetekNevek = [
  "Kovács", "Nagy", "Szabó", "Horváth", "Kiss", "Tóth", "Varga", "Molnár", "Németh", "Farkas",
];

const keresztNevek = [
  "István", "János", "László", "Zoltán", "Gábor", "Ferenc", "Tamás", "Attila", "Péter", "Mária",
];

function randomName() {
  const v = vezetekNevek[Math.floor(Math.random() * vezetekNevek.length)];
  const k = keresztNevek[Math.floor(Math.random() * keresztNevek.length)];
  return `${v} ${k}`;
}

function randomVernyomas() {
  const systole = Math.floor(Math.random() * (180 - 90 + 1)) + 90;   
  const diastole = Math.floor(Math.random() * (110 - 60 + 1)) + 60;  
  return `${systole}/${diastole}`;
}