// Exemplo 1: 3 pontos.
const matrizDeDistancias1 = [
  // X -> Y (distância de X para Y)
  [0, 5, 15], // A -> A: 0, A -> B: 5, A -> C: 15
  [5, 0, 35], // B -> A: 5, B -> B: 0, B -> C: 35
  [15, 35, 0], // C -> A: 15, C -> B: 35, C -> C: 0
];
// Importante: notar que X -> Y é igual a Y -> X na matriz. Tem q estar assim nela toda
const nomeDeParadas1 = [
  "Praça Central",
  "Parada de Ônibus 002",
  "Rua Felismina Brito",
]; // Nome dos pontos A, B, C, D, etc. Em ordem. Ir adicionando/removendo conforme a quantidade de paradas.

// Exemplo 2: 4 pontos.
const matrizDeDistancias2 = [
  // X -> Y (distância de X para Y)
  [0, 10, 15, 20], // A -> A, A -> B, A -> C, A -> D
  [10, 0, 35, 25], // B -> A, B -> B, B -> C, B -> D
  [15, 35, 0, 30], // C -> A, C -> B, C -> C, C -> D
  [20, 25, 30, 0], // D -> A, D -> B, D -> C, D -> D
];
const nomeDeParadas2 = [
  "Praça Central",
  "Parada de Ônibus 002",
  "Rua Felismina Brito",
  "Povoado XYZ",
]; // Nome dos pontos A, B, C etc. Em ordem. Ir adicionando/removendo conforme a quantidade de paradas.
