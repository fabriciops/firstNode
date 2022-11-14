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
    res.render('index',{
        user, product, listasimples :[
            
        ]
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.send('contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.send('sobre');
});

export default router;