// minus og plus variabler
const minusButtons_gyudon = document.getElementsByClassName("minus_gyudon");
const plusButtons_gyudon = document.getElementsByClassName("plus_gyudon");
const minusButtons_epi = document.getElementsByClassName("minus_epi");
const plusButtons_epi = document.getElementsByClassName("plus_epi");
const minusButtons_gyoza = document.getElementsByClassName("minus_gyoza");
const plusButtons_gyoza = document.getElementsByClassName("plus_gyoza");
const minusButtons_katsu = document.getElementsByClassName("minus_katsu");
const plusButtons_katsu = document.getElementsByClassName("plus_katsu");
const minusButtons_miso = document.getElementsByClassName("minus_miso");
const plusButtons_miso = document.getElementsByClassName("plus_miso");
const minusButtons_poke = document.getElementsByClassName("minus_poke");
const plusButtons_poke = document.getElementsByClassName("plus_poke");
const minusButtons_okon = document.getElementsByClassName("minus_okon");
const plusButtons_okon = document.getElementsByClassName("plus_okon");
const minusButtons_tonkatsu = document.getElementsByClassName("minus_tonkatsu");
const plusButtons_tonkatsu = document.getElementsByClassName("plus_tonkatsu");
const minusButtons_tsukune = document.getElementsByClassName("minus_tsukune");
const plusButtons_tsukune = document.getElementsByClassName("plus_tsukune");
// antal variabler

const antal_gyudon = document.getElementsByClassName("antal_gyudon")[0];
const antal_epi = document.getElementsByClassName("antal_epi")[0];
const antal_gyoza = document.getElementsByClassName("antal_gyoza")[0];
const antal_katsu = document.getElementsByClassName("antal_katsu")[0];
const antal_miso = document.getElementsByClassName("antal_miso")[0];
const antal_poke = document.getElementsByClassName("antal_poke")[0];
const antal_okon = document.getElementsByClassName("antal_okon")[0];
const antal_tonkatsu = document.getElementsByClassName("antal_tonkatsu")[0];
const antal_tsukune = document.getElementsByClassName("antal_tsukune")[0];

// Da der kun er et antal-element brug [0] for at få det første element

let tal = 0;

// gyudon knap

// Opdaterer det aktuelle antal, der vises:
function opdaterAntal_gyudon() {
  antal_gyudon.innerHTML = tal;
}

// Event listener - minus-knap:
for (let i = 0; i < minusButtons_gyudon.length; i++) {
  minusButtons_gyudon[i].addEventListener("click", traekfra_gyudon);
}

// Event handler - trækker fra, men ikke mindre end 0:
function traekfra_gyudon() {
  if (tal > 0) {
    tal--;
    opdaterAntal_gyudon();
  }
}
// Event listener - plus-knapperne:

for (let i = 0; i < plusButtons_gyudon.length; i++) {
  plusButtons_gyudon[i].addEventListener("click", laegtil_gyudon);
}

// Event handler - lægger til, men ikke mere end 6:
function laegtil_gyudon() {
  if (tal < 6) {
    tal++;
    opdaterAntal_gyudon();
  }
}

// epi knap
function opdaterAntal_epi() {
  antal_epi.innerHTML = tal;
}

for (let i = 0; i < minusButtons_epi.length; i++) {
  minusButtons_epi[i].addEventListener("click", traekfra_epi);
}

function traekfra_epi() {
  if (tal > 0) {
    tal--;
    opdaterAntal_epi();
  }
}

for (let i = 0; i < plusButtons_epi.length; i++) {
  plusButtons_epi[i].addEventListener("click", laegtil_epi);
}

function laegtil_epi() {
  if (tal < 6) {
    tal++;
    opdaterAntal_epi();
  }
}

// gyoza knap
function opdaterAntal_gyoza() {
  antal_gyoza.innerHTML = tal;
}

for (let i = 0; i < minusButtons_gyoza.length; i++) {
  minusButtons_gyoza[i].addEventListener("click", traekfra_gyoza);
}

function traekfra_gyoza() {
  if (tal > 0) {
    tal--;
    opdaterAntal_gyoza();
  }
}

for (let i = 0; i < plusButtons_gyoza.length; i++) {
  plusButtons_gyoza[i].addEventListener("click", laegtil_gyoza);
}

function laegtil_gyoza() {
  if (tal < 6) {
    tal++;
    opdaterAntal_gyoza();
  }
}

