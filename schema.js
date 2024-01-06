export const typeDefs = `#graphQL
type Game {
    id: ID!
    title: String!
    platform: [String!]!
    review:[Review!]
}

type Review {
    id: ID!
    rating: Int!
    content: String!
    author_id: ID!
    game_id: ID!
    game: Game!
    author: Author!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
    review:[Review!]
}

type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author] 
    author(id: ID!): Author
}

`