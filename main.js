document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById("campoA").value);
    const campoB = parseFloat(document.getElementById("campoB").value);

    if (campoB > campoA){
        document.getElementById("mensagem").textContent = "Formulário válido, campo B maior que campo A."
        document.getElementById("mensagem").style.background = "green";
    } else {
        document.getElementById("mensagem").textContent = "Formulário inválido, campo B deve ser maior que campo A."
        document.getElementById("mensagem").style.background = "red";
    }
});