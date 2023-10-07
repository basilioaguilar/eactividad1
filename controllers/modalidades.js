class ModalidadesController {
    constructor() {
      // Utilizamos un objeto para almacenar las modalidades.
      this.modalidades = {};
      this.idContador = 1;
    }
  
    // Método para mostrar la lista de modalidades
    listaModalidades(req, res) {
      const modalidades = Object.values(this.modalidades);
      res.render('modalidades/lista', { modalidades });
    }
  
    // Método para mostrar los detalles de una modalidad
    detalleModalidad(req, res) {
      const { id } = req.params;
      const modalidad = this.modalidades[id];
      if (!modalidad) {
        return res.status(404).send('Modalidad no encontrada');
      }
      res.render('modalidades/detalle', { modalidad });
    }
  
    // Método para mostrar el formulario de agregar modalidad
    formAgregarModalidad(req, res) {
      res.render('modalidades/agregar');
    }
  
    // Método para agregar una nueva modalidad
    agregarModalidad(req, res) {
      const { nombre, descripcion } = req.body;
      const id = this.idContador++;
      this.modalidades[id] = { id, nombre, descripcion };
      res.redirect('/modalidades');
    }
  
    // Método para mostrar el formulario de editar modalidad
    formEditarModalidad(req, res) {
      const { id } = req.params;
      const modalidad = this.modalidades[id];
      if (!modalidad) {
        return res.status(404).send('Modalidad no encontrada');
      }
      res.render('modalidades/editar', { modalidad });
    }
  
    // Método para editar una modalidad existente
    editarModalidad(req, res) {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      const modalidad = this.modalidades[id];
      if (!modalidad) {
        return res.status(404).send('Modalidad no encontrada');
      }
      modalidad.nombre = nombre;
      modalidad.descripcion = descripcion;
      res.redirect('/modalidades');
    }
  
    // Método para eliminar una modalidad existente
    eliminarModalidad(req, res) {
      const { id } = req.params;
      if (!this.modalidades[id]) {
        return res.status(404).send('Modalidad no encontrada');
      }
      delete this.modalidades[id];
      res.redirect('/modalidades');
    }
  }
  
  module.exports = new ModalidadesController();
  