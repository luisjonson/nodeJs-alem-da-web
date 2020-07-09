const {
    deepEqual,
    ok
} = require('assert')
// inportando o database
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

// inicializando uma swit de teste 
describe('Suite de manipulação de Herois', () => {
    it('deve pesquisa um heroi usando um arquivo', async () => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)
        // const posicaoUm = resultado[0]

        deepEqual(resultado, expected)
    })
    // it('deve cadastra um heroi, usando arquivos', async () => {
    //     const expected = DEFAULT_ITEM_CADASTRAR
    //     ok(null, expected)
    // })
})