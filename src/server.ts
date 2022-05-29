import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';
import mainPainel from './routes/painel';

const server = express();

server.use('/painel',mainPainel);

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);


server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada');
});

server.listen(3000);