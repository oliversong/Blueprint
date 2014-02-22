// Publish things you want to share with clients here

Meteor.publish('players', function(){
  return Players.find({});
});
