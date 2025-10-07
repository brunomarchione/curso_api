const express = require('express');
const router = express.Router();
const cursoController = require('../controller/cursoControllers');

router.get('/cursos', cursoController.getAllCursos);

router.get('/curos/:id', cursoController.getCursoById);

router.post('/cursos', cursoController.creatCurso);

module.exports = router;