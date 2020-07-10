const {
    readFile,
    writeFile
} = require('fs')

const {
    promisify
} = require('util')

// tranformando readFile e WriteFile em promise com promisify, para manipular
//  os arquivo com async e await.
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
    constructor() {
        this.NOME_ARQUIVO = 'herois.json'
    }
    async obterDadsArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
        return JSON.parse(arquivo.toString())

    }

    async escreverArquivo(dados) {

        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastra(heroi){
        const dados = await this.obterDadsArquivo()
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        /**
         * {
         *  nome: Flash
         *  poder: Velocidade
         * }
         * 
         * {
         *  id: 12334??
         * }
         * 
         * {
         *  nome:flesh
         * poder: Velocidade
         * id: 1234??
         * }
         */
        const heroiComId = {
            id, 
            ...heroi
        }

        const dadosFinal = [
            ...dados,
            heroiComId
        ]

        /**
         * [{
         *  nome: flash
         * }]
         * 
         * {
         *  nome: Batman
         * }
         * 
         * [{
         * nome: Flash
         * },
         * {
         *  nome: Batman
         * }
         * ]
         *  */ 

         const resultado = await this.escreverArquivo(dadosFinal)
         return resultado;
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