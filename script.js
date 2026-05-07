function calcular(){

  let v = document.getElementById("tensao").value;
  let i = document.getElementById("corrente").value;
  let r = document.getElementById("resistencia").value;

  let resultado = document.getElementById("resultado");

  if(v === ""){
    resultado.innerHTML =
      "Tensão = " + (i * r).toFixed(2) + " V";
  }

  else if(i === ""){
    resultado.innerHTML =
      "Corrente = " + (v / r).toFixed(2) + " A";
  }

  else if(r === ""){
    resultado.innerHTML =
      "Resistência = " + (v / i).toFixed(2) + " Ω";
  }

  else{
    resultado.innerHTML =
      "Deixe um campo vazio para calcular.";
  }

}