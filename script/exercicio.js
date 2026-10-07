function calcular(){
    let numero1= Number(document.getElementById("numero1").value);
    let numero2= Number(document.getElementById("numero2").value);

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let multiplicacao = numero1 * numero2;
    let divisao = numero1 / numero2 ;

    document.getElementById("resultado").innerHTML = `
    <p>Soma: ${soma}<p>
    <p>Subtraçao: ${subtracao}<p>
    <p>Multiplicação: ${multiplicacao}<p>
    <p>Divisão: ${divisao}<p>
    `;
}