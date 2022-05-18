import mysql from 'mysql2'
import dados from './senhaDB';

const param = {
    user: dados.user,
    password: dados.password,
    host: dados.host,
    database: dados.database
}

const Connect = async () => new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(param);

    connection.connect((error) => {
        if(error){
            reject(error);
            return;
        }

        resolve(connection)
    });
});

const Query = async (connection: mysql.Connection, query: string) => new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
        if(error){
            reject(error)
            return
        }

        resolve(result)
    })
})

export {Connect, Query}