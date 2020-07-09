const {
    readFile
} = require('fs')

const {
    promisify
} = require('util')

const readFileAsync = promisify(readFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadsArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())

    }

    escreverArquivo() {

    }

    async listar(id) {
        // filter esta filtrando o resultado do dados pelo id, 
        // atribuindo o valor  dados à dadosFiltrado. 
        const dados = await this.obterDadsArquivo()
        const dadosFiltrados = dados.filter(item => (id ? (item.id === id) : true))
        return dadosFiltrados
    }
}

module.exports = new Database()