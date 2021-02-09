import { Testimonial } from "../models/Testimonial.model.js";


export const postTestimonial = async ( req, res ) => {

    // validar form
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if ( nombre.trim() === '' ) {
        errores.push( {msj: 'El nombre está vacío'} )
    };
    if ( correo.trim() === '' ) {
        errores.push( {msj: 'El correo está vacío'} )
    };
    if ( mensaje.trim() === '' ) {
        errores.push( {msj: 'El mensaje está vacío'} )
    };


    if ( errores.length > 0) {

        // tambien obtenemos los testimoniales aqui para que cuando se muestren los errores haya tambien los testimonialitos
        // que se necesitan en la vista, de lo contrario saldria error en la pagina
        const testimonialitos = await Testimonial.findAll();
        // Mostrar la misma vista de testimmoniales con los errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje, // le pasamos estos valores para que al momento de que valide el form, se mantenga los datos si es que hay error en un campo
            testimonialitos
        });

    } else {
        // Si pasa la validacion entonces lo almacenamos en la DB
        try {
            await Testimonial.create({
                nombre, // Object Literal Enhancement
                correo,
                mensaje
            });

            res.redirect('/testimoniales');

        } catch (error) {
            console.log(error)
        };
    };

    // console.log(errores);
};