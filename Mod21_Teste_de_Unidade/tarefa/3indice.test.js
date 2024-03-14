function indice(array, valor) {
    return array.indexOf(valor);
}

describe("Índice", () => {
    it("Retorna o índice do valor corretamente quando o valor está presente no array", () => {
        expect(indice([1, 2, 3, 4], 3)).toBe(2);
        expect(indice(["a", "b", "c", "d"], "c")).toBe(2);
    });

    it("Retorna -1 quando o valor não está presente no array", () => {
        expect(indice([1, 2, 3, 4], 5)).toBe(-1);
        expect(indice(["a", "b", "c", "d"], "e")).toBe(-1);
    });

    it("Retorna o índice do primeiro valor encontrado quando há valores duplicados", () => {
        expect(indice([1, 2, 3, 3, 4], 3)).toBe(2);
        expect(indice(["a", "b", "c", "c", "d"], "c")).toBe(2);
    });
});