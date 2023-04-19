import { model, Schema } from "mongoose";

const cartSchema = Schema({
    productos: { type: Schema.Types.Array },
    username: { type: String },
});

export const Carts = model("cart", cartSchema);