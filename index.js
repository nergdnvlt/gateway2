const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
//needed to load env vars to be able to connect to Apollo Studio
require('dotenv').config();

const port = process.env.PORT // || 4000;
const APOLLO_KEY = process.env.APOLLO_KEY

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`);
}).catch(err => {console.error(err)});
