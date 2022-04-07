const inputValor = document.getElementById("valor");
const resultado = document.getElementById("dv2");
const btn = document.getElementById("btn");

const notas = [2, 5, 10, 20, 50, 100, 200];

const calcular = () =>{
    resultado.innerHTML = '';
    for (let nota of notas){
        let valor = parseInt(inputValor.value);
        const qtde = parseInt(valor / nota);

        valor = valor % notas;

        resultado.innerHTML += `<li> ${qtde} nota(s) de R$ ${nota} </li>`;
    }
    inputValor.value = '';
}
btn.onclick = calcular;