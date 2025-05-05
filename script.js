function trocarImagem() {
    const imgStatusSenha = document.getElementById("status_senha");
    const senhaInputType = document.getElementById("caixa_senha");

   if (imgStatusSenha.src.includes("/assets/visible.png")) {
        imgStatusSenha.src = "./assets/hidden.png";
        senhaInputType.type = "text";
   }
   else {
    imgStatusSenha.src = "./assets/visible.png";
    senhaInputType.type = "password";
   }
}