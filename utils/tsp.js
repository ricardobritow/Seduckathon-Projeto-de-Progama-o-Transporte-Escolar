// *** Algoritmo baseado em força bruta ***
// Ele testa todos os caminhos possíveis. A cada iteração (a cada caminho testado) ele guarda o valor caso for menor que o anterior.
// Ou seja, ele eventualmente vai guardar o menor valor e irá apresentá-lo no final da execução.
// -- é a forma mais *simples* de resolver esse problema e portanto a menos otimizada. Mas resolve.

// Função para calcular a distância total de um caminho dado uma matriz de distâncias entre cidades
function calculaDistancia(matriz, caminho) {
  let distanciaTotal = 0;
  // Itera sobre o caminho, somando as distâncias entre cada par de cidades
  for (let i = 0; i < caminho.length - 1; i++) {
    distanciaTotal += matriz[caminho[i]][caminho[i + 1]];
  }

  // Adiciona a distância da última cidade de volta para a primeira cidade
  distanciaTotal += matriz[caminho[caminho.length - 1]][caminho[0]];
  return distanciaTotal; // Retorna a distância total
}

// Função para gerar todas as permutações possíveis de um conjunto de elementos
function permute(permutacao) {
  let length = permutacao.length,
    result = [permutacao.slice()], // Inicializa o array de resultados com a permutação original
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutacao[i];
      permutacao[i] = permutacao[k];
      permutacao[k] = p;
      ++c[i];
      i = 1;
      result.push(permutacao.slice()); // Adiciona a permutação atual ao array de resultados
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result; // Retorna todas as permutações possíveis
}

// Função principal para encontrar o menor caminho entre cidades dado uma matriz de distâncias
function encontreMenorRota(matriz) {
  const numeroCidades = matriz.length;
  const cidadeIndices = Array.from(
    { length: numeroCidades },
    (_, index) => index
  );
  const todasPermutacoes = permute(cidadeIndices); // Gera todas as permutações possíveis dos índices das cidades
  let menorDistancia = Infinity; // Inicializa a menor distância como infinito
  let menorCaminho = []; // Inicializa o menor caminho como um array vazio

  // Itera sobre todas as permutações possíveis
  todasPermutacoes.forEach((permutacao) => {
    const distanciaAtual = calculaDistancia(matriz, permutacao); // Calcula a distância do caminho atual
    // Verifica se a distância atual é menor do que a menor distância encontrada até agora
    if (distanciaAtual < menorDistancia) {
      menorDistancia = distanciaAtual; // Atualiza a menor distância
      menorCaminho = permutacao; // Atualiza o menor caminho
    }
  });

  return { menorDistancia, menorCaminho }; // Retorna a menor distância e o menor caminho
}

export { encontreMenorRota }; // Exporta a função encontreMenorRota para uso externo
