let cursos = [
    { id: 1, nome: 'Análise e Desenvolvimento de Sistemas', duracao: 6 },
    { id: 2, nome: 'Manufatura Avançada', duracao: 5 },
    { id: 3, nome: 'Sistemas Biomédicos', duracao: 6 }
];

let proximoId = 4;

function findAll() {
    return cursos;
}

function findOne(id) {
    return cursos.find(curso => curso.id === id);
}

function create(novoCurso) {
    novoCurso.id = proximoId++;
    cursos.push(novoCurso);
    return novoCurso;
}

module.exports = {
    findAll,
    findOne,
    create
};