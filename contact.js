function submitForm() {
    
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

   
    if ((email.indexOf("@") === -1) && email.indexOf(".") === -1) {
        alert("Mail inaceptable. Veuillez fournir une adresse e-mail valide.");
        return;
    }

    if (message.trim() === "") {
        alert("Le message est vide. Veuillez saisir un message.");
        return;
    }

   
    alert("Message bien envoye !");

 
document.getElementById("email").value = "";
document.getElementById("message").value = "";

}