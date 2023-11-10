document.getElementById("btn_gerar_link").addEventListener("click", function(e) {
    e.preventDefault();

    const numero_whatsapp = document.getElementById("numero_whatsapp").value;

    if (numero_whatsapp.length < 10 || numero_whatsapp.length > 11) {
        // Aqui vai a condição se o usuário digitar um número inválido
        console.log("Número inválido");
        document.getElementById("numero_whatsapp").style.borderColor = "red";

    } else {
        // Aqui vai a condição se o número estiver correto
        document.getElementById("numero_whatsapp").style.borderColor = "";
        let link_whatsapp = null;
        const texto_mensagem = document.getElementById("texto_mensagem").value;

        if (texto_mensagem.length > 0) {
            link_whatsapp = "https://api.whatsapp.com/send?phone=55" + numero_whatsapp + "&text=" + encodeURIComponent(texto_mensagem);
        } else {
            // Concatena a string com o número de WhatsApp informado pelo usuário
            link_whatsapp = "https://api.whatsapp.com/send?phone=55" + numero_whatsapp;
        }
        // Insere o link gerado no local
        document.getElementById("link_whatsapp").innerText = link_whatsapp;

        // Deixa a DIV de resultado visível
        document.getElementById("resultado").classList.remove("hide");
    }

    // console.log(numero_whatsapp);
});

document.getElementById("copiar_link").addEventListener("click", copiarLink);

document.getElementById("btn_reset").addEventListener("click", function() {
    location.reload();
});


document.getElementById("link_whatsapp").addEventListener("click", copiarLink);

// Função para copiar o link para a área de transferência
function copiarLink() {
    // Seleciona o elemento de texto que contém o link gerado
    var linkElement = document.getElementById("link_whatsapp").textContent;

    navigator.clipboard.writeText(linkElement);

    document.getElementById("copiar_link").innerText = "COPIADO!";
    document.getElementById("copiar_link").style.borderColor = "#32d486";
    document.getElementById("copiar_link").style.color = "#32d486";

    setTimeout(function() {
        document.getElementById("copiar_link").innerText = "COPIAR LINK";
        document.getElementById("copiar_link").style.borderColor = ""
        document.getElementById("copiar_link").style.color = ""
    }, 1000)

}

