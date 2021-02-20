// eta del passeggero
var età = parseInt(prompt("inserire l'eta del passaggero"));

// kilometri da percorrere
var km = parseInt(prompt("inserire i kilometri da percorrere"));

// calcolo prezzo del biglietto
const euroAlKm = 0.21;
var costoBiglietto =Math.floor(km * euroAlKm);
console.log(costoBiglietto);

// sconto biglietto
var scontoMinorenni = costoBiglietto * 20 / 100;
var scontoAnziani = costoBiglietto * 40 / 100;
var bigliettoScontato;

// sconto in base all'eta
if (età < 18) {
    bigliettoScontato = costoBiglietto - scontoMinorenni;
    alert("sei minorenne e hai accesso allo sconto del 20%, il prezzo del tuo biglietto è " + bigliettoScontato + "€")
} else if (età > 65) {
    bigliettoScontato = costoBiglietto - scontoAnziani;
    alert("sei un'anziano/a e hai accesso allo sconto del 40%, il prezzo del tuo biglietto è " + bigliettoScontato + "€")
} else {
    alert("il prezzo del tuo biglietto è " + costoBiglietto + "€")
}