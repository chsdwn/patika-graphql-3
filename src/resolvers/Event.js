const { users, locations, participants } = require('../data.json')

module.exports = {
  location: (parent) => locations.find((l) => l.id === parent.location_id),
  user: (parent) => users.find((u) => u.id === parent.user_id),
  participants: (parent) => participants.filter((p) => p.event_id === parent.id)
}
