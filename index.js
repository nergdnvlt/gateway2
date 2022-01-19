const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
//needed to load env vars to be able to connect to Apollo Studio
require('dotenv').config();

const port = process.env.PORT // || 4000;


const gateway = new ApolloGateway({});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});
