const argv = require('./config/yargs').argv;
const colores = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crearTarea':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listarTareas':
        let listado = porHacer.obtenerListado();
        for (const tarea of listado) {
            console.log('=====Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('=====================')
        }

        break;

    case 'actualizar':
        //console.log(argv.descripcion);
        let actualizado = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrarTarea':
        let borrado = porHacer.borrarTarea(argv.descripcion);
        console.log(`Se ha eliminado la tarea ${borrado}`);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}