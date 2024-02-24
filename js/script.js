//FUNÇÃO QUE FAZ EFEITO DE DIGITAÇÃO NO H1 HEADER
function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );

    setInterval(() => typeWriter(el), 12000);
}
typeWriter(letra);
