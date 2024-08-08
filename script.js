const substituicao = {
    a: "ai",
    e: "enter",
    i: "imea",
    o: "ober",
    u: "ufat",
    };

    const reverseSubstituicao = Object.fromEntries(
    Object.entries(substituicao).map(([key, value]) => [value, key])
);

function criptografar() {
const texto = document.getElementById("texto").value;
let resultado = "";

for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    resultado += substituicao[char] || char;
    }

    document.getElementById("resultado").innerText = resultado;
}

function descriptografar() {
    const texto = document.getElementById("texto").value;

    document.getElementById("resultado").innerText = texto;
}

    function copiarResultado() {
    const resultado = document.getElementById("resultado").innerText;
    navigator.clipboard
        .writeText(resultado)
        .then(() => {
        alert("Texto copiado para a área de transferência");
        })
        .catch((err) => {
        console.error("Erro ao copiar o texto: ", err);
        });
    }
