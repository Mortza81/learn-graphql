const express = require("express");
const { createSchema, createYoga } = require("graphql-yoga");
const { buildSchema } = require("graphql");
const { ruruHTML } = require("ruru/server");
const {schema}=require('./src/schema')

const app = express();

const yoga = createYoga({
    schema
})

app.all(
  "/graphql",yoga
);
app.get("/", (req, res) => {
  res.end(ruruHTML({ endpoint: "/graphql" }));
});
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
