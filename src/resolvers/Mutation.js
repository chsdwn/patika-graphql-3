const { users, events, locations, participants } = require('../data.json')
const { createMutation, updateMutation, deleteMutation, deleteAllMutation } = require('../helpers')

module.exports = {
  // User
  createUser: (_, { data }, { pubsub }) => {
    const user = { id: users.length + 1, ...data }
    users.push(user)
    pubsub.publish('userCreated', { userCreated: user })

    return user
  },
  updateUser: (_, { id, data }) => updateMutation(users, id, data),
  deleteUser: (_, { id }) => deleteMutation(users, id),
  deleteAllUsers: () => deleteAllMutation(users),

  // Event
  createEvent: (_, { data }, { pubsub }) => {
    const event = { id: events.length + 1, ...data }
    events.push(event)
    pubsub.publish('eventCreated', { eventCreated: event })

    return event
  },
  updateEvent: (_, { id, data }) => updateMutation(events, id, data),
  deleteEvent: (_, { id }) => deleteMutation(events, id),
  deleteAllEvents: () => deleteAllMutation(events),

  // Location
  createLocation: (_, { data }) => createMutation(locations, data),
  updateLocation: (_, { id, data }) => updateMutation(locations, id, data),
  deleteLocation: (_, { id }) => deleteMutation(locations, id),
  deleteAllLocations: () => deleteAllMutation(locations),

  // Participant
  createParticipant: (_, { data }, { pubsub }) => {
    const participant = { id: participants.length + 1, ...data }
    participants.push(participant)
    pubsub.publish('participantAdded', { participantAdded: participant })

    return participant
  },
  updateParticipant: (_, { id, data }) => updateMutation(participants, id, data),
  deleteParticipant: (_, { id }) => deleteMutation(participants, id),
  deleteAllParticipants: () => deleteAllMutation(participants)
}
