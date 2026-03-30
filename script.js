function saluer() {
  let nom = document.getElementById("username").value;

  if (nom === "") {
    alert("Veuillez entrer votre nom !");
    return;
  }

  let messageElem = document.getElementById("message");
  messageElem.innerText = `Bonjour ${nom}, nous sommes ravis de vous accueillir !\nVous allez être redirigé vers notre forum.`;
  
  // Animation fade in du message
  messageElem.style.opacity = 0;
  messageElem.style.transition = "opacity 1s";
  setTimeout(() => { messageElem.style.opacity = 1; }, 100);

  document.getElementById("continueBtn").style.display = "block";

  // Sauvegarder le nom pour la page 2
  localStorage.setItem("username", nom);
}

function continuer() {
  // Fade out avant redirection
  document.body.style.opacity = 0;
  setTimeout(function() {
    window.location.href = "page2.html";
  }, 500);
}