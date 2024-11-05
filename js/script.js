// Mail
//richiesta del email al utente
const email = ["ciao"]
const userEmail = prompt("Quale e la tua email?")


// Variabile per tenere traccia se l'email è autorizzata
let emailAcces = false;

// Controllo se l'email è autorizzata usando un ciclo
for (let i = 0; i < email.length; i++) {
    if (userEmail === email[i]) {
        emailAcces = true;     
    }
}

// Messaggio in base al controllo
if (emailAcces) {
    alert("Accesso autorizzato.");
} else {
    alert("Email non riconosciuta.");
}

//dadi 
//creazioine dei numeri 
const myNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(myNum)
const pcNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(pcNum)

let messaggio = "";


//confronto tra il mio numero e quello del pc
if(myNum > pcNum){
    messaggio = ("hai vinto")
}else if(myNum < pcNum){
    messaggio = ("hai perso")
}else if(myNum = pcNum){
    messaggio = ("pari")
}

console.log(messaggio)