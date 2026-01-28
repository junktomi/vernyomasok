import fs from "fs";
import path from "path";

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

const lista = [];
const darab = 20;

for (let i = 0; i < darab; i++) {
  lista.push({
    nev: randomName(),
    vernyomas: randomVernyomas(),
  });
}

const jsonText = JSON.stringify(lista, null, 2);

const fajlUtvonal = path.join("public", "test.json");
fs.writeFileSync(fajlUtvonal, jsonText, "utf-8");

console.log("✅ test.json sikeresen létrehozva");
