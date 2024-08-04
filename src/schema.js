const { createSchema, createYoga } = require("graphql-yoga");
const lodash =require('lodash')
const userSchema= /* GraphQL */`
    type User{
    id:Int
    name:String
    age:Int
  }
  type Mutation {
    createUser(user:createUserInput!):User
  }
  input createUserInput{
    name:String!
    age:Int!
  }
  `
const queries= /* GraphQL */ `
type Query {
  hello: String
  user:User
}
`
const userResolvers={
    Query:{
        user:()=>{
            return {
                id:1,
                name:'morteza'
            }
        }
    },
    User:{
        name:(obj)=>{
            return obj.name.toUpperCase()
        }
    },
    Mutation:{
        createUser(_,arg){
            console.log(arg);
            return arg.user
        }
    }
}
const resolvers={
      Query: {
        hello: () => 'Hello from Yoga!',
      }
    }
exports.schema=createSchema({
    typeDefs:[queries,userSchema],
    resolvers:lodash.merge(resolvers,userResolvers)
})