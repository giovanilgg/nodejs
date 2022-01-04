import express from "express";
import { paginaInicio,paginaNosotros ,paginaViajes,paginaTestimoniales,paginaDetalleViajes} from "../controllers/paginasControllers.js"
import { guardarTestimonial } from "../controllers/testimonialCntrollers.js";
const routing = express.Router();

//routing conectando con los controladores y las vistas 
routing.get("/", paginaInicio);
routing.get("/nosotros", paginaNosotros);
routing.get("/viajes", paginaViajes);
routing.get("/viajes/:viaje", paginaDetalleViajes); //crea un comodin para consultar cierta informacion 
routing.get("/testimoniales", paginaTestimoniales);
routing.post("/testimoniales",guardarTestimonial);

export default routing;
