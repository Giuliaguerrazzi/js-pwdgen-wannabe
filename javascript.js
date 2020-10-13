// 1. nome

var nome = prompt('Inserisci il tuo nome');

// 2. cognome

var cognome = prompt('Inserisci il tuo cognome');

// 3. colore

var colore = prompt('Il tuo colore preferito');

// 4. password

var password = nome + cognome + colore + '19';

document.getElementById('name').innerHTML = 'Benvenuto/a ' + nome + ' ' + cognome;
document.getElementById('color').innerHTML = colore;
document.getElementById('password').innerHTML = password;
