window.onload = () => {
    let nome = prompt("Digite o seu nome");

    while(nome == false || nome == null){
        nome = prompt("Digite o seu nome!");
    }
    return alert(`Olá, ${nome}`)
}