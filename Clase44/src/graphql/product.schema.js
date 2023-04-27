import { buildSchema } from "graphql";

const schema = buildSchema(`
    input ProductInput {
        nombre: String,
        thumbnail: String,
        precio: Int,
    }
    type Product {
        id: ID!,
        nombre: String,
        thumbnail: String,
        precio: Int,
    }
    type Query {
        getProduct(id: ID!): Product
    }
    type Mutation {
        create(data: ProductInput): Product,
        update(id: ID!, data: ProductInput): Product,
        deleteDocument(id: ID!): Product,
    }
`);

export default schema;