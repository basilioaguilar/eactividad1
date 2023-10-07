class CategoriasController {
    constructor() {
      // En este ejemplo, usamos un objeto para almacenar las categorías.
      this.categorias = {};
      this.idContador = 1;
    }
  
    listaCategorias(req, res) {
      const categorias = Object.values(this.categorias);
      res.render('categorias/lista', { categorias });
    }
  
    detalleCategoria(req, res) {
      const { id } = req.params;
      const categoria = this.categorias[id];
      if (!categoria) {
        return res.status(404).send('Categoría no encontrada');
      }
      res.render('categorias/detalle', { categoria });
    }
  
    formAgregarCategoria(req, res) {
      res.render('categorias/agregar');
    }
  
    agregarCategoria(req, res) {
      const { nombre, descripcion } = req.body;
      const id = this.idContador.toString();
      this.categorias[id] = { id, nombre, descripcion };
      this.idContador++;
      res.redirect('/categorias');
    }
  
    formEditarCategoria(req, res) {
      const { id } = req.params;
      const categoria = this.categorias[id];
      if (!categoria) {
        return res.status(404).send('Categoría no encontrada');
      }
      res.render('categorias/editar', { categoria });
    }
  
    editarCategoria(req, res) {
      const { id } = req.params;
      const { nombre, descripcion } = req.body;
      const categoria = this.categorias[id];
      if (!categoria) {
        return res.status(404).send('Categoría no encontrada');
      }
      categoria.nombre = nombre;
      categoria.descripcion = descripcion;
      res.redirect(`/categorias/${id}`);
    }
  
    eliminarCategoria(req, res) {
      const { id } = req.params;
      delete this.categorias[id];
      res.redirect('/categorias');
    }
  }
  
  module.exports = new CategoriasController();
  