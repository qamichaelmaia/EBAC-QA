const { soma, sub, dobro, divisor } = require("./codigo");

describe("funções matemáticas", () => {
    beforeAll(() => {
        console.log("antes de tudo");
    });

    beforeEach(() => {
        console.log("antes de cada teste");
    });

    afterEach(() => {
        console.log("depois de cada teste");
    });

    afterAll(() => {
        console.log("depois de tudo");
    });

    it("soma de dois valores", () => {
        expect(soma(2, 5)).toBe(7);
        expect(soma(2, 4)).toBe(6);
        expect(soma(21, 44)).toBe(65);

    });

    it("subtração de dois valores", () => {
        expect(sub(8, 5)).toBe(3);
        expect(sub(57, 4)).toBe(53);
        expect(sub(84, 44)).toBe(40);
    });

    it("dobro de um valor", () => {
        expect(dobro(4)).toBe(8);
        expect(dobro(35)).toBe(70);
    });

    it("divisão de um valor", () => {
        expect(divisor(10)).toBe(5);
        expect(divisor(300)).toBe(150);
    });

});
