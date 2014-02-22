Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [Meteor.subscribe('players'), Meteor.subscribe('chats')];
  }
});

Router.map(function(){
  this.route('landing', {
    path: '/'
  });
});
