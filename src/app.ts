import './util/module-alias';
import bodyParser from 'body-parser';
import express from 'express'
import { Server } from 'http'
import route from './routes'

export class SetApplication {
    private server?: Server; //null ou não
    
    constructor( private port : number = 3000, public app = express() ) {}

    public init(): void {
        this.setupExpress();
        this.setupRoutes();
    }

    private setupRoutes(): void {
       this.app.use(route);
    }
    
    private setupExpress(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    public start(): void {
        this.server = this.app.listen(this.port, () => {
            console.log(`Servidor funcionando na porta ${this.port}`)
        })
    }
}
