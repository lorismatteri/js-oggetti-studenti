//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var studente = {
  nome: 'Pinco',
  cognome: 'Pallino',
  eta: 25
}

for (var key in studente) {
  console.log(key);
}
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var studenti = {
  studente1: {
    nome: 'Pinco',
    cognome: 'Pallino',
    eta: 25
  },
  studente2: {
    nome: 'Zlatan',
    cognome: 'Ibrahimovic',
    eta: 39
  },
  studente3: {
    nome: 'Romolo',
    cognome: 'Remo',
    eta: 25
  }
}

for (var key in studenti) {
  var nomeStudente = studenti[key].nome;
  var cognomeStudente = studenti[key].cognome;
  console.log(nomeStudente + ' ' + cognomeStudente);
}
//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


