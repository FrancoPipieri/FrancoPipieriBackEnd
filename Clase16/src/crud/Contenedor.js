import knex from "knex";

class Contenedor {
    constructor(config, table) {
        this.database = knex(config);
        this.table = table;
    }

    async save(document) {
        this.database(this.table).insert(document)
        .then(()=>{
            console.log("Producto ingresado");    
        })
        .catch((err)=>console.log(err))
        // try {
        //     console.log(this.table)
        //     console.log(document)
        //     this.database(this.table).insert(document);
        //     console.log("producto ingresado");

        // } catch (err) {
        //     console.log(err);
        //     this.dataBase.destroy();
        // }
    }

    async replace(id, document) {
        try {
            const response = await this.database(this.table)
                .where({ id })
                .update(document);

            return response;
        } catch (err) {
            throw new Error(`error: documento no encontrado`);
        }
    }

    async getById(id) {
        try {
            const response = await this.database
                .from(this.table)
                .select("*")
                .where({ id });

            return response;
        } catch (err) {
            throw new Error(`No se encuentra el documento con id: ${err}`);
        }
    }

    async getAll() {
        try {
            const response = await this.database.from(this.table).select("*");
            return response;
        } catch {
            return { error: "producto no encontrado" };
        }
    }

    async deleteById(id) {
        try {
            await this.database(this.table).del().where({ id });

            console.log('producto borrado');
        } catch (err) {
            throw new Error(`Error al borrar data: ${err}`);
        }
    }

    async deleteAll() {
        try {
            await this.database(this.table).del();
        } catch (err) {
            throw new Error(`Error al escribir: ${err}`);
        }
    }

    async createTable(){
        this.database.schema.dropTableIfExists(this.table)
        this.database.schema.createTable(this.table, table => {
            table.string("username", 50).notNullable();
            table.string("message", 100).notNullable();
            table.integer("time").notNullable();
            table.increments("id").primary()
    })
    .then(()=>{
        console.log("Se creo la Tabla Correctamente")
    })
    .catch((err) =>{
        console.log(err)
    })
    .finally(()=>{
        this.database.destroy()
    })
}
}




export default Contenedor;