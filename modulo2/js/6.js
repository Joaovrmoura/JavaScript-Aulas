function buscaArvore(arvore, valor) {
    if (arvore.valor === valor) return arvore;
    for (const filho of arvore.filhos) {
        const resultado = buscaArvore(filho, valor);
        if (resultado) return resultado; // Encontrado no filho
    }
    return null; // Valor não encontrado
}

const arvore = {
    valor: 1,
    filhos: [
        { valor: 2, filhos: [] },
        { valor: 3, filhos: [{ valor: 4, filhos: [] }] },
    ],
};
console.log(buscaArvore(arvore, 4)); // Output: { valor: 4, filhos: [] }
