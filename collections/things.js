Players = new Meteor.Collection("players");

Players.allow({
  update: yes,
  remove: yes
});
