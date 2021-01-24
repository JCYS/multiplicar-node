const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar.', opts)
    .command('crear', 'Crear un archivo con la tabla de multiplicar con la base y el limite.', opts)
    .help()
    .argv;

module.exports = {
    argv
}