// Cuadrado
function perimetroCuadrado(lado){
    return lado * 4 ;
}
function areaCuadrado(lado){
    return lado**2;
}



function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value ; 
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value ;
    const area = areaCuadrado(value);
    alert (area)
}

// Triangulo

function perimetroTriangulo(lado,base){
    return lado**2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2 ;
}

function calculadoraPerimetroTriangulo(){
    const input1 = document.getElementById("InputPerimetroTriangulo1");
    const input2 = document.getElementById("InputPerimetroTriangulo2");
    const value1 = Number(input1.value) ;
    const value2 = Number(input2.value) ; 
    const perimetro = perimetroTriangulo(value1,value2);
    alert (perimetro)
}

function calculadoraAreaTriangulo(){
    const input1 = document.getElementById("InputAreaTriangulo1");
    const input2 = document.getElementById("InputAreaTriangulo2");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const area = areaTriangulo(value1,value2);
    alert (area)
}


//Circulo


function perimetroCirculo(radio){
    return Math.PI * (radio + radio) ;
}

function areaCirculo(radio){
    return Math.PI * radio**2;
}

function calculadoraPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    const perimetro = perimetroCirculo(value);
    alert (perimetro)
}

function calculaAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = Number(input.value);
    const area = areaCirculo(value);
    alert (area)
}