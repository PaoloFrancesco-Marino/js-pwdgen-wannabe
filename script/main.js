/**
 * Password Generator
 */

// 1-chiedere nome utente

var name = prompt('Qual è il tuo nome?');

console.log(name);

// 2-chiedere cognome utente

var surname = prompt('Qaul è il tuo cognome?');

console.log(surname);

// 3-chiedere colore preferito

var color = prompt('Colore Preferito?');

console.log(color);


// 3.1 - aggiunta numero finale

var number = 20;

console.log(number)

// 4-scrivere nella pagina le informazioni ottenute 

document.getElementById('result') .innerHTML = name + surname + color + number;