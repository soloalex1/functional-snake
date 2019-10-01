/**  @function merge {Object} - Função que faz a junção de dois parâmetros */
const merge = o1 => o2 => Object.assign({}, o1, o2);

/**  @function getFirst {Object} - Função que retorna o primeiro elemento de um array */
const getFirst = arr => arr.slice(1);

/**  @function getFirst {Object} - Função que retorna o último elemento de um array */
const getLast = arr => arr.slice(0, arr.length - 1);

/**  @function randomize {Object} - Função que retorna um valor aleatório entre dois valores */
const randomize = min => max => Math.floor(Math.random() * max) + min;

/**  @function map {Object} - Função de mapeamento do array da cobra */
const map = o1 => o2 => o2.map(o1);

/**  @function prop {Object} - Função que retorna se há uma certa propriedade num objeto */
const prop = k => o => o[k];

/** 
	* @todo Estabelecer funções base do jogo
	* @body Já criei algumas funções que podem ser úteis pra lógica base do jogo, mas com certeza tem muito mais coisa.
*/
