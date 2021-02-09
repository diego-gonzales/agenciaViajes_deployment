import { Viaje } from "../models/Viajes.model.js";


export const paginaDetalleViaje = async ( req, res ) => {
    // console.log(req.params.slugcito);

    const { slugcito } = req.params; // destructuring. COn esto obtenemos el valor del parametro que hay en la URL

    try {
        const resultado = await Viaje.findOne({
            where: {slug: slugcito}
        });

        res.render('detalle-viaje', {
            pagina: 'Información de Viaje',
            resultado
        })

    } catch (error) {
        console.log(error)
    };

};