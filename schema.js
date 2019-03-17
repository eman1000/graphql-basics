import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Email {
        email: String
    }
    type Person {
        id: ID
        firstName: String !
        lastName: String
        gender: String
        emails: [Email]
    }
    type Query {
        person: Person
    }
`)

export default schema;