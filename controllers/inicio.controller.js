import { Viaje } from "../models/Viajes.model.js";
import { Testimonial } from "../models/Testimonial.model.js";

export const paginaInicio = async (req, res) => {
    
    const promisesDB = [];
    promisesDB.push( Viaje.findAll({limit: 3}) );
    promisesDB.push( Testimonial.findAll({limit: 3}) );

    try {
        const resultado = await Promise.all( promisesDB ); // promise.all recibe un array de promesas, las ejecuta al mismo tiempo

        res.render('inicio', { // render a diferencia de send, puede mostrar template engines
            pagina: 'Inicio', // variable que se envia a la vista inicio
            clase: 'home', // le paso como varriable el nombre de una clase, estará solo disponible en la pagina de inicio
            viajecitos: resultado[0],
            testimonialitos: resultado[1]
        });

    } catch (error) {
        console.log(error)
    };
    
};