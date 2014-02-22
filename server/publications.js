// Publish things you want to share with clients here

Meteor.publish('things', function(){
  return Things.find({});
});
