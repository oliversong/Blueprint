Template.landing.helpers({
  greeting: function () {
    return "Welcome to Blueprint.";
  },
  // add more helpers here
});

Template.landing.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  },
  // add more events here
});
