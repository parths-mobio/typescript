// import mysql from 'mysql'
//  const connection=mysql.createPool({
 
// host:'localhost',
//  user:'root',
//  password:'',
//  database:'test',
 

// });

// module.exports=connection;


import { createPool, Pool } from 'mysql'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        database: 'test',
        password:'',
        connectionLimit: 10
    });
    return connection;
}