let caixa = document.getElementById("divresultado"); //variável que vai armazenar todas caixas de resultado de todos os cálculos

//abaixo a função de calcula a média
function media() {
  let n1, n2, med, status; //variáveis do calculo de média

  n1 = forMedia.nota1.value; //pegando o valor da primeira caixa de texto

  n2 = forMedia.nota2.value; //pegando o valor da segunda caixa de texto

  //a verificação abaixo confirma se tem valores números nas caixas de texto

  if (n1 == "" || n2 == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio, digite valores para calcular.");
    return;
  }

  console.log("Tipo: " + typeof n1);
  console.log("Tipo: " + typeof n2);

  n1 = n1.replace(",", ".");
  n2 = n2.replace(",", ".");

  console.log("Tipo: " + typeof n1);
  console.log("Tipo: " + typeof n2);

  n1 = parseFloat(n1);
  n2 = parseFloat(n2);

  if (isNaN(n1) || isNaN(n2)) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  } else if (n1 % 1 != 0 || n2 % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }

  med = (n1 + n2) / 2;

  console.log("O resultado da média deu: " + med);

  if (med < 3) {
    status = "Reprovado";
  } else if (med < 6) {
    status = "Em recuperação";
  } else {
    status = "Aprovado";
  }

  //aqui é modificada a página para exibir o resultado
  caixa.innerHTML =
    caixinhaDeTexto("A média na disciplina é " + med.toFixed(2)) +
    caixinhaDeTexto("O aluno está: " + status);
}

//essa função apaga o conteúdo do resultado
function limpar() {
  caixa.innerHTML = "";
}

//essa função é responsável por criar uma caixinha de aviso dentro da div de resultados do HTML
function caixinhaDeTexto(frase) {
  return "<h4 class='w3-panel w3-pale-green'>" + frase + "</h4>";
}

//função da área do Cilindro
function aCilindro() {
  let raio, altura, aCil;

  raio = formCil.raio.value;
  altura = formCil.altura.value;

  if (raio == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio. Por favor insira um número.");
    return;
  }
  if (altura == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio. Por favor insira um número.");
    return;
  }

  raio = parseFloat(raio);
  altura = parseFloat(altura);

  if (raio % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }
  if (altura % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }

  aCil = 2 * 3.1415 * raio * (raio + altura);

  caixa.innerHTML = caixinhaDeTexto(
    "A área desse cilindro é: " + aCil.toFixed(2) + "m²"
  );

  console.log("Raio: " + raio + " altura: " + altura);
  console.log("Area cilindro: " + aCil);
}

//abaixo estão as funções que precisam ser terminadas

//complete a função de calculo do circulo
function aCirculo() {
  let raio, aCirc;

  raio = formCirc.raio.value;

  aCirc = Math.PI * Math.pow(raio, 2);

  caixa.innerHTML = caixinhaDeTexto(
    "Área do Círculo: " + aCirc.toFixed(2) + "m"
  );

  console.log("àrea: " + aCirc);

  if (raio % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }

  if (raio == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio, digite valores para calcular.");
    return;
  }
}

//complete a função de calculo do cubo
function aCubo() {
  let aresta, areaC;

  aresta = formCubo.aresta.value;

  if (aresta == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio. Por favor insira um número.");
    return;
  }

  aresta = parseFloat(aresta);

  if (aresta % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }

  areaC = 6 * (aresta * aresta);

  caixa.innerHTML = caixinhaDeTexto(
    "Resultado do calculo do cubo: " + areaC.toFixed(2) + "m²"
  );

  console.log("Aresta: " + aresta + " Area Cubo: " + areaC);
  console.log("Area do Cubo: " + areaC);
}

//complete a função de calculo do triangulo
function aTriangulo() {
  let base, altura, areaT;

  base = formTri.base.value; //pegando o valor da caixa de texto base
  altura = formTri.altura.value; //pegando o valor da caixa de texto altura

  if (base == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio. Por favor insira um número.");
    return;
  }
  if (altura == "") {
    caixa.innerHTML = caixinhaDeTexto("Vazio. Por favor insira um número.");
    return;
  }

  base = parseFloat(base);
  altura = parseFloat(altura);

  if (base % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }
  if (altura % 1 != 0) {
    caixa.innerHTML = caixinhaDeTexto("Erro: letras não são permitidas.");
    return;
  }

  areaT = (base * altura) / 2;

  caixa.innerHTML = caixinhaDeTexto(
    "Resultado do calculo de triagulo: " + areaT.toFixed(2) + "m²"
  );

  console.log("Base: " + base + " altura:" + altura);
  console.log("Area triangulo: " + areaT);
}
