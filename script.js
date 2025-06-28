document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const tipoCabelo = document.getElementById("tipo").value;
    const ressecado = document.getElementById("ressecado").value;
    const quimica = document.getElementById("quimica").value;
    const quebra = document.getElementById("queda").value;
    const resultadoDiv = document.getElementById("resultado");
    const aviso = document.getElementById("mensagemErro");

    aviso.textContent = "";
    resultadoDiv.textContent = "";

    if (!tipoCabelo || !ressecado || !quimica || !quebra) {
        aviso.textContent = "Por favor, responda todas as perguntas.";
        return;
    }

    let tratamento = 0;
    let nutricao = 0;
    let corteEspecial = 0;

    if (ressecado === "muito") tratamento++;
    if (ressecado === "pouco") nutricao++;

    if (quimica === "frequente") tratamento++;
    if (quimica === "asvezes") nutricao++;

    if (quebra === "muita") tratamento++;
    if (quebra === "leve") nutricao++;

    if (tipoCabelo === "cacheado") corteEspecial++;

    let resultado = "";

    if (tratamento >= 2) {
        resultado = "Seu cabelo demonstra sinais de danos. Recomendamos um cronograma capilar com foco em reconstrução e hidratações profundas.";
    } else if (nutricao >= 2) {
        resultado = "Seu cabelo está saudável mas com leve ressecamento. Aposte em nutrições semanais com óleos vegetais e corte bordado.";
    } else {
        resultado = "Seu cabelo está em boa condição geral. Um corte de manutenção e hidratação leve são ideais neste momento.";
    }

    if (corteEspecial) {
        resultado += " Como seu cabelo é cacheado ou volumoso, recomendamos cortes em camadas ou técnicas como o corte em U para valorizar os cachos.";
    }

    resultadoDiv.textContent = resultado;
});
