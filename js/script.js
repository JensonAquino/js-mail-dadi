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
        break; // Uscita dal ciclo se trovata
    }
}

// Messaggio in base al controllo
if (emailAcces = true) {
    alert("Accesso autorizzato.");
} else {
    alert("Email non riconosciuta.");
}

