const { readFile, writeFile } = require('fs')
const { promisify } = require('util')

const readFIleAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }

  async obterDadosArquivo() {
    const arquivo = await readFIleAsync(this.NOME_ARQUIVO, 'utf-8')

    return JSON.parse(arquivo.toString())
  }

  async escreverArquivo(dados) {
    await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
    return true
  }

  async cadastrar (heroi) {
    const dados = await this.obterDadosArquivo()
    const id = heroi.id <= 2 ? heroi.id : Date.now()
    const heroiComId = {
        id,
        ...heroi
    }
    const dadosFinal = [
        ...dados,
        heroiComId
    ]
    const resultado = await this.escreverArquivo(dadosFinal)
    
    return resultado

  }

  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadosFiltrados = dados.filter((item) => item.id === id)
    if (!id) {
      return dados
    }
    return dadosFiltrados
  }

  async remover(id){
    if(!id){
        return await this.escreverArquivo([])
    }
    
    const dados = await this.obterDadosArquivo()
    
    const index = dados.findIndex(obj => obj.id === parseInt(id))
    if(index === -1){
        throw Error('O usuario informado nao existe')
    }
    dados.splice(index, 1)
    return await this.escreverArquivo(dados)
  }
}

module.exports = new Database()
