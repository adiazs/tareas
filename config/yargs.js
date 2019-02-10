const tarea = {
    descripcion: {
        demand: true,
        alias: 'd',
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crearTarea', 'Crea una nueva tarea', tarea)
    //.command('listarTareas', 'Lista todas las tareas', tarea)
    .command('actualizarTarea', 'Actualiza una tarea', tarea)
    .command('borrarTarea', 'Elimina una tarea', tarea)
    .help()
    .argv;

module.exports = {
    argv
}