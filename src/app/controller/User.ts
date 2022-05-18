import { Router } from 'express'
import { Person } from '@src/modals/person';
import { Connect, Query } from '../configs/mysql';

const router = Router();

type RequestBody = {
    name: string,
    age: number
}

router.post('/', (req, res) => {

    const body = req.body as RequestBody
    const newPerson : Person = {
        name: req.body.name,
        age: req.body.age
    };
    let query = `INSERT INTO user(nome, idade) VALUES("${newPerson.name}", ${newPerson.age}); `

    Connect()
    .then(connection => {
        Query(connection, query)
        .then(results => {
            return res.status(200).json({
                results
            })
        })
        .catch(error => { 
            console.log(error.message);
            
            return res.status(500).json({
                message: error.message,
                error
            })
        })
    })
    .catch(error => {
        console.log(error.message);

        return res.status(500).json({
            message: error.message,
            error
        })
        
    })
});

router.get('/', (req, res) => {
    let query = 'SELECT * FROM user'

    Connect()
        .then(connection => {
            Query(connection, query)
            .then(results => {
                return res.status(200).json({
                    results
                })
            })
            .catch(error => { 
                console.log(error.message);
                
                return res.status(500).json({
                    message: error.message,
                    error
                })
            })
        })
        .catch(error => {
            console.log(error.message);

            return res.status(500).json({
                message: error.message,
                error
            })
            
        })
});

// router.post('/', (req, res) => {
//     const body = req.body as RequestBody
//     const newPerson : Person = {
//         id: req.body.id,
//         name: req.body.name,
//         age: req.body.age
//     };
//     persons.push(newPerson)
//     res.status(201).json(newPerson)
// });

// router.get('/', (req, res) => {
//     res.json(persons)
// });

export default router;