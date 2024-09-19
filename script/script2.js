document.getElementById("profilForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Forhindrer formularen i at blive sendt
  
    // Hent værdierne fra formularen
    var fornavn = document.getElementById("fornavn").value;
    var efternavn = document.getElementById("efternavn").value;
    var adresse = document.getElementById("adresse").value;
    var postnummer = document.getElementById("postnummer").value;
    var by = document.getElementById("by").value;
    var telefonnummer = document.getElementById("telefonnummer").value;
    var email = document.getElementById("email").value;
    var adgangskode = document.getElementById("adgangskode").value;
  
    // Her kan du udføre yderligere behandling af de indtastede oplysninger,
    // f.eks. validering eller afsendelse til en server.
  
    // Eksempel: Vis oplysningerne i konsollen
    console.log("Fornavn: " + fornavn);
    console.log("Efternavn: " + efternavn);
    console.log("Adresse: " + adresse);
    console.log("Postnummer: " + postnummer);
    console.log("By: " + by);
    console.log("Telefonnummer: " + telefonnummer);
    console.log("Email: " + email);
    console.log("Adgangskode: " + adgangskode);
  });