const { spy, assert, stub, mock } = require("sinon");
const { Database } = require("./database");
const { UsuariosController } = require("./controller");
const { expect } = require("@jest/globals");

let respostaEsperada;

describe("Controller de Usuários", () => {
    // Configuração comum para todos os testes: define uma resposta esperada
    beforeAll(() => {
        respostaEsperada = [
            {
                id: 10,
                nome: "João Carlos",
                email: "email@test.com",
            },
        ];
    });

    // Teste usando um objeto falso (fake) para simular o comportamento do banco de dados
    it("fake", () => {
        const fakeDatabase = {
            // Simula a função findAll() para retornar a resposta esperada
            findAll() {
                return respostaEsperada;
            },
        };

        const controller = new UsuariosController(fakeDatabase); // Cria uma instância do controlador de usuários com o objeto falso
        const response = controller.getAll(); // Chama o método getAll() do controlador

        expect(response).toBe(respostaEsperada); // Verifica se a resposta é igual à resposta esperada
    });

    // Teste usando um espião (spy) para verificar se uma função do banco de dados foi chamada corretamente
    it("spy", () => {
        const findAll = spy(Database, "findAll");
        const controller = new UsuariosController(Database);
        controller.getAll();

        assert.calledWith(findAll, "usuarios"); // Verifica se a função findAll() foi chamada com os argumentos corretos
        findAll.restore(); // Restaura a função spy para o seu estado original
    });

    // Teste usando um stub para substituir a função do banco de dados e controlar seu comportamento
    it("stub", () => {
        const findAll = stub(Database, "findAll"); // Cria um stub para a função findAll() do banco de dados
        findAll.withArgs("usuarios").returns(respostaEsperada);

        const controller = new UsuariosController(Database);
        const response = controller.getAll();

        assert.calledWith(findAll, "usuarios");

        expect(response).toEqual(respostaEsperada);

        findAll.restore();
    });

    // Teste usando um mock para simular o comportamento do banco de dados e verificar se as chamadas foram feitas corretamente
    it("mock", () => {
        const dbMock = mock(Database); // Cria um mock para o banco de dados
        // Define a expectativa de que a função findAll() será chamada uma vez com os argumentos corretos e retornará a resposta esperada
        dbMock
            .expects("findAll")
            .once()
            .withArgs("usuarios")
            .returns(respostaEsperada);

        const controller = new UsuariosController(Database);
        const response = controller.getAll();

        expect(response).toEqual(respostaEsperada);

        dbMock.verify(); // Verifica se as expectativas do mock foram satisfeitas
        dbMock.restore();
    });
});
