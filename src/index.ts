import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { resolvers } from './resolvers';
import * as dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT;

const typeDefs = gql(
  readFileSync(resolve(__dirname, './schema.graphql'), {
    encoding: 'utf-8',
  }),
);

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port })
  .then(({ url }) => {
    console.log("\u001B[42m\u001B[30m>-", " Started up ", "-<\u001B[0m\u001B[40m");
    console.log(`GQL Found on: ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
