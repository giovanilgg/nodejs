//pagina inicio
import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const paginaInicio = async (req, res) => {
  try {
    //ejecutar dos consultas en de la bd en paralelo

    const promiseDB=[];
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))

    const resultado= await Promise.all(promiseDB);
   
    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes:resultado[0],
      testimoniales:resultado[1]
    });
  } catch (error) {
    console.log(error)
  }
};
const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};
const paginaViajes = async (req, res) => {
  //consultar la bd
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Viajes",
    viajes,
  });
};
//muestra viaje a detalel
const paginaDetalleViajes = async (req, res) => {
  //consultar la bd
  const { viaje } = req.params;

  try {
    const viajes = await Viaje.findOne({ where: { slug: viaje } });
    res.render("viaje", {
      pagina: "Informacion viaje",
      viajes,
    });
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
};
const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViajes,
};
//pagina nosotros

//pagin
