const input = document.getElementById("nome");
const btn = document.getElementById("btn");

const exibir = () =>{
    let nome = input.value;
    alert(`Olá, ${nome} !`)
}

btn.onclick = exibir;