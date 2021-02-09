import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({path: 'variables.env'});

const database = new Sequelize( process.env.DB_NAME, process.env.DB_USER, '', {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});


export default database; 

// Hacemos todo esto porque sino tendriamos que colocar todo este codigo en el index.js principal, esto para que este más ordenado