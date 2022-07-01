const fs = require("fs");
// const colors = require("colors");

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
      
        if (err) throw new Error('No se pudo grabar', err);
      });
}

const cargarDB = () => {

    try {
        
        listadoPorHacer = require("../db/data.json");

    } catch (error) {
        listadoPorHacer = [];
    }
}

let create = name => {

    cargarDB();

    let porHacer = {
        name,
        completed: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const update = (name, completed) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.name === name);

    if (index >= 0) {
        listadoPorHacer[index].completed = completed;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const deleteTarea = (name) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.name !== name);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    create,
    getListado,
    update,
    deleteTarea
}