import { Testimonial } from "../models/testimoniales.js";

const guardarTestimonial = async (req, res) => {
  //validar formulario
  const errores = [];
  const { nombre, correo, mensaje } = req.body;
  if (nombre.trim() === "") {
    //trim quita los espacios en blanco por si existen
    errores.push({ mensaje: "El nombre esta vacio" });
  }
  if (correo.trim() === "") {
    //trim quita los espacios en blanco por si existen
    errores.push({ mensaje: "El correo esta vacio" });
  }
  if (mensaje.trim() === "") {
    //trim quita los espacios en blanco por si existen
    errores.push({ mensaje: "El mensaje esta vacio" });
  }
  console.log(JSON.stringify(req.body));
  console.log(errores);
  if (errores.length > 0) {
    const testimoniales = await Testimonial.findAll();
    //mostrar en la vista de testimoniales si existe un error
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  }else{
   //guarda en la base de datos 
  try {
    await Testimonial.create({
        nombre,
        correo,
        mensaje
    })  
    res.redirect('testimoniales')


  } catch (error) {
      console.log(error)
  }


  }
  //console.log(res.body);
};

export { guardarTestimonial };
