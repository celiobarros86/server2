//criando um servido utilizando o framework express

let express = require('express')

let app = express()

const path = require('path')
//configurando as rotas do servidor

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
app.get('/', (req, res) => res.send('<h1>Home'))
app.get('/contato', (req, res) =>
  res.send({ Nome: 'Célio', Altura: 1.8, Idade: 36 })
)
app.get('/cadastro', (req, res) => res.send('<h2>Página de cadastro'))
app.get('/helloworld', (req, res) => res.send('<h1>Hello World !</h1>'))

app.get('/foto', (req, res) => {
  res.sendFile(
    path.join(__dirname,'BIMG-401_337.jpg')
  )
})

//criando o servidor
