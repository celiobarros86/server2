//criando um servido utilizando o framework express

let express = require('express')

let app = express()
//configurando as rotas do servidor

app.get('/', (req, res) => res.send('Home'))

//criando o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
