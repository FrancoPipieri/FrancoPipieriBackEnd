import { model, Schema } from "mongoose";

const productSchema = Schema({
    nombre: { type: String },
    thumbnail: { type: String },
    precio: { type: Number },
});

export const Product = model("products", productSchema);