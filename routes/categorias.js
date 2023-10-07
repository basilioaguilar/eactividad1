const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias');

// Página de lista de categorías
router.get('/', categoriasController.listaCategorias);

// Página de detalle de una categoría
router.get('/:id', categoriasController.detalleCategoria);

// Página de agregar categoría
router.get('/agregar', categoriasController.formAgregarCategoria);
router.post('/agregar', categoriasController.agregarCategoria);

// Página de editar categoría
router.get('/editar/:id', categoriasController.formEditarCategoria);
router.put('/editar/:id', categoriasController.editarCategoria);

// Eliminar categoría
router.delete('/:id', categoriasController.eliminarCategoria);

module.exports = router;
