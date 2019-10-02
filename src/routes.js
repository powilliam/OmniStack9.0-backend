const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/upload');

const SpotsController = require('./controllers/SpotsController');
const SessionController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(multerConfig);

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

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotsController.index);

routes.post('/spots', upload.single('thumbnail'), SpotsController.store);

routes.get('/dashboards', DashboardController.show);

module.exports = routes;