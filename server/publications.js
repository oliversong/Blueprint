// Publish things you want to share with clients here

Meteor.publish('players', function(){
  return Players.find({});
});

Meteor.publish('chats', function(){
  return Chats.find({});
});

