module.exports = `
  # User
  type User {
    id: ID!
    username: String!
    email: String!
    events: [Event!]
  }

  input CreateUserInput {
    username: String!
    email: String!
  }

  input UpdateUserInput {
    username: String
    email: String
  }

  # Event
  type Event {
    id: ID!
    title: String!
    desc: String
    date: String
    from: String
    to: String
    location_id: ID!
    location: Location!
    user_id: ID!
    user: User!
    participants: [Participant!]
  }

  input CreateEventInput {
    title: String!
    desc: String
    date: String
    from: String
    to: String
    location_id: ID!
    user_id: ID!
  }

  input UpdateEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: ID
    user_id: ID
  }

  # Location
  type Location {
    id: ID!
    name: String!
    desc: String
    lat: Float
    lng: Float
  }

  input CreateLocationInput {
    name: String!
    desc: String
    lat: Float
    lng: Float
  }

  input UpdateLocationInput {
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  # Participant
  type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
  }

  input CreateParticipantInput {
    user_id: ID!
    event_id: ID!
  }

  input UpdateParticipantInput {
    user_id: ID
    event_id: ID
  }

  type DeleteAllOutput {
    count: Int!
  }

  type Query {
    user(id: ID!): User!
    users: [User!]

    event(id: ID!): Event!
    events: [Event!]

    location(id: ID!): Location!
    locations: [Location!]

    participant(id: ID!): Participant!
    participants: [Participant!]
  }

  type Mutation {
    # User
    createUser(data: CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!): User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!

    # Event
    createEvent(data: CreateEventInput!): Event!
    updateEvent(id: ID!, data: UpdateEventInput!): Event!
    deleteEvent(id: ID!): Event!
    deleteAllEvents: DeleteAllOutput!

    # Location
    createLocation(data: CreateLocationInput!): Location!
    updateLocation(id: ID!, data: UpdateLocationInput!): Location!
    deleteLocation(id: ID!): Location!
    deleteAllLocations: DeleteAllOutput!

    # Participant
    createParticipant(data: CreateParticipantInput!): Participant!
    updateParticipant(id: ID!, data: UpdateParticipantInput!): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteAllParticipants: DeleteAllOutput!
  }

  type Subscription {
    userCreated: User!
    eventCreated: Event!
    participantAdded(event_id: ID): Participant!
  }
`
