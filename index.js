import express from "express";
import graphqlHTTP from "express-graphql";
import crypto from "crypto";
import schema from "./schema";

const app = express();

app.get("/", (req, res)=>{
    res.send("I love Graphql");
});


class Person {
    constructor(id, {firstName, lastName, gender, email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}

const personDB = {};
const resolver = {
    person: ()=> {
        return {
            "id": 3434343434,
            "firstName":"Eman",
            "lastName":"Musemwa",
            "gender":"Male",
            "email":"emancodeinfo@gmail.com"
        }
    },
    createAPerson:({input})=>{
        let id = crypto.randomBytes(10).toString("hex");
        personDB[id] = input;
        return new Person(id, input);
    }
};

app.use("/graphql", graphqlHTTP({
    schema:schema,
    rootValue:resolver,
    graphiql: true
}))

app.listen(8080, ()=> console.log("Running on http://localhost:8080/graphql"))