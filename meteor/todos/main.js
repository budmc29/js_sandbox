Todos = new Mongo.Collection('todos');

if (Meteor.isClient) {
  import { Template } from 'meteor/templating';
  import { ReactiveVar } from 'meteor/reactive-var';

  import './main.html';

  Template.main.helpers({
    todos: function() {
      return Todos.find();
    }
  });
}

if (Meteor.isServer) {
  import { Meteor } from 'meteor/meteor';

  Meteor.startup(() => {
    // code to run on server at startup
  });
}
