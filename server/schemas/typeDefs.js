const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
    }

    type Product {
        product_name: String!
        stock: Int!
        description: String
        purchased: Float
        price: Float
        condition: String
        shipping_properties: Shipping
        tag: Tag
    }

    type Shipping {
        height: Float
        width: Float
        depth: Float
        weight: Float
    }

    type Tag {
        tag_name: String!
    }

    type Collection {
        collection_name: String!
        products: [Product]
    }

    type Auth {
        token: ID!
        user: User
    }

`;

module.exports = typeDefs;
