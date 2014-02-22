Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [Meteor.subscribe('players')];
  }
});

Router.map(function(){
  this.route('landing', {
    path: '/'
  });
});
