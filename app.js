const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {

    case "create": 
        let tarea = porHacer.create( argv.name );
        console.log(tarea);
    break;
    
    case "list":
        listado = porHacer.getListado();

        for ( let tarea of listado) {

            console.log('========'.green, 'Por Hacer'.red, '========'.green);
            console.log(tarea.name.blue);
            console.log('Estado:', tarea.completed);
            console.log('==========================='.green);
        };

    break;

    case "update":
        const actualizado = porHacer.update(argv.name, argv.completed);
        console.log(actualizado);
    break;

    case "delete":
        const borrado = porHacer.deleteTarea(argv.name);
        console.log(borrado);
    break;

    default:
        console.log("Comando no reconocido");
}