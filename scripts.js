function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block"; // Exibe o resultado
    resultDiv.innerHTML = ""; // Limpa qualquer resultado anterior

    let count = min;
    let isVisible = true; // Controla a visibilidade do número
    const colors = ["#ffffff", "#ff0000", "#00ff00", "#0000ff"]; // Cores para alternar
    let colorIndex = 0;

    const interval = setInterval(() => {
        resultDiv.innerHTML = count;
        resultDiv.style.visibility = isVisible ? "visible" : "hidden";
        resultDiv.style.color = colors[colorIndex];

        isVisible = !isVisible; // Alterna a visibilidade
        colorIndex = (colorIndex + 1) % colors.length; // Alterna a cor

        if (count === result) {
            clearInterval(interval); // Para a contagem quando alcançar o resultado
            resultDiv.style.visibility = "visible"; // Certifica-se de que o número final é visível
            resultDiv.style.color = colors[colorIndex]; // Define a cor final
        } else {
            count++;
        }
    }, 30); // Intervalo de tempo para a contagem (em milissegundos)
}
