import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express();

app.get("/", (req, res)=>{
    res.send("I love Graphql");
});

const resolver = {person: ()=> {
    return {
        "id": 3434343434,
        "firstName":"Eman",
        "lastName":"Musemwa",
        "gender":"Male",
        "emails":[{
            "email":"emancodeinfo@gmail.com"
        },{
            "email":"test@gmail.com"
        }]
    }
}};

app.use("/graphql", graphqlHTTP({
    schema:schema,
    rootValue:resolver,
    graphiql: true
}))

app.listen(8080, ()=> console.log("Running on http://localhost:8080/graphql"))