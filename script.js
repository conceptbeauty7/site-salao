document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const resposta1 = document.getElementById('pergunta1').value;
    const resposta2 = document.getElementById('pergunta2').value;

    let resultado = "";

    if (resposta1 === "A" && resposta2 === "A") {
        resultado = "Corte moderno para cabelo liso!";
    } else if (resposta1 === "A" && resposta2 === "B") {
        resultado = "Corte clássico para cabelo liso!";
    } else if (resposta1 === "A" && resposta2 === "C") {
        resultado = "Corte despojado para cabelo liso!";
    } else if (resposta1 === "B" && resposta2 === "A") {
        resultado = "Corte moderno para cabelo cacheado!";
    } else if (resposta1 === "B" && resposta2 === "B") {
        resultado = "Corte clássico para cabelo cacheado!";
    } else if (resposta1 === "B" && resposta2 === "C") {
        resultado = "Corte despojado para cabelo cacheado!";
    } else if (resposta1 === "C" && resposta2 === "A") {
        resultado = "Corte moderno para cabelo ondulado!";
    } else if (resposta1 === "C" && resposta2 === "B") {
        resultado = "Corte clássico para cabelo ondulado!";
    } else if (resposta1 === "C" && resposta2 === "C") {
        resultado = "Corte despojado para cabelo ondulado!";
    } else {
        resultado = "Por favor, responda todas as perguntas.";
    }

    document.getElementById('resultado').innerText = resultado;
});
