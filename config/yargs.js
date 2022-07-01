const name = {
    alias: 'n',
    demand: true
  }

const completed = {
  alias: 'c',
  default: true,
  description: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
  .command('create', 'Crea una nueva tarea', {
    name,
    description: {
        alias: 'd',
        description: 'Descripción de la tarea por hacer'
    },
    time: {
        alias: 't',
        date: Date.now()
    }
  }) 
  .command('update', 'Actualizar todas las tareas por hacer', {
    name, completed
  })
  .command('delete', 'Borrar tarea', {
    name
  })
  .help()
  .argv;


module.exports = {
    argv
}