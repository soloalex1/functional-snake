
// importando as funções da biblioteca base
const base = require('./base')
Object.getOwnPropertyNames(base).map(p => global[p] = base[p])

// constantes de direcionamento
const CIMA = { x: 0, y:-1 }
const BAIXO = { x: 0, y: 1 }
const DIREITA = { x: 1, y: 0 }
const ESQUERDA = { x:-1, y: 0 }

// operação básica de comparação de pontos
cont dotDist => p1 => p2 => p1.x == p2.x && p1.y == p2.y



module.exports(CIMA, BAIXO, DIREITA, ESQUERDA)
