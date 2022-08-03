const { readFile } = require('fs')
const { promisify } = require('util')

const readFIleAsync = promisify(readFile)

class Database {
  constructor() {
    this.NOME_ARQUIVO = 'herois.json'
  }

  async obterDadosArquivo() {
    const arquivo = await readFIleAsync(this.NOME_ARQUIVO, 'utf-8')

    return JSON.parse(arquivo.toString())
  }

  escreverArquivo() {}

  async listar(id) {
      const dados = await this.obterDadosArquivo()
      const dadosFiltrados = dados.filter(item => item.id === id)
      if(!id){
          return dados
      }
    return dadosFiltrados
  }
}

module.exports = new Database()
