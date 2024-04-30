function calcular(){

    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;
    
    const resultado = parseFloat(base*altura/2);
    document.getElementById('resultado').innerHTML=resultado + " m²";
    
    }