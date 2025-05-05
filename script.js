function trocarImagem() {
    const imgStatusSenha = document.getElementById("status_senha");
    const senhaInputType = document.getElementById("caixa_senha");

   if (imgStatusSenha.src.includes("User-Registration-Page-Layout/assets/visible.png")) {
        imgStatusSenha.src = "User-Registration-Page-Layout/assets/hidden.png";
        senhaInputType.type = "text";
   }
   else {
    imgStatusSenha.src = "User-Registration-Page-Layout/assets/visible.png";
    senhaInputType.type = "password";
   }
}
