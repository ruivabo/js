import { CalcIMC } from "./js/ruiva.js";
document.getElementById('frmImc').addEventListener('submit',function(event){
    event.preventDefault()
    const nomeFrom = document.getElementById('txtnome').value
    const nomeFrom = document.getElementById('nmbPeso').value
    const nomeFrom = document.getElementById('nmbAltura').value

    let imc new CalcIMC(nomeFrom, pesoFrom, alturaFrom)
    
    document.getElementById('print').innerHTML=
    `Nome: ${imc.getnome()} com o Peso: ${imc.getPeso()} e sua altura: ${imc.getAltura()}`
})