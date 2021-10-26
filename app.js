const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base);

//const [,,arg3='base=7'] = process.argv
//const [,base=7] = arg3.split('=');
//console.log(base);


//const base = 2;


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));
