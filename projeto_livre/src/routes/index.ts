import { Router, Request, Response } from 'express';

const router = Router();


router.get('/', (req: Request, res: Response)=>{
    
    let user =  {
        name : 'Fabricio',
        age: 20,
        showOld: false
    };

    if(user.age >= 50){
        user.showOld = true;
    }
    
    let product =[
        {title: 'x', price: 1},
        {title: 'Y', price: 2},
        {title: 'Z', price: 3}
    ];

    // Em lista simples podemos setar a condicional e exibir os itens apenas com um ponto
    // Caso o Arr seja passado vazio ele exibe a frase do else
    // let listasimples =[
    //     'feliz',
    //     'mesmo',
    //     'lista'
    // ];

    // let listasimples = arr [
        
    // ];


    // estamos enviando uma variável ao template
    res.render('pages/index',{
        user, product, listasimples :[
            
        ]
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('contato');
});

router.get('/form', (req: Request, res: Response)=>{
    res.render('pages/form');
});

router.get('/formGet', (req: Request, res: Response)=>{
    console.log("query string", req.query.nome);
    
    let idade = 0;
    let mostrarIdade = false;

    if(req.query.ano){
        let anoNascimento: number = parseInt(req.query.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade =  anoAtual - anoNascimento;
        mostrarIdade = true;
    }
    res.render('pages/form',{
        
        mostrarIdade,
        idade,
    });
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('sobre');
});

export default router;