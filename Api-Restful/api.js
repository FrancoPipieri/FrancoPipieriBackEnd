import fs from 'fs'

class Contenedor{

    constructor(archivo){
        this.archivo = archivo;
        this.productos = [];
    }

    // GUARDAR PRODUCTO NUEVO
    async save(title, price, thumbnail){
        let newId;
        const response = await this.getAll();

        if (response.length === 0) {
            newId = 1;
        } else {
            newId = response[response.length - 1].id + 1;
        }
        price = Number(price);
        const newObject = {title, price, thumbnail, id: newId};

        response.push(newObject);

        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(response, null, 2));
            return newObject;
        } catch (error) {
            throw new Error(`Error al Guardar un Objeto: ${error}.`);
        }
    }

    // BUSCO Y REEMPLAZO UN PRODUCTO
    async replace(id, producto){
        const response = await this.getAll();
        const oldProduct = response.findIndex(item => item.id === id);
        if (oldProduct === -1) {
            return {error: "Producto no encontrado."}
        }
        response.splice(oldProduct, 1, { ...producto, id });
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(response, null, 2))
        } catch (error) {
            throw new Error(`Error: Producto no encontrado.`)
        }
    }

    // OBTENGO PRODUCTO POR ID
    async getById(id){
        try {
            const response = await this.getAll()
            return response.find(item => item.id === id) ?? {error: "Producto no encontrado."};
        } catch (error) {
            throw new Error(`No se encuentra el Producto: ${error}`);
        }
    }

    // OBTENGO TODOS LOS PRODUCTOS
    async getAll(){
        try {
            const response = await fs.promises.readFile(this.archivo,'utf-8')
            return JSON.parse(response)
        } catch (error) {
            return {error:"Productos no encontrados."}
        }
    }

    // BORRAR PRODUCTO POR ID
    async deleteById(id){
        const response = await this.getAll();
        const newResponse = response.filter((item) => item.id !== id);
        if(newResponse.length === response.length){
            return{error: "Producto no encontrado."}
        }
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(newResponse, null, 2))
            console.log("Producto Borrado")
        } catch (error) {
            throw new Error(`Error al borrar datos: ${error}`)
        }
    }

    // BORRAR TODOS LOS PRODUCTOS
    async deleteAll(){
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify([]))
        } catch (error) {
            throw new Error(`Error al escribir: ${error}`)
        }
    }
}

export default Contenedor;