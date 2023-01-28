import ProductosMongo from "./productos/ProductosDaoMongoDb.js"
import CarritosMongo from "./carritos/CarritosDaoMongoDb.js"
import ProductosFirebase from "./productos/ProductosDaoFirebase.js"
import CarritosFirebase from "./carritos/CarritosDaoFirebase.js"
import ProductosFileSystem from "./productos/ProductosDaoFileSystem.js"
import CarritosFileSystem from "./carritos/CarritosDaoFileSystem.js"

const mongoProds = new ProductosMongo();
const mongoCarts = new CarritosMongo();
const firebaseProds = new ProductosFirebase();
const firebaseCarts = new CarritosFirebase();
const filesystemProds = new ProductosFileSystem();
const filesystemCarts = new CarritosFileSystem();

export {mongoProds, mongoCarts, firebaseProds, firebaseCarts, filesystemProds, filesystemCarts}