function soma(array) {
    return array.reduce((total, num) => total + num, 0);
}

describe("Soma", () => {
    it("Calcula a soma para um array de números positivos", () => {
        expect(soma([1, 2, 3, 4])).toBe(10);
        expect(soma([5, 10, 15])).toBe(30);
    });

    it("Calcula a soma para um array de números negativos", () => {
        expect(soma([-1, -2, -3, -4])).toBe(-10);
        expect(soma([-5, -10, -15])).toBe(-30);
    });

    it("Retorna 0 para um array vazio", () => {
        expect(soma([])).toBe(0);
    });
});