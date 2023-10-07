class EquiposController {
    constructor() {
      // En este ejemplo, usamos un objeto para almacenar los equipos.
      this.equipos = {};
      this.idContador = 1;
    }
  
    listaEquipos(req, res) {
      const equipos = Object.values(this.equipos);
      res.render('equipos/lista', { equipos });
    }
  
    detalleEquipo(req, res) {
      const { id } = req.params;
      const equipo = this.equipos[id];
      if (!equipo) {
        return res.status(404).send('Equipo no encontrado');
      }
      res.render('equipos/detalle', { equipo });
    }
  
    formAgregarEquipo(req, res) {
      res.render('equipos/agregar');
    }
  
    agregarEquipo(req, res) {
      const { nombre, descripcion } = req.body;
      const id = this.idContador.toString();
      this.equipos[id] = { id, nombre, descripcion };
      this.idContador++;
      res.redirect('/equipos');
    }
  
    formEditarEquipo(req, res) {
      const { id } = req.params;
      const equipo = this.equipos[id];
      if (!equipo) {
        return res.status(404).send('Equipo no encontrado');
      }
      res.render('equipos/editar', { equipo });
    }
  
    editarEquipo(req, res) {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      const equipo = this.equipos[id];
      if (!equipo) {
        return res.status(404).send('Equipo no encontrado');
      }
      equipo.nombre = nombre;
      equipo.descripcion = descripcion;
      res.redirect(`/equipos/${id}`);
    }
  
    eliminarEquipo(req, res) {
      const { id } = req.params;
      delete this.equipos[id];
      res.redirect('/equipos');
    }
  }
  
  module.exports = new EquiposController();
  