import { Testimonial } from "../models/Testimonial.model.js";


export const paginaTestimoniales = async (req, res) => {

    // obtenemos todos los testimoniales de la base de datos
    try {
        const testimonialitos = await Testimonial.findAll();

        // console.log(testimonialitos);

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimonialitos
        });
        
    } catch (error) {
        console.log(error);
    };

};