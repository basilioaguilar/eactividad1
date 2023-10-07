class PatrocinantesController {
    constructor() {
      // En este ejemplo, usamos un objeto para almacenar los patrocinantes.
      this.patrocinantes = {};
      this.idContador = 1;
    }
  
    listaPatrocinantes(req, res) {
      const patrocinantes = Object.values(this.patrocinantes);
      res.render('patrocinantes/lista', { patrocinantes });
    }
  
    detallePatrocinante(req, res) {
      const { id } = req.params;
      const patrocinante = this.patrocinantes[id];
      if (!patrocinante) {
        return res.status(404).send('Patrocinante no encontrado');
      }
      res.render('patrocinantes/detalle', { patrocinante });
    }
  
    formAgregarPatrocinante(req, res) {
      res.render('patrocinantes/agregar');
    }
  
    agregarPatrocinante(req, res) {
      const { nombre, descripcion } = req.body;
      const id = this.idContador.toString();
      this.patrocinantes[id] = { id, nombre, descripcion };
      this.idContador++;
      res.redirect('/patrocinantes');
    }
  
    formEditarPatrocinante(req, res) {
      const { id } = req.params;
      const patrocinante = this.patrocinantes[id];
      if (!patrocinante) {
        return res.status(404).send('Patrocinante no encontrado');
      }
      res.render('patrocinantes/editar', { patrocinante });
    }
  
    editarPatrocinante(req, res) {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      const patrocinante = this.patrocinantes[id];
      if (!patrocinante) {
        return res.status(404).send('Patrocinante no encontrado');
      }
      patrocinante.nombre = nombre;
      patrocinante.descripcion = descripcion;
      res.redirect(`/patrocinantes/${id}`);
    }
  
    eliminarPatrocinante(req, res) {
      const { id } = req.params;
      delete this.patrocinantes[id];
      res.redirect('/patrocinantes');
    }
  }
  
  module.exports = new PatrocinantesController();
  