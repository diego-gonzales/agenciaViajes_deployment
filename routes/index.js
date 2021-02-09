import express from "express";
import { paginaInicio } from "../controllers/inicio.controller.js";
import { paginaNosotros } from "../controllers/nosotros.controller.js";
import { paginaViajes } from "../controllers/viajes.controller.js";
import { paginaTestimoniales } from "../controllers/testimoniales.controller.js";
import { paginaDetalleViaje } from "../controllers/detalleviaje.controller.js";
import { postTestimonial } from "../controllers/testimonial.controller.js";


const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slugcito', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', postTestimonial);

export default router;