const { events } = require('../data.json')
const Event = require('./Event')
const Mutation = require('./Mutation')
const Query = require('./Query')
const Subscription = require('./Subscription')

module.exports = {
  Query,
  Mutation,
  Subscription,

  User: {
    events: (parent) => events.filter((e) => e.user_id === parent.id)
  },
  Event
}
