const express = require('express');
const router = express.Router();
const modalidadesController = require('../controllers/modalidades');

// Página de lista de modalidades
router.get('/', modalidadesController.listaModalidades);

// Página de detalle de una modalidad
router.get('/:id', modalidadesController.detalleModalidad);

// Página de agregar modalidad
router.get('/agregar', modalidadesController.formAgregarModalidad);
router.post('/agregar', modalidadesController.agregarModalidad);

// Página de editar modalidad
router.get('/editar/:id', modalidadesController.formEditarModalidad);
router.put('/editar/:id', modalidadesController.editarModalidad);

// Eliminar modalidad
router.delete('/:id', modalidadesController.eliminarModalidad);

module.exports = router;
