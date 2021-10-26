const fs = require('fs');
const colors = require('colors');

//Función crearArchivo
const crearArchivo = async (base = 5, listar = false, hasta = 10) =>{
    try{

        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            //console.log(`${base} x ${i} = ${base*i}`);
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if(listar){
            //Impresión en consola de la tabla del 5
            console.log('========================='.green);
            console.log(`    Tabla del ${colors.blue(base)}`.green);
            console.log('========================='.green);
            //
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;

        /*
        fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
            if(err) throw err;
            console.log(`tabla-${base}.txt creado`);
        });
        */
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}