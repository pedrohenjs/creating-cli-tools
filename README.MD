<h1> CLI CRUD tool </h1>

---

### Regras de négocio:

- [x] Deve ser possível pesquisar um herói usando arquivos.
  
- [x] Deve ser possível cadastrar um heroi usando arquivos.
  
- [x] Deve ser possível remover um herio por id.
  
- [x] Deve ser possível atualizar um heroi pelo id.
  

##### Essa aplicação foi desenvolvida no intuito de aprender e praticar conceitos da interface de linha de comando (CLI). Portanto, você pode operar as funcionalidades da aplicação a partir de uma CLI:

```bash
# Clone o projeto
git clone https://github.com/pedrohenjs/creating-cli-tools.git

# Acesse o diretório da aplicação 
cd creating-cli-tools

# Instale as dependências
npm 

# Rode o projeto e exiba as instruções 
node index.js --help

# Feito isso, você verá uma caixa como essa:
Options:

  -V, --version               # output the version number
  -n, --nome [value]          # Nome do Heroi
  -p, --poder [value]         # Pode do Herio
  -c, --cadastrar             # Cadastrar um heroi
  -l, --listar                # Listar um heroi
  -rm, --remover [value]      # Remove um heroi
  -i, --id [value]            # id do heroi
  -a, --atualizar [id value]  # atualizar um heroi pelo id
  -h, --help                  # display help for command


# Agora é só rodar o programa:

# Exemplo de criação de herói:
node index.js --nome 'Hulk' --poder 'Força' --cadastrar

# Liste os heróis para ver se funcionou: 

node index.js --listar

#output-example:

[ { id: 1659635925884, nome: 'Hulk', poder: 'Força' } ]
```
