const express = require('express');

const app = express();

//req.query -> para resgatar queries enviados pela url: ?name=William. (Para filtrar infos)
/* 
    Exemplo:
        app.get("/users", (req, res) => {
            if (!req.query.name) {
                return res.json({ message: "Hello World" })
            } else {
                return res.json({ message: `Hello ${req.query.name}` })
            }
        });
*/

//req.params -> para resgatar parâmetros enviados pela url: /id. (Para edição e remoção)
/* 
    Exemplo:
        app.put('/users/:id', (req, res) => {
            // Suponto que o usuário de id = 1 seja: { id: 1, nome: "Diego" }
            // procura o usuário pelo req.params.id
            // Altera o objeto com id = 1 para: { id: 1, nome: "William" }
            // Retorna res.json() com o novo objeto com id = 1
        });
*/

//req.body -> para acessar o corpo da requisição em json.
/* 
    Exemplo:
        app.post("/users", (req, res) => {
            // Requisição: { name: "William", idade: 19 }
            // req.body.name -> "William"
            // req.body.idade -> 19
        });
    
    OBS.:   O express não reconhece por padrão o formato json de requisições
        por isso, a variável app precisa usar o express.json();
*/

app.use(express.json());

app.post('/users', (req, res) => {
    res.json(req.body);
});

app.listen(3333);