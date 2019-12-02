var deck = [];

// This gives a Class that can be intantiated
function Card(term, definition) {
  this.term = term;
  this.definition = definition;
}


// This is the function that allows the user to create a new card
function addCard(formFront, formBack) {
  formFront = document.getElementById('newTerm');
  formBack = document.getElementById('newDef');
  var newCard = new Card();
  newCard.term = formFront.value
  newCard.definition = formBack.value
  deck.push(newCard)
  clearForm();
  cardFront();
}

// This function shows the existing cards in the browser
function cardFront() {
  var front = ""; 
  var i;
  for(i = 0; i < deck.length; i++) {
    front += deck[i].term + " " + "<br>";
    document.getElementById("card").innerHTML = front 
  }
}

function cardBack() {
  var back = ""; 
  var i;
  for(i = 0; i < deck.length; i++) {
    back += deck[i].definition + "<br>";
    document.getElementById("card").innerHTML = back
  } 
}

function flip() {
  document.getElementById("cardFront").innerHTML = cardBack()
}

function clearForm() {
  document.getElementById("newTerm").value = "";
  document.getElementById("newDef").value = "";
}





