import database from "../db/index.js";
import knex from "knex";

const insertProducts = async () => {
    try {
        const products = [
            {
                "title": "Escuadra",
                "price": 123.45,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
                "id": 1
            },
            {
                "title": "Calculadora",
                "price": 234.56,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
                "id": 2
            },
            {
                "title": "Computadora",
                "price": 345.67,
                "thumbnail": "https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/laptop-with-code-512.png",
                "id": 3
            },
            {
                "title": "Teclado",
                "price": 900,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/delta/256/Keyboard.png",
                "id": 4
            },
            {
                "title": "Regla",
                "price": 345.67,
                "thumbnail": "https://cdn3.iconfinder.com/data/icons/construction-138/200/Ruler-256.png",
                "id": 5
            }
        ];
        await database("products").insert(products);
        // knex('products').insert(products)
        //     .then(() => console.log('table created'))
        //     .catch((error) => { console.log(error); throw error })
        //     .finally(() => {
        //         knex.destroy()
        //     });


        console.log("products inserted!");

        database.destroy();
    } catch (err) {
        console.log(err);
        database.destroy();
    }
};

insertProducts();