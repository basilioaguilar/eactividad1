const express = require('express');
const router = express.Router();
const patrocinantesController = require('../controllers/patrocinantes');

// Página de lista de patrocinantes
router.get('/', patrocinantesController.listaPatrocinantes);

// Página de detalle de un patrocinante
router.get('/:id', patrocinantesController.detallePatrocinante);

// Página de agregar patrocinante
router.get('/agregar', patrocinantesController.formAgregarPatrocinante);
router.post('/agregar', patrocinantesController.agregarPatrocinante);

// Página de editar patrocinante
router.get('/editar/:id', patrocinantesController.formEditarPatrocinante);
router.put('/editar/:id', patrocinantesController.editarPatrocinante);

// Eliminar patrocinante
router.delete('/:id', patrocinantesController.eliminarPatrocinante);

module.exports = router;
