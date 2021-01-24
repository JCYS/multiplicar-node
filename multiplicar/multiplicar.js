const fs = require('fs')
var colors = require('colors');


let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}`.green);
        //data += `${ base } * ${ i } = ${base * i}\n`;
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base}, no es un numero.`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${base * i}\n`;
        }
        fs.writeFile(`tablas/Tabla del N° ${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla del N° ${ base }, creada !!`);
        });
    });
};
module.exports = {
    crearArchivo,
    listarTabla
}