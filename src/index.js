const { GraphQLServer, PubSub } = require('graphql-yoga')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const pubsub = new PubSub()
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

server.start(() => {
  console.log('Server is running')
})
