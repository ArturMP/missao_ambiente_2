const nomes = ["Artur", "Luana", "Lucas", "Kailany", "Amanda", "Gustavo", "Gabriel","Nicolas","André","Leonardo"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
