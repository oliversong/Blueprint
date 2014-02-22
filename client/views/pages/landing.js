Template.landing.helpers({
  players: function () {
    return Players.find({}, {sort: {score: -1, name: 1}});
  },

  selected_name: function () {
    var player = Players.findOne(Session.get("selected_player"));
    var ifExist = player && player.name;
    if(ifExist){
      return player.name;
    } else {
      return false;
    }
  }

});

Template.landing.events({
  'click input.inc': function () {
    Players.update(Session.get("selected_player"), {$inc: {score: 5}});
  }
});
