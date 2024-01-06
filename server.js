import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import {typeDefs} from './schema.js'
import db from './_db.js'

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
        review(_, args){
            return db.reviews.find(rev=>rev.id === args.id);
        },
        game(_, args){
            return db.games.find(gam=>gam.id === args.id);
        },
        author(_, args){
            return db.authors.find(auth=>auth.id === args.id);
        },

    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const {url} = await startStandaloneServer(server,{
    listen:{
        port: 4000
    }
});

console.log('====================================');
console.log("Server Ready at "+ url);
console.log('====================================');