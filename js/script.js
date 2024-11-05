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
if (emailAcces = true) {
    alert("Accesso autorizzato.");
} else {
    alert("Email non riconosciuta.");
}

//dadi 
//creazioine dei numeri 
let myNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(myNum)
let pcNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(pcNum)


//confronto tra il mio numero e quello del pc
if(myNum > pcNum){
    console.log("hai vinto")
}else{
    console.log("hai perso")
}