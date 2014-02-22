Template.chat.helpers({
  'chats': function(){
    return Chats.find().fetch();
  }
});

Template.chat.events({
  'keypress': function(e){
    if(e.which == 13){
      // make a new chat
      Chats.insert({text: e.target.value});
      // clear the input
      $(e.target).val('');
    }
  }
});
