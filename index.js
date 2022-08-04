const { Command } = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')
async function main() {
  const Commander = new Command()

  Commander.version('v1')
    .option('-n, --nome [value]', 'Nome do Heroi')
    .option('-p, --poder [value]', 'Pode do Herio')
    .option('-c, --cadastrar', 'Cadastrar um heroi')
    .option('-l, --listar', 'Listar um heroi')
    .option('-rm, --remover [value]', 'Remove um heroi')
    .option('-i, --id [value]', 'id do heroi')
    .option('-a, --atualizar [id value]', 'atualizar um heroi pelo id')

    .parse(process.argv)

  const heroi = new Heroi(Commander._optionValues)
  const options = Commander._optionValues

  try {
    if (options.cadastrar) {
      delete heroi.id
      const resultado = await Database.cadastrar(heroi)
      if (!resultado) {
        console.error('Heroi nao foi cadastrado')
        retrun
      }
      console.log('Heroi cadastrado!')
    }
    if (options.listar) {
      const resultado = await Database.listar()
      console.log(resultado)
      return
    }
    if (options.remover) {
      const resultado = await Database.remover(heroi.id)
      if (!resultado) {
        console.error('nao foi possivel remover o heroi')
        return
      }
      console.log('heroi removido!')
      return
    }
    if(options.atualizar){
        const idParaAtualizar = parseInt(options.atualizar)
        const dado = JSON.stringify(heroi)
        const heroiAtualizar = JSON.parse(dado)
        const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)
        if(!resultado){
            console.error('nao foi possivel atualizar o heroi')
            return
        }
        console.log('heroi atualizado com sucesso!')
        return

    }
  } catch (error) {
    console.error('DEU RUIM', error)
  }
}

main()
