const Curso = require('../models/cursoModel');

exports.getAllCursos = (req, res) => {
    const cursos = Curso.findAll();
    res.json(cursos);
};

exports.getCursoById = (req, res) => {
    const id = parseInt(req.params.id);
    const curso = Curso.findOne(id);
    if (!curso) return res.status(404).json({ message: 'Curso não encontrado' });
    res.status(200).json(curso);
};

exports.createCurso = (req, res) => {
    const novoCurso = req.body;
    const cursoCriado = Curso.create(novoCurso);
    res.status(201).json(cursoCriado); s
}
