// biblioteca
import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'

// Importação de Arquivo AQUI

import mainRoutes from './routes/index.route'

// Variavel de ambiente
dotenv.config();

// Servidor 
const server = express();

// Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())

// public
server.use(express.static(path.join(__dirname, '../public')))

// rota

server.use(mainRoutes)

server.use((req: Request, res: Response) => {
    res.render('pages/404', {

    })
})


server.listen(process.env.PORT, () => {
    console.log('Listening')
})