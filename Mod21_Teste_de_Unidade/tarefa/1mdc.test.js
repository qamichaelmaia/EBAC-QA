function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

describe("MDC - Máximo Divisor Comum", () => {
    it("Calcula o MDC de dois números corretamente", () => {
        expect(mdc(8, 12)).toBe(4);
        expect(mdc(15, 20)).toBe(5);
        expect(mdc(18, 27)).toBe(9);
    });

    it("Retorna o próprio número quando um dos números é zero", () => {
        expect(mdc(0, 7)).toBe(7);
        expect(mdc(12, 0)).toBe(12);
        expect(mdc(0, 0)).toBe(0);
    });

    it("Retorna 1 quando ambos os números são primos entre si", () => {
        expect(mdc(13, 17)).toBe(1);
        expect(mdc(21, 19)).toBe(1);
    });
});