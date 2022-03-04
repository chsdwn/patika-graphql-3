const { users, events, locations, participants } = require('../data.json')

module.exports = {
  user: (_, args) => users.find((u) => u.id === Number(args.id)),
  users: () => users,

  event: (_, args) => events.find((e) => e.id === Number(args.id)),
  events: () => events,

  location: (_, args) => locations.find((l) => l.id === Number(args.id)),
  locations: () => locations,

  participant: (_, args) => participants.find((p) => p.id === Number(args.id)),
  participants: () => participants
}
