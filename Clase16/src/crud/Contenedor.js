import knex from "knex";

class Contenedor {

    constructor(config, table){
        this.config = config;
        this.table = table;
    };

    async save(object) {
        const dbConnect = knex(this.config);
        try {
            await dbConnect(this.table).insert(object);
            dbConnect.destroy();
        } catch (e) {
            console.log(e);
            dbConnect.destroy()
        }
    };

    async getAll() {
        const dbConnect = knex(this.config);
        try {
            const products = await dbConnect.from(this.table).select("*");
            dbConnect.destroy();
            return products;
        } catch (e) {
            console.log(e);
            dbConnect.destroy();
        }
    }
    async createTable(){
        const dbConnect = knex(this.config);

        if(this.table == "chat"){
        dbConnect.schema.dropTableIfExists(this.table)
        dbConnect.schema.createTable(this.table, table => {
            table.string("username", 50).notNullable();
            table.string("message", 100).notNullable();
            table.integer("time").notNullable();
            table.increments("id").primary()
            })
            .then(()=>console.log("Se creo la Tabla Correctamente"))
            .catch((err) => console.log(err))
            .finally(()=>dbConnect.destroy())

        }else{
            dbConnect.schema.dropTableIfExists(this.table)
            dbConnect.schema.createTable(this.table, table => {
                table.string("title", 50).notNullable();
                table.string("thumbnail", 100).notNullable();
                table.integer("price").notNullable();
                table.increments("id").primary()
                })
                .then(()=>{console.log("Se creo la Tabla Correctamente")})
                .catch((err) =>{console.log(err)})
                .finally(()=>{dbConnect.destroy()})}
    }
};



export default Contenedor;