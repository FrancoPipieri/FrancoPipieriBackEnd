const fs = require('fs')

class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
        this.productos = [];
    }

    //GUARDAR PRODUCTO NUEVO

    async save(object) {

        let newId
        
        const response = await this.getAll()

        //PRODUCTO NO SE REPITE

        if(response.length > 1 && response.some((el) => el.title === object.title)){
            console.log("el producto ya se encuentra en el catalogo");
            return
        }
        else if(response.length === 0) {
            newId = 1
        }
        else {
            newId = response[response.length - 1].id + 1
        }

        const newObject = {...object, id: newId};

        response.push(newObject);
        
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(response, null, 2))
            return newId
        }
        catch(err) {
            throw new Error(`Error al guardar un nuevo objeto: ${err}`)
        }
    }

    //OBTENEMOS PRODUCTO BUSCADO MEDIANTE EL ID

    async getById(id) {
        try {
            const response = await this.getAll()
            return response.find(item => item.id === id) ?? null
        }
        catch(err) {
            throw new Error(`No se encuentra el producto: ${err}`)
        }
    }

    //OBTENGO TODOS LOS PRODUCTOS O UN ARRAY VACIO

    async getAll() {
        try {
            const response = await fs.promises.readFile(this.archivo, 'utf-8')
            return JSON.parse(response)
        }
        catch(err) {
            return this.productos;
        }
    }

    async deleteById(id) {
            const response = await this.getAll();
            const newResponse = response.filter((item) => item.id !== id)
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(newResponse, null, 2))
            console.log('producto borrado');
        }
        catch(err) {
            throw new Error(`Error al borrar data: ${err}`)
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]))
        }
        catch(err) {
            throw new Error(`Error al escribir: ${err}`)
        }
    }
}
const product = new Contenedor('./productos.txt');
const item1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

const item2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}
const item3 ={
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

const item4 = {
    title: "Escuadra",
    price: 12343,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}

const test = async () => {
//Obtengo los datos del Array
const datos = await product.getAll()
console.log(datos);

// Guardo Productos
const save1 = await product.save(item1)
console.log(save1);
const save2 = await product.save(item2)
console.log(save2);
const save3 = await product.save(item3)
console.log(save3);

const datos2 = await product.getAll()
console.log(datos2);

//Obtengo prodycto especifico por ID
let busca1 = await product.getById(1)
console.log(busca1);
let busca2 = await product.getById(10)
console.log(busca2)

//Borro un Producto
await product.deleteById(1)
let delete1 = await product.getAll()
console.log(delete1)

//Borro todos los Productos
await product.deleteAll()

let delete2 = await product.getAll()
console.log(delete2) 
}

test()