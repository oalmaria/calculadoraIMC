let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", clickBtnCalcular);

function clickBtnCalcular(){
    let txtPeso = document.getElementById("txtPeso");
    let peso = txtPeso.value;
    let textAltura = document.getElementById("txtAltura");
    let altura = textAltura.value;

    let imc = peso / (altura * altura);

    alert(imc);
}

