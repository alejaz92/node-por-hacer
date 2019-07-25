const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completada o pendiente a la tarea'
        }
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
};