document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const respostas = [
    document.getElementById("pergunta1").value,
    document.getElementById("pergunta2").value,
    document.getElementById("pergunta3").value,
    document.getElementById("pergunta4").value
  ];

  const contagem = {
    corte: 0,
    leve: 0,
    hidratacao: 0,
    nutricao: 0,
    reconstrucao: 0,
    cronograma: 0
  };

  respostas.forEach(resp => {
    contagem[resp] = (contagem[resp] || 0) + 1;
  });

  // Achar qual categoria teve mais votos
  const resultadoFinal = Object.keys(contagem).reduce((a, b) =>
    contagem[a] > contagem[b] ? a : b
  );

  const mensagens = {
    corte: "Você combina com um corte moderno e estiloso!",
    leve: "Seu cabelo está saudável, mantenha uma rotina leve de cuidados.",
    hidratacao: "Seu cabelo precisa de uma hidratação profunda!",
    nutricao: "Seu cabelo se beneficiaria de uma nutrição intensiva!",
    reconstrucao: "Seu cabelo está frágil: aposte em uma reconstrução capilar.",
    cronograma: "Seu cabelo precisa de um cronograma capilar completo!"
  };

  document.getElementById("resultado").innerText = mensagens[resultadoFinal];
});
