Messages = new Meteor.Collection('messages');

Messages.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});