// katsu knap
function opdaterAntal_katsu() {
  antal_katsu.innerHTML = tal;
}

for (let i = 0; i < minusButtons_katsu.length; i++) {
  minusButtons_katsu[i].addEventListener("click", traekfra_katsu);
}

function traekfra_katsu() {
  if (tal > 0) {
    tal--;
    opdaterAntal_katsu();
  }
}

for (let i = 0; i < plusButtons_katsu.length; i++) {
  plusButtons_katsu[i].addEventListener("click", laegtil_katsu);
}

function laegtil_katsu() {
  if (tal < 6) {
    tal++;
    opdaterAntal_katsu();
  }
}

// miso knap
function opdaterAntal_miso() {
  antal_miso.innerHTML = tal;
}

for (let i = 0; i < minusButtons_miso.length; i++) {
  minusButtons_miso[i].addEventListener("click", traekfra_miso);
}

function traekfra_miso() {
  if (tal > 0) {
    tal--;
    opdaterAntal_miso();
  }
}

for (let i = 0; i < plusButtons_miso.length; i++) {
  plusButtons_miso[i].addEventListener("click", laegtil_miso);
}

function laegtil_miso() {
  if (tal < 6) {
    tal++;
    opdaterAntal_miso();
  }
}

// poke knap
function opdaterAntal_poke() {
  antal_poke.innerHTML = tal;
}

for (let i = 0; i < minusButtons_poke.length; i++) {
  minusButtons_poke[i].addEventListener("click", traekfra_poke);
}

function traekfra_poke() {
  if (tal > 0) {
    tal--;
    opdaterAntal_poke();
  }
}

for (let i = 0; i < plusButtons_poke.length; i++) {
  plusButtons_poke[i].addEventListener("click", laegtil_poke);
}

function laegtil_poke() {
  if (tal < 6) {
    tal++;
    opdaterAntal_poke();
  }
}

// okon knap
function opdaterAntal_okon() {
  antal_okon.innerHTML = tal;
}

for (let i = 0; i < minusButtons_okon.length; i++) {
  minusButtons_okon[i].addEventListener("click", traekfra_okon);
}

function traekfra_okon() {
  if (tal > 0) {
    tal--;
    opdaterAntal_okon();
  }
}

for (let i = 0; i < plusButtons_okon.length; i++) {
  plusButtons_okon[i].addEventListener("click", laegtil_okon);
}

function laegtil_okon() {
  if (tal < 6) {
    tal++;
    opdaterAntal_okon();
  }
}

// tonkatsu knap
function opdaterAntal_tonkatsu() {
  antal_tonkatsu.innerHTML = tal;
}

for (let i = 0; i < minusButtons_tonkatsu.length; i++) {
  minusButtons_tonkatsu[i].addEventListener("click", traekfra_tonkatsu);
}

function traekfra_tonkatsu() {
  if (tal > 0) {
    tal--;
    opdaterAntal_tonkatsu();
  }
}

for (let i = 0; i < plusButtons_tonkatsu.length; i++) {
  plusButtons_tonkatsu[i].addEventListener("click", laegtil_tonkatsu);
}

function laegtil_tonkatsu() {
  if (tal < 6) {
    tal++;
    opdaterAntal_tonkatsu();
  }
}

// tsukune knap
function opdaterAntal_tsukune() {
  antal_tsukune.innerHTML = tal;
}

for (let i = 0; i < minusButtons_tsukune.length; i++) {
  minusButtons_tsukune[i].addEventListener("click", traekfra_tsukune);
}

function traekfra_tsukune() {
  if (tal > 0) {
    tal--;
    opdaterAntal_tsukune();
  }
}

for (let i = 0; i < plusButtons_tsukune.length; i++) {
  plusButtons_tsukune[i].addEventListener("click", laegtil_tsukune);
}

function laegtil_tsukune() {
  if (tal < 6) {
    tal++;
    opdaterAntal_tsukune();
  }
}



// TILFØJ VALGTE RETTER TIL KURV:
// Alias:
const kurvButtons = document.getElementsByClassName("kurv");

// Event listener - trigger alert med besked:
for (let i = 0; i < kurvButtons.length; i++) {
  kurvButtons[i].addEventListener("click", tilfoej);
}

// Event handler - alert med besked til brugeren:
function tilfoej() {
  alert("Ret og det valgte antal er tilføjet til kurven!");
}