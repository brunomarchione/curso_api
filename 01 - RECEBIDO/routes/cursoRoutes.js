const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController');

router.get('/cursos', cursoController.getAllCursos);

router.get('/cursos/:id', cursoController.getCursoById);

router.post('/cursos', cursoController.createCurso);

module.exports = router;