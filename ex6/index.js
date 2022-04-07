const inputNome = document.getElementById("nome");
const inputSobrenome = document.getElementById("sobrenome");
const btn = document.getElementById("btn")

const exibir = () => {
    let nome = inputNome.value;
    let sobrenome = inputSobrenome.value
    alert(`Olá, ${nome} ${sobrenome} !`)
    inputNome.value = "";
    inputSobrenome.value = "";
}

btn.onclick = exibir;