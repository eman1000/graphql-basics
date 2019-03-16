import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Person {
        id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
    }
    type Query {
        person: Person
    }
`)

export default schema;