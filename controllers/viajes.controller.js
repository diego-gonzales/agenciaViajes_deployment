import { Viaje } from "../models/Viajes.model.js";


export const paginaViajes = async (req, res) => {

    try {
        // Primero se debe consultar la base de datos antes de renderrizar la vista
        const viajecitos = await Viaje.findAll();
    
        // console.log(viajecitos)
    
        res.render('viajes', {
            pagina: 'Próximos Viajes', // variables que se envian a la vista viajes
            viajecitos // Object Literal Enhancement
        });
        
    } catch (error) {
        console.log(error);
    };
};