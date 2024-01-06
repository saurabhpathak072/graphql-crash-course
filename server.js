import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = ApolloServer({
    // typeDefs,
    // resolvers,
});

const {url} = await startStandaloneServer(server,{
    listen:{
        port: 4000
    }
});

console.log('====================================');
console.log("Server Ready at "+ url);
console.log('====================================');