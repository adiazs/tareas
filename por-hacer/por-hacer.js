const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('error');
    });

}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const obtenerListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizarTarea = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrarTarea = (descripcion) => {
    cargarDB();


    try {
        let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
        if (index >= 0) {
            listadoPorHacer.splice(index, 1);
            guardarDB();
            return index;
        }
    } catch (error) {
        return error;
    }
}

module.exports = {
    crear,
    guardarDB,
    obtenerListado,
    actualizarTarea,
    borrarTarea
}