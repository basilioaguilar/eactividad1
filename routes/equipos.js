const express = require('express');
const router = express.Router();
const equiposController = require('../controllers/equipos');


router.get('/', equiposController.listaEquipos);


router.get('/:id', equiposController.detalleEquipo);


router.get('/agregar', equiposController.formAgregarEquipo);
router.post('/agregar', equiposController.agregarEquipo);

router.get('/editar/:id', equiposController.formEditarEquipo);
router.put('/editar/:id', equiposController.editarEquipo);


router.delete('/:id', equiposController.eliminarEquipo);

module.exports = router;
