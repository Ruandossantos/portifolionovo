const text = "Olá! Esta é uma animação de digitação.";

let index = 0;
const textElement = document.getElementById('text');

function type() {
    textElement.textContent += text[index++];
    if (index < text.length) {
        setTimeout(type, Math.random() * 200 + 50); // Ajuste o tempo de digitação aqui
    }
}

type();
