const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("btn");
const calculos = document.getElementById("dv2");

const calcular = () => {
    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value);
    calculos.innerHTML =
    `<li> ${n1} + ${n2} = ${n1 + n2} </li>
     <li> ${n1} - ${n2} = ${n1 - n2} </li>
     <li> ${n1} * ${n2} = ${n1 * n2} </li>
     <li> ${n1} / ${n2} = ${n1 / n2} </li>
     <li> ${n1} ** ${n2} = ${n1 ** n2} </li>
    `
}

btn.onclick = calcular;