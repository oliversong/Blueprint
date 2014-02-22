Router.configure({
  layoutTemplate: 'layout',
  waitOn: function(){
    return [Meteor.subscribe('things')];
  }
});

Router.map(function(){
  this.route('landing', {
    path: '/'
  });
});
