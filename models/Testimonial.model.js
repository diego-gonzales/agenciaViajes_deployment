import Sequelize from 'sequelize';
import database from '../config/database.js';

export const Testimonial = database.define('testimoniales', { // nombre de la tabla de la DB, con un objeto que contiene sus campos, tal cual de la db
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